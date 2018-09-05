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
    "revision": "706a3b7ac0ac761d33e78a1a6d438199"
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
    "url": "assets/js/10.91d6a2bb.js",
    "revision": "165331cae140d3bd2c4241df7a93e3e3"
  },
  {
    "url": "assets/js/11.8511181e.js",
    "revision": "a7cc8f8c63689f312bbf50899c83c819"
  },
  {
    "url": "assets/js/12.31df4f24.js",
    "revision": "0bf01a0417e9368e35d5cf783bcee8c7"
  },
  {
    "url": "assets/js/13.d8442be7.js",
    "revision": "a2126c7d0b7fdde151d3946e80cc2019"
  },
  {
    "url": "assets/js/14.bfad0bf7.js",
    "revision": "ddd69a2cdcf26d38e7ad808e207f58e1"
  },
  {
    "url": "assets/js/15.ae3d843d.js",
    "revision": "3ee6b6c906aadfca88ecbc13eb319f14"
  },
  {
    "url": "assets/js/16.83cfee0f.js",
    "revision": "9302d008c73960eb6620e337668247fb"
  },
  {
    "url": "assets/js/17.e35ff57b.js",
    "revision": "3bccd000a8b6c6f02b419388b6b73172"
  },
  {
    "url": "assets/js/18.daf0754a.js",
    "revision": "ac5ffab1f635bb7f509e5f7809362ef0"
  },
  {
    "url": "assets/js/19.62907eea.js",
    "revision": "2c30819693b0cfbcafe221a2153e6192"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.a7e997fe.js",
    "revision": "f3bc7e8e141a56e57161d081d93cc70c"
  },
  {
    "url": "assets/js/21.b23d6f3e.js",
    "revision": "885db4dc724e2a0f9e6ac715ec0dd674"
  },
  {
    "url": "assets/js/22.e894fad6.js",
    "revision": "61c3263edc3bb83a6b952e600f5db7e5"
  },
  {
    "url": "assets/js/23.f1c8cf11.js",
    "revision": "c728940c0215d12394474772d287b440"
  },
  {
    "url": "assets/js/24.784a8466.js",
    "revision": "c5c4660e9ef26084fb23b2edddc6f28d"
  },
  {
    "url": "assets/js/25.f4c895a3.js",
    "revision": "cabf102a6bb98ddfa0124abd432ce162"
  },
  {
    "url": "assets/js/26.92636580.js",
    "revision": "d2a37f24b7b7e6880ebe7d62844f5360"
  },
  {
    "url": "assets/js/27.fa05a285.js",
    "revision": "c9f60a511abd5192b2044a175f9797a4"
  },
  {
    "url": "assets/js/28.5b53d3ec.js",
    "revision": "c4a92b6cf7e726a18b2a666b746f05ac"
  },
  {
    "url": "assets/js/29.507f92f1.js",
    "revision": "05f7fd4ed32b82acf1e45e5563d08f73"
  },
  {
    "url": "assets/js/3.c95546f0.js",
    "revision": "015098ad26b05f91df9cf99db480d128"
  },
  {
    "url": "assets/js/30.19bf5fb2.js",
    "revision": "e651f56e645e4241e7eb51aec66bf79f"
  },
  {
    "url": "assets/js/31.96a97c36.js",
    "revision": "9e5a7ff3ca9789f417a09254ec1af5e3"
  },
  {
    "url": "assets/js/4.2cafdfbf.js",
    "revision": "c0f55ceccd0df82b990fa87b0b601b2b"
  },
  {
    "url": "assets/js/5.a98dc3cc.js",
    "revision": "7ee49828d8202a13aba3596cea0be3bb"
  },
  {
    "url": "assets/js/6.eb9c11da.js",
    "revision": "1f38c7252f887bbd3b6bfa2d146487cf"
  },
  {
    "url": "assets/js/7.8ce7466f.js",
    "revision": "467d2f1f090a7458127576463e544d65"
  },
  {
    "url": "assets/js/8.935582cd.js",
    "revision": "5d53de071528c8dffb1e1824d69c9efe"
  },
  {
    "url": "assets/js/9.a693e809.js",
    "revision": "d13868dc02f6c6747933fd0145505c88"
  },
  {
    "url": "assets/js/app.7d9c8513.js",
    "revision": "fd098cca842aab6ae7e6ca61a1d29d84"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "c963b9fd1d2f3375dc7f2e3f4bf40bf8"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "47cfa97f610f955a81caefeab42d16fb"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "d195fdaa4184d6b51cea4c8fcd6137c0"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "e7faced01611fba44dfed56552b46847"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "21c979e7285aeaf8b6a9569c0923d2bc"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "a1c145c0f6fb08493d571dc419039516"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "abe57928cd13a30d01318f70e927156d"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "d20a72c7fde0232b43c222c694602814"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "66dda78e5e3d1e6b5e43cd10c2d64a71"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "e2b650a076b69acbbff82a607c1eb236"
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
    "revision": "34c5b7f75f2a8ce57340621e0f2742bb"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "60d26afeb889b0a75756687e23ddea61"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "0e9f24210ad5b7b9d13e341cc4af2cf6"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "3d659ce4bc91ee80a9420ffba12bdde3"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "43b40faa4a50b989c42d870e5b0d78c0"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "997dd6560fc842cf29d372cb1e566f5e"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "2b81708544476e708f0da806191eac2a"
  },
  {
    "url": "resources/books.html",
    "revision": "6013d9eeb5a628b3f66fab11fe05384b"
  },
  {
    "url": "resources/community.html",
    "revision": "e81abb8b82a000edf1d8435febc47be6"
  },
  {
    "url": "resources/conferences.html",
    "revision": "db97c615db4bcd1284828a0266b108f1"
  },
  {
    "url": "resources/examples.html",
    "revision": "636f9f6c5015e076472b63b471edcb02"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "8042a084d87061a1382f0bb5894a4890"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "aa83abf325c21082b8fbf84b75dc0760"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "d3863aea2acfb5c12206669794a67a51"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "c2e16ca13d3b580bcb9dfd4916496f11"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "404d4a4e93de0b6f222e36b058b17ad3"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "e17fdd490c9dcd322995169b99f6e16b"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "9510211237403678c702573eb46093b5"
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
