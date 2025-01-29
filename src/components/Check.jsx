/* eslint-disable react/prop-types */
import { ImBlog } from "react-icons/im";

import CTAButton from "./CTAButton";

const BlogSection = () => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="flex flex-row items-end gap-5 justify-center text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                    <ImBlog />
                    The Blog
                </h2>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">See how game-changing companies are making the most of every engagement with Preline.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            </div>
            <div className="mt-12 text-center">
                <CTAButton to="/blogs" ctaText="Read More" />
            </div>
        </div>
    )
}

export default BlogSection