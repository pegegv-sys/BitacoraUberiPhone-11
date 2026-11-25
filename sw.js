// Bitácora Uber: guarda la app en el teléfono para que abra sin internet.
const CACHE='bitacora-uber-v59';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
// Archivos del mapa sin internet: se guardan si existen (si falta alguno, la app sigue funcionando)
const OPCIONALES=['./vista3d.js','./maplibre-gl.js','./maplibre-gl.css','./mapa-offline.js',
  ...['regular','medium','italic'].flatMap(f=>['0-255','256-511','8192-8447'].map(r=>`./letra-${f}-${r}.pbf`))];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(async c=>{
  const fresco=u=>new Request(u,{cache:'reload'});                       // no usar la copia vieja del navegador
  await c.addAll(FILES.map(fresco));
  await Promise.all(OPCIONALES.map(u=>c.add(fresco(u)).catch(()=>{})));
})); self.skipWaiting(); });
// Al activar, borra versiones viejas de la app, pero NUNCA el mapa guardado (bitacora-mapa-…)
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE && !k.startsWith('bitacora-mapa')).map(k=>caches.delete(k))))); self.clients.claim(); });
const TESELAS='bitacora-mapa-teselas', MAX_TESELAS=4000; let recortando=false;
async function recortar(c){ if(recortando) return; recortando=true;
  try{ const ks=await c.keys(); if(ks.length>MAX_TESELAS) for(const k of ks.slice(0, ks.length-MAX_TESELAS)) await c.delete(k); }catch(e){} recortando=false; }
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const u=new URL(e.request.url);
  // Cuadritos del mapa de OpenStreetMap: se guardan en el teléfono y se reusan (no se vuelven a bajar)
  if(/(^|\.)tile\.openstreetmap\.org$/.test(u.hostname)){
    e.respondWith(caches.open(TESELAS).then(async c=>{
      const hit=await c.match(e.request);
      const fecha=hit && hit.type!=='opaque' && hit.headers.get('date'); const viejo=!!fecha && (Date.now()-new Date(fecha).getTime()) > 30*864e5;
      if(hit && !viejo) return hit;
      try{ const r=await fetch(e.request); if(r && (r.ok || r.type==='opaque')){ await c.put(e.request,r.clone()); recortar(c); } return r; }
      catch(err){ return hit || Response.error(); }
    }));
    return;
  }
  if(u.origin!==self.location.origin) return;                 // Firebase, calles en línea: directo a internet
  if(/\.pmtiles$/.test(u.pathname)) return;                   // el mapa grande no pasa por aquí
  const guardar=r=>{ if(r&&r.ok){ const cp=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp)); } return r; };
  if(e.request.mode==='navigate'){
    e.respondWith((async()=>{
      const red=fetch(e.request).then(guardar);
      const hit=await caches.match(e.request,{ignoreSearch:true}) || await caches.match('./index.html');
      if(!hit) return red;
      const espera=new Promise(ok=>setTimeout(()=>ok(null),6000));
      try{ const r=await Promise.race([red, espera]); return (r && r.ok)? r : hit; }catch(err){ return hit; }
    })());
    return;
  }
  // código de la app (vista3d.js, mapa-offline.js…): primero internet (sin caché vieja); sin señal, lo guardado
  if(/\.(js|css|html)$/.test(u.pathname)){
    // con señal débil no se espera más de 5 s: si hay copia guardada se usa y la nueva se guarda cuando llegue
    e.respondWith((async()=>{
      const red=fetch(new Request(e.request,{cache:'no-cache'})).then(guardar);
      const hit=await caches.match(e.request,{ignoreSearch:true});
      if(!hit) return red;
      const espera=new Promise(ok=>setTimeout(()=>ok(null),5000));
      try{ const r=await Promise.race([red, espera]); return (r && r.ok)? r : hit; }catch(err){ return hit; }
    })());
    return;
  }
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>{
    const net=fetch(e.request).then(guardar).catch(()=>hit);
    return hit||net;
  }));
});
