export type Locale = "es" | "en";

export type SectionKey = "inicio" | "experiencia" | "beerfinder" | "stack" | "formacion" | "contacto";

export interface Stat {
  value: string;
  label: string;
}

export interface Job {
  company: string;
  role: string;
  place: string;
  period: string;
  summary: string;
  groups: { title: string; bullets: string[] }[];
  tech: string[];
}

export interface SiteContent {
  meta: { title: string; description: string };
  sectionIds: Record<SectionKey, string>;
  nav: { items: { key: SectionKey; label: string }[]; langLabel: string; menuLabel: string };
  cvHref: string;
  hero: {
    kicker: string;
    titleBefore: string;
    titleEmphasis: string;
    titleAfter: string;
    subtitle: string;
    ctaCv: string;
    ctaLinkedin: string;
    ctaGithub: string;
    stats: Stat[];
  };
  experience: { kicker: string; title: string; jobs: Job[] };
  project: {
    kicker: string;
    title: string;
    tagline: string;
    description: string;
    ctaAppStore: string;
    ctaPlay: string;
    ctaWeb: string;
    archTitle: string;
    arch: { app: string; edge: string; api: string; data: string; push: string };
    tech: string[];
    screenshotsAlt: string[];
  };
  stack: { kicker: string; title: string; groups: { label: string; items: string[] }[] };
  education: { kicker: string; title: string; items: { title: string; detail: string }[] };
  contact: { kicker: string; title: string; text: string; location: string; terminalNote: string };
}
