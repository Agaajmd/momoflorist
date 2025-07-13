"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, MapPin, Clock, Instagram, Flower2 } from "lucide-react"
import MapsEmbed from "./maps-embed"

export default function Footer() {
  const whatsappNumber = "6281213142558"
  const phoneNumber = "081213142558"

  return (
    <footer className="relative bg-gray-900 dark:bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Flower2 className="h-8 w-8 text-pink-400" />
              <span className="text-xl font-bold">Popo Florist</span>
            </div>
            <p className="text-gray-300 text-sm">
              Toko bunga online terpercaya di Surabaya sejak 2012. Melayani pengiriman ke seluruh Indonesia dengan
              kualitas terbaik.
            </p>
          </div>

          {/* Layanan */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-pink-400">Layanan Kami</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Bunga Papan</li>
              <li>Bunga Standing</li>
              <li>Hand Bouquet</li>
              <li>Karangan Bunga</li>
              <li>Dekorasi Bunga</li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-pink-400">Hubungi Kami</h3>
            <div className="space-y-3 text-sm">
              <motion.a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: {phoneNumber}</span>
              </motion.a>
              <motion.a
                href={`tel:${phoneNumber}`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Telepon: {phoneNumber}</span>
              </motion.a>
              <motion.a
                href="https://instagram.com/popoflorist01"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>@Popoflorist01</span>
              </motion.a>
            </div>
          </div>

          {/* Alamat & Jam Buka */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-pink-400">Lokasi & Jam Buka</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Jl. Kayoon, Komplek Pasar Bunga Stand C-22, Surabaya</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="font-semibold text-green-400">Buka 24 Jam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Maps Section */}
        <div className="mt-12 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-pink-400 mb-2">Temukan Kami</h3>
            <p className="text-gray-300">Kunjungi toko kami langsung di Pasar Bunga Kayoon, Surabaya</p>
          </div>
          <MapsEmbed />
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">© 2024 Popo Florist. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>Bunga Papan Surabaya</span>
              <span>•</span>
              <span>Standing Flower</span>
              <span>•</span>
              <span>Hand Bouquet</span>
              <span>•</span>
              <span>Karangan Bunga</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
