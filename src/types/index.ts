export type ButtonStyle = "primary" | "secondary" | "tertiary" | "accent" | "dark";

export interface ButtonProps {
  type?: "button" | "link";
  btnText?: string;
  linkVal?: string;
  style?: ButtonStyle;
}

export interface CornerTabProps {
  tabText?: string;
  marginBottom?: boolean;
  darkbg?: boolean;
  altColor?: boolean;
  whiteText?: boolean;
}

export interface Stat {
  number: number;
  title: string;
}

export interface SkillCardData {
  title: string;
  blurb: string;
  icon?: string;
}

export interface SkillsSectionProps {
  tab: string;
  cta: string;
  title: string;
  blurb: string;
  skillCardData: SkillCardData[];
}

export interface TabInfo {
  value: string;
}

export interface TabItemData {
  heading: string;
  blurb: string;
  listItems: string[];
  image: string;
  ctaText: string;
  ctaLink?: string;
}

export interface TabProps {
  value: string;
  setActive: (value: string) => void;
  active?: boolean;
}

export interface TeamMember {
  name: string;
  position: string;
  imgSrc: string;
}

export interface ResponsiveImage {
  src?: string;
  alt: string;
  sizes?: string;
  srcSet?: string;
}

export interface NavLink {
  label: string;
  to: string;
}

export interface HomeHero {
  heading: { text: string; highlight: string };
  body: string;
  primaryCta: string;
  secondaryCta: string;
  image: ResponsiveImage;
}

export interface ServicesIntro {
  tab: string;
  heading: string;
  body: string;
}

export interface AssessmentsContent {
  tab: string;
  title: string;
  body: string;
  cta: string;
}

export interface TeamSectionContent {
  tab: string;
  title: string;
  body: string;
  cta: string;
}

export interface Testimonial {
  quote: string;
  source: string;
  sector: string;
  image: ResponsiveImage;
}
