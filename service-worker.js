/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6d534cbf206eb36272a1cff8558c3140"
  },
  {
    "url": "assets/css/0.styles.4568b041.css",
    "revision": "2ed4c8df4ff33bc36857f179247b429c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.10688bf1.js",
    "revision": "5de20c4499184a995e3251d6ab44a51f"
  },
  {
    "url": "assets/js/11.01052310.js",
    "revision": "7c387df7732ec372bfb5c9c4eaae238d"
  },
  {
    "url": "assets/js/12.e06c3983.js",
    "revision": "46b5d239fa78cac377066024e65dde79"
  },
  {
    "url": "assets/js/13.3b356c44.js",
    "revision": "7e8b789562daa6f22188e065fc5531f5"
  },
  {
    "url": "assets/js/14.93f756ee.js",
    "revision": "ddd69a2cdcf26d38e7ad808e207f58e1"
  },
  {
    "url": "assets/js/15.c8dfba58.js",
    "revision": "3ee6b6c906aadfca88ecbc13eb319f14"
  },
  {
    "url": "assets/js/16.1406b5bf.js",
    "revision": "ddb5e3b53024e0f0ec07b77dfbdd5a49"
  },
  {
    "url": "assets/js/17.c1fc16f7.js",
    "revision": "3bccd000a8b6c6f02b419388b6b73172"
  },
  {
    "url": "assets/js/18.13b5d9dd.js",
    "revision": "ac5ffab1f635bb7f509e5f7809362ef0"
  },
  {
    "url": "assets/js/19.133c19cb.js",
    "revision": "2c30819693b0cfbcafe221a2153e6192"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.8d59ab9f.js",
    "revision": "65240e7d04274bbbcb7bfe0585c1237c"
  },
  {
    "url": "assets/js/21.7fa3ee31.js",
    "revision": "885db4dc724e2a0f9e6ac715ec0dd674"
  },
  {
    "url": "assets/js/22.d513bc7e.js",
    "revision": "61c3263edc3bb83a6b952e600f5db7e5"
  },
  {
    "url": "assets/js/23.4b16f434.js",
    "revision": "c728940c0215d12394474772d287b440"
  },
  {
    "url": "assets/js/24.086823d3.js",
    "revision": "683c0633d58871924954898c37d4e86f"
  },
  {
    "url": "assets/js/25.f3b63587.js",
    "revision": "cabf102a6bb98ddfa0124abd432ce162"
  },
  {
    "url": "assets/js/26.faf88382.js",
    "revision": "d2a37f24b7b7e6880ebe7d62844f5360"
  },
  {
    "url": "assets/js/27.6327f0cb.js",
    "revision": "c9f60a511abd5192b2044a175f9797a4"
  },
  {
    "url": "assets/js/28.0be95cc1.js",
    "revision": "c4a92b6cf7e726a18b2a666b746f05ac"
  },
  {
    "url": "assets/js/29.80088a5a.js",
    "revision": "05f7fd4ed32b82acf1e45e5563d08f73"
  },
  {
    "url": "assets/js/3.d5d373a3.js",
    "revision": "015098ad26b05f91df9cf99db480d128"
  },
  {
    "url": "assets/js/30.a0c22aaf.js",
    "revision": "9392ccd9ba1db9624392c3ee7fe56527"
  },
  {
    "url": "assets/js/31.ed6f11c1.js",
    "revision": "9e5a7ff3ca9789f417a09254ec1af5e3"
  },
  {
    "url": "assets/js/4.90731ba6.js",
    "revision": "c0f55ceccd0df82b990fa87b0b601b2b"
  },
  {
    "url": "assets/js/5.03ee6508.js",
    "revision": "09c3cedb8e3dcb878e6e510e8c159bbd"
  },
  {
    "url": "assets/js/6.b04814d7.js",
    "revision": "763040d027accdcedb390ad8acc8e7c8"
  },
  {
    "url": "assets/js/7.04a53379.js",
    "revision": "467d2f1f090a7458127576463e544d65"
  },
  {
    "url": "assets/js/8.e5fb2339.js",
    "revision": "5d53de071528c8dffb1e1824d69c9efe"
  },
  {
    "url": "assets/js/9.3f3c3ad3.js",
    "revision": "d14c8056b9b4d6cb82092d3b1ab98154"
  },
  {
    "url": "assets/js/app.cba534ac.js",
    "revision": "6cc3aad88fb1cc733a4a445b8390d05c"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "bc03ba812fa3fd2e95659b16fa5a1931"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "f8b55a3ca0c39315b6043fe13ef3fa5f"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "a54de048c60a61dc18a707a838d7555f"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "96be0912571f3584b3a8e0ebcdb853a9"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "b53a61698e40235e0eb0eebfc38a7742"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "65ac9f50e75d2b1587c5968d9ed8564b"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "8ac3ad34db22e9898c6e3c22abc4c035"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "f5f12b890e9176a068fe25204834b922"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "5a60e036acff0c1f6f686700b3ba0591"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "361afd3d5ddf23596b11c749af7c4214"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "7bffccee82e15b856ff052661ec2c132"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "39ef4093fc7535453340c96dae8e36bd"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "82f2c029d417cf7f9561953401ebc752"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "3d712402c31316fbdb209697f8f1a6e7"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "41044f76cf4187b32ee5863ed08a9c39"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "33151d0e3f0b05e4da512f0d9cb5c817"
  },
  {
    "url": "index.html",
    "revision": "5107bd6ff7622d90a0873987c16804bc"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "52dde1ea0c6275224a9573374f2b2cfd"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "0bff272e54af787a51595705e386c288"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "51cc82967335a4a6607f4ab38c50dfd5"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "36fcb719483a28ec85effde84a6512d5"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "6f4a58d7a7466c2166ffa280e903cf87"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "314ea63b584f99ae95391d15851e50e6"
  },
  {
    "url": "resources/books.html",
    "revision": "780bbc9b6bd214b67989677385af384b"
  },
  {
    "url": "resources/community.html",
    "revision": "7aeb4c40fc6696e93c12d7911a4d7d3b"
  },
  {
    "url": "resources/conferences.html",
    "revision": "d9a07a49921ab360791476c064d517a6"
  },
  {
    "url": "resources/examples.html",
    "revision": "92c4a2b7122ba8fc6bac67135a3eb50b"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "347aebc6a947598d3e8293e7f46074e8"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "c6c8cd636a481158cff059661ffb96c4"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "ad1a4b6f92679891d5f5db843b45ac90"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "9c79376ba1829faab629f72195e2b008"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "70515c3e04db2759c9176d26feee7835"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "4867ec64aa515237ee6fbbe3db23c7cc"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "aaa0f3be4aa101858c778940b0292862"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
