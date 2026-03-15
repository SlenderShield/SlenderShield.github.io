export interface SocialLink {
  label: string
  href: string
}

export interface Project {
  slug: string
  title: string
  description: string
  category: string
  year: string
  outcome: string
  featured?: boolean
  stack: string[]
  liveUrl: string
  repoUrl: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  summary: string[]
  tech: string[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  publishedOn: string
  tags: string[]
  readMinutes: number
  body: string[]
}

export interface SiteContent {
  name: string
  headline: string
  subheadline: string
  intro: string
  location: string
  resumeUrl: string
  contactEmail: string
  socialLinks: SocialLink[]
  about: string[]
  skills: string[]
  experience: ExperienceItem[]
  fastFacts: string[]
}
