/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2017/01/10/C指针/index.html","467b93a4be5a0610313dc5c2bba4d2e0"],["2017/02/07/Android右对齐实践及优化/index.html","799a022fe95d1da6ac2f3792cf2f838a"],["2017/02/07/C动态内存分配/index.html","8a442fbea62f3ca392455d23bae38494"],["2017/02/07/C文件操作/index.html","49cad1e062b3750aad12dbbe0ecbb230"],["2017/02/07/C结构体/index.html","217e8ce5fcfcaf6f5fdd4196afe56395"],["2018/05/09/初识redux/index.html","55b27ff4cb313102805a2b99d3fe70dd"],["2018/06/05/redux中间件/index.html","ebbadbcef933c785a3b7d1c94720ac9f"],["2018/06/10/react-redux的使用/index.html","46eeb05a4f8362ec0a4aafe97c12badf"],["2018/06/13/redux自定义中间件/index.html","70d62ed2dcdc503f0cf1fc69dde511c0"],["archives/2017/01/index.html","4514af6f6eacf0f05214996abf623ad6"],["archives/2017/02/index.html","da258ad825056c755d2ff5f92a36a8d9"],["archives/2017/index.html","2f75bc69731e3551869ac1eeadbebfc1"],["archives/2018/05/index.html","899e145a1aa766769f3c3e659430b6ca"],["archives/2018/06/index.html","c5d42df0df820c873303f281b6555941"],["archives/2018/index.html","af24f567b45c44d74691f68345626b55"],["archives/index.html","581f935a983aa426618088e1c5d54452"],["categories/Android/index.html","b4a52dcb9520c5bad66ca99d6b6d1a0b"],["categories/C/index.html","760a906c97fc3b5b94b864d04067ce29"],["categories/React/index.html","b3e5aa9f68a4ad996dea3f2e21897a49"],["categories/index.html","957e1b3b72f71c92102d2ed520b4c23b"],["css/base/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["css/base/normalize.css","849bd17d56ee28b33f218d3f51ce373c"],["css/base/reset.css","43b09c33c051a39cd12401cbc548f894"],["css/components/archive.css","919aa0407753d356593a79d5b4839a32"],["css/components/article.css","83b78d1a532f9581d1c500c723cde3c3"],["css/components/categories.css","8ad809048c610c0403389d04db75092f"],["css/components/footer.css","287e82250729de8f3212076a841d43d9"],["css/components/header.css","0a1c5a08bdbfd89ef1525c9a892bc2da"],["css/components/icon.css","278490e940c6ca7331b1ff376c4624bf"],["css/components/layout.css","ba66046eecabea1b0bfab5608bb052da"],["css/components/pagination.css","9544dbaf6ab1d7cfee8acaebcff8e724"],["css/components/responsive.css","84983828b65403ff5d6a228344fd18ce"],["css/components/search.css","a3b88d0de0ebabdfefab34ae0f8d9d7e"],["css/components/sidebar.css","85f8550a7d5a370d213782f19dbbbfe2"],["css/components/syntax.css","df0b792eb8cb3d04c750cbdfa357f061"],["css/components/tags.css","af36db8e3eab94617cc00471a343c931"],["css/components/toc.css","747edd0c249bd01bc89c196d55746fad"],["css/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["css/fonts/glyphicons-halflings-regular.svg","f721466883998665b87923b92dea655b"],["css/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["css/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["css/style.css","9cafc3b93b1cc09438df3c81db038f3f"],["images/bg.jpg","541c305d59b76a13d3e99c132b72a657"],["images/blog-bg.jpg","22a86f5df1acf88694fb31ea8a4d5442"],["images/icon-heart.svg","8c26ba607a7768cffd34afe72980fde0"],["images/lofter.png","8f648a10c7eca3a5e77537cc5e1e74f7"],["images/top-active.png","2d960eaedd8982cb29af2f0d6843519e"],["images/top.png","3f75f7e26595cd59ede0166f88264279"],["images/zhihu0.png","b27fbb2639c4bbaf59bfe0612f691a8f"],["index.html","817975ca5b7b86bead13137c4579b597"],["js/index.js","3ca4511f9c0702aec39b9bfca39a5c3a"],["js/search.js","69d32a01547e94351cf8bbe3de1e7551"],["js/web-pinyin.js","4f2b569d95a00edc9f24e4d7866e4638"],["tags/C/index.html","bd4b054c38fc8196bb1ca899e3a0818e"],["tags/C指针/index.html","db3c21a6c3e15b699fb81e931a854592"],["tags/React-Redux/index.html","133ed6e12bfdf85603418ec770ad6762"],["tags/Redux/index.html","e2ff0269cb651138d0af1cfc96900275"],["tags/UI/index.html","9c9c879939163fa7a23fac497c93e278"],["tags/index.html","0200815372bff96beae93b6dac9a3b74"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







