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
    "revision": "cb2b27f7b08535afb1148349f843f2c1"
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
    "url": "assets/js/10.61df24bc.js",
    "revision": "cbac6bde603d230a39630ffeb7c105b9"
  },
  {
    "url": "assets/js/11.73ffc2a6.js",
    "revision": "a7cc8f8c63689f312bbf50899c83c819"
  },
  {
    "url": "assets/js/12.3f1fa822.js",
    "revision": "46b5d239fa78cac377066024e65dde79"
  },
  {
    "url": "assets/js/13.8f8f4cc4.js",
    "revision": "77953222b8e84f17dbd5fb79d3a5c608"
  },
  {
    "url": "assets/js/14.834c96ac.js",
    "revision": "ddd69a2cdcf26d38e7ad808e207f58e1"
  },
  {
    "url": "assets/js/15.e8e3add2.js",
    "revision": "3ee6b6c906aadfca88ecbc13eb319f14"
  },
  {
    "url": "assets/js/16.e7c29199.js",
    "revision": "226d148a60bbb2b6435dfa8dfe1413fd"
  },
  {
    "url": "assets/js/17.d8ae57a7.js",
    "revision": "3bccd000a8b6c6f02b419388b6b73172"
  },
  {
    "url": "assets/js/18.d8757875.js",
    "revision": "ac5ffab1f635bb7f509e5f7809362ef0"
  },
  {
    "url": "assets/js/19.8c660560.js",
    "revision": "2c30819693b0cfbcafe221a2153e6192"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.6d0bf4ea.js",
    "revision": "f3bc7e8e141a56e57161d081d93cc70c"
  },
  {
    "url": "assets/js/21.c5d657e5.js",
    "revision": "885db4dc724e2a0f9e6ac715ec0dd674"
  },
  {
    "url": "assets/js/22.293c9a81.js",
    "revision": "61c3263edc3bb83a6b952e600f5db7e5"
  },
  {
    "url": "assets/js/23.2a47fee3.js",
    "revision": "c728940c0215d12394474772d287b440"
  },
  {
    "url": "assets/js/24.cd85f996.js",
    "revision": "249741a8ad6bad4aa235e6b0cdc37fd8"
  },
  {
    "url": "assets/js/25.a5397b83.js",
    "revision": "cabf102a6bb98ddfa0124abd432ce162"
  },
  {
    "url": "assets/js/26.eafebca1.js",
    "revision": "d2a37f24b7b7e6880ebe7d62844f5360"
  },
  {
    "url": "assets/js/27.d85a9559.js",
    "revision": "c9f60a511abd5192b2044a175f9797a4"
  },
  {
    "url": "assets/js/28.446b1960.js",
    "revision": "c4a92b6cf7e726a18b2a666b746f05ac"
  },
  {
    "url": "assets/js/29.9db05254.js",
    "revision": "05f7fd4ed32b82acf1e45e5563d08f73"
  },
  {
    "url": "assets/js/3.d5d373a3.js",
    "revision": "015098ad26b05f91df9cf99db480d128"
  },
  {
    "url": "assets/js/30.e0dc85e9.js",
    "revision": "9392ccd9ba1db9624392c3ee7fe56527"
  },
  {
    "url": "assets/js/31.487245f9.js",
    "revision": "9e5a7ff3ca9789f417a09254ec1af5e3"
  },
  {
    "url": "assets/js/4.fab087ae.js",
    "revision": "c0f55ceccd0df82b990fa87b0b601b2b"
  },
  {
    "url": "assets/js/5.eba01b24.js",
    "revision": "49a52dc65bbb9818f08996b7c8af4f2f"
  },
  {
    "url": "assets/js/6.38e95312.js",
    "revision": "1f38c7252f887bbd3b6bfa2d146487cf"
  },
  {
    "url": "assets/js/7.cded3ed6.js",
    "revision": "467d2f1f090a7458127576463e544d65"
  },
  {
    "url": "assets/js/8.d17c60bc.js",
    "revision": "5d53de071528c8dffb1e1824d69c9efe"
  },
  {
    "url": "assets/js/9.ab811e88.js",
    "revision": "d13868dc02f6c6747933fd0145505c88"
  },
  {
    "url": "assets/js/app.4494cd40.js",
    "revision": "bf97ed0bdf2c8e960d0889d442d2f280"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "1ef20e367aada05d83f9f9523e638a21"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "a63bd4434c6c7616baaa5c01b74dffe8"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "22c62187222bf391ce1cefc0d8ad4ac4"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "5738939be9ba51dda3e7cf8adaebe357"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "5ff54603d7f8a9198a816b9bd0389b47"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "a8f72e6f0434f0e95385809ae041fe95"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "41ba545e16abcfff75e67c683afe7d1e"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "70b7158ba59f23bd8011e4ff0d2cd18c"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "154c144282d5e4bcfb82cf5bd14526f4"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "37ed84cde9658cb29a10a5a8e34dab74"
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
    "revision": "bc487a5aa839e9687e31faa09f04c67d"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "e24e76ad2555f990c3a7858c400b8148"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "274be4e21f840a18e28a81b93aa05f98"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "261cb677ccfc54a8ec76404151f774d1"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "db9204402f26f4c4e4b72fa41656d18a"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "b139dba16da556ca9c36a2b3e9fe7ef8"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "bbb087dc9c10a794da858f18cee1c221"
  },
  {
    "url": "resources/books.html",
    "revision": "090a191e08555edc404b794f4a9044e2"
  },
  {
    "url": "resources/community.html",
    "revision": "2d8ee2f092c3d5958eebf090795d6aed"
  },
  {
    "url": "resources/conferences.html",
    "revision": "4fe064b170ca9c53c42d29b8ae377424"
  },
  {
    "url": "resources/examples.html",
    "revision": "f7cf8f91f9e44d49b7d6f56ecf99f408"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "db03a427dcc7bf6ca751032e299919ad"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "0a3d617fbe80fd92fc26c9ac80bfa7f0"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "8209aaebbb9ae4cd48482cdfe26728b7"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "2a926d7d348e8b9b7587405c2aa4b3b7"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "eb6bdddc0501e7d6bf40378ac4382d1e"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "977217a9a8b1f4daafc6ef7195b8b1fb"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "f35284519dc26a6a5961a110e76f98ad"
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
