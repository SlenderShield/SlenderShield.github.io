/* eslint-disable react/prop-types */
import { Rss } from "lucide-react";

import Blog from "@/components/blog/Blog";
import Section from "@/components/Section";
import { BLOGS } from "@/lib/Constants";

let blogList = BLOGS.sort((a, b) => new Date(b.date) - new Date(a.date));

const Blogs = ({ len }) => {
  const blogs = blogList.slice(0, len)
  return (
    <Section
      Icon={Rss}
      title="Explorations"
      subtitle="Explore knowledge and experience from The Normal SWE."
    >
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} featured={blog.featured} />
      ))}
    </Section >
  );
};

export default Blogs;
