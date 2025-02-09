/* eslint-disable react/prop-types */
import SocialLinks from "@/components/SocialLinks";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/Separator";
import ProjectSection from "@/components/project/ProjectSection";
import BlogSection from "@/components/blog/BlogSection";
import { Button } from "@/components/ui/Button";
import ExpericenceSection from "@/components/experience/ExpericenceSection";
import BlurText from "@/components/ui/BlurText";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <main className="flex-1 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-8 py-16 md:py-24">
            <h1 className="font-bold text-center text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 animate-gradient">
              <BlurText
                text="Hey I&apos;m Muralidhara Bhat!"
                delay={50}
                animateBy="words"
                direction="top"
              />

            </h1>
            <h2 className="flex flex-col gap-2 text-xl md:text-4xl font-bold text-center">
              <span>Exploring Tech, One Project at a Time.</span><br />
              <span>Code. Create. Innovate.</span>
            </h2>
            <p className="text-base md:text-lg max-w-2xl text-center leading-relaxed opacity-80">
              I&apos;m a Software Developer crafting innovative solutions in India&apos;s Silicon Valley.
              Through code and innovation, I explore the ever-evolving tech landscape while building impactful digital experiences.
            </p>
            <SocialLinks />
            <div className="flex flex-col md:flex-row gap-4">
              <Button size="lg" className="min-w-48 bg-blue-600 hover:bg-blue-700 text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-800 font-bold">
                <Link to='/projects'>Projects</Link>
              </Button>
              <Button size="lg" variant="outline" className="min-w-48">
                <Link to="/contact">Get In Touch</Link>
              </Button>
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
