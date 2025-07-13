"use client"

import type React from "react"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  message?: string
  className?: string
  children?: React.ReactNode
}

export default function WhatsAppButton({
  message = "Halo, saya tertarik dengan layanan Popo Florist",
  className = "",
  children,
}: WhatsAppButtonProps) {
  const whatsappNumber = "081213142558"
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/62${whatsappNumber.substring(1)}?text=${encodedMessage}`

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button asChild className={`bg-green-600 hover:bg-green-700 text-white ${className}`}>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <MessageCircle className="h-4 w-4" />
          <span>{children || "Pesan via WhatsApp"}</span>
        </a>
      </Button>
    </motion.div>
  )
}
