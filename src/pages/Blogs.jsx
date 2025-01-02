/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ChevronsRight } from "lucide-react";

const Blogs = ({ link, date, title }) => {
  return (
    <Link to={link} className="flex flex-col w-3/4 gap-4 mx-auto">
      <div className="overflow-hidden w-full aspect-[4/3] relative rounded-lg flex items-center justify-center group">
        <div className="w-full h-full transition-all duration-300 group-hover:opacity-60 group-hover:backdrop-blur-3xl">
          <img
            className="object-cover absolute h-full w-full left-0 top-0 bottom-0 bg-transparent"
            alt="Higher Order Components (HOCs) in React"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            sizes="100vw"
            src="https://github.com/slendershield.png"
          ></img>
        </div>
        <div className=" will-change-auto absolute z-10 flex items-center justify-center w-12 h-12 bg-white border rounded-full text-black dark:text-white dark:bg-black border-gray-300 dark:border-gray-500 transition-opacity duration-300 opacity-0 group-hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ChevronsRight className="w-4" />
        </div>
      </div>
      <div className="flex flex-col gap-1 px-2">
        <div className="text-body">{date}</div>
        <h4>{title}</h4>
      </div>
    </Link>
  );
};

export default Blogs;
