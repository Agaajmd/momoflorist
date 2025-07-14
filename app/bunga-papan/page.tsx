"use client"

import { motion } from "framer-motion"
import { Clock, Truck, Award, Phone } from "lucide-react"
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
        price: "Rp 350.000",
      },
      {
        src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Duka Cita 2",
        title: "Papan Duka Cita Premium",
        description: "Rangkaian bunga duka cita dengan bunga lily putih premium",
        price: "Rp 450.000",
      },
      {
        src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Duka Cita 3",
        title: "Papan Duka Cita Klasik",
        description: "Desain klasik dengan bunga krisan putih dan hijau",
        price: "Rp 300.000",
      },
      {
        src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Duka Cita 4",
        title: "Papan Duka Cita Modern",
        description: "Rangkaian modern dengan bunga mawar putih",
        price: "Rp 400.000",
      },
      {
        src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Duka Cita 5",
        title: "Papan Duka Cita Sederhana",
        description: "Desain sederhana namun bermakna",
        price: "Rp 250.000",
      },
      {
        src: "/bunga papan/bunga papan.jpg",
        alt: "Bunga Papan Duka Cita 6",
        title: "Papan Duka Cita Spesial",
        description: "Rangkaian duka cita dengan bunga segar pilihan",
        price: "Rp 375.000",
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
        price: "Rp 375.000",
      },
      {
        src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Selamat 2",
        title: "Papan Sukses Premium",
        description: "Desain premium untuk merayakan kesuksesan",
        price: "Rp 475.000",
      },
      {
        src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Selamat 3",
        title: "Papan Selamat Elegant",
        description: "Rangkaian elegan dengan bunga mawar merah",
        price: "Rp 425.000",
      },
      {
        src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Selamat 5",
        title: "Papan Selamat Festive",
        description: "Rangkaian meriah untuk perayaan",
        price: "Rp 350.000",
      },
      {
        src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Selamat 6",
        title: "Papan Sukses Luxury",
        description: "Rangkaian mewah untuk momen bersejarah",
        price: "Rp 525.000",
      },
      {
        src: "/bunga papan/bunga papan2.jpg",
        alt: "Bunga Papan Selamat 7",
        title: "Papan Selamat Istimewa",
        description: "Rangkaian istimewa untuk ucapan selamat",
        price: "Rp 450.000",
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
        price: "Rp 450.000",
      },
      {
        src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Pernikahan 2",
        title: "Papan Wedding Classic",
        description: "Desain klasik untuk pernikahan tradisional",
        price: "Rp 400.000",
      },
      {
        src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Pernikahan 4",
        title: "Papan Wedding Modern",
        description: "Desain modern untuk pasangan milenial",
        price: "Rp 475.000",
      },
      {
        src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Pernikahan 5",
        title: "Papan Wedding Luxury",
        description: "Rangkaian mewah untuk pernikahan istimewa",
        price: "Rp 600.000",
      },
      {
        src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Pernikahan 6",
        title: "Papan Wedding Garden",
        description: "Tema garden dengan bunga warna-warni",
        price: "Rp 425.000",
      },
      {
        src: "/bunga papan/bunga papan3.jpg",
        alt: "Bunga Papan Pernikahan 7",
        title: "Papan Wedding Premium",
        description: "Rangkaian premium untuk pernikahan impian",
        price: "Rp 550.000",
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
        price: "Rp 150.000",
      },
      {
        src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Mini 3",
        title: "Mini Papan Colorful",
        description: "Mini papan dengan warna cerah",
        price: "Rp 175.000",
      },
      {
        src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Bunga Papan Mini 4",
        title: "Mini Papan Premium",
        description: "Mini papan dengan kualitas premium",
        price: "Rp 200.000",
      },
      {
        src: "/bunga papan/bunga papan4.jpg",
        alt: "Bunga Papan Mini 5",
        title: "Mini Papan Spesial",
        description: "Mini papan dengan desain spesial",
        price: "Rp 225.000",
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
      <section className="relative bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-rose-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/background/bunga%20papan,%20bunga%20tangan2.jpg')] bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-20"></div>
        <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Bunga Papan
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Kami spesialis dalam pembuatan segala jenis bunga papan & karangan bunga, termasuk papan dukacita, selamat
              & sukses, pernikahan.{" "}
              <span className="font-semibold text-rose-600">Pengerjaan hanya 2 jam, gratis ongkir.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                message="Halo, saya ingin memesan bunga papan dari Popo Florist"
                className="text-lg px-8 py-3 h-12"
              >
                Pesan Bunga Papan
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

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-rose-600 dark:text-rose-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/background/bunga%20papan,%20bunga%20tangan3.jpg')] bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-20"></div>
        <div className="absolute inset-0 bg-gray-50/40 dark:bg-gray-800/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-20 last:mb-0"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                  {category.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <WhatsAppButton
                    message={`Halo, saya ingin memesan bunga papan ${category.title} dari Popo Florist`}
                    className="h-12"
                  >
                    Pesan {category.title}
                  </WhatsAppButton>
                  <Button variant="outline" className="h-12 bg-transparent" asChild>
                    <a href="tel:081213142558" className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Call</span>
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
      <section className="relative py-20 bg-gradient-to-r from-rose-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/background/bunga%20papan,%20bunga%20tangan4.jpg')] bg-cover bg-center bg-no-repeat opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-600/60 to-pink-600/60"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Butuh Bunga Papan Segera?</h2>
            <p className="text-xl text-rose-100 mb-8">
              Proses cepat 2 jam, kualitas terjamin, gratis ongkir area Surabaya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                message="Halo, saya butuh bunga papan segera dari Popo Florist"
                className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-3 h-12"
              >
                Order Sekarang
              </WhatsAppButton>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-rose-600 bg-transparent h-12"
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
