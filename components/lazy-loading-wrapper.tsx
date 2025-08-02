"use client"

import { Suspense, ReactNode } from "react"

interface LazyLoadingWrapperProps {
  children: ReactNode
  fallback?: ReactNode
}

const defaultFallback = (
  <div className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-lg h-40 w-full flex items-center justify-center">
    <div className="text-gray-500 text-sm">Memuat...</div>
  </div>
)

export default function LazyLoadingWrapper({ 
  children, 
  fallback = defaultFallback 
}: LazyLoadingWrapperProps) {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}
