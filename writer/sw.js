// Service worker de MarkDawn: la app funciona sin conexión y se actualiza sola cuando hay internet
const CACHE = 'md|markdawn-writer|79048abe00';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('md|markdawn-writer|') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  // La página: primero internet (para tener siempre la última versión); sin conexión, la guardada
  if (r.mode === 'navigate' || /\/(index\.html)?$/.test(new URL(r.url).pathname)) {
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', cp)); return res; }).catch(() => caches.match('./index.html')));
    return;
  }
  // El resto (iconos, librerías de libs/): lo guardado; si no está, se descarga y se guarda
  e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); } return res; })));
});
