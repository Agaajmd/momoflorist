"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { MapPin, ExternalLink } from "lucide-react"

export default function MapsEmbed() {
  const [mapError, setMapError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showFallback, setShowFallback] = useState(false)
  
  const address = "Jl. Manyar Sambongan No.30, Kertajaya, Kec. Gubeng, Surabaya, Jawa Timur 60282"
  const googleMapsUrl = "https://www.google.com/maps/place/Jl.+Manyar+Sambongan+No.30,+Kertajaya,+Kec.+Gubeng,+Surabaya,+Jawa+Timur+60282"
  
  // Timeout fallback jika maps tidak load dalam 8 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        console.log('Maps loading timeout, showing fallback')
        setShowFallback(true)
        setIsLoading(false)
      }
    }, 8000)
    
    return () => clearTimeout(timer)
  }, [isLoading])
  
  // Jika ada error loading map atau timeout, tampilkan fallback
  if (mapError || showFallback) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 flex items-center justify-center"
      >
        <div className="text-center p-6">
          <MapPin className="h-12 w-12 text-[#BFA2DB] mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Lokasi Momo Florist
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 max-w-xs">
            {address}
          </p>
          <div className="space-y-2">
            <motion.a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-[#BFA2DB] hover:bg-[#8B5A9F] text-white px-4 py-2 rounded-lg transition-colors duration-200 mr-2 mb-2"
            >
              <span>Google Maps</span>
              <ExternalLink className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="https://waze.com/ul?ll=-7.2653,112.7508&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <span>Waze</span>
              <ExternalLink className="h-4 w-4" />
            </motion.a>
          </div>
          {showFallback && (
            <p className="text-xs text-gray-500 mt-3">
              Peta sedang dimuat. Gunakan tombol di atas untuk navigasi.
            </p>
          )}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg relative bg-gray-100 dark:bg-gray-800"
    >
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#BFA2DB] border-t-transparent mx-auto mb-2"></div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Memuat peta...</p>
          </div>
        </div>
      )}
      
      {/* Google Maps Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5034991678753!2d112.75078831461596!3d-7.265303192723745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f93ed34be343%3A0x4b8ee89b5b4e0ca7!2sJl.%20Manyar%20Sambongan%20No.30%2C%20Kertajaya%2C%20Kec.%20Gubeng%2C%20Surabaya%2C%20Jawa%20Timur%2060282%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1733187234567"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Momo Florist - Jl. Manyar Sambongan No.30, Kertajaya, Gubeng, Surabaya"
        onError={(e) => {
          console.error('Map failed to load:', e)
          setMapError(true)
          setIsLoading(false)
        }}
        onLoad={() => {
          setIsLoading(false)
          console.log('Maps berhasil dimuat!')
        }}
      />
      
      {/* Button overlay untuk membuka Google Maps */}
      <motion.a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-lg shadow-md transition-all duration-200 flex items-center space-x-1 text-sm z-20"
      >
        <ExternalLink className="h-4 w-4" />
        <span className="hidden sm:inline">Buka Maps</span>
      </motion.a>
    </motion.div>
  )
}
