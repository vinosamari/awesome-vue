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
    "revision": "4f97a7b8d8333a662f6446bb3ab25293"
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
    "url": "assets/js/10.2a57ef50.js",
    "revision": "5f3dfda7cefee4d65cf993df028a9dec"
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
    "url": "assets/js/16.0a7d040b.js",
    "revision": "4660e846ffea6eeaffcd53044da0f3ee"
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
    "url": "assets/js/20.06773f1a.js",
    "revision": "29ac614eb57896b76283ced64b405956"
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
    "url": "assets/js/30.0796f2f2.js",
    "revision": "dec7238eec75ec5e3735c78b56295254"
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
    "url": "assets/js/6.b6297b09.js",
    "revision": "9863dcf81876694f04a25d877fa9028a"
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
    "url": "assets/js/app.3e9077b9.js",
    "revision": "0f6e6940d3cc3f0380398ea9e791c42c"
  },
  {
    "url": "assets/js/vendors~docsearch.800b1046.js",
    "revision": "7b81ca399e6d24c867f37c9d580c3001"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "bfddfdfaa3975ef6631dcce89310f143"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "5f81bc60045947f5ab123782d9ea34f1"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "b69c6f2115dce6a9981e22edcaefb332"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "44808c7d8343ef469cf8f7b56c01c683"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "b9553b0a060ad34cabdc720b724c6650"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "ec16d2982df6b46a5ffcbcbf656bf661"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "278fa0f468ccb2ae97f9f09e66fee00c"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "382daf57d97b19057fd9ce480fac4d3e"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "ada5ca8271b9bfbe40ecc09cf34e0af2"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "d7a44a501ac800df18264724b9faebe1"
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
    "revision": "2f963e31d6562e035786917780223be4"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "076e4dfceb2554d6bc02c0ba26dae278"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "c5699952236943c274bbfaa03571422e"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "02a42e9462ee7bae8353a447878a75ee"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "7e7ed4f8384418786c804d73283321bc"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "4531bdbb6c6c07af892daa0ec55bd6c0"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "50dc11b0aaec73f8988ae6291c20b15c"
  },
  {
    "url": "resources/books.html",
    "revision": "710b51fa1450cf1c07f6feb187ca16dc"
  },
  {
    "url": "resources/community.html",
    "revision": "03751395a1139d5ae15bd7d0140500bd"
  },
  {
    "url": "resources/conferences.html",
    "revision": "5de9524ac7e4486d2ebe3ffe817131c3"
  },
  {
    "url": "resources/examples.html",
    "revision": "1ba49970deed363c60e4e5c726c61f15"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "aec52ced37360f25f4e7eef76bec3256"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "90288ac38388631fa09264615f699782"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "46692e904f2054f2cbbf2d5871910318"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "6cde7c3fc1e0058a5892b178c151ed17"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "238412ef0f33109a6dbf061b25be94bf"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "eaed32fa415d8ba830c6f5c9ae5e109b"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "448a07f365b74e2ceb87c08758607800"
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
