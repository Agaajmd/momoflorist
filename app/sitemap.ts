import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://momoflorist.vercel.app'
  
  // Define all static routes
  const routes = [
    '',
    '/bunga-papan',
    '/bunga-papan-mini',
    '/bunga-standing', 
    '/hand-bouquet',
    '/gallery',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
