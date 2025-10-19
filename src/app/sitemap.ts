import { MetadataRoute } from 'next'

// Function to fetch blog posts from WordPress
async function getBlogPosts() {
  try {
    const response = await fetch('https://gurastech.com/wp-json/wp/v2/posts?per_page=100&_embed', {
      next: { revalidate: 3600 } // Revalidate every hour
    })
    
    if (!response.ok) {
      console.error('Failed to fetch blog posts for sitemap')
      return []
    }
    
    const posts = await response.json()
    return posts.map((post: any) => ({
      slug: post.slug,
      modified: post.modified,
      date: post.date
    }))
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
    return []
  }
}

// Updated sitemap with correct domain and blog posts
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mypetwellness.site'
  const locales = ['en', 'fr', 'es', 'de', 'ar', 'it', 'pt', 'ja', 'zh', 'hi', 'ko', 'ru', 'nl', 'tr', 'pl']

  const routes = [
    '',
    '/blog',
    '/contact',
    '/about',
    '/privacy',
    '/terms'
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Fetch blog posts
  const blogPosts = await getBlogPosts()

  // Generate sitemap for each locale
  locales.forEach(locale => {
    // Add static routes
    routes.forEach(route => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map(l => [l, `${baseUrl}/${l}${route}`])
          )
        }
      })
    })

    // Add blog posts
    blogPosts.forEach(post => {
      sitemap.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.modified),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map(l => [l, `${baseUrl}/${l}/blog/${post.slug}`])
          )
        }
      })
    })
  })

  return sitemap
}
