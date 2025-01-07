
import {
  Mail, MapPin, Book, Code,
  Globe, Palette, Brain,
  Terminal, Database,
  Figma, PenTool, Users
} from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Programming",
      icon: <Terminal size={24} />,
      items: [
        { name: "JavaScript", icon: <Code size={16} /> },
        { name: "Python", icon: <Terminal size={16} /> },
        { name: "React", icon: <Code size={16} /> },
        { name: "Node.js", icon: <Database size={16} /> }
      ]
    },
    {
      category: "Design",
      icon: <Palette size={24} />,
      items: [
        { name: "UI/UX", icon: <PenTool size={16} /> },
        { name: "Figma", icon: <Figma size={16} /> },
        { name: "Adobe XD", icon: <PenTool size={16} /> }
      ]
    },
    {
      category: "Other",
      icon: <Brain size={24} />,
      items: [
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
      description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on Neural Networks."
    },
    {
      degree: "Bachelor of Engineering",
      school: "MIT",
      year: "2016-2020",
      description: "Major in Computer Science with minor in Mathematics. Dean's List all semesters."
    }
  ];

  return (
    <section className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-clip-text ">
            About Me
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>
        {/* Basic Info Section */}
        <div className=" rounded-2xl shadow-xl p-8 mb-8 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="w-96 h-80 rounded-2xl overflow-hidden shadow-lg transform hover:rotate-2 transition-transform duration-300">
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

        {/* Skills Section */}
        <div className=" rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold  mb-8 flex items-center gap-3">
            <Code size={32} className="" />
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <div key={index} className="space-y-4 p-6 rounded-xl  dark:hover:bg-gray-900 transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                    {skillSet.icon}
                  </div>
                  <h3 className="text-xl font-semibold ">{skillSet.category}</h3>
                </div>
                <div className="space-y-3">
                  {skillSet.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2   px-4 py-2 rounded-lg shadow-sm hover:shadow transition-shadow duration-300"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className=" rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold  mb-8 flex items-center gap-3">
            <Book size={32} className="" />
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 pb-8">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 h-full w-px bg-blue-200">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-100"></div>
                </div>

                <div className=" rounded-xl p-6 ml-6 dark:hover:bg-gray-900 transition-colors duration-300">
                  <h3 className="text-xl font-semibold  mb-2">{edu.degree}</h3>
                  <div className=" font-medium mb-2">{edu.school}</div>
                  <div className=" mb-3">{edu.year}</div>
                  <p className="">{edu.description}</p>
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