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
    "revision": "ecbaedf5b696b7e81b03489b3a3aa336"
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
    "url": "assets/js/10.260b9a44.js",
    "revision": "68b1f0e5b4dedc6177d6d8c1fe8caf75"
  },
  {
    "url": "assets/js/11.3b430b7b.js",
    "revision": "72dfdacb4ab88bf2f6daaf13bda99461"
  },
  {
    "url": "assets/js/12.44fe6e3d.js",
    "revision": "a98a7d2322677de1353442f6a097ea00"
  },
  {
    "url": "assets/js/13.5fd3d68b.js",
    "revision": "6ee24b52d3053ec232c18931f2cd9b92"
  },
  {
    "url": "assets/js/14.6941b0e7.js",
    "revision": "563a38b5b686d781472f7061b79b36cf"
  },
  {
    "url": "assets/js/15.a40347c2.js",
    "revision": "caf5d7c08a07624c0b47c4c673ff7f91"
  },
  {
    "url": "assets/js/16.54f6f298.js",
    "revision": "50665d5e81418eaa374a88ee61d79d3d"
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
    "url": "assets/js/19.f6a8fa47.js",
    "revision": "60adb5de996f1cf882b03a90307b8115"
  },
  {
    "url": "assets/js/20.8dc76710.js",
    "revision": "021459067ddcb7c98cc9906f32688132"
  },
  {
    "url": "assets/js/21.403f5259.js",
    "revision": "b067f9f41f860255f8f3e209ec85e71e"
  },
  {
    "url": "assets/js/22.7f876be9.js",
    "revision": "73eb15a6f961b0d00e22f4a6de2fe2f5"
  },
  {
    "url": "assets/js/23.5bf43ddb.js",
    "revision": "d9e58edb467bf1476d00e5706e96a1b6"
  },
  {
    "url": "assets/js/24.dcaa1d1d.js",
    "revision": "585b279ab847f24c48433b56f7f2356d"
  },
  {
    "url": "assets/js/25.16da834c.js",
    "revision": "a233c47fe2398ea38b48d55140f3fcf8"
  },
  {
    "url": "assets/js/26.47d2a4af.js",
    "revision": "8c8640c300ca0f9351364b1252633f58"
  },
  {
    "url": "assets/js/27.75ff838c.js",
    "revision": "06e0305cd333e58b76ad220644ac30d7"
  },
  {
    "url": "assets/js/28.da9ff9ac.js",
    "revision": "dc4ba0ab867e4c0778318ef61474a373"
  },
  {
    "url": "assets/js/29.6d64eca1.js",
    "revision": "a66ddaac19fbe56c47e55a4388867222"
  },
  {
    "url": "assets/js/3.73fcae93.js",
    "revision": "03b56acc16debd4a353169da1c553cca"
  },
  {
    "url": "assets/js/30.96c3f149.js",
    "revision": "2540099479392ff7f9191bb78a409e38"
  },
  {
    "url": "assets/js/31.52c11f84.js",
    "revision": "cb57bb9fdb026b9ec6822a7574ced2d0"
  },
  {
    "url": "assets/js/32.9b0ee6a2.js",
    "revision": "483c71e37c34114b957a66705a007ac6"
  },
  {
    "url": "assets/js/33.e79942ea.js",
    "revision": "781dbcd4156a981441be7648aa832183"
  },
  {
    "url": "assets/js/34.8d3a5728.js",
    "revision": "1acb8fd1a7ada8e77cdba99c5f13b5a9"
  },
  {
    "url": "assets/js/35.fd263bca.js",
    "revision": "56c0d568d73271ecf93b132460b373ee"
  },
  {
    "url": "assets/js/36.1964ab67.js",
    "revision": "132532f4377822449a07142f1ba4b8ae"
  },
  {
    "url": "assets/js/37.027863c6.js",
    "revision": "04c87713ff483dacb3fcaa1192cef97b"
  },
  {
    "url": "assets/js/38.ddc7beb2.js",
    "revision": "a5ef3b807b7c14ac4e80b3035c24abb2"
  },
  {
    "url": "assets/js/4.792630df.js",
    "revision": "26a18028b55bbd64596a544faf89b010"
  },
  {
    "url": "assets/js/5.2642d68d.js",
    "revision": "47a1b5894d0b7d6fbf28889400b807ed"
  },
  {
    "url": "assets/js/6.1bac72b5.js",
    "revision": "7e75b5c0445dbd878cc265d4e0ac2e3c"
  },
  {
    "url": "assets/js/7.99ad53fb.js",
    "revision": "70828a70a8628c5508de18537231559b"
  },
  {
    "url": "assets/js/8.2edc9da3.js",
    "revision": "07b65268ed7d9b93c7ce1664a733dccb"
  },
  {
    "url": "assets/js/9.931b3b58.js",
    "revision": "ffa21f23c3ff6ddb33258d388706b7a7"
  },
  {
    "url": "assets/js/app.c8ca4cb9.js",
    "revision": "9a4501937a69b655e96374adbf04df16"
  },
  {
    "url": "assets/js/vendors~docsearch.c609d121.js",
    "revision": "02bd7b68139dde7aa8df15ec0c3c8aa8"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "cec68d7a54acf3500ceb5c73966451d7"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "88d3f541ed748206f2475a0db952ff09"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "320fc3e43c47f086186f010c32a20fb8"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "80cf2f7bbb85d4a869e7550066290d87"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "f74c3d14e16811827f11ad361c35e39b"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "041c8ffa688948f4ed82f3ccef2ca658"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "91704427fb646f3dcc5ed0936dfceec5"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "7e1a7d4485f25e3ec8a94391c3005725"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "96cd5caa4c2a1cd0dbf003856e8bfb49"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "6003859817b99c20e74012edd7461d42"
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
    "revision": "db93e25ee325ff624c06beee2ba2dcf0"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "0ce814be8dbfa96ffe5a7c510df6ce3e"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "ea95b9fbac4320a87eea263c58bbd85c"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "823310b54b1fbabe26231b28424ac282"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "20ca589830bf052d76d7664125589cee"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "517b59be3d574544eff37d05f3bb7a03"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "ab0027378ec7a6ffd6433d301ce5a60d"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "417c89dd5738086cdc195fdcc340c0e2"
  },
  {
    "url": "resources/books.html",
    "revision": "1fe4d1c69086f56b9b2c61f4045adaad"
  },
  {
    "url": "resources/community.html",
    "revision": "cb9a086cb07d61430d2719157b5af739"
  },
  {
    "url": "resources/conferences.html",
    "revision": "89a62235f04726102ee0cbc24b008a6b"
  },
  {
    "url": "resources/courses.html",
    "revision": "84cd63bd9b72ebd665d93a0ea1d23b11"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "e446baaaede1f5b4870fa29b4d7f8ca1"
  },
  {
    "url": "resources/examples.html",
    "revision": "c6d975bbac5a672d57db9cd780278b66"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "7e1795b039a957c85fbc3a58633989e1"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "842f31163d284bf13b3d2ce5b8206ae0"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "df733790543132777a4550b2d484e3d3"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "34281ba992bf7870f967021729227c22"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "b3fe0bf09a128643a89c5deee040d256"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "7338be5119f299730a0a52e55e4e1e25"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "07a666a8dc6246fec9997d00d00df0a9"
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
