import { Presentation } from "lucide-react";

import ProjectCard from "@/components/project/ProjectCard";
import Section from "@/components/Section";
import { PROJECTS } from "@/lib/Constants"

const ProjectSection = () => {
  return (
    <Section
      Icon={Presentation}
      title="Featured Projects"
      ctaText="View Full Portfolio"
      ctaLink="/projects"
      subtitle="A curated selection showcasing my expertise and dedication to crafting high-quality projects."
    >
      {PROJECTS.map((project) => (
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
