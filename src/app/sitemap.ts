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
    return posts.map((post: { slug: string; modified: string; date: string }) => ({
      slug: post.slug,
      modified: post.modified,
      date: post.date
    }))
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
    return []
  }
}

// Clean sitemap matching pediamower.com format
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mypetwellness.site'

  // Main pages with /en prefix for proper Google indexing
  const mainPages = [
    { route: '/en', priority: 1, changeFreq: 'weekly' }, // Homepage
    { route: '/en/blog', priority: 0.8, changeFreq: 'weekly' }, // Blog index
    { route: '/en/about', priority: 0.7, changeFreq: 'monthly' }, // About page
    { route: '/en/contact', priority: 0.6, changeFreq: 'monthly' }, // Contact page
  ]

  const legalPages = [
    { route: '/en/privacy', priority: 0.3, changeFreq: 'yearly' },
    { route: '/en/terms', priority: 0.3, changeFreq: 'yearly' },
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Fetch blog posts
  const blogPosts = await getBlogPosts()

  // 1. Add main pages
  mainPages.forEach(({ route, priority, changeFreq }) => {
    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: changeFreq as 'daily' | 'weekly' | 'monthly' | 'yearly',
      priority: priority,
    })
  })

  // 2. Add blog posts (all with 0.8 priority like pediamower)
  blogPosts.forEach((post: { slug: string; modified: string; date: string }) => {
    sitemap.push({
      url: `${baseUrl}/en/blog/${post.slug}`,
      lastModified: new Date(post.modified),
      changeFrequency: 'monthly',
      priority: 0.8, // Same as pediamower blog posts
    })
  })

  // 3. Add legal pages
  legalPages.forEach(({ route, priority, changeFreq }) => {
    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: changeFreq as 'daily' | 'weekly' | 'monthly' | 'yearly',
      priority: priority,
    })
  })

  return sitemap
}
