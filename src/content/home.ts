import type {
  AssessmentsContent,
  HomeHero,
  SkillsSectionProps,
  Stat,
} from "../types";

const cdn = "https://cdn.prod.website-files.com/6ab444cd6bd580f36ff0c23c";
const hero = `${cdn}/6ab444cd6bd580f36ff0c36a_home-hero`;

export const homeHero: HomeHero = {
  heading: { text: "Leadership development with a ", highlight: "genuine point of view." },
  body: "Cadence partners with senior leaders and their teams to build the capability that organizations depend on. Our approach is grounded in applied psychology - direct, rigorous, and designed to create change that lasts beyond the engatement",
  primaryCta: "Work With Us",
  secondaryCta: "Our Approach",
  image: {
    alt: "Aram",
    sizes: "(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px",
    srcSet: [500, 800, 1080, 1600, 2000]
      .map((w) => `${hero}-p-${w}.webp ${w}w`)
      .concat(`${hero}.webp 2400w`)
      .join(", "),
  },
};

export const stats: Stat[] = [
  { number: 10, title: "Years in practice" },
  { number: 1300, title: "Leaders coached" },
  { number: 500, title: "Courses taught" },
];

export const skills: SkillsSectionProps = {
  tab: "What Makes Cadence Different",
  cta: "Our Approach",
  title: "We don't offer a catalogue. We build a tailored approach.",
  blurb:
    "Tailored to the leader, the team, and the real situation. Psychology-based. Direct Built for change that holds after the engagement ends.",
  skillCardData: [
    {
      title: "Leadership Skills",
      blurb:
        "Sound judgment, clear decisions under pressure, and the self-awareness to catch blind spots early. This is where we work on how a leader thinks — the foundation everything else is built on.",
    },
    {
      title: "Communication Skills",
      blurb:
        "How a leader shows up in the room: direct conversations, messages that land as intended, and communication that remains effective under pressure. Practical, not theoretical.",
    },
    {
      title: "Workplace Well-Being Skills",
      blurb:
        "Sustainable performance for leaders and their teams — concrete skills for pacing demanding work, staying resilient, and building a bench that endures over time.",
    },
  ],
};

export const assessments: AssessmentsContent = {
  tab: "360 Assessments",
  title: "The 360 as a strategic investment, not a checkbox.",
  body: "Cadence's 360 process is built to go deeper than most. Leaders consistently describe it as more revealing — and more useful — than assessments they've experienced before. Every engagement reaches the full circle of people around a leader, which means the impact extends well beyond the individual.",
  cta: "How Our 360 Works",
};
