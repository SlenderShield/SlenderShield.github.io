import { useState } from 'react';
import {
  useProjects,
  useCreateProject,
  useUpdateProject,
  useDeleteProject,
} from '../../hooks/useApi';
import type { Project } from '../../types/content';

export function ManageProjects() {
  const { data: projects, loading, error, refetch } = useProjects();
  const { mutate: createProject, loading: creating } = useCreateProject();
  const { mutate: updateProject, loading: updating } = useUpdateProject();
  const { mutate: deleteProject, loading: deleting } = useDeleteProject();

  const [mode, setMode] = useState<'list' | 'create' | 'edit'>('list');
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const [formData, setFormData] = useState<Partial<Project>>({});
  const [mutationStatus, setMutationStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [mutationMessage, setMutationMessage] = useState('');

  const resetMutationStatus = () => {
    setMutationStatus('idle');
    setMutationMessage('');
  };

  if (loading) {
    return (
      <div className="admin-actions">
        <div className="loading-indicator" />
        <p className="admin-status">Loading projects...</p>
      </div>
    );
  }

  if (error)
    return <p className="admin-status error">Failed to load projects.</p>;

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData(project);
    setMode('edit');
  };

  const handleCreate = () => {
    setEditingProject(null);
    setFormData({
      slug: '',
      title: '',
      description: '',
      category: '',
      year: new Date().getFullYear().toString(),
      outcome: '',
      stack: [],
      liveUrl: '',
      repoUrl: '',
      featured: false,
    });
    setMode('create');
  };

  const handleDelete = async (slug: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProject(slug);
        setMutationStatus('success');
        setMutationMessage('Project deleted successfully');
        await refetch();
        setTimeout(() => {
          resetMutationStatus();
        }, 2000);
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Failed to delete project';
        setMutationStatus('error');
        setMutationMessage(msg);
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (mode === 'create') {
        await createProject(formData as Project);
        setMutationStatus('success');
        setMutationMessage('Project created successfully');
      } else if (mode === 'edit' && editingProject) {
        await updateProject(editingProject.slug, formData);
        setMutationStatus('success');
        setMutationMessage('Project updated successfully');
      }
      await refetch();
      setTimeout(() => {
        resetMutationStatus();
        setMode('list');
      }, 1500);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to save project';
      setMutationStatus('error');
      setMutationMessage(msg);
    }
  };

  if (mode !== 'list') {
    return (
      <div className="admin-grid">
        <div className="admin-actions">
          <h1 className="admin-heading">
            {mode === 'create' ? 'Create Project' : 'Edit Project'}
          </h1>
          <button onClick={() => setMode('list')} className="admin-button">
            Cancel
          </button>
        </div>

        {mutationStatus !== 'idle' && (
          <div
            className={`admin-panel admin-status ${mutationStatus}`}
            role={mutationStatus === 'error' ? 'alert' : 'status'}
          >
            {mutationMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="admin-panel admin-form">
          <div className="admin-grid cols-2">
            <div className="admin-field">
              <label htmlFor="project-title">Title</label>
              <input
                id="project-title"
                required
                type="text"
                className="admin-input"
                value={formData.title || ''}
                onChange={(event) =>
                  setFormData({ ...formData, title: event.target.value })
                }
              />
            </div>
            <div className="admin-field">
              <label htmlFor="project-slug">Slug</label>
              <input
                id="project-slug"
                required
                disabled={mode === 'edit'}
                type="text"
                className="admin-input"
                value={formData.slug || ''}
                onChange={(event) =>
                  setFormData({ ...formData, slug: event.target.value })
                }
              />
            </div>
            <div className="admin-field admin-span-2">
              <label htmlFor="project-description">Description</label>
              <textarea
                id="project-description"
                required
                className="admin-textarea"
                value={formData.description || ''}
                onChange={(event) =>
                  setFormData({ ...formData, description: event.target.value })
                }
              />
            </div>
            <div className="admin-field">
              <label htmlFor="project-category">Category</label>
              <input
                id="project-category"
                required
                type="text"
                className="admin-input"
                value={formData.category || ''}
                onChange={(event) =>
                  setFormData({ ...formData, category: event.target.value })
                }
              />
            </div>
            <div className="admin-field">
              <label htmlFor="project-year">Year</label>
              <input
                id="project-year"
                required
                type="text"
                className="admin-input"
                value={formData.year || ''}
                onChange={(event) =>
                  setFormData({ ...formData, year: event.target.value })
                }
              />
            </div>
            <div className="admin-field admin-span-2">
              <label htmlFor="project-outcome">Outcome</label>
              <input
                id="project-outcome"
                required
                type="text"
                className="admin-input"
                value={formData.outcome || ''}
                onChange={(event) =>
                  setFormData({ ...formData, outcome: event.target.value })
                }
              />
            </div>
            <div className="admin-field admin-span-2">
              <label htmlFor="project-stack">Stack (comma separated)</label>
              <input
                id="project-stack"
                type="text"
                className="admin-input"
                value={formData.stack?.join(', ') || ''}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    stack: event.target.value
                      .split(',')
                      .map((s) => s.trim())
                      .filter(Boolean),
                  })
                }
              />
            </div>
            <div className="admin-field">
              <label htmlFor="project-live">Live URL</label>
              <input
                id="project-live"
                type="text"
                className="admin-input"
                value={formData.liveUrl || ''}
                onChange={(event) =>
                  setFormData({ ...formData, liveUrl: event.target.value })
                }
              />
            </div>
            <div className="admin-field">
              <label htmlFor="project-repo">Repo URL</label>
              <input
                id="project-repo"
                type="text"
                className="admin-input"
                value={formData.repoUrl || ''}
                onChange={(event) =>
                  setFormData({ ...formData, repoUrl: event.target.value })
                }
              />
            </div>
            <div className="admin-actions admin-span-2">
              <input
                type="checkbox"
                id="featured"
                className="admin-checkbox"
                checked={formData.featured || false}
                onChange={(event) =>
                  setFormData({ ...formData, featured: event.target.checked })
                }
              />
              <label htmlFor="featured">Featured Project</label>
            </div>
          </div>

          <div className="admin-actions">
            <button
              type="submit"
              disabled={creating || updating}
              className="admin-button primary"
            >
              {creating || updating ? 'Saving...' : 'Save Project'}
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-grid">
      <div className="admin-actions">
        <h1 className="admin-heading">Manage Projects</h1>
        <button onClick={handleCreate} className="admin-button primary">
          <span>+</span> New Project
        </button>
      </div>

      {mutationStatus !== 'idle' && (
        <div
          className={`admin-panel admin-status ${mutationStatus}`}
          role={mutationStatus === 'error' ? 'alert' : 'status'}
        >
          {mutationMessage}
        </div>
      )}

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Category</th>
              <th>Year</th>
              <th>Featured</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects?.map((project) => (
              <tr key={project.slug}>
                <td>
                  <p>{project.title}</p>
                  <p className="admin-status">{project.slug}</p>
                </td>
                <td>{project.category}</td>
                <td>{project.year}</td>
                <td>
                  {project.featured ? (
                    <span className="admin-status">Featured</span>
                  ) : (
                    <span className="admin-status">No</span>
                  )}
                </td>
                <td>
                  <div className="admin-actions">
                    <button
                      onClick={() => handleEdit(project)}
                      className="admin-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project.slug)}
                      disabled={deleting}
                      className="admin-button danger"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {(!projects || projects.length === 0) && (
              <tr>
                <td colSpan={5} className="admin-status">
                  No projects found. Create one to get started!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
