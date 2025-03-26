/* eslint-disable react/prop-types */
import { Rss } from "lucide-react";

import Blog from "@/components/blog/Blog";
import Section from "@/components/Section";
import { BLOGS } from "@/lib/Constants";

let blogList = BLOGS.sort((a, b) => new Date(b.date) - new Date(a.date));

const Blogs = () => {
  return (
    <Section
      Icon={Rss}
      title="Explorations"
      subtitle="Explore knowledge and experience from The Normal SWE."
    >
      {blogList.map((blog) => (
        <Blog key={blog.id} blog={blog} featured={true} />
      ))}
    </Section >
  );
};

export default Blogs;
