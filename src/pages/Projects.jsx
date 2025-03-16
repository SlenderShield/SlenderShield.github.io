/* eslint-disable react/prop-types */
import { Presentation } from "lucide-react";
import Section from "@/components/Section";
import ProjectCard from "@/components/project/ProjectCard";
import Check from "@/components/Check";
// import Pagination from "@/components/Pagination";

let projects = [
  {
    index: 1,
    mainImage: "https://github.com/slendershield.png",
    title: "Project Alpha",
    status: "completed",
    href: "https://example.com/project-alpha",
    source: "GitHub",
    description: "A web application for managing tasks effectively.",
    tech: ["React", "Node.js", "MongoDB"],
    slug: "project-alpha",
    date: "2025-01-01",
    featured: true,
  },
  {
    index: 2,
    mainImage: "https://github.com/slendershield.png",
    title: "Project Beta",
    status: "completed",
    href: "https://example.com/project-beta",
    source: "GitHub",
    description: "A real-time chat application with end-to-end encryption.",
    tech: ["Next.js", "Socket.io", "PostgreSQL"],
    slug: "project-beta",
    date: "2024-12-20",
    featured: true,
  },
  {
    index: 3,
    mainImage: "https://github.com/slendershield.png",
    title: "Project Gamma",
    status: "completed",
    href: "https://example.com/project-gamma",
    source: "GitHub",
    description: "An e-commerce platform with user authentication and payment integration.",
    tech: ["React", "Redux", "Stripe API", "Firebase"],
    slug: "project-gamma",
    date: "2024-11-15",
    featured: true,
  },
  {
    index: 4,
    mainImage: "https://github.com/slendershield.png",
    title: "Project Delta",
    status: "completed",
    href: "https://example.com/project-delta",
    source: "GitHub",
    description: "A personal finance tracker with budget planning and expense categorization.",
    tech: ["Vue.js", "Node.js", "MongoDB"],
    slug: "project-delta",
    date: "2024-10-10",
    featured: false,
  },
  {
    index: 5,
    mainImage: "https://github.com/slendershield.png",
    title: "Project Epsilon",
    status: "completed",
    href: "https://example.com/project-epsilon",
    source: "GitHub",
    description: "A weather forecasting application using a public API.",
    tech: ["Next.js", "TypeScript", "OpenWeather API"],
    slug: "project-epsilon",
    date: "2024-09-25",
    featured: true,
  },
  {
    index: 6,
    mainImage: "https://github.com/slendershield.png",
    title: "Project Zeta",
    status: "completed",
    href: "https://example.com/project-zeta",
    source: "GitHub",
    description: "A blogging platform with Markdown support and SEO optimization.",
    tech: ["Gatsby", "GraphQL", "MongoDB"],
    slug: "project-zeta",
    date: "2024-08-15",
    featured: true,
  },
  {
    index: 7,
    mainImage: "https://github.com/slendershield.png",
    title: "Project Eta",
    status: "completed",
    href: "https://example.com/project-eta",
    source: "GitHub",
    description: "A recipe management app with ingredient tracking and meal planning.",
    tech: ["Angular", "Firebase", "Express"],
    slug: "project-eta",
    date: "2024-07-05",
    featured: false,
  },
  {
    index: 8,
    mainImage: "https://github.com/slendershield.png",
    title: "Project Theta",
    status: "completed",
    href: "https://example.com/project-theta",
    source: "GitHub",
    description: "A social media platform for sharing code snippets and projects.",
    tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    slug: "project-theta",
    date: "2024-06-20",
    featured: true,
  },
  {
    index: 9,
    mainImage: "https://github.com/slendershield.png",
    title: "Project Iota",
    status: "completed",
    href: "https://example.com/project-iota",
    source: "GitHub",
    description: "A real-time stock market monitoring and prediction app.",
    tech: ["Next.js", "Python", "Pandas", "Flask"],
    slug: "project-iota",
    date: "2024-05-10",
    featured: false,
  },
  {
    index: 10,
    mainImage: "https://github.com/slendershield.png",
    title: "Project Kappa",
    status: "completed",
    href: "https://example.com/project-kappa",
    source: "GitHub",
    description: "A health and fitness tracking application with personalized plans.",
    tech: ["React Native", "Redux", "Firebase"],
    slug: "project-kappa",
    date: "2024-04-12",
    featured: true,
  },
  {
    index: 11,
    mainImage: "https://github.com/slendershield.png",
    title: "Project Lambda",
    status: "completed",
    href: "https://example.com/project-lambda",
    source: "GitHub",
    description: "A collaborative whiteboard application with real-time drawing capabilities.",
    tech: ["Vue.js", "Node.js", "WebSockets"],
    slug: "project-lambda",
    date: "2024-03-30",
    featured: false,
  },
  {
    index: 12,
    mainImage: "https://github.com/slendershield.png",
    title: "Project Mu",
    status: "completed",
    href: "https://example.com/project-mu",
    source: "GitHub",
    description: "A task automation tool for repetitive browser-based workflows.",
    tech: ["Puppeteer", "Node.js", "JavaScript"],
    slug: "project-mu",
    date: "2024-02-18",
    featured: true,
  }
];

// projects = projects.sort((a, b) => a.featured - b.featured)

const Projects = () => {
  return (
    <Section
      Icon={Presentation}
      title="Featured Projects"
      subtitle="Experience the power of innovation through these carefully selected projects, showcasing the commitment to excellence.">
      {projects.map((project) => (
        <ProjectCard
          project={project}
          key={project.index}
          featured={project.featured}
        />
      ))}
      <Check />
    </Section>
  );
};

export default Projects;
