'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { RefreshCw, Home, Phone } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to monitoring service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#CDB6BD] dark:bg-[#2F3134] px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
            <span className="text-4xl">🌸</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-[#EDE6DE] mb-4">
            Oops! Terjadi Kesalahan
          </h1>
          <p className="text-lg text-gray-700 dark:text-[#C6BBAE] mb-8">
            Maaf, terjadi kesalahan tak terduga. Tim kami akan segera memperbaikinya.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={reset}
            className="w-full bg-[#BFA2DB] hover:bg-[#A67FA3] text-white"
            size="lg"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Coba Lagi
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="w-full border-[#BFA2DB] text-[#BFA2DB] hover:bg-[#BFA2DB] hover:text-white"
            size="lg"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
          </Button>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Butuh bantuan segera?
            </p>
            <Button
              asChild
              variant="ghost"
              className="text-[#BFA2DB] hover:text-[#A67FA3]"
            >
              <a href="tel:081213142558">
                <Phone className="w-4 h-4 mr-2" />
                Hubungi: 081213142558
              </a>
            </Button>
          </div>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 dark:text-gray-400">
              Error Details (Development)
            </summary>
            <pre className="mt-2 p-4 bg-gray-100 dark:bg-gray-800 rounded text-xs overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}