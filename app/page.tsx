"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Truck, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import WhatsAppButton from "@/components/whatsapp-button"

const categories = [
  {
    title: "Bunga Papan",
    description: "Spesialis bunga papan untuk berbagai acara",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/bunga-papan",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Bunga Standing",
    description: "Standing flower untuk acara spesial",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/bunga-standing",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Hand Bouquet",
    description: "Rangkaian bunga tangan yang indah",
    image:
      "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/hand-bouquet",
    color: "from-green-500 to-teal-500",
  },
]

const features = [
  {
    icon: Clock,
    title: "Proses Cepat",
    description: "Pengerjaan hanya 2 jam",
  },
  {
    icon: Truck,
    title: "Gratis Ongkir",
    description: "Gratis ongkir area Surabaya",
  },
  {
    icon: Heart,
    title: "Kualitas Terbaik",
    description: "Bunga segar berkualitas premium",
  },
  {
    icon: Star,
    title: "Buka 24 Jam",
    description: "Melayani pesanan kapan saja",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Popo Florist
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Kenalkan kami dari Popo Florist, toko bunga online di Surabaya yang melayani pengiriman ke seluruh
              Indonesia,
              <span className="font-semibold text-green-600 dark:text-green-400"> buka 24 jam</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <WhatsAppButton message="Halo, saya ingin memesan bunga dari Popo Florist" className="text-lg px-8 py-3">
                Pesan Sekarang
              </WhatsAppButton>
              <Button variant="outline" size="lg" asChild>
                <Link href="/gallery" className="flex items-center space-x-2">
                  <span>Lihat Gallery</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Kategori Produk Kami</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Pilih dari berbagai kategori bunga berkualitas untuk setiap momen spesial Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                    <div className="flex space-x-3">
                      <Button asChild variant="outline" className="flex-1 bg-transparent">
                        <Link href={category.href}>Lihat Produk</Link>
                      </Button>
                      <WhatsAppButton
                        message={`Halo, saya tertarik dengan ${category.title} dari Popo Florist`}
                        className="flex-1"
                      >
                        Pesan
                      </WhatsAppButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mengapa Pilih Popo Florist?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pelayanan terbaik dengan kualitas premium
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Siap Memesan Bunga Impian Anda?</h2>
            <p className="text-xl text-pink-100 mb-8">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                message="Halo, saya ingin konsultasi dan memesan bunga dari Popo Florist"
                className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-3"
              >
                Konsultasi Gratis
              </WhatsAppButton>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-pink-600 bg-transparent"
              >
                <a href="tel:081213142558" className="flex items-center space-x-2">
                  <span>Telepon Langsung</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
