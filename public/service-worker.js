var cacheName = 'weatherPWA-v1';
const assetsCacheName = 'v1-assets';
var filesToCache = [
  '/public/index.html',
  '/public/app.js',
  '/public/ui.js',
  '/public/local-storage.js',
  '/public/images/nature-bg.jpg',
  '/public/images/icons',
  '/public/style/bootstrap.min.css',
  '/public/style/bootstrap.bundle.min.js',
  '/public/style/style.css'
];


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