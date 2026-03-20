import { useState, useEffect, useCallback } from 'react';
import type { Project, BlogPost } from '../types/content';
import * as api from '../services/api';

function useAsyncResource<T>(loader: () => Promise<T>, initialData: T) {
  const [data, setData] = useState<T>(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    loader()
      .then((res) => {
        if (mounted) {
          setData(res);
          setError(null);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          const errorObj = err instanceof Error ? err : new Error('Unknown error');
          setError(errorObj);
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [loader]);

  return { data, loading, error };
}

export function useProjects() {
  const loadProjects = useCallback(() => api.getProjects(), []);
  return useAsyncResource(loadProjects, [] as Project[]);
}

export function useProject(slug: string) {
  const loadProject = useCallback(() => api.getProjectBySlug(slug), [slug]);
  return useAsyncResource(loadProject, null as Project | null);
}

export function useBlogPosts() {
  const loadBlogPosts = useCallback(() => api.getBlogPosts(), []);
  return useAsyncResource(loadBlogPosts, [] as BlogPost[]);
}

export function useBlogPost(slug: string) {
  const loadBlogPost = useCallback(() => api.getBlogPostBySlug(slug), [slug]);
  return useAsyncResource(loadBlogPost, null as BlogPost | null);
}

// ============== MUTATION HOOKS ==============

export function useCreateProject() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const mutate = async (project: Project) => {
    setLoading(true);
    setError(null);
    try {
      const result = await api.createProject(project);
      setLoading(false);
      return result;
    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error('Unknown error');
      setError(errorObj);
      setLoading(false);
      throw errorObj;
    }
  };

  return { mutate, loading, error };
}

export function useUpdateProject() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const mutate = async (slug: string, updates: Partial<Project>) => {
    setLoading(true);
    setError(null);
    try {
      const result = await api.updateProject(slug, updates);
      setLoading(false);
      return result;
    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error('Unknown error');
      setError(errorObj);
      setLoading(false);
      throw errorObj;
    }
  };

  return { mutate, loading, error };
}

export function useDeleteProject() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const mutate = async (slug: string) => {
    setLoading(true);
    setError(null);
    try {
      await api.deleteProject(slug);
      setLoading(false);
    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error('Unknown error');
      setError(errorObj);
      setLoading(false);
      throw errorObj;
    }
  };

  return { mutate, loading, error };
}

export function useCreateBlogPost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const mutate = async (post: BlogPost) => {
    setLoading(true);
    setError(null);
    try {
      const result = await api.createBlogPost(post);
      setLoading(false);
      return result;
    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error('Unknown error');
      setError(errorObj);
      setLoading(false);
      throw errorObj;
    }
  };

  return { mutate, loading, error };
}

export function useUpdateBlogPost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const mutate = async (slug: string, updates: Partial<BlogPost>) => {
    setLoading(true);
    setError(null);
    try {
      const result = await api.updateBlogPost(slug, updates);
      setLoading(false);
      return result;
    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error('Unknown error');
      setError(errorObj);
      setLoading(false);
      throw errorObj;
    }
  };

  return { mutate, loading, error };
}

export function useDeleteBlogPost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const mutate = async (slug: string) => {
    setLoading(true);
    setError(null);
    try {
      await api.deleteBlogPost(slug);
      setLoading(false);
    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error('Unknown error');
      setError(errorObj);
      setLoading(false);
      throw errorObj;
    }
  };

  return { mutate, loading, error };
}
