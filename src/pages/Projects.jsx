/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ChevronsRight } from "lucide-react";
import { Separator } from "@/components/ui/Separator";

const Projects = () => {
  return (
    <section className="flex flex-col items-center w-full gap-6 lg:gap-10 mt-24 mx-16">
      <div className="">
        <h3 className="font-semibold uppercase font-5xl">
          My Projects Showcase
        </h3>
        <p className=" text-left py-3 border-b-2">
          Explore the landscape of innovation and technology through my
          projects, each a testament to creative solutions and technical
          prowess.
        </p>
      </div>
      {/* <Separator className="my-4" /> */}
    </section>
  );
};

export default Projects;
