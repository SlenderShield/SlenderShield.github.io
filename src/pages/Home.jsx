/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import ProjectSection from "@/components/project/ProjectSection";
import BlogSection from "@/components/blog/BlogSection";
import ExpericenceSection from "@/components/experience/ExpericenceSection";
import SocialLinks from "@/components/SocialLinks";

import BlurText from "@/components/ui/BlurText";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <main className="flex-1 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-8 py-16 md:py-24">
            <h1 className="font-bold text-center text-3xl md:text-6xl animate-gradient">
              <BlurText
                text="Hey I&apos;m Muralidhara Bhat!"
                delay={50}
                animateBy="words"
                direction="top"
              />
            </h1>
            <h2 className="flex flex-col gap-2 text-xl md:text-4xl font-bold text-center">
              <span className="text-base">Exploring Tech, One Project at a Time.</span>
              <div className="flex justify-center items-center gap-3">
                <span className="text-blue-400">Code.</span>
                <span className="text-purple-400">Create.</span>
                <span className="text-pink-400">Innovate.</span>
              </div>
            </h2>
            <div className="text-left">
              <p className="text-base md:text-lg max-w-2xl text-center leading-relaxed opacity-80">
                I&apos;m a skilled Software Engineer from India with over two years of experience in software and web development.
                Proficient in Java and C++, I have a strong interest in system design and building scalable applications.</p>
              <p className="text-base md:text-lg max-w-2xl text-center leading-relaxed opacity-80">Passionate about innovation and problem-solving, I continuously explore new technologies to enhance my expertise in the field.
              </p>
            </div>
            <div className="p-3 px-6 rounded-full  dark:bg-gray-800/40 backdrop-blur-sm border dark:border-gray-700">
              <SocialLinks />
            </div>

            {/* <SocialLinks /> */}
            <div className="flex flex-col md:flex-row gap-4">
              <Link to='/projects'>
                <Button size="lg" className="min-w-48 bg-blue-600 hover:bg-blue-700 text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-800 font-bold">
                  Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="min-w-48">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Separator className="my-24" />
      <ProjectSection />
      <Separator className="my-10" />
      <ExpericenceSection />
      <Separator className="my-8" />
      <BlogSection />
    </div>
  );
};

export default Home;
