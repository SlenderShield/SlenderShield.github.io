export interface SocialLink {
  label: string;
  href: string;
}

export interface ContentBlock {
  type: "text" | "image" | "code" | "youtube" | "quote" | "mermaid" | "link";
  value: string; // text content, image URL, code snippet, or youtube ID
  caption?: string; // for images or video
  language?: string; // for code blocks
  href?: string; // for external social links
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  outcome: string;
  featured?: boolean;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
  template?: "case-study" | "tech-deep-dive" | "gallery";
  sections?: { title: string; blocks: ContentBlock[] }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string[];
  tech: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  publishedOn: string;
  tags: string[];
  readMinutes: number;
  body: string[];
  template?: "story" | "tech" | "photo-essay" | "video-focus" | "minimal";
  blocks?: ContentBlock[];
  coverImage?: string;
}

export interface SiteContent {
  name: string;
  headline: string;
  subheadline: string;
  intro: string;
  location: string;
  resumeUrl: string;
  contactEmail: string;
  socialLinks: SocialLink[];
  about: string[];
  skills: string[];
  experience: ExperienceItem[];
  fastFacts: string[];
}
