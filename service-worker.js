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
    "revision": "278d062dd48a12463f2c0d8178ac2ccd"
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
    "url": "assets/js/10.a308d1ff.js",
    "revision": "0951cd07c74e71bd8ae6b9383999c4a4"
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
    "url": "assets/js/22.90ec6b94.js",
    "revision": "0c6ac8d345dfbdbdb4d7216222a7a678"
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
    "url": "assets/js/30.caefbb21.js",
    "revision": "6be722c70a37a0d37a4174bdcb9170e3"
  },
  {
    "url": "assets/js/31.0d38ea4f.js",
    "revision": "218935f89f66ac38ee24da3fb5352eca"
  },
  {
    "url": "assets/js/4.d42afa22.js",
    "revision": "e5161a637dc9b5248d363a89ee941758"
  },
  {
    "url": "assets/js/5.bccad0a9.js",
    "revision": "1dbc01f7267ed666a44b430ffc9665dc"
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
    "url": "assets/js/app.a3f22a93.js",
    "revision": "5c49cf65a238550f012ada788de90055"
  },
  {
    "url": "assets/js/vendors~docsearch.800b1046.js",
    "revision": "7b81ca399e6d24c867f37c9d580c3001"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "67a102be937dbec32d80941e02dd157c"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "56083658841c73c7a504354a0483b5c2"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "3167a8c617b42d7c33ad645d2346eddf"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "9c5cbb97ba09e9b8570383a7abdc3bf9"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "d145c74bc1c2be5e6da556afbe84ff50"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "8ac66742e481287dd2a098e97bebd97e"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "787e6d9519f85f9317e357636bf55c3b"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "7601bc8e50ae9cc5f4c9f426c99dd80d"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "e12ef69b488ee12784f9c555dac0901f"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "1d5f3115cc84bfafa13c5259fe649e06"
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
    "revision": "2a6154971f9a7509a896eb8f4fdbb543"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "a112171cbef9b347d82d7a40fadf3648"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "fdb77142f4970080e6ebf9bce5318eb2"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "0b2dc19a548a6914a899037e7fdc3fe1"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "74b30fa0022dd1394d5e1c3be37729cd"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "d0b5606f40eeff2d07e8296063d5edcf"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "7019756976de1d9f64b98be8b6e6d158"
  },
  {
    "url": "resources/books.html",
    "revision": "d5b80aca85ab8b7c34018ce7f9d5e67e"
  },
  {
    "url": "resources/community.html",
    "revision": "6dc95eda10f5847eee12f6476b90cc60"
  },
  {
    "url": "resources/conferences.html",
    "revision": "a514eb12099ef45dbf8bf3b3e7b766fa"
  },
  {
    "url": "resources/examples.html",
    "revision": "16e95dda64d769e9429202ab2070365c"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "b8558846d4cf240272eb7dbbb6ba41b9"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "7b06fa886108d8c09a34d3637ca21515"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "12a4e03a5aa06442abec547a2d4cd422"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "9fed1d7eaa67ea19e88d0ac15890dac7"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "bcadc97baaacf88920979f9c079d1556"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "39f14e70a6f2a93e3cee4dd213bad7a7"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "9646c5a94bc7a5b42ec2ce7a77d57d84"
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
