import MajorSection from "@/components/MajorSection";
import { HiOutlineStar } from "react-icons/hi2";
import { Separator } from "../ui/Separator";
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
      <MajorSection
        icon={<HiOutlineStar />}
        title="Featured Projects"
        sectionCTA="See all projects"
        linkCTA="/projects"
        subtitle="A curated selection of standout projects, demonstrating innovative
          solutions and creative excellence."
      >
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 ">
          {projects.map((project) => (
            <ProjectCard
              project={project}
              key={project.index}
              featured={project.featured}
            />
          ))}
        </div>
      </MajorSection>
      <Separator className="my-24" />
    </>
  );
};

export default ProjectSection;
