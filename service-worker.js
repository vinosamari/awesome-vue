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
    "revision": "f5e44d53b6b1235715d602cb320d881e"
  },
  {
    "url": "assets/css/0.styles.e54b5cce.css",
    "revision": "092ece92b88dc0d9cc1fbe3682853753"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5f08157c.js",
    "revision": "f46e8006e33b068f83966c0e81fbe2c4"
  },
  {
    "url": "assets/js/11.ddb753a4.js",
    "revision": "fff4e6e19f4f2cdb0e704c65169d5042"
  },
  {
    "url": "assets/js/12.04cd0759.js",
    "revision": "fccb8e5803c7be389a58ed84c63f9fa7"
  },
  {
    "url": "assets/js/13.0de68e67.js",
    "revision": "6106ce42d75c44b66b8baaab3caaf56f"
  },
  {
    "url": "assets/js/14.04e0804d.js",
    "revision": "52ae1bda98fb640af4cf6e20de43e32f"
  },
  {
    "url": "assets/js/15.79778968.js",
    "revision": "e8a07966e69d6f37839ea8a8d76fffe0"
  },
  {
    "url": "assets/js/16.920de13d.js",
    "revision": "10d2a91781f208f48610ebd74466f467"
  },
  {
    "url": "assets/js/17.28c09dc6.js",
    "revision": "8a6c12cde0bf082173025cc5c8422d33"
  },
  {
    "url": "assets/js/18.490dc653.js",
    "revision": "5e7b42cb2a9b3367bf81c34e973a1864"
  },
  {
    "url": "assets/js/19.725f6c28.js",
    "revision": "6ef06603725f50a31e2577cc0dbb9130"
  },
  {
    "url": "assets/js/20.00511615.js",
    "revision": "14adcf695d65f309ebb1b5baf0a70ea8"
  },
  {
    "url": "assets/js/21.0fb99111.js",
    "revision": "fc3f18c99b694762919772fd8ab2914d"
  },
  {
    "url": "assets/js/22.ca97f07c.js",
    "revision": "e18a95e2a43244c096aca54ff76bcf01"
  },
  {
    "url": "assets/js/23.25f69fdf.js",
    "revision": "f0acd96fb1a0a7fd757449dc3dd7b283"
  },
  {
    "url": "assets/js/24.19ebe497.js",
    "revision": "493a6dbf1acca8d2d98f92104a4a01b1"
  },
  {
    "url": "assets/js/25.5a52a8f3.js",
    "revision": "1cdce0c6c4d909c708b72db6d75bfb16"
  },
  {
    "url": "assets/js/26.ad1764e3.js",
    "revision": "3a6cf36fbe8298ee0e581dac7762f9d4"
  },
  {
    "url": "assets/js/27.afe26747.js",
    "revision": "0a52bf8aa51abb596d3bfb35b90e3303"
  },
  {
    "url": "assets/js/28.374f15b1.js",
    "revision": "74751388f79d9697d6002349feb11051"
  },
  {
    "url": "assets/js/29.2dbf5937.js",
    "revision": "3262cd90ee0257b136620691c257125c"
  },
  {
    "url": "assets/js/3.5783feae.js",
    "revision": "07b20e01ecf946606bac0360087ba5a9"
  },
  {
    "url": "assets/js/30.089c91ed.js",
    "revision": "db2fdf43ba2eaa677c26a500036b728b"
  },
  {
    "url": "assets/js/31.177dc7a3.js",
    "revision": "d4158fbcd31d0acd0e6994d063b97fc2"
  },
  {
    "url": "assets/js/32.0cc89e04.js",
    "revision": "3e17b4a836c092d08b235c1540a4472d"
  },
  {
    "url": "assets/js/33.98774c3c.js",
    "revision": "86a117078f58d293c11f1ecdc9f7f6ca"
  },
  {
    "url": "assets/js/34.6c3e8ac1.js",
    "revision": "0215e313f74ceef68d25a38e963b4ba3"
  },
  {
    "url": "assets/js/35.826055b1.js",
    "revision": "8480a62d213453cfb02f3dc3d2bff873"
  },
  {
    "url": "assets/js/36.6a0d9b2d.js",
    "revision": "4e0dd4fc479130b23898559190219c7f"
  },
  {
    "url": "assets/js/37.fec92fa2.js",
    "revision": "8f58f28b87268ac354e18c8055fea75a"
  },
  {
    "url": "assets/js/38.43beb98a.js",
    "revision": "598cc18bf3355bec6b29eb1c17ff0051"
  },
  {
    "url": "assets/js/39.2701a85d.js",
    "revision": "10478fff0000783330aab66667dfdb3a"
  },
  {
    "url": "assets/js/4.4dacaa78.js",
    "revision": "7cc394de7ab47a77227016224ef41493"
  },
  {
    "url": "assets/js/5.12d7086b.js",
    "revision": "4c888af53f5ecf02f721a4e8c48198d8"
  },
  {
    "url": "assets/js/6.f9dd353a.js",
    "revision": "1592f3b2ad2f590ac05d4edb39128d44"
  },
  {
    "url": "assets/js/7.3795cbf7.js",
    "revision": "47bec9a3d95a1a3f0c313c4bafee73f8"
  },
  {
    "url": "assets/js/8.c7424a4e.js",
    "revision": "c8222bc6da10a6d2c26f39814de5c6cc"
  },
  {
    "url": "assets/js/9.3a1ffd60.js",
    "revision": "d2e0d15b20e0f7385a0aafed26e8eddf"
  },
  {
    "url": "assets/js/app.4408eebf.js",
    "revision": "ec0a922695715bfec7ca6719bb99c280"
  },
  {
    "url": "assets/js/vendors~docsearch.a03dcad5.js",
    "revision": "7f55a97996d81c2579070d0516294a06"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "2dd0703a5dbffca058fca2d2f4968602"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "afe0575637ba2b802ce06e520c15ec79"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "0ecdcfd58c8daec04dced30c4b69a59b"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "469e51eb5d94d37e3deafe2e6184c0e2"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "0037ba143525cb8fcace61d6de61f8a4"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "d7905be3a26dc96640995d098b4a7906"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "c9c9142a09e4abae3c1ddd626b60f6bd"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "0ccb754318350345310a6fd5897d1709"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "aae84d0a08090c7dd2d2288b6d4bd4b8"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "b38df5cbab41cb50565cf113f2112514"
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
    "revision": "ed2d3d73adb001ceaee16c0c51c80858"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "a356c40905efd57ba19d1379b7ba9b71"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "8e8a2da6523368a28d9607cbcba0a9b8"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "a5044c66d320e196b7a22699454269b7"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "d1af17344e94acb30a3c28b2e6f2730a"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "398ffd849ebae687bba3bf2ea8aa4bdc"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "f572c0b94753dfcee45305e10e8a6608"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "667fb68e5c2b62a786205769129c30d2"
  },
  {
    "url": "resources/books.html",
    "revision": "451ebaea47971c2e27cb82c43f73fd97"
  },
  {
    "url": "resources/community.html",
    "revision": "5d134f9f10728e3f30755b9779113c13"
  },
  {
    "url": "resources/conferences.html",
    "revision": "95b661343318ef612fda22d5a8c55f0b"
  },
  {
    "url": "resources/courses.html",
    "revision": "e268e30b344ca6d6c97156a47e2f9ef6"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "ed7f58eae3d083d68706914827c05efc"
  },
  {
    "url": "resources/examples.html",
    "revision": "94cf5739139544b5dc0a102b97b11641"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "4d1ce0c5edbb6f46f425cdce9c3a7b7f"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "2a51123282f700254f1d43e38f131134"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "f2ecbc57e899d1a0e00b22f5c6b653fc"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "1c96b8948807b3a9b55f8dca833d1e9b"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "9d0b9405d930735374b18d4acc87b6ea"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "eb58f8d79543707cbc42b8f615a81b12"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "57cd1c6a7786eca734dfcb20c3cfd556"
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
