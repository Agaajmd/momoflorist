import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Standing Flower Surabaya - Bunga Standing Premium | Momo Florist',
  description: 'Standing flower Surabaya untuk acara formal, wedding, grand opening. Desain elegan, bunga segar berkualitas. Gratis ongkir, pengerjaan cepat 2 jam.',
  keywords: [
    'standing flower surabaya',
    'bunga standing',
    'standing flower wedding',
    'standing flower grand opening',
    'bunga standing acara',
    'toko standing flower surabaya'
  ],
  openGraph: {
    title: 'Standing Flower Surabaya Premium - Momo Florist',
    description: 'Standing flower untuk wedding, grand opening, acara formal. Gratis ongkir Surabaya.',
    images: ['/bunga standing/bunga standing.jpg'],
    url: '/bunga-standing'
  }
}

export default function BungaStandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
