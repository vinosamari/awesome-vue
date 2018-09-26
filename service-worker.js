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
    "revision": "03c05318434944e2b745543082df9e54"
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
    "url": "assets/js/16.1406b5bf.js",
    "revision": "ddb5e3b53024e0f0ec07b77dfbdd5a49"
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
    "url": "assets/js/24.086823d3.js",
    "revision": "683c0633d58871924954898c37d4e86f"
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
    "url": "assets/js/9.3f3c3ad3.js",
    "revision": "d14c8056b9b4d6cb82092d3b1ab98154"
  },
  {
    "url": "assets/js/app.9339ab49.js",
    "revision": "9cf42c243d65287c4216cf72802303b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "3e0a466cfe9266d2eb00c66b9c4a97c9"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "7008b1e793249a206584f4b362b2692c"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "07f6933cc75b31e6cbebb43df9b5c98a"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "6b6345f32c5cd79bae572316717edbf0"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "c3a58808193756b5ac9f5019be4022e6"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "735257b8bc2295db1c65f15e49c7a150"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "3f3f05f12736b70f8eace83961cb1452"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "e12b00a17501a0f8a4c9e3e600bb5ae1"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "d11e84a4bf402aa82508bb37e678d1a1"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "e2dbe6b451360d2971932a4df1832571"
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
    "revision": "118a416fb146c55935ad1df758cee1a6"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "93f2ec66087d6d79bc184c3dc88d8842"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "f82b2e147c71520a00216983c1f81367"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "2ff27c68d2cc7c64c7f14caeb256d452"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "25957a8f19b3f3b284442932bb3306f0"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "31ddfcd187c4ec9d093ff1d8fee41861"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "dda5f3b88037fc6d6029de1fd627fa8d"
  },
  {
    "url": "resources/books.html",
    "revision": "9c089c75abb54fadbd257454cf44ada2"
  },
  {
    "url": "resources/community.html",
    "revision": "37a621633e41614a2c464ddb61755c31"
  },
  {
    "url": "resources/conferences.html",
    "revision": "78fbcb96efee9cce7ff253ea2dc1c43d"
  },
  {
    "url": "resources/examples.html",
    "revision": "067456be1f19954b3ad4b686e949d648"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "1d6cbec4bf04d193979a2ab7caf2b6f8"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "5435be611c01927f131b3148925f173e"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "67dee4d3634ae1e10c6c3be74c4195fd"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "973d95271524ca70311c61df3ed09964"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "c97b26e16d1b83fafcf48933bd2b5469"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "56699f42f7d8443b57a5f0a0d279d7ad"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "4782339a87b09d06d55e17747cb69fe9"
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
