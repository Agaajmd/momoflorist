"use client"

import { useState, useEffect, Suspense, memo, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, ChevronDown, ChevronRight, ArrowLeft } from "lucide-react"
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
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
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

  // Handle mobile drawer navigation
  const handleMobileNavigation = (item: any) => {
    if (item.hasDropdown && getDropdownData(item.href).products.length > 0) {
      setActiveSubmenu(item.href)
    } else {
      setIsOpen(false)
      setActiveSubmenu(null)
    }
  }

  const handleBackToMainMenu = () => {
    setActiveSubmenu(null)
  }

  const closeMobileDrawer = () => {
    setIsOpen(false)
    setActiveSubmenu(null)
  }

  return (
    <>
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 z-[100] bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Langsung ke konten utama
      </a>

      {/* Information Text */}
      <div className="bg-white dark:bg-black text-black dark:text-white py-3 px-4 text-center transition-colors duration-300">
        <p className="text-sm font-medium">
          🌸 Momo Florist, siap melayani pesanan anda 🌸
        </p>
      </div>
      
      {/* Main Navigation */}
      <nav className={`z-40 backdrop-blur-xl border ${
        isScrolled 
          ? 'bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/20 fixed top-4 left-1/2 transform -translate-x-1/2 rounded-full shadow-2xl w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] lg:w-[calc(100%-3rem)] max-w-7xl' 
          : 'bg-[#CDB6BD]/95 dark:bg-[#2F3134]/95 border-[#CDB6BD]/50 dark:border-[#2F3134]/50 sticky top-0 rounded-t-[2rem] w-full'
      }`}>
        <div className={`mx-auto ${
          isScrolled ? 'px-3 md:px-4 lg:px-6 xl:px-8 max-w-none' : 'px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl'
        }`}>
          <div className={`flex justify-between items-center ${
            isScrolled ? 'h-10 sm:h-11 md:h-12 lg:h-14 xl:h-16' : 'h-11 sm:h-12 md:h-14 lg:h-16'
          }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1.5 md:space-x-2 lg:space-x-3 group">
            <motion.div 
              whileHover={{ 
                scale: 1.05
              }} 
              whileTap={{ scale: 0.95 }}
              className={`relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-out ${
                isScrolled ? 'w-9 h-9 md:w-10 md:h-10' : 'w-8 h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 xl:w-12 xl:h-12'
              }`}
              style={{ 
                borderRadius: '50%', 
                aspectRatio: '1/1',
                minWidth: isScrolled ? '2.25rem' : '2rem',
                minHeight: isScrolled ? '2.25rem' : '2rem'
              }}
            >
              <Image
                src="/logo MomoFlorist.png"
                alt="Momo Florist Logo"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-full"
                style={{ objectFit: 'cover' }}
                priority
              />
            </motion.div>
            <span className={`font-bold text-gray-900 dark:text-white group-hover:text-[#8B5A9F] dark:group-hover:text-[#BFA2DB] transition-all duration-300 ease-out ${
              isScrolled ? 'text-xs md:text-sm lg:text-base' : 'text-xs md:text-sm lg:text-base xl:text-lg'
            }`}>
              Momo Florist
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${
            isScrolled ? 'space-x-1 md:space-x-2 lg:space-x-3' : 'space-x-1 md:space-x-2 lg:space-x-3 xl:space-x-4'
          }`}>
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group/dropdown"
                onMouseEnter={() => {
                  // Clear any existing timeout
                  const timeoutId = (window as any)[`dropdown-timeout-${item.href}`];
                  if (timeoutId) clearTimeout(timeoutId);
                }}
                onMouseLeave={(e) => {
                  // Much more generous tolerance for scroll state
                  const rect = e.currentTarget.getBoundingClientRect();
                  const mouseY = e.clientY;
                  const mouseX = e.clientX;
                  
                  if (isScrolled) {
                    // In scroll state, check if mouse is in extended safe zone
                    const safeZoneHeight = rect.bottom + 48; // 48px bridge height
                    const safeZoneLeft = rect.left - 32; // 32px left tolerance  
                    const safeZoneRight = rect.right + 32; // 32px right tolerance
                    
                    const inSafeZone = mouseY < safeZoneHeight && 
                                     mouseX >= safeZoneLeft && 
                                     mouseX <= safeZoneRight;
                    
                    const delay = inSafeZone ? 400 : 150; // Much longer delay in safe zone
                    
                    (window as any)[`dropdown-timeout-${item.href}`] = setTimeout(() => {
                      // Trigger CSS :hover state to end
                    }, delay);
                  } else {
                    // Normal state logic
                    const dropdownThreshold = rect.bottom + 24;
                    const delay = mouseY < dropdownThreshold ? 200 : 100;
                    
                    (window as any)[`dropdown-timeout-${item.href}`] = setTimeout(() => {
                      // Trigger CSS :hover state to end
                    }, delay);
                  }
                }}
              >
                <Link
                  href={item.href}
                  className={`relative flex items-center justify-center gap-1 font-medium transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-[#8B5A9F] hover:to-[#A67FA3] dark:hover:from-[#8B5A9F] dark:hover:to-[#A67FA3] rounded-full hover:shadow-lg hover:scale-105 hover:text-white ${
                    isScrolled ? 'px-1.5 py-1 md:px-2 md:py-1.5 lg:px-2.5 lg:py-1.5 text-xs md:text-xs lg:text-sm' : 'px-1.5 py-1 md:px-2 md:py-1.5 lg:px-3 lg:py-2 xl:px-4 xl:py-2 text-xs md:text-xs lg:text-sm xl:text-sm'
                  } ${
                    pathname === item.href
                      ? "text-[#8B5A9F] dark:text-[#BFA2DB] bg-[#EDE6DE] dark:bg-[#2F3134]/30"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                  aria-haspopup={item.hasDropdown ? "true" : "false"}
                  aria-expanded={item.hasDropdown ? "false" : undefined}
                >
                  <span className="whitespace-nowrap text-center leading-tight min-w-0 truncate">
                    {item.label}
                  </span>
                </Link>

                {/* Full Screen Dropdown */}
                {item.hasDropdown && getDropdownData(item.href).products.length > 0 && (
                  <>
                    {/* Invisible bridge area to prevent dropdown from disappearing - much larger area for scroll state */}
                    <div className={`absolute z-[90] pointer-events-auto opacity-0 ${
                      isScrolled 
                        ? 'top-full left-[-2rem] right-[-2rem] h-12' 
                        : 'top-full left-0 right-0 h-6'
                    }`}></div>
                    
                    {/* Extended side bridges for better mouse tolerance in scroll state */}
                    <div className={`absolute z-[90] pointer-events-auto opacity-0 ${
                      isScrolled 
                        ? 'top-[-1rem] -left-8 bottom-0 w-8' 
                        : 'top-0 -left-4 bottom-0 w-4'
                    }`}></div>
                    <div className={`absolute z-[90] pointer-events-auto opacity-0 ${
                      isScrolled 
                        ? 'top-[-1rem] -right-8 bottom-0 w-8' 
                        : 'top-0 -right-4 bottom-0 w-4'
                    }`}></div>
                    
                    {/* Top bridge for scroll state to cover gap above navbar */}
                    {isScrolled && (
                      <div className="absolute top-[-1rem] left-[-2rem] right-[-2rem] h-4 z-[90] pointer-events-auto opacity-0"></div>
                    )}
                    
                    <div
                      className={`fixed bg-[#CDB6BD]/95 backdrop-blur-md dark:bg-[#2F3134]/90 dark:backdrop-blur-md rounded-[1.5rem] shadow-xl opacity-0 group-hover/dropdown:opacity-100 pointer-events-none group-hover/dropdown:pointer-events-auto transition-all duration-500 ease-out z-[100] border border-white/30 dark:border-gray-800/30 translate-y-4 group-hover/dropdown:translate-y-0 scale-95 group-hover/dropdown:scale-100 ${
                        isScrolled
                          ? 'left-1/2 transform -translate-x-1/2 max-w-7xl w-full px-4 sm:px-6 lg:px-8 top-[calc(1rem+3.5rem)]'
                          : 'left-0 right-0 w-screen max-w-none px-0 sm:px-0 lg:px-0 top-12 md:top-14 lg:top-16'
                      }`}
                      style={{
                        ...((!isScrolled ? { left: 0, right: 0 } : {})),
                        transitionDelay: isScrolled ? '100ms' : '0ms',
                        transitionProperty: 'opacity, transform, visibility'
                      }}
                      onMouseEnter={() => {
                        // Clear any existing timeout when mouse enters dropdown
                        const timeoutId = (window as any)[`dropdown-timeout-${item.href}`];
                        if (timeoutId) clearTimeout(timeoutId);
                      }}
                      onMouseLeave={() => {
                        // Add longer delay before hiding dropdown in scroll state
                        (window as any)[`dropdown-timeout-${item.href}`] = setTimeout(() => {
                          // This will trigger the CSS :hover state to end
                        }, isScrolled ? 300 : 150);
                      }}
                    >
                      <div className="p-6 max-w-7xl mx-auto">
                        {/* Products Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                          {/* First Card - Categories for Bunga Papan and Bunga Standing */}
                          {(item.href === '/bunga-papan' || item.href === '/bunga-papan-mini' || item.href === '/bunga-standing' || item.href === '/gallery') && getDropdownData(item.href).categories && (
                            <div
                              className="transform translate-y-8 group-hover/dropdown:translate-y-0 transition-all duration-700 ease-out opacity-0 group-hover/dropdown:opacity-100 flex flex-col justify-center"
                              style={{ 
                                transitionDelay: `200ms`,
                              }}
                            >
                              <div className="h-full flex flex-col justify-center px-2">
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white text-left mb-1">
                                  Kategori
                                </h4>
                                <div className="flex flex-col gap-1">
                                  {getDropdownData(item.href).categories?.map((category, catIndex) => (
                                    <Link
                                      key={catIndex}
                                      href={category.href}
                                      className="text-sm font-semibold text-gray-900 dark:text-white hover:text-[#8B5A9F] dark:hover:text-[#BFA2DB] transition-colors duration-200 text-left px-1 py-1 rounded w-fit max-w-full underline underline-offset-4 hover:decoration-2"
                                      style={{ wordBreak: 'break-word' }}
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
                              className="transform translate-y-8 group-hover/dropdown:translate-y-0 transition-all duration-700 ease-out opacity-0 group-hover/dropdown:opacity-100"
                              style={{ 
                                transitionDelay: `${200 + ((item.href === '/bunga-papan' || item.href === '/bunga-papan-mini' || item.href === '/bunga-standing' || item.href === '/gallery') ? (index + 1) : index) * 100}ms`,
                              }}
                            >
                              <Link
                                href={item.href}
                                className="block group/card bg-white/90 backdrop-blur-md dark:bg-neutral-800/90 dark:backdrop-blur-md rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border border-white/40 dark:border-gray-700/40 hover:border-[#BFA2DB]/60 dark:hover:border-[#BFA2DB]/60"
                                style={{ width: '100%', maxWidth: 220, minWidth: 0 }}
                              >
                                <div className="relative overflow-hidden w-full" style={{ height: '140px' }}>
                                  <Image
                                    src={getImageSrc(product.image)}
                                    alt={product.name}
                                    fill
                                    className="object-cover w-full h-full group-hover/card:scale-110 transition-transform duration-700 ease-out"
                                    style={{ objectFit: 'cover' }}
                                    unoptimized
                                  />
                                  {/* Button overlay at bottom */}
                                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[85%] flex justify-center">
                                    <button
                                      className="bg-[#EDE6DE]/80 border border-[#8B5A9F] text-[#8B5A9F] text-xs font-semibold rounded-full px-4 py-1 shadow-md hover:bg-[#BFA2DB]/30 hover:text-[#A67FA3] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#BFA2DB]/60"
                                      type="button"
                                      tabIndex={-1}
                                      style={{ pointerEvents: 'none', backdropFilter: 'blur(1px)' }}
                                    >
                                      Lihat detail produk
                                    </button>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`hover:bg-gradient-to-r hover:from-[#8B5A9F] hover:to-[#A67FA3] dark:hover:from-[#8B5A9F] dark:hover:to-[#A67FA3] transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg rounded-full hover:text-white ${
                isScrolled ? 'p-1 h-7 w-7 md:p-1.5 md:h-8 md:w-8 lg:p-2 lg:h-9 lg:w-9' : 'p-1 h-7 w-7 md:p-1.5 md:h-8 md:w-8 lg:p-2 lg:h-9 lg:w-9 xl:p-2 xl:h-10 xl:w-10'
              }`}
            >
              <Sun className={`rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 ${
                isScrolled ? 'h-3 w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4' : 'h-3 w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4 xl:h-5 xl:w-5'
              }`} />
              <Moon className={`absolute rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 ${
                isScrolled ? 'h-3 w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4' : 'h-3 w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4 xl:h-5 xl:w-5'
              }`} />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`hover:bg-gradient-to-r hover:from-[#8B5A9F] hover:to-[#A67FA3] dark:hover:from-[#8B5A9F] dark:hover:to-[#A67FA3] transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg rounded-full hover:text-white ${
                isScrolled ? 'p-1.5 h-7 w-7' : 'p-1.5 h-7 w-7 sm:p-2 sm:h-8 sm:w-8'
              }`}
            >
              <Sun className={`rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 ${
                isScrolled ? 'h-3 w-3' : 'h-3 w-3 sm:h-3.5 sm:w-3.5'
              }`} />
              <Moon className={`absolute rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 ${
                isScrolled ? 'h-3 w-3' : 'h-3 w-3 sm:h-3.5 sm:w-3.5'
              }`} />
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`rounded-full text-gray-900 dark:text-white hover:bg-gradient-to-r hover:from-[#8B5A9F] hover:to-[#A67FA3] dark:hover:from-[#8B5A9F] dark:hover:to-[#A67FA3] transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg flex items-center justify-center hover:text-white ${
                isScrolled ? 'p-1.5 h-7 w-7' : 'p-1.5 h-7 w-7 sm:p-2 sm:h-8 sm:w-8'
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
                  {isOpen ? <X className={`${isScrolled ? 'h-3.5 w-3.5' : 'h-3.5 w-3.5 sm:h-4 sm:w-4'}`} /> : <Menu className={`${isScrolled ? 'h-3.5 w-3.5' : 'h-3.5 w-3.5 sm:h-4 sm:w-4'}`} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
      </nav>

      {/* Mobile Navigation - Bottom Drawer - MOVED OUTSIDE OF NAV */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bottom-drawer-backdrop bg-black/60 dark:bg-black/80 backdrop-blur-md md:hidden"
              onClick={closeMobileDrawer}
            />
            
            {/* Bottom Drawer */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ 
                type: "spring", 
                damping: 30, 
                stiffness: 400,
                duration: 0.6,
                opacity: { duration: 0.3 }
              }}
              className="bottom-drawer bg-[#CDB6BD]/75 dark:bg-[#2F3134]/80 md:hidden rounded-t-3xl shadow-2xl max-h-[85vh] overflow-hidden border-t-2 border-white/40 dark:border-white/20 backdrop-blur-2xl"
            >
              {/* Header dengan Handle Bar dan Close Button */}
              <div className="flex items-center justify-between px-6 py-4 bg-transparent border-b border-white/20 dark:border-white/10">
                {/* Left spacer untuk center handle bar */}
                <div className="w-16"></div>
                
                {/* Handle Bar - Center */}
                <div className="w-12 h-1.5 bg-white/60 dark:bg-white/40 rounded-full"></div>
                
                {/* Close Button - Right */}
                <button
                  onClick={closeMobileDrawer}
                  className="text-white dark:text-white hover:text-white/80 dark:hover:text-white/80 transition-colors duration-200 font-medium text-sm"
                  aria-label="Close menu"
                >
                  Tutup
                </button>
              </div>
              
              {/* Drawer Content */}
              <div className="px-6 pb-8 pt-2 overflow-y-auto max-h-[calc(85vh-5rem)]">
                <AnimatePresence mode="wait">
                  {!activeSubmenu ? (
                    /* Main Menu */
                    <motion.div
                      key="main-menu"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="space-y-3"
                    >
                      <h2 className="text-lg font-bold text-white dark:text-white mb-5 text-center">
                        🌸 Menu Momo Florist
                      </h2>
                      
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.1,
                            ease: "easeOut" 
                          }}
                        >
                          {item.hasDropdown && getDropdownData(item.href).products.length > 0 ? (
                            <button
                              onClick={() => handleMobileNavigation(item)}
                              className="w-full flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/15 group active:scale-95"
                            >
                              <span className="text-white dark:text-white font-medium text-left">
                                {item.label}
                              </span>
                              <ChevronRight className="h-5 w-5 text-white/70 dark:text-white/70 group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={closeMobileDrawer}
                              className={`w-full flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 active:scale-95 ${
                                pathname === item.href
                                  ? "bg-white/25 dark:bg-white/25 text-white dark:text-white font-semibold"
                                  : "hover:bg-white/15 dark:hover:bg-white/15 text-white dark:text-white"
                              }`}
                            >
                              <span className="font-medium text-left">
                                {item.label}
                              </span>
                              {pathname === item.href && (
                                <div className="w-2 h-2 bg-white dark:bg-white rounded-full"></div>
                              )}
                            </Link>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    /* Submenu */
                    <motion.div
                      key="submenu"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {/* Header dengan tombol kembali */}
                      <div className="flex items-center mb-6">
                        <button
                          onClick={handleBackToMainMenu}
                          className="text-white dark:text-white hover:text-white/80 dark:hover:text-white/80 transition-all duration-200 p-2 rounded-full hover:bg-white/15 dark:hover:bg-white/15 mr-3"
                        >
                          <ArrowLeft className="h-6 w-6" />
                        </button>
                        <h2 className="text-lg font-bold text-white dark:text-white ml-1">
                          {getDropdownData(activeSubmenu).title}
                        </h2>
                      </div>
                      
                      {/* Products Grid */}
                      <div>
                        <h3 className="text-sm font-semibold text-white/80 dark:text-white/80 mb-3 uppercase tracking-wide">
                          Produk Pilihan
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {getDropdownData(activeSubmenu).products.map((product, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ 
                                duration: 0.3, 
                                delay: index * 0.1,
                                ease: "easeOut" 
                              }}
                            >
                              <Link
                                href={activeSubmenu || '/'}
                                onClick={closeMobileDrawer}
                                className="block bg-white/20 dark:bg-white/15 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-sm"
                              >
                                <div className="relative h-28 overflow-hidden">
                                  <Image
                                    src={getImageSrc(product.image)}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-110"
                                    unoptimized
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-3">
                                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-800 mb-1 line-clamp-2">
                                    {product.name}
                                  </h4>
                                  <p className="text-xs text-gray-600 dark:text-gray-600">
                                    {product.category}
                                  </p>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
