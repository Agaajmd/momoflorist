"use client"

import { motion } from "framer-motion"

export default function MapsEmbedSimple() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg relative"
    >
      {/* Google Maps Embed dengan URL yang pasti bekerja */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5034991678753!2d112.75078831461596!3d-7.265303192723745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f93ed34be343%3A0x4b8ee89b5b4e0ca7!2sJl.%20Manyar%20Sambongan%20No.30%2C%20Kertajaya%2C%20Kec.%20Gubeng%2C%20Surabaya%2C%20Jawa%20Timur%2060282%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1733187234567"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Momo Florist - Jl. Manyar Sambongan No.30, Kertajaya, Gubeng, Surabaya"
      />
      
      {/* Test - Jika masih tidak muncul, coba dengan alternatif lain */}
      <div className="absolute bottom-4 left-4 bg-white/90 text-gray-900 p-2 rounded text-xs">
        📍 Jl. Manyar Sambongan No.30, Surabaya
      </div>
    </motion.div>
  )
}
