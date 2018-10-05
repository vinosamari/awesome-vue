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
    "revision": "69b70f8cf5c627f62f9ab7cdbff36dae"
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
    "url": "assets/js/12.79347cf3.js",
    "revision": "9b2ab636fe7ff4a505ef585ac6e2e7af"
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
    "url": "assets/js/6.35411b90.js",
    "revision": "2c889437a5b941d9a352da46b137ef64"
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
    "url": "assets/js/app.463213f9.js",
    "revision": "919901091e57626c92c8b69bcbbb3b43"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "e697611e486ed45adeca4d94fc526dbb"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "d99122715e225065492c4fa1f95f0fce"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "2d4c519820f80dd8d833ae68ac311510"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "70d3ec744d1f250f3481d1a433a77ceb"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "190a508b18cbb88deb7bc96746f2d1ca"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "a1f1ce234fa26cdf6f579fb388d9386f"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "b1dec6bc83702080a55c502cba06cd5e"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "64b256d27977ccf44a10a3a35aa8feca"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "062e3b809f589145f535cf465987e004"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "11cfbc0ce4af9ec99e68677ee73b3e34"
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
    "revision": "0e4dede07940d08848800d154de201b2"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "7a91d32b846741dcdbbf6258dea24c10"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "258697fb5aaab96a7bc852eee55e9c18"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "263971584d5d78f91c71cde5e1d7c490"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "c880bfc7bc6ea9e4dc89b1df479df4b0"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "91bf2305dcad7b36520b7bacf94b9e2f"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "df501ee32b24865d28d3497fb82c8653"
  },
  {
    "url": "resources/books.html",
    "revision": "271c2e8c3a4f71e8498ad041ff064163"
  },
  {
    "url": "resources/community.html",
    "revision": "36936fa529a9d08e221dc9b00f67ded0"
  },
  {
    "url": "resources/conferences.html",
    "revision": "5085d1074bab191752149a348db1ace4"
  },
  {
    "url": "resources/examples.html",
    "revision": "b4e6fa036e4ec0dd9725736db2b93ac0"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "032ba8245b233bb31f22c0e325ee0824"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "e392efbb94b412051447176211e52ae5"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "59bf24cce1870aa4698c6ded9fa14427"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "78aa02aee3695f9ba84504dcd24eb063"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "eb49e4a2c64c6f8f1488b76e9704a4ed"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "d76c1aa1f9f1cfb3f65579796ebae1de"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "d1f841b6a2ae19d60023b0ead827512b"
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
