import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bunga Papan Mini Surabaya - Elegan & Praktis | Momo Florist',
  description: 'Bunga papan mini Surabaya untuk duka cita, wedding, selamat. Praktis, elegan, harga terjangkau. Gratis ongkir area Surabaya, pengerjaan cepat 2 jam.',
  keywords: [
    'bunga papan mini surabaya',
    'bunga papan mini duka cita', 
    'bunga papan mini wedding',
    'karangan bunga mini',
    'bunga papan kecil',
    'toko bunga mini surabaya'
  ],
  openGraph: {
    title: 'Bunga Papan Mini Surabaya - Momo Florist',
    description: 'Bunga papan mini elegan untuk duka cita, wedding, selamat. Gratis ongkir Surabaya.',
    images: ['/bunga papan/bunga papan2.jpg'],
    url: '/bunga-papan-mini'
  }
}

export default function BungaPapanMiniLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
