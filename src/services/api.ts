import { hasSupabaseEnv, supabase } from './supabase';
import { projects as staticProjects } from '../content/projects';
import { blogPosts as staticBlogPosts } from '../content/blogPosts';
import type { Project, BlogPost } from '../types/content';

let projectsCache: Project[] | null = null
let blogPostsCache: BlogPost[] | null = null

// ============== TRANSFORM HELPERS ==============
// Supabase uses snake_case columns; our TS types use camelCase

interface ProjectRow {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  outcome: string;
  featured: boolean;
  stack: string[];
  live_url: string;
  repo_url: string;
  template: string | null;
  sections: { title: string; blocks: unknown[] }[] | null;
}

interface BlogPostRow {
  slug: string;
  title: string;
  excerpt: string;
  published_on: string;
  tags: string[];
  read_minutes: number;
  body: string[];
  template: string | null;
  blocks: unknown[] | null;
  cover_image: string | null;
}

function rowToProject(row: ProjectRow): Project {
  return {
    slug: row.slug,
    title: row.title,
    description: row.description,
    category: row.category,
    year: row.year,
    outcome: row.outcome,
    featured: row.featured,
    stack: row.stack ?? [],
    liveUrl: row.live_url ?? '',
    repoUrl: row.repo_url ?? '',
    template: row.template as Project['template'],
    sections: row.sections as Project['sections'],
  };
}

function projectToRow(p: Partial<Project>): Record<string, unknown> {
  const row: Record<string, unknown> = {};
  if (p.slug !== undefined) row.slug = p.slug;
  if (p.title !== undefined) row.title = p.title;
  if (p.description !== undefined) row.description = p.description;
  if (p.category !== undefined) row.category = p.category;
  if (p.year !== undefined) row.year = p.year;
  if (p.outcome !== undefined) row.outcome = p.outcome;
  if (p.featured !== undefined) row.featured = p.featured;
  if (p.stack !== undefined) row.stack = p.stack;
  if (p.liveUrl !== undefined) row.live_url = p.liveUrl;
  if (p.repoUrl !== undefined) row.repo_url = p.repoUrl;
  if (p.template !== undefined) row.template = p.template;
  if (p.sections !== undefined) row.sections = p.sections;
  return row;
}

function rowToBlogPost(row: BlogPostRow): BlogPost {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    publishedOn: row.published_on,
    tags: row.tags ?? [],
    readMinutes: row.read_minutes,
    body: row.body ?? [],
    template: row.template as BlogPost['template'],
    blocks: row.blocks as BlogPost['blocks'],
    coverImage: row.cover_image ?? undefined,
  };
}

function blogPostToRow(p: Partial<BlogPost>): Record<string, unknown> {
  const row: Record<string, unknown> = {};
  if (p.slug !== undefined) row.slug = p.slug;
  if (p.title !== undefined) row.title = p.title;
  if (p.excerpt !== undefined) row.excerpt = p.excerpt;
  if (p.publishedOn !== undefined) row.published_on = p.publishedOn;
  if (p.tags !== undefined) row.tags = p.tags;
  if (p.readMinutes !== undefined) row.read_minutes = p.readMinutes;
  if (p.body !== undefined) row.body = p.body;
  if (p.template !== undefined) row.template = p.template;
  if (p.blocks !== undefined) row.blocks = p.blocks;
  if (p.coverImage !== undefined) row.cover_image = p.coverImage;
  return row;
}

// ============== PROJECTS ==============

export async function getProjects(): Promise<Project[]> {
  if (projectsCache) return projectsCache
  if (!hasSupabaseEnv || !supabase) {
    projectsCache = staticProjects
    return staticProjects
  }

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });
  if (error || !data) {
    projectsCache = staticProjects
    return staticProjects;
  }
  projectsCache = data.map(rowToProject)
  return projectsCache;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (projectsCache) {
    return projectsCache.find((p) => p.slug === slug) ?? null
  }

  if (!hasSupabaseEnv || !supabase) {
    return staticProjects.find((p) => p.slug === slug) ?? null
  }

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single();
  if (error || !data) {
    // Fallback to static
    return staticProjects.find((p) => p.slug === slug) ?? null;
  }
  return rowToProject(data);
}

export async function createProject(project: Project): Promise<Project> {
  if (!hasSupabaseEnv || !supabase) {
    throw new Error('Supabase is not configured for write operations')
  }

  const { data, error } = await supabase
    .from('projects')
    .insert(projectToRow(project))
    .select()
    .single();
  if (error) throw new Error(error.message);
  return rowToProject(data);
}

export async function updateProject(
  slug: string,
  updates: Partial<Project>,
): Promise<Project> {
  if (!hasSupabaseEnv || !supabase) {
    throw new Error('Supabase is not configured for write operations')
  }

  const { data, error } = await supabase
    .from('projects')
    .update(projectToRow(updates))
    .eq('slug', slug)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return rowToProject(data);
}

export async function deleteProject(slug: string): Promise<void> {
  if (!hasSupabaseEnv || !supabase) {
    throw new Error('Supabase is not configured for write operations')
  }

  const { error } = await supabase.from('projects').delete().eq('slug', slug);
  if (error) throw new Error(error.message);
}

// ============== BLOG POSTS ==============

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (blogPostsCache) return blogPostsCache
  if (!hasSupabaseEnv || !supabase) {
    blogPostsCache = staticBlogPosts
    return staticBlogPosts
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });
  if (error || !data) {
    blogPostsCache = staticBlogPosts
    return staticBlogPosts;
  }
  blogPostsCache = data.map(rowToBlogPost)
  return blogPostsCache;
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  if (blogPostsCache) {
    return blogPostsCache.find((p) => p.slug === slug) ?? null
  }

  if (!hasSupabaseEnv || !supabase) {
    return staticBlogPosts.find((p) => p.slug === slug) ?? null
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();
  if (error || !data) {
    return staticBlogPosts.find((p) => p.slug === slug) ?? null;
  }
  return rowToBlogPost(data);
}

export async function createBlogPost(post: BlogPost): Promise<BlogPost> {
  if (!hasSupabaseEnv || !supabase) {
    throw new Error('Supabase is not configured for write operations')
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .insert(blogPostToRow(post))
    .select()
    .single();
  if (error) throw new Error(error.message);
  return rowToBlogPost(data);
}

export async function updateBlogPost(
  slug: string,
  updates: Partial<BlogPost>,
): Promise<BlogPost> {
  if (!hasSupabaseEnv || !supabase) {
    throw new Error('Supabase is not configured for write operations')
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .update(blogPostToRow(updates))
    .eq('slug', slug)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return rowToBlogPost(data);
}

export async function deleteBlogPost(slug: string): Promise<void> {
  if (!hasSupabaseEnv || !supabase) {
    throw new Error('Supabase is not configured for write operations')
  }

  const { error } = await supabase.from('blog_posts').delete().eq('slug', slug);
  if (error) throw new Error(error.message);
}
