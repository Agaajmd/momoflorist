import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bunga Papan Surabaya - Order Online Gratis Ongkir | Momo Florist',
  description: 'Pesan bunga papan online di Surabaya. Spesialis bunga papan duka cita, wedding, selamat & sukses. Gratis ongkir, pengerjaan cepat 2 jam, kualitas premium harga terjangkau.',
  keywords: [
    'bunga papan surabaya',
    'bunga papan duka cita',
    'bunga papan wedding',
    'karangan bunga papan',
    'order bunga papan online',
    'toko bunga papan surabaya',
    'bunga papan murah berkualitas',
    'florist surabaya bunga papan'
  ],
  openGraph: {
    title: 'Bunga Papan Surabaya Terpercaya - Momo Florist',
    description: 'Order bunga papan online di Surabaya. Spesialis duka cita, wedding, selamat. Gratis ongkir, pengerjaan 2 jam.',
    images: ['/bunga papan/bunga papan.jpg'],
    url: '/bunga-papan'
  }
}

export default function BungaPapanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
