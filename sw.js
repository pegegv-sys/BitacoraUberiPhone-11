// Bitácora Uber: guarda la app en el teléfono para que abra sin internet.
const CACHE='bitacora-uber-v22';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
// Archivos del mapa sin internet: se guardan si existen (si falta alguno, la app sigue funcionando)
const OPCIONALES=['./maplibre-gl.js','./maplibre-gl.css','./mapa-offline.js',
  ...['regular','medium','italic'].flatMap(f=>['0-255','256-511','8192-8447'].map(r=>`./letra-${f}-${r}.pbf`))];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(async c=>{
  await c.addAll(FILES);
  await Promise.all(OPCIONALES.map(u=>c.add(u).catch(()=>{})));
})); self.skipWaiting(); });
// Al activar, borra versiones viejas de la app, pero NUNCA el mapa guardado (bitacora-mapa-…)
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE && !k.startsWith('bitacora-mapa')).map(k=>caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const u=new URL(e.request.url);
  if(u.origin!==self.location.origin) return;                 // Firebase, calles en línea: directo a internet
  if(/\.pmtiles$/.test(u.pathname)) return;                   // el mapa grande no pasa por aquí
  const guardar=r=>{ if(r&&r.ok){ const cp=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp)); } return r; };
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(guardar).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(h=>h||caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>{
    const net=fetch(e.request).then(guardar).catch(()=>hit);
    return hit||net;
  }));
});
