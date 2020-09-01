var cacheName = 'weatherPWA-v1';
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
    caches.match(event.request).then((response)=> {
      return response || fetch(event.request);
    })
  );
  
})