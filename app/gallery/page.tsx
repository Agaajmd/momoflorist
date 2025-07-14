"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, MapPin, Clock, Instagram } from "lucide-react"
import MobileProductGrid from "@/components/mobile-product-grid"
import MapsEmbed from "@/components/maps-embed"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-pink-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/background/bunga papan, bunga tangan3.jpg')" }}></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Gallery Kami
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Lihat koleksi karya terbaik kami - dari bunga papan, standing flower, hand bouquet, hingga dekorasi bunga
              yang memukau
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                message="Halo, saya tertarik dengan karya-karya di gallery Popo Florist"
                className="text-lg px-8 py-3 h-12"
              >
                Konsultasi Design
              </WhatsAppButton>
              <Button variant="outline" size="lg" className="h-12 bg-transparent" asChild>
                <a href="tel:081213142558" className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Telepon Langsung</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-20 bg-white dark:bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/background/bunga papan, bunga tangan4.jpg')" }}></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Karya Terbaik Kami</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Setiap karya dibuat dengan penuh dedikasi dan perhatian terhadap detail untuk memberikan hasil yang
              sempurna
            </p>
          </motion.div>

          <MobileProductGrid products={galleryImages} columns={3} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-800">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/background/bunga papan, bunga tangan5.jpg')" }}></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Hubungi Kami</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-pink-600 dark:text-pink-400 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Alamat Lengkap</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Jl. Kayoon, Komplek Pasar Bunga Stand C-22, Surabaya
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-600 dark:text-green-400 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Jam Operasional</h3>
                    <p className="text-green-600 dark:text-green-400 font-semibold text-lg">Buka 24 Jam</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Melayani pesanan kapan saja</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h3>
                      <p className="text-gray-600 dark:text-gray-300">{phoneNumber}</p>
                    </div>
                  </div>
                  <WhatsAppButton message="Halo, saya ingin bertanya tentang layanan Popo Florist" className="h-10">
                    Chat
                  </WhatsAppButton>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Telepon</h3>
                      <p className="text-gray-600 dark:text-gray-300">{phoneNumber}</p>
                    </div>
                  </div>
                  <Button asChild className="h-10">
                    <a href={`tel:${phoneNumber}`}>Call</a>
                  </Button>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Instagram className="h-6 w-6 text-pink-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Instagram</h3>
                      <p className="text-gray-600 dark:text-gray-300">@Popoflorist01</p>
                    </div>
                  </div>
                  <Button variant="outline" className="h-10 bg-transparent" asChild>
                    <a href="https://instagram.com/popoflorist01" target="_blank" rel="noopener noreferrer">
                      Follow
                    </a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/background/bunga papan, bunga tangan6.jpg')" }}></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tertarik dengan Karya Kami?</h2>
            <p className="text-xl text-pink-100 mb-8">
              Konsultasikan kebutuhan bunga Anda dengan tim ahli kami. Gratis konsultasi, hasil memuaskan!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                message="Halo, saya tertarik dengan karya di gallery dan ingin konsultasi dengan Popo Florist"
                className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-3 h-12"
              >
                Konsultasi Gratis
              </WhatsAppButton>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-pink-600 bg-transparent h-12"
              >
                <a href="tel:081213142558">Telepon: 081213142558</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
