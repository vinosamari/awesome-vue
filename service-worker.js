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
    "revision": "f2d07da9a709ad2d4ab80c90d6a45617"
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
    "url": "assets/js/10.17a5eace.js",
    "revision": "d92427a076f67387202a0c69c7a77f07"
  },
  {
    "url": "assets/js/11.8511181e.js",
    "revision": "a7cc8f8c63689f312bbf50899c83c819"
  },
  {
    "url": "assets/js/12.7cb32661.js",
    "revision": "21323081ca4b70735d597a9161ee894c"
  },
  {
    "url": "assets/js/13.293b6a66.js",
    "revision": "cff7e16a3a2dc63c61292c872e625538"
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
    "url": "assets/js/16.b08d5379.js",
    "revision": "b82ade9ca57452e4861a085e456b869c"
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
    "url": "assets/js/24.042ede93.js",
    "revision": "e4d77fb4e660927a32d3b17fcfaaf256"
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
    "url": "assets/js/5.46b30efc.js",
    "revision": "49a52dc65bbb9818f08996b7c8af4f2f"
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
    "url": "assets/js/app.c7681ce5.js",
    "revision": "297966518baec4ea7606f16eaa578a85"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "dcd16fffb85ee3f62637b368dd06d920"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "b85bd35ba6ff39a900ee19aba65311e2"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "423c886a1a15ff48d8bd4c12f9effab5"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "9b2d724b9703197942c846ade8f801a5"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "856b485c79274188c55df79dd081c86b"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "6fee4acc88350d3c4489dd0162e9109a"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "09c671018e5713158d8a1ea54bc3dd4e"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "c9c3f1aadb5c8614631257d65d168ee1"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "7d59dc1305bf75fc07b8c254f156be8f"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "4e2180229a795f5491e8dea6f51c2b53"
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
    "revision": "a960d310055325a9be9cd27a03075a7e"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "563fbc79a4a008be8e334920fee389e4"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "2e16dfd48a207d16dd3bbfe59a839c07"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "9c2e3002279ab1e8356e47df600b16a9"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "9d5c13a32c4c1467daa86a98aeacb729"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "1769dd68e6692a27ae8e489af07e5d01"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "96633e83fdd0917b678a72dde053115c"
  },
  {
    "url": "resources/books.html",
    "revision": "412d54af61a868ca0569ed67ac9c98e8"
  },
  {
    "url": "resources/community.html",
    "revision": "5ca4927089e552536e0a3173c59b027c"
  },
  {
    "url": "resources/conferences.html",
    "revision": "5fc4dc99581a8e279b5ca9b80bfd7bf4"
  },
  {
    "url": "resources/examples.html",
    "revision": "5c230d3fcc0736119e9ca64d35caa7e3"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "03eb6256297f53f825dbb7447c6cf45f"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "52fab063a79e7e6d5f15480773b415f3"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "a991d170116c7017041ef9cc851a584b"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "f4839b8e534b70440873eb5863e30650"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "a8aac645560c81ea1238e3d3442b6a07"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "88f56a9b579d3d5ea8a2f03cbd38371d"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "faae992a603b40e67c3db34c43c1e377"
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
