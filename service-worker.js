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
    "revision": "a0a88003988e56ddb513ec9bcde9d22a"
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
    "url": "assets/js/10.e625c51a.js",
    "revision": "33e91396a7ed53377e222520ddad5622"
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
    "url": "assets/js/20.2fe39468.js",
    "revision": "9fb554062c26a61d49da5ff2801362c1"
  },
  {
    "url": "assets/js/21.02bb3a09.js",
    "revision": "8d165ea3540aba0d6a2c99c47194e7c0"
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
    "url": "assets/js/24.bd1ff93c.js",
    "revision": "40937d6dcdbf2869ddadc45452993828"
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
    "url": "assets/js/6.67e0a18d.js",
    "revision": "3ac30e215511f66b51da01ce0bd5f6d0"
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
    "url": "assets/js/app.704e4819.js",
    "revision": "105f65025cb917b9aeacedc6414082da"
  },
  {
    "url": "assets/js/vendors~docsearch.800b1046.js",
    "revision": "7b81ca399e6d24c867f37c9d580c3001"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "ea6fc95d4f8d036873fc73b902b9b4a1"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "65d6f82b4629b088179f029d09d45ae6"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "625c000ac4687d0def5cf444239eda25"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "0ba8359cf86d43069c3270e591df4fc7"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "f1079a30829272838130e7a905359ff8"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "87fd971177275806259a451f767c4834"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "4c79e61ba577bb5dbd6481d9c96871d1"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "e96e980f5cc8407816dd888da21381a7"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "b3bdc7a26e96defe045d12678bba6933"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "7a9d04c829dd0c0173c3329996ab757c"
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
    "revision": "be4d7e9d769c67c75f70e483c3dac585"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "48c135e4a508f314cd48f53677e61bc8"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "0b200cc90d99c61460d407ae764273a3"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "bd7e2c290424025b789c943aa48215c0"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "e214c7e0fd6cdda18e692ef122fa06ca"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "3ef51be1757e1e86ab4502174922a1cd"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "f6cc6c848131ff0ff698c01eb80d2365"
  },
  {
    "url": "resources/books.html",
    "revision": "f74eb29c9be6c0eb2a85c226cf09ccb7"
  },
  {
    "url": "resources/community.html",
    "revision": "3964a0b0d4faed7dd726cb214f33f413"
  },
  {
    "url": "resources/conferences.html",
    "revision": "b625a0fe345e8b601aa5584a08e74aee"
  },
  {
    "url": "resources/examples.html",
    "revision": "3d99ee6d3df826a4e3ebaceaa7f7c769"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "7e1bba42caf89abdb74d1ad19505fdeb"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "2401b590ed69315077c3460530626386"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "411e1398c8dad6c8f62e5bbcbf090eb8"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "32cc95734e25da6a8082b9a9947689c1"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "0659ee9e6a20ded9d712998cdd457cfa"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "f54cddd1a3756e80a6024d0f441fc2b4"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "5c2cb058a6aba27d3a2adb0c38f6dbd4"
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
