import {
  Mail, MapPin, Book, Code,
  Globe, Palette, Brain,
  Terminal, Database,
  Figma, PenTool, Users,
  Brush, Layout, Package, Cloud, Repeat,
  BarChart, Network, Server, Layers, Lightbulb
} from 'lucide-react';
import Section from '@/components/Section';
import { Link } from 'react-router-dom';

const skills = [
  {
    category: "Languages",
    icon: <Terminal size={24} />,
    items: [
      { name: "C++", icon: <Code size={16} /> },
      { name: "Java", icon: <Code size={16} /> },
      { name: "JavaScript", icon: <Code size={16} /> },
      { name: "TypeScript", icon: <Code size={16} /> },
      { name: "Python", icon: <Terminal size={16} /> }
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: <Layers size={24} />,
    items: [
      { name: "Spring Boot", icon: <Server size={16} /> },
      { name: "React.js", icon: <Code size={16} /> },
      { name: "Next.js", icon: <Code size={16} /> },
      { name: "Node.js", icon: <Database size={16} /> },
      { name: "Express.js", icon: <Code size={16} /> },
      { name: "GraphQL", icon: <Globe size={16} /> }
    ]
  },
  {
    category: "Databases",
    icon: <Database size={24} />,
    items: [
      { name: "MongoDB", icon: <Database size={16} /> },
      { name: "PostgreSQL", icon: <Database size={16} /> },
      { name: "MySQL", icon: <Database size={16} /> },
      { name: "Redis", icon: <Database size={16} /> }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud size={24} />,
    items: [
      { name: "Docker", icon: <Package size={16} /> },
      { name: "Kubernetes", icon: <Package size={16} /> },
      { name: "AWS", icon: <Cloud size={16} /> },
      { name: "Google Cloud", icon: <Cloud size={16} /> },
      { name: "CI/CD", icon: <Repeat size={16} /> }
    ]
  },
  {
    category: "Frontend & UI/UX",
    icon: <Palette size={24} />,
    items: [
      { name: "Tailwind CSS", icon: <Brush size={16} /> },
      { name: "Material UI", icon: <Layout size={16} /> },
      { name: "Figma", icon: <Figma size={16} /> },
      { name: "Adobe XD", icon: <PenTool size={16} /> }
    ]
  },
  {
    category: "Other Skills",
    icon: <Brain size={24} />,
    items: [
      { name: "System Design", icon: <Globe size={16} /> },
      { name: "Data Structures & Algorithms", icon: <BarChart size={16} /> },
      { name: "Microservices Architecture", icon: <Network size={16} /> },
      { name: "Project Management", icon: <Users size={16} /> },
      { name: "Team Leadership", icon: <Users size={16} /> },
      { name: "Agile Methodologies", icon: <Globe size={16} /> }
    ]
  }
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    year: "2020-2022",
    description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on Neural Networks.",
    points: [
      "Specialized in Artificial Intelligence and Machine Learning.",
      "Completed a thesis on Neural Networks.",
      "Studied at Stanford University, a top-tier institution.",
      "Gained expertise in cutting-edge AI technologies."
    ]
  },
  {
    degree: "Bachelor of Engineering",
    school: "MIT",
    year: "2016-2020",
    description: "Major in Computer Science with minor in Mathematics. Dean's List all semesters.",
    points: [
      "Major in Computer Science with a minor in Mathematics.",
      "Achieved Dean’s List every semester, demonstrating academic excellence.",
      "Studied at MIT, one of the world's leading tech institutions.",
      "Built a strong foundation in algorithms, data structures, and mathematics."
    ]
  }
];
const About = () => {
  return (
    <Section
      Icon={Lightbulb}
      title="A bit about myself"
      subtitle="Not a person who lost himself but hey, need to showcase for better opportunities."
      columns={1}
    >
      <div className="p-8 mb-8">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="md:w-1/3 shrink-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-110">
              <img
                src="https://github.com/slendershield.png"
                alt="Profile"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            </div>
          </div>

          <div className="md:w-2/3 flex-1 space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Muralidhara Bhat KS</h1>
              <h2 className="text-xl font-medium">Software Engineer</h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="w-8 h-8 rounded-lg p-1 bg-gray-100 dark:bg-gray-800" />
                <span>Bengaluru, In</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="w-8 h-8 rounded-lg p-1 bg-gray-100 dark:bg-gray-800" />
                <Link to="ksmuralidhara0@gmail.com">ksmuralidhara0@gmail.com</Link>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              Passionate software engineer with 2+ years of experience in building scalable web applications.
              Focused on creating efficient, maintainable, and user-friendly solutions that drive business growth
              and enhance user experience. I have a strong background in full-stack development, with expertise in both front-end and back-end technologies.  I&apos;m particularly interested in Spring Boot and area like innovative thinking.  In my free time, I enjoy playing video games, binge on movies and watch tech reviews on youtube.  I&apos;m always eager to learn new technologies and contribute to challenging projects.
            </p>


            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">My Expertise</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Software Development</li>
                <li>Full-stack web development</li>
                <li>Cloud computing (AWS, GCP)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">Open to</h3>
              <p>New opportunities, collaborations, and learning experiences.</p>
            </div>

            <div className="space-y-3">
              <button
                type="button"

                className="w-1/3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-800"
              >
                My Resume
              </button>
            </div>

          </div>
        </div>
      </div>


      <div className="p-8 mb-8">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Code size={32} />
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map(skill => (
            <div key={skill.category} className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                {skill.icon}
                {skill.category}
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                {skill.items.map(item => (
                  <li key={item.name} className="flex items-center gap-2 text-sm">
                    {item.icon}
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Book size={32} />
          Education
        </h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 pb-8 rounded-xl bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
              <div className="absolute left-0 top-0 h-full w-px bg-gray-200 dark:bg-gray-700">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white dark:border-gray-800"></div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <div className="font-medium mb-2">{edu.school}</div>
                <div className="mb-3">{edu.year}</div>
                <p>{edu.description}</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  {edu.points.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;