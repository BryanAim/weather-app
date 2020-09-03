var cacheName = 'weatherPWA-v1';
const assetsCacheName = 'v1-assets';
var filesToCache = [
  '/',
  '/index.html',
  '/app.js',
  '/weather.js',
  '/ui.js',
  '/local-storage.js',
  '/images/icons',
  '/style/bootstrap.min.css',
  '/style/style.css'
];


self.addEventListener('install', (event) => {
  console.log('Service worker Registered', event);

  event.waitUntil(
    caches.open(cacheName)
    .then( (cache) => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  )
}) 

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

self.addEventListener('fetch', (event)=> {
  console.log('Inside the fetch handler:', event.request.url);
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