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
    "revision": "c22be1a4826b22a0899b2c7ff5f681cf"
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
    "url": "assets/js/10.11c7af41.js",
    "revision": "59e67bc18d2be687683d4a8597b7412a"
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
    "url": "assets/js/13.63ec6577.js",
    "revision": "20a7e8c42c5130850c6bed757e2e3caa"
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
    "url": "assets/js/16.347fdc7f.js",
    "revision": "0112357889e408fc73091d00a7364c19"
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
    "url": "assets/js/6.037290a5.js",
    "revision": "663201549c0f57adcc8e6045d18f138c"
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
    "url": "assets/js/app.6d7851b0.js",
    "revision": "99df1f77ebec4c888ac809b45fe94a22"
  },
  {
    "url": "assets/js/vendors~docsearch.800b1046.js",
    "revision": "7b81ca399e6d24c867f37c9d580c3001"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "71c40b3dcdbab955a052e4ef05e05078"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "f9e07a70c40d1e97eff33f9f10b06a95"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "58b1ab1fab8f48594e2cd09502c39849"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "d51fb67a28ffe5e3c76387078b0abe20"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "b1b3a751e4078a744fac18a9166b18ce"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "1f2be64b39b7907bc9609ea45f3ba86d"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "b12d60b9f7547e1c9c7e46abf8651091"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "5446b5ee4f676bcf6c991f90046478e5"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "9679437c89333682c3f42216cf1641bb"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "6d52257701b872a84dea07f8638d8dd9"
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
    "revision": "066af5824abe854fe752e463e7a08433"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "ace03caca64cff6015ce287d9de0f691"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "69065845454c15f562d55d0e5017bc17"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "d922635e9e524ad1acc0ef4ea5ab7bcb"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "bcdf87710de3e1a02236354e74ee378e"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "d682f92b3cfe7281eb4b19bf4283e7ae"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "03dd1539e1d28e714b780683278112a2"
  },
  {
    "url": "resources/books.html",
    "revision": "c8be0989d4b3e424173aff2f29ba6953"
  },
  {
    "url": "resources/community.html",
    "revision": "aedb05f50295ed7cd666aa9c1bd2d743"
  },
  {
    "url": "resources/conferences.html",
    "revision": "e5b7860c5be4962ba18f3d328ea65070"
  },
  {
    "url": "resources/examples.html",
    "revision": "8202dc31baa01131e16f6da5a1b6cb52"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "6f43187f91e838adcb0d8a28dcd7f140"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "edcd74c1f0fad7513d04d41a6dfaaedb"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "a240a707950e1dc190695abf8053e72a"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "7aa8e4990d71c249a3cb5c38ffd58038"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "5da005791a0389f01900f927d1ca3bfa"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "113bc1ec8ec2ecf7da6ad207a2444eaf"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "29d6a90d0d46709da7a01853adaa9dc5"
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
