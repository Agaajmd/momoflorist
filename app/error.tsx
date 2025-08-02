"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export const dynamic = 'force-dynamic'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-md w-full mx-auto p-8 text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-400 dark:text-gray-600 mb-4">
            Oops!
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Terjadi Kesalahan
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Maaf, terjadi kesalahan yang tidak terduga. Tim kami telah diberitahu dan akan segera memperbaikinya.
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={reset}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium py-3 rounded-lg transition-all duration-200"
          >
            Coba Lagi
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.location.href = '/'}
            className="w-full border-2 border-pink-300 text-pink-600 hover:bg-pink-50 dark:border-pink-600 dark:text-pink-400 dark:hover:bg-pink-900/20 font-medium py-3 rounded-lg transition-all duration-200"
          >
            Kembali ke Beranda
          </Button>
        </div>

        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>Jika masalah berlanjut, silakan hubungi kami di:</p>
          <a 
            href="https://wa.me/6281213142558" 
            className="text-pink-600 dark:text-pink-400 hover:underline font-medium"
          >
            WhatsApp: 081213142558
          </a>
        </div>
      </div>
    </div>
  )
}