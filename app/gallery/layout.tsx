import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery Karya Bunga - Inspirasi Dekorasi Bunga | Momo Florist',
  description: 'Gallery karya terbaik Momo Florist Surabaya. Inspirasi bunga papan, standing flower, hand bouquet, bunga salib, dekorasi wedding & event.',
  keywords: [
    'gallery bunga surabaya',
    'karya florist surabaya',
    'inspirasi dekorasi bunga',
    'portfolio bunga',
    'galeri toko bunga',
    'hasil karya florist'
  ],
  openGraph: {
    title: 'Gallery Karya Terbaik - Momo Florist Surabaya',
    description: 'Lihat gallery karya terbaik kami. Inspirasi untuk wedding, event, dan acara spesial Anda.',
    images: ['/gallery/gallery toko bunga.jpg'],
    url: '/gallery'
  }
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
