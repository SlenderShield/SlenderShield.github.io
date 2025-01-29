import HomeSection from "@/components/HomeSection";
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
    <>
      <HomeSection
        icon={<HiOutlineStar />}
        title="Featured Projects"
        ctaText="See all projects"
        ctaLink="/projects"
        subtitle="A curated selection of standout projects, demonstrating innovative
          solutions and creative excellence."
      >
        {projects.map((project) => (
          <ProjectCard
            project={project}
            key={project.index}
            featured={project.featured}
          />
        ))}
      </HomeSection>
    </>
  );
};

export default ProjectSection;
