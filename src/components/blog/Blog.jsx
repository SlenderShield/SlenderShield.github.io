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
        <div className="w-full rounded-lg border p-5">
            <div className=" flex flex-col gap-5">
                {featured && (
                    <img
                        src={image}
                        alt={title}
                        title={title}
                        className="items-center object-cover rounded-lg w-full h-96"
                    />
                )}
                <div className="min-h-56 grow flex flex-col justify-around ">
                    <div className="flex flex-col space-y-6">
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
                    <h3 className="text-xl font-bold w-fit p-2">
                        <Link
                            href={`/projects/${slug.current}`}
                            className="text-center hover:text-primary transition-colors"
                        >
                            {title}
                        </Link>
                    </h3>
                    <div className="grow my-2">
                        <p className="text-left text-sm p-2 ">{excerpt}</p>
                    </div>

                    <div className=" flex items-center gap-4 py-2 px-4 border-y border-border">
                        <Tags tech={tags} className />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog