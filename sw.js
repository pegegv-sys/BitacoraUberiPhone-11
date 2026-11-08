// Bitácora Uber: guarda la app en el teléfono para que abra sin internet.
const CACHE='bitacora-uber-v16';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  if(new URL(e.request.url).origin!==self.location.origin) return;   // Firebase, mapas, calles: siempre directo a internet
  const guardar=r=>{ if(r&&r.ok){ const cp=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp)); } return r; };
  if(e.request.mode==='navigate'){
    // Páginas: primero internet (para tener siempre la versión nueva); sin señal, la copia guardada.
    e.respondWith(fetch(e.request).then(guardar).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(h=>h||caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>{
    const net=fetch(e.request).then(guardar).catch(()=>hit);
    return hit||net;
  }));
});
