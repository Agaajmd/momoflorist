"use client"

import { motion } from "framer-motion"
import { Gift, Heart, Star, Phone } from "lucide-react"
import MobileProductGrid from "@/components/mobile-product-grid"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

const standingFlowerImages = [
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 1",
    title: "Standing Flower Elegant",
    description: "Standing flower dengan desain elegan untuk acara formal",
    price: "Rp 450.000",
  },
  {
    src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 2",
    title: "Standing Flower Premium",
    description: "Rangkaian premium dengan bunga segar pilihan",
    price: "Rp 550.000",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 3",
    title: "Standing Flower Classic",
    description: "Desain klasik yang timeless untuk berbagai acara",
    price: "Rp 400.000",
  },
  {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 4",
    title: "Standing Flower Modern",
    description: "Rangkaian modern dengan sentuhan kontemporer",
    price: "Rp 475.000",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 5",
    title: "Standing Flower Luxury",
    description: "Standing flower mewah untuk acara istimewa",
    price: "Rp 650.000",
  },
  {
    src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 6",
    title: "Standing Flower Colorful",
    description: "Rangkaian warna-warni yang ceria",
    price: "Rp 425.000",
  },
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 7",
    title: "Standing Flower Garden",
    description: "Tema garden dengan bunga beragam",
    price: "Rp 500.000",
  },
  {
    src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 8",
    title: "Standing Flower Romantic",
    description: "Desain romantis untuk momen spesial",
    price: "Rp 525.000",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 9",
    title: "Standing Flower Festive",
    description: "Rangkaian meriah untuk perayaan",
    price: "Rp 450.000",
  },
  {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 10",
    title: "Standing Flower Minimalist",
    description: "Desain minimalis yang elegan",
    price: "Rp 375.000",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 11",
    title: "Standing Flower Traditional",
    description: "Rangkaian tradisional dengan sentuhan modern",
    price: "Rp 400.000",
  },
  {
    src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 12",
    title: "Standing Flower Exclusive",
    description: "Rangkaian eksklusif untuk acara VIP",
    price: "Rp 750.000",
  },
]

const occasions = [
  {
    icon: Heart,
    title: "Pernikahan",
    description: "Standing flower elegan untuk acara pernikahan",
  },
  {
    icon: Gift,
    title: "Selamat & Sukses",
    description: "Ucapan selamat untuk pencapaian istimewa",
  },
  {
    icon: Star,
    title: "Duka Cita",
    description: "Menyampaikan belasungkawa dengan hormat",
  },
]

export default function BungaStandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Bunga Standing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Spesialis Bunga Standing (Standing Flower) untuk acara Pernikahan, Selamat, Duka Cita, dll.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <WhatsAppButton
                message="Halo, saya ingin memesan bunga standing dari Popo Florist"
                className="text-lg px-8 py-3 h-12"
              >
                Pesan Standing Flower
              </WhatsAppButton>
              <Button variant="outline" size="lg" className="h-12 bg-transparent" asChild>
                <a href="tel:081213142558" className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Telepon Langsung</span>
                </a>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block"
            >
              <WhatsAppButton
                message="Halo, saya ingin mendapatkan promo menarik untuk bunga standing dari Popo Florist"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg animate-pulse h-14"
              >
                🎉 Dapatkan Promo Menarik!
              </WhatsAppButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Cocok untuk Berbagai Acara
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Standing flower kami dirancang khusus untuk memberikan kesan elegan di setiap momen penting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {occasions.map((occasion, index) => (
              <motion.div
                key={occasion.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                  <occasion.icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{occasion.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{occasion.description}</p>
                <WhatsAppButton
                  message={`Halo, saya ingin memesan standing flower untuk acara ${occasion.title} dari Popo Florist`}
                  className="w-full h-10"
                >
                  Pesan untuk {occasion.title}
                </WhatsAppButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Gallery Standing Flower
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Lihat koleksi standing flower terbaik kami yang telah dipercaya oleh ratusan pelanggan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                message="Halo, saya tertarik dengan standing flower di gallery Popo Florist"
                className="text-lg px-8 py-3 h-12"
              >
                Konsultasi Design
              </WhatsAppButton>
              <Button variant="outline" size="lg" className="h-12 bg-transparent" asChild>
                <a href="tel:081213142558" className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Call: 081213142558</span>
                </a>
              </Button>
            </div>
          </motion.div>

          <MobileProductGrid products={standingFlowerImages} columns={3} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Siap Mempercantik Acara Anda?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Standing flower berkualitas premium dengan harga bersahabat. Konsultasi gratis sekarang!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                message="Halo, saya ingin konsultasi dan memesan standing flower dari Popo Florist"
                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3 h-12"
              >
                Konsultasi Gratis
              </WhatsAppButton>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent h-12"
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
