import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hand Bouquet Surabaya - Buket Bunga Segar | Momo Florist',
  description: 'Hand bouquet Surabaya untuk anniversary, birthday, valentine, graduation. Buket bunga segar romantis. Gratis ongkir, pengerjaan cepat 2 jam.',
  keywords: [
    'hand bouquet surabaya',
    'buket bunga',
    'bouquet anniversary', 
    'bouquet birthday',
    'buket valentine',
    'hand bouquet wedding',
    'toko bouquet surabaya'
  ],
  openGraph: {
    title: 'Hand Bouquet Surabaya Romantis - Momo Florist',
    description: 'Hand bouquet untuk anniversary, valentine, birthday. Bunga segar romantis. Gratis ongkir.',
    images: ['/hand bouquet/hand bouquet.jpg'],
    url: '/hand-bouquet'
  }
}

export default function HandBouquetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
