"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Beranda", hasDropdown: false },
  { href: "/bunga-papan", label: "Bunga Papan", hasDropdown: true },
  { href: "/bunga-standing", label: "Bunga Standing", hasDropdown: true },
  { href: "/hand-bouquet", label: "Hand Bouquet", hasDropdown: true },
  { href: "/gallery", label: "Gallery", hasDropdown: true },
]

// Dropdown content data - Full Screen Layout
const dropdownData = {
  "bunga-papan": {
    title: "Bunga Papan",
    products: [
      { name: "Papan Bunga Duka Cita", image: "/bunga papan/bunga papan.jpg", category: "Duka Cita" },
      { name: "Papan Bunga Wedding", image: "/bunga papan/bunga papan2.jpg", category: "Wedding" },
      { name: "Papan Bunga Selamat", image: "/bunga papan/bunga papan3.jpg", category: "Ucapan Selamat" },
      { name: "Papan Bunga Grand Opening", image: "/bunga papan/bunga papan4.jpg", category: "Grand Opening" },
      { name: "Papan Bunga Ulang Tahun", image: "/bunga papan/bunga papan.jpg", category: "Ulang Tahun" },
      { name: "Papan Bunga Promosi", image: "/bunga papan/bunga papan2.jpg", category: "Promosi" },
      { name: "Papan Bunga Anniversary", image: "/bunga papan/bunga papan3.jpg", category: "Anniversary" },
      { name: "Papan Bunga Corporate", image: "/bunga papan/bunga papan4.jpg", category: "Corporate" }
    ]
  },
  "bunga-standing": {
    title: "Bunga Standing", 
    products: [
      { name: "Standing Bunga Duka Cita", image: "/bunga standing/bunga standing.jpg", category: "Duka Cita" },
      { name: "Standing Bunga Wedding", image: "/bunga standing/bunga standing2.jpg", category: "Wedding" },
      { name: "Standing Bunga Elegant", image: "/bunga standing/bunga standing3.jpg", category: "Elegant" },
      { name: "Standing Bunga Luxury", image: "/bunga standing/bunga standing4.jpg", category: "Luxury" },
      { name: "Standing Bunga Modern", image: "/bunga standing/bunga standing.jpg", category: "Modern" },
      { name: "Standing Bunga Classic", image: "/bunga standing/bunga standing2.jpg", category: "Classic" },
      { name: "Standing Bunga Premium", image: "/bunga standing/bunga standing3.jpg", category: "Premium" },
      { name: "Standing Bunga Minimalis", image: "/bunga standing/bunga standing4.jpg", category: "Minimalis" }
    ]
  },
  "hand-bouquet": {
    title: "Hand Bouquet",
    products: [
      { name: "Hand Bouquet Anniversary", image: "/hand bouquet/hand bouquet.jpg", category: "Anniversary" },
      { name: "Hand Bouquet Birthday", image: "/hand bouquet/hand bouquet2.jpg", category: "Birthday" },
      { name: "Hand Bouquet Get Well", image: "/hand bouquet/hand bouquet3.jpg", category: "Get Well" },
      { name: "Hand Bouquet Apology", image: "/hand bouquet/hand bouquet4.jpg", category: "Apology" },
      { name: "Hand Bouquet Congratulations", image: "/hand bouquet/hand bouquet.jpg", category: "Congratulations" },
      { name: "Hand Bouquet Valentine", image: "/hand bouquet/hand bouquet2.jpg", category: "Valentine" },
      { name: "Hand Bouquet Wedding", image: "/hand bouquet/hand bouquet3.jpg", category: "Wedding" },
      { name: "Hand Bouquet Graduation", image: "/hand bouquet/hand bouquet4.jpg", category: "Graduation" }
    ]
  },
  "gallery": {
    title: "Gallery",
    products: [
      { name: "Wedding Gallery", image: "/gallery/gallery toko bunga.jpg", category: "Wedding" },
      { name: "Event Gallery", image: "/gallery/gallery toko bunga2.jpg", category: "Event" },
      { name: "Corporate Gallery", image: "/gallery/gallery toko bunga3.jpg", category: "Corporate" },
      { name: "Birthday Gallery", image: "/gallery/gallery toko bunga4.jpg", category: "Birthday" },
      { name: "Special Occasions", image: "/gallery/gallery toko bunga5.jpg", category: "Special" },
      { name: "Seasonal Collection", image: "/gallery/gallery toko bunga6.jpg", category: "Seasonal" },
      { name: "Anniversary Gallery", image: "/gallery/gallery toko bunga7.jpg", category: "Anniversary" },
      { name: "Custom Arrangements", image: "/gallery/gallery toko bunga8.jpg", category: "Custom" }
    ]
  }
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div 
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.6, ease: "easeInOut" }
              }} 
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 rounded-full overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src="/logo popo florist.jpg"
                alt="Popo Florist Logo"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] group-hover:bg-white/5 transition-colors duration-300" />
            </motion.div>
            <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
              Popo Florist
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-3 text-base font-medium transition-all duration-300 flex items-center gap-1 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 dark:hover:from-pink-500 dark:hover:to-pink-600 rounded-full hover:shadow-lg hover:scale-105 hover:text-white ${
                    pathname === item.href
                      ? "text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                  aria-haspopup={item.hasDropdown ? "true" : "false"}
                  aria-expanded={item.hasDropdown ? "false" : undefined}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-all duration-300 group-hover:rotate-180 group-hover:text-white" />
                  )}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-pink-600 to-pink-600 dark:from-pink-400 dark:to-pink-400 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  )}
                </Link>

                {/* Full Screen Dropdown */}
                {item.hasDropdown && (
                  <div className="fixed left-1/2 top-16 transform -translate-x-1/2 w-[90vw] max-w-6xl bg-white dark:bg-neutral-900 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-500 ease-out z-50 border border-gray-100 dark:border-gray-800 translate-y-4 group-hover:translate-y-0 scale-95 group-hover:scale-100">
                    <div className="p-8">
                      {/* Header */}
                      <div className="mb-8 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {dropdownData[item.href.replace('/', '') as keyof typeof dropdownData]?.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Pilih dari koleksi terbaik kami
                        </p>
                      </div>

                      {/* Products Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                        {dropdownData[item.href.replace('/', '') as keyof typeof dropdownData]?.products.map((product, index) => (
                          <div
                            key={index}
                            className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100"
                            style={{ 
                              transitionDelay: `${200 + index * 100}ms`,
                            }}
                          >
                            <Link
                              href={item.href}
                              className="block group/card bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-pink-700"
                            >
                              <div className="relative overflow-hidden">
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  width={400}
                                  height={240}
                                  className="w-full h-48 object-cover group-hover/card:scale-125 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute top-3 left-3 transform -translate-x-8 group-hover/card:translate-x-0 transition-transform duration-500 delay-200">
                                  <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                                    {product.category}
                                  </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-3 right-3 transform translate-x-8 group-hover/card:translate-x-0 transition-transform duration-500 delay-300">
                                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="p-4 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover/card:text-pink-600 dark:group-hover/card:text-pink-400 transition-colors duration-300">
                                  {product.name}
                                </h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400 group-hover/card:text-gray-600 dark:group-hover/card:text-gray-300 transition-colors duration-300">
                                  Lihat detail produk
                                </p>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 h-10 w-10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 dark:hover:from-pink-500 dark:hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-full hover:text-white"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 h-10 px-4"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    pathname === item.href
                      ? "text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/20"
                      : "text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
