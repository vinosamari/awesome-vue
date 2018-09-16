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
    "revision": "ce1c20302b31c69c018668bdeabda90a"
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
    "url": "assets/js/10.9b927aba.js",
    "revision": "a6db21cadb5b2e4c40116ef0029510e8"
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
    "url": "assets/js/app.eca38f9c.js",
    "revision": "68458dc6f25ebb60b551ef1d8d280a24"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "8d53b35e00ed6bd35725b92e93459d51"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "eb1aa5fc5fca46557c1f04dfa0dc59f3"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "e19497b9e7194a690eb7072511771146"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "2432911857dc1109edaaacf6a1f60627"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "9fd36ea901dd84a3655e80f6745b0925"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "2080d692c3d1abd0e442502d1152da86"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "c360a68e70157da3d8f880bf0e8d9755"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "ccb6594f0332903010ecf1b25e99e073"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "4d3ec929dfb8f1be047f82ee77c12d78"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "be7834f01b7f31f93d43ce0f137d59d2"
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
    "revision": "2d8af43c71589690c0de509c5b236eb6"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "50c9d171f16c5329fc1aa5633858259f"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "facfa57084ea9c946d8e6a8df3a41fe3"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "1b8f18b8c299636379eb9eef2ffbf3ca"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "14b019a207765c514049d5478e388aac"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "84e8f2f15c77ce6d1f1f356fc5ec01f7"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "81272c5686ce2ccb6f47ecd0af9ec4e7"
  },
  {
    "url": "resources/books.html",
    "revision": "d36d732648eb9e3e677dba16c6e61c46"
  },
  {
    "url": "resources/community.html",
    "revision": "59c5608836347d8b746770a191c89893"
  },
  {
    "url": "resources/conferences.html",
    "revision": "83044dfd09bc3450d61c83e333e13bb3"
  },
  {
    "url": "resources/examples.html",
    "revision": "04f8187885443353db0de6356dd09efb"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "2a5bd4994783e5d82740b90246a47976"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "87c96a4a5ad35c88cfee3ee07a2dc351"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "c2b9c1352975769c00536ee4f99601a2"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "e46ee9018512ac0ee28f5feeaeb1bf18"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "6b7017bd3504d9bbaf183b77f372b78a"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "b07ff0284a86d8e084794d38f9a43f74"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "388dd91445dfc239d92841710c76e0bb"
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
