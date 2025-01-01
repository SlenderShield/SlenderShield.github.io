/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

const MajorSection = ({
  icon,
  title,
  linkCTA,
  sectionCTA,
  children,
  subtitle,
}) => {
  return (
    <section className="flex flex-col  gap-6 lg:gap-10 mt-10 mx-0 md:mx-20">
      <div>
        <h3 className="flex flex-row items-center gap-2 font-bold text-xl md:text-3xl">
          {icon} {title}
        </h3>
        <p className="text-left text-md md:text-xl py-5 border-b-2">
          {subtitle}
        </p>
      </div>
      <div>{children}</div>
      <Link
        to={linkCTA}
        className="text-link group relative inline-flex justify-center items-center transition-all duration-300 tracking-wide hover:tracking-wider w-full border-2 border-slate-500  p-2 rounded-lg"
      >
        <ChevronsLeft className="transition-all duration-300 opacity-0 transform translate-x-0 group-hover:opacity-100 group-hover:-translate-x-1" />
        <span className="uppercase">{sectionCTA}</span>
        <ChevronsRight className="transition-all duration-300 opacity-0 transform translate-x-0 group-hover:opacity-100 group-hover:translate-x-1" />
      </Link>
    </section>
  );
};

export default MajorSection;
