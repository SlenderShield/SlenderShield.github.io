/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronsRight } from "lucide-react";
import { Separator } from "./ui/Separator";
import ProjectCard from "./project/ProjectCard";

const projects = [
  {
    mainImage: "https://example.com/image1.jpg",
    title: "Project Alpha",
    status: "completed",
    href: "https://example.com/project-alpha",
    source: "GitHub",
    description: "A web application for managing tasks effectively.",
    tech: ["React", "Node.js", "MongoDB"],
    slug: "project-alpha",
    date: "2025-01-01",
  },
  {
    mainImage: "https://example.com/image2.jpg",
    title: "Project Beta",
    status: "ongoing",
    href: "https://example.com/project-beta",
    source: "GitHub",
    description: "A real-time chat application with end-to-end encryption.",
    tech: ["Next.js", "Socket.io", "PostgreSQL"],
    slug: "project-beta",
    date: "2024-12-20",
  },
  // {
  //     mainImage: "https://example.com/image3.jpg",
  //     title: "Project Gamma",
  //     status: "ongoing",
  //     href: "https://example.com/project-gamma",
  //     source: "GitHub",
  //     description: "An AI-powered personal assistant application.",
  //     tech: ["Python", "TensorFlow", "Flask"],
  //     slug: "project-gamma",
  //     date: "2025-02-15"
  // },
  // {
  //     mainImage: "https://example.com/image4.jpg",
  //     title: "Project Delta",
  //     status: "ongoing",
  //     href: "https://example.com/project-delta",
  //     source: "GitHub",
  //     description: "A platform for streaming and sharing videos.",
  //     tech: ["Angular", "Firebase", "Express.js"],
  //     slug: "project-delta",
  //     date: "2023-11-10"
  // },
  // {
  //     mainImage: "https://example.com/image5.jpg",
  //     title: "Project Epsilon",
  //     status: "completed",
  //     href: "https://example.com/project-epsilon",
  //     source: "GitHub",
  //     description: "A blockchain-based decentralized marketplace.",
  //     tech: ["Solidity", "React", "Ethereum"],
  //     slug: "project-epsilon",
  //     date: "2024-06-30"
  // }
];

const Section = ({ sectionTitle, link, sectionSubtitle }) => {
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    projects.length == 0 ? setIsEmpty(true) : setIsEmpty(false);
  }, []);
  return (
    <section className="flex  flex-col items-center w-full gap-6 lg:gap-10 mt-10">
      <div className="w-full">
        <div className="flex items-center justify-between font-semibold mx-16">
          <h3 className="uppercase font-3xl">{sectionTitle}</h3>
          <Link
            to={link}
            className="text-link group relative inline-flex justify-center items-center transition-all duration-300 tracking-wide hover:tracking-wider"
          >
            <span className="relative uppercase">
              {sectionSubtitle}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </span>
            <ChevronsRight className="transition-all duration-300 opacity-0 transform translate-x-0 group-hover:opacity-100 group-hover:translate-x-1" />
          </Link>
        </div>
        <p className="mx-16 text-left py-3 border-b-2">
          {" "}
          A curated selection of standout projects, demonstrating innovative
          solutions and creative excellence.
        </p>
      </div>

      {isEmpty ? (
        <div>
          <h2>No Featured Projects</h2>
          <p>
            &quot;Stay tuned! I&apos;am preparing to showcase exciting projects
            here. Check back soon to explore my featured innovations.&quot;
          </p>
        </div>
      ) : (
        <div className="py-12 grid place-items-center grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.href}
              project={project}
              index={idx}
              featured={true}
            />
          ))}
        </div>
      )}
      <Separator className="my-4" />
    </section>
  );
};

export default Section;
