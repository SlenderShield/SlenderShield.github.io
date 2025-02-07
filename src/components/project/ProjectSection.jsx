import Section from "@/components/Section";
import { HiOutlineStar } from "react-icons/hi2";
import ProjectCard from "./ProjectCard";

const projects = [
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
];

const ProjectSection = () => {
  return (
    <Section
      Icon={HiOutlineStar}
      title="Featured Projects"
      ctaText="See all projects"
      ctaLink="/projects"
      subtitle="Experience the power of innovation through these carefully selected projects, showcasing our commitment to excellence."
    >
      {projects.map((project) => (
        <ProjectCard
          project={project}
          key={project.index}
          featured={project.featured}
        />
      ))}
    </Section>
  );
};

export default ProjectSection;
