const CACHE = 'vm-tracker-v1';
const FILES = [
  '/vm-tracker/',
  '/vm-tracker/index.html',
  '/vm-tracker/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
