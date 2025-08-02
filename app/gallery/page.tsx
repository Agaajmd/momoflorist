"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, MapPin, Clock, Instagram, ArrowRight } from "lucide-react"
import { Suspense, lazy } from "react"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

// Lazy load heavy components
const MobileProductGrid = lazy(() => import("@/components/mobile-product-grid"))
const MapsEmbed = lazy(() => import("@/components/maps-embed"))

export const dynamic = 'force-dynamic'

const galleryImages = [
  // Bunga Papan
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Bunga Papan 1",
    title: "Bunga Papan Elegant",
    description: "Rangkaian bunga papan dengan desain elegan",
    price: "Rp 350.000",
  },
  {
    src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Bunga Papan 2",
    title: "Bunga Papan Premium",
    description: "Papan bunga premium untuk acara istimewa",
    price: "Rp 450.000",
  },
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Bunga Papan 3",
    title: "Bunga Papan Classic",
    description: "Desain klasik yang timeless",
    price: "Rp 300.000",
  },
  {
    src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Bunga Papan 4",
    title: "Bunga Papan Modern",
    description: "Rangkaian modern dengan sentuhan kontemporer",
    price: "Rp 400.000",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Bunga Papan 5",
    title: "Bunga Papan Luxury",
    description: "Papan bunga mewah untuk momen bersejarah",
    price: "Rp 550.000",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Bunga Papan 7",
    title: "Bunga Papan Festive",
    description: "Desain festive untuk perayaan",
    price: "Rp 425.000",
  },
  {
    src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Bunga Papan 8",
    title: "Bunga Papan Traditional",
    description: "Rangkaian tradisional dengan sentuhan modern",
    price: "Rp 325.000",
  },
  // Standing Flower
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 1",
    title: "Standing Flower Elegant",
    description: "Standing flower dengan desain elegan",
    price: "Rp 450.000",
  },
  {
    src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 2",
    title: "Standing Flower Premium",
    description: "Rangkaian premium untuk acara formal",
    price: "Rp 550.000",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 3",
    title: "Standing Flower Classic",
    description: "Desain klasik yang tidak lekang waktu",
    price: "Rp 400.000",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 5",
    title: "Standing Flower Luxury",
    description: "Standing flower mewah untuk acara VIP",
    price: "Rp 650.000",
  },
  {
    src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 6",
    title: "Standing Flower Garden",
    description: "Tema garden dengan bunga beragam",
    price: "Rp 500.000",
  },
  // Hand Bouquet
  {
    src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 1",
    title: "Bouquet Romantic Rose",
    description: "Rangkaian mawar romantis",
    price: "Rp 250.000",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 2",
    title: "Bouquet Spring Garden",
    description: "Buket tema taman musim semi",
    price: "Rp 200.000",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 4",
    title: "Bouquet Pink Delight",
    description: "Buket pink yang menggemaskan",
    price: "Rp 225.000",
  },
  {
    src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 5",
    title: "Bouquet Luxury Mix",
    description: "Campuran bunga premium",
    price: "Rp 350.000",
  },
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 6",
    title: "Bouquet Sunflower Joy",
    description: "Buket bunga matahari ceria",
    price: "Rp 180.000",
  },
  {
    src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 7",
    title: "Bouquet Purple Dream",
    description: "Rangkaian ungu yang memukau",
    price: "Rp 240.000",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 8",
    title: "Bouquet Pastel Sweet",
    description: "Warna pastel yang lembut",
    price: "Rp 210.000",
  },
  // Dekorasi
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Dekorasi Bunga 2",
    title: "Dekorasi Event",
    description: "Dekorasi untuk acara corporate",
    price: "Rp 1.800.000",
  },
  {
    src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Dekorasi Bunga 3",
    title: "Dekorasi Birthday",
    description: "Dekorasi ulang tahun yang meriah",
    price: "Rp 1.200.000",
  },
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Dekorasi Bunga 4",
    title: "Dekorasi Garden Party",
    description: "Dekorasi tema garden party",
    price: "Rp 1.500.000",
  },
  {
    src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Dekorasi Bunga 5",
    title: "Dekorasi Romantic",
    description: "Dekorasi romantis untuk proposal",
    price: "Rp 1.000.000",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Dekorasi Bunga 6",
    title: "Dekorasi Luxury",
    description: "Dekorasi mewah untuk acara eksklusif",
    price: "Rp 3.500.000",
  },
  // Gallery Images
  {
    src: "/gallery/gallery toko bunga.jpg",
    alt: "Gallery Toko Bunga 1",
    title: "Showcase Toko Bunga",
    description: "Tampilan koleksi bunga di toko kami",
    price: "Konsultasi",
  },
  {
    src: "/gallery/gallery toko bunga2.jpg",
    alt: "Gallery Toko Bunga 2",
    title: "Rangkaian Bunga Spesial",
    description: "Koleksi rangkaian bunga terbaru",
    price: "Konsultasi",
  },
  {
    src: "/gallery/gallery toko bunga3.jpg",
    alt: "Gallery Toko Bunga 3",
    title: "Dekorasi Bunga Cantik",
    description: "Inspirasi dekorasi untuk acara Anda",
    price: "Konsultasi",
  },
  {
    src: "/gallery/gallery toko bunga4.jpg",
    alt: "Gallery Toko Bunga 4",
    title: "Bunga Segar Pilihan",
    description: "Koleksi bunga segar berkualitas",
    price: "Konsultasi",
  },
  {
    src: "/gallery/gallery toko bunga5.jpg",
    alt: "Gallery Toko Bunga 5",
    title: "Karya Seni Bunga",
    description: "Kreasi seni dengan bunga-bunga indah",
    price: "Konsultasi",
  },
  {
    src: "/gallery/gallery toko bunga6.jpg",
    alt: "Gallery Toko Bunga 6",
    title: "Presentasi Bunga Elegan",
    description: "Penyajian bunga dengan gaya elegan",
    price: "Konsultasi",
  },
  {
    src: "/gallery/gallery toko bunga7.jpg",
    alt: "Gallery Toko Bunga 7",
    title: "Workshop Bunga",
    description: "Suasana workshop dan pembelajaran",
    price: "Konsultasi",
  },
  {
    src: "/gallery/gallery toko bunga8.jpg",
    alt: "Gallery Toko Bunga 8",
    title: "Koleksi Premium",
    description: "Koleksi bunga premium terbaik",
    price: "Konsultasi",
  },
]

export default function GalleryPage() {
  const whatsappNumber = "6281213142558"
  const phoneNumber = "081213142558"

  // Dummy data for each section (replace with real data as needed)
  const bungaSalib = [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      alt: "Bunga Salib 1",
      title: "Bunga Salib Premium",
      description: "Rangkaian bunga salib untuk duka cita dan peringatan",
      price: "Rp 700.000",
    },
    {
      src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
      alt: "Bunga Salib 2",
      title: "Bunga Salib Elegant",
      description: "Desain elegan dan penuh makna",
      price: "Rp 850.000",
    },
    {
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      alt: "Bunga Salib 3",
      title: "Bunga Salib Classic",
      description: "Pilihan klasik untuk penghormatan",
      price: "Rp 650.000",
    },
  ];

  const bungaPotongPita = [
    {
      src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      alt: "Bunga Potong Pita 1",
      title: "Bunga Potong Pita Premium",
      description: "Rangkaian bunga untuk acara peresmian dan grand opening",
      price: "Rp 900.000",
    },
    {
      src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      alt: "Bunga Potong Pita 2",
      title: "Bunga Potong Pita Elegant",
      description: "Desain elegan untuk momen spesial",
      price: "Rp 1.100.000",
    },
    {
      src: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=800&q=80",
      alt: "Bunga Potong Pita 3",
      title: "Bunga Potong Pita Classic",
      description: "Pilihan klasik untuk acara penting",
      price: "Rp 950.000",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#CDB6BD] dark:bg-[#2F3134] py-12 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-6">
              <span className="bg-gradient-to-r from-[#8B5A9F] to-[#A67FA3] bg-clip-text text-transparent">
                Gallery Kami
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-[#C6BBAE] mb-8 max-w-4xl mx-auto leading-relaxed">
              Lihat koleksi karya terbaik kami - dari <span className="font-bold">bunga papan</span>, <span className="font-bold">standing flower</span>, <span className="font-bold">hand bouquet</span>, <span className="font-bold">bunga salib</span>, <span className="font-bold">bunga potong pita</span> hingga <span className="font-bold">dekorasi bunga</span> yang memukau.{" "}
              <span className="font-semibold text-[#8B5A9F] dark:text-[#BFA2DB]">Semua karya dibuat dengan kualitas premium dan harga terjangkau.</span>
            </p>
            <div className="flex flex-col items-center gap-4">
              <WhatsAppButton
                message="Halo, saya tertarik dengan karya-karya di gallery Momo Florist"
                className="bg-gradient-to-r from-[#BFA2DB] to-[#D4C3A6] text-white font-bold rounded-full px-8 py-4 transition-all duration-200 transform hover:scale-105 text-base border-none shadow-lg drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)] min-w-[200px] h-12 ring-2 ring-[#BFA2DB]/60 hover:ring-[#D4C3A6]/80"
                hideIcon
              >
                Konsultasi Design
              </WhatsAppButton>
              <Button
                variant="ghost"
                size="lg"
                className="border-2 border-white text-white font-bold rounded-full px-8 py-3 transition-all duration-200 transform hover:scale-105 min-w-[200px] h-12 bg-transparent shadow-lg drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)] hover:bg-[#BFA2DB] hover:text-white hover:border-[#BFA2DB]"
                asChild
              >
                <a href="tel:081213142558" className="flex items-center justify-center space-x-2">
                  <span>Telepon Langsung</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section: Bunga Salib */}
      <section className="py-16 md:py-24 bg-[#CDB6BD] dark:bg-[#2F3134]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-4">Bunga Salib</h2>
            <p className="text-lg text-gray-800 dark:text-[#C6BBAE] max-w-2xl mx-auto mb-8">
              Rangkaian <span className="font-bold">bunga salib</span> untuk <span className="font-bold">duka cita</span>, <span className="font-bold">peringatan</span>, dan <span className="font-bold">penghormatan</span> dengan desain premium dan penuh makna. Cocok untuk acara <span className="font-bold">gereja</span> dan <span className="font-bold">upacara keagamaan</span>.
            </p>
          </motion.div>
          <Suspense fallback={<div className="grid grid-cols-3 gap-3 md:gap-6"><div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-3xl animate-pulse"></div><div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-3xl animate-pulse"></div><div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-3xl animate-pulse"></div></div>}>
            <MobileProductGrid products={bungaSalib} columns={3} />
          </Suspense>
        </div>
      </section>

      {/* Section: Bunga Potong Pita */}
      <section className="py-16 md:py-24 bg-[#CDB6BD] dark:bg-[#2F3134]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-4">Bunga Potong Pita</h2>
            <p className="text-lg text-gray-800 dark:text-[#C6BBAE] max-w-2xl mx-auto mb-8">
              Pilihan <span className="font-bold">bunga potong pita</span> untuk acara <span className="font-bold">peresmian</span>, <span className="font-bold">grand opening</span>, <span className="font-bold">opening ceremony</span> dan momen spesial lainnya. Desain elegan untuk <span className="font-bold">acara bisnis</span> dan <span className="font-bold">corporate event</span>.
            </p>
          </motion.div>
          <Suspense fallback={<div className="grid grid-cols-3 gap-3 md:gap-6"><div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-3xl animate-pulse"></div><div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-3xl animate-pulse"></div><div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-3xl animate-pulse"></div></div>}>
            <MobileProductGrid products={bungaPotongPita} columns={3} />
          </Suspense>
        </div>
      </section>

      {/* Section: Gallery */}
      <section className="py-16 md:py-24 bg-[#CDB6BD] dark:bg-[#2F3134]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-4">Gallery Karya Terbaik</h2>
            <p className="text-lg text-gray-800 dark:text-[#C6BBAE] max-w-2xl mx-auto mb-8">
              Lihat koleksi karya terbaik kami dari berbagai kategori <span className="font-bold">bunga dan dekorasi</span>. Inspirasi untuk <span className="font-bold">wedding</span>, <span className="font-bold">event</span>, <span className="font-bold">ulang tahun</span> dan <span className="font-bold">acara spesial</span> Anda.
            </p>
          </motion.div>
          <Suspense fallback={<div className="grid grid-cols-3 gap-3 md:gap-6"><div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-3xl animate-pulse"></div><div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-3xl animate-pulse"></div><div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-3xl animate-pulse"></div></div>}>
            <MobileProductGrid products={galleryImages} columns={3} />
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 bg-[#CDB6BD] dark:bg-[#2F3134] overflow-hidden rounded-b-[3rem]">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Tertarik dengan Karya Kami?</h2>
            <p className="text-xl text-gray-800 dark:text-[#C6BBAE] mb-8">
              Konsultasikan kebutuhan <span className="font-bold">bunga dan dekorasi</span> Anda dengan tim ahli kami. <span className="font-bold">Gratis konsultasi</span>, hasil memuaskan untuk segala jenis acara!
            </p>
            <div className="flex flex-col items-center gap-4">
              <WhatsAppButton
                message="Halo, saya tertarik dengan karya di gallery dan ingin konsultasi dengan Momo Florist"
                className="bg-gradient-to-r from-[#BFA2DB] to-[#D4C3A6] text-white font-bold rounded-full px-8 py-4 transition-all duration-200 transform hover:scale-105 text-base border-none shadow-lg drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)] min-w-[200px] h-12 ring-2 ring-[#BFA2DB]/60 hover:ring-[#D4C3A6]/80"
                hideIcon
              >
                Konsultasi Gratis
              </WhatsAppButton>
              <Button
                variant="ghost"
                size="lg"
                className="border-2 border-white text-white font-bold rounded-full px-8 py-3 transition-all duration-200 transform hover:scale-105 min-w-[200px] h-12 bg-transparent shadow-lg drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)] hover:bg-[#BFA2DB] hover:text-white hover:border-[#BFA2DB]"
                asChild
              >
                <a href="tel:081213142558" className="flex items-center justify-center space-x-2">
                  <span>Telepon: 081213142558</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
