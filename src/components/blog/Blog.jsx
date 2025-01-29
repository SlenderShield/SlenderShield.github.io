/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import { HiOutlineCalendarDays, HiOutlineClock } from 'react-icons/hi2'
import { getMonthYear } from '@/lib/utils'

const Tags = ({ tech }) => (
    <div className='text-left text-sm flex  flex-wrap gap-3'>
        {tech.map((name) => (
            <span key={name}>#{name}</span>
        ))}
    </div>
)

const Blog = ({ blog, featured }) => {
    const { title, date, slug, tags, excerpt, readTime, image } = blog
    console.log(image)
    return (
        <Link to={`/blogs/${slug.current}`} className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40">
            <div className="aspect-w-16 aspect-h-11">
                <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
            </div>
            <div className="flex flex-col mt-4">
                <div className="flex justify-between items-center">
                    <span className="opacity-70 flex items-center space-x-1 text-sm">
                        <HiOutlineClock />
                        <span>{readTime}</span>
                    </span>
                    <span className="opacity-70 flex items-center space-x-1 text-sm">
                        <HiOutlineCalendarDays />
                        <span>{getMonthYear(date)}</span>
                    </span>
                </div>
            </div>
            <div className="my-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                    {title}
                </h3>
                <p className="mt-5 text-gray-600 dark:text-neutral-400">
                    {excerpt}
                </p>
            </div>
            <div className="flex items-center gap-4 py-2 px-4 border-y border-border rounded-md">
                <Tags tech={tags} className />
            </div>
        </Link>
    )
}

export default Blog