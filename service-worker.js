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
    "revision": "b36b154e3d6058718650696ac47380a4"
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
    "url": "assets/js/12.75180be0.js",
    "revision": "f590fe738927e039100e8b88c80f6bec"
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
    "url": "assets/js/16.a16dae80.js",
    "revision": "354c11ed88d6d8d1ea85846cbdd921af"
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
    "url": "assets/js/20.dca0b1a5.js",
    "revision": "8760d76bc4df551bf3f1d6f734cd7d06"
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
    "url": "assets/js/24.c4684edd.js",
    "revision": "47705c237d71197795d33933713ef46f"
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
    "url": "assets/js/29.1fdcad90.js",
    "revision": "ef71857d924521cc80dfaac8c4eb542c"
  },
  {
    "url": "assets/js/3.d5d373a3.js",
    "revision": "015098ad26b05f91df9cf99db480d128"
  },
  {
    "url": "assets/js/30.6124341e.js",
    "revision": "75e6e4e86f226b117fadd10685958d64"
  },
  {
    "url": "assets/js/31.ed6f11c1.js",
    "revision": "9e5a7ff3ca9789f417a09254ec1af5e3"
  },
  {
    "url": "assets/js/4.1f039718.js",
    "revision": "a2d808084382be4b996d834186845884"
  },
  {
    "url": "assets/js/5.03ee6508.js",
    "revision": "09c3cedb8e3dcb878e6e510e8c159bbd"
  },
  {
    "url": "assets/js/6.b11a1b35.js",
    "revision": "f840f89bbf1d60c9e10054e5baf53348"
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
    "url": "assets/js/app.27bf7ada.js",
    "revision": "9150e6b1d951d86a249a5a836ccd399b"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "50406608a2f94b0908ee37259bf48c0b"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "550c077baf2b93367bfacde68c5421cb"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "4909b22e17865ff27dc97c55cdcb2820"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "6db2aebb838d487ac8a0337e1aee8f98"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "96d5dea134e9f2a131f1b59946ba4524"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "9b64778e84c22a35e7eeab5faa53f5ed"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "86278131f90d94042f1fa6490eeb284c"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "c3e8f79457d77852b217f30ae6827ffd"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "4fc1ffbb3952880765c8bde4bbf1c914"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "e8ff208e055bd27d4618cd705b877227"
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
    "revision": "fa2c7c9699de5d5c9aab1b0a15c14097"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "0b20c1756f3835a454eeda60bf19465a"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "cc0ff0a32cdb05b4146da5322c2f315b"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "23ac5c3c10071624305a7b1eea6966fa"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "21cdb24dc1ba56461109605ff0213153"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "7cfb3f8b79677d385c383325cefb4489"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "07b1b1d5780c01e055c0523765e92b31"
  },
  {
    "url": "resources/books.html",
    "revision": "55649a893d408c23c6ea36fe56809a96"
  },
  {
    "url": "resources/community.html",
    "revision": "36a865157573e8098b77917da1eb3546"
  },
  {
    "url": "resources/conferences.html",
    "revision": "84cd7a4a02e21f75a3d444626ea79df8"
  },
  {
    "url": "resources/examples.html",
    "revision": "fcc1381a90bcef5084008c4420273044"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "2e38a5bc37a2a83bc408c75100f8b8cd"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "2282440d3e532541f91d80b7a8b6c1f5"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "26956178d63721ccd847271a512c3cb3"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "ce15ae33f848bbc0cf1ceef9208046ec"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "6384ac3aa249b1808f0f77a671a1185e"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "b5fed94d818a5a7ed1eaaaf7feb5f628"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "71f3f56e84a3fa8aab2c8962a45999bf"
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
