import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pawverse.com'
  const locales = ['en', 'fr', 'es', 'de', 'ar', 'it', 'pt', 'ja', 'zh', 'hi', 'ko', 'ru', 'nl', 'tr', 'pl']

  const routes = [
    '',
    '/blog',
    '/gallery',
    '/contact',
    '/about',
    '/privacy',
    '/terms'
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Generate sitemap for each locale
  locales.forEach(locale => {
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
  })

  return sitemap
}
