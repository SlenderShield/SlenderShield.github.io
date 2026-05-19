import { useProjects, useBlogPosts } from '../../hooks/useApi';
import { useAuth } from '../../hooks/useAuthHook';

export function AdminDashboard() {
  const { data: projects, loading: pLoading } = useProjects();
  const { data: posts, loading: bLoading } = useBlogPosts();
  const { user } = useAuth();

  if (pLoading || bLoading) {
    return (
      <div className="admin-state-panel">
        <div className="loading-indicator" />
        <p className="admin-status">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="admin-grid admin-dashboard">
      <header className="page-intro admin-intro">
        <p className="eyebrow">Admin</p>
        <h1 className="admin-heading">Dashboard</h1>
        <p>
          Publish and manage portfolio content from one place. The dashboard keeps the data model simple: projects, posts, and status.
        </p>
      </header>

      <div className="admin-grid cols-2 admin-stats-grid">
        <div className="admin-panel admin-stat-card">
          <h2 className="admin-title">Projects</h2>
          <p className="admin-heading">{projects?.length || 0}</p>
          <p className="admin-status">Published projects in portfolio.</p>
        </div>

        <div className="admin-panel admin-stat-card">
          <h2 className="admin-title">Blog posts</h2>
          <p className="admin-heading">{posts?.length || 0}</p>
          <p className="admin-status">Published articles.</p>
        </div>
      </div>

      <div className="admin-panel admin-state-panel">
        <h3 className="admin-title admin-actions">
          <span className="loading-indicator" aria-hidden="true"></span>
          Supabase connected
        </h3>
        <p className="admin-status">
          This dashboard is powered by Supabase. Data is stored in PostgreSQL and persists across sessions. You are signed in as{' '}
          <strong>{user?.email}</strong>.
        </p>
      </div>
    </div>
  );
}
