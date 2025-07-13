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
          text: `Lihat ${product.title} dari Popo Florist`,
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{product.title}</h2>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setIsZoomed(!isZoomed)}>
                  {isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
                </Button>
                <Button variant="ghost" size="sm" onClick={onClose}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Image Section */}
              <div className="relative bg-gray-100 dark:bg-gray-800 flex items-center justify-center min-h-[400px]">
                <motion.img
                  src={product.src}
                  alt={product.alt}
                  className={`max-w-full max-h-full object-contain transition-transform duration-300 ${
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentIndex + 1} / {products.length}
                </div>
              </div>

              {/* Details Section */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{product.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {product.description ||
                      "Bunga berkualitas premium dari Popo Florist dengan desain yang elegan dan menarik. Dibuat dengan bunga segar pilihan terbaik untuk momen spesial Anda."}
                  </p>

                  {product.price && (
                    <div className="mb-6">
                      <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">{product.price}</span>
                    </div>
                  )}

                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Pengerjaan cepat 2 jam</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Gratis ongkir area Surabaya</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Bunga segar berkualitas premium</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Buka 24 jam</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <WhatsAppButton
                    message={`Halo, saya tertarik dengan ${product.title} dari Popo Florist. Bisa tolong berikan informasi lebih lanjut?`}
                    className="w-full text-lg py-3"
                  >
                    Pesan via WhatsApp
                  </WhatsAppButton>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
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
