import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'dwscience - Excellence in Science Education',
//   description: 'Discover science learning with Dilini Weerakkody. English-medium science classes for grades 6-11, designed to inspire curiosity and deep understanding.',
//   generator: 'v0.app',
//   openGraph: {
//     title: 'dwscience - Excellence in Science Education',
//     description: 'Discover science learning with Dilini Weerakkody. English-medium science classes for grades 6-11.',
//     type: 'website',
//   },
//   icons: {
//     icon: [
//       {
//         url: '/icon-light-32x32.png',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/icon-dark-32x32.png',
//         media: '(prefers-color-scheme: dark)',
//       },
//       {
//         url: '/icon.svg',
//         type: 'image/svg+xml',
//       },
//     ],
//     apple: '/apple-icon.png',
//   },
// }

export const metadata: Metadata = {
  // Better for search: Name + Subject + Location keywords
  title: 'Dilini Weerakkody | Science Classes - Galle, Baddegama & Hirikumbura',
  description: 'Join Dilini Weerakkody for English-medium Science (Grades 6-11) at Sunray (Galle), Zigma (Baddegama), and Prinstent (Hirikumbura). Enroll for 2026 batches.',
  generator: 'v0.app',
  
  // Important for WhatsApp/Facebook sharing
  openGraph: {
    title: 'Science with Dilini Weerakkody',
    description: 'Expert Science tuition in Galle, Baddegama, and Hirikumbura. English medium, Grades 6-11.',
    type: 'website',
    url: 'https://dwscience.com', // Replace with her actual domain
    siteName: 'dwscience',
    images: [{ url: '/og-image.jpg' }], // Add a path to a photo of her or a lab
  },

  // This helps Google's Local Search
  keywords: [
    'Dilini Weerakkody', 
    'Science classes Galle', 
    'Sunray Galle Science', 
    'Zigma Baddegama', 
    'Prinstent Hirikumbura',
    'English medium science Sri Lanka'
  ],

  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
