"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Share2, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import WhatsAppButton from "@/components/whatsapp-button"

interface Product {
  src: string
  alt: string
  title: string
  description?: string
  price?: string
}

interface ProductDetailModalProps {
  isOpen: boolean
  onClose: () => void
  product: Product | null
  products: Product[]
  currentIndex: number
  onNavigate: (index: number) => void
}

export default function ProductDetailModal({
  isOpen,
  onClose,
  product,
  products,
  currentIndex,
  onNavigate,
}: ProductDetailModalProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  if (!product) return null

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : products.length - 1
    onNavigate(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex < products.length - 1 ? currentIndex + 1 : 0
    onNavigate(newIndex)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.title,
          text: `Lihat ${product.title} dari Momo Florist`,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link telah disalin ke clipboard!")
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white dark:bg-gray-900 rounded-lg sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate pr-4">{product.title}</h2>
              <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                <Button variant="ghost" size="sm" onClick={handleShare} className="h-8 w-8 sm:h-10 sm:w-10">
                  <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setIsZoomed(!isZoomed)} className="h-8 w-8 sm:h-10 sm:w-10">
                  {isZoomed ? <ZoomOut className="h-3 w-3 sm:h-4 sm:w-4" /> : <ZoomIn className="h-3 w-3 sm:h-4 sm:w-4" />}
                </Button>
                <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 sm:h-10 sm:w-10">
                  <X className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-2 flex-1 overflow-hidden">
              {/* Image Section */}
              <div className="relative bg-gray-100 dark:bg-gray-800 flex items-center justify-center h-64 sm:h-80 lg:h-auto lg:min-h-[400px]">
                <motion.img
                  src={product.src}
                  alt={product.alt}
                  className={`w-full h-full object-contain transition-transform duration-300 ${
                    isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                  animate={{ scale: isZoomed ? 1.5 : 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Navigation Arrows */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 h-8 w-8 sm:h-10 sm:w-10"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 h-8 w-8 sm:h-10 sm:w-10"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>

                {/* Image Counter */}
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  {currentIndex + 1} / {products.length}
                </div>
              </div>

              {/* Details Section */}
              <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 overflow-y-auto">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{product.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    {product.description ||
                      "Bunga berkualitas premium dari Momo Florist dengan desain yang elegan dan menarik. Dibuat dengan bunga segar pilihan terbaik untuk momen spesial Anda."}
                  </p>

                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                      <span>Pengerjaan ≈ 2 jam sesuai antrian</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                      <span>Gratis ongkir area Surabaya</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                      <span>Bunga segar berkualitas premium</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                      <span>Buka 24 jam</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-4 sm:mt-6 flex-shrink-0">
                  <WhatsAppButton
                    message={`Halo, saya tertarik dengan ${product.title} dari Momo Florist. Bisa tolong berikan informasi lebih lanjut?`}
                    className="w-full bg-[#D4A574] hover:bg-[#C19A68] text-white font-medium rounded-full px-6 py-2 transition-all duration-200 transform hover:scale-105 text-sm border-none shadow-lg hover:shadow-xl h-10"
                    hideIcon
                  >
                    Pesan via WhatsApp
                  </WhatsAppButton>
                  <Button variant="ghost" className="w-full border-2 border-[#E19CAF] text-[#E19CAF] hover:text-[#D4A574] hover:border-[#D4A574] hover:bg-[#E19CAF]/5 bg-transparent rounded-full px-6 py-2 font-medium transition-all duration-200 transform hover:scale-105 text-sm h-10" asChild>
                    <a href="tel:081213142558">Telepon: 081213142558</a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
