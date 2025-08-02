"use client"

import { Suspense, lazy } from "react"

// Lazy load heavy components
const SocialSidebar = lazy(() => import("@/components/social-sidebar"))

interface LazyComponentWrapperProps {
  component: 'social-sidebar'
  fallback?: React.ReactNode
  [key: string]: any
}

const componentMap = {
  'social-sidebar': SocialSidebar,
}

export default function LazyComponentWrapper({ 
  component, 
  fallback, 
  ...props 
}: LazyComponentWrapperProps) {
  const Component = componentMap[component]
  
  const defaultFallback = (
    <div className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-lg h-40 w-full flex items-center justify-center">
      <div className="text-gray-500 text-sm">Memuat...</div>
    </div>
  )

  return (
    <Suspense fallback={fallback || defaultFallback}>
      <Component {...props} />
    </Suspense>
  )
}
