const CACHE_NAME = 'momo-florist-v3';
const CACHE_STATIC_NAME = 'momo-florist-static-v3';
const CACHE_DYNAMIC_NAME = 'momo-florist-dynamic-v3';

const urlsToCache = [
  '/',
  '/bunga-papan',
  '/bunga-papan-mini', 
  '/bunga-standing',
  '/hand-bouquet',
  '/gallery',
  '/logo MomoFlorist.png',
  '/manifest.json',
  '/offline.html'
];

const STATIC_FILES = [
  '/logo MomoFlorist.png',
  '/manifest.json',
  '/browserconfig.xml'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_STATIC_NAME).then((cache) => {
        return cache.addAll(STATIC_FILES);
      }),
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(urlsToCache);
      })
    ])
  );
  self.skipWaiting();
});

// Fetch event with advanced caching strategy
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip chrome extension requests
  if (event.request.url.startsWith('chrome-extension://')) return;
  
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached version if available
      if (cachedResponse) {
        // Update cache in background for HTML pages
        if (event.request.headers.get('accept').includes('text/html')) {
          fetch(event.request).then((response) => {
            if (response.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, response.clone());
              });
            }
          }).catch(() => {});
        }
        return cachedResponse;
      }

      // Network first for HTML pages
      if (event.request.headers.get('accept').includes('text/html')) {
        return fetch(event.request).then((response) => {
          if (response.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, response.clone());
            });
          }
          return response;
        }).catch(() => {
          return caches.match('/offline.html');
        });
      }

      // Cache first for images and static assets
      if (event.request.url.match(/\.(jpg|jpeg|png|gif|webp|svg|css|js)$/)) {
        return fetch(event.request).then((response) => {
          if (response.status === 200) {
            caches.open(CACHE_DYNAMIC_NAME).then((cache) => {
              cache.put(event.request, response.clone());
            });
          }
          return response;
        }).catch(() => {
          return new Response('Image unavailable', { 
            status: 404, 
            statusText: 'Not Found' 
          });
        });
      }

      // Default: try network, fallback to cache
      return fetch(event.request).catch(() => {
        return caches.match(event.request);
      });
    })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (![CACHE_NAME, CACHE_STATIC_NAME, CACHE_DYNAMIC_NAME].includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Background sync for offline functionality
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Implement background sync logic here
  return Promise.resolve();
}
