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
    "revision": "8b1808cfafd0f2929be26c3b5a90d55e"
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
    "url": "assets/js/12.ed13b2ea.js",
    "revision": "2903dfac51b471c00d7403ab29259c52"
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
    "url": "assets/js/20.8d59ab9f.js",
    "revision": "65240e7d04274bbbcb7bfe0585c1237c"
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
    "url": "assets/js/24.b9c0dcf9.js",
    "revision": "bffba72a3febf0805e3c8d04d5dcdcfc"
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
    "url": "assets/js/6.c1471161.js",
    "revision": "a428785a43e21f78430b0cb056eb8dfb"
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
    "url": "assets/js/app.02804496.js",
    "revision": "48cc3f66bcf9846dabb9e3a7b9a45522"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "eb6fe2130bfeb55219009f31d88d2e5e"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "0397e4f955a7f6bfb2fe123eb850a3b1"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "758965f1a72d3dec2fd9e9b49d87cc54"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "16296294a2796e0a7bf88a73b9ac5022"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "276d3132381496195b7d0a29c255a3b3"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "6b426b28c36d01894b07cf1924a32d5f"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "5bb031bfeb61bb0772631e40867b1ed1"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "383a489a25358149dcc21db7b6692ab3"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "b2b4706c4310bc92d9f42ea78c3489fd"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "766e013a61c3f8dcd0f19438ec386103"
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
    "revision": "9b6c0852c6269cccb15874466200b510"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "43dab3e7b4e6775f4145d8f5f675e256"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "6b3529a7eb917b40dee3076c3ac2b7f8"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "e9db0c56192100d0d205be302991ac31"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "d43e6c2ca9d20e527218800947987617"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "a6af971f17bc9e9b4e12d724caa2532f"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "74af0cbccc323c0015826ae22b2d5ca7"
  },
  {
    "url": "resources/books.html",
    "revision": "4c32bd6a2e02d03141f4bad8bc078e87"
  },
  {
    "url": "resources/community.html",
    "revision": "ef18d8146bc1431b4f191240a913a9af"
  },
  {
    "url": "resources/conferences.html",
    "revision": "e2da1e1e8f530a456e50d9fa29de20c0"
  },
  {
    "url": "resources/examples.html",
    "revision": "3a7d71b96262b7cfd7f03958acbf9c03"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "cdd2f7ebd9a159801bc98d7987c698e1"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "004e16e0288b1b42d79541699fa046b5"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "4b95325321269ef0f49b356b08a60386"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "9a2805c01a6a740c8e95b59acdaf7607"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "724502baf05fa59093d8597c17a0aa8f"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "1ac7ceefdf625bcd60dc97952863e550"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "87cf8129f695c376bc425f6de63ae202"
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
