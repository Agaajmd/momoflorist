"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface ImageGalleryProps {
  images: Array<{
    src: string
    alt: string
    title?: string
  }>
  columns?: number
}

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-6`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="group cursor-pointer"
        >
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {image.title && (
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold text-center px-4">{image.title}</h3>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
