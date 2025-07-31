"use client"

import { motion } from "framer-motion"
import { 
  FaInstagram, 
  FaWhatsapp, 
  FaPhone,
  FaTiktok,
  FaFacebook
} from "react-icons/fa"
import WhatsAppButton from "./whatsapp-button"

const socialLinks = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://www.instagram.com/Momoflorist01/',
    color: 'hover:bg-[#8B5A9F]'
  },
  {
    name: 'TikTok',
    icon: FaTiktok,
    url: 'https://www.tiktok.com/@momoflorist99',
    color: 'hover:bg-black'
  },
  {
    name: 'Facebook',
    icon: FaFacebook,
    url: '',
    color: 'hover:bg-blue-600'
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    url: 'https://wa.me/6281213142558',
    color: 'hover:bg-green-500'
  },
  {
    name: 'Telepon',
    icon: FaPhone,
    url: 'tel:081213142558',
    color: 'hover:bg-blue-600'
  }
]

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-6 top-[45%] -translate-y-1/2 z-40 hidden lg:block"
    >
      {/* Single Elongated Card with Background Blur */}
      <div className="bg-white/20 backdrop-blur-md rounded-[2rem] p-3 shadow-2xl border border-white/30 flex flex-col items-center space-y-3">
        {/* Social Media Icons */}
        <div className="flex flex-col space-y-2">
          {socialLinks.map((social, index) => (
            social.url ? (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl ${social.color}`}
                title={social.name}
              >
                <social.icon className="w-4 h-4 text-[#8B5A9F] group-hover:text-white transition-colors duration-300" />
                
                {/* Tooltip */}
                <div className="absolute left-full ml-2 px-2 py-0.5 bg-gray-900 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {social.name}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0.5 w-1.5 h-1.5 bg-gray-900 rotate-45"></div>
                </div>
              </motion.a>
            ) : (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                className={`group relative w-8 h-8 bg-white/50 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg opacity-50 cursor-not-allowed`}
                title={`${social.name} - Coming Soon`}
              >
                <social.icon className="w-4 h-4 text-gray-400" />
                
                {/* Tooltip */}
                <div className="absolute left-full ml-2 px-2 py-0.5 bg-gray-900 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {social.name} - Coming Soon
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0.5 w-1.5 h-1.5 bg-gray-900 rotate-45"></div>
                </div>
              </motion.div>
            )
          ))}
        </div>

        {/* Separator Line */}
        <div className="w-6 h-px bg-white/40"></div>

        {/* Order Now Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <WhatsAppButton
            message="Halo, saya ingin memesan bunga dari Momo Florist"
            className="group bg-gradient-to-r from-[#8B5A9F] to-[#A67FA3] hover:from-[#8B5A9F] hover:to-[#BFA2DB] text-white font-bold rounded-full px-2 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#8B5A9F]/25 border-none flex flex-col items-center justify-center min-h-[80px] w-8"
            hideIcon
          >
            <div className="flex flex-col items-center justify-center space-y-0.5 transform -rotate-0">
              <div className="writing-mode-vertical text-[0.6rem] font-bold tracking-wider">
                <div className="transform rotate-[270deg] whitespace-nowrap">ORDER NOW</div>
              </div>
            </div>
          </WhatsAppButton>
        </motion.div>
      </div>
    </motion.div>
  )
}
