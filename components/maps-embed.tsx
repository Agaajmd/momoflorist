"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink } from "lucide-react"

export default function MapsEmbed() {
  const [mapError, setMapError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  const googleMapsUrl = "https://www.google.com/maps/place/Jl.+Manyar+Sambongan+No.30,+Kertajaya,+Kec.+Gubeng,+Surabaya,+Jawa+Timur+60282"
  
  console.log('MapsEmbed component rendered, isLoading:', isLoading, 'mapError:', mapError)
  
  // Jika ada error loading map, tetap tampilkan iframe kosong
  if (mapError) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 relative"
      >
        {/* Loading fallback yang mirip map */}
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 relative">
          <div className="absolute inset-0 opacity-20">
            {/* Pattern seperti peta */}
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.05'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
        </div>
        
        {/* Button untuk buka di Google Maps */}
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg relative"
    >
      {/* Loading indicator - minimal */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-6 w-6 border-2 border-[#BFA2DB] border-t-transparent"></div>
        </div>
      )}
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5034991678753!2d112.75078831461596!3d-7.265303192723745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f93ed34be343%3A0x4b8ee89b5b4e0ca7!2sJl.%20Manyar%20Sambongan%20No.30%2C%20Kertajaya%2C%20Kec.%20Gubeng%2C%20Surabaya%2C%20Jawa%20Timur%2060282%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1733187234567"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Momo Florist - Jl. Manyar Sambongan No.30, Kertajaya, Gubeng, Surabaya"
        onError={() => {
          console.error('Map failed to load')
          setMapError(true)
          setIsLoading(false)
        }}
        onLoad={() => {
          setIsLoading(false)
          console.log('Maps berhasil dimuat')
        }}
      />
      
      {/* Button untuk buka di Google Maps */}
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
