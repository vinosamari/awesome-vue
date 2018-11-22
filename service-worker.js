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
    "revision": "affbc7e41c9d3e43e5fc59c79aea0858"
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
    "url": "assets/js/10.53d2c557.js",
    "revision": "be213456653b8f8ea6209d54ebe4a9b5"
  },
  {
    "url": "assets/js/11.81e3c4a3.js",
    "revision": "b8abea9b7d708cb79e1b4bb758b08088"
  },
  {
    "url": "assets/js/12.647642d5.js",
    "revision": "5d7597f3d2111b2cfaa55c855377232a"
  },
  {
    "url": "assets/js/13.c0b40ad7.js",
    "revision": "aba0806723b5ffede00145f950dc5593"
  },
  {
    "url": "assets/js/14.82247384.js",
    "revision": "c2e62998ac3e81167ea74873e1fd9ef6"
  },
  {
    "url": "assets/js/15.95a71304.js",
    "revision": "e0a9d19427ff6f9148521cc590f8dcbb"
  },
  {
    "url": "assets/js/16.362d756d.js",
    "revision": "7cb68fe2a73d28f56914c009f2757560"
  },
  {
    "url": "assets/js/17.4234f5f9.js",
    "revision": "64cb644f010e33e6bc6604928f4d71d0"
  },
  {
    "url": "assets/js/18.ebd6830e.js",
    "revision": "c13793756913e1d66eb33b4707d2c961"
  },
  {
    "url": "assets/js/19.8f6f46a6.js",
    "revision": "a3e32d3bab1fef0a72a8352ca2ba1624"
  },
  {
    "url": "assets/js/20.71820720.js",
    "revision": "d952dd70fac225fec7836fc534d0130d"
  },
  {
    "url": "assets/js/21.a07adc96.js",
    "revision": "56224d80b3dcf502f6923db7420efa85"
  },
  {
    "url": "assets/js/22.489c3d77.js",
    "revision": "b7848cc29ae630792966564dfaba6a62"
  },
  {
    "url": "assets/js/23.397ee83d.js",
    "revision": "00a00c5d1b652395c22801b49e74b52b"
  },
  {
    "url": "assets/js/24.151aebdd.js",
    "revision": "2a0dd69a1de76452566a0c6f4468354c"
  },
  {
    "url": "assets/js/25.8e425124.js",
    "revision": "cc6686c798bf8f277702713718e3f98c"
  },
  {
    "url": "assets/js/26.31b71fc8.js",
    "revision": "6de92bb41496c846dbe52fdff2ede5a2"
  },
  {
    "url": "assets/js/27.711c21cc.js",
    "revision": "0f4814531905a3962a621f5df2c0b916"
  },
  {
    "url": "assets/js/28.1fa3930f.js",
    "revision": "4d3a9cfdb7d6b181da17f819b36d5a3f"
  },
  {
    "url": "assets/js/29.d25cb6c3.js",
    "revision": "5cd0550975767785351685454183cc84"
  },
  {
    "url": "assets/js/3.56cb5c48.js",
    "revision": "51095e57112cf623aa21bdac4093ec8b"
  },
  {
    "url": "assets/js/30.8c47f022.js",
    "revision": "9daecb46885fe2f88e6875e022bb78ac"
  },
  {
    "url": "assets/js/31.4f34ecac.js",
    "revision": "218935f89f66ac38ee24da3fb5352eca"
  },
  {
    "url": "assets/js/32.a77e1b3c.js",
    "revision": "9cae2f6dded5d82310128cdce8e7fce7"
  },
  {
    "url": "assets/js/4.151aee11.js",
    "revision": "51ae4eaf64660e6642fbdc51bc74101e"
  },
  {
    "url": "assets/js/5.4cbcd3e7.js",
    "revision": "ecd4110d0ac4f234b18210f22d1e9f6a"
  },
  {
    "url": "assets/js/6.0ee45068.js",
    "revision": "643a22949ec4efca8d21b08a359e8e9a"
  },
  {
    "url": "assets/js/7.d81abc02.js",
    "revision": "1d7b2b1d97ecc870413bd026cab8235c"
  },
  {
    "url": "assets/js/8.e6edf3e0.js",
    "revision": "44e35f7cd895f8415590ac005452e4bf"
  },
  {
    "url": "assets/js/9.e6e18304.js",
    "revision": "81a295e87f25cebc24cfa7ceb5d9ae1b"
  },
  {
    "url": "assets/js/app.220eac15.js",
    "revision": "d4c0dcfe01de3534576023bcbc74dc52"
  },
  {
    "url": "assets/js/vendors~docsearch.fb7d639f.js",
    "revision": "121b3a196de4c4a41361b1cc3de9cd15"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "a41a867406e3c6efe6d32d627d08be15"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "28c5ca64e1d9d87e93f2a259717ca340"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "1eb4b1a68813e56d5978dd92f81bb8eb"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "14a8ca5e9b48c570c0ea95d07d2ea7d0"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "670c7521e1aa59993250c74c1848e588"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "e9123a6daed2a320a08fb3a08b8604cb"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "6dad9b4fed9a54cf365cbd387e2c9ba1"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "acf856d006f330a2de4d2ae070c226af"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "c840d7be5e2692106682941dfbd8890d"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "cca88fa03cee7857206a5bc95458cc88"
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
    "revision": "a59ae89964b4520f9c1ccc09b632d499"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "eddb5945b6076c764e18135404b59598"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "bdb9ce2ad7b0e7e30ca5b80b4ae01e0b"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "f63b68c50d71ead57ea12f9b96cde01e"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "b5f8ebe358f7769562e4a45df2fbbd64"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "269302bac105671b2722fd46951ae807"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "f400606b5a671a4df1ca1c19d43ead6b"
  },
  {
    "url": "resources/books.html",
    "revision": "4f186e60ce8dbd641c56d5d794037cf2"
  },
  {
    "url": "resources/community.html",
    "revision": "ff5318bc2be3b6c6eefacf51675ce202"
  },
  {
    "url": "resources/conferences.html",
    "revision": "0949826df23f165c21f924f3e6cadee3"
  },
  {
    "url": "resources/examples.html",
    "revision": "efc41b426bc908395a483b3a7f3a5178"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "62afa03726fd468cc5fd95847628edd1"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "1a44e6f672375d80241cf5bf5a5709da"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "8e79808969894b1d2d719da54ee343ee"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "aa32a693576b0abf7c14a9addd27088b"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "368a137f4ef08663999a2ef2aa1d041e"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "2cac76da0a114077e584935ed8c4947a"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "f1a15973d6a0b3d8229f48d825c417b1"
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
