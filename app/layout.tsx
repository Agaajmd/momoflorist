import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import RoutePreloader from "@/components/route-preloader"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#BFA2DB' },
    { media: '(prefers-color-scheme: dark)', color: '#2F3134' }
  ],
}

export const metadata: Metadata = {
  title: {
    default: "Momo Florist - Toko Bunga Online Surabaya | Bunga Papan, Standing Flower, Hand Bouquet",
    template: "%s | Momo Florist Surabaya"
  },
  description:
    "Momo Florist adalah toko bunga online terpercaya di Surabaya yang melayani pengiriman ke seluruh Indonesia. Spesialis bunga papan, standing flower, dan hand bouquet. Buka 24 jam, gratis ongkir area Surabaya, pengerjaan cepat hanya 2 jam. Kualitas premium, harga terjangkau.",
  keywords: [
    "toko bunga surabaya",
    "bunga papan surabaya", 
    "karangan bunga",
    "standing flower", 
    "hand bouquet",
    "florist surabaya",
    "bunga duka cita",
    "bunga pernikahan",
    "bunga papan mini",
    "toko bunga online",
    "pengiriman bunga surabaya",
    "bunga segar berkualitas"
  ],
  authors: [{ name: "Momo Florist" }],
  creator: "Momo Florist",
  publisher: "Momo Florist",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://momoflorist.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Momo Florist - Toko Bunga Online Surabaya Terpercaya",
    description: "Spesialis bunga papan, standing flower, hand bouquet. Buka 24 jam, gratis ongkir Surabaya, pengerjaan cepat 2 jam. Order sekarang!",
    url: 'https://momoflorist.vercel.app',
    siteName: 'Momo Florist',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/logo MomoFlorist.png',
        width: 1200,
        height: 630,
        alt: 'Momo Florist - Toko Bunga Online Surabaya',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Momo Florist - Toko Bunga Online Surabaya",
    description: "Spesialis bunga papan, standing flower, hand bouquet. Buka 24 jam, gratis ongkir Surabaya!",
    images: ['/logo MomoFlorist.png'],
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
  icons: {
    icon: [
      { url: "/logo MomoFlorist.png", sizes: "32x32", type: "image/png" },
      { url: "/logo MomoFlorist.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/logo MomoFlorist.png",
    apple: [
      { url: "/logo MomoFlorist.png", sizes: "180x180", type: "image/png" }
    ],
  },
  manifest: '/manifest.json',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'msapplication-TileColor': '#BFA2DB',
    'msapplication-config': '/browserconfig.xml',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Momo Florist',
  image: 'https://momoflorist.vercel.app/logo MomoFlorist.png',
  '@id': 'https://momoflorist.vercel.app',
  url: 'https://momoflorist.vercel.app',
  telephone: '+62-812-1314-2558',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Surabaya',
    addressLocality: 'Surabaya',
    postalCode: '60000',
    addressRegion: 'Jawa Timur',
    addressCountry: 'ID'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -7.2575,
    longitude: 112.7521
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ],
    opens: '00:00',
    closes: '23:59'
  },
  sameAs: [
    'https://wa.me/6281213142558'
  ],
  description: 'Toko bunga online terpercaya di Surabaya. Spesialis bunga papan, standing flower, hand bouquet. Buka 24 jam, gratis ongkir, pengerjaan cepat 2 jam.',
  priceRange: 'Rp 150.000 - Rp 2.000.000',
  paymentAccepted: 'Cash, Transfer Bank',
  currenciesAccepted: 'IDR'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#BFA2DB" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#2F3134" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50">
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <RoutePreloader />
          <Navigation />
          <main id="main-content" className="min-h-screen" role="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
