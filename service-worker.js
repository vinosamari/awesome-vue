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
    "revision": "5b749380d478eae839719eb73e6e6048"
  },
  {
    "url": "assets/css/0.styles.df7d355e.css",
    "revision": "964417c6713863b0f454c1557c183483"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e92b6f26.js",
    "revision": "12f69dec52c9fd07c19d9d6f51a6ed27"
  },
  {
    "url": "assets/js/11.6903938d.js",
    "revision": "06cd7506dc596bb11a48c9388d33e6cd"
  },
  {
    "url": "assets/js/12.c8453c28.js",
    "revision": "e2d0185d4161ae82d53b479dbe4e3fda"
  },
  {
    "url": "assets/js/13.4f8f1798.js",
    "revision": "f94f03a772b1fd010d4e5deed3551b03"
  },
  {
    "url": "assets/js/14.a01028b0.js",
    "revision": "983aae3e6df80f318bef8cecf984818b"
  },
  {
    "url": "assets/js/15.c625276f.js",
    "revision": "3ebc4ba97db4e337bff220c3bc4f4724"
  },
  {
    "url": "assets/js/16.f2ca81da.js",
    "revision": "417d41aeb30d1ab07b99bd9433af0dfa"
  },
  {
    "url": "assets/js/17.1e835028.js",
    "revision": "b9f54301363d0189662d5d06988ffd59"
  },
  {
    "url": "assets/js/18.c5a377ac.js",
    "revision": "48099f27e3ae07492b398ec7eb9c96db"
  },
  {
    "url": "assets/js/19.850bee9b.js",
    "revision": "c313976ba357f1b5024acf3f941e839d"
  },
  {
    "url": "assets/js/20.ac8ad572.js",
    "revision": "bcf080b8a2c284ff8e15adca40e69026"
  },
  {
    "url": "assets/js/21.26d579ff.js",
    "revision": "c8c450f1afd4b64e948075e0368e1cb8"
  },
  {
    "url": "assets/js/22.6249b93a.js",
    "revision": "42dcd345dbad914614c520a57ee2c99d"
  },
  {
    "url": "assets/js/23.562ba06b.js",
    "revision": "4b4bce8a28141b2d1d58a50262230e10"
  },
  {
    "url": "assets/js/24.d6c410cc.js",
    "revision": "82ec7e591f6f7a68820e77757758616a"
  },
  {
    "url": "assets/js/25.7b84eabd.js",
    "revision": "bddb166e593657e06e56a842b41bf800"
  },
  {
    "url": "assets/js/26.ffc1274d.js",
    "revision": "60f5b0ba29dd26b76d7ca56a7f3a489e"
  },
  {
    "url": "assets/js/27.fdd07940.js",
    "revision": "1ad6d3d7ab5c9da269ce3b801a645f18"
  },
  {
    "url": "assets/js/28.32870d20.js",
    "revision": "50e23befd9b3dd096a7d9d63787a50a2"
  },
  {
    "url": "assets/js/29.30783dfd.js",
    "revision": "0ac07dac8d53a0d6fdb87ce3c847ed0b"
  },
  {
    "url": "assets/js/3.3c4f81fa.js",
    "revision": "81ecbbdbf6e3551edcf4651090a34a41"
  },
  {
    "url": "assets/js/30.fbbc69ce.js",
    "revision": "5974799094d92e34affebe6e8229f1c7"
  },
  {
    "url": "assets/js/31.588ed58d.js",
    "revision": "3e508827a510f8bd19a5b179f4e7de66"
  },
  {
    "url": "assets/js/32.004f389c.js",
    "revision": "0a6dff6fcb975710a68528d3f6355081"
  },
  {
    "url": "assets/js/33.9fd13c72.js",
    "revision": "4743f8629355b91762650d858759cd8b"
  },
  {
    "url": "assets/js/34.a10795c6.js",
    "revision": "2948386e6dcc3bfd8c67e34ddf7feb24"
  },
  {
    "url": "assets/js/35.f3798df1.js",
    "revision": "8e71500176d8acf3ac44bd7b9543421d"
  },
  {
    "url": "assets/js/36.c169ed7b.js",
    "revision": "5ad5fe3ecfcb2372b6f5efbf74da813b"
  },
  {
    "url": "assets/js/4.3ef14f0a.js",
    "revision": "d50775f1a02e337ab61e5c110f259c6e"
  },
  {
    "url": "assets/js/5.4a0b4d7c.js",
    "revision": "77aed24fb12d9d205b29810c76fd0ea4"
  },
  {
    "url": "assets/js/6.f45d1a76.js",
    "revision": "ef52fa4c37cf6721547aaf764032b28d"
  },
  {
    "url": "assets/js/7.453d86f7.js",
    "revision": "eb7c745fbc24676cb86d036adabcd3f7"
  },
  {
    "url": "assets/js/8.22b7fbfa.js",
    "revision": "82781679e5b82a41cd082f478a175ee9"
  },
  {
    "url": "assets/js/9.3a4a54cb.js",
    "revision": "b0140675c5fb90ba4414ab4a13485ef5"
  },
  {
    "url": "assets/js/app.3b9d1faa.js",
    "revision": "c7e151016b0f190b019dd5f8f593268c"
  },
  {
    "url": "assets/js/vendors~docsearch.960e2738.js",
    "revision": "22c66d04b3add4e4e7985a7b41769d5f"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "757351f3552a5957453f1e2dfe54e90c"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "78bd9a4c2725f6d5817fb371c69996a1"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "ab591395af6534e1b3a1a8fff1f4109e"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "2e6b4c163f561e1e513b1b40779d936d"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "9f22f0f9904e7fc0e1423f36f8c41a20"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "07bbefd3ee75e3d28928728cc4e549f9"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "227beded4729348db6bca1f25f768ac5"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "03450b1a33ddef83f883a7448a7688dd"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "4350835f67f210b7604e262ae275e065"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "d9f604fcf8a45b51da6eeb93e6901e60"
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
    "revision": "6f86cdc82c71c0eb0400b848a7b613a3"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "e1dc050ced40776ace9b7f573dc17d17"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "334a55bd3582f9b09749a2f2cf4bcf94"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "91357920f8b26bf37fc69601e4c6a9d3"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "07d50b4907c1e29bd610c71188905925"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "1b390f25fa164478fba816e8a17bccb3"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "0419fd66cf65c2fd9153c21aa4f19c72"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "fade5c6a373d7f286d945f2ac9f1aa3e"
  },
  {
    "url": "resources/books.html",
    "revision": "5a3dde0444a32662b7aa8d533aacc667"
  },
  {
    "url": "resources/community.html",
    "revision": "7a047e202d1a1998efee6c1377e136e2"
  },
  {
    "url": "resources/conferences.html",
    "revision": "73875fbc955eefab9f68a2c0efba0c37"
  },
  {
    "url": "resources/examples.html",
    "revision": "9c540f6177c44e9287077171130efe7d"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "16f0bcf71286451cb88cf1e298d68d6d"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "98a93a6575522d666df8b695cff84f65"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "5c6b35eae7d3082af211f7e7a727c622"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "1882a0c8b03eb32f2582f73c9a1efcaa"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "721ff7f2e7b5c0a6fb274f84215db39d"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "eceac416fb5426f5afc036ce4179bf8e"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "7eb175914e5aedc7ae8dc7ca7c40ad78"
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
