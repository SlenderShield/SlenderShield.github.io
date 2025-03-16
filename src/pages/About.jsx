import { Link } from 'react-router-dom';
import { MapPin, Mail, Code, Book, Briefcase, Download, ExternalLink, MessageSquareCode } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import SocialLinks from '@/components/SocialLinks';

const AboutMe = () => {
  // Skills data with improved categorization and more detailed items
  const skills = [
    {
      category: "Languages",
      icon: <Code size={20} className="text-blue-500" />,
      items: [
        { name: "JavaScript", icon: <div className="w-3 h-3 rounded-full bg-yellow-500" /> },
        { name: "TypeScript", icon: <div className="w-3 h-3 rounded-full bg-blue-700" /> },
        { name: "Java", icon: <div className="w-3 h-3 rounded-full bg-red-500" /> },
        { name: "C++", icon: <div className="w-3 h-3 rounded-full bg-blue-900" /> },
        { name: "SQL", icon: <div className="w-3 h-3 rounded-full bg-blue-800" /> },
      ],
    },
    {
      category: "Frontend",
      icon: <Code size={20} className="text-green-500" />,
      items: [
        { name: "React", icon: <div className="w-3 h-3 rounded-full bg-blue-500" /> },
        { name: "HTML/CSS", icon: <div className="w-3 h-3 rounded-full bg-orange-500" /> },
        { name: "Tailwind", icon: <div className="w-3 h-3 rounded-full bg-teal-500" /> },
        { name: "Redux", icon: <div className="w-3 h-3 rounded-full bg-purple-500" /> },
      ],
    },
    {
      category: "Backend",
      icon: <Code size={20} className="text-purple-500" />,
      items: [
        { name: "Spring", icon: <div className="w-3 h-3 rounded-full bg-green-600" /> },
        { name: "Spring Boot", icon: <div className="w-3 h-3 rounded-full bg-green-600" /> },
        { name: "Node.js", icon: <div className="w-3 h-3 rounded-full bg-green-500" /> },
        { name: "Express.js", icon: <div className="w-3 h-3 rounded-full bg-gray-800" /> },
        { name: "REST APIs", icon: <div className="w-3 h-3 rounded-full bg-blue-400" /> },
      ],
    },
    {
      category: "Databases",
      icon: <Code size={20} className="text-yellow-500" />,
      items: [
        { name: "PostgreSQL", icon: <div className="w-3 h-3 rounded-full bg-blue-900" /> },
        { name: "MySQL", icon: <div className="w-3 h-3 rounded-full bg-orange-700" /> },
        { name: "MongoDB", icon: <div className="w-3 h-3 rounded-full bg-green-700" /> },
        { name: "Redis", icon: <div className="w-3 h-3 rounded-full bg-red-700" /> },
        { name: "NoSQL", icon: <div className="w-3 h-3 rounded-full bg-purple-700" /> },
      ],
    },
    {
      category: "DevOps & Cloud",
      icon: <Code size={20} className="text-orange-500" />,
      items: [
        { name: "AWS", icon: <div className="w-3 h-3 rounded-full bg-orange-400" /> },
        { name: "GCP", icon: <div className="w-3 h-3 rounded-full bg-blue-500" /> },
        { name: "Docker", icon: <div className="w-3 h-3 rounded-full bg-blue-600" /> },
        { name: "CI/CD", icon: <div className="w-3 h-3 rounded-full bg-gray-600" /> },
        { name: "Git", icon: <div className="w-3 h-3 rounded-full bg-orange-600" /> },
        { name: "Kubernetes", icon: <div className="w-3 h-3 rounded-full bg-blue-500" /> },
      ],
    },
    {
      category: "PlusOne",
      icon: <Code size={20} className="text-gray-500" />,
      items: [
        { name: "Agile Methodologies", icon: <div className="w-3 h-3 rounded-full bg-purple-400" /> },
        { name: "Problem Solving", icon: <div className="w-3 h-3 rounded-full bg-indigo-400" /> },
        { name: "Software Architecture", icon: <div className="w-3 h-3 rounded-full bg-lime-600" /> },
        { name: "Testing (Unit, Integration)", icon: <div className="w-3 h-3 rounded-full bg-teal-700" /> },
        { name: "Data Structures & Algorithms", icon: <div className="w-3 h-3 rounded-full bg-rose-600" /> },
        { name: "Version Control (Git)", icon: <div className="w-3 h-3 rounded-full bg-orange-600" /> },
      ]
    }
  ];

  // Education data
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "VTU University",
      year: "2018 - 2022",
      description: "Graduated while focusing on software engineering and cloud computing.",
      points: [
        "Lead a team of 4 in a hackathon.",
        "Led the college's developer club organizing various tech events",
        "Completed capstone project on scalable microservices architecture"
      ]
    }
  ];

  // Testimonials
  const testimonials = [
    {
      text: "Muralidhara is an exceptional problem solver with remarkable technical skills. His ability to tackle complex challenges with innovative solutions makes him a valuable asset to any team.",
      author: "Mantri Vineet",
      position: "Project Manager at BGSW"
    },
    {
      text: "Working with Muralidhara was a great experience. His attention to detail and commitment to quality code are impressive. He consistently delivers beyond expectations.",
      author: "Nethaji Sathyanandha",
      position: "System Archietect at BGSW"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="p-8 mb-8  rounded-3xl">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="md:w-1/3 shrink-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 group">
              <img
                src="https://github.com/slendershield.png"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <SocialLinks />
            </div>
          </div>

          <div className="md:w-2/3 flex-1 space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Muralidhara Bhat KS</h1>
              <h2 className="text-xl font-medium text-blue-600 dark:text-blue-400">Software Engineer</h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="w-8 h-8 rounded-lg p-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" />
                <span>Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="w-8 h-8 rounded-lg p-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" />
                <a href="mailto:ksmuralidhara0@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">ksmuralidhara0@gmail.com</a>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Passionate software engineer with 2+ years of experience in building scalable web applications.
                Focused on creating efficient, maintainable, and user-friendly solutions that drive business growth
                and enhance user experience.
              </p>

              <p className="text-lg leading-relaxed">
                I have a strong background in full-stack development, with expertise in both front-end and back-end technologies.
                I&apos;m particularly interested in Spring Boot and innovative thinking in software architecture.
              </p>

              <p className="text-lg leading-relaxed">
                In my free time, I enjoy playing video games, binge on movies and watch tech reviews on YouTube.
                I&apos;m always eager to learn new technologies and contribute to challenging projects.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">My Expertise</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Software Development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Full-stack Web Development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Cloud Computing (AWS, GCP)
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Open to</h3>
              <p>New opportunities, collaborations, mentorship, and continuous learning experiences.</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="https://raw.githubusercontent.com/SlenderShield/SlenderShield/912d62f010958c3219111b4e3989ddd88d3fbfa6/Muralidhara_Java.pdf" target='_blank'>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-800">
                  <Download size={18} />
                  Download Resume
                </Button>
              </Link>
              <Link to="/projects">
                <Button className="border-blue-600 text-blue-600 bg-transparent border hover:bg-blue-50 dark:hover:bg-blue-900/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-800">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="p-8 mb-8">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-blue-600 dark:text-blue-400">
          <Code size={32} />
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map(skill => (
            <div key={skill.category} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-md dark:hover:bg-gray-700/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                {skill.icon}
                {skill.category}
              </h3>
              <ul className="grid grid-cols-2 gap-3">
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

      {/* Education Section */}
      <div className="p-8 mb-8">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-blue-600 dark:text-blue-400">
          <Book size={32} />
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 pb-8">
              <div className="absolute left-0 top-0 h-full w-px bg-blue-200 dark:bg-blue-700">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white dark:border-gray-800"></div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{edu.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                  <div className="font-medium">{edu.school}</div>
                  <div className="text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full mt-1 sm:mt-0">{edu.year}</div>
                </div>
                <p className="mb-3">{edu.description}</p>
                <h4 className="font-medium mb-2">Highlights:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  {edu.points.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="p-8 mb-8">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-blue-600 dark:text-blue-400">
          <MessageSquareCode size={32} />
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-md transition-all duration-300">
              <p className="text-lg italic mb-4">{testimonial.text}</p>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="p-8 mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-3xl shadow-lg">
        <div className="text-center space-y-6 py-6">
          <h2 className="text-3xl font-bold">Let&apos;s Work Together</h2>
          <p className="text-lg max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex justify-center space-x-4 pt-4">
            <Link to="mailto:ksmuralidhara0@gmail.com">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
                Send Email
              </Button>
            </Link>
            <Link to="https://linkedin.com/in/ksmuralidhara0" target='_blank' rel='noopener noreferrer'>
              <Button className="text-white bg-transparent border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors">
                <ExternalLink size={18} />
                Connect on LinkedIn
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default AboutMe;