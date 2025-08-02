"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Truck, Heart, Star, ChevronLeft, ChevronRight, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import WhatsAppButton from "@/components/whatsapp-button"
import { usePerformanceMonitoring } from "@/hooks/use-performance-monitoring"

// Remove force-dynamic for better performance
// export const dynamic = 'force-dynamic'

const categories = [
  {
    title: "Bunga Papan",
    description: "Spesialis bunga papan untuk berbagai acara",
    image: "/bunga papan/bunga papan.jpg",
    href: "/bunga-papan",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Bunga Papan Mini",
    description: "Pilihan bunga papan mini yang elegan dan praktis",
    image: "/bunga papan/bunga papan2.jpg",
    href: "/bunga-papan-mini",
    color: "from-yellow-400 to-pink-400",
  },
  {
    title: "Bunga Standing",
    description: "Standing flower untuk acara spesial",
    image: "/bunga standing/bunga standing.jpg",
    href: "/bunga-standing",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Hand Bouquet",
    description: "Rangkaian bunga tangan yang indah",
    image: "/hand bouquet/hand bouquet.jpg",
    href: "/hand-bouquet",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Bunga Salib",
    description: "Rangkaian bunga salib untuk duka cita dan penghormatan",
    image: "/gallery/gallery toko bunga4.jpg",
    href: "/gallery#bunga-salib",
    color: "from-blue-400 to-indigo-400",
  },
  {
    title: "Bunga Potong Pita",
    description: "Bunga potong pita untuk peresmian dan acara spesial",
    image: "/gallery/gallery toko bunga5.jpg",
    href: "/gallery#bunga-potong-pita",
    color: "from-pink-400 to-yellow-400",
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
  // Initialize performance monitoring
  usePerformanceMonitoring()
  
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [autoSlideStates, setAutoSlideStates] = useState<{ [key: number]: boolean }>({})
  const [userInteracting, setUserInteracting] = useState<{ [key: number]: boolean }>({})

  // Auto-slide intervals storage
  const autoSlideIntervals = useRef<{ [key: number]: NodeJS.Timeout }>({})
  
  // Auto-slide function for product sliders
  const startAutoSlide = (categoryIndex: number) => {
    // Clear existing interval if any
    if (autoSlideIntervals.current[categoryIndex]) {
      clearInterval(autoSlideIntervals.current[categoryIndex])
    }
    
    autoSlideIntervals.current[categoryIndex] = setInterval(() => {
      // Check if user is not interacting
      if (!userInteracting[categoryIndex]) {
        const container = document.getElementById(`slider-${categoryIndex}`)
        if (container) {
          const scrollWidth = container.scrollWidth
          const clientWidth = container.clientWidth
          const currentScroll = container.scrollLeft
          
          // If we're at the end, scroll back to start
          if (currentScroll + clientWidth >= scrollWidth - 10) {
            container.scrollTo({ left: 0, behavior: 'smooth' })
          } else {
            // Scroll to next position
            container.scrollBy({ left: 200, behavior: 'smooth' })
          }
        }
      }
    }, 3000) // Auto-slide every 3 seconds
  }
  
  const stopAutoSlide = (categoryIndex: number) => {
    if (autoSlideIntervals.current[categoryIndex]) {
      clearInterval(autoSlideIntervals.current[categoryIndex])
      delete autoSlideIntervals.current[categoryIndex]
    }
  }
  
  const pauseAutoSlide = (categoryIndex: number, duration = 5000) => {
    setUserInteracting(prev => ({ ...prev, [categoryIndex]: true }))
    setTimeout(() => {
      setUserInteracting(prev => ({ ...prev, [categoryIndex]: false }))
    }, duration)
  }

  // Start auto-slide for all categories when component mounts
  useEffect(() => {
    categories.forEach((_, index) => {
      startAutoSlide(index)
    })
    
    // Cleanup on unmount
    return () => {
      Object.values(autoSlideIntervals.current).forEach(interval => {
        clearInterval(interval)
      })
    }
  }, [])

  // Hero slider images (local, using working image paths)
  const heroImages: { src: string; alt: string }[] = [
    { src: "/bunga papan/bunga papan.jpg", alt: "Bunga Papan Momo Florist" },
    { src: "/bunga standing/bunga standing.jpg", alt: "Standing Flower Momo Florist" },
    { src: "/hand bouquet/hand bouquet.jpg", alt: "Hand Bouquet Momo Florist" },
    { src: "/bunga papan/bunga papan2.jpg", alt: "Bunga Papan Premium Momo Florist" },
  ];

  // Auto-slide effect for hero images
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length)
      }, 5000) // 5 seconds interval untuk smooth experience
      
      return () => clearInterval(interval)
    }
  }, [heroImages.length, isPaused])

  // Pause auto-slide on hover or touch
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)
  const handleTouchStartHero = (e: React.TouchEvent) => {
    setIsPaused(true)
    setTouchStart(e.targetTouches[0].clientX)
  }
  const handleTouchMoveHero = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  const handleTouchEndHero = () => {
    // Handle swipe gestures for hero slider
    if (touchStart && touchEnd) {
      const distance = touchStart - touchEnd
      const minSwipeDistance = 50

      if (distance > minSwipeDistance) {
        // Swipe left - next slide
        setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length)
      } else if (distance < -minSwipeDistance) {
        // Swipe right - previous slide
        setCurrentHeroSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
      }
    }
    
    // Reset touch values
    setTouchStart(0)
    setTouchEnd(0)
    setTimeout(() => setIsPaused(false), 1000) // Resume setelah 1 detik untuk responsivitas
  }

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 1500) // Resume setelah 1.5 detik
  }

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 1500) // Resume setelah 1.5 detik
  }

  const goToHeroSlide = (index: number) => {
    setCurrentHeroSlide(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 1500) // Resume setelah 1.5 detik
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Responsive Image Slider (swipe only) */}
      <section className="relative w-full overflow-hidden px-2 md:px-8 pt-4 md:pt-8 pb-8 md:pb-12">
        {/* Purple background for side padding */}
        <div className="absolute inset-0 -mx-2 md:-mx-8 bg-[#CDB6BD] dark:bg-[#2F3134] z-0" aria-hidden="true" />
        <div
          className="relative w-full h-[130vw] max-h-[500px] md:h-[48vw] md:max-h-[600px] rounded-3xl mx-auto shadow-xl bg-white/10 dark:bg-[#232325]/10 z-10 overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStartHero}
          onTouchMove={handleTouchMoveHero}
          onTouchEnd={handleTouchEndHero}
        >
          {/* Slider Container */}
          <div className="relative w-full h-full overflow-hidden">
            {heroImages.map((img, idx) => (
              <div
                key={`${img.src}-${idx}`}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                  idx === currentHeroSlide 
                    ? 'opacity-100 scale-100 z-10' 
                    : 'opacity-0 scale-105 z-0'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover w-full h-full"
                  priority={idx === 0}
                  quality={idx === 0 ? 90 : 75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            ))}
          </div>
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
                className="bg-gradient-to-r from-[#BFA2DB] to-[#D4C3A6] text-white font-bold rounded-full px-8 py-4 transition-all duration-200 transform hover:scale-105 text-base border-none shadow-lg drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)] min-w-[180px] h-12 ring-2 ring-[#BFA2DB]/60 hover:ring-[#D4C3A6]/80"
                hideIcon
              >
                Pesan Sekarang
              </WhatsAppButton>
              <Button 
                variant="ghost"
                size="lg"
                asChild
                className="border-2 border-white text-white font-bold rounded-full px-8 py-3 transition-all duration-200 transform hover:scale-105 min-w-[180px] h-12 bg-transparent shadow-lg drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)] hover:bg-[#BFA2DB] hover:text-white hover:border-[#BFA2DB]"
              >
                <Link href="/gallery" className="flex items-center justify-center space-x-2">
                  <span className="text-white font-bold drop-shadow-[0_1px_8px_rgba(191,162,219,0.7)] group-hover:text-white">Lihat Gallery</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
          {/* Desktop Navigation Arrows */}
          <div className="hidden md:block">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30">
              <button
                onClick={prevHeroSlide}
                aria-label="Slide Sebelumnya"
                className="rounded-full bg-[#8B5A9F] hover:bg-[#BFA2DB] text-white shadow-lg w-12 h-12 flex items-center justify-center transition-all duration-300 border-2 border-white/40 hover:scale-110"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
              <button
                onClick={nextHeroSlide}
                aria-label="Slide Selanjutnya"
                className="rounded-full bg-[#8B5A9F] hover:bg-[#BFA2DB] text-white shadow-lg w-12 h-12 flex items-center justify-center transition-all duration-300 border-2 border-white/40 hover:scale-110"
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
                onClick={() => goToHeroSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentHeroSlide
                    ? 'bg-[#BFA2DB] scale-110'
                    : 'bg-white/70 dark:bg-[#C6BBAE] hover:bg-[#BFA2DB]'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section - Horizontal Scrollable */}
      <section className="relative py-16 md:py-24 bg-[#CDB6BD] dark:bg-[#2F3134] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-4">Produk Pilihan Kami</h2>
            <p className="text-lg text-gray-800 dark:text-[#EDE6DE] max-w-2xl mx-auto">
              Jelajahi koleksi bunga terbaik dari setiap kategori untuk momen spesial Anda
            </p>
          </motion.div>

          {/* Product Sliders per Category */}
          <div className="space-y-12">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-2 h-8 bg-gradient-to-b ${category.color} rounded-full`}></div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-[#EDE6DE]">{category.title}</h3>
                      <p className="text-sm text-gray-700 dark:text-[#C6BBAE]">{category.description}</p>
                    </div>
                  </div>
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="border-2 border-[#8B5A9F] text-[#8B5A9F] hover:bg-[#8B5A9F] hover:text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-200"
                  >
                    <Link href={category.href} className="flex items-center space-x-2">
                      <span>Lihat Semua</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Horizontal Product Slider */}
                <div className="relative">
                  {/* Left Arrow Button - Positioned outside the slider area */}
                  <button
                    onClick={() => {
                      const container = document.getElementById(`slider-${categoryIndex}`);
                      if (container) {
                        pauseAutoSlide(categoryIndex); // Pause auto-slide when user clicks
                        container.scrollBy({ left: -200, behavior: 'smooth' });
                      }
                    }}
                    className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-[#232325]/90 hover:bg-[#BFA2DB] text-[#8B5A9F] hover:text-white rounded-full shadow-lg w-8 h-8 flex items-center justify-center border-2 border-[#BFA2DB] backdrop-blur-md transition-all duration-200 transform hover:scale-110"
                    aria-label="Slide Kiri"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  {/* Right Arrow Button - Positioned outside the slider area */}
                  <button
                    onClick={() => {
                      const container = document.getElementById(`slider-${categoryIndex}`);
                      if (container) {
                        pauseAutoSlide(categoryIndex); // Pause auto-slide when user clicks
                        container.scrollBy({ left: 200, behavior: 'smooth' });
                      }
                    }}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-[#232325]/90 hover:bg-[#BFA2DB] text-[#8B5A9F] hover:text-white rounded-full shadow-lg w-8 h-8 flex items-center justify-center border-2 border-[#BFA2DB] backdrop-blur-md transition-all duration-200 transform hover:scale-110"
                    aria-label="Slide Kanan"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <div 
                    className="overflow-x-auto scrollbar-hide" 
                    id={`slider-${categoryIndex}`}
                    onMouseEnter={() => pauseAutoSlide(categoryIndex, 2000)} // Pause on hover
                    onTouchStart={() => pauseAutoSlide(categoryIndex, 3000)} // Pause on touch
                    onScroll={() => pauseAutoSlide(categoryIndex, 2000)} // Pause on manual scroll
                  >
                    <div className="flex space-x-3 pb-4">
                      {/* Sample products for each category - you can replace with real data */}
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((productIndex) => (
                        <div
                          key={`${category.title}-${productIndex}`}
                          className="flex-shrink-0 w-36 sm:w-44 md:w-48 bg-white/20 dark:bg-[#2F3134] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 dark:border-[#C6BBAE]/20 group"
                        >
                          <div className="relative h-36 sm:h-44 md:h-48 overflow-hidden">
                            <Image
                              src={category.image}
                              alt={`${category.title} ${productIndex}`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                            
                            {/* Eye Button for Details - Top right corner on mobile, center on desktop hover */}
                            <div className="absolute top-2 right-2 md:inset-0 md:flex md:items-center md:justify-center md:opacity-0 md:group-hover:opacity-100 md:top-0 md:right-0 transition-opacity duration-300 md:bg-black/20">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  // Navigate to product detail - you can customize this URL
                                  window.location.href = `${category.href}?product=${productIndex}`;
                                }}
                                className="bg-white/90 hover:bg-white text-[#8B5A9F] hover:text-[#8B5A9F] rounded-full w-8 h-8 md:w-10 md:h-10 p-0 shadow-lg transition-all duration-200 transform hover:scale-110"
                                aria-label={`Lihat detail ${category.title} Premium ${productIndex}`}
                              >
                                <Eye className="h-4 w-4 md:h-5 md:w-5" />
                              </Button>
                            </div>
                          </div>
                          
                          <div className="p-3">
                            <h4 className="text-sm font-semibold text-gray-800 dark:text-[#EDE6DE] mb-3 truncate">
                              {category.title} Premium {productIndex}
                            </h4>
                            
                            <WhatsAppButton
                              message={`Halo, saya tertarik dengan ${category.title} Premium ${productIndex} dari Momo Florist`}
                              className="w-full bg-gradient-to-r from-[#BFA2DB] to-[#D4C3A6] text-white rounded-lg text-xs font-medium transition-all duration-200 transform hover:scale-105 border-none h-7"
                              hideIcon
                            >
                              Pesan
                            </WhatsAppButton>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Gradient overlays for scroll indication - Adjusted for new button positions */}
                  <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-[#CDB6BD] dark:from-[#2F3134] to-transparent pointer-events-none z-10"></div>
                  <div className="absolute top-0 right-0 w-4 h-full bg-gradient-to-l from-[#CDB6BD] dark:from-[#2F3134] to-transparent pointer-events-none z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-[#CDB6BD] dark:bg-[#2F3134]">
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
                whileHover={{ scale: 1.07 }}
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

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 bg-[#CDB6BD] dark:bg-[#2F3134] overflow-hidden rounded-b-[3rem] mt-0">
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
