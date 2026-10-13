import type { Testimonial } from "../types";

const cdn = "https://cdn.prod.website-files.com/6ab444cd6bd580f36ff0c23c";
const img = `${cdn}/6ab444cd6bd580f36ff0c38b_testimonial-2`;

export const testimonial: Testimonial = {
  quote:
    "Cadence has helped us transform our business from a service provider to an advisory business. Aram has extraordinary insights into group dynamics during a period of change. My entire management team across Canada speaks highly of Aram’s capabilities and the value he brings to us as a team and individually. He has an exceptional ability to investigate and understand complex group dynamics and then transform that intelligence into a program for change. I value his advice and will continue to work with Cadence.",
  source: "Executive VP",
  sector: "Real Estate Management Sector",
  image: {
    src: `${img}.webp`,
    alt: "Woman in a blazer talks with a man over coffee in a relaxed coaching conversation",
    sizes: "(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px",
    srcSet: [500, 800, 1080, 1600]
      .map((w) => `${img}-p-${w}.webp ${w}w`)
      .concat(`${img}.webp 2000w`)
      .join(", "),
  },
};
