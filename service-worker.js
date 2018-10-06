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
    "revision": "da847c252944fecf0d2b6a1f36edc5a8"
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
    "url": "assets/js/10.fd07b856.js",
    "revision": "81b832a8ace9585c6a13f2038ca348c6"
  },
  {
    "url": "assets/js/11.01052310.js",
    "revision": "7c387df7732ec372bfb5c9c4eaae238d"
  },
  {
    "url": "assets/js/12.2811de46.js",
    "revision": "5457f49dedecf332d6d03b52ae56c7c8"
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
    "url": "assets/js/16.5f9d9f35.js",
    "revision": "fd843beb1f506f616c1f923a268c8e9e"
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
    "url": "assets/js/20.40359c47.js",
    "revision": "37f769411090721af78c293813a92b44"
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
    "url": "assets/js/5.777dad43.js",
    "revision": "c0b9806dbb0a4342882d7e874014ed67"
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
    "url": "assets/js/app.d4ca5147.js",
    "revision": "6e583c70be55a14292502eec1922d64e"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "d7e6a577deb681cbfc5aaacf6b75df90"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "ec153b8ef7da3ce7594596cbafd603fe"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "177e4b3507e0d7b7b9f717c9b36ae778"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "9c66821e07eda727fb8f645046c7b5af"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "381914a5d5ab41dbdb253aeef60b9993"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "29c63ff5bb83e01cd7834e997241199d"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "f72d09d04a8bc7e8a0c141e28ac11980"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "99d443babb3e288677b019d4444be187"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "29bfbd9154c1f20f314ec4e0916310b4"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "b1f4eab0b79f20fdd965f9c2313bbbd9"
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
    "revision": "d66af4080f1022f12b15dc07b05afc70"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "aad3f912732bea2dc1b0633f8f61af9e"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "79fdb0954dbf3ce3d738d49ccdf49038"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "a3f0aad36694e4e97ac0fe24862630a3"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "7478733ef5bd648a297ace43bd13bbf7"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "e0676184f54ee9e6fd2daf583837d926"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "bf075eb11ecbf845c261acdd81863453"
  },
  {
    "url": "resources/books.html",
    "revision": "83156a2e3e98e81549ffd1d16e1536c9"
  },
  {
    "url": "resources/community.html",
    "revision": "67b805da552d93b9986992ba9733c319"
  },
  {
    "url": "resources/conferences.html",
    "revision": "b0058db6db3e96af16d5fb44a6af5c6c"
  },
  {
    "url": "resources/examples.html",
    "revision": "44431ffeaa91ac36548c9402a8a39f4e"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "7e0a8c8a4a05abcc32b060e89bb8499d"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "0b6039abd1ebabe3569bd70359392145"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "f35aa26100876916ca6a8a9cb643c0b2"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "ef8a10fd0fecff45946688689765dc58"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "a220d5bef08d8457de3b8e162324cbfe"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "510102c0eb87a60d39f0a45939b8954f"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "f9e881822cfcaad863ccbf84ae159df6"
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
