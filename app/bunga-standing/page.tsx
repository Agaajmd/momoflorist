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
  },
  {
    src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 2",
    title: "Standing Flower Premium",
    description: "Rangkaian premium dengan bunga segar pilihan",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 3",
    title: "Standing Flower Classic",
    description: "Desain klasik yang timeless untuk berbagai acara",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 5",
    title: "Standing Flower Luxury",
    description: "Standing flower mewah untuk acara istimewa",
  },
  {
    src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 6",
    title: "Standing Flower Colorful",
    description: "Rangkaian warna-warni yang ceria",
  },
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 7",
    title: "Standing Flower Garden",
    description: "Tema garden dengan bunga beragam",
  },
  {
    src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 8",
    title: "Standing Flower Romantic",
    description: "Desain romantis untuk momen spesial",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 9",
    title: "Standing Flower Festive",
    description: "Rangkaian meriah untuk perayaan",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 11",
    title: "Standing Flower Traditional",
    description: "Rangkaian tradisional dengan sentuhan modern",
  },
  {
    src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Standing Flower 12",
    title: "Standing Flower Exclusive",
    description: "Rangkaian eksklusif untuk acara VIP",
  },
  {
    src: "/bunga standing/bunga standing.jpg",
    alt: "Standing Flower 13",
    title: "Standing Flower Spesial",
    description: "Rangkaian standing flower dengan bunga segar pilihan",
  },
  {
    src: "/bunga standing/bunga standing2.jpg",
    alt: "Standing Flower 14",
    title: "Standing Flower Elegant Premium",
    description: "Desain elegant premium untuk acara istimewa",
  },
  {
    src: "/bunga standing/bunga standing3.jpg",
    alt: "Standing Flower 15",
    title: "Standing Flower Mewah",
    description: "Rangkaian mewah dengan bunga import berkualitas",
  },
  {
    src: "/bunga standing/bunga standing4.jpg",
    alt: "Standing Flower 16",
    title: "Standing Flower Terbaru",
    description: "Koleksi terbaru dengan desain modern",
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
                Bunga Standing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-[#C6BBAE] mb-8 max-w-4xl mx-auto leading-relaxed">
              Spesialis <span className="font-bold text-[#8B5A9F] dark:text-[#BFA2DB]">bunga standing</span> dan <span className="font-bold text-[#8B5A9F] dark:text-[#BFA2DB]">standing flower</span> untuk acara <span className="font-bold text-[#8B5A9F] dark:text-[#BFA2DB]">pernikahan</span>, <span className="font-bold text-[#8B5A9F] dark:text-[#BFA2DB]">grand opening</span>, <span className="font-bold text-[#8B5A9F] dark:text-[#BFA2DB]">duka cita</span>, dan berbagai acara istimewa. <span className="font-bold text-[#8B5A9F] dark:text-[#BFA2DB]">Pembuatan hanya 2 jam dan free biaya pengiriman.</span>
            </p>

            <div className="flex flex-col items-center gap-4 mb-8">
              <WhatsAppButton
                message="Halo, saya ingin memesan bunga standing dari Momo Florist"
                className="bg-gradient-to-r from-[#BFA2DB] to-[#D4C3A6] text-white font-bold rounded-full px-8 py-4 transition-all duration-200 transform hover:scale-105 text-base border-none shadow-lg drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)] min-w-[200px] h-12 ring-2 ring-[#BFA2DB]/60 hover:ring-[#D4C3A6]/80"
                hideIcon
              >
                Pesan Standing Flower
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

      {/* Why Choose Us Section */}
      <section className="py-12 bg-[#CDB6BD] dark:bg-[#2F3134] -mt-16 md:-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Kualitas Premium', description: 'Bunga segar dan rangkaian terbaik untuk setiap acara dengan harga terjangkau' },
              { icon: Gift, title: 'Gratis Ongkir Surabaya', description: 'Pengiriman gratis area Surabaya & sekitarnya, siap diantar ke lokasi acara' },
              { icon: Star, title: 'Pelayanan Profesional', description: 'Tim berpengalaman & konsultasi gratis 24 jam untuk semua kebutuhan bunga' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.07 }}
                className="relative text-center p-8 bg-gradient-to-br from-white/60 via-[#EDE6DE]/60 to-[#BFA2DB]/30 dark:from-[#232325]/60 dark:via-[#2F3134]/60 dark:to-[#BFA2DB]/20 rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 border border-white/40 dark:border-[#C6BBAE]/30 group overflow-hidden"
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#BFA2DB]/20 dark:bg-[#BFA2DB]/30 rounded-full blur-2xl opacity-60 group-hover:scale-110 transition-transform duration-300 z-0" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#BFA2DB]/30 dark:bg-[#BFA2DB]/40 rounded-full mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-9 w-9 text-[#8B5A9F] dark:text-[#BFA2DB]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-2 drop-shadow">{item.title}</h3>
                  <p className="text-base text-gray-700 dark:text-[#C6BBAE] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-12 bg-[#CDB6BD] dark:bg-[#2F3134] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-4">
              Koleksi <span className="font-bold text-[#8B5A9F] dark:text-[#BFA2DB]">Standing Flower</span> Eksklusif
            </h2>
            <p className="text-lg text-gray-800 dark:text-[#C6BBAE] max-w-2xl mx-auto mb-8">
              Lihat koleksi <span className="font-bold text-[#8B5A9F] dark:text-[#BFA2DB]">bunga standing</span> terbaik kami yang telah dipercaya oleh ratusan pelanggan untuk acara <span className="font-bold text-[#8B5A9F] dark:text-[#BFA2DB]">wedding</span>, <span className="font-bold text-[#8B5A9F] dark:text-[#BFA2DB]">grand opening</span>, dan <span className="font-bold text-[#8B5A9F] dark:text-[#BFA2DB]">acara perusahaan</span>
            </p>
            <div className="flex flex-col items-center gap-4">
              <WhatsAppButton
                message="Halo, saya tertarik dengan standing flower di gallery Momo Florist"
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

          <MobileProductGrid products={standingFlowerImages} columns={3} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 bg-[#CDB6BD] dark:bg-[#2F3134] overflow-hidden rounded-b-[3rem] mt-0">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Siap Mempercantik Acara Anda?</h2>
            <p className="text-xl text-gray-800 dark:text-[#C6BBAE] mb-8">
              <span className="font-bold text-[#8B5A9F] dark:text-[#BFA2DB]">Standing flower</span> berkualitas premium dengan <span className="font-bold text-[#8B5A9F] dark:text-[#BFA2DB]">harga terjangkau</span>. <span className="font-bold text-[#8B5A9F] dark:text-[#BFA2DB]">Gratis konsultasi</span> dan <span className="font-bold text-[#8B5A9F] dark:text-[#BFA2DB]">free ongkir Surabaya</span>!
            </p>
            <div className="flex flex-col items-center gap-4">
              <WhatsAppButton
                message="Halo, saya ingin konsultasi dan memesan standing flower dari Momo Florist"
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
