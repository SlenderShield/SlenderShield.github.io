import { HiOutlineBriefcase } from "react-icons/hi2"
import ExperienceCard from "./ExperienceCard"
import Section from "../Section";

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
        <Section
            Icon={HiOutlineBriefcase}
            title="Experience"
            subtitle="A showcase of my professional journey, highlighting key achievements and impactful contributions."
            columns={1}
        >
            <div className="w-full gap-6">
                {experience.map((exp) => (
                    <ExperienceCard key={exp.id} exp={exp} />
                ))}
            </div>
        </Section>
    );
};

export default ExperienceSection;