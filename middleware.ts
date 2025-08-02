import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Clone the response
  const response = NextResponse.next()

  // Add security headers - Remove X-Frame-Options to allow Google Maps embed
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')
  
  // Add CSP header for security - Allow Google Maps frames
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googleapis.com *.google.com; " +
    "style-src 'self' 'unsafe-inline' fonts.googleapis.com *.googleapis.com; " +
    "img-src 'self' data: blob: images.unsplash.com *.googleapis.com *.gstatic.com *.google.com; " +
    "font-src 'self' fonts.gstatic.com *.googleapis.com; " +
    "connect-src 'self' api.whatsapp.com *.googleapis.com *.google.com; " +
    "frame-src 'self' *.google.com *.googleapis.com *.gstatic.com; " +
    "object-src 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self';"
  )

  // Add performance and caching headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  
  if (request.nextUrl.pathname.includes('/logo') || 
      request.nextUrl.pathname.includes('.jpg') ||
      request.nextUrl.pathname.includes('.png') ||
      request.nextUrl.pathname.includes('.webp') ||
      request.nextUrl.pathname.includes('.svg') ||
      request.nextUrl.pathname.includes('.ico')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    response.headers.set('Vary', 'Accept-Encoding')
  }

  // Add cache headers for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  }

  // Add HSTS for security (only in production)
  if (process.env.NODE_ENV === 'production') {
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  }

  // Preload critical resources
  if (request.nextUrl.pathname === '/') {
    response.headers.set('Link', 
      '</logo%20MomoFlorist.png>; rel=preload; as=image, ' +
      '<https://fonts.googleapis.com>; rel=preconnect; crossorigin'
    )
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
