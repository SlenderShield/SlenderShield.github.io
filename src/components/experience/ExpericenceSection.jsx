import { HiOutlineBriefcase } from "react-icons/hi2"
import ExperienceCard from "./ExperienceCard"

const experience = [
    {
        id: 1,
        "role": "Software Engineer",
        "company": "Tech Solutions Pvt. Ltd.",
        "duration": "Jan 2023 - Present",
        "location": "Bangalore, India",
        status: "ongoing",
        type: "startup",
        "responsibilities": [
            "Designed and developed scalable web applications using MERN stack and Next.js.",
            "Implemented microservices architecture with Java and Spring Boot to optimize backend performance.",
            "Collaborated with cross-functional teams to define, design, and ship new features.",
            "Conducted code reviews and implemented best coding practices to ensure high-quality deliverables."
        ],
        "techStack": ["JavaScript", "React", "Node.js", "MongoDB", "Next.js", "Java", "Spring Boot", "Docker", "Kubernetes"]
    },
    {
        id: 2,
        "role": "Full Stack Developer Intern",
        "company": "Innovative Tech Hub",
        "duration": "June 2022 - Dec 2022",
        "location": "Remote",
        status: "completed",
        type: "mnc",
        "responsibilities": [
            "Built dynamic and interactive UI components using React.",
            "Developed REST APIs using Node.js and integrated with MongoDB for efficient data storage.",
            "Enhanced application performance and optimized front-end load times by 20%.",
            "Assisted in deploying applications to cloud environments using AWS."
        ],
        "techStack": ["React", "Node.js", "Express", "MongoDB", "AWS", "HTML", "CSS", "JavaScript"]
    }
]

const ExperienceSection = () => {
    return (
        <section className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
                <div className="flex items-center justify-center gap-4">
                    <HiOutlineBriefcase className="text-3xl md:text-4xl text-primary dark:text-white" />
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                        Experience
                    </h2>
                </div>
                <p className="mt-4 text-lg text-gray-600 dark:text-neutral-400 leading-relaxed">
                    A showcase of my professional journey, highlighting key achievements and impactful contributions.
                </p>
            </div>
            <div className="w-full gap-6">
                {experience.map((exp) => (
                    <ExperienceCard key={exp.id} exp={exp} />
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;