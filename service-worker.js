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
    "revision": "1c05ea79bdc1664dcf6db7e401b01dfe"
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
    "url": "assets/js/13.f80ae3e9.js",
    "revision": "6bfc05fb04e390445532398c87c50b94"
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
    "url": "assets/js/20.8944ff95.js",
    "revision": "6d0b3c02bd3acbc6479461226c1e8c24"
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
    "url": "assets/js/24.def5c0b3.js",
    "revision": "249741a8ad6bad4aa235e6b0cdc37fd8"
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
    "url": "assets/js/app.c864eb01.js",
    "revision": "4264cf5cf51134165b633f4334217894"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "b76c9d7f40c6676acfaaece19ab0816b"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "0300e78ec5ef192047e3891a20ff2993"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "2bdfff26a86da671dd525bc17949232b"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "71da49f79e990aadb031e0b9bb61b181"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "60a895ba3829f0e11e80c38c64a0552e"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "0669432d0c93763d149d61dc322a3acf"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "0b737bc9864b2339aef6e0be65f71b5f"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "6e723dfe354d5c6794a3a15b90bffb37"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "5a6c41aef1d95d59b930b4ebcd6276e4"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "4987840b16fbdc774d5ec2db15fd53ba"
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
    "revision": "cbf9629f9aca6fba8d50765efbbbde8e"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "18d92f8804d6ddad93c8ed12971c92ea"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "72bfe715aa56af8f5019f050477c1874"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "29bce333c92f1f0fe6a9a394453f8029"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "6c535cc8016b58a58f53983dec688f5b"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "d6b8bd0c973c7046f2d45581a35e67dc"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "07c54d9700bb106640032c6b854ebd6a"
  },
  {
    "url": "resources/books.html",
    "revision": "97cbeea1c26f0045fdd96b03fe5f48e6"
  },
  {
    "url": "resources/community.html",
    "revision": "6210ea1484534652e52de5cba04faec0"
  },
  {
    "url": "resources/conferences.html",
    "revision": "dc6080a0050a04b6d6fb97f0662c0a34"
  },
  {
    "url": "resources/examples.html",
    "revision": "c478efcb500a0c6ba6ad1ca718f1ac7a"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "5244858d5eb0bd5283b0459a257dac80"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "231eab61efd2c758cf11bd25b8e7580f"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "c214ec0ca30065a091fa541ae6c17770"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "8fb7d72b3d8416183f64d82a29b74815"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "7fe5f12dd3928f163c9324fecea9d264"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "7a8079e104a5dc2c044646d77c9e5cd2"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "8895be995d0351daf6fec8d185f196fb"
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
