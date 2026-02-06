import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dwscience.com' // Ensure this matches the live domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // If you have an 'About' or 'Contact' page, add them here:
    // { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
  ]
}