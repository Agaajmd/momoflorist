"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Share2, Maximize, Minimize } from "lucide-react"
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
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [imageLoading, setImageLoading] = useState(false)

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

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
    setImageLoading(true)
    // Prevent body scroll when fullscreen is open
    if (!isFullscreen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  // Close fullscreen with Escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && isFullscreen) {
      toggleFullscreen()
    }
  }

  // Touch handlers for swipe gestures in fullscreen
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      handleNext()
    } else if (isRightSwipe) {
      handlePrevious()
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen && !isFullscreen && (
        <motion.div
          key="product-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-2 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col shadow-xl border border-gray-200 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#8B5A9F] to-[#BFA2DB] bg-clip-text text-transparent truncate pr-4">{product.title}</h2>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleShare} 
                    className="h-9 w-9 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-[#BFA2DB]/20 text-[#8B5A9F] hover:text-[#BFA2DB] transition-colors duration-150"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={toggleFullscreen} 
                    className="h-9 w-9 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-[#BFA2DB]/20 text-[#8B5A9F] hover:text-[#BFA2DB] transition-colors duration-150"
                  >
                    <Maximize className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={onClose} 
                    className="h-9 w-9 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-red-100 text-gray-600 hover:text-red-600 transition-colors duration-150"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-5 flex-1 overflow-hidden">
              {/* Image Section - 3 kolom di desktop */}
              <div className="lg:col-span-3 relative bg-gray-50 dark:bg-gray-800 flex items-center justify-center h-80 sm:h-96 lg:h-auto lg:min-h-[500px] rounded-xl m-2 lg:m-4">
                <div className="relative w-full h-full max-w-lg aspect-square">
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="w-full h-full object-cover transition-transform duration-150 rounded-lg cursor-pointer hover:scale-105"
                    onClick={toggleFullscreen}
                  />
                </div>

                {/* Navigation Arrows */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-100 h-8 w-8 lg:h-10 lg:w-10 rounded-lg shadow-md text-gray-600 hover:text-[#8B5A9F] transition-colors duration-150"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-100 h-8 w-8 lg:h-10 lg:w-10 rounded-lg shadow-md text-gray-600 hover:text-[#8B5A9F] transition-colors duration-150"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {/* Image Counter */}
                <div className="absolute bottom-2 lg:bottom-4 left-1/2 -translate-x-1/2 bg-black/75 text-white px-3 py-1 lg:px-4 lg:py-1.5 rounded-full text-xs lg:text-sm font-medium">
                  {currentIndex + 1} / {products.length}
                </div>
              </div>

              {/* Details Section - 2 kolom di desktop */}
              <div className="lg:col-span-2 p-3 sm:p-4 lg:p-5 flex flex-col h-full lg:h-auto bg-white dark:bg-gray-900">
                {/* Header dengan tinggi minimal */}
                <div className="flex-shrink-0 mb-3 lg:mb-4">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-[#8B5A9F] to-[#BFA2DB] bg-clip-text text-transparent leading-tight">{product.title}</h3>
                </div>

                {/* Content area - keunggulan dengan tinggi tetap */}
                <div className="flex-1 flex flex-col min-h-0">
                  {/* Keunggulan dengan tinggi yang pas */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 sm:p-3 lg:p-4 border border-gray-200 dark:border-gray-700 flex-1 overflow-hidden">
                    <h4 className="text-sm lg:text-base font-semibold text-[#8B5A9F] mb-2 lg:mb-3">Keunggulan Kami</h4>
                    <div className="space-y-1.5 lg:space-y-2 text-xs lg:text-xs text-gray-700 dark:text-gray-300 h-full overflow-y-auto">
                      <div className="flex items-center space-x-2 p-1.5 rounded-md bg-white dark:bg-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#BFA2DB] rounded-full flex-shrink-0"></div>
                        <span className="font-medium leading-tight">Pengerjaan ≈ 2 jam sesuai antrian</span>
                      </div>
                      <div className="flex items-center space-x-2 p-1.5 rounded-md bg-white dark:bg-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#BFA2DB] rounded-full flex-shrink-0"></div>
                        <span className="font-medium leading-tight">Gratis ongkir area Surabaya</span>
                      </div>
                      <div className="flex items-center space-x-2 p-1.5 rounded-md bg-white dark:bg-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#BFA2DB] rounded-full flex-shrink-0"></div>
                        <span className="font-medium leading-tight">Bunga segar berkualitas premium</span>
                      </div>
                      <div className="flex items-center space-x-2 p-1.5 rounded-md bg-white dark:bg-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#BFA2DB] rounded-full flex-shrink-0"></div>
                        <span className="font-medium leading-tight">Buka 24 jam</span>
                      </div>
                      <div className="flex items-center space-x-2 p-1.5 rounded-md bg-white dark:bg-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#BFA2DB] rounded-full flex-shrink-0"></div>
                        <span className="font-medium leading-tight">Garansi kepuasan pelanggan</span>
                      </div>
                      <div className="flex items-center space-x-2 p-1.5 rounded-md bg-white dark:bg-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#BFA2DB] rounded-full flex-shrink-0"></div>
                        <span className="font-medium leading-tight">Desain custom sesuai keinginan</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons dengan spacing minimal */}
                <div className="flex-shrink-0 mt-3 lg:mt-4 pt-3 lg:pt-4 border-t border-gray-200 dark:border-gray-700">
                  <WhatsAppButton
                    message={`Halo, saya tertarik dengan ${product.title} dari Momo Florist. Bisa tolong berikan informasi lebih lanjut?`}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-lg px-4 py-2.5 lg:py-3 transition-colors duration-150 text-xs lg:text-sm shadow-md h-9 lg:h-10"
                    hideIcon
                  >
                    Pesan via WhatsApp
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Fullscreen Image Modal */}
      {isFullscreen && (
        <motion.div
          key="fullscreen-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
          onClick={toggleFullscreen}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/20"
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Navigation arrows for fullscreen */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/20"
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/20"
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Fullscreen image */}
            <div className="relative flex items-center justify-center w-full h-full">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={product.src}
                alt={product.alt}
                className="max-w-full max-h-full object-contain select-none"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
                draggable={false}
              />
            </div>

            {/* Image info overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 text-white px-6 py-3 rounded-full backdrop-blur-sm">
              <div className="text-center">
                <div className="text-sm font-medium mb-1">{product.title}</div>
                <div className="text-xs opacity-75">{currentIndex + 1} / {products.length}</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
