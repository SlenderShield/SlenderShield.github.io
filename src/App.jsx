import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "@/components/Header";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Project from "@/components/Project";
import Blogs from "@/pages/Blogs";
import Blog from "@/components/Blog"
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="xl:border-x-2 xl:w-2/3 mx-auto">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
