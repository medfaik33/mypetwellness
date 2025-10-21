import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PetWellness - Pet Blog & Community',
    short_name: 'PetWellness',
    description: 'Your ultimate destination for pet care tips, adoption stories, and connecting with fellow pet lovers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#22c55e',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['lifestyle', 'pets', 'animals', 'blog'],
    lang: 'en',
    orientation: 'portrait',
  }
}
