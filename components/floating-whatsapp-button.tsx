"use client"

import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import WhatsAppButton from "./whatsapp-button"

export default function FloatingWhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: 2,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      className="fixed bottom-6 right-6 z-50 lg:hidden"
    >
      <WhatsAppButton
        message="Halo, saya ingin memesan bunga dari Momo Florist"
        className="group bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#25D366] hover:to-[#25D366] text-white rounded-full w-14 h-14 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-[#25D366]/25 border-none"
        hideIcon
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <FaWhatsapp className="w-7 h-7 text-white" />
          
          {/* Pulse animation */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse opacity-50"></div>
        </motion.div>
      </WhatsAppButton>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat WhatsApp
        <div className="absolute top-full right-4 w-2 h-2 bg-gray-900 transform rotate-45 -translate-y-1"></div>
      </div>
    </motion.div>
  )
}
