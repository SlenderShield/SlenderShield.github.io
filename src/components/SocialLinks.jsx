/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "@/lib/Constants";


const SocialLink = ({ Icon, href, label }) => (
    <Link
        to={href}
        aria-label={label}
        className="group -m-1 p-1 transition-transform hover:scale-110"
    >
        <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
);
const SocialLinks = () => {
    return (
        <div className="flex items-center">
            <div className="flex items-center justify-center gap-6">
                {SOCIAL_LINKS.map((link) => (
                    <SocialLink key={link.label} {...link} />
                ))}
            </div>
        </div>
    );
};

export default SocialLinks;
