/* eslint-disable react/prop-types */
import { Presentation } from "lucide-react";

import Section from "@/components/Section";
import ProjectCard from "@/components/project/ProjectCard";
import { PROJECTS } from "@/lib/Constants";

let projects = PROJECTS.sort((a, b) => {
  if (a.featured && !b.featured) {
    return -1; // a is featured, b is not, a comes first
  }
  if (!a.featured && b.featured) {
    return 1; // b is featured, a is not, b comes first
  }
  // Both are featured or neither is featured, sort by date
  return new Date(b.date) - new Date(a.date); // Sort by date descending (newest first)
});

const Projects = () => {
  return (
    <Section
      Icon={Presentation}
      title="Personal Explorations"
      subtitle="A glimpse into my personal projects, where I blend technical skills with a passion for building innovative solutions."
      columns={2}>
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

export default Projects;
