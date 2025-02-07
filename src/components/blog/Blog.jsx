/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { HiOutlineCalendarDays, HiOutlineClock } from 'react-icons/hi2';
import { getMonthYear } from '@/lib/utils';

const Tags = ({ tech }) => (
    <div className='flex flex-wrap gap-2 text-sm'>
        {tech.map((name) => (
            <span key={name} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-md">
                #{name}
            </span>
        ))}
    </div>
);

const Blog = ({ blog }) => {
    const { title, date, slug, tags, excerpt, readTime, image } = blog;

    return (
        <Link to={`/blogs/${slug.current}`} className="group flex flex-col h-full  border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40">
            {image && (
                <div className=" aspect-w-16 aspect-h-9 md:aspect-h-11 overflow-hidden rounded-md">
                    <img
                        className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        src={image}
                        alt={title}
                        loading="lazy"
                    />
                </div>
            )}
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2 text-sm ">
                        <HiOutlineClock className="h-4 w-4" />
                        <span>{readTime}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm ">
                        <HiOutlineCalendarDays className="h-4 w-4" />
                        <span>{getMonthYear(date)}</span>
                    </div>
                </div>
                <h3 className="text-xl font-semibold  line-clamp-2 relative inline-block before:absolute before:-bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-gray-200 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
                    {title}
                </h3>
                <p className="mt-2 line-clamp-4 flex-grow py-2">
                    {excerpt}
                </p>
                {tags.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                        <Tags tech={tags} />
                    </div>
                )}
            </div>
        </Link>
    );
};

export default Blog;