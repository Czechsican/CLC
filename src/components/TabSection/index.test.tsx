import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import TabSection from "./index";

const setViewport = (mobile: boolean) => {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: mobile,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })) as unknown as typeof window.matchMedia;
};

describe("<TabSection /> desktop", () => {
  beforeEach(() => setViewport(false));

  it("exposes a tablist with one selected tab", () => {
    render(<TabSection />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(4);
    expect(tabs.filter((t) => t.getAttribute("aria-selected") === "true")).toHaveLength(1);
    expect(screen.getByRole("tab", { name: "coaching" })).toHaveAttribute("aria-selected", "true");
  });

  it("only the active tab is in the tab order", () => {
    render(<TabSection />);
    expect(screen.getByRole("tab", { name: "coaching" })).toHaveAttribute("tabindex", "0");
    expect(screen.getByRole("tab", { name: "courses" })).toHaveAttribute("tabindex", "-1");
  });

  it("switches the panel on click and links tab to panel", () => {
    render(<TabSection />);
    fireEvent.click(screen.getByRole("tab", { name: "courses" }));
    const panel = screen.getByRole("tabpanel");
    expect(panel).toHaveAttribute("aria-labelledby", screen.getByRole("tab", { name: "courses" }).id);
    expect(screen.getByRole("tab", { name: "courses" })).toHaveAttribute("aria-controls", panel.id);
    expect(screen.getByRole("heading", { name: "courses" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "coaching" })).not.toBeInTheDocument();
  });

  it("arrow keys move and wrap, Home/End jump, and focus follows", () => {
    render(<TabSection />);
    const list = screen.getByRole("tablist");
    fireEvent.keyDown(list, { key: "ArrowRight" });
    expect(screen.getByRole("tab", { name: "courses" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tab", { name: "courses" })).toHaveFocus();

    fireEvent.keyDown(list, { key: "End" });
    expect(screen.getByRole("tab", { name: "speaking" })).toHaveAttribute("aria-selected", "true");

    fireEvent.keyDown(list, { key: "ArrowRight" });
    expect(screen.getByRole("tab", { name: "coaching" })).toHaveAttribute("aria-selected", "true");

    fireEvent.keyDown(list, { key: "ArrowLeft" });
    expect(screen.getByRole("tab", { name: "speaking" })).toHaveAttribute("aria-selected", "true");

    fireEvent.keyDown(list, { key: "Home" });
    expect(screen.getByRole("tab", { name: "coaching" })).toHaveAttribute("aria-selected", "true");
  });
});

describe("<TabSection /> mobile", () => {
  it("shows every item and no tablist", () => {
    setViewport(true);
    render(<TabSection />);
    expect(screen.queryByRole("tablist")).not.toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(4);
  });
});
