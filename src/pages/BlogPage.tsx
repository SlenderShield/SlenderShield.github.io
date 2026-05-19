import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { useBlogPosts } from '../hooks/useApi';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { toReadableDate } from '../utils/date';

function getYear(dateString: string) {
  return new Date(dateString).getFullYear().toString();
}

export function BlogPage() {
  useDocumentTitle(
    'Journal',
    'Articles, stories, and photography from work and life by Muralidhara Bhat KS.',
  );
  const { data: blogPosts, loading } = useBlogPosts();
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const topicOptions = useMemo(() => {
    const set = new Set<string>();
    blogPosts.forEach((post) => {
      post.tags
        .filter((tag) => !/\bseries\b/i.test(tag))
        .forEach((tag) => set.add(tag));
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [blogPosts]);

  const yearOptions = useMemo(() => {
    const set = new Set<string>();
    blogPosts.forEach((post) => {
      set.add(getYear(post.publishedOn));
    });
    return Array.from(set).sort((a, b) => Number(b) - Number(a));
  }, [blogPosts]);

  const visiblePosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const topicMatches =
        selectedTopic === 'all' || post.tags.includes(selectedTopic);
      const yearMatches =
        selectedYear === 'all' || getYear(post.publishedOn) === selectedYear;

      return topicMatches && yearMatches;
    });
  }, [blogPosts, selectedTopic, selectedYear]);

  const hasFilters = selectedTopic !== 'all' || selectedYear !== 'all';
  const activeFilters = [
    selectedTopic !== 'all' ? `Topic: ${selectedTopic}` : null,
    selectedYear !== 'all' ? `Year: ${selectedYear}` : null,
  ].filter(Boolean) as string[];

  if (loading) {
    return (
      <PageLayout>
        <main className="container section-block reveal">
          <section className="page-loading-panel" aria-busy="true" aria-live="polite">
            <div className="loading-line loading-line-lg" />
            <div className="loading-line loading-line-md" />
            <div className="loading-grid">
              <div className="loading-card" />
              <div className="loading-card" />
              <div className="loading-card" />
            </div>
          </section>
        </main>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <main className="container section-block reveal">
        <div className="section-head">
          <h1>Journal</h1>
          <Link to="/">Back home</Link>
        </div>
        <p>Short, readable posts grouped by topic and year.</p>

        <div className="blog-toolbar" aria-label="Blog filters">
          <div className="listing-summary">
            <p className="meta">Browse posts</p>
            <p>{visiblePosts.length} result{visiblePosts.length === 1 ? '' : 's'} visible</p>
          </div>

          {activeFilters.length > 0 ? (
            <div className="active-filter-row" aria-label="Active blog filters">
              <span className="meta">Active filters</span>
              <div className="chip-row active-filter-chips">
                {activeFilters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className="filter-pill"
                    onClick={() => {
                      setSelectedTopic('all')
                      setSelectedYear('all')
                    }}
                  >
                    {filter}
                    <span aria-hidden="true">×</span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          <div className="blog-filters">
            <label className="search-field blog-filter-field">
              <span>Topic</span>
              <select
                value={selectedTopic}
                onChange={(event) => setSelectedTopic(event.target.value)}
              >
                <option value="all">All topics</option>
                {topicOptions.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </label>

            <label className="search-field blog-filter-field">
              <span>Year</span>
              <select
                value={selectedYear}
                onChange={(event) => setSelectedYear(event.target.value)}
              >
                <option value="all">All years</option>
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {hasFilters ? (
            <button
              type="button"
              className="button ghost blog-clear"
              onClick={() => {
                setSelectedTopic('all');
                setSelectedYear('all');
              }}
            >
              Clear filters
            </button>
          ) : null}
        </div>

        <div className="blog-list blog-list-grid">
          {visiblePosts.map((post) => (
            <article key={post.slug} className="blog-item">
              {post.coverImage ? (
                <Link
                  to={`/blog/${post.slug}`}
                  className="blog-item-cover-link"
                  aria-label={`Open ${post.title}`}
                >
                  <img
                    src={post.coverImage}
                    alt={`${post.title} cover image`}
                    className="blog-item-cover"
                    loading="lazy"
                  />
                </Link>
              ) : null}
              <header className="blog-card-header">
                <p className="meta">
                  {toReadableDate(post.publishedOn)} • {post.readMinutes} min read
                </p>
                <h2>{post.title}</h2>
              </header>
              <p>{post.excerpt}</p>
              <div className="chip-row">
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="blog-card-actions">
                <Link to={`/blog/${post.slug}`}>Read full post</Link>
              </div>
            </article>
          ))}
        </div>

        {visiblePosts.length === 0 ? (
          <p>No posts match this filter yet.</p>
        ) : null}
      </main>
    </PageLayout>
  );
}
