const CACHE_NAME = 'moolah-v1';
const ASSETS_TO_CACHE = [
  './',
  './public/manifest.json',
  './src/assets/css/main.css',
  './src/index.html',
  './src/js/app.js',
  './src/js/pwa/register-sw.js',
  './src/js/pwa/push-manager.js',
  './src/js/services/media.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});

self.addEventListener('push', (e) => {
  const data = e.data ? e.data.text() : 'Nueva notificación de Moolah';
  e.waitUntil(
    self.registration.showNotification('Moolah', {
      body: data,
      icon: './public/icons/icon-192.png'
    })
  );
});