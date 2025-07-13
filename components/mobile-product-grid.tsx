"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import ProductDetailModal from "./product-detail-modal"

interface Product {
  src: string
  alt: string
  title: string
  description?: string
  price?: string
}

interface MobileProductGridProps {
  products: Product[]
  columns?: number
}

export default function MobileProductGrid({ products, columns = 3 }: MobileProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProductClick = (product: Product, index: number) => {
    setSelectedProduct(product)
    setSelectedIndex(index)
    setIsModalOpen(true)
  }

  const handleNavigate = (index: number) => {
    setSelectedIndex(index)
    setSelectedProduct(products[index])
  }

  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  }

  return (
    <>
      <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-3 md:gap-6`}>
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group cursor-pointer"
            onClick={() => handleProductClick(product, index)}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src={product.src || "/placeholder.svg"}
                alt={product.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 md:p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xs md:text-sm font-semibold truncate">{product.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProductDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
        products={products}
        currentIndex={selectedIndex}
        onNavigate={handleNavigate}
      />
    </>
  )
}
