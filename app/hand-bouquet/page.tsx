"use client"

import { motion } from "framer-motion"
import { Heart, Clock, Phone, MapPin, ArrowRight } from "lucide-react"
import MobileProductGrid from "@/components/mobile-product-grid"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

const bouquetImages = [
  {
    src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 1",
    title: "Bouquet Romantic Rose",
    description: "Rangkaian mawar merah romantis untuk orang terkasih",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 2",
    title: "Bouquet Spring Garden",
    description: "Buket warna-warni dengan tema taman musim semi",
  },
  {
    src: "/hand bouquet/hand bouquet3.jpg",
    alt: "Hand Bouquet 3",
    title: "Bouquet White Elegance",
    description: "Rangkaian putih elegan untuk acara formal",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 4",
    title: "Bouquet Pink Delight",
    description: "Buket pink manis yang menggemaskan",
  },
  {
    src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 5",
    title: "Bouquet Luxury Mix",
    description: "Campuran bunga premium untuk momen istimewa",
  },
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 6",
    title: "Bouquet Sunflower Joy",
    description: "Buket bunga matahari yang ceria",
  },
  {
    src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 7",
    title: "Bouquet Purple Dream",
    description: "Rangkaian ungu yang memukau",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 8",
    title: "Bouquet Pastel Sweet",
    description: "Warna pastel lembut yang manis",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 10",
    title: "Bouquet Modern Mix",
    description: "Kombinasi modern dengan berbagai jenis bunga",
  },
  {
    src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 11",
    title: "Bouquet Tropical Vibes",
    description: "Nuansa tropis yang eksotis",
  },
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 12",
    title: "Bouquet Vintage Charm",
    description: "Pesona vintage dengan sentuhan klasik",
  },
  {
    src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 13",
    title: "Bouquet Baby Breath",
    description: "Rangkaian dengan baby breath yang lembut",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 14",
    title: "Bouquet Premium Luxury",
    description: "Buket premium dengan bunga import",
  },
  {
    src: "/hand bouquet/hand bouquet.jpg",
    alt: "Hand Bouquet 15",
    title: "Bouquet Spesial",
    description: "Rangkaian hand bouquet dengan bunga segar pilihan",
  },
  {
    src: "/hand bouquet/hand bouquet2.jpg",
    alt: "Hand Bouquet 16",
    title: "Bouquet Elegant Premium",
    description: "Desain elegant premium untuk momen istimewa",
  },
  {
    src: "/hand bouquet/hand bouquet4.jpg",
    alt: "Hand Bouquet 17",
    title: "Bouquet Terbaru",
    description: "Koleksi terbaru dengan bunga berkualitas tinggi",
  },
]

const whyChooseUs = [
  {
    icon: Clock,
    title: "Proses Cepat",
    description: "Pengerjaan hanya 2 jam",
  },
  {
    icon: MapPin,
    title: "Gratis Ongkir Surabaya",
    description: "Pengiriman gratis area Surabaya",
  },
  {
    icon: Heart,
    title: "Harga Bersahabat",
    description: "Kualitas premium dengan harga terjangkau",
  },
  {
    icon: Clock,
    title: "Toko Buka 24 Jam",
    description: "Melayani pesanan kapan saja",
  },
]

export default function HandBouquetPage() {
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
                Hand Bouquet
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-[#C6BBAE] mb-12 max-w-4xl mx-auto leading-relaxed">
              Dengan kualitas bunga yang terbaik, rangkaian hand bouquet kami adalah hadiah yang sempurna bagi
              pasangan/keluarga Anda!
            </p>

            <div className="flex flex-col items-center gap-6">
              <WhatsAppButton
                message="Halo, saya ingin memesan hand bouquet dari Momo Florist"
                className="bg-gradient-to-r from-[#BFA2DB] to-[#D4C3A6] text-white font-bold rounded-full px-8 py-4 transition-all duration-200 transform hover:scale-105 text-base border-none shadow-lg drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)] min-w-[200px] h-12 ring-2 ring-[#BFA2DB]/60 hover:ring-[#D4C3A6]/80"
                hideIcon
              >
                Pesan Hand Bouquet
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

      {/* About Section */}
      <section className="py-20 md:py-28 bg-[#CDB6BD] dark:bg-[#2F3134]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-6">
                Tentang Momo Florist
              </h2>
              <p className="text-lg text-gray-800 dark:text-[#C6BBAE] mb-10">
                Momo Florist adalah solusi utama untuk kebutuhan bunga dan dekorasi Anda.
              </p>
              <p className="text-gray-800 dark:text-[#C6BBAE] mb-10">
                Setiap hand bouquet kami dibuat dengan penuh perhatian menggunakan bunga-bunga segar pilihan terbaik.
                Kami memahami bahwa setiap momen spesial membutuhkan sentuhan yang istimewa.
              </p>
              <div className="mt-10">
                <WhatsAppButton
                  message="Halo, saya ingin tahu lebih lanjut tentang hand bouquet Momo Florist"
                  className="bg-gradient-to-r from-[#BFA2DB] to-[#D4C3A6] text-white font-bold rounded-full px-8 py-3 transition-all duration-200 transform hover:scale-105 text-base border-none shadow-lg drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)] min-w-[200px] h-12 ring-2 ring-[#BFA2DB]/60 hover:ring-[#D4C3A6]/80"
                  hideIcon
                >
                  Pelajari Lebih Lanjut
                </WhatsAppButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {bouquetImages.slice(0, 4).map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-square overflow-hidden rounded-lg"
                  >
                    <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-[#CDB6BD] dark:bg-[#2F3134]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-6">Mengapa Momo Florist?</h2>
            <p className="text-lg text-gray-800 dark:text-[#C6BBAE] max-w-2xl mx-auto">
              Kami berkomitmen memberikan pelayanan terbaik dengan keunggulan yang tidak akan Anda temukan di tempat
              lain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {whyChooseUs.map((item, index) => (
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
      <section className="py-20 md:py-28 bg-[#CDB6BD] dark:bg-[#2F3134]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-6">
              Pilihan Hand Bouquet Kami
            </h2>
            <p className="text-lg text-gray-800 dark:text-[#C6BBAE] max-w-2xl mx-auto mb-12">
              Dari yang romantis hingga elegan, temukan hand bouquet yang sempurna untuk momen spesial Anda
            </p>
            <div className="flex flex-col items-center gap-6">
              <WhatsAppButton
                message="Halo, saya ingin melihat pilihan hand bouquet yang tersedia di Momo Florist"
                className="bg-gradient-to-r from-[#BFA2DB] to-[#D4C3A6] text-white font-bold rounded-full px-8 py-3 transition-all duration-200 transform hover:scale-105 text-base border-none shadow-lg drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)] min-w-[200px] h-12 ring-2 ring-[#BFA2DB]/60 hover:ring-[#D4C3A6]/80"
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
                  <span>Call: 081213142558</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <MobileProductGrid products={bouquetImages} columns={3} />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">Hadiah Sempurna Menanti</h2>
            <p className="text-xl text-gray-800 dark:text-[#C6BBAE] mb-10">
              Hand bouquet berkualitas premium untuk orang terkasih. Pesan sekarang dan buat momen jadi tak terlupakan!
            </p>
            <div className="flex flex-col items-center gap-6">
              <WhatsAppButton
                message="Halo, saya ingin memesan hand bouquet spesial dari Momo Florist"
                className="bg-gradient-to-r from-[#BFA2DB] to-[#D4C3A6] text-white font-bold rounded-full px-8 py-4 transition-all duration-200 transform hover:scale-105 text-base border-none shadow-lg drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)] min-w-[200px] h-12 ring-2 ring-[#BFA2DB]/60 hover:ring-[#D4C3A6]/80"
                hideIcon
              >
                Pesan Hand Bouquet
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
