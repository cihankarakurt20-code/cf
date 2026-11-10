// CF — çevrimdışı çalışma için service worker
// Uygulamayı güncellediğinde aşağıdaki sürüm numarasını artır.
const VERSION = 'cf-v5';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png',
  './fonts/inter-tight-latin-400-normal.woff2', './fonts/inter-tight-latin-ext-400-normal.woff2', './fonts/inter-tight-latin-500-normal.woff2', './fonts/inter-tight-latin-ext-500-normal.woff2', './fonts/inter-tight-latin-600-normal.woff2', './fonts/inter-tight-latin-ext-600-normal.woff2', './fonts/inter-tight-latin-700-normal.woff2', './fonts/inter-tight-latin-ext-700-normal.woff2'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // Sayfa: önce ağ (güncel sürüm), olmazsa önbellek
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  // Diğer dosyalar (ikonlar, yazı tipi): önce önbellek, yoksa ağdan alıp sakla
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r && (r.ok || r.type === 'opaque')) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return r;
    }).catch(() => hit))
  );
});
