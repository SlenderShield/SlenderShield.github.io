import type { SiteContent } from '../types/content'

export const siteContent: SiteContent = {
  name: 'Your Name',
  headline: 'Frontend Engineer Building Reliable Product Experiences',
  subheadline:
    'I design and ship clean, performant web interfaces that help teams launch faster and convert better.',
  intro:
    'I work across product strategy, design collaboration, and implementation. I care about usability, maintainability, and measurable outcomes.',
  location: 'Based in India',
  resumeUrl: '/resume.pdf',
  contactEmail: 'hello@example.com',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/your-handle' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/your-handle' },
    { label: 'X', href: 'https://x.com/your-handle' },
  ],
  about: [
    'I am a developer focused on crafting interfaces that feel simple to users while staying scalable for teams.',
    'My current focus is modern React architecture, performance optimization, and shipping product features with clear business impact.',
  ],
  skills: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'REST APIs',
    'PostgreSQL',
    'Testing',
    'CI/CD',
    'UI Engineering',
    'Accessibility',
  ],
  experience: [
    {
      role: 'Frontend Engineer',
      company: 'Product Studio',
      period: '2024 - Present',
      summary:
        'Own feature delivery for customer-facing applications, partnering with design and backend teams from discovery through release.',
    },
    {
      role: 'Full Stack Developer',
      company: 'Growth Startup',
      period: '2022 - 2024',
      summary:
        'Built internal tooling and marketing experiences, improving release speed with stronger component standards and testing.',
    },
  ],
}
