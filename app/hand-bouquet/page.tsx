"use client"

import { motion } from "framer-motion"
import { Heart, Clock, Phone, MapPin } from "lucide-react"
import MobileProductGrid from "@/components/mobile-product-grid"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

const bouquetImages = [
  {
    src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 1",
    title: "Bouquet Romantic Rose",
    description: "Rangkaian mawar merah romantis untuk orang terkasih",
    price: "Rp 250.000",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 2",
    title: "Bouquet Spring Garden",
    description: "Buket warna-warni dengan tema taman musim semi",
    price: "Rp 200.000",
  },
  {
    src: "/hand bouquet/hand bouquet3.jpg",
    alt: "Hand Bouquet 3",
    title: "Bouquet White Elegance",
    description: "Rangkaian putih elegan untuk acara formal",
    price: "Rp 275.000",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 4",
    title: "Bouquet Pink Delight",
    description: "Buket pink manis yang menggemaskan",
    price: "Rp 225.000",
  },
  {
    src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 5",
    title: "Bouquet Luxury Mix",
    description: "Campuran bunga premium untuk momen istimewa",
    price: "Rp 350.000",
  },
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 6",
    title: "Bouquet Sunflower Joy",
    description: "Buket bunga matahari yang ceria",
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
    description: "Warna pastel lembut yang manis",
    price: "Rp 210.000",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 10",
    title: "Bouquet Modern Mix",
    description: "Kombinasi modern dengan berbagai jenis bunga",
    price: "Rp 290.000",
  },
  {
    src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 11",
    title: "Bouquet Tropical Vibes",
    description: "Nuansa tropis yang eksotis",
    price: "Rp 220.000",
  },
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 12",
    title: "Bouquet Vintage Charm",
    description: "Pesona vintage dengan sentuhan klasik",
    price: "Rp 270.000",
  },
  {
    src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 13",
    title: "Bouquet Baby Breath",
    description: "Rangkaian dengan baby breath yang lembut",
    price: "Rp 190.000",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hand Bouquet 14",
    title: "Bouquet Premium Luxury",
    description: "Buket premium dengan bunga import",
    price: "Rp 400.000",
  },
  {
    src: "/hand bouquet/hand bouquet.jpg",
    alt: "Hand Bouquet 15",
    title: "Bouquet Spesial",
    description: "Rangkaian hand bouquet dengan bunga segar pilihan",
    price: "Rp 275.000",
  },
  {
    src: "/hand bouquet/hand bouquet2.jpg",
    alt: "Hand Bouquet 16",
    title: "Bouquet Elegant Premium",
    description: "Desain elegant premium untuk momen istimewa",
    price: "Rp 325.000",
  },
  {
    src: "/hand bouquet/hand bouquet4.jpg",
    alt: "Hand Bouquet 17",
    title: "Bouquet Terbaru",
    description: "Koleksi terbaru dengan bunga berkualitas tinggi",
    price: "Rp 300.000",
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
      <section className="relative bg-gradient-to-br from-green-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/background/bunga%20papan,%20bunga%20tangan4.jpg')] bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-20"></div>
        <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Hand Bouquet
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Dengan kualitas bunga yang terbaik, rangkaian hand bouquet kami adalah hadiah yang sempurna bagi
              pasangan/keluarga Anda!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                message="Halo, saya ingin memesan hand bouquet dari Popo Florist"
                className="text-lg px-8 py-3 h-12"
              >
                Pesan Hand Bouquet
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

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Tentang Popo Florist
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  Popo Florist adalah solusi utama untuk kebutuhan bunga dan dekorasi Anda.
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    {" "}
                    Berdiri sejak 2012 di Surabaya
                  </span>
                  , kami telah berpengalaman melayani ratusan pelanggan dengan menjamin kualitas terbaik dan harga
                  bersahabat.
                </p>
                <p>
                  Setiap hand bouquet kami dibuat dengan penuh perhatian menggunakan bunga-bunga segar pilihan terbaik.
                  Kami memahami bahwa setiap momen spesial membutuhkan sentuhan yang istimewa.
                </p>
              </div>
              <div className="mt-8">
                <WhatsAppButton
                  message="Halo, saya ingin tahu lebih lanjut tentang hand bouquet Popo Florist"
                  className="text-lg px-8 py-3 h-12"
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
              <div className="grid grid-cols-2 gap-4">
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
      <section className="py-20 bg-green-50 dark:bg-green-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Mengapa Popo Florist?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pelayanan terbaik dengan keunggulan yang tidak akan Anda temukan di tempat
              lain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                  <item.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Pilihan Hand Bouquet Kami
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Dari yang romantis hingga elegan, temukan hand bouquet yang sempurna untuk momen spesial Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                message="Halo, saya ingin melihat pilihan hand bouquet yang tersedia di Popo Florist"
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

          <MobileProductGrid products={bouquetImages} columns={3} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/background/bunga%20papan,%20bunga%20tangan.jpg')] bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-20"></div>
        <div className="absolute inset-0 bg-gray-50/40 dark:bg-gray-800/50"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Hubungi Kami</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              <strong>Alamat:</strong> Jl. Kayoon, Komplek Pasar Bunga Stand C-22, Surabaya
              <br />
              <strong>Telepon/WA:</strong> 081213142558
              <br />
              <strong>Instagram:</strong> @Popoflorist01
              <br />
              <strong>Jam Buka:</strong>{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">24 Jam</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                message="Halo, saya ingin memesan hand bouquet dari Popo Florist"
                className="text-lg px-8 py-3 h-12"
              >
                Pesan Sekarang
              </WhatsAppButton>
              <Button variant="outline" size="lg" className="h-12 bg-transparent" asChild>
                <a href="tel:081213142558" className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>081213142558</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/bunga papan/bunga tangan2.jpg')" }}></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hadiah Sempurna Menanti</h2>
            <p className="text-xl text-green-100 mb-8">
              Hand bouquet berkualitas premium untuk orang terkasih. Pesan sekarang dan buat momen jadi tak terlupakan!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                message="Halo, saya ingin memesan hand bouquet spesial dari Popo Florist"
                className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3 h-12"
              >
                Pesan Hand Bouquet
              </WhatsAppButton>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent h-12"
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
