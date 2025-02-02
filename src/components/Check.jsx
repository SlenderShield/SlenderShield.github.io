/* eslint-disable react/prop-types */
import {
    Mail, MapPin, Book, Code,
    Globe, Palette, Brain,
    Terminal, Database,
    Figma, PenTool, Users
} from 'lucide-react';

const skills = [
    {
        category: "Programming",
        icon: <Terminal size={24} />,
        items: [
            { name: "JavaScript", icon: <Code size={16} /> },
            { name: "Python", icon: <Terminal size={16} /> },
            { name: "React", icon: <Code size={16} /> },
            { name: "Node.js", icon: <Database size={16} /> },
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

const Check = () => {
    return (
        <div className="space-y-3">
            {skills.map(skill => (
                <dl className="flex flex-col sm:flex-row gap-1" key={skill.category}>
                    <dt className="min-w-40">
                        <span className="block text-base text-gray-500 dark:text-neutral-500">{skill.category}:</span>
                    </dt>
                    <dd>
                        <ul>
                            {skill.items.map(item => (
                                <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200" key={item.name}>
                                    {item.icon}
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </dd>
                </dl>
            ))}
        </div>
    )
}

export default Check
