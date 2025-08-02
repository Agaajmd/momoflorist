"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const PRELOAD_ROUTES = [
  '/bunga-papan',
  '/bunga-standing', 
  '/hand-bouquet',
  '/gallery'
]

export default function RoutePreloader() {
  const router = useRouter()

  useEffect(() => {
    // Preload critical routes when user is idle
    const preloadRoutes = () => {
      PRELOAD_ROUTES.forEach(route => {
        router.prefetch(route)
      })
    }

    // Preload after a short delay to avoid blocking initial load
    const timer = setTimeout(preloadRoutes, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return null
}
