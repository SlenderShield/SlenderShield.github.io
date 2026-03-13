import { Link } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { blogPosts } from '../content/blogPosts'
import { toReadableDate } from '../utils/date'

export function BlogPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="container section-block reveal">
        <div className="section-head">
          <h1>Blog</h1>
          <Link to="/">Back home</Link>
        </div>
        <p>Articles and notes on product engineering, delivery, and web architecture.</p>

        <div className="blog-list">
          {blogPosts.map((post) => (
            <article key={post.slug} className="blog-item">
              <p className="meta">
                {toReadableDate(post.publishedOn)} • {post.readMinutes} min read
              </p>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className="chip-row">
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <Link to={`/blog/${post.slug}`}>Read full post</Link>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
