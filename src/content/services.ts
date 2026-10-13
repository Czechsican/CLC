import type { ServicesIntro, TabInfo, TabItemData } from "../types";

const cdn = "https://cdn.prod.website-files.com/6ab444cd6bd580f36ff0c23c";

export const servicesIntro: ServicesIntro = {
  tab: "what we do",
  heading: "What we offer — and how it works together.",
  body: "Coaching, team development, 360 assessments, and speaking. Each service is effective on its own. Together, they compound — and that's intentional.",
};

export const tabInfo: TabInfo[] = [
  { value: "coaching" },
  { value: "courses" },
  { value: "360 Assessments" },
  { value: "speaking" },
];

export const tabItems: TabItemData[] = [
  {
    heading: "coaching",
    blurb:
      "Coaches who take an active role — closer to a personal trainer than a conversation partner. We push, challenge, and hold leaders accountable on both how they think and what they do, while building a deep and trusting relationship.",
    listItems: [
      "A defined arc, from intake through accountability",
      "Mindset and skills worked together, not treated separately",
      "Relationships built for the long term, not a single engagement",
    ],
    image: `${cdn}/6ab444cd6bd580f36ff0c394_coaching-menu-2-p-1080.webp`,
    ctaText: "Explore Coaching",
  },
  {
    heading: "courses",
    blurb:
      "Corporate training built around a small number of areas we know well — not a sprawling catalogue. Practical skills a team can put to use right away.",
    listItems: [
      "Focused on a areas of real expertise, driven by psychology",
      "Custom courses built around a specific gap, using real-world scenarios",
      "Delivered on-site or virtually by an expert",
    ],
    image: `${cdn}/6ab444cd6bd580f36ff0c36c_course-menu.webp`,
    ctaText: "Explore Courses & Training",
  },
  {
    heading: "360 Assessments",
    blurb:
      "A process that goes deeper than most — reaching peers, direct reports, and the people a leader works with every day. Every 360 opens more doors than it starts with.",
    listItems: [
      "Reaches a wide circle of voices, not just a manager's view",
      "A proactive step ahead of a transition, not a fix for something broken",
      "A data-driven start to a coaching engagement",
    ],
    image: `${cdn}/6ab444cd6bd580f36ff0c36f_360-menu.webp`,
    ctaText: "Explore 360 Assessments",
  },
  {
    heading: "speaking",
    blurb:
      "Cadence coaches speak at events, offsites, and team sessions — on the same topics we work on with clients every day. Real perspective, not a rehearsed keynote.",
    listItems: [
      "Delivered by working coaches, not professional speakers reading a deck",
      "Built around topics of expertise, driven by research",
      "Right for conferences, offsites, and internal team sessions alike",
    ],
    image: `${cdn}/6ab444cd6bd580f36ff0c395_speaking-menu-2.webp`,
    ctaText: "Explore Speakers",
  },
];
