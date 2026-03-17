import { projects } from '../content/projects';
import { blogPosts } from '../content/blogPosts';
import type { Project, BlogPost } from '../types/content';

// Simulated network delay
const DELAY_MS = 300;

export async function getProjects(): Promise<Project[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, DELAY_MS);
  });
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const project = projects.find((p) => p.slug === slug);
      resolve(project || null);
    }, DELAY_MS);
  });
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(blogPosts);
    }, DELAY_MS);
  });
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = blogPosts.find((p) => p.slug === slug);
      resolve(post || null);
    }, DELAY_MS);
  });
}
