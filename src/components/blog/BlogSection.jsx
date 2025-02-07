import Blog from "./Blog";
import { FaLightbulb } from "react-icons/fa";
import HomeSection from "../HomeSection";

const blogs = [
  {
    id: "portfolio-blog001",
    title: "Building My First Real Estate Application with the MERN Stack",
    author: "Muralidhara Bhat KS",
    date: "2025-01-01",
    content: `
      <p>Creating a real estate application using the MERN stack has been one of the most fulfilling projects in my journey as a software engineer. Here's a behind-the-scenes look at how it all came together.</p>
    `,
    tags: [
      "Portfolio",
      "MERN Stack",
      "Real Estate App",
      "Full-Stack Development",
    ],
    slug: "real-estate-app-mern",
    image: "https://github.com/slendershield.png",
    excerpt:
      "A deep dive into how I built a real estate application using the MERN stack—challenges, solutions, and key takeaways.",
    readTime: "6 min read",
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
    image: "https://github.com/slendershield.png",
    excerpt:
      "My journey of mastering Spring Boot to build scalable backends with microservices architecture.",
    readTime: "5 min read",
  }
];

const BlogSection = () => {
  return (
    <HomeSection
      icon={<FaLightbulb />}
      title="Recent Blog Posts"  // Focuses on recency
      ctaText="Read More"
      ctaLink="/blogs"
      subtitle="Fresh Perspectives from The Normal SWE" // Adds a bit of flavor
    >
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} featured={true} />
      ))}
    </HomeSection>
  )
}

export default BlogSection;
