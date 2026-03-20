import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { useBlogPosts } from '../hooks/useApi';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { toReadableDate } from '../utils/date';

function isSeriesPost(tags: string[]) {
  return tags.some((tag) => /\bseries\b/i.test(tag));
}

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
  const [selectedSeries, setSelectedSeries] = useState('all');
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

  const seriesOptions = useMemo(() => {
    const set = new Set<string>();
    blogPosts.forEach((post) => {
      post.tags
        .filter((tag) => /\bseries\b/i.test(tag))
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
      const seriesMatches =
        selectedSeries === 'all' ||
        (selectedSeries === 'any' && isSeriesPost(post.tags)) ||
        post.tags.includes(selectedSeries);
      const yearMatches =
        selectedYear === 'all' || getYear(post.publishedOn) === selectedYear;

      return topicMatches && seriesMatches && yearMatches;
    });
  }, [blogPosts, selectedSeries, selectedTopic, selectedYear]);

  if (loading) {
    return (
      <PageLayout>
        <main className="container section-block reveal">
          <p>Loading journal...</p>
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
        <p>Articles, stories, and photography from work and life.</p>

        <div className="blog-toolbar" aria-label="Blog filters">
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
            <span>Series</span>
            <select
              value={selectedSeries}
              onChange={(event) => setSelectedSeries(event.target.value)}
            >
              <option value="all">All posts</option>
              <option value="any">Any series</option>
              {seriesOptions.map((series) => (
                <option key={series} value={series}>
                  {series}
                </option>
              ))}
            </select>
          </label>

          <label className="search-field blog-filter-field">
            <span>Date</span>
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

        {visiblePosts.length === 0 ? (
          <p>No posts match this filter yet.</p>
        ) : null}
      </main>
    </PageLayout>
  );
}
