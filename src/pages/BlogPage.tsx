import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { blogPosts } from '../content/blogPosts'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { toReadableDate } from '../utils/date'

export function BlogPage() {
  useDocumentTitle('Journal', 'Articles, stories, and photography from work and life by Muralidhara Bhat KS.')
  return (
    <PageLayout>
      <main className="container section-block reveal">
        <div className="section-head">
          <h1>Journal</h1>
          <Link to="/">Back home</Link>
        </div>
        <p>Articles, stories, and photography from work and life.</p>

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
    </PageLayout>
  )
}
