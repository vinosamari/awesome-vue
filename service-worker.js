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
    "url": "assets/css/0.styles.436faf72.css",
    "revision": "09e11fa6a61b7eb6294f6f0417a93cb7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.722d24ef.js",
    "revision": "f15a1607b5731969c39f3ee8341f8c28"
  },
  {
    "url": "assets/js/11.b1c881f3.js",
    "revision": "807deff34ddd12c1b45f2358d2f34194"
  },
  {
    "url": "assets/js/12.cc5a0220.js",
    "revision": "0784501388e32ae6407f28a408d6d709"
  },
  {
    "url": "assets/js/13.6345a857.js",
    "revision": "a3bcb7f85b6ca2ef89712ef55c243583"
  },
  {
    "url": "assets/js/14.65c1f450.js",
    "revision": "3f1686460a600e0f4c8bdbe5dfee0cde"
  },
  {
    "url": "assets/js/15.73e5bbae.js",
    "revision": "fb5b790631eeccb7705d2e9708b9b498"
  },
  {
    "url": "assets/js/16.fb30b72d.js",
    "revision": "f5b858831afbf0ebcc12f8f481229d34"
  },
  {
    "url": "assets/js/17.ace2c018.js",
    "revision": "7fb84fd84645300ee83254c4fb61836a"
  },
  {
    "url": "assets/js/18.d3004f74.js",
    "revision": "8e0d1f03e85e700b9e634a4cd6493b1d"
  },
  {
    "url": "assets/js/19.c5d24c63.js",
    "revision": "eb41638fe8cbd5c0f4dd19a218e349ec"
  },
  {
    "url": "assets/js/20.2633edac.js",
    "revision": "027e6d771be362ef21de4c9299648707"
  },
  {
    "url": "assets/js/21.581a18e6.js",
    "revision": "56d2ce7aed1fc2b50453d09428d0e7f0"
  },
  {
    "url": "assets/js/22.d4ab2172.js",
    "revision": "1b51115460564a1f0e512ddc30a47d8d"
  },
  {
    "url": "assets/js/23.64d129c4.js",
    "revision": "aba406f96dbfc142037a9d88d5beb665"
  },
  {
    "url": "assets/js/24.59f93c9c.js",
    "revision": "b31e41c3ca8d94f12f3ad63fcdfa6fba"
  },
  {
    "url": "assets/js/25.31e64e1c.js",
    "revision": "92c20245148f580d8fea7264aac8b4b5"
  },
  {
    "url": "assets/js/26.a4b07800.js",
    "revision": "61e0c00c566a656a2b442265768bd7ef"
  },
  {
    "url": "assets/js/27.000ca510.js",
    "revision": "550ab92182cc769e997b8891b2753fe4"
  },
  {
    "url": "assets/js/28.c234520f.js",
    "revision": "a28f979a73646dffee2cc9d3db81819e"
  },
  {
    "url": "assets/js/29.829692a1.js",
    "revision": "ba9856f29d965bf6dab5f9853408b8eb"
  },
  {
    "url": "assets/js/3.4d649191.js",
    "revision": "78751c2dcca2b99172ca8f8318d2d958"
  },
  {
    "url": "assets/js/30.228790d4.js",
    "revision": "9dab79fff1071eb886340469e0b75011"
  },
  {
    "url": "assets/js/31.469dd5ae.js",
    "revision": "85ccdfeaffbebe6c086b2727c06b33de"
  },
  {
    "url": "assets/js/32.4bc7f1d7.js",
    "revision": "7a300cf3cb56416ba4326d0587654e70"
  },
  {
    "url": "assets/js/33.e92343ae.js",
    "revision": "3dce2573e471fd7a65d5e88d02b00617"
  },
  {
    "url": "assets/js/34.ee32fb74.js",
    "revision": "1c4a8e5c147684f4911dd5bee372d4f6"
  },
  {
    "url": "assets/js/35.eea7b551.js",
    "revision": "322f381f00b6b30ba8b76c571c09ba29"
  },
  {
    "url": "assets/js/36.c7e478ff.js",
    "revision": "45eb8c0d0abd9c33759bf50cd2b55103"
  },
  {
    "url": "assets/js/37.fc8f9b9e.js",
    "revision": "3dfa6c910139f12788b045f7a1be8902"
  },
  {
    "url": "assets/js/38.76056c20.js",
    "revision": "a5ef3b807b7c14ac4e80b3035c24abb2"
  },
  {
    "url": "assets/js/39.0bfb5e54.js",
    "revision": "324048726bde97ecc81b9b6c20ee8023"
  },
  {
    "url": "assets/js/4.908c1a64.js",
    "revision": "eee6245d1294d46021712dfd46cc25bf"
  },
  {
    "url": "assets/js/5.0cdd0de4.js",
    "revision": "ef2ff63c015a77245d66f75437abe6e8"
  },
  {
    "url": "assets/js/6.9865bf00.js",
    "revision": "9004722f744a4a885c3aeee545ae9922"
  },
  {
    "url": "assets/js/7.a7f16fd6.js",
    "revision": "9763b75cc4d6da4eb2ef520123479f79"
  },
  {
    "url": "assets/js/8.9fed7661.js",
    "revision": "23fc17e7ad62bfda84612cee61b98ab5"
  },
  {
    "url": "assets/js/9.892884ab.js",
    "revision": "0333ab4b5b22fd76b9ab91be311435aa"
  },
  {
    "url": "assets/js/app.93892231.js",
    "revision": "58280db6703e8a577f1ce8a3c847093b"
  },
  {
    "url": "assets/js/vendors~docsearch.cb998e4b.js",
    "revision": "7b0136a228daf0b9ed9dd8f2319dca13"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "c11852465077a2930e73d81d1b619d38"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "acf297ef892f4ec51b0a0da455b26d38"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "eca6f9a8c02cec43524a76b1f3f563eb"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "c58982c00c62bb657c540e99f4fbc5a0"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "07e383aeb0c5adb299acf31b04e16195"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "310765bf102353eecf6832bb438598b2"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "8e0c30df739fe82e69e7d57e9ec712c7"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "8126acb588aee812b82d26afcab36b69"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "6a5daa50ed9bae46851067ec9195997d"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "878ecf2ed633cd01bb04437bdbfd457b"
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
    "revision": "ebea97c7012529ff25405b8032306b9c"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "7f25ac5777248a76249891c5153d2bee"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "931760bb97294895624806ce34d727b8"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "08adc38d8eeafad657e7caa7f62db226"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "5d2df20f6bfce06d4e941122abf15910"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "9179bcbeb7cf0840b89de720111e5b69"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "cd7be8ca0adb2250101a65599fbde24b"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "250f970e00435018c6ec5cda68fd901e"
  },
  {
    "url": "resources/books.html",
    "revision": "d60d6d308418d8d216d382360e7eca37"
  },
  {
    "url": "resources/community.html",
    "revision": "61f240f6415b8fa4398b5c4e4159de91"
  },
  {
    "url": "resources/conferences.html",
    "revision": "04f0b7218248f8b928d851c3ca70186c"
  },
  {
    "url": "resources/courses.html",
    "revision": "5fe35bfbcb61e3d933d77cfecea4e725"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "ae1c16d041f881427bccf1b8956812c4"
  },
  {
    "url": "resources/examples.html",
    "revision": "d670dcd858a50580a6a4b8f4d7db8932"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "234d78fa319e8bfe4fd22286cd1de13b"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "d82a797aead047c9d65f1f289af9889d"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "98846c846a78f76b49fd31ba615db7de"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "670b0d7a218c0185eaeaaa231b730087"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "662ffc1084f22bb6d4110bb29a832056"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "28207f9bb0f648d1be1ddad6ad796e8f"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "79f8a6a22a4a0a67c89382ad5cb59631"
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
