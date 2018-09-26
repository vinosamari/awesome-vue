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
    "revision": "371b1b6beff579bcc4c90be065cea625"
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
    "url": "assets/js/app.056864c2.js",
    "revision": "6a6d72b39cc4539c1e2a33f6ae336e51"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "7d53489f13b5d9b41df3a96424a9d662"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "f02e5d086d49238ea4153820f2bb6490"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "a7741e18479cc3c12136770609618834"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "43e350e9ee6f6f8105e14d3dee8556c4"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "416881e4d1f4604e4a93d34c13ed1ff6"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "2a32417bcf4d0e338ebb6d6d1e8ae106"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "cf77f83d4cb7234ba88ba5a6724ef459"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "b6733459e4a284beb8bfe7f73bc876a9"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "d80191e157b696dd3120c67b9b461eb4"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "30f1a6b74a2cf2dfc8101b25121cbd75"
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
    "revision": "318dfab11fcf47b065f9a1dd1758bbd9"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "18232ab54af96f280a195e8e7bc25f66"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "8d2d48b29a7a5f9c65c2d70bfcfe0571"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "43f2a963af2cb61278e1a99462eeb2de"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "a72b83606c1d4f1b851b5eee5eef7190"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "6066a50fe6f01d4e9dd5d5d8c0ce1101"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "6ff5702f8c77613a1a78c4259603ff60"
  },
  {
    "url": "resources/books.html",
    "revision": "0d7ba536b91a52d091827842c60913c6"
  },
  {
    "url": "resources/community.html",
    "revision": "8123bac41780ef4249c519b8a75d4622"
  },
  {
    "url": "resources/conferences.html",
    "revision": "0d0a817616177434d1c3c812d8ab29e7"
  },
  {
    "url": "resources/examples.html",
    "revision": "02a076c40226b8fb2dedc3c9f0ae025e"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "7d7c26def375a7f1ffeaa3b4f1fb05a2"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "2e1273976599a96b994d17d000deba93"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "4acfafa0f40b38feebb076124ce2b684"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "efa28f973d2191a88ce4ea76b2474cc1"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "58c535c7ed1be00a7707956cdac34f75"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "c6d9a02d613597dbd1856ce9c8a69137"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "49262daedf003bd4a46f4d4a02369778"
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
