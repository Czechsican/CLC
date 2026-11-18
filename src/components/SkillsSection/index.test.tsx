import React from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import SkillSection from "./index";

vi.mock("./SkillSection.module.css", () => ({
  default: new Proxy({}, { get: (_t, prop) => prop }),
}));
vi.mock("./SkillCard/SkillCard.module.css", () => ({
  default: new Proxy({}, { get: (_t, prop) => prop }),
}));

const cards = [
  { title: "One", blurb: "first" },
  { title: "Two", blurb: "second" },
  { title: "Three", blurb: "third" },
];

const renderSection = () =>
  render(
    <SkillSection tab="Skills" cta="Go" title="Title" blurb="Blurb" skillCardData={cards} />,
  );

const getCard = (title: string) =>
  screen.getByRole("heading", { name: title }).closest("article") as HTMLElement;

/** Fake each card's position in the viewport: tops[i] is card i's top, each card is `height` tall. */
const positionCards = (tops: number[], height = 100) => {
  cards.forEach((c, i) => {
    getCard(c.title).getBoundingClientRect = () =>
      ({ top: tops[i], bottom: tops[i] + height, height }) as DOMRect;
  });
};

/** Fire a scroll event from #root-like scroller (non-bubbling, as in the real app) and flush rAF. */
const scrollTo = (tops: number[]) => {
  positionCards(tops);
  act(() => {
    const scroller = document.createElement("div");
    document.body.appendChild(scroller);
    scroller.dispatchEvent(new Event("scroll", { bubbles: false }));
    scroller.remove();
    vi.runAllTimers();
  });
};

// One live MediaQueryList-like object, mutated by setDesktop (as a real browser would do)
const mql = {
  matches: true,
  media: "",
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
};
const setDesktop = (matches: boolean) => {
  mql.matches = matches;
  window.matchMedia = vi.fn().mockReturnValue(mql) as unknown as typeof window.matchMedia;
};

describe("<SkillsSection /> active card", () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ["requestAnimationFrame", "cancelAnimationFrame"] });
    setDesktop(true);
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders all cards with none active initially", () => {
    renderSection();
    cards.forEach((c) => expect(getCard(c.title)).not.toHaveClass("active"));
  });

  it("marks the card spanning the top of the viewport as active", () => {
    renderSection();
    scrollTo([-50, 60, 170]);
    expect(getCard("One")).toHaveClass("active");
    expect(getCard("Two")).not.toHaveClass("active");
    expect(getCard("Three")).not.toHaveClass("active");
  });

  it("only one card is active at a time as the user scrolls", () => {
    renderSection();
    scrollTo([-50, 60, 170]);
    scrollTo([-160, -50, 60]);
    expect(getCard("One")).not.toHaveClass("active");
    expect(getCard("Two")).toHaveClass("active");
    expect(getCard("Three")).not.toHaveClass("active");
    expect(document.querySelectorAll("article.active")).toHaveLength(1);
  });

  it("treats a card whose top is exactly at the viewport top as active", () => {
    renderSection();
    scrollTo([-100, 0, 100]);
    expect(getCard("Two")).toHaveClass("active");
  });

  it("has no active card before the first card reaches the top", () => {
    renderSection();
    scrollTo([40, 150, 260]);
    cards.forEach((c) => expect(getCard(c.title)).not.toHaveClass("active"));
  });

  it("has no active card once every card has scrolled past the top", () => {
    renderSection();
    scrollTo([-50, 60, 170]);
    scrollTo([-400, -300, -200]);
    cards.forEach((c) => expect(getCard(c.title)).not.toHaveClass("active"));
  });

  it("reacts to scroll events from a nested scroller (capture phase)", () => {
    renderSection();
    positionCards([-50, 60, 170]);
    act(() => {
      // Non-bubbling scroll on an element, like #root scrolling in the real app
      document.body.dispatchEvent(new Event("scroll", { bubbles: false }));
      vi.runAllTimers();
    });
    expect(getCard("One")).toHaveClass("active");
  });

  it("never activates a card on smaller screens", () => {
    setDesktop(false);
    renderSection();
    scrollTo([-50, 60, 170]);
    cards.forEach((c) => expect(getCard(c.title)).not.toHaveClass("active"));
  });

  it("clears the active card when the viewport shrinks below desktop", () => {
    renderSection();
    scrollTo([-50, 60, 170]);
    expect(getCard("One")).toHaveClass("active");

    setDesktop(false);
    act(() => {
      window.dispatchEvent(new Event("resize"));
      vi.runAllTimers();
    });
    expect(getCard("One")).not.toHaveClass("active");
  });

  it("removes its listeners on unmount", () => {
    const remove = vi.spyOn(window, "removeEventListener");
    const { unmount } = renderSection();
    unmount();
    const removed = remove.mock.calls.map(([type]) => type);
    expect(removed).toContain("scroll");
    expect(removed).toContain("resize");
  });
});
