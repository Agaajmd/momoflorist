"use client"

import { motion } from "framer-motion"
import { Gift, Heart, Star, Phone, ArrowRight } from "lucide-react"
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
  {
    src: "/bunga standing/bunga standing.jpg",
    alt: "Standing Flower 13",
    title: "Standing Flower Spesial",
    description: "Rangkaian standing flower dengan bunga segar pilihan",
    price: "Rp 525.000",
  },
  {
    src: "/bunga standing/bunga standing2.jpg",
    alt: "Standing Flower 14",
    title: "Standing Flower Elegant Premium",
    description: "Desain elegant premium untuk acara istimewa",
    price: "Rp 575.000",
  },
  {
    src: "/bunga standing/bunga standing3.jpg",
    alt: "Standing Flower 15",
    title: "Standing Flower Mewah",
    description: "Rangkaian mewah dengan bunga import berkualitas",
    price: "Rp 650.000",
  },
  {
    src: "/bunga standing/bunga standing4.jpg",
    alt: "Standing Flower 16",
    title: "Standing Flower Terbaru",
    description: "Koleksi terbaru dengan desain modern",
    price: "Rp 600.000",
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
        <div className="absolute inset-0 bg-[url('/background/bunga%20papan,%20bunga%20tangan3.jpg')] bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-20"></div>
        <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/50"></div>
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

            <div className="flex flex-col items-center gap-4 mb-8">
              <WhatsAppButton
                message="Halo, saya ingin memesan bunga standing dari Popo Florist"
                className="bg-[#E5A96E] hover:bg-[#D4A574] text-white font-bold rounded-full px-8 py-4 transition-all duration-200 transform hover:scale-105 text-base border-none shadow-lg hover:shadow-xl min-w-[200px] h-12"
                hideIcon
              >
                Pesan Standing Flower
              </WhatsAppButton>
              <Button 
                variant="ghost" 
                size="lg" 
                className="border-2 border-[#EDB7C6] text-[#EDB7C6] hover:text-[#E5A96E] hover:border-[#E5A96E] hover:bg-[#EDB7C6]/5 bg-transparent rounded-full px-8 py-3 font-medium transition-all duration-200 transform hover:scale-105 min-w-[200px] h-12" 
                asChild
              >
                <a href="tel:081213142558" className="flex items-center justify-center space-x-2">
                  <span>Telepon Langsung</span>
                  <ArrowRight className="h-4 w-4" />
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
                className="bg-gradient-to-r from-[#D4A574] to-[#E19CAF] hover:from-[#C19A68] hover:to-[#D48BA3] text-white font-bold text-base px-8 py-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 min-w-[200px] h-12"
                hideIcon
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
                  className="w-full bg-[#D4A574] hover:bg-[#C19A68] text-white font-medium rounded-full px-6 py-2 transition-all duration-200 transform hover:scale-105 text-sm border-none shadow-lg hover:shadow-xl min-w-[120px] h-10"
                >
                  Pesan untuk {occasion.title}
                </WhatsAppButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/background/bunga%20papan,%20bunga%20tangan4.jpg')] bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-20"></div>
        <div className="absolute inset-0 bg-gray-50/40 dark:bg-gray-800/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="flex flex-col items-center gap-4">
              <WhatsAppButton
                message="Halo, saya tertarik dengan standing flower di gallery Popo Florist"
                className="bg-[#E5A96E] hover:bg-[#D4A574] text-white font-bold rounded-full px-8 py-4 transition-all duration-200 transform hover:scale-105 text-base border-none shadow-lg hover:shadow-xl min-w-[200px] h-12"
                hideIcon
              >
                Konsultasi Design
              </WhatsAppButton>
              <Button 
                variant="ghost" 
                size="lg" 
                className="border-2 border-[#EDB7C6] text-[#EDB7C6] hover:text-[#E5A96E] hover:border-[#E5A96E] hover:bg-[#EDB7C6]/5 bg-transparent rounded-full px-8 py-3 font-medium transition-all duration-200 transform hover:scale-105 min-w-[200px] h-12" 
                asChild
              >
                <a href="tel:081213142558" className="flex items-center justify-center space-x-2">
                  <span>Telepon Langsung</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <MobileProductGrid products={standingFlowerImages} columns={3} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/background/bunga%20papan,%20bunga%20tangan2.jpg')] bg-cover bg-center bg-no-repeat opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/60 to-indigo-600/60"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            <div className="flex flex-col items-center gap-4">
              <WhatsAppButton
                message="Halo, saya ingin konsultasi dan memesan standing flower dari Popo Florist"
                className="bg-white text-[#E5A96E] hover:bg-gray-50 hover:text-[#D4A574] font-bold rounded-full px-8 py-4 transition-all duration-200 transform hover:scale-105 text-base border-none shadow-lg hover:shadow-xl min-w-[200px] h-12"
                hideIcon
              >
                Konsultasi Gratis
              </WhatsAppButton>
              <Button
                variant="ghost"
                size="lg"
                className="border-2 border-white text-white hover:text-gray-200 hover:border-gray-200 hover:bg-white/10 bg-transparent rounded-full px-8 py-3 font-medium transition-all duration-200 transform hover:scale-105 min-w-[200px] h-12"
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
