-- ============================================
-- Supabase Schema for Portfolio Admin
-- Run this in your Supabase SQL Editor
-- ============================================

-- Projects table
create table if not exists projects (
  id         uuid primary key default gen_random_uuid(),
  slug       text unique not null,
  title      text not null,
  description text not null,
  category   text not null,
  year       text not null,
  outcome    text not null,
  featured   boolean default false,
  stack      text[] default '{}',
  live_url   text default '',
  repo_url   text default '',
  template   text,
  sections   jsonb,
  created_at timestamptz default now()
);

-- Blog posts table
create table if not exists blog_posts (
  id           uuid primary key default gen_random_uuid(),
  slug         text unique not null,
  title        text not null,
  excerpt      text not null,
  published_on text not null,
  tags         text[] default '{}',
  read_minutes int default 5,
  body         text[] default '{}',
  template     text,
  blocks       jsonb,
  cover_image  text,
  created_at   timestamptz default now()
);

-- ============================================
-- Row Level Security
-- ============================================

-- Projects RLS
alter table projects enable row level security;

-- Anyone can read projects (public portfolio)
create policy "Public read projects"
  on projects for select
  using (true);

-- Only authenticated users can insert
create policy "Auth insert projects"
  on projects for insert
  with check (auth.role() = 'authenticated');

-- Only authenticated users can update
create policy "Auth update projects"
  on projects for update
  using (auth.role() = 'authenticated');

-- Only authenticated users can delete
create policy "Auth delete projects"
  on projects for delete
  using (auth.role() = 'authenticated');

-- Blog Posts RLS
alter table blog_posts enable row level security;

-- Anyone can read blog posts
create policy "Public read blog_posts"
  on blog_posts for select
  using (true);

-- Only authenticated users can insert
create policy "Auth insert blog_posts"
  on blog_posts for insert
  with check (auth.role() = 'authenticated');

-- Only authenticated users can update
create policy "Auth update blog_posts"
  on blog_posts for update
  using (auth.role() = 'authenticated');

-- Only authenticated users can delete
create policy "Auth delete blog_posts"
  on blog_posts for delete
  using (auth.role() = 'authenticated');
