// Basic service worker for PWA offline support

const CACHE_NAME = 'portfolio-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw.js',
  // JS, CSS (update to latest build names)
  '/assets/index-DYfjZ98H.js',
  '/assets/index-BeYk-pBF.css',
  // Icons removed
  // Images (add all images you want offline)
  '/assets/business.jpg',
  '/assets/CV.pdf',
  '/assets/hero-img.webp',
  '/assets/Kai.png',
  '/assets/Kai2.png',
  '/assets/Kai3.jpg',
  '/assets/pc.png',
  '/assets/phone.png',
  
  // Add more if needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
});


self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      // Nếu là request navigation (SPA), trả về index.html offline
      if (event.request.mode === 'navigate') {
        return caches.match('/index.html');
      }
      return fetch(event.request);
    })
  );
});
