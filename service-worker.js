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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5385d6a2ac1da0175b8a6a8528850b9a"
  },
  {
    "url": "assets/css/0.styles.521f9818.css",
    "revision": "dfdabec112fdbd5878bcb9ca7224f637"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bcafafe3.js",
    "revision": "c7952d62efefea8d11a98307ff0a3ce1"
  },
  {
    "url": "assets/js/11.3b430b7b.js",
    "revision": "72dfdacb4ab88bf2f6daaf13bda99461"
  },
  {
    "url": "assets/js/12.a802ab45.js",
    "revision": "400614ffbc3b586392b9b770bcd9c2b9"
  },
  {
    "url": "assets/js/13.6de6743c.js",
    "revision": "3d5f537a7949dd2f132b1fe73c580dca"
  },
  {
    "url": "assets/js/14.4b533c91.js",
    "revision": "89ca3ef7a89c77685af194fbc1b77e6a"
  },
  {
    "url": "assets/js/15.dc052023.js",
    "revision": "caa6058890a18423956ad528eca7970d"
  },
  {
    "url": "assets/js/16.3d425ad7.js",
    "revision": "b91431a36f7d0bd14d9544ccc955d69b"
  },
  {
    "url": "assets/js/17.16ecc9d6.js",
    "revision": "6b87a333fcee81b3bd18d6dac383e234"
  },
  {
    "url": "assets/js/18.c1dd68ad.js",
    "revision": "23ea00e665da5516c9f4c15d658254fe"
  },
  {
    "url": "assets/js/19.daeb7789.js",
    "revision": "c56623d6b49d150b15cef403463aa1fb"
  },
  {
    "url": "assets/js/20.f8f1f8a1.js",
    "revision": "63e40d93e2d0395e8bb89e5f0eca2924"
  },
  {
    "url": "assets/js/21.a058b5df.js",
    "revision": "6a8ae145883f8accc9e2203f6a66f1b0"
  },
  {
    "url": "assets/js/22.7f876be9.js",
    "revision": "73eb15a6f961b0d00e22f4a6de2fe2f5"
  },
  {
    "url": "assets/js/23.b3ceafe1.js",
    "revision": "1e6ee3c9599ec954abb47c1bd3675281"
  },
  {
    "url": "assets/js/24.5cd59c6e.js",
    "revision": "9ea921cd0a32d193b9f085dac1dc16ef"
  },
  {
    "url": "assets/js/25.f9e42ed3.js",
    "revision": "b81f139f6b251347c5b358e6e4c947ab"
  },
  {
    "url": "assets/js/26.47d2a4af.js",
    "revision": "8c8640c300ca0f9351364b1252633f58"
  },
  {
    "url": "assets/js/27.d3b9e8d5.js",
    "revision": "5dc1343de73d8261815d303528aebd39"
  },
  {
    "url": "assets/js/28.ef2aacc2.js",
    "revision": "1150dc49f951609f1528e489079143b5"
  },
  {
    "url": "assets/js/29.6d88e456.js",
    "revision": "4e0034521dcadf68af19108aa919cae5"
  },
  {
    "url": "assets/js/3.73fcae93.js",
    "revision": "03b56acc16debd4a353169da1c553cca"
  },
  {
    "url": "assets/js/30.eb5c50ff.js",
    "revision": "f6091ab9bf0974040fb523ee6b90ac5c"
  },
  {
    "url": "assets/js/31.1126bc77.js",
    "revision": "a914e73929d4e63082767dbdb0274cef"
  },
  {
    "url": "assets/js/32.4a9359af.js",
    "revision": "c90e57ae267c78f7e1711b9bf6249034"
  },
  {
    "url": "assets/js/33.bea4cb75.js",
    "revision": "1b088a45f0703c5a012d2da01264db14"
  },
  {
    "url": "assets/js/34.c1cc06d4.js",
    "revision": "d5dd3adb8ca4648738f85b4395c27fd7"
  },
  {
    "url": "assets/js/35.8e6e9b59.js",
    "revision": "f658f6c0cb27c22bfefc830f5a02bcf5"
  },
  {
    "url": "assets/js/36.cc8786d1.js",
    "revision": "7aafd4524d881a29c5c60444d7c45457"
  },
  {
    "url": "assets/js/4.792630df.js",
    "revision": "26a18028b55bbd64596a544faf89b010"
  },
  {
    "url": "assets/js/5.aba52061.js",
    "revision": "7c144907b43efa3ae57e0e0d92055462"
  },
  {
    "url": "assets/js/6.1bac72b5.js",
    "revision": "7e75b5c0445dbd878cc265d4e0ac2e3c"
  },
  {
    "url": "assets/js/7.2f0769e3.js",
    "revision": "c045fec3772a49a3a8c93d46dc2e3c3a"
  },
  {
    "url": "assets/js/8.129807c2.js",
    "revision": "8b0ece55f7b4c17d5e4dedba1566ee41"
  },
  {
    "url": "assets/js/9.c619b924.js",
    "revision": "c0f02948574b016286c7e6a713f19991"
  },
  {
    "url": "assets/js/app.b3f295fb.js",
    "revision": "5023a92cf5ab3c6396df3f59666875fb"
  },
  {
    "url": "assets/js/vendors~docsearch.c609d121.js",
    "revision": "02bd7b68139dde7aa8df15ec0c3c8aa8"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "c07d15511d989d55edd70278482bcdc3"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "cc015c496da6516af22254c93bbad743"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "34db1b34494571572b92cc7856a55fe4"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "4ecab24a2f7a6eaa15e060968eb89fc0"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "50e8147d580e1eee6e040b1e84e4c810"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "8c7f32af5a8a89926f40938108c6b1bb"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "dba66d00b6e8c285f57b55b8ec27c461"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "292500dfad95c616eb55b234dbe13ea3"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "7b0d1671e0846d951ed8af7c044d555d"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "86f3ac7b84570928bcce86f400b812dc"
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
    "revision": "a24afd5dec9763e6045c0ed91f6482e3"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "9ae7801018a59092c20496c7820f9d36"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "db21197dbfbb0f1d47a53c064247d4ce"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "de3da5a71129fad8907f092de31fc18d"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "8494ee84071d5b4a4b93b0ece2828a05"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "18a70b49e2d565afb1f09e329d38adde"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "93af3fdbaa761d69565eb09094501abd"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "34ee034c0eaf43a923f4acb7909dc29d"
  },
  {
    "url": "resources/books.html",
    "revision": "db35511fdd2110b88f6e912e96bf0f1f"
  },
  {
    "url": "resources/community.html",
    "revision": "1d2fcd01bffc74308d3508cb9e2494fb"
  },
  {
    "url": "resources/conferences.html",
    "revision": "dd568b709192a59e1add563496bfe7b8"
  },
  {
    "url": "resources/examples.html",
    "revision": "358fe3aec024ae16a5c0a7bd0bd43aaa"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "e32484ce58a30cea86be8b62a99ae64c"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "7cf9760cdd742324cadd8c1a7d6ec13e"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "89173b12a9e1980c03a9be913d893e93"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "049443f96d4760a55a2a32107df8ff9d"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "235def71aea3a0b6db68ea54cd8c74da"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "e3601192425506aeb37bfe017f6de378"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "4f2dbb20b67f08555e1dfa005bc18b0a"
  }
].concat(self.__precacheManifest || []);
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
