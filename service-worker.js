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
    "revision": "0af8a82a8e8bcc1dc30e696dd6eda16c"
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
    "url": "assets/js/10.c089272c.js",
    "revision": "9c55dfe1eb51daf9b66611158e91f773"
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
    "url": "assets/js/13.db2bcd1a.js",
    "revision": "e035fff10e9b2fe64aa01ee72cf7f1ad"
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
    "url": "assets/js/21.3aae9dd8.js",
    "revision": "68937d787ccd4f9bce7223cebac83a4b"
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
    "url": "assets/js/24.01c6a9c8.js",
    "revision": "6476734447a5c4ae542f6b9303ba1af6"
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
    "url": "assets/js/30.5c3ee8a3.js",
    "revision": "34385a98654d286c17bf5f3a33b04630"
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
    "url": "assets/js/app.d5a1b810.js",
    "revision": "0628f3d50c4622195855931f53d45e15"
  },
  {
    "url": "assets/js/vendors~docsearch.800b1046.js",
    "revision": "7b81ca399e6d24c867f37c9d580c3001"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "02ca75b5e104a31d87e654ed11f531fc"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "df0a5bc95d3dc5b65a12add4754232d4"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "9d5c4b24a0b7f71d4b3d6e66c3d670fa"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "27e25d7344ee68304908907c7cd6532c"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "9ca94ed6936e55e544a2da8ef4bff84c"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "fbaad8cc0d70120e5a4d2e537cfbb35b"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "cdda38208f36b8cb589b8c9289788ba4"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "096e1a80503aaf525eae49cc7258bd88"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "011d842763009a70c219524f82d29b4c"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "d3d332d9c051142a534e541f14ff9700"
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
    "revision": "ebdd255aa08a5d3bf83649511c247d71"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "6f414f1ce8b729ad2a38e21325ac0be0"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "24b71309892d52a1f4854024188f6982"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "5f7c99783fcd9206d25367fd522006f6"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "7406c1742a38ce5f2ec0b7588512131d"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "fea9ddb160ed51634e464e13f5ae5ec9"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "1f80a9ed59407abd70513118b8ab44b1"
  },
  {
    "url": "resources/books.html",
    "revision": "364934eae3b2f7d9e17e66dd65e045c4"
  },
  {
    "url": "resources/community.html",
    "revision": "50497bb2361e165fb516c6053e171190"
  },
  {
    "url": "resources/conferences.html",
    "revision": "6f1d559c75c23e9ac59b9b680b298d62"
  },
  {
    "url": "resources/examples.html",
    "revision": "b895310333bc9282275990bebb0d3810"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "1d7b6cde0898ad0b022c8b1085c2c72f"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "151d57a558317d4a3f6a26678ad5d7ff"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "d9616bfddb03879ba7198704785141cf"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "98ce3c0eb752c57e6f491d24c1a75eb5"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "027061600f5231a452aceb83d5d8cbd4"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "0ed1184ddd48e1b3ae2ffc4c79de1e1a"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "638a12fe69ed7dc062b0f9a0f2a2b47e"
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
