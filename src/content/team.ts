import type { TeamMember, TeamSectionContent } from "../types";

const cdn = "https://cdn.prod.website-files.com/6ab444cd6bd580f36ff0c239";

export const teamSection: TeamSectionContent = {
  tab: "MEET OUR TEAM",
  title:
    "A team built for depth, not just a founder with a roster behind the curtain.",
  body: "Cadence's 360 process is built to go deeper than most. Leaders consistently describe it as more revealing — and more useful — than assessments they've experienced before. Every engagement reaches the full circle of people around a leader, which means the impact extends well beyond the individual.",
  cta: "Meet Our Team",
};

const members: TeamMember[] = [
  {
    name: "Aram Arslanian",
    position: "President & CEO",
    imgSrc: `${cdn}/6ab444cd6bd580f36ff0c4d6_aram.webp`,
  },
  {
    name: "Michelle Winklaar",
    position: "Senior Vice President, Coaching & Development",
    imgSrc: `${cdn}/6ab444cd6bd580f36ff0c4d7_michelle-w.webp`,
  },
  {
    name: "Michelle Rakshys",
    position: "VP",
    imgSrc: `${cdn}/6ab444cd6bd580f36ff0c4d8_michelle-r-p-800.webp`,
  },
  {
    name: "Michayla Dixon",
    position: "Senior Vice President, Coaching & Development",
    imgSrc: `${cdn}/6ab444cd6bd580f36ff0c596_michayla.png`,
  },
];

// Listed twice to fill the scrolling rail (placeholder data).
export const teamMembers: TeamMember[] = [...members, ...members];
