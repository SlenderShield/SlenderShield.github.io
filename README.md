# Personal Portfolio (React + Vite + TypeScript)

Dynamic portfolio scaffold with data-driven sections and blog-ready routing.

## Run Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Dynamic Content Model

Update your profile and portfolio content in one place:

- `src/content/siteContent.ts`

Add, edit, or remove projects without touching page components:

- `src/content/projects.json`

Add, edit, or remove blog posts without touching page components:

- `src/content/blogPosts.json`

All pages render from this data layer:

- Home: `src/pages/HomePage.tsx`
- About: `src/pages/AboutPage.tsx`
- Contact: `src/pages/ContactPage.tsx`
- Projects index: `src/pages/ProjectsPage.tsx`
- Project detail: `src/pages/ProjectDetailPage.tsx`
- Blog index: `src/pages/BlogPage.tsx`
- Blog detail: `src/pages/BlogPostPage.tsx`

## Add More Projects

1. Open `src/content/projects.json`.
2. Add a project object with:
   - `slug`
   - `title`
   - `description`
   - `category`
   - `year`
   - `outcome`
   - `featured` (optional; set `true` to show on home)
   - `stack`
   - `liveUrl`
   - `repoUrl`
3. Save and refresh.

The project appears automatically on:

- `/projects` (full, filterable list)
- `/projects/:slug` (detail page)
- Home page if marked as `featured`

## Add a New Blog Post

1. Open `src/content/blogPosts.json`.
2. Add a new object with:
   - `slug`
   - `title`
   - `excerpt`
   - `publishedOn` (`YYYY-MM-DD`)
   - `tags` (`string[]`)
   - `readMinutes`
   - `body` (`string[]` paragraphs)
3. Save and refresh the app.

The post appears automatically on:

- `/blog`
- `/blog/:slug`
- Home page featured list

## Resume File

Put your PDF at:

- `public/resume.pdf`

The Resume button uses `siteContent.resumeUrl`.

## Notes

- Routing is handled by React Router.
- Design uses CSS variables for easy theme changes.
- Structure is now JSON-backed and CMS-style for content scaling.
- Theme switch is persisted with local storage (`light`/`dark`).
- Route transitions use subtle motion with reduced-motion accessibility fallback.
