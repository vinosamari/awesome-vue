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
    "revision": "0b4a428320112945bd4b8938ee7fdf0a"
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
    "url": "assets/js/10.8049f456.js",
    "revision": "cbac6bde603d230a39630ffeb7c105b9"
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
    "url": "assets/js/13.1a771b3c.js",
    "revision": "77953222b8e84f17dbd5fb79d3a5c608"
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
    "url": "assets/js/20.acba04c9.js",
    "revision": "f3bc7e8e141a56e57161d081d93cc70c"
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
    "url": "assets/js/6.2c7746bb.js",
    "revision": "1f38c7252f887bbd3b6bfa2d146487cf"
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
    "url": "assets/js/app.324b963d.js",
    "revision": "1ea2609688254ec8960a90058236a48e"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "185b7c525a78145692c757986868b24b"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "ae9a58788b0f649384f9e8eda65eea03"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "13420ced394d2b34a3dc0a3a28d94840"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "8dbdf64435483a8346f94518ecb2c8a9"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "4efd683481ccb6bbbf1df6890cc2ef36"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "2139ec2f03f1dfcefa6bffe2efc3d2ab"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "b8aa478cc10e0e08107ad1315b018326"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "78f14e4f54f6555adf505e6e3a3ee586"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "09d13bc1cbf3f80969ad011e1d7d078a"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "aeda8dfd13bce62e4c6b3bc5ac9f84b6"
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
    "revision": "85d5d556d05aa3cbee463fc7b3977a64"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "81c1c21402bf72c6a2262f979e9eaf4f"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "1ffbb493bf9f63e065473db5340881fc"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "2ff18300dfc2392659480ca3534bfbbc"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "7038aa02a18f5db9821a0f7fa492f371"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "00b806be6277b996f44c9519c2166c40"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "4e27c76eb741d61ab82ae45741112224"
  },
  {
    "url": "resources/books.html",
    "revision": "3bd652f346047c7d66305a31d64efcf3"
  },
  {
    "url": "resources/community.html",
    "revision": "f79233d02d3373c42458bcc8e704abd0"
  },
  {
    "url": "resources/conferences.html",
    "revision": "d9be7014a1fa7a465176efa5414fcd62"
  },
  {
    "url": "resources/examples.html",
    "revision": "0d9538f81b8ef4d8473fa4bdde89b500"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "b7a7b0ecdced7ff4381f87fd17b1cf91"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "5a69d1e5fbf4a0888b1641eeed6e1094"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "441fb7de7aaa9214fd235e816b40b89d"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "504eab7396a040ce6b9f191dc25bba8b"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "16c7ca207627ee374d0551c8cb529882"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "065f571a5120aa4b617b89ff1efe851f"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "53b60554a260ac65ec0facdafb56c94e"
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
