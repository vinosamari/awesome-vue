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
    "revision": "cc2652aa46661401939b22b42c40b77c"
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
    "url": "assets/js/app.42bf99c5.js",
    "revision": "8719248f81f26534493ec3dc1518a80b"
  },
  {
    "url": "assets/js/vendors~docsearch.800b1046.js",
    "revision": "7b81ca399e6d24c867f37c9d580c3001"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "b60c0e188d1d08a236c0b1dbe6578004"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "849f9d1346476ba0b874aa09f67fb96d"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "cde0081a53a0e9d6205d5f5b82f9396a"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "8235d9ed613b299ea51f39216dc29282"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "bfed7595b26836d60c5e39e217683d39"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "045f41b4314cd2c5af335d21954b1dcf"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "60e7cca914f834996847e1d81d323536"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "608dbd629a725569d80cf5b2078d1f17"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "804ad5112ab6b55a871671c37f055538"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "b2918201d9052d06726337dddc8a4161"
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
    "revision": "bc04fe6db3838330520dc895611f61b5"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "7b5ee098f375724c9795caf3945c7a53"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "09da0f0592fd977b040d471157d781a0"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "9b51029da9bb3e311f53fb77bcb5a394"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "ad142eecd983b655f8a3d0dc9bb8d51f"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "8e22084b5321612fb82527f23b7da1ff"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "c47a5892ef393034fabedbfed9278e61"
  },
  {
    "url": "resources/books.html",
    "revision": "fe9f430dc041d05ac691275450c625d2"
  },
  {
    "url": "resources/community.html",
    "revision": "e4d62c2840a6803b987eba1d90abeea7"
  },
  {
    "url": "resources/conferences.html",
    "revision": "59bf816a8809694c66710623019faa34"
  },
  {
    "url": "resources/examples.html",
    "revision": "5bfb08448c3988d8e4af40b3accce66c"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "896ad4b23e0b9b164bba7c2635f5f9b5"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "d7f6c9e95aa5d39dd4be537dbfcc199d"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "51dd4c4ec4a2fce71d084259e279f237"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "f3915bc2794ac675327060779223be48"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "43bfd530b1adf2e4d6b2f7dd0fec43e8"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "4bd19643004342052119fd5e13352b1b"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "1fec7911a4d39b5ba18498edf0b008a0"
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
