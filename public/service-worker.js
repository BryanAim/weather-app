var cacheName = 'weatherPWA-v1';
const assetsCacheName = 'v1-assets';
//Files that will be cached
var filesToCache = [
  './index.html',
  './app.js',
  './weather.js',
  './ui.js',
  './local-storage.js',
  './register-sw.js',
  './images/nature-bg.jpg',
  './images/icons/android-chrome-192x192.png',
  './images/icons/android-chrome-512x512.png',
  './images/icons/apple-touch-icon.png',
  './images/icons/favicon-16x16.png',
  './images/icons/favicon-32x32.png',
  './images/icons/favicon.ico',
  './style/bootstrap.min.css',
  './style/bootstrap.bundle.min.js',
  './style/style.css'
];

// On install
self.addEventListener('install', (event) => {
  console.log('[Service worker] Installed', event);

  event.waitUntil(
    caches.open(cacheName)
    .then( (cache) => {
      console.log('[ServiceWorker] Caching app shell and content');
      return cache.addAll(filesToCache);
    })
  )
}) 
// On activate
self.addEventListener('activate', (event) => {
  console.log('Inside the activate handler:', event);

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key)=> {
        if (key!== cacheName) {
          console.log('[ServiceWorker] Removing Old Cache...', key);
          return caches.delete(key);
        }
      }));
    })
  )
})
//On fetch
self.addEventListener('fetch', (event)=> {
  console.log('[Service Worker] Fetching resource: ', event.request.url);
  event.respondWith(
    // Open the cache
    caches.open(assetsCacheName)
      .then((cache) => {
        // Look for matching request in the cache
        return cache.match(event.request)
          .then((matched) => {
            // If a match is found return the cached version first
            if (matched) {
              return matched;
            }
            // Otherwise continue to the network
            return fetch(event.request)
              .then((response) => {
                // Cache the response
                cache.put(event.request, response.clone());
                // Return the original response to the page
                return response;
              });
          });
      })
 );
  
})