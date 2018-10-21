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
    "revision": "375df50fdfeb72d8cd10bf3c06f34817"
  },
  {
    "url": "assets/css/0.styles.f9a75f71.css",
    "revision": "3733e9256308b77a15bcd7df96202c06"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a2d987f8.js",
    "revision": "c24bd59a061af974293e021cacec1163"
  },
  {
    "url": "assets/js/11.e3587e3d.js",
    "revision": "080f56e7b951700ed5cc3f9af9649a12"
  },
  {
    "url": "assets/js/12.9812b2de.js",
    "revision": "30e0f85d1f6242fc81bfd74c0c457453"
  },
  {
    "url": "assets/js/13.f71e80df.js",
    "revision": "93f26093463455deddb4810220e346f7"
  },
  {
    "url": "assets/js/14.ffe4542e.js",
    "revision": "c2e62998ac3e81167ea74873e1fd9ef6"
  },
  {
    "url": "assets/js/15.59432682.js",
    "revision": "e0a9d19427ff6f9148521cc590f8dcbb"
  },
  {
    "url": "assets/js/16.0b73ca7d.js",
    "revision": "4a1fef06a586efbd258c240d4b227ec4"
  },
  {
    "url": "assets/js/17.529331dc.js",
    "revision": "64cb644f010e33e6bc6604928f4d71d0"
  },
  {
    "url": "assets/js/18.0208e544.js",
    "revision": "c13793756913e1d66eb33b4707d2c961"
  },
  {
    "url": "assets/js/19.0738d19a.js",
    "revision": "a3e32d3bab1fef0a72a8352ca2ba1624"
  },
  {
    "url": "assets/js/2.4b44695e.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/20.bf301a87.js",
    "revision": "82e66beb329dd2c803c2374b2bcab7a8"
  },
  {
    "url": "assets/js/21.cf241b54.js",
    "revision": "e1ecba0732d73a927e1f1b33aea3fbb4"
  },
  {
    "url": "assets/js/22.9ce44a02.js",
    "revision": "f2d3ccd4b96692678506836fbcfba159"
  },
  {
    "url": "assets/js/23.7df9d7cc.js",
    "revision": "00a00c5d1b652395c22801b49e74b52b"
  },
  {
    "url": "assets/js/24.27d27de6.js",
    "revision": "57262ae6888429a6f41814a79d659594"
  },
  {
    "url": "assets/js/25.ef60f4c8.js",
    "revision": "0f9e959c038827e3d6dc44ff54307ed6"
  },
  {
    "url": "assets/js/26.08c81180.js",
    "revision": "6de92bb41496c846dbe52fdff2ede5a2"
  },
  {
    "url": "assets/js/27.b8d44a34.js",
    "revision": "0f4814531905a3962a621f5df2c0b916"
  },
  {
    "url": "assets/js/28.82081257.js",
    "revision": "4d3a9cfdb7d6b181da17f819b36d5a3f"
  },
  {
    "url": "assets/js/29.c2f1359a.js",
    "revision": "5cd0550975767785351685454183cc84"
  },
  {
    "url": "assets/js/3.56cb5c48.js",
    "revision": "51095e57112cf623aa21bdac4093ec8b"
  },
  {
    "url": "assets/js/30.cab29906.js",
    "revision": "c2247f7dac028063cb50fa1193daa7d9"
  },
  {
    "url": "assets/js/31.0d38ea4f.js",
    "revision": "218935f89f66ac38ee24da3fb5352eca"
  },
  {
    "url": "assets/js/4.eaf50496.js",
    "revision": "d75ae242ece4daddf759254a722abd77"
  },
  {
    "url": "assets/js/5.b28f49cb.js",
    "revision": "d65b250c8a0aa3a99b8209e82cc200c2"
  },
  {
    "url": "assets/js/6.55aa710c.js",
    "revision": "643a22949ec4efca8d21b08a359e8e9a"
  },
  {
    "url": "assets/js/7.365aaae8.js",
    "revision": "1d7b2b1d97ecc870413bd026cab8235c"
  },
  {
    "url": "assets/js/8.c3c6a046.js",
    "revision": "44e35f7cd895f8415590ac005452e4bf"
  },
  {
    "url": "assets/js/9.45bfc2df.js",
    "revision": "c6ac271d698584f9221f33c6c512d362"
  },
  {
    "url": "assets/js/app.ad027418.js",
    "revision": "17bf187ea7af26ca6a163e094261754c"
  },
  {
    "url": "assets/js/vendors~docsearch.800b1046.js",
    "revision": "7b81ca399e6d24c867f37c9d580c3001"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "cd30a5c8501e66b3917fbb7d6572c520"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "db22b677b8198d1783e0b7bed5943c29"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "b1c00cf3eb76f7c1b7a59d6cebeedbdb"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "1ac3a75fd8d2df1078e554ab8c53de35"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "1d76e13a590e03c8fe1be14915c7fe41"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "8fc0c240f30608bec2d8c2c36463b31e"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "613f85ff57247205b6d6f18877ff8448"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "9c1732ed0771772c03b5f1e5690dea15"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "5c48aa4ff3e4f8b1a9abcf1394eef033"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "6dc1a00e375c51fb44e610c3442aa8f4"
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
    "revision": "e48bc52ff322bbdd194a5c03295558dc"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "dc6d41991af8520b2ed1184aea69cf2b"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "aa9e5fc4008ca1168997239390f5f2a7"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "1f8b7ebfa7f4111808b64ab9610c9ebb"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "0db7cc480ababe52b25fafba37f1ef18"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "3eeaa8f765e1d833be86e5df74f5f8e1"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "91cf1df2860689c7336f44fc18465e4b"
  },
  {
    "url": "resources/books.html",
    "revision": "f47132da3ee17ad60ff7b808a2f31d96"
  },
  {
    "url": "resources/community.html",
    "revision": "4d6e98e5b7e21b55158403e696359f8b"
  },
  {
    "url": "resources/conferences.html",
    "revision": "0b3f11b5b5dd9632586aa1f80ec1ff2e"
  },
  {
    "url": "resources/examples.html",
    "revision": "c235112fea40e54a764bfc453b33abf5"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "4860e9d5d787751e73b4cd172b96fc27"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "3d7ef02ffe70101bed520cd6c6198664"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "d171fe22fd3ab7f0f4bde5da97dc5496"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "c5e281f9177d3b4d0b3e855a829ea4e1"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "cca1a8335a42a72a9e19f965541d59cb"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "9104323b017fb41c74c683bc60fadceb"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "f3902a871bd667f4a7cfc94ac16de508"
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
