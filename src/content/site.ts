import type { NavLink } from "../types";

export const nav: NavLink[] = [
  { label: "Coaching", to: "/about" },
  { label: "Courses & Training", to: "/kits" },
  { label: "360 Assessment", to: "/srk" },
  { label: "About", to: "/ordering" },
];

export const headerCta: { label: string } = { label: "Work With Us" };

export const footer: { text: string } = {
  text: "Footer Content",
};

export const notFound: { heading: string } = {
  heading: "404 - NOT FOUND",
};

export const about: { heading: string } = {
  heading: "About Page",
};
