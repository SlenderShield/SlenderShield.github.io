/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SvgTool from "@/lib/SVGTool";
import { getDomain, getMonthYear, getToolDetails } from "@/lib/utils";
import {
  HiLink,
  HiOutlineCalendarDays,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlinePauseCircle,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";
import { SiGithub } from "react-icons/si";

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
    <span className="opacity-90 flex items-center space-x-2">
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
    className="opacity-100 hover:opacity-80 hover:text-primary transition-all flex items-center space-x-1"
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

const ProjectCard = ({ project, featured = false }) => {
  const {
    mainImage,
    title,
    status,
    href,
    source,
    description,
    tech,
    slug,
    date,
  } = project;
  return (
    <div className="w-full rounded-lg border p-4"> {/* Reduced padding */}
      <div className="flex flex-col gap-4"> {/* Reduced gap between elements */}
        {featured && (
          <img
            src={mainImage}
            alt={title}
            title={title}
            className="object-cover rounded-lg h-80 w-full"
          />
        )}
        <div className="flex flex-col justify-between min-h-40">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold w-fit flex items-center">
                <Link
                  href={`/projects/${slug.current}`}
                  className="px-2 hover:text-primary transition-colors"
                >
                  {title}
                </Link>
              </h3>
              <span className="opacity-90 flex items-center space-x-1 text-sm">
                <HiOutlineCalendarDays />
                <span>{getMonthYear(date)}</span>
              </span>
            </div>
            <div className="flex items-center flex-wrap space-x-4 text-sm px-1">
              <StatusIcon status={status} />

              {href && (
                <CardLink href={href}>
                  <HiLink />
                  <span>{getDomain(href)}</span>
                </CardLink>
              )}
              {source && (
                <CardLink href={source}>
                  <SiGithub />
                  <span>Source</span>
                </CardLink>
              )}
            </div>
          </div>

          <div className="grow my-2 text-wrap">
            <p className="text-left text-sm p-2">{description}</p>
          </div>

          <div className="flex items-center gap-3 py-2 px-3 border-y border-border"> {/* Reduced padding */}
            <TechRow tech={tech} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
