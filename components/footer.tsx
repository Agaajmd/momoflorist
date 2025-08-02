"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, MapPin, Clock, Instagram, Flower2 } from "lucide-react"
import MapsEmbed from "./maps-embed-final"

export default function Footer() {
  const whatsappNumber = "6281213142558"
  const phoneNumber = "081213142558"

  return (
    <footer className="relative bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Flower2 className="h-8 w-8 text-[#BFA2DB]" />
              <span className="text-xl font-bold">Momo Florist</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              <span className="font-semibold text-[#8B5A9F] dark:text-[#BFA2DB]">Popo Florist</span> adalah solusi utama untuk kebutuhan bunga di Surabaya. Berdiri sejak 2012, kami melayani <span className="font-semibold">pembuatan hanya 2 jam</span> dengan <span className="font-semibold">free biaya pengiriman</span> area Surabaya.
            </p>
          </div>

          {/* Layanan */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#BFA2DB]">Layanan Kami</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>Bunga Papan & Bunga Papan Mini</li>
              <li>Standing Flower</li>
              <li>Hand Bouquet</li>
              <li>Bunga Salib</li>
              <li>Bunga Potong Pita</li>
              <li>Karangan Bunga Wedding</li>
              <li>Dekorasi Grand Opening</li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#BFA2DB]">Hubungi Kami</h3>
            <div className="space-y-3 text-sm">
              <motion.a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-[#BFA2DB] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: {phoneNumber}</span>
              </motion.a>
              <motion.a
                href={`tel:${phoneNumber}`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-[#BFA2DB] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Telepon: {phoneNumber}</span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/Momoflorist01/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-[#BFA2DB] transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>@Momoflorist01</span>
              </motion.a>
            </div>
          </div>

          {/* Alamat & Jam Buka */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#BFA2DB]">Lokasi & Jam Buka</h3>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Jl. Manyar Sambongan No.30, Kertajaya, Kec. Gubeng, Surabaya, Jawa Timur 60282</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="font-semibold text-[#BFA2DB]">Buka 24 Jam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Maps Section */}
        <div className="mt-12 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-[#BFA2DB] mb-2">Temukan Kami</h3>
            <p className="text-gray-600 dark:text-gray-300">Kunjungi <span className="font-semibold text-[#8B5A9F] dark:text-[#BFA2DB]">Popo Florist</span> langsung di Jl. Manyar Sambongan No.30, Kertajaya, Gubeng, Surabaya. Gratis konsultasi dan pembuatan cepat hanya 2 jam!</p>
          </div>
          <MapsEmbed />
        </div>

        <div className="border-t border-gray-300 dark:border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-300">© 2024 Popo Florist - Momo Florist Surabaya. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-600 dark:text-gray-300">
              <span>Bunga Papan Surabaya</span>
              <span>•</span>
              <span>Standing Flower Wedding</span>
              <span>•</span>
              <span>Hand Bouquet</span>
              <span>•</span>
              <span>Bunga Salib</span>
              <span>•</span>
              <span>Grand Opening</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
