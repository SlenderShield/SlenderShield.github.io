/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SvgTool from "@/lib/SVGTool";
import { getDomain, getMonthYear, getToolDetails } from "@/lib/utils";
import {
    HiLink,
    HiOutlineCalendarDays,
    HiOutlineCheckCircle,
    HiOutlineClock,
    HiOutlineMapPin,
    HiOutlinePauseCircle,
    HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";
import { Separator } from "../ui/Separator";

const STATUS = {
    completed: {
        icon: <HiOutlineCheckCircle className="text-green-500" />,
        text: "Completed",
    },
    ongoing: {
        icon: <HiOutlineClock className="text-orange-500" />,
        text: "Ongoing",
    },
    paused: {
        icon: <HiOutlinePauseCircle className="text-red-500" />,
        text: "Paused",
    },
};

export const StatusIcon = ({ status }) => {
    const { icon, text } = STATUS[status];
    return (
        <span className="opacity-70 flex items-center space-x-1">
            {icon}
            <span>{text}</span>
        </span>
    );
};

export const CardLink = ({ href, children }) => (
    <Link
        to={href}
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-70 hover:opacity-100 hover:text-primary transition-all flex items-center space-x-1"
    >
        {children}
    </Link>
);

export const TechRow = ({ tech }) => {
    return tech.map((name) => {
        const { icon, href } = getToolDetails(name) ?? {
            icon: <HiOutlineQuestionMarkCircle />,
            href: null,
        };

        const isImage = typeof icon === "string";
        return (
            <Link
                key={name}
                to={href}
                data-tip={name}
                title={name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl opacity-70 hover:opacity-100 hover:text-primary transition-all"
            >
                {isImage ? (
                    <SvgTool name={name} className="w-5 h-5" fill="currentColor" />
                ) : (
                    <>{icon}</>
                )}
            </Link>
        );
    });
};

const ExpericenceCard = ({ exp }) => {
    const {
        role,
        companyURL,
        company,
        duration,
        location,
        responsibilities,
        techStack,
        status,
        type
    } = exp;
    return (
        <div className="rounded-lg border p-5 mb-5">
            <div className=" flex flex-col gap-5">
                <div className="min-h-52 grow flex flex-col justify-around gap-2">
                    <div className="flex flex-col space-y-2">
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-bold w-fit flex items-center">
                                {<Link
                                    href={companyURL}
                                    className="px-2 hover:text-primary transition-colors"
                                >
                                    {company}
                                </Link>}
                            </h3>
                            <span className="opacity-70 flex items-center space-x-1 text-sm">
                                <HiOutlineCalendarDays />
                                <span>{duration}</span>
                            </span>
                        </div>
                        <div className="flex items-center flex-w space-x-4 text-sm px-1">
                            <StatusIcon status={status} />

                            {companyURL && (
                                <CardLink href={companyURL}>
                                    <HiLink />
                                    <span>{getDomain(companyURL)}</span>
                                </CardLink>
                            )}
                            {location && (
                                <CardLink >
                                    <HiOutlineMapPin />
                                    <span>{location}</span>
                                </CardLink>
                            )}
                        </div>
                    </div>
                    <div className="mt-5 rounded-lg border p-5">
                        <div className="flex justify-between items-center ">
                            <span className="uppercase font-semibold">{role}</span>
                            <span className="bg-black p-2 rounded-lg text-white dark:bg-white dark:text-black">{type}</span>
                        </div>
                        <div className="grow my-2">
                            <ol>
                                {responsibilities.map((res, idx) =>
                                    <li className="text-left text-sm p-2 text-balance list-decimal ml-5" key={idx}>{res}</li>
                                )}
                            </ol>
                        </div>
                        <div className="flex items-center gap-4 py-2 px-4 ">
                            <TechRow tech={techStack} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExpericenceCard;
