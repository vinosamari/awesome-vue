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
    "revision": "80b3f1c195ddab435903be28b12d9955"
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
    "url": "assets/js/10.fc825f35.js",
    "revision": "0322105c17b2ec96a2ac89ada5a29524"
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
    "url": "assets/js/5.85012145.js",
    "revision": "ab1c57722217bb4b7fecf742869ed657"
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
    "url": "assets/js/app.06ae846d.js",
    "revision": "6b8b4bab8a1cd5883e47e8a4a58b81a8"
  },
  {
    "url": "assets/js/vendors~docsearch.800b1046.js",
    "revision": "7b81ca399e6d24c867f37c9d580c3001"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "62def22cece40afd059df5a1e717b619"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "43b8f8dafeacbcbcf75761cf17efe225"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "3985fd9d0d37ab75de100cd083f643e3"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "ee0c84e9631042e1b26d81a48407a457"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "5dcbd1e654925f944dcfe8b1a3b72693"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "f5458e7dbbc32feb0b2d1c93238eff67"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "cec3fda8dcb17806d4d2cc9f1b33de88"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "620bec4b6557f3beb3b3c381f4b33dcb"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "b1becbbafbfe3d6773745186fdbfba94"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "74e1ffbeb9f5e0398102bf2d8877653e"
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
    "revision": "abfc5dd918c14af1b1842ac42831a0aa"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "118d0c9fe9aee531b0c042a3bd7a6c5b"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "859967b4f4ab3c308a2e997ffee7e5a3"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "2d8e6135086cbb9c028db3cf8386a6bf"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "a3b66dfb3037855609e26c897c732fa7"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "879e60ee0653d32a45dcd11b7d7b4343"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "43e49b60bb4f59927bf72ac000e958bb"
  },
  {
    "url": "resources/books.html",
    "revision": "357a986367af7b8d54f4bee7e83803dc"
  },
  {
    "url": "resources/community.html",
    "revision": "f93a37ebc1c14730312732ea799a52c8"
  },
  {
    "url": "resources/conferences.html",
    "revision": "ff28edccae5f7c0a0bfec4167979973c"
  },
  {
    "url": "resources/examples.html",
    "revision": "869a423d2872e0682480e7f726974cd7"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "d0df34f2c4c36b27b53ebec46d381eda"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "cf1feda3abc7b0906bba177a4b223fd3"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "63713887c3fea4b4443589169d3a8709"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "9eb5d9b719b044db51f4e2445187de3d"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "ac6fa1ad51ebbbc4f89c2084c9d9346e"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "58965c11d06ff1856db2368193d70fb2"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "285a22e422afdd880ef61d1f625f93ec"
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
