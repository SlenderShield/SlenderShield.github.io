import { Rss } from "lucide-react";

import Section from "@/components/Section";
import Blog from "@/components/blog/Blog";
import { BLOGS } from "@/lib/Constants";

const BlogSection = () => {
  return (
    <Section
      Icon={Rss}
      title="Insights & Ideas"  // Focuses on recency
      ctaText="Explore the Blogs"
      ctaLink="/blogs"
      subtitle="Perspectives and fresh ideas from The Normal SWE." // Adds a bit of flavor
      columns={2}
    >
      {BLOGS.map((blog) => (
        <Blog key={blog.id} blog={blog} featured={true} />
      ))}
    </Section>
  )
}

export default BlogSection;
