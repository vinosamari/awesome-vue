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
    "revision": "741a36f6688b2a5413a0a69b9a16811c"
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
    "url": "assets/js/10.d1aeb50c.js",
    "revision": "ab5b425d600569e18d6a61c90ed321c7"
  },
  {
    "url": "assets/js/11.c46eb273.js",
    "revision": "72f12125f56aa7213f06328b50f4e403"
  },
  {
    "url": "assets/js/12.3ca93c65.js",
    "revision": "836abfafe6e92efafa5b5e8fd6cdabfa"
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
    "url": "assets/js/app.74913e3e.js",
    "revision": "db4904b7bf5a037fa64f9e67e0c426fe"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "4197c79ec4c007919789d6bfc81e06f4"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "f9a2c546a53827fa7d21876898aebe6f"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "e5d1b3b87c5586f2bd127078104e8736"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "542e494b72a1d5b51abdd3b14f88b6a9"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "015f0c3ec9ae99086bc85849adaa61f0"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "da84e11df99da1f0f87c5db37a1cf974"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "009db65c20fc6e72be3e350abba0b8a0"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "d7b45a02b1915b60f0b0ab2c1e3809c1"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "a34ba302fd09ac521a9d32531ac185b0"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "029296b7a97df263ed0c1605696ba93f"
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
    "revision": "b4fe40bcb87972eb59bf6139b6a89653"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "bb49722c9e32c57779e5cd4e9107cb2b"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "55f660b6974ccdb1a5c4983665a8fd98"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "29652d67905128740e3b47f49ead3a82"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "e7d448e56880bc239791ea9e6355ec50"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "046f629c63641cb22aae50261f061d76"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "6f2f57ee3a79651bdf5d20fc61ecada4"
  },
  {
    "url": "resources/books.html",
    "revision": "2677ca1835f4125c85e3f2d5e64694b8"
  },
  {
    "url": "resources/community.html",
    "revision": "ad3aa6b1880ac2607ffdafe2cd1de767"
  },
  {
    "url": "resources/conferences.html",
    "revision": "5f23f7b4f70b95030f92626d09f31b96"
  },
  {
    "url": "resources/examples.html",
    "revision": "3494f4e824acd4886e3e1028d2813889"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "340141d78378f4fef4cad3574382c0e3"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "e969687d44fd9da9f03adcecd6684607"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "b420f79e1abe326456fe44beb388332b"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "4080c870e24fec88240e6472acab9ca1"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "3520e340dae4d1f15c19b9b00ffe36c8"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "a69f53065a6238d8a07c72a23476693e"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "a11ef09462c5f78a715edf4ab3446d98"
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
