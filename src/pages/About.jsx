import MinorSection from "@/components/MinorSection";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineLightBulb } from "react-icons/hi2";
import { TOOLS, NON_STACK_TOOLS } from "@/lib/Constants";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="mx-auto px-4 py-8">
      <h1 className="text-center text-5xl mb-10">Something about me</h1>
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
        <div className="w-full md:w-1/2">
          <img
            src="https://github.com/slendershield.png"
            alt="Muralidhara"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold">Muralidhara</h1>
          <p className="text-lg text-gray-600">Software Engineer</p>

          <p className="text-gray-700 leading-relaxed">
            Passionate about building scalable web applications and solving complex problems through elegant solutions. Experienced in modern web technologies and best practices.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Contact Me
            </button>
            <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
              View Projects
            </button>
          </div>
        </div>
      </div>

      <MinorSection
        icon={<HiOutlineLightBulb />}
        title="Skills"
        subtitle="A curated selection of standout projects, demonstrating innovative
                solutions and creative excellence."
      >
        <h3>
          <span className="border-b-2 pb-2">Languages and Frameworks</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from(TOOLS).map(([key, tool]) => (
            <Link to={tool.href}
              key={key}
              className="flex items-center gap-2 p-3 rounded-lg hover:bg-white hover:text-black"
              target="_blank"
              rel="noopener noreferrer">
              <span className="text-xl">{tool.icon}</span>
              <span>{tool.name}</span>
            </Link>
          ))}
        </div>
        <h3>
          <span className="border-b-2 pb-2">Non Stack Tools</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {NON_STACK_TOOLS.map((tool) =>
            <span key={tool} className="p-3">{tool}</span>
          )}
        </div>
      </MinorSection>
      <MinorSection
        icon={<HiOutlineAcademicCap />}
        title="Education"
        subtitle="A curated selection of standout projects, demonstrating innovative
                solutions and creative excellence.">

      </MinorSection>
    </section>
  )
};

export default About;
