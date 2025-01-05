/* eslint-disable react/prop-types */
import MinorSection from "@/components/MinorSection";
import { ImBlog } from "react-icons/im";
import Blog from "@/components/blog/Blog";
import { sortByDate } from "@/lib/utils";
import { HiOutlineArchiveBox, HiOutlineStar } from "react-icons/hi2";
// import Pagination from "@/components/Pagination";

const blogs = [
  {
    id: "portfolio-blog001",
    title: "Building My First Real Estate Application with the MERN Stack",
    author: "Muralidhara Bhat KS",
    date: "2025-01-01",
    content: `
      <p>Creating a real estate application using the MERN stack has been one of the most fulfilling projects in my journey as a software engineer. Here's a behind-the-scenes look at how it all came together.</p>
    `,
    tags: ["Portfolio", "MERN Stack", "Real Estate App", "Full-Stack Development"],
    slug: "real-estate-app-mern",
    image: "https://github.com/slenderShield.png",
    excerpt: "A deep dive into how I built a real estate application using the MERN stack—challenges, solutions, and key takeaways.",
    readTime: "6 min read"
  },
  {
    id: "portfolio-blog002",
    title: "Mastering Spring Boot for Scalable Backends",
    author: "Muralidhara Bhat KS",
    date: "2024-12-15",
    content: `
      <p>Learning Spring Boot opened new doors for me in backend development. Here's my experience creating scalable APIs and integrating them with microservices.</p>
    `,
    tags: ["Portfolio", "Spring Boot", "Backend Development"],
    slug: "mastering-spring-boot",
    image: "https://github.com/slenderShield.png",
    excerpt: "My journey of mastering Spring Boot to build scalable backends with microservices architecture.",
    readTime: "5 min read",
    featured: true
  },
  {
    id: "portfolio-blog003",
    title: "Exploring Kafka: Building a Messaging System",
    author: "Muralidhara Bhat KS",
    date: "2024-11-30",
    content: `
      <p>Building a messaging system with Kafka was both challenging and rewarding. Here's a summary of what I learned about distributed systems and stream processing.</p>
    `,
    tags: ["Portfolio", "Kafka", "Distributed Systems", "Messaging"],
    slug: "exploring-kafka",
    image: "https://github.com/slenderShield.png",
    excerpt: "An exploration of building a messaging system using Kafka, focusing on distributed systems and stream processing.",
    readTime: "7 min read",
    featured: true
  },
  {
    id: "portfolio-blog004",
    title: "Creating an Intuitive Expense Tracker with Next.js",
    author: "Muralidhara Bhat KS",
    date: "2024-10-20",
    content: `
      <p>Developing an expense tracker using Next.js taught me a lot about server-side rendering and state management. Here's how I built it.</p>
    `,
    tags: ["Portfolio", "Next.js", "Expense Tracker", "State Management"],
    slug: "expense-tracker-nextjs",
    image: "https://github.com/slenderShield.png",
    excerpt: "Insights into building an intuitive expense tracker with Next.js, focusing on SSR and state management.",
    readTime: "4 min read",
    featured: true
  },
  {
    id: "portfolio-blog005",
    title: "Telecommunication Interface: A Feature-Rich Module",
    author: "Muralidhara Bhat KS",
    date: "2024-09-10",
    content: `
      <p>Designing and implementing a telecommunication interface was one of my most complex projects. Here's how I managed to cover 90% of edge cases while delivering it ahead of schedule.</p>
    `,
    tags: ["Portfolio", "Telecommunication", "Interface Design", "Edge Cases"],
    slug: "telecommunication-interface",
    image: "https://github.com/slenderShield.png",
    excerpt: "A detailed look at designing a feature-rich telecommunication interface, handling edge cases, and delivering efficiently.",
    readTime: "8 min read",

  }
];

// const featuredBlogs = sortByDate(blogs.filter(blog => blog.featured))
// const nonFeatured = sortByDate(blogs.filter(blog => !blog.featured))

const Blogs = () => {
  return (
    <>
      <MinorSection
        icon={<ImBlog />}
        title="Recent Blogs"
        sectionCTA="See All blogs"
        linkCTA="/blogs"
        subtitle="recent blogs from the normal swe"
      >

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 auto-cols-auto">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} featured={blog.featured} />
          ))}
        </div>

      </MinorSection>
      {/* <Pagination /> */}
    </>
  );
};

export default Blogs;
