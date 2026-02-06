import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Block private folders if you have any
    },
    sitemap: 'https://dwscience.com/sitemap.xml',
  }
}