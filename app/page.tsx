"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Truck, Heart, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import WhatsAppButton from "@/components/whatsapp-button"
import SocialSidebar from "@/components/social-sidebar"

const categories = [
  {
    title: "Bunga Papan",
    description: "Spesialis bunga papan untuk berbagai acara",
    image: "/bunga papan/bunga papan.jpg",
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
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Hero slider images (local, from public/background)
  const heroImages: { src: string; alt: string }[] = [
    { src: "/background/bunga papan, bunga tangan.jpg", alt: "Bunga papan dan tangan 1" },
    { src: "/background/bunga papan, bunga tangan2.jpg", alt: "Bunga papan dan tangan 2" },
    { src: "/background/bunga papan, bunga tangan3.jpg", alt: "Bunga papan dan tangan 3" },
    { src: "/background/bunga papan, bunga tangan4.jpg", alt: "Bunga papan dan tangan 4" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % categories.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      nextSlide()
    } else if (distance < -minSwipeDistance) {
      prevSlide()
    }
  }
  return (
    <div className="min-h-screen">
      {/* Social Sidebar */}
      <SocialSidebar />
      
      {/* Hero Section with Responsive Image Slider (swipe only) */}
      <section className="relative w-full overflow-hidden px-2 md:px-8">
        {/* Purple background for side padding */}
        <div className="absolute inset-0 -mx-2 md:-mx-8 bg-[#CDB6BD] dark:bg-[#2F3134] z-0" aria-hidden="true" />
        <div
          className="relative w-full h-[90vw] max-h-[650px] md:h-[48vw] md:max-h-[600px] rounded-3xl mx-auto shadow-xl bg-white/10 dark:bg-[#232325]/10 z-10"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Images */}
          {heroImages.map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === idx ? 1 : 0 }}
              transition={{ duration: 0.7 }}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${currentSlide === idx ? 'z-10' : 'z-0 pointer-events-none'} rounded-3xl`}
              style={{ objectFit: 'cover' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover w-full h-full rounded-3xl"
                priority={idx === 0}
              />
            </motion.div>
          ))}
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30 dark:bg-black/40 z-20 px-4 rounded-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
            >
              Momo Florist
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl text-white mb-6 max-w-2xl mx-auto leading-relaxed drop-shadow"
            >
              Kenalkan kami dari Momo Florist, toko bunga online di Surabaya yang melayani pengiriman ke seluruh Indonesia, <span className="font-semibold text-[#BFA2DB]">buka 24 jam</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col md:flex-row items-center gap-4 justify-center"
            >
              <WhatsAppButton 
                message="Halo, saya ingin memesan bunga dari Momo Florist" 
                className="bg-[#8B5A9F] hover:bg-[#BFA2DB] text-white font-bold rounded-full px-8 py-4 transition-all duration-200 transform hover:scale-105 text-base border-none shadow-lg hover:shadow-xl min-w-[180px] h-12"
                hideIcon
              >
                Pesan Sekarang
              </WhatsAppButton>
              <Button 
                variant="ghost"
                size="lg"
                asChild
                className="border-2 border-[#8B5A9F] text-white font-bold drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)] hover:text-white hover:border-[#BFA2DB] hover:bg-[#BFA2DB] bg-transparent rounded-full px-8 py-3 transition-all duration-200 transform hover:scale-105 min-w-[180px] h-12"
              >
                <Link href="/gallery" className="flex items-center justify-center space-x-2">
                  <span className="text-white font-bold drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)]">Lihat Gallery</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
          {/* Desktop Arrows */}
          <div className="hidden md:block">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30">
              <button
                onClick={prevSlide}
                aria-label="Sebelumnya"
                className="rounded-full bg-[#8B5A9F] hover:bg-[#BFA2DB] text-white shadow-lg w-12 h-12 flex items-center justify-center transition-colors duration-200 border-4 border-white/40"
                style={{ outline: 'none', borderWidth: 0 }}
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
              <button
                onClick={nextSlide}
                aria-label="Selanjutnya"
                className="rounded-full bg-[#8B5A9F] hover:bg-[#BFA2DB] text-white shadow-lg w-12 h-12 flex items-center justify-center transition-colors duration-200 border-4 border-white/40"
                style={{ outline: 'none', borderWidth: 0 }}
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </div>
          </div>
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? 'bg-[#BFA2DB] scale-110'
                    : 'bg-white/70 dark:bg-[#C6BBAE] hover:bg-[#BFA2DB]'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative py-12 bg-[#CDB6BD] dark:bg-[#2F3134] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-4">Kategori Produk Kami</h2>
            <p className="text-lg text-gray-800 dark:text-[#EDE6DE] max-w-2xl mx-auto">
              Pilih dari berbagai kategori bunga berkualitas untuk setiap momen spesial Anda
            </p>
          </motion.div>

          {/* Mobile Carousel - Custom Modern */}
          <div className="md:hidden relative">
            <div
              className="relative overflow-visible"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {categories.map((category, index) => (
                  <div key={category.title} className="w-full flex-shrink-0 px-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: currentSlide === index ? 1 : 0.5, y: 0, scale: currentSlide === index ? 1 : 0.95 }}
                      transition={{ duration: 0.7 }}
                      className={`group h-full ${currentSlide === index ? '' : 'pointer-events-none'}`}
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-white/20 dark:bg-[#2F3134] shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-white/30 dark:border-[#C6BBAE]/20">
                        <div className="relative h-64 overflow-hidden flex-shrink-0">
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
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-2 min-h-[2.5rem] flex items-center">{category.title}</h3>
                          <p className="text-gray-800 dark:text-[#EDE6DE] mb-4 flex-1 min-h-[3rem] flex items-start">{category.description}</p>
                          <div className="flex space-x-3 mt-auto">
                            <Button asChild variant="ghost" className="flex-1 border-2 border-[#8B5A9F] text-[#8B5A9F] hover:text-white hover:border-[#BFA2DB] hover:bg-[#BFA2DB] bg-transparent rounded-full px-6 py-2 font-medium transition-all duration-200 transform hover:scale-105 min-w-[120px] h-10 text-sm">
                              <Link href={category.href}>Lihat Produk</Link>
                            </Button>
                            <WhatsAppButton
                              message={`Halo, saya tertarik dengan ${category.title} dari Momo Florist`}
                              className="flex-1 bg-[#8B5A9F] hover:bg-[#BFA2DB] text-white font-medium rounded-full px-6 py-2 transition-all duration-200 transform hover:scale-105 text-sm border-none shadow-lg hover:shadow-xl min-w-[120px] h-10"
                              hideIcon
                            >
                              Pesan
                            </WhatsAppButton>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
              {/* Custom Slide Buttons */}
              <button
                onClick={prevSlide}
                aria-label="Sebelumnya"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 dark:bg-[#232325]/70 hover:bg-[#BFA2DB] text-[#8B5A9F] hover:text-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center border-2 border-[#BFA2DB] backdrop-blur-md transition-colors duration-200"
                style={{ outline: 'none' }}
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Selanjutnya"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 dark:bg-[#232325]/70 hover:bg-[#BFA2DB] text-[#8B5A9F] hover:text-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center border-2 border-[#BFA2DB] backdrop-blur-md transition-colors duration-200"
                style={{ outline: 'none' }}
                disabled={currentSlide === categories.length - 1}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {categories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-[#BFA2DB] ${
                    index === currentSlide
                      ? 'bg-[#BFA2DB] scale-110'
                      : 'bg-white dark:bg-[#C6BBAE] hover:bg-[#BFA2DB]'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group h-full"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/20 dark:bg-[#2F3134] shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-white/30 dark:border-[#C6BBAE]/20">
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
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

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-2 min-h-[2.5rem] flex items-center">{category.title}</h3>
                    <p className="text-gray-800 dark:text-[#EDE6DE] mb-4 flex-1 min-h-[3rem] flex items-start">{category.description}</p>
                    <div className="flex space-x-3 mt-auto">
                      <Button asChild variant="ghost" className="flex-1 border-2 border-[#8B5A9F] text-[#8B5A9F] hover:text-white hover:border-[#BFA2DB] hover:bg-[#BFA2DB] bg-transparent rounded-full px-6 py-2 font-medium transition-all duration-200 transform hover:scale-105 min-w-[120px] h-10 text-sm">
                        <Link href={category.href}>Lihat Produk</Link>
                      </Button>
                      <WhatsAppButton
                        message={`Halo, saya tertarik dengan ${category.title} dari Momo Florist`}
                        className="flex-1 bg-[#8B5A9F] hover:bg-[#BFA2DB] text-white font-medium rounded-full px-6 py-2 transition-all duration-200 transform hover:scale-105 text-sm border-none shadow-lg hover:shadow-xl min-w-[120px] h-10"
                        hideIcon
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
      <section className="py-12 bg-[#CDB6BD] dark:bg-[#2F3134]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-4">
              Mengapa Pilih Momo Florist?
            </h2>
            <p className="text-lg text-gray-800 dark:text-[#EDE6DE] max-w-2xl mx-auto">
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
                className="text-center p-6 bg-white/20 dark:bg-[#2F3134] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 dark:border-[#C6BBAE]/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#BFA2DB]/20 dark:bg-[#BFA2DB]/30 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-[#BFA2DB] dark:text-[#BFA2DB]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-[#EDE6DE] mb-2">{feature.title}</h3>
                <p className="text-gray-800 dark:text-[#C6BBAE]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 bg-[#CDB6BD] dark:bg-[#2F3134] overflow-hidden rounded-b-[3rem]">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Siap Memesan Bunga Impian Anda?</h2>
            <p className="text-xl text-gray-700 dark:text-[#EDE6DE] mb-8">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik
            </p>
            <div className="flex flex-col items-center gap-4">
              <WhatsAppButton
                message="Halo, saya ingin konsultasi dan memesan bunga dari Momo Florist"
                className="bg-[#8B5A9F] hover:bg-[#BFA2DB] text-white font-bold rounded-full px-8 py-4 transition-all duration-200 transform hover:scale-105 text-base border-none shadow-lg hover:shadow-xl min-w-[200px] h-12"
                hideIcon
              >
                Konsultasi Gratis
              </WhatsAppButton>
              <Button
                variant="ghost"
                size="lg"
                className="border-2 border-[#8B5A9F] text-[#8B5A9F] hover:text-white hover:border-[#BFA2DB] hover:bg-[#BFA2DB] bg-transparent rounded-full px-8 py-3 font-medium transition-all duration-200 transform hover:scale-105 min-w-[200px] h-12"
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
    </div>
  )
}
