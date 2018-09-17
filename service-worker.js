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
    "revision": "0fdc4cf8f0fc52e2c6c4737bc476f091"
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
    "url": "assets/js/10.2c8be411.js",
    "revision": "0acb0c6d602698ed1f4391e4c20eebac"
  },
  {
    "url": "assets/js/11.ec92f5d8.js",
    "revision": "a7cc8f8c63689f312bbf50899c83c819"
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
    "url": "assets/js/16.d524a648.js",
    "revision": "226d148a60bbb2b6435dfa8dfe1413fd"
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
    "url": "assets/js/5.d1933a80.js",
    "revision": "49a52dc65bbb9818f08996b7c8af4f2f"
  },
  {
    "url": "assets/js/6.adbf66e2.js",
    "revision": "b6905a6773e0b1bbbb19356f866b3ca5"
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
    "url": "assets/js/9.edf0543a.js",
    "revision": "d13868dc02f6c6747933fd0145505c88"
  },
  {
    "url": "assets/js/app.89ad3e5c.js",
    "revision": "0437c9bcc6e5cfe9f53e627165e3fdbb"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "dcbea5240b2024d5144ede8ec8957564"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "6a596139b5f4b7940a1173f1020babaf"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "39f0654746324de058dfdc8781f52056"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "2bf05df8ceec65a3447fe7faae729210"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "315bf0edcfaf0b3e635cb1b9a4721eb6"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "8160992ddeecbdde89e3a0ec258a873c"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "0bc5e1fe255bd8c908fb6b717af182e7"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "36561c255992f0fabcadc15bbd839eb2"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "d7b6460aa9c487111b53f65db1a9fcb1"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "46be1c941600ceb843f8e07dc712985d"
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
    "revision": "9c1865c85d75591a64386839b24e2c71"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "d562754690fb10533aa1e855bdbd1e3a"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "872064770b63a8601c4b7b57e186388b"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "41c36602355edfbc66fc4efc6db06e35"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "bece5838d4cef38abd7a5579a670fe0d"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "67744b48903642e7ce129f9dc22b3ec9"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "fb09773a0ed45871d056e7d1f40f79ee"
  },
  {
    "url": "resources/books.html",
    "revision": "08f73782efff748f1df647074b3152dd"
  },
  {
    "url": "resources/community.html",
    "revision": "385d7c31d8bc29255f9f0b9647b9773f"
  },
  {
    "url": "resources/conferences.html",
    "revision": "b93c1d898f658a517346c81003974029"
  },
  {
    "url": "resources/examples.html",
    "revision": "e718ad90b18076e107ab20727f121bcc"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "6c73c33c2469abf5989182122d2e986a"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "8005f28f9e58633005149e20bfd0daee"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "22f75d01d7087afe7c371a4e33c68ede"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "a48e725c06b6a90e3994c7d860182db2"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "7f05f581accb028dfb4875d56b394449"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "6d6bc822b29ae2dffe0a07957cae77c4"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "71aef612adb320cd9bccdd9fb2e5be3d"
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
