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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "00a50eeb25a649f549d1c30449170293"
  },
  {
    "url": "assets/css/0.styles.14fd8401.css",
    "revision": "58e5e53660314010897cdf9a92270eb3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.90876c4e.js",
    "revision": "d3f360084977211d6fe4e691d71493e0"
  },
  {
    "url": "assets/js/11.0098895d.js",
    "revision": "3f191e30c8d6bda9cb718e68a98d611d"
  },
  {
    "url": "assets/js/12.9649270e.js",
    "revision": "895acdc4a8110f842f3fdac273b754c6"
  },
  {
    "url": "assets/js/13.81ee447a.js",
    "revision": "5dbfa16d649710735b17a50752cb00e7"
  },
  {
    "url": "assets/js/14.fc5078b6.js",
    "revision": "a75db07a03996c78079c95f3f24ee637"
  },
  {
    "url": "assets/js/15.37433827.js",
    "revision": "e0a9d19427ff6f9148521cc590f8dcbb"
  },
  {
    "url": "assets/js/16.ad19b6fe.js",
    "revision": "116268a87af69cb164179bc1cafeb4d9"
  },
  {
    "url": "assets/js/17.696c74c0.js",
    "revision": "b50732a989d59a14edb7143d3b180a66"
  },
  {
    "url": "assets/js/18.0430e689.js",
    "revision": "54f5c22838d6ac24ed187a58bcc80cb9"
  },
  {
    "url": "assets/js/19.174483f1.js",
    "revision": "87c582f05fa0628286d8566287b55e14"
  },
  {
    "url": "assets/js/20.dd788569.js",
    "revision": "280f40a72cb99f2b7d6ba951d79f54e2"
  },
  {
    "url": "assets/js/21.88edc71d.js",
    "revision": "17265955c4418eff150352cc62378e19"
  },
  {
    "url": "assets/js/22.6fb28a77.js",
    "revision": "ab53043e5e1361dd263f64a3055941d3"
  },
  {
    "url": "assets/js/23.09b81d25.js",
    "revision": "8d5be48c7da37f3f8dce061be5f5459a"
  },
  {
    "url": "assets/js/24.1d5088e8.js",
    "revision": "51b8ff65e1c8efc65efb94af19d9bcc2"
  },
  {
    "url": "assets/js/25.fd08c439.js",
    "revision": "583f8eac40fa98cd0bfc2667677dc6b8"
  },
  {
    "url": "assets/js/26.abb4f606.js",
    "revision": "0e6129af1f95132d266942028a4ec149"
  },
  {
    "url": "assets/js/27.594f95a5.js",
    "revision": "c55dfe8dc0b461a42f1d8032446a3a28"
  },
  {
    "url": "assets/js/28.e9e4fed7.js",
    "revision": "c9fe255ee11dd0ddda2f88a69e217980"
  },
  {
    "url": "assets/js/29.028b7592.js",
    "revision": "7fe99238780dd800f2772c3055109303"
  },
  {
    "url": "assets/js/3.56cb5c48.js",
    "revision": "51095e57112cf623aa21bdac4093ec8b"
  },
  {
    "url": "assets/js/30.2056685a.js",
    "revision": "51989b0b2c705d6ee45e9811142aec4e"
  },
  {
    "url": "assets/js/31.cba3c5b2.js",
    "revision": "93a47077407973f962eda5be55bf264a"
  },
  {
    "url": "assets/js/32.7dcf62ec.js",
    "revision": "bd6f1e8e6e8a202b942808905376db51"
  },
  {
    "url": "assets/js/33.9da200cf.js",
    "revision": "abaac9973628edfee35df0c807014a0a"
  },
  {
    "url": "assets/js/4.6f18f138.js",
    "revision": "3221bd8c27d61d71374e8ed464191f9f"
  },
  {
    "url": "assets/js/5.3eefc6da.js",
    "revision": "0f776d8d7cdacdde33253760b2221301"
  },
  {
    "url": "assets/js/6.33762c3d.js",
    "revision": "384f414f356fb316c1f282f9bee23daa"
  },
  {
    "url": "assets/js/7.f9c18b0e.js",
    "revision": "1d7b2b1d97ecc870413bd026cab8235c"
  },
  {
    "url": "assets/js/8.e07971c0.js",
    "revision": "d16296a4eac4cdea0f57a898bb31b62d"
  },
  {
    "url": "assets/js/9.550f7037.js",
    "revision": "5fff7f53c03581e36840ee5057154e90"
  },
  {
    "url": "assets/js/app.ecd85ddc.js",
    "revision": "4e1e4840ce9b2298f40751adcb231b84"
  },
  {
    "url": "assets/js/vendors~docsearch.c6236e72.js",
    "revision": "a47f03ed0ad284c8d5dbf0bfda64a455"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "902c84fd7012405144e02945a37356dd"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "77d69919717ad5940043b6a19d884b79"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "5dea4c3370d6e16bac4534d0b95b39b0"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "ef86c2e67518b0c348a3f38d963e4dbf"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "8dabe1d96536764711712a1620112419"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "7fc07d993be86fe35679a52c61fff2ea"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "c4478dc6a8dbc91e9912ba2dc7dcfdde"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "14e8beb5ce516b23929898bf3910a3d6"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "03da42f5378df73c5772456e50c88764"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "e58e83b23212746fc7fc2e8addde44af"
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
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "2a285bdc5a650af3f9b66018a9871e14"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "8a10502cb0ca5ce9fcc3f91fe1bdaf78"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "9648f9bdd90850a0b6c9ff9c61f9b84c"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "683669c51b61064bf8b52d308592700f"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "be7c1799bf44c890e8b5f1fc70bc191e"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "02c624c2798047f1518d8a93f4e0bfb2"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "193fed61c3770f16ff219b1f33cadd64"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "05bec6523ac6f2b4f63600c506e65e61"
  },
  {
    "url": "resources/books.html",
    "revision": "dea6b8d796906183993792228833b8a3"
  },
  {
    "url": "resources/community.html",
    "revision": "05fa4ce08d1f4c59e14f2449a0bff45a"
  },
  {
    "url": "resources/conferences.html",
    "revision": "7e6a73410f74ddf6e29d331797cd851e"
  },
  {
    "url": "resources/examples.html",
    "revision": "bcc84af3940d122e57f24bc9fdf0bb03"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "ecd45199e3bff591ff6881a707afddf7"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "5ebd4d8b0106a12b2f41af793fedfbde"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "4ef6176baf179fe89696368f1eea9619"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "c0c270ce81dfce2062209965f03e374f"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "c94ed3a8419ec6e6878a0ecf39eb11ff"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "c5f86e51e03f21e2fc2b4709990041a1"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "3aa8a24e0ce6b100b586c486f0c0591d"
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
