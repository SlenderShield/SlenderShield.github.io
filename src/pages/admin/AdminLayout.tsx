import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuthHook';

export function AdminLayout() {
  const { signOut } = useAuth();

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <h2 className="admin-title">Admin Dashboard</h2>
        <nav className="admin-nav">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `admin-nav-link${isActive ? ' active' : ''}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/projects"
            className={({ isActive }) =>
              `admin-nav-link${isActive ? ' active' : ''}`
            }
          >
            Manage Projects
          </NavLink>
          <NavLink
            to="/admin/posts"
            className={({ isActive }) =>
              `admin-nav-link${isActive ? ' active' : ''}`
            }
          >
            Manage Posts
          </NavLink>
        </nav>
        <div className="admin-panel">
          <NavLink to="/" className="admin-link">
            <span>&larr;</span> Back to Site
          </NavLink>
          <button onClick={() => signOut()} className="admin-button danger">
            <span>⏻</span> Sign Out
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
