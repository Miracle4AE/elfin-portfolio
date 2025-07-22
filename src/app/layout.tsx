import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '../contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elfin Şahin - Graphic Designer & Creative Professional',
  description: 'Adobe Creative Suite uzmanı Elfin Şahin. Logo tasarımı, web tasarımı, sosyal medya ve print tasarımı hizmetleri. Uluslararası sertifikalı grafik tasarımcı.',
  keywords: 'grafik tasarımcı, logo tasarımı, web tasarımı, sosyal medya tasarımı, print tasarımı, Adobe Creative Suite, Photoshop, Illustrator, InDesign',
  authors: [{ name: 'Elfin Şahin' }],
  creator: 'Elfin Şahin',
  publisher: 'Elfin Şahin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://elfin-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Elfin Şahin - Graphic Designer & Creative Professional',
    description: 'Adobe Creative Suite uzmanı Elfin Şahin. Logo tasarımı, web tasarımı, sosyal medya ve print tasarımı hizmetleri.',
    url: 'https://elfin-portfolio.vercel.app',
    siteName: 'Elfin Şahin Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elfin Şahin - Graphic Designer',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elfin Şahin - Graphic Designer & Creative Professional',
    description: 'Adobe Creative Suite uzmanı Elfin Şahin. Logo tasarımı, web tasarımı, sosyal medya ve print tasarımı hizmetleri.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
