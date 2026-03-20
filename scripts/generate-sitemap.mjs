import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const siteUrl = 'https://slendershield.github.io'

const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.9' },
  { path: '/projects', changefreq: 'weekly', priority: '0.9' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
  { path: '/contact', changefreq: 'yearly', priority: '0.7' },
]

function xmlEscape(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function toUrlTag({ loc, changefreq, priority, lastmod }) {
  const parts = [
    '  <url>',
    `    <loc>${xmlEscape(loc)}</loc>`,
    changefreq ? `    <changefreq>${changefreq}</changefreq>` : '',
    priority ? `    <priority>${priority}</priority>` : '',
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : '',
    '  </url>',
  ].filter(Boolean)

  return parts.join('\n')
}

async function readJson(filePath) {
  const raw = await readFile(filePath, 'utf8')
  return JSON.parse(raw)
}

async function main() {
  const projectPath = resolve(process.cwd(), 'src/content/projects.json')
  const blogPath = resolve(process.cwd(), 'src/content/blogPosts.json')
  const sitemapPath = resolve(process.cwd(), 'public/sitemap.xml')

  const [projects, blogPosts] = await Promise.all([
    readJson(projectPath),
    readJson(blogPath),
  ])

  const projectRoutes = projects
    .filter((project) => typeof project.slug === 'string' && project.slug.length > 0)
    .map((project) => ({
      path: `/projects/${project.slug}`,
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: /^\d{4}$/.test(project.year) ? `${project.year}-01-01` : undefined,
    }))

  const blogRoutes = blogPosts
    .filter((post) => typeof post.slug === 'string' && post.slug.length > 0)
    .map((post) => ({
      path: `/blog/${post.slug}`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: /^\d{4}-\d{2}-\d{2}$/.test(post.publishedOn) ? post.publishedOn : undefined,
    }))

  const allRoutes = [...staticRoutes, ...projectRoutes, ...blogRoutes]
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...allRoutes.map((route) =>
      toUrlTag({
        loc: `${siteUrl}${route.path}`,
        changefreq: route.changefreq,
        priority: route.priority,
        lastmod: route.lastmod,
      }),
    ),
    '</urlset>',
    '',
  ].join('\n')

  await writeFile(sitemapPath, xml, 'utf8')
  console.log(`Generated sitemap with ${allRoutes.length} URLs at ${sitemapPath}`)
}

main().catch((error) => {
  console.error('Failed to generate sitemap:', error)
  process.exitCode = 1
})
