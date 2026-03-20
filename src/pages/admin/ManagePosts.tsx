import { useState } from 'react';
import {
  useBlogPosts,
  useCreateBlogPost,
  useUpdateBlogPost,
  useDeleteBlogPost,
} from '../../hooks/useApi';
import type { BlogPost } from '../../types/content';

export function ManagePosts() {
  const { data: posts, loading, error } = useBlogPosts();
  const { mutate: createPost, loading: creating } = useCreateBlogPost();
  const { mutate: updatePost, loading: updating } = useUpdateBlogPost();
  const { mutate: deletePost, loading: deleting } = useDeleteBlogPost();

  const [mode, setMode] = useState<'list' | 'create' | 'edit'>('list');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const [formData, setFormData] = useState<Partial<BlogPost>>({});

  if (loading) {
    return (
      <div className="admin-actions">
        <div className="loading-indicator" />
        <p className="admin-status">Loading posts...</p>
      </div>
    );
  }

  if (error) return <p className="admin-status error">Failed to load posts.</p>;

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData(post);
    setMode('edit');
  };

  const handleCreate = () => {
    setEditingPost(null);
    setFormData({
      slug: '',
      title: '',
      excerpt: '',
      publishedOn: new Date().toISOString().split('T')[0],
      tags: [],
      readMinutes: 5,
      body: [],
    });
    setMode('create');
  };

  const handleDelete = async (slug: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      await deletePost(slug);
      window.location.reload();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Convert body text to array of paragraphs
    const toSubmit = {
      ...formData,
      body:
        typeof (formData as Record<string, unknown>)._bodyText === 'string'
          ? ((formData as Record<string, unknown>)._bodyText as string)
              .split('\n\n')
              .filter(Boolean)
          : formData.body,
    };
    delete (toSubmit as Record<string, unknown>)._bodyText;

    if (mode === 'create') {
      await createPost(toSubmit as BlogPost);
    } else if (mode === 'edit' && editingPost) {
      await updatePost(editingPost.slug, toSubmit);
    }
    window.location.reload();
  };

  if (mode !== 'list') {
    // For the textarea, join body array into paragraphs
    const bodyText =
      ((formData as Record<string, unknown>)._bodyText as string | undefined) ??
      formData.body?.join('\n\n') ??
      '';

    return (
      <div className="admin-grid">
        <div className="admin-actions">
          <h1 className="admin-heading">
            {mode === 'create' ? 'Create Post' : 'Edit Post'}
          </h1>
          <button onClick={() => setMode('list')} className="admin-button">
            Cancel
          </button>
        </div>

        <form onSubmit={handleSubmit} className="admin-panel admin-form">
          <div className="admin-grid cols-2">
            <div className="admin-field">
              <label htmlFor="post-title">Title</label>
              <input
                id="post-title"
                required
                type="text"
                className="admin-input"
                value={formData.title || ''}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>
            <div className="admin-field">
              <label htmlFor="post-slug">Slug</label>
              <input
                id="post-slug"
                required
                disabled={mode === 'edit'}
                type="text"
                className="admin-input"
                value={formData.slug || ''}
                onChange={(e) =>
                  setFormData({ ...formData, slug: e.target.value })
                }
              />
            </div>
            <div className="admin-field admin-span-2">
              <label htmlFor="post-excerpt">Excerpt</label>
              <textarea
                id="post-excerpt"
                required
                className="admin-textarea"
                value={formData.excerpt || ''}
                onChange={(e) =>
                  setFormData({ ...formData, excerpt: e.target.value })
                }
              />
            </div>
            <div className="admin-field">
              <label htmlFor="post-tags">Tags (comma separated)</label>
              <input
                id="post-tags"
                type="text"
                className="admin-input"
                value={formData.tags?.join(', ') || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    tags: e.target.value
                      .split(',')
                      .map((s) => s.trim())
                      .filter(Boolean),
                  })
                }
              />
            </div>
            <div className="admin-field">
              <label htmlFor="post-published-on">Published On</label>
              <input
                id="post-published-on"
                required
                type="text"
                className="admin-input"
                value={formData.publishedOn || ''}
                onChange={(e) =>
                  setFormData({ ...formData, publishedOn: e.target.value })
                }
                placeholder="YYYY-MM-DD"
              />
            </div>
            <div className="admin-field">
              <label htmlFor="post-read-minutes">Read Minutes</label>
              <input
                id="post-read-minutes"
                required
                type="number"
                min={1}
                className="admin-input"
                value={formData.readMinutes ?? 5}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    readMinutes: parseInt(e.target.value) || 5,
                  })
                }
              />
            </div>

            <div className="admin-field admin-span-2">
              <label htmlFor="post-body">
                Body (paragraphs separated by blank lines)
              </label>
              <textarea
                id="post-body"
                required
                className="admin-textarea"
                value={bodyText}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    _bodyText: e.target.value,
                  } as Partial<BlogPost>)
                }
              />
            </div>
          </div>

          <div className="admin-actions">
            <button
              type="submit"
              disabled={creating || updating}
              className="admin-button primary"
            >
              {creating || updating ? 'Saving...' : 'Save Post'}
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-grid">
      <div className="admin-actions">
        <h1 className="admin-heading">Manage Blog Posts</h1>
        <button onClick={handleCreate} className="admin-button primary">
          <span>+</span> New Post
        </button>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Post</th>
              <th>Tags</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts?.map((post) => (
              <tr key={post.slug}>
                <td>
                  <p>{post.title}</p>
                  <p className="admin-status">{post.slug}</p>
                </td>
                <td>{post.tags?.join(', ') || '—'}</td>
                <td>{post.publishedOn}</td>
                <td>
                  <div className="admin-actions">
                    <button
                      onClick={() => handleEdit(post)}
                      className="admin-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.slug)}
                      disabled={deleting}
                      className="admin-button danger"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {(!posts || posts.length === 0) && (
              <tr>
                <td colSpan={4} className="admin-status">
                  No posts found. Create one to get started!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
