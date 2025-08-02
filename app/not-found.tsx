"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Phone, Search } from "lucide-react"

export const dynamic = 'force-dynamic'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#CDB6BD] dark:bg-[#2F3134]">
      <div className="max-w-md w-full mx-auto p-8 text-center">
        <div className="mb-8">
          {/* Flower Icon */}
          <div className="w-32 h-32 mx-auto mb-6 bg-[#BFA2DB]/20 dark:bg-[#BFA2DB]/10 rounded-full flex items-center justify-center">
            <span className="text-6xl">🌸</span>
          </div>
          
          {/* 404 Number */}
          <h1 className="text-8xl font-bold text-[#BFA2DB] dark:text-[#BFA2DB] mb-4 drop-shadow-lg">
            404
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-[#EDE6DE] mb-2">
            Halaman Tidak Ditemukan
          </h2>
          
          {/* Description */}
          <p className="text-gray-700 dark:text-[#C6BBAE] mb-8 leading-relaxed">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah dipindahkan atau tidak tersedia.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button 
            asChild
            className="w-full bg-gradient-to-r from-[#BFA2DB] to-[#D4C3A6] hover:from-[#8B5A9F] hover:to-[#BFA2DB] text-white font-medium py-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <Link href="/" className="flex items-center justify-center space-x-2">
              <Home className="h-5 w-5" />
              <span>Kembali ke Beranda</span>
            </Link>
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.history.back()}
            className="w-full border-2 border-[#BFA2DB] text-[#8B5A9F] hover:bg-[#BFA2DB] hover:text-white dark:border-[#BFA2DB] dark:text-[#BFA2DB] dark:hover:bg-[#BFA2DB] dark:hover:text-white font-medium py-3 rounded-full transition-all duration-200 transform hover:scale-105"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Halaman Sebelumnya
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-sm text-gray-600 dark:text-[#C6BBAE]">
          <p className="mb-2">Butuh bantuan? Hubungi kami:</p>
          <div className="space-y-1">
            <a 
              href="https://wa.me/6281213142558" 
              className="text-[#BFA2DB] dark:text-[#BFA2DB] hover:underline font-medium block"
            >
              WhatsApp: 081213142558
            </a>
            <p className="text-gray-600 dark:text-[#C6BBAE]">
              Momo Florist - Toko Bunga Surabaya
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-[#BFA2DB] rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-[#D4C3A6] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-[#BFA2DB] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  )
}