import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage } from '../pages/AboutPage'
import { BlogPage } from '../pages/BlogPage'
import { BlogPostPage } from '../pages/BlogPostPage'
import { ContactPage } from '../pages/ContactPage'
import { HomePage } from '../pages/HomePage'
import { ProjectDetailPage } from '../pages/ProjectDetailPage'
import { ProjectsPage } from '../pages/ProjectsPage'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
