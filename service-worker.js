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
    "url": "assets/js/10.f76a7a85.js",
    "revision": "7aabc5ab5c1feeb1773686a25a9becf4"
  },
  {
    "url": "assets/js/11.36b68626.js",
    "revision": "1945cef88658c5576f12816960538183"
  },
  {
    "url": "assets/js/12.b85f755d.js",
    "revision": "cf2a9cc32ab4151961bf7bd070667c51"
  },
  {
    "url": "assets/js/13.a00bbc92.js",
    "revision": "1885a11e1881d1050ebdd58b22601e74"
  },
  {
    "url": "assets/js/14.05886b0e.js",
    "revision": "5b57ac927adc156413683004cd0e261b"
  },
  {
    "url": "assets/js/15.e2f15929.js",
    "revision": "fc0548bb455bde463d243caf16ff6f6c"
  },
  {
    "url": "assets/js/16.81316726.js",
    "revision": "a8467e02419359afa4a397b9b80e7609"
  },
  {
    "url": "assets/js/17.ff575d10.js",
    "revision": "eedf297856d897c6e5496015bf2fde44"
  },
  {
    "url": "assets/js/18.5a45066b.js",
    "revision": "61f991b7f9bf6fafa9d3e606acf81300"
  },
  {
    "url": "assets/js/19.972671ff.js",
    "revision": "9cca8784cf2891c90c2330f47eb9955e"
  },
  {
    "url": "assets/js/20.cb3c8164.js",
    "revision": "e48bcd7e285e0a56b141b328db4d8385"
  },
  {
    "url": "assets/js/21.4e784d76.js",
    "revision": "5af21771817bc14fc7fd2d48332ba852"
  },
  {
    "url": "assets/js/22.d4ab2172.js",
    "revision": "1b51115460564a1f0e512ddc30a47d8d"
  },
  {
    "url": "assets/js/23.c709e4b2.js",
    "revision": "14f9c260810c2e9b75f41f08f2050cd4"
  },
  {
    "url": "assets/js/24.59f93c9c.js",
    "revision": "b31e41c3ca8d94f12f3ad63fcdfa6fba"
  },
  {
    "url": "assets/js/25.854b2bc6.js",
    "revision": "2161f003292ccc3a8dc86a33b71b3f65"
  },
  {
    "url": "assets/js/26.8ec15b1e.js",
    "revision": "de3fdda7fd755fc3a0973d1cc793a82d"
  },
  {
    "url": "assets/js/27.000ca510.js",
    "revision": "550ab92182cc769e997b8891b2753fe4"
  },
  {
    "url": "assets/js/28.a6a732c8.js",
    "revision": "63fd8a81dca812ac18e99b160393213b"
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
    "url": "assets/js/30.36b8430c.js",
    "revision": "992023884cd774d6316ae7e698b276d7"
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
    "url": "assets/js/36.ef5a6f10.js",
    "revision": "cc81c5fb660e5ebe3c690e6ec00eec8c"
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
    "url": "assets/js/7.66cdd46e.js",
    "revision": "9f40c952ffaec28a0fe55fa6f2b8b148"
  },
  {
    "url": "assets/js/8.e07184e5.js",
    "revision": "a3b222bb3b6a92fe6d0fcb96ea5a16cf"
  },
  {
    "url": "assets/js/9.5286745d.js",
    "revision": "a76892a34e5448aed2ea4f944275c9a2"
  },
  {
    "url": "assets/js/app.afa3b391.js",
    "revision": "bcfcd0c15e4b6882ab1ab04273d8ed36"
  },
  {
    "url": "assets/js/vendors~docsearch.cb998e4b.js",
    "revision": "7b0136a228daf0b9ed9dd8f2319dca13"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "48c9ac72b928668b05fdf480a1ce2e7d"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "65c9ab5d33d938427438aad97c5a4f76"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "f28b26a1e3de0d156784bb52a41904be"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "e32b243a08937fd07fc598a8e6feb433"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "2e5e19351bc8f05714f6c26b45eb5a72"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "6dc00c748d112f1aa7a5a860dfe9412d"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "13b340e0272b645df8befe594f69bfdc"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "13b5aeb24990a2c905dd92122aabd360"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "3431b42406b8b7558fdf134600017e22"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "18b807a57098ec42fd831825b8c59f05"
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
    "revision": "287fbe76f8eaeb1417dd2bb5d07a2f1b"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "51449bfc65402b4e2dfc13303af021af"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "7db1951e0c605facae55b20babf0a18f"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "e25e6d38a212a0867f3e9f608e4bcbe5"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "08b626a0a29c6f5f6245b8a7c28c5592"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "b0c184f70e9b7a454d02fe089a9dbc44"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "9daaea4e75635adfd53e076e66297f11"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "5a71b7979f468bf6be0d3c6861567e83"
  },
  {
    "url": "resources/books.html",
    "revision": "7194652aff39842b9069d5c90871853a"
  },
  {
    "url": "resources/community.html",
    "revision": "768b804a83d727a95a9a58ca372d6932"
  },
  {
    "url": "resources/conferences.html",
    "revision": "0f9268617bee3d1ab8267fbdf0373f62"
  },
  {
    "url": "resources/courses.html",
    "revision": "f0c882ff349376153947202c14b2d08f"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "e74c1b0f13dd704e27a3fbdf2f4b1fc9"
  },
  {
    "url": "resources/examples.html",
    "revision": "7387f72faade859ef5e136395d8a18c5"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "504ce826647f86d87cde1240205304e0"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "adf4af6ee903659cde3a548a728cd4a8"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "652ab264727a949896ac49758f68a341"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "ba8f396002166f5318f44e43b5775e64"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "827190608168f49067c84200dba2bbbc"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "d40f110912a30302b290d5aa8cc9ab3b"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "b1ffb316a152448df4bb549693195d38"
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
