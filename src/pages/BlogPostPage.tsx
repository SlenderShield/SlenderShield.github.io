import { Link, useParams } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { ContentRenderer } from '../components/ContentRenderer'
import { useBlogPost, useBlogPosts } from '../hooks/useApi'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { SITE_NAME, SITE_URL } from '../config/site'
import { toReadableDate } from '../utils/date'

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
          <p>Loading post...</p>
        </main>
      </PageLayout>
    )
  }

  if (!post) {
    return (
      <PageLayout>
        <main className="container section-block">
          <h1>Post not found</h1>
          <p>This article does not exist yet. Please check the blog index.</p>
          <Link to="/blog">Go to blog</Link>
        </main>
      </PageLayout>
    )
  }

  const relatedPosts = allPosts
    .filter((item) => item.slug !== slug)
    .filter((item) => item.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3)

  return (
    <PageLayout>
      <main className={`container section-block reveal template-${post.template || 'minimal'}`}>
        <header className="blog-header">
          <p className="meta">
            {toReadableDate(post.publishedOn)} • {post.readMinutes} min read
          </p>
          <h1>{post.title}</h1>
          <div className="chip-row">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </header>

        {post.coverImage && (
          <figure className="blog-cover">
            <img src={post.coverImage} alt={`${post.title} cover image`} loading="lazy" />
          </figure>
        )}

        <article className="post-content">
          {post.blocks && post.blocks.length > 0 ? (
            <ContentRenderer blocks={post.blocks} />
          ) : (
            post.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          )}
        </article>

        {relatedPosts.length > 0 ? (
          <section className="detail-panel">
            <h2>Related posts</h2>
            <div className="blog-list">
              {relatedPosts.map((item) => (
                <article key={item.slug} className="blog-item">
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

        <Link to="/blog">Back to all posts</Link>
      </main>
    </PageLayout>
  )
}
