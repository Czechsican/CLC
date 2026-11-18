import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import TabSection from "./index";
import { tabItems } from "../../content";

// jsdom applies no CSS, so every panel is in the DOM; "active" is exposed via data-active.
const activePanel = () =>
  screen.getAllByRole("tabpanel", { hidden: true }).filter((p) => p.dataset.active === "true");

describe("<TabSection />", () => {
  it("renders one tab and one panel per item, with a single selected tab", () => {
    render(<TabSection />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(tabItems.length);
    expect(tabs.filter((t) => t.getAttribute("aria-selected") === "true")).toHaveLength(1);
    expect(screen.getAllByRole("tabpanel", { hidden: true })).toHaveLength(tabItems.length);
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
  });

  it("only the active tab is in the tab order", () => {
    render(<TabSection />);
    const [first, second] = screen.getAllByRole("tab");
    expect(first).toHaveAttribute("tabindex", "0");
    expect(second).toHaveAttribute("tabindex", "-1");
  });

  it("switches the active panel on click and links tab to panel", () => {
    render(<TabSection />);
    const tab = screen.getByRole("tab", { name: "courses" });
    fireEvent.click(tab);
    expect(tab).toHaveAttribute("aria-selected", "true");
    const panels = activePanel();
    expect(panels).toHaveLength(1);
    expect(panels[0]).toHaveAttribute("aria-labelledby", tab.id);
    expect(tab).toHaveAttribute("aria-controls", panels[0].id);
  });

  it("is not coupled to the visible label: ids come from the data's id", () => {
    render(<TabSection />);
    const tab = screen.getByRole("tab", { name: "360 Assessments" });
    expect(tab.id).toBe("tab-assessments");
    expect(tab).toHaveAttribute("aria-controls", "tabpanel-assessments");
  });

  it("arrow keys move and wrap, Home/End jump, and focus follows", () => {
    render(<TabSection />);
    const list = screen.getByRole("tablist");
    const selected = () => screen.getByRole("tab", { selected: true }).textContent;

    fireEvent.keyDown(list, { key: "ArrowRight" });
    expect(selected()).toBe("courses");
    expect(screen.getByRole("tab", { name: "courses" })).toHaveFocus();

    fireEvent.keyDown(list, { key: "End" });
    expect(selected()).toBe("speaking");

    fireEvent.keyDown(list, { key: "ArrowRight" });
    expect(selected()).toBe("coaching");

    fireEvent.keyDown(list, { key: "ArrowLeft" });
    expect(selected()).toBe("speaking");

    fireEvent.keyDown(list, { key: "Home" });
    expect(selected()).toBe("coaching");
  });

  it("renders item images as decorative, lazy and sized", () => {
    const { container } = render(<TabSection />);
    const img = container.querySelector("img")!;
    expect(img).toHaveAttribute("alt", "");
    expect(img).toHaveAttribute("loading", "lazy");
    expect(img).toHaveAttribute("width");
    expect(img).toHaveAttribute("height");
  });
});

describe("<TabSection /> mobile images", () => {
  it("hides every item's image on mobile except the first", () => {
    const { container } = render(<TabSection />);
    const imgs = [...container.querySelectorAll("img")];
    expect(imgs).toHaveLength(tabItems.length);
    imgs.forEach((img, i) => {
      expect(img.className.includes("hideOnMobile")).toBe(i !== 0);
    });
  });
});
