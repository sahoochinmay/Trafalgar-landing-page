let cashData = "traflgarV2";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cashData).then((cache) => {
      cache.addAll([
        // "/static/js/bundle.js",
        // "/static/js/main.chunk.js",
        // "/static/js/vendors~main.chunk.js",
        // "/favicon.ico",
        // "/index.html",
        // "/",
        // "user",
        // "about",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((result) => {
      if (result) {
        return result;
      }
    })
  );
});

// Activate the SW
this.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(cashData);
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

