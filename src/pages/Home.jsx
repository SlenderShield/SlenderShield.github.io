/* eslint-disable react/prop-types */
import SocialLinks from "@/components/SocialLinks";
import { Separator } from "@/components/ui/Separator";
import ProjectSection from "@/components/project/ProjectSection";
import BlogSection from "@/components/blog/BlogSection";
import { Button } from "@/components/ui/Button";

import ExpericenceSection from "@/components/experience/ExpericenceSection";

const Home = () => {
  return (
    <div className="mt-24  sm:mt-32">
      <div className="text-center text-lg p-4 animate-fade-in ">
        <div className="flex flex-col items-center justify-center gap-8 mb-52">
          <h1 className="text-2xl font-bold md:text-6xl">
            Hey I&apos;m Muralidhara Bhat!
          </h1>
          <h2 className="text-1xl font-bold md:text-4xl">
            Welcome to my slice of the web
          </h2>

          <p className="text-paragraph max-w-2xl leading-relaxed text-sm sm:text-base ">
            I&apos;m a senior frontend developer and blogger based in Guatemala,
            aiming to leave a lasting impression and drive innovation in the
            ever-evolving world of software development.
          </p>

          <SocialLinks />
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <Button className="w-60" variant="default">Projects</Button>
            <Button className="w-60" variant="outline">Get In Touch</Button>
          </div>
        </div>

        <Separator className="my-24" />
        <ProjectSection />
        <Separator className="my-10" />
        <ExpericenceSection />
        <Separator className="my-8" />
        <BlogSection />
      </div>
    </div>
  );
};

export default Home;
