"use strict";var precacheConfig=[["/index.html","9f3ac2b32959cdd95c4aa6939050f1b4"],["/static/css/main.489a7f49.css","065c873d7b725758f60b9122bac66b4a"],["/static/js/0.8d3b08c1.chunk.js","f48e9f520f481a8f431deeda3900fbdb"],["/static/js/main.c1f54ee8.js","f133324d50b9b3c9021fbea53ed39175"],["/static/media/AVC-logo.eea26fa9.png","eea26fa9c514d406a43b10bbdc115e01"],["/static/media/FRI-logo.007074c4.jpg","007074c4d43960811c475eabb9b17a91"],["/static/media/Graduation_Pic.ffa48515.jpg","ffa485157de57098dc5b1bca063d206b"],["/static/media/Headshot_Zoom.558e2b42.jpg","558e2b4279f7f81112d9d1a0b84e7a42"],["/static/media/Northrop-logo.b9bf4b0b.png","b9bf4b0b6c54f4be0d662de423663af9"],["/static/media/Pepperdine-logo.c27f8741.jpg","c27f8741f4309036c9ad152b422cc25b"],["/static/media/Reddit-logo.7d450252.png","7d450252b1606a002903f39773c9f1ad"],["/static/media/Resume_2022.0b06d06a.pdf","0b06d06af990f35000a9820fc97236e5"],["/static/media/Resume_2024_March.763ea931.pdf","763ea9315d017331940967e707f1e914"],["/static/media/SOAR-logo.8ddebf5c.png","8ddebf5c301a2b2bf5f4169bc955dcb3"],["/static/media/TakeOver-logo.b427cfbc.png","b427cfbcdc84450c6e01509aa2226260"],["/static/media/USC-logo2.1d39d5cc.png","1d39d5cc46e64f640d2b004dc11ec2fb"],["/static/media/headshot-2024.04b071b4.jpg","04b071b4200c49b85bcbf3f2aa9765cc"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});