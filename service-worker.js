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
    "url": "assets/js/13.10989686.js",
    "revision": "71f38d20defd26700e55adecf891accb"
  },
  {
    "url": "assets/js/14.e6b0ac08.js",
    "revision": "d634370795fe989e6aace65c56306deb"
  },
  {
    "url": "assets/js/15.f5fe1055.js",
    "revision": "e74b49ef736417da65084f0587ddffaa"
  },
  {
    "url": "assets/js/16.6c62b3f1.js",
    "revision": "3e11d0265f604c36f67fae854db2b930"
  },
  {
    "url": "assets/js/17.096187c2.js",
    "revision": "a9b038bc7c526f4acda4e3976da5142a"
  },
  {
    "url": "assets/js/18.5a45066b.js",
    "revision": "61f991b7f9bf6fafa9d3e606acf81300"
  },
  {
    "url": "assets/js/19.3feae4f5.js",
    "revision": "0a3b67908a97efac9fa7c1ff9ce4567f"
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
    "url": "assets/js/23.ef16f872.js",
    "revision": "7d454217f3dd69a57281bc74d422dbd1"
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
    "url": "assets/js/26.8d483d76.js",
    "revision": "7a749aa708afd07a0597b13ab75b0e51"
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
    "url": "assets/js/8.7a628312.js",
    "revision": "7e2e59040600c8b5d5b1f85dd032c1de"
  },
  {
    "url": "assets/js/9.5286745d.js",
    "revision": "a76892a34e5448aed2ea4f944275c9a2"
  },
  {
    "url": "assets/js/app.9fe7173e.js",
    "revision": "646aaf93c57063988fe89969170aea91"
  },
  {
    "url": "assets/js/vendors~docsearch.cb998e4b.js",
    "revision": "7b0136a228daf0b9ed9dd8f2319dca13"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "7d285f8cfc81efbbb619874a053725d2"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "4c0013c31f41ff4c6460e10e5d1582e5"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "356363f832b032dba351d337c7abe3f0"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "8d8bd81a69bd274c0754d12e7d1e3d45"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "fae4120a5552254254093498260143a5"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "f3f6fe14310184fe010fdec4ad573f12"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "0f966409af6c52df995a353ad8f209c9"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "5dc3cd388e0f27ce706d276588e4b806"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "9a7da117da002398bad123328423d0c8"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "4c1b45b4f629235e8540abc99667bdaa"
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
    "revision": "b54b0c562515b91c5fec0eb3f0294f2c"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "b4daecffa6c5a2e1ad01a10fe5baf688"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "89dc9ab77ded5ce90af8d752359243b6"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "7aaa4c15460361e00bc0cc2a28cf8abb"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "d3d4e46639efd2325a0a7278877729a3"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "095cb474855d1d7789211167a71e4195"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "8a52b5fe2264339c0af17de687dbeffa"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "3bb336e1c0c505a7aed8e71a734ec12f"
  },
  {
    "url": "resources/books.html",
    "revision": "df1a3088928d35147ca60d15516a9b8c"
  },
  {
    "url": "resources/community.html",
    "revision": "e24e697d726e9454521f03a2df370b41"
  },
  {
    "url": "resources/conferences.html",
    "revision": "37c1bbd4f060f4bd5bc2e2fb5f417e5a"
  },
  {
    "url": "resources/courses.html",
    "revision": "497a2b0f38823c050f6383e76e2a1efb"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "b804f509bec2586d2cb8ff2b7d76758d"
  },
  {
    "url": "resources/examples.html",
    "revision": "06a2bc56fa8143a825f36bbd4db0432d"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "6194a496c7e54de3a39509f6f0f65800"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "a1f84a5226176f4fb2c576f9563d2555"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "c419fca28614b543349f251082d14f33"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "6c33e0dbbcc0f4a45da536cf646b0805"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "629532edfbaf501393c064b675f51bcc"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "2ecc8a27c964c174f8301bdcd922f3d2"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "dce63a025bd12e1dbbb076680d663c64"
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
