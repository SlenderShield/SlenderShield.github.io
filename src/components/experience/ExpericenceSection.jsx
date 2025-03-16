import { Route } from "lucide-react"

import Section from "@/components/Section";
import ExperienceCard from "@/components/experience/ExperienceCard"
import { EXPERIENCE } from '@/lib/Constants'


const ExperienceSection = () => {
    return (
        <Section
            Icon={Route}
            title="Professional Journey"
            subtitle="A record of my career progression, showcasing key achievements and the value I've delivered."
            columns={1}
        >
            <div className="w-full gap-6">
                {EXPERIENCE.map((exp) => (
                    <ExperienceCard key={exp.id} exp={exp} />
                ))}
            </div>
        </Section>
    );
};

export default ExperienceSection;