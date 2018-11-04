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
    "revision": "bfab508161631d7c5f83108ccca95d7a"
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
    "url": "assets/js/10.000611be.js",
    "revision": "58c51aa04f2cf015980615de61d1bf83"
  },
  {
    "url": "assets/js/11.e3587e3d.js",
    "revision": "080f56e7b951700ed5cc3f9af9649a12"
  },
  {
    "url": "assets/js/12.8ba6e8d6.js",
    "revision": "2901bf5611a833d0abb11972f80b0916"
  },
  {
    "url": "assets/js/13.2025ce78.js",
    "revision": "3e183aa3d604ff70bb47711bd0a6ebfe"
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
    "url": "assets/js/16.4d9405dc.js",
    "revision": "78987c6a9030b0a4ad1c9a522e670075"
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
    "url": "assets/js/21.335d386f.js",
    "revision": "e928aa71953350a8ed6ff50192d71863"
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
    "url": "assets/js/5.930de28c.js",
    "revision": "69622800475b6311acda3b16bc939e88"
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
    "url": "assets/js/app.40eeebc3.js",
    "revision": "1649c5c7d8237c5ddb673a81bc448d0e"
  },
  {
    "url": "assets/js/vendors~docsearch.800b1046.js",
    "revision": "7b81ca399e6d24c867f37c9d580c3001"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "dd587da8965a5056c4437139f27f055f"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "957a39ca4129237d1d3baafe37f55040"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "36281685d3e27c0e6ac4a842fea3f56c"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "218b8ed28fa6db8456fed637a44c971c"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "dbac8f95291993aee3a9e6b9d2f582d5"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "06dac2dc40a6b24b420f446415268902"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "1ce3da9e2bc10aaf2c726f8ade80c7f3"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "de2efc0b56f4b1fa463602a76c912dc6"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "2e3ae5667a38dbf6bcaa7c5c93c678d8"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "710c60d26cda13058dfcbeb350894eb9"
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
    "revision": "874cf8c82bfe24c0ba83d88fbdb2ed75"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "0495790e95d4b4c7922d39a4d204233b"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "b49b9d081bde39199eb48402c245dc31"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "b37abf8a95f7b5facf80c5ab06dc2235"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "29d9afc3eabdbcd1be56d94bed579061"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "38fc2fd7bef9643c3b7adde5b90501b2"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "20a4b883d6d83c36b12c336ee6599cd8"
  },
  {
    "url": "resources/books.html",
    "revision": "bf72cb29d8d7e2b14a623a0166fb5143"
  },
  {
    "url": "resources/community.html",
    "revision": "5b81be164e1145ceac7178a1e3baebbb"
  },
  {
    "url": "resources/conferences.html",
    "revision": "555a8a0c15677ad53726c6633c058f78"
  },
  {
    "url": "resources/examples.html",
    "revision": "940241725775004eb431dab790b29c61"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "2308e6f9169b1a9cb3e530427625fc90"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "ecf8853b0af95bd1852200088c6a8423"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "07375766d3a6b0f97722a51e1babfeff"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "80513ead608e9e86a512280e023054c6"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "a18ea99ed9f3fb190af161d9996dc4cf"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "b6e2adbaf2295008fe87166436395148"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "60b41e51f461d6b6eef1947b2a4e574a"
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
