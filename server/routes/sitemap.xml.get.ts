export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || 'https://vemianou.org'
  
  // Static pages
  const staticPages = [
    '',
    '/contacts',
    '/gallery',
    '/privacy-policy',
    '/terms-of-use',
  ]
  
  // Fetch articles from Strapi
  let articles: Array<{ slug: string; updatedAt?: string }> = []
  try {
    const strapiUrl = config.public.strapiUrl || 'https://localhost:1337'
    const apiUrl = `${strapiUrl}/api/articles?fields[0]=slug&fields[1]=updatedAt&pagination[pageSize]=100`
    
    const response = await $fetch<{ data?: Array<{ attributes?: { slug?: string; updatedAt?: string } }> }>(apiUrl)
    
    if (response?.data && Array.isArray(response.data)) {
      articles = response.data
        .map(item => ({
          slug: item.attributes?.slug || '',
          updatedAt: item.attributes?.updatedAt,
        }))
        .filter(item => item.slug)
    }
  } catch (error) {
    console.error('Error fetching articles for sitemap:', error)
  }
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${staticPages.map(page => {
  const url = `${siteUrl}${page}`
  const lastmod = new Date().toISOString().split('T')[0]
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
}).join('\n')}
${articles.map(article => {
  const url = `${siteUrl}/articles/${article.slug}`
  const lastmod = article.updatedAt 
    ? new Date(article.updatedAt).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0]
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
}).join('\n')}
</urlset>`
  
  event.node.res.setHeader('Content-Type', 'application/xml')
  return sitemap
})

