import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Project from "@/components/Project";
import Blogs from "@/pages/Blogs";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageNotFound from "@/components/NotFound";
import BlogMarkdown from "./components/blog/BlogMarkdown";
import useScrollToTop from "./components/ScrollToTop";

function App() {
  useScrollToTop()
  return (
    <div className="xl:border-x-2 xl:w-2/3 mx-auto min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogMarkdown />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div >

  );
}

export default App;


