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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1db658e937abb7669c3381ed95fb255d"
  },
  {
    "url": "assets/css/0.styles.4568b041.css",
    "revision": "e0cf3df08a028ac5a6343d0dcc58705f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.da9e8c02.js",
    "revision": "54c2953d4d67b3af37b22786ed5e498a"
  },
  {
    "url": "assets/js/11.baa5ea78.js",
    "revision": "a7cc8f8c63689f312bbf50899c83c819"
  },
  {
    "url": "assets/js/12.7133e9f4.js",
    "revision": "bb5155350c558468e222f82ae76702bc"
  },
  {
    "url": "assets/js/13.f4e10434.js",
    "revision": "9c32e2e53775114545dc68daf5f3678a"
  },
  {
    "url": "assets/js/14.1ed68365.js",
    "revision": "ddd69a2cdcf26d38e7ad808e207f58e1"
  },
  {
    "url": "assets/js/15.bcc09a9d.js",
    "revision": "1d6fb61ea91b64339f11201a9b9c99d0"
  },
  {
    "url": "assets/js/16.f2fbe11b.js",
    "revision": "4bbdb0f6edc3a7d8d6fea5d3a3292f08"
  },
  {
    "url": "assets/js/17.4f24890e.js",
    "revision": "4e623b6da2d3dc0b9f7c3591ea1029a4"
  },
  {
    "url": "assets/js/18.0e732ad0.js",
    "revision": "ac5ffab1f635bb7f509e5f7809362ef0"
  },
  {
    "url": "assets/js/19.c1456460.js",
    "revision": "2c30819693b0cfbcafe221a2153e6192"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.bd1ac104.js",
    "revision": "18958491ee3c35b1be578a4835f32c16"
  },
  {
    "url": "assets/js/21.f1e01005.js",
    "revision": "fdaf38eaa775d6d7ba5dfe03bc33a7c3"
  },
  {
    "url": "assets/js/22.98bb2cc1.js",
    "revision": "61c3263edc3bb83a6b952e600f5db7e5"
  },
  {
    "url": "assets/js/23.fdcf4638.js",
    "revision": "c728940c0215d12394474772d287b440"
  },
  {
    "url": "assets/js/24.60df7ba0.js",
    "revision": "d9a4763fdb1cc2b35ec733cca180bd7c"
  },
  {
    "url": "assets/js/25.dafcde78.js",
    "revision": "cabf102a6bb98ddfa0124abd432ce162"
  },
  {
    "url": "assets/js/26.f66d5df5.js",
    "revision": "d2a37f24b7b7e6880ebe7d62844f5360"
  },
  {
    "url": "assets/js/27.e702f008.js",
    "revision": "c9f60a511abd5192b2044a175f9797a4"
  },
  {
    "url": "assets/js/28.3a7e5307.js",
    "revision": "c4a92b6cf7e726a18b2a666b746f05ac"
  },
  {
    "url": "assets/js/29.aed8e699.js",
    "revision": "05f7fd4ed32b82acf1e45e5563d08f73"
  },
  {
    "url": "assets/js/3.c95546f0.js",
    "revision": "015098ad26b05f91df9cf99db480d128"
  },
  {
    "url": "assets/js/30.9f022b96.js",
    "revision": "e651f56e645e4241e7eb51aec66bf79f"
  },
  {
    "url": "assets/js/31.d9b9035e.js",
    "revision": "1e791ddf79cc02c8a2fbbf511cb7629d"
  },
  {
    "url": "assets/js/4.238536ff.js",
    "revision": "457acf7f9a2fb7643da65264495c9ad0"
  },
  {
    "url": "assets/js/5.52784b3d.js",
    "revision": "7403d9dea32cbf8e7bbba4ea97ee757f"
  },
  {
    "url": "assets/js/6.788abd9a.js",
    "revision": "537a3733bd715e6c2c48a32c747195ee"
  },
  {
    "url": "assets/js/7.6b996cb4.js",
    "revision": "467d2f1f090a7458127576463e544d65"
  },
  {
    "url": "assets/js/8.145918b9.js",
    "revision": "5d53de071528c8dffb1e1824d69c9efe"
  },
  {
    "url": "assets/js/9.69413eb7.js",
    "revision": "d13868dc02f6c6747933fd0145505c88"
  },
  {
    "url": "assets/js/app.8c3afcd4.js",
    "revision": "9b663ed0f925493802c1bbfb52898b64"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "d5a131400e0547f0447b8cb192492b68"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "145fd86f6aed84727ada35bdd6aca77a"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "ebc1e4522ed13b12a4e15a4353982afc"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "00cdcc27fbfbc2a0e5f9b3273ce5e314"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "d2fb57b3f04d7d2344bfac0f7b5c434c"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "815250a8d52857c94437d2a39227e5be"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "967b04a0dd8e03e3491837982f873a2b"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "ed3f0555ea52f0a4f9a8a577141a3f54"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "b3837706db0d5c91fe62a4ab14a34dab"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "f30de3fb32e3604f89ec8f2aa387f6e5"
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
    "revision": "efbef71950fc4f44b4c8feccdf3fd6f7"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "7cd63197f48d444da1a9f3cd30d41bdb"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "2a5c8ad69fc4562d25d254bf60a3ce14"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "6741e991015eaa6bc972c9e3aa85dc43"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "5cbf43ddf032158320afcf2da561c08c"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "293f8bb9c784fabda8f939eca7b0e5b7"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "53fd47c395ce671649a8c0bd8bf32cc8"
  },
  {
    "url": "resources/books.html",
    "revision": "84b222a71d6f416ae22fd2392e9c96f8"
  },
  {
    "url": "resources/community.html",
    "revision": "2d358586a75ccc5f8bc782e81093ec33"
  },
  {
    "url": "resources/conferences.html",
    "revision": "695262527cad3820b5da1b5889646000"
  },
  {
    "url": "resources/examples.html",
    "revision": "fde75a2cd83836bd0b02d71d6a67a599"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "77939458ce1681ae35922945b718e1a7"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "146f1412924f2a913a69d93fcef57113"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "17e340550a955b377eb7d885a448a334"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "ccef576fd3a08f93c1f8219d74b78177"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "38d4e35bfc2b6bc5df51cf4cce5a7094"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "6784152bcbe231cdb1c271a3feba7945"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "e1383af16c1ca01eb1a48cbe78b918fa"
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
