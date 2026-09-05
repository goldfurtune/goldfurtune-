
const CACHE_NAME = 'goldfortune-v2';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Network first for API (jsonbin), cache first for assets
  if(event.request.url.includes('api.jsonbin.io')){
    event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)));
    return;
  }
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request).then(fetchRes => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, fetchRes.clone());
          return fetchRes;
        });
      });
    }).catch(()=>caches.match('./index.html'))
  );
});
