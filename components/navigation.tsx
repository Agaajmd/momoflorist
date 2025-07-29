"use client"

import { useState, useEffect } from "react"
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
  { href: "/bunga-papan-mini", label: "Bunga Papan Mini", hasDropdown: true },
  { href: "/bunga-standing", label: "Bunga Standing", hasDropdown: true },
  { href: "/hand-bouquet", label: "Hand Bouquet", hasDropdown: true },
  { href: "/gallery", label: "Gallery", hasDropdown: true },
]

// Dropdown content data - Full Screen Layout
const dropdownData: Record<string, { title: string; products: Array<{ name: string; image: string; category: string }>; categories?: Array<{ name: string; href: string }> }> = {
  "bunga-papan": {
    title: "Bunga Papan",
    categories: [
      { name: "🕊️ Bunga papan duka cita", href: "/bunga-papan#duka-cita" },
      { name: "💍 Bunga papan wedding", href: "/bunga-papan#wedding" },
      { name: "🎉 Bunga papan selamat & sukses", href: "/bunga-papan#selamat-sukses" },
    ],
    products: [
      { name: "Papan Bunga Wedding", image: "/bunga papan/bunga papan2.jpg", category: "Wedding" },
      { name: "Papan Bunga Selamat", image: "/bunga papan/bunga papan3.jpg", category: "Ucapan Selamat" },
      { name: "Papan Bunga Grand Opening", image: "/bunga papan/bunga papan4.jpg", category: "Grand Opening" },
    ]
  },
  "bunga-papan-mini": {
    title: "Bunga Papan Mini",
    categories: [
      { name: "🕊️ Bunga papan mini duka cita", href: "/bunga-papan-mini#duka-cita" },
      { name: "💍 Bunga papan mini wedding", href: "/bunga-papan-mini#wedding" },
      { name: "🎉 Bunga papan mini selamat & sukses", href: "/bunga-papan-mini#selamat-sukses" },
    ],
    products: [
      { name: "Papan Bunga Mini Wedding", image: "/bunga papan/bunga papan2.jpg", category: "Wedding" },
      { name: "Papan Bunga Mini Selamat", image: "/bunga papan/bunga papan3.jpg", category: "Ucapan Selamat" },
      { name: "Papan Bunga Mini Grand Opening", image: "/bunga papan/bunga papan4.jpg", category: "Grand Opening" },
    ]
  },
  "bunga-standing": {
    title: "Bunga Standing",
    categories: [
      { name: "🕊️ Bunga standing duka cita", href: "/bunga-standing#duka-cita" },
      { name: "💍 Bunga standing wedding", href: "/bunga-standing#wedding" },
      { name: "🎉 Bunga standing selamat & sukses", href: "/bunga-standing#selamat-sukses" },
    ],
    products: [
      { name: "Standing Bunga Wedding", image: "/bunga standing/bunga standing2.jpg", category: "Wedding" },
      { name: "Standing Bunga Elegant", image: "/bunga standing/bunga standing3.jpg", category: "Elegant" },
      { name: "Standing Bunga Luxury", image: "/bunga standing/bunga standing4.jpg", category: "Luxury" },
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
    categories: [
      { name: "✝️ Bunga salib", href: "/gallery#bunga-salib" },
      { name: "🎀 Bunga potong pita", href: "/gallery#bunga-potong-pita" },
    ],
    products: [
      { name: "Wedding Gallery", image: "/gallery/gallery toko bunga.jpg", category: "Wedding" },
      { name: "Event Gallery", image: "/gallery/gallery toko bunga2.jpg", category: "Event" },
      { name: "Corporate Gallery", image: "/gallery/gallery toko bunga3.jpg", category: "Corporate" },
    ]
  }
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  // Handle scroll to detect when user scrolls with smooth downward animation
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          setIsScrolled(scrollY > 10)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Helper function to get dropdown data safely
  const getDropdownData = (href: string) => {
    // Convert href to key, handle all possible cases
    let key = href.replace('/', '')
    
    // Handle root path
    if (key === '' || key === '/') {
      return { title: 'Beranda', products: [], categories: [] }
    }
    
    // Check if key exists in dropdownData
    if (dropdownData[key]) {
      return dropdownData[key]
    }
    
    // Fallback for any unmatched routes
    return { title: 'Koleksi Kami', products: [], categories: [] }
  }

  // Helper function to properly encode image URLs
  const getImageSrc = (imagePath: string) => {
    return encodeURI(imagePath)
  }

  return (
    <>
      {/* Information Text */}
      <div className="bg-white dark:bg-black text-black dark:text-white py-3 px-4 text-center transition-colors duration-300">
        <p className="text-sm font-medium">
          🌸 Momo Florist, siap melayani pesanan anda 🌸
        </p>
      </div>
      
      {/* Main Navigation */}
      <nav className={`z-50 backdrop-blur-xl border ${
        isScrolled 
          ? 'bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/20 fixed top-4 left-1/2 transform -translate-x-1/2 rounded-full shadow-2xl w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] lg:w-[calc(100%-3rem)] max-w-7xl' 
          : 'bg-[#CDB6BD]/95 dark:bg-[#2F3134]/95 border-[#CDB6BD]/50 dark:border-[#2F3134]/50 sticky top-0 rounded-t-[2rem] w-full'
      }`}>
        <div className={`mx-auto ${
          isScrolled ? 'px-4 md:px-6 lg:px-8 max-w-none' : 'px-3 sm:px-6 lg:px-8 max-w-7xl'
        }`}>
          <div className={`flex justify-between items-center ${
            isScrolled ? 'h-12 md:h-14 lg:h-16' : 'h-12 md:h-14 lg:h-16'
          }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
            <motion.div 
              whileHover={{ 
                scale: 1.05
              }} 
              whileTap={{ scale: 0.95 }}
              className={`relative rounded-full overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-out ${
                isScrolled ? 'w-10 h-10' : 'w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12'
              }`}
              style={{ borderRadius: '50%', aspectRatio: '1/1' }}
            >
              <Image
                src="/logo MomoFlorist.png"
                alt="Momo Florist Logo"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                style={{ borderRadius: '50%', objectFit: 'cover' }}
                priority
              />
            </motion.div>
            <span className={`font-bold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-all duration-300 ease-out ${
              isScrolled ? 'text-sm md:text-base' : 'text-sm md:text-base lg:text-lg'
            }`}>
              Momo Florist
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${
            isScrolled ? 'space-x-4 lg:space-x-6' : 'space-x-4 lg:space-x-6'
          }`}>
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-1 md:gap-2 font-medium transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 dark:hover:from-pink-500 dark:hover:to-pink-600 rounded-full hover:shadow-lg hover:scale-105 hover:text-white ${
                    isScrolled ? 'px-3 py-1.5 md:px-4 md:py-2 text-sm' : 'px-3 py-1.5 md:px-4 md:py-2 text-sm'
                  } ${
                    pathname === item.href
                      ? "text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                  aria-haspopup={item.hasDropdown ? "true" : "false"}
                  aria-expanded={item.hasDropdown ? "false" : undefined}
                >
                  <span className="whitespace-nowrap text-center leading-tight">
                    {item.label}
                  </span>
                </Link>

                {/* Full Screen Dropdown */}
                {item.hasDropdown && getDropdownData(item.href).products.length > 0 && (
                  <div className={`fixed left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-xl dark:bg-neutral-900/20 dark:backdrop-blur-xl rounded-[1.5rem] shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-500 ease-out z-50 border border-white/30 dark:border-gray-800/30 translate-y-4 group-hover:translate-y-0 scale-95 group-hover:scale-100 ${
                    isScrolled 
                      ? 'top-[calc(1rem+3rem+1rem)] md:top-[calc(1rem+3.5rem+1rem)] lg:top-[calc(1rem+4rem+1rem)] w-[calc(100vw-2rem)] md:w-[calc(100vw-4rem)] lg:w-[calc(100vw-6rem)] max-w-6xl' 
                      : 'top-12 md:top-14 lg:top-16 w-[95vw] md:w-[90vw] max-w-6xl'
                  }`}>
                    <div className="p-6">
                      {/* Products Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                        {/* First Card - Categories for Bunga Papan and Bunga Standing */}
                        {(item.href === '/bunga-papan' || item.href === '/bunga-papan-mini' || item.href === '/bunga-standing' || item.href === '/gallery') && getDropdownData(item.href).categories && (
                          <div
                            className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 flex flex-col justify-center"
                            style={{ 
                              transitionDelay: `200ms`,
                            }}
                          >
                            <div className="h-full flex flex-col justify-center space-y-4 px-2">
                              <h4 className="text-xl font-bold text-gray-900 dark:text-white text-left mb-2">
                                Kategori
                              </h4>
                              <div className="space-y-3">
                                {getDropdownData(item.href).categories?.map((category, catIndex) => (
                                  <Link
                                    key={catIndex}
                                    href={category.href}
                                    className="block text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 text-base font-medium transition-all duration-300 text-left hover:scale-105 py-2 px-3 rounded-md hover:bg-white/20 dark:hover:bg-neutral-700/20 underline hover:no-underline"
                                  >
                                    {category.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Regular Product Cards */}
                        {getDropdownData(item.href).products.slice(0, (item.href === '/bunga-papan' || item.href === '/bunga-papan-mini' || item.href === '/bunga-standing' || item.href === '/gallery') ? 3 : 4).map((product, index) => (
                          <div
                            key={index}
                            className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100"
                            style={{ 
                              transitionDelay: `${200 + ((item.href === '/bunga-papan' || item.href === '/bunga-papan-mini' || item.href === '/bunga-standing' || item.href === '/gallery') ? (index + 1) : index) * 100}ms`,
                            }}
                          >
                            <Link
                              href={item.href}
                              className="block group/card bg-white/60 backdrop-blur-md dark:bg-neutral-800/60 dark:backdrop-blur-md rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-white/40 dark:border-gray-700/40 hover:border-pink-200/60 dark:hover:border-pink-700/60"
                            >
                              <div className="relative overflow-hidden">
                                <Image
                                  src={getImageSrc(product.image)}
                                  alt={product.name}
                                  width={400}
                                  height={240}
                                  className="w-full h-48 object-cover group-hover/card:scale-125 transition-transform duration-700 ease-out"
                                  unoptimized
                                />
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
              className={`hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 dark:hover:from-pink-500 dark:hover:to-pink-600 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg rounded-full hover:text-white ${
                isScrolled ? 'p-2 h-9 w-9' : 'p-2 h-9 w-9'
              }`}
            >
              <Sun className={`rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 ${
                isScrolled ? 'h-4 w-4' : 'h-4 w-4'
              }`} />
              <Moon className={`absolute rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 ${
                isScrolled ? 'h-4 w-4' : 'h-4 w-4'
              }`} />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 dark:hover:from-pink-500 dark:hover:to-pink-600 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg rounded-full hover:text-white ${
                isScrolled ? 'p-2 h-8 w-8' : 'p-2 h-8 w-8'
              }`}
            >
              <Sun className={`rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 ${
                isScrolled ? 'h-3 w-3' : 'h-3 w-3'
              }`} />
              <Moon className={`absolute rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 ${
                isScrolled ? 'h-3 w-3' : 'h-3 w-3'
              }`} />
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`rounded-full text-gray-900 dark:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 dark:hover:from-pink-500 dark:hover:to-pink-600 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg flex items-center justify-center hover:text-white ${
                isScrolled ? 'p-2 h-8 w-8' : 'p-2 h-8 w-8'
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className={`${isScrolled ? 'h-4 w-4' : 'h-4 w-4'}`} /> : <Menu className={`${isScrolled ? 'h-4 w-4' : 'h-4 w-4'}`} />}
                </motion.div>
              </AnimatePresence>
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden bg-white/10 backdrop-blur-xl border border-white/20 border-t-0 shadow-lg ${
              isScrolled ? 'rounded-b-[2rem] fixed left-1/2 transform -translate-x-1/2 w-[calc(100%-1rem)] max-w-lg' : 'rounded-b-[2rem]'
            }`}
          >
            <div className={`pt-4 pb-4 space-y-2 ${isScrolled ? 'px-6' : 'px-6'}`}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      pathname === item.href
                        ? "text-pink-600 dark:text-pink-400 bg-white/20 backdrop-blur-sm shadow-sm"
                        : "text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-sm"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </>
  )
}
