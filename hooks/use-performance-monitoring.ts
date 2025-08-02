"use client"

import { useEffect } from 'react'

export function usePerformanceMonitoring() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor LCP (Largest Contentful Paint)
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          console.log('Performance metric:', entry.name, entry.duration || entry.startTime)
        })
      })

      // Observe LCP, FID, CLS
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
      } catch (e) {
        // Fallback for browsers that don't support these metrics
        console.log('Performance monitoring not fully supported')
      }

      // Monitor page load time
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        console.log('Page load time:', loadTime, 'ms')
        
        // You can send this data to analytics service
        if (loadTime > 3000) {
          console.warn('Slow page load detected:', loadTime, 'ms')
        }
      })

      return () => {
        observer.disconnect()
      }
    }
  }, [])
}

export default usePerformanceMonitoring
