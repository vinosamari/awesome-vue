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
    "revision": "a787dfd58c7657c8a08ddd3e06fb5de6"
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
    "url": "assets/js/10.9b4f8300.js",
    "revision": "6dbfc83ad96d0f81ebd2197a3b79c854"
  },
  {
    "url": "assets/js/11.8511181e.js",
    "revision": "a7cc8f8c63689f312bbf50899c83c819"
  },
  {
    "url": "assets/js/12.86319f7a.js",
    "revision": "c4ff1ff9cc5c96a4d0bff7bb0bf381b7"
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
    "url": "assets/js/15.9a4b3837.js",
    "revision": "1d6fb61ea91b64339f11201a9b9c99d0"
  },
  {
    "url": "assets/js/16.8bdba1cc.js",
    "revision": "57298ef3400c76dab5af3be9df513ae3"
  },
  {
    "url": "assets/js/17.6fb67496.js",
    "revision": "4e623b6da2d3dc0b9f7c3591ea1029a4"
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
    "url": "assets/js/31.932c6ad6.js",
    "revision": "1e791ddf79cc02c8a2fbbf511cb7629d"
  },
  {
    "url": "assets/js/4.dcaabf4a.js",
    "revision": "457acf7f9a2fb7643da65264495c9ad0"
  },
  {
    "url": "assets/js/5.b94eaf64.js",
    "revision": "48c5b913070f16ab1a6d0bd248934769"
  },
  {
    "url": "assets/js/6.dd68c987.js",
    "revision": "64b15aee8850c18df06b380a80b53509"
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
    "url": "assets/js/app.b54465b1.js",
    "revision": "25007bfd5db69e2d508d86f4a1c8a419"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "a419dbdc565d7b6871cc45a87c9536c6"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "49df210c3b01af205bc21f484262c93b"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "0d9be8199230ec467fdd1ceb3af0ee62"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "5d3ad48c5ffe9722f3496ca70b2d6ac4"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "76831f84003ea1fe6b1d09e4af03084a"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "223858c58482b72fc27b5f31c88771e9"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "98d0989be47bb45a3639b72d95f8471f"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "77a2f4958290c3b8d7b50e8f5a450069"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "91a85eb1fc3438b165c1fa88f26f35fa"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "c72292db5730b2b45a54948b302d3654"
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
    "revision": "5fa670704cdff9caa02d72adeda9fef0"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "30cbb461191724f01631c8dc575a4473"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "ca80a4790497f4d592345241f21777d6"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "038d101399a63d2551b80c0ce94d0123"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "8b5ed83680e676ef5b05f7f36c32648b"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "322d21eb3d85ed9dddbec7391a7b4bdd"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "22c963ba5e17f61de1de3de18a703b33"
  },
  {
    "url": "resources/books.html",
    "revision": "75f2e91169e79efab183a6ea698650d1"
  },
  {
    "url": "resources/community.html",
    "revision": "0adffe5004feb6d0c5169a531fb4ec50"
  },
  {
    "url": "resources/conferences.html",
    "revision": "44e83d86e2df613b03503f7df084f497"
  },
  {
    "url": "resources/examples.html",
    "revision": "3fb67ce723478c0ce36688d331fe25b6"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "199186353e6ac62605f6dd0b299a0edb"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "56914cce35ff5fcbe0696691836ccee7"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "c69c7b660e1a08e3263735d05cc19ec4"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "c62f495b0145604deb0e7bde7358795b"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "03003e6ccb6dda9ef7276aaa1955b3a8"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "3ad5ac45ce984ff0b9dd01e37a516a63"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "78cfe7d763f279acfacd9bcb4608db7d"
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
