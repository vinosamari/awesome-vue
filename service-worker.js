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
    "revision": "efc4dba07f65ec7bf4e3c6476b9c229c"
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
    "url": "assets/js/10.2845ac0e.js",
    "revision": "fe6546fc2f3a3a339e41efa8a9a61ada"
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
    "url": "assets/js/6.fa7f1d70.js",
    "revision": "660a1476ffb7d53c9a57d469aca47760"
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
    "url": "assets/js/app.01296287.js",
    "revision": "52e043579ef8ec5a17ed7f40ac200c95"
  },
  {
    "url": "assets/js/vendors~docsearch.800b1046.js",
    "revision": "7b81ca399e6d24c867f37c9d580c3001"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "23e4ff0c6997a9974b9b4231906b909e"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "708a1d5625ab828dee1457a526d3b422"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "4a6f6d210300fccc0fc7b7e23cf6fcea"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "58a2502e3d2bb62356a3cc5d47832965"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "fd0fea6b2a36f908f7a0c05c0b89c1f4"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "0cbdbf05aad81ddeba906ad39224ebf7"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "f02a752b59e6cb8f7095bae9b8b6e091"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "9c3e16886a329c0aeb60ffd74931dc86"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "08c16b968675c5f5a722c77ed758804a"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "2a9c9dcfb6de83e8d3f5fd5d9779f9d3"
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
    "revision": "f3f704bf812fcd64a8dc3cad61f089e6"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "a8515ded0bc261837e58d75ec23bbfde"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "fa38292fff8f3977735301c92deec2b6"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "e5d3f02fc266b1e394a7857f337f18e4"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "5bf356025ded6231f75ea5dc31567d23"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "61215c3990ed162c90c063130dcf8023"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "58bdf0fbc373753a048b1778193f3178"
  },
  {
    "url": "resources/books.html",
    "revision": "f92ad66ab803bfd98e5831711b771b39"
  },
  {
    "url": "resources/community.html",
    "revision": "ca2a8e0d97db37a5e3ac8f209e8bef73"
  },
  {
    "url": "resources/conferences.html",
    "revision": "068bf9d538ecbb41d5e7fcf4017a734b"
  },
  {
    "url": "resources/examples.html",
    "revision": "7fbed011858505c4bbe2a8462146f445"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "fcb02af919e660e0b14933a80284b317"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "457cc947ea2c0bbdb41da3f15f06968e"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "32ea353190963207336bde9ca72822e5"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "597d591625ce12c838a1c51442e4f50d"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "76b7c2e43939623e17eef1738176fc7f"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "9dcd1833ae8c245f1f1ca7101fff958a"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "800ef13b1cde75666c16692f4ef9aefc"
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
