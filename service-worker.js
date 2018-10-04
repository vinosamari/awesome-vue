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
    "revision": "e096f5be18eeef2f42aed0b91ca7f6cd"
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
    "url": "assets/js/16.120eca33.js",
    "revision": "49c5a4b499fa1b90128aaa77e983a3cb"
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
    "url": "assets/js/app.42959699.js",
    "revision": "14981f3c2baf7a29b32087cf36d23a0c"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "5ea8a6a708ebfb3fe2e173b7c6737553"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "2b66a790614ee2be66c9cef74972793c"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "54d7b325c7a83f4bf8a96f480eff4d3f"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "9b1d9a48fdc1cd489fd044e03539f8a7"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "546a8bd98ba0638b4cddfe7f462ea264"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "e8a2df3013f622519bf08971d30a69a8"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "ce60730c7287c0f4ae3d889bc55ea2b5"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "c0e4feaeb583c554af3643f4354379c2"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "c4813539ad82f76d70962a2011d04cd5"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "8a2b35e82036de937b07b7b5a484959c"
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
    "revision": "606b53769b7cfbd4c8487285bb18f81f"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "033407e9c115d2b85d873246d68071d1"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "8c4bb9d690999a9d78a65b8c8268a5c0"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "732fa4072e565f8f3dcca0fc315e9a85"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "13f7ad0e25536029ac1b2e789b4f1190"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "e2f956ae5cf886022789b67bcf5071d8"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "e20bdb03610580b430fa0f42cae8ff4a"
  },
  {
    "url": "resources/books.html",
    "revision": "f720fdbe8bb462baf9a6a9c05c130127"
  },
  {
    "url": "resources/community.html",
    "revision": "4b1275132d141a243b2d6ffec9763f68"
  },
  {
    "url": "resources/conferences.html",
    "revision": "738c9f73a1be1dc9ee5b58ea5bf86e52"
  },
  {
    "url": "resources/examples.html",
    "revision": "b469eebf42dc4e785dc4644ae1c9753e"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "bf89096a5ef90360d61e813843500d9f"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "b051a0cb56bc9c93609e4c79b4f89b43"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "5327bee69eb64aa93348c7ae4451fa4e"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "4313fccd2464e0cd07912ee90b9fc22a"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "961dc227f1060838278ee14e3bb3d1ee"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "4bb7562ff4f6ee50846448e4dccaa8bc"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "e1138e082d4519d6ca1dbcc2a6297c54"
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
