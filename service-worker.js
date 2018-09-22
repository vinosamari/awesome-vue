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
    "revision": "332612c2cc975fd612098b38ba5f2a1d"
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
    "url": "assets/js/16.2e941a41.js",
    "revision": "7aa85a1bbb72a2236d88d9eaebba736c"
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
    "url": "assets/js/5.03ee6508.js",
    "revision": "09c3cedb8e3dcb878e6e510e8c159bbd"
  },
  {
    "url": "assets/js/6.b04814d7.js",
    "revision": "763040d027accdcedb390ad8acc8e7c8"
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
    "url": "assets/js/app.84651b02.js",
    "revision": "1a1b6b78e3d25058b977099f526c1c5d"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "401169a7990a77aea02dbfd73466ceb5"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "54fe1a7e1d62e2f7f432900f0573e7c1"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "9a9ff4f3ef93755955beec073cac0085"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "f7656bd71c593da16ead0beb81c05614"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "402cec594144eb43eebaa74b7ac283e1"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "8e825779db1050d99d07248b368d74e0"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "397ae670f9932364960740ad9b06d080"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "f465f813b40d4bf1b8d45837d75a3a3d"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "c81205085c05be0517627c83bfe1ef6c"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "5b1346d6711248697a1f21dc8b99aa0f"
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
    "revision": "17afccc282a579ac998a9272b27fb4a0"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "e072b3854488a1534c34782528119441"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "165181af6f8e563296c1fc177c8f164b"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "543f519889ba1458e1905c0fbfbbc307"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "e03afafa43a5667ab22a2e6f51839b9c"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "97b6d516dac7a83b9f89ca9da01b4d04"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "37b37223c762644a7a86386c57f31cdf"
  },
  {
    "url": "resources/books.html",
    "revision": "431a27aba6ccb1b15a7b44ca1255c4c8"
  },
  {
    "url": "resources/community.html",
    "revision": "3bff3db66b7699df3e8c84e04855d876"
  },
  {
    "url": "resources/conferences.html",
    "revision": "3b5b0305e3493fa836621287dd8d372c"
  },
  {
    "url": "resources/examples.html",
    "revision": "c13ce25a7f5206752f87d1be634db5cb"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "0c497ff6f152fb4ac8ab58d8285b1329"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "a1db699d6d305734e344d12e24043ff3"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "76c54a6de1e83598ba154a25e9601d78"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "94551fd373178d1aa4609ab3136d515e"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "75276c384c203879898a4de34acbb18f"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "82f57b6b589e8b75877df93b40b89f14"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "52c00f68895a7cf634e4315339ebae09"
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
