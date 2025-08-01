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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-2 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-gradient-to-br from-white/95 to-[#F8F6F4]/95 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-xl rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-white/20 dark:border-gray-700/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className="relative bg-gradient-to-r from-[#BFA2DB]/10 to-[#D4C3A6]/10 dark:from-[#BFA2DB]/20 dark:to-[#D4C3A6]/20 backdrop-blur-sm border-b border-[#BFA2DB]/20 dark:border-gray-700/50">
              <div className="flex items-center justify-between p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#8B5A9F] to-[#BFA2DB] bg-clip-text text-transparent truncate pr-4">{product.title}</h2>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleShare} 
                    className="h-10 w-10 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-[#BFA2DB]/20 border border-[#BFA2DB]/20 text-[#8B5A9F] hover:text-[#BFA2DB] transition-all duration-300 shadow-sm"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setIsZoomed(!isZoomed)} 
                    className="h-10 w-10 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-[#BFA2DB]/20 border border-[#BFA2DB]/20 text-[#8B5A9F] hover:text-[#BFA2DB] transition-all duration-300 shadow-sm"
                  >
                    {isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={onClose} 
                    className="h-10 w-10 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-red-500/20 border border-red-500/20 text-red-500 hover:text-red-600 transition-all duration-300 shadow-sm"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-5 flex-1 overflow-hidden">
              {/* Image Section - 3 kolom di desktop */}
              <div className="lg:col-span-3 relative bg-gradient-to-br from-[#F8F6F4] to-[#CDB6BD]/20 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center h-80 sm:h-96 lg:h-auto lg:min-h-[500px] rounded-2xl m-2 lg:m-4 shadow-inner border border-white/30">
                <div className="relative w-full h-full max-w-lg aspect-square">
                  <motion.img
                    src={product.src}
                    alt={product.alt}
                    className={`w-full h-full object-cover transition-transform duration-300 rounded-xl ${
                      isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
                    }`}
                    onClick={() => setIsZoomed(!isZoomed)}
                    animate={{ scale: isZoomed ? 1.5 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Navigation Arrows */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 hover:bg-[#BFA2DB]/20 backdrop-blur-md h-10 w-10 lg:h-12 lg:w-12 rounded-full shadow-lg border border-[#BFA2DB]/20 text-[#8B5A9F] hover:text-[#BFA2DB] transition-all duration-300 hover:scale-110"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 hover:bg-[#BFA2DB]/20 backdrop-blur-md h-10 w-10 lg:h-12 lg:w-12 rounded-full shadow-lg border border-[#BFA2DB]/20 text-[#8B5A9F] hover:text-[#BFA2DB] transition-all duration-300 hover:scale-110"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5" />
                </Button>

                {/* Image Counter */}
                <div className="absolute bottom-3 lg:bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#BFA2DB]/90 to-[#8B5A9F]/90 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium shadow-lg backdrop-blur-sm border border-white/20">
                  {currentIndex + 1} / {products.length}
                </div>
              </div>

              {/* Details Section - 2 kolom di desktop */}
              <div className="lg:col-span-2 p-3 sm:p-4 lg:p-5 flex flex-col h-full lg:h-auto bg-gradient-to-br from-white/50 to-[#F8F6F4]/30 dark:from-gray-900/50 dark:to-gray-800/30">
                {/* Header dengan tinggi minimal */}
                <div className="flex-shrink-0 mb-3 lg:mb-4">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-[#8B5A9F] to-[#BFA2DB] bg-clip-text text-transparent leading-tight">{product.title}</h3>
                </div>

                {/* Content area - keunggulan dengan tinggi tetap */}
                <div className="flex-1 flex flex-col min-h-0">
                  {/* Keunggulan dengan tinggi yang pas */}
                  <div className="bg-gradient-to-r from-[#BFA2DB]/5 to-[#D4C3A6]/5 dark:from-[#BFA2DB]/10 dark:to-[#D4C3A6]/10 rounded-lg p-3 sm:p-3 lg:p-4 border border-[#BFA2DB]/20 backdrop-blur-sm flex-1 overflow-hidden">
                    <h4 className="text-sm lg:text-base font-semibold text-[#8B5A9F] mb-2 lg:mb-3">Keunggulan Kami</h4>
                    <div className="space-y-1.5 lg:space-y-2 text-xs lg:text-xs text-gray-700 dark:text-gray-300 h-full overflow-y-auto">
                      <div className="flex items-center space-x-2 p-1.5 rounded-md bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
                        <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-gradient-to-r from-[#BFA2DB] to-[#8B5A9F] rounded-full flex-shrink-0"></div>
                        <span className="font-medium leading-tight">Pengerjaan ≈ 2 jam sesuai antrian</span>
                      </div>
                      <div className="flex items-center space-x-2 p-1.5 rounded-md bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
                        <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-gradient-to-r from-[#BFA2DB] to-[#8B5A9F] rounded-full flex-shrink-0"></div>
                        <span className="font-medium leading-tight">Gratis ongkir area Surabaya</span>
                      </div>
                      <div className="flex items-center space-x-2 p-1.5 rounded-md bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
                        <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-gradient-to-r from-[#BFA2DB] to-[#8B5A9F] rounded-full flex-shrink-0"></div>
                        <span className="font-medium leading-tight">Bunga segar berkualitas premium</span>
                      </div>
                      <div className="flex items-center space-x-2 p-1.5 rounded-md bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
                        <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-gradient-to-r from-[#BFA2DB] to-[#8B5A9F] rounded-full flex-shrink-0"></div>
                        <span className="font-medium leading-tight">Buka 24 jam</span>
                      </div>
                      <div className="flex items-center space-x-2 p-1.5 rounded-md bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
                        <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-gradient-to-r from-[#BFA2DB] to-[#8B5A9F] rounded-full flex-shrink-0"></div>
                        <span className="font-medium leading-tight">Garansi kepuasan pelanggan</span>
                      </div>
                      <div className="flex items-center space-x-2 p-1.5 rounded-md bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
                        <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-gradient-to-r from-[#BFA2DB] to-[#8B5A9F] rounded-full flex-shrink-0"></div>
                        <span className="font-medium leading-tight">Desain custom sesuai keinginan</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons dengan spacing minimal */}
                <div className="flex-shrink-0 mt-3 lg:mt-4 pt-3 lg:pt-4 border-t border-[#BFA2DB]/20">
                  <div className="space-y-2 lg:space-y-3">
                    <WhatsAppButton
                      message={`Halo, saya tertarik dengan ${product.title} dari Momo Florist. Bisa tolong berikan informasi lebih lanjut?`}
                      className="w-full bg-gradient-to-r from-[#BFA2DB] to-[#D4C3A6] hover:from-[#8B5A9F] hover:to-[#BFA2DB] text-white font-semibold rounded-lg px-4 py-2.5 lg:py-3 transition-all duration-300 transform hover:scale-105 text-xs lg:text-sm border-none shadow-lg hover:shadow-xl h-9 lg:h-10 backdrop-blur-sm ring-2 ring-[#BFA2DB]/20 hover:ring-[#8B5A9F]/40"
                      hideIcon
                    >
                      Pesan via WhatsApp
                    </WhatsAppButton>
                    <Button 
                      variant="ghost" 
                      className="w-full border-2 border-[#BFA2DB] text-[#8B5A9F] hover:text-white hover:border-[#8B5A9F] hover:bg-gradient-to-r hover:from-[#BFA2DB] hover:to-[#8B5A9F] bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg px-4 py-2.5 lg:py-3 font-semibold transition-all duration-300 transform hover:scale-105 text-xs lg:text-sm h-9 lg:h-10 shadow-md hover:shadow-lg" 
                      asChild
                    >
                      <a href="tel:081213142558">Telepon: 081213142558</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
