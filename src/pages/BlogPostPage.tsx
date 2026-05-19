import { Link, useParams } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { ContentRenderer } from '../components/ContentRenderer'
import { useBlogPost, useBlogPosts } from '../hooks/useApi'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { SITE_NAME, SITE_URL } from '../config/site'
import { toReadableDate } from '../utils/date'
import { renderMarkdownToHtml, sanitizeHtml } from '../utils/sanitize'

export function BlogPostPage() {
  const { slug } = useParams()
  const { data: post, loading: postLoading } = useBlogPost(slug || '')
  const { data: allPosts, loading: postsLoading } = useBlogPosts()

  useDocumentTitle(post ? post.title : 'Post Not Found', {
    path: slug ? `/blog/${slug}` : '/blog',
    description: post?.excerpt,
    noIndex: !post,
    structuredData: post
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedOn,
          dateModified: post.publishedOn,
          author: {
            '@type': 'Person',
            name: SITE_NAME,
          },
          publisher: {
            '@type': 'Person',
            name: SITE_NAME,
          },
          mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
          keywords: post.tags.join(', '),
          image: post.coverImage ? [post.coverImage] : undefined,
        }
      : null,
  })

  if (postLoading || postsLoading) {
    return (
      <PageLayout>
        <main className="container section-block">
          <section className="page-loading-panel" aria-busy="true" aria-live="polite">
            <div className="loading-line loading-line-lg" />
            <div className="loading-line loading-line-md" />
            <div className="loading-card" />
          </section>
        </main>
      </PageLayout>
    )
  }

  if (!post) {
    return (
      <PageLayout>
        <main className="container section-block reveal">
          <div className="page-intro">
            <p className="eyebrow">Blog</p>
            <h1>Post not found</h1>
            <p>This article does not exist yet. Please check the blog index.</p>
          </div>
          <div className="hero-actions">
            <Link to="/blog" className="button solid">
              Go to blog
            </Link>
            <Link to="/" className="button ghost">
              Back home
            </Link>
          </div>
        </main>
      </PageLayout>
    )
  }

  const relatedPosts = allPosts
    .filter((item) => item.slug !== slug)
    .filter((item) => item.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3)

  const markdownSource = post.content || post.body.join('\n\n')
  const markdownHtml = sanitizeHtml(renderMarkdownToHtml(markdownSource))

  return (
    <PageLayout>
      <main className={`container section-block reveal blog-post template-${post.template || 'minimal'}`}>
        <header className="page-intro blog-hero">
          <p className="eyebrow">
            {toReadableDate(post.publishedOn)} • {post.readMinutes} min read
          </p>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className="hero-actions">
            <Link to="/blog" className="button ghost">
              Back to all posts
            </Link>
            <Link to="/" className="button solid">
              Back home
            </Link>
          </div>
        </header>

        <section className="blog-summary-grid">
          <article className="detail-panel blog-summary-card">
            <h2>Topics</h2>
            <div className="chip-row">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>

          {post.coverImage && (
            <article className="detail-panel blog-summary-card">
              <h2>Cover</h2>
              <figure className="blog-cover">
                <img src={post.coverImage} alt={`${post.title} cover image`} loading="lazy" />
              </figure>
            </article>
          )}
        </section>

        <article className="post-content detail-panel">
          {post.blocks && post.blocks.length > 0 ? (
            <ContentRenderer blocks={post.blocks} />
          ) : (
            <div className="markdown-content" dangerouslySetInnerHTML={{ __html: markdownHtml }} />
          )}
        </article>

        {relatedPosts.length > 0 ? (
          <section className="detail-panel related-section">
            <div className="section-head compact">
              <h2>Related posts</h2>
              <Link to="/blog">Browse archive</Link>
            </div>
            <div className="blog-list related-list">
              {relatedPosts.map((item) => (
                <article key={item.slug} className="blog-item related-card">
                  <p className="meta">
                    {toReadableDate(item.publishedOn)} • {item.readMinutes} min read
                  </p>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <Link to={`/blog/${item.slug}`}>Read post</Link>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </PageLayout>
  )
}
