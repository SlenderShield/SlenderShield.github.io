import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('../pages/HomePage').then((m) => ({ default: m.HomePage })))
const AboutPage = lazy(() => import('../pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const ContactPage = lazy(() => import('../pages/ContactPage').then((m) => ({ default: m.ContactPage })))
const ProjectsPage = lazy(() => import('../pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })))
const ProjectDetailPage = lazy(() => import('../pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })))
const BlogPage = lazy(() => import('../pages/BlogPage').then((m) => ({ default: m.BlogPage })))
const BlogPostPage = lazy(() => import('../pages/BlogPostPage').then((m) => ({ default: m.BlogPostPage })))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))

export function App() {
  return (
    <Suspense fallback={<div className="page-shell" style={{ minHeight: '100vh' }} />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Suspense>
  )
}
