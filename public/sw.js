// const CACHE_NAME = 'dynamic-cache';
// const STATIC_ASSETS = [
//   '/_next/static/css/app/layout.css',
//   // '/_next/static/chunks/app/layout.js', 
//   // '/_next/static/chunks/app/page.js',
//     '/',
//     '/about',
//     '/products',
//     '/blog',
//     '/contact',
//     '/order',
//     '/return-policy',
//     '/privacy-policy',
//     '/shipping-policy',
//     '/payment-policy',
//     '/products?c=yen-chung-tuoi',
//     '/products?c=set-qua-yen-chung-tuoi',
//     '/products?c=chao-sup-yen',
//     '/products?c=yen-sao-tinh-che',
//     '/products?c=yen-sao-tho',
//     '/products?c=topping',
//     '/products/chao-hai-san-yen-tuoi',
//     '/products/set-qua-6-hu',
//     '/products/set-qua-10-hu',
//     '/products/tao-do',
//     '/products/saffron',
//     '/products/nhan-nhuc',
//     '/products/ki-tu',
//     '/products/hat-sen',
//     '/products/hat-chia',
//     '/products/yen-vun-chung-tuoi',
//     '/products/yen-soi-chung-tuoi',
//     '/products/chan-yen-tho',
//     '/products/to-yen-tho-loai-1',
//     '/products/to-yen-tho-loai-2',
//     '/products/chan-yen-rut-long',
//     '/products/vien-yen-baby',
//     '/products/to-yen-soi-tinh-cao-cap',
//     '/products/to-yen-tinh-che-loai-1',
//     '/products/to-yen-tinh-che-loai-2',
//     '/products/to-yen-tinh-che-vun',
//     '/blog/yen-sao-la-gi-hanh-trinh-ky-dieu-tu-thien-nhien-den-mon-qua-cho-suc-khoe',
//     '/blog/yen-trang-yen-hong-yen-huyet---khac-nhau-the-nao-nen-chon-loai-nao-phu-hop',
//     '/blog/yen-sao-co-gi-ma-tot-cho-suc-khoe-dien-vay-kham-pha-thanh-phan-dinh-duong-vang-trong-to-yen',
//     '/blog/ai-nen-dung-yen-sao-nhung-nhom-nguoi-dung-phu-hop-va-cach-su-dung-hieu-qua',
//     '/blog/thoi-diem-nao-an-yen-la-tot-nhat-huong-dan-cach-dung-yen-dje-co-the-hap-thu-toi-uu',
//     '/blog/cach-chung-yen-dung-cach-meo-nho-de-giu-tron-duong-chat',
//     '/blog/yen-sao-chung-voi-gi-ngon-nhat-goi-y-5-cong-thuc-de-lam-tai-nha',
//     '/blog/to-yen-khai-thac-nhu-the-nao-hanh-trinh-tu-vach-da-den-tay-nguoi-dung',
//     '/blog/lam-sao-phan-biet-yen-sao-that-va-gia-nhung-meo-don-gian-ma-ai-cung-nen-biet',
//     '/blog/yen-tho-de-duoc-bao-lau-huong-dan-cach-bao-quan-yen-tho-dung-cach-tai-nha'
//   ]

//   self.addEventListener('install', (event) => {
//     console.log('Install');
//     event.waitUntil(
//       caches.open(CACHE_NAME).then((cache) => {
//         console.log('Caching static assets');
//         return cache.addAll(STATIC_ASSETS).catch((err) => {
//           console.error('Cache addAll failed:', err);
//         });
//       })
//     );
//     self.skipWaiting();
//   });

// self.addEventListener('activate', (event) => {
//   console.log('Activate');
//   event.waitUntil(
//     Promise.all([
//       caches.keys().then((cacheNames) => {
//         return Promise.all(
//           cacheNames
//             .filter((name) => name !== CACHE_NAME)
//             .map((name) => {
//               console.log('Deleting old cache:', name);
//               return caches.delete(name);
//             })
//         );
//       }),
//       clients.claim()
//     ]).catch((err) => {
//       console.error('Activation failed:', err);
//     })
//   );
// });

// // self.addEventListener('fetch', (event) => {
// //   if (event.request.method !== 'GET') return;
// //   if (!event.request.url.startsWith(self.location.origin)) {
// //     event.respondWith(fetch(event.request));
// //     return;
// //   }

// //   event.respondWith(
// //     caches.match(event.request).then((cachedResponse) => {
// //       if (cachedResponse) {
// //         event.waitUntil(
// //           fetch(event.request)
// //             .then((networkResponse) => {
// //               if (networkResponse.ok) {
// //                 return caches.open(CACHE_NAME).then((cache) => {
// //                   cache.put(event.request, networkResponse.clone());
// //                 });
// //               }
// //             })
// //             .catch((err) => {
// //               console.error('Background fetch failed:', err);
// //             })
// //         );
// //         return cachedResponse;
// //       }

// //       return fetch(event.request)
// //         .then((networkResponse) => {
// //           if (networkResponse.ok && networkResponse.type === 'basic') {
// //             const responseClone = networkResponse.clone();
// //             caches.open(CACHE_NAME).then((cache) => {
// //               cache.put(event.request, responseClone);
// //             });
// //           }
// //           return networkResponse;
// //         })
// //         .catch((err) => {
// //           console.error('Fetch failed:', err);
// //           return caches.match('/offline.html').then((offlineResponse) => {
// //             return offlineResponse || new Response('Offline', {
// //               status: 503,
// //               statusText: 'Service Unavailable'
// //             });
// //           });
// //         });
// //     })
// //   );
// // });

// self.addEventListener('fetch', (event) => {
//   if (event.request.method !== 'GET') return;

//   // Only handle same-origin requests
//   if (!event.request.url.startsWith(self.location.origin)) {
//     event.respondWith(fetch(event.request));
//     return;
//   }

//   // Distinguish navigation (HTML) requests
//   const isNavigationRequest = event.request.mode === 'navigate';

//   event.respondWith(
//   caches.match(event.request).then((cachedResponse) => {
//     if (cachedResponse) {
//       return cachedResponse;
//     }

//     return fetch(event.request).then((networkResponse) => {
//       const clone = networkResponse.clone();

//       // 🛡️ Only cache non-HTML responses
//       if (
//         clone.ok &&
//         !clone.headers.get('Content-Type')?.includes('text/html')
//       ) {
//         caches.open(CACHE_NAME).then((cache) => {
//           cache.put(event.request, clone);
//         });
//       }

//       return networkResponse;
//     }).catch(() => {
//       return caches.match('/offline.html');
//     });


// //   event.respondWith(
// //     caches.match(event.request).then((cachedResponse) => {
// //       if (cachedResponse) {
// //         // Background update cache
// //         event.waitUntil(
// //           fetch(event.request)
// //             .then((networkResponse) => {
// //               if (networkResponse.ok) {
// //                 return caches.open(CACHE_NAME).then((cache) => {
// //                   cache.put(event.request, networkResponse.clone());
// //                 });
// //               }
// //             })
// //             .catch((err) => {
// //               console.error('Background fetch failed:', err);
// //             })
// //         );
// //         return cachedResponse;
// //       }

// //       // No cached response, fetch from network
// //       return fetch(event.request).then(networkResponse => {
// //   if (networkResponse.ok && networkResponse.type === 'basic') {
// //     const responseClone = networkResponse.clone(); // Clone immediately here!

// //     caches.open(CACHE_NAME).then(cache => {
// //       cache.put(event.request, responseClone); // Put cloned response in cache
// //     });
// //   }
// //   return networkResponse; // Return the original untouched response
// // });

//         // })
//         // .catch((err) => {
//         //   console.error('Fetch failed:', err);

//         //   if (isNavigationRequest) {
//         //     // Only serve offline fallback for page navigations
//         //     return caches.match('/offline.html').then((offlineResponse) => {
//         //       return offlineResponse || new Response('Offline', {
//         //         status: 503,
//         //         statusText: 'Service Unavailable',
//         //       });
//         //     });
//         //   }

//         //   // For CSS/JS/images, just fail without fallback (or customize as needed)
//         //   return new Response(null, {
//         //     status: 504,
//         //     statusText: 'Gateway Timeout',
//         //   });
//         // });
//     })
//   );
// });
