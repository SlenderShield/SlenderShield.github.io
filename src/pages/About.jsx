import {
  Mail, MapPin, Book, Code,
  Globe, Palette, Brain,
  Terminal, Database,
  Figma, PenTool, Users,
  Brush, Layout, Package, Cloud, Repeat,
  BarChart, Network
} from 'lucide-react';
const skills = [
  {
    category: "Programming",
    icon: <Terminal size={24} />,
    items: [
      { name: "C++", icon: <Code size={16} /> },
      { name: "Java", icon: <Code size={16} /> },
      { name: "Spring Boot", icon: <Database size={16} /> },
      { name: "JavaScript", icon: <Code size={16} /> },
      { name: "TypeScript", icon: <Code size={16} /> },
      { name: "React.js", icon: <Code size={16} /> },
      { name: "Next.js", icon: <Code size={16} /> },
      { name: "Node.js", icon: <Database size={16} /> },
      { name: "Express.js", icon: <Code size={16} /> },
      { name: "MongoDB", icon: <Database size={16} /> },
      { name: "PostgreSQL", icon: <Database size={16} /> },
      { name: "GraphQL", icon: <Globe size={16} /> },
      { name: "Docker", icon: <Package size={16} /> },
      { name: "Kubernetes", icon: <Package size={16} /> },
    ]
  },
  {
    category: "Design & Frontend",
    icon: <Palette size={24} />,
    items: [
      { name: "UI/UX Design", icon: <PenTool size={16} /> },
      { name: "Figma", icon: <Figma size={16} /> },
      { name: "Adobe XD", icon: <PenTool size={16} /> },
      { name: "Tailwind CSS", icon: <Brush size={16} /> },
      { name: "Material UI", icon: <Layout size={16} /> }
    ]
  },
  {
    category: "DevOps & Cloud",
    icon: <Cloud size={24} />,
    items: [
      { name: "Docker", icon: <Package size={16} /> },
      { name: "Kubernetes", icon: <Package size={16} /> },
      { name: "AWS", icon: <Cloud size={16} /> },
      { name: "Google Cloud", icon: <Cloud size={16} /> },
      { name: "CI/CD", icon: <Repeat size={16} /> },
    ]
  },
  {
    category: "Other",
    icon: <Brain size={24} />,
    items: [
      { name: "System Design", icon: <Globe size={16} /> },
      { name: "Data Structures & Algorithms", icon: <BarChart size={16} /> },
      { name: "Microservices Architecture", icon: <Network size={16} /> },
      { name: "Project Management", icon: <Users size={16} /> },
      { name: "Team Leadership", icon: <Users size={16} /> },
      { name: "Agile Methodologies", icon: <Globe size={16} /> },
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
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            A bit about myself
          </h1>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Not a person who blost himself but hey, need to showcase for better opportunities.
          </p>
        </div>

        <div className="p-8 mb-8 transform hover:scale-[1.02] transition-transform duration-300 ">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="w-96 h-80 rounded-2xl overflow-hidden shadow-lg transform  transition-transform duration-300">
              <img
                src="https://github.com/slendershield.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-6">
              <div>
                <h1 className="text-4xl font-bold  mb-2">John Doe</h1>
                <h2 className="text-xl  font-medium">Senior Software Engineer</h2>
              </div>

              <div className="space-y-3 ">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                    <MapPin size={18} className="" />
                  </div>
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                    <Mail size={18} className="" />
                  </div>
                  <span>john.doe@example.com</span>
                </div>
              </div>

              <p className=" text-lg leading-relaxed">
                Passionate software engineer with 5+ years of experience in building scalable web applications.
                Focused on creating efficient, maintainable, and user-friendly solutions that drive business growth
                and enhance user experience.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 mb-8">
          <h2 className="text-3xl font-bold  mb-8 flex items-center gap-3">
            <Code size={32} className="" />
            Skills
          </h2>
          <div className="space-y-6">
            {skills.map(skill => (
              <dl className="flex flex-col sm:flex-row gap-4" key={skill.category}>
                <dt className="min-w-40">
                  <span className="p-2 block text-base text-gray-600 dark:text-neutral-200 underline underline-offset-2">{skill.category}:</span>
                </dt>
                <dd>
                  <ul>
                    {skill.items.map(item => (
                      <li className="p-2 gap-2 me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200 " key={item.name}>
                        {item.icon}
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </dd>
              </dl>
            ))}
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold  mb-8 flex items-center gap-3">
            <Book size={32} className="" />
            Education
          </h2>
          <div className="space-y-2">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 pb-8 dark:hover:bg-gray-900 transition-colors duration-300 rounded-xl">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 h-full w-px bg-blue-200">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-100"></div>
                </div>

                <div className="">
                  <h3 className="text-xl font-semibold  mb-2">{edu.degree}</h3>
                  <div className=" font-medium mb-2">{edu.school}</div>
                  <div className=" mb-3">{edu.year}</div>
                  <div>{edu.description}</div>
                  <ol>
                    {edu.points.map(point => (
                      <li key={point} className='flex items-center'>
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                          <div className="relative z-10 size-7 flex justify-center items-center">
                            <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                          </div>
                        </div>
                        <div>{point}</div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;