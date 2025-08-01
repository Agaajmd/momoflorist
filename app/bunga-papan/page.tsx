"use client"

import { motion } from "framer-motion"
import { Clock, Truck, Award, Phone, ArrowRight } from "lucide-react"
import MobileProductGrid from "@/components/mobile-product-grid"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

const categories = [
  {
    title: "Duka Cita",
    description: "Bunga papan untuk menyampaikan belasungkawa",
    images: [
      {
        src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Duka Cita 1",
        title: "Papan Duka Cita Elegant",
        description: "Bunga papan duka cita dengan rangkaian bunga putih yang elegan",
      },
      {
        src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Duka Cita 2",
        title: "Papan Duka Cita Premium",
        description: "Rangkaian bunga duka cita dengan bunga lily putih premium",
      },
      {
        src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Duka Cita 3",
        title: "Papan Duka Cita Klasik",
        description: "Desain klasik dengan bunga krisan putih dan hijau",
      },
      {
        src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Duka Cita 4",
        title: "Papan Duka Cita Modern",
        description: "Rangkaian modern dengan bunga mawar putih",
      },
      {
        src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Duka Cita 5",
        title: "Papan Duka Cita Sederhana",
        description: "Desain sederhana namun bermakna",
      },
      {
        src: "/bunga papan/bunga papan.jpg",
        alt: "Bunga Papan Duka Cita 6",
        title: "Papan Duka Cita Spesial",
        description: "Rangkaian duka cita dengan bunga segar pilihan",
      },
    ],
  },
  {
    title: "Selamat & Sukses",
    description: "Bunga papan untuk ucapan selamat dan sukses",
    images: [
      {
        src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Selamat 1",
        title: "Papan Selamat Colorful",
        description: "Rangkaian warna-warni untuk ucapan selamat",
      },
      {
        src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Selamat 2",
        title: "Papan Sukses Premium",
        description: "Desain premium untuk merayakan kesuksesan",
      },
      {
        src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Selamat 3",
        title: "Papan Selamat Elegant",
        description: "Rangkaian elegan dengan bunga mawar merah",
      },
      {
        src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Selamat 5",
        title: "Papan Selamat Festive",
        description: "Rangkaian meriah untuk perayaan",
      },
      {
        src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Selamat 6",
        title: "Papan Sukses Luxury",
        description: "Rangkaian mewah untuk momen bersejarah",
      },
      {
        src: "/bunga papan/bunga papan2.jpg",
        alt: "Bunga Papan Selamat 7",
        title: "Papan Selamat Istimewa",
        description: "Rangkaian istimewa untuk ucapan selamat",
      },
    ],
  },
  {
    title: "Pernikahan",
    description: "Bunga papan untuk acara pernikahan",
    images: [
      {
        src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Pernikahan 1",
        title: "Papan Wedding Romantic",
        description: "Rangkaian romantis dengan mawar pink dan putih",
      },
      {
        src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Pernikahan 2",
        title: "Papan Wedding Classic",
        description: "Desain klasik untuk pernikahan tradisional",
      },
      {
        src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Pernikahan 4",
        title: "Papan Wedding Modern",
        description: "Desain modern untuk pasangan milenial",
      },
      {
        src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Pernikahan 5",
        title: "Papan Wedding Luxury",
        description: "Rangkaian mewah untuk pernikahan istimewa",
      },
      {
        src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Pernikahan 6",
        title: "Papan Wedding Garden",
        description: "Tema garden dengan bunga warna-warni",
      },
      {
        src: "/bunga papan/bunga papan3.jpg",
        alt: "Bunga Papan Pernikahan 7",
        title: "Papan Wedding Premium",
        description: "Rangkaian premium untuk pernikahan impian",
      },
    ],
  },
  {
    title: "Mini",
    description: "Bunga papan ukuran mini untuk ruang terbatas",
    images: [
      {
        src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Mini 1",
        title: "Mini Papan Cute",
        description: "Papan mini dengan desain yang menggemaskan",
      },
      {
        src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Mini 3",
        title: "Mini Papan Colorful",
        description: "Mini papan dengan warna cerah",
      },
      {
        src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Mini 4",
        title: "Mini Papan Premium",
        description: "Mini papan dengan kualitas premium",
      },
      {
        src: "/bunga papan/bunga papan4.jpg",
        alt: "Bunga Papan Mini 5",
        title: "Mini Papan Spesial",
        description: "Mini papan dengan desain spesial",
      },
    ],
  },
]

const features = [
  {
    icon: Clock,
    title: "Pengerjaan Cepat",
    description: "Hanya 2 jam siap",
  },
  {
    icon: Truck,
    title: "Gratis Ongkir",
    description: "Area Surabaya",
  },
  {
    icon: Award,
    title: "Kualitas Premium",
    description: "Bunga segar terbaik",
  },
]

export default function BungaPapanPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#CDB6BD] dark:bg-[#2F3134] py-20 md:py-28 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-8">
              <span className="bg-gradient-to-r from-[#8B5A9F] to-[#A67FA3] bg-clip-text text-transparent">
                Bunga Papan
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-[#C6BBAE] mb-12 max-w-4xl mx-auto leading-relaxed">
              Kami spesialis dalam pembuatan segala jenis bunga papan & karangan bunga, termasuk papan dukacita, selamat
              & sukses, pernikahan.{" "}
              <span className="font-semibold text-[#BFA2DB]">Pengerjaan hanya 2 jam, gratis ongkir.</span>
            </p>

            <div className="flex flex-col items-center gap-6">
              <WhatsAppButton
                message="Halo, saya ingin memesan bunga papan dari Momo Florist"
                className="bg-gradient-to-r from-[#BFA2DB] to-[#D4C3A6] text-white font-bold rounded-full px-8 py-4 transition-all duration-200 transform hover:scale-105 text-base border-none shadow-lg drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)] min-w-[200px] h-12 ring-2 ring-[#BFA2DB]/60 hover:ring-[#D4C3A6]/80"
                hideIcon
              >
                Pesan Bunga Papan
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

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-[#CDB6BD] dark:bg-[#2F3134]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center p-8 bg-gradient-to-br from-white/60 via-[#EDE6DE]/60 to-[#BFA2DB]/30 dark:from-[#232325]/60 dark:via-[#2F3134]/60 dark:to-[#BFA2DB]/20 rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 border border-white/40 dark:border-[#C6BBAE]/30 group overflow-hidden"
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#BFA2DB]/20 dark:bg-[#BFA2DB]/30 rounded-full blur-2xl opacity-60 group-hover:scale-110 transition-transform duration-300 z-0" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#BFA2DB]/30 dark:bg-[#BFA2DB]/40 rounded-full mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-9 w-9 text-[#8B5A9F] dark:text-[#BFA2DB]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-2 drop-shadow">{feature.title}</h3>
                  <p className="text-base text-gray-700 dark:text-[#C6BBAE] leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative py-20 md:py-28 bg-[#CDB6BD] dark:bg-[#2F3134] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-24 last:mb-0"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-6">{category.title}</h2>
                <p className="text-lg text-gray-800 dark:text-[#C6BBAE] max-w-2xl mx-auto mb-8">
                  {category.description}
                </p>
                <div className="flex flex-col items-center gap-6">
                  <WhatsAppButton
                    message={`Halo, saya ingin memesan bunga papan ${category.title} dari Momo Florist`}
                    className="bg-gradient-to-r from-[#BFA2DB] to-[#D4C3A6] text-white font-bold rounded-full px-8 py-4 transition-all duration-200 transform hover:scale-105 text-base border-none shadow-lg drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)] min-w-[200px] h-12 ring-2 ring-[#BFA2DB]/60 hover:ring-[#D4C3A6]/80"
                    hideIcon
                  >
                    Pesan {category.title}
                  </WhatsAppButton>
                  <Button
                    variant="ghost"
                    className="border-2 border-white text-white font-bold rounded-full px-8 py-3 transition-all duration-200 transform hover:scale-105 min-w-[200px] h-12 bg-transparent shadow-lg drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)] hover:bg-[#BFA2DB] hover:text-white hover:border-[#BFA2DB]"
                    asChild
                  >
                    <a href="tel:081213142558" className="flex items-center justify-center space-x-2">
                      <span>Telepon Langsung</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <MobileProductGrid products={category.images} columns={3} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 bg-[#CDB6BD] dark:bg-[#2F3134] overflow-hidden rounded-b-[3rem]">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">Butuh Bunga Papan Segera?</h2>
            <p className="text-xl text-gray-800 dark:text-[#C6BBAE] mb-10">
              Proses cepat 2 jam, kualitas terjamin, gratis ongkir area Surabaya
            </p>
            <div className="flex flex-col items-center gap-6">
              <WhatsAppButton
                message="Halo, saya butuh bunga papan segera dari Momo Florist"
                className="bg-gradient-to-r from-[#BFA2DB] to-[#D4C3A6] text-white font-bold rounded-full px-8 py-4 transition-all duration-200 transform hover:scale-105 text-base border-none shadow-lg drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)] min-w-[200px] h-12 ring-2 ring-[#BFA2DB]/60 hover:ring-[#D4C3A6]/80"
                hideIcon
              >
                Order Sekarang
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
