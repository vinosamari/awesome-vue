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
    "revision": "c6613ecfae6471931e1c5916af9a4bf0"
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
    "url": "assets/js/10.24acd96c.js",
    "revision": "4e351f1e4a35fa7b4fd14fcc51a74ec6"
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
    "url": "assets/js/app.0daed685.js",
    "revision": "71a108ba947a6f4f54ccc14b2e569c68"
  },
  {
    "url": "assets/js/vendors~docsearch.800b1046.js",
    "revision": "7b81ca399e6d24c867f37c9d580c3001"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "db27aa3f5fd848960f51c012861f9244"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "8c439fe2f6c588f5794d836b97f07eb4"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "3c2cc6f81c765a82585d9901b717ab69"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "23796da5d7e22fd69fb1af12980c951d"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "fd3cb422de7bb6866d70d2d426ac020b"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "5f50e0769858d11e14e48d9ea5cb16b3"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "2029804305971ec19f3d5bb9eadf5e3a"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "66ea5f36c1f68e3da41612215621c1c2"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "3396064eee0a1e2a032c2bd99125b2a8"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "879a1a4164dfcb2aa29450ae65a95ed8"
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
    "revision": "8042f2c551594a4d6319c1e1afd9f51c"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "5d13c7aa0ccbc89ae99b2b8aa25ae50c"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "4b065ebc7fc30a5026ece9ad63bd90f9"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "0d26ac628fcbe040137b45e145d49495"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "fe3e2288c6335d9578fe43eab6e2b94d"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "dd1474a305fc05e7cb2c8f6ff4328136"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "a8f28fe00e3f20a2e1da3e5c80e052dd"
  },
  {
    "url": "resources/books.html",
    "revision": "c1907ef8a708a0b767a9bcfc33324837"
  },
  {
    "url": "resources/community.html",
    "revision": "5f2ac531e30a92f5c09b3110a5bb347e"
  },
  {
    "url": "resources/conferences.html",
    "revision": "29a5865b44b51575531d0105665fc293"
  },
  {
    "url": "resources/examples.html",
    "revision": "ebe0c0891491a542ac3cc175c9f50043"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "8de81badbf0839f53d23f10ee402bb09"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "1fe674b2b1ffc6b19b579733bd9ba8a0"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "9dc6e2eb21f402a5b103143273fc3b75"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "614d92d86ee0caebeb39fd4071159307"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "391e3b7c3dd89cab64ee8cbcf0e3a5c2"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "8669b146cd5583b758d0f56aa44fcef7"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "b626a14ffcd0f157274a01c808b7c3d8"
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
