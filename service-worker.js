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
    "revision": "1ca9bcfa3cf39898ed269948b0638d5e"
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
    "url": "assets/js/13.460dc75a.js",
    "revision": "0e257becb50e14e52015ea852dd1fbf6"
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
    "url": "assets/js/app.24020940.js",
    "revision": "5db67ed53650f31e814671b2a1af1ce4"
  },
  {
    "url": "assets/js/vendors~docsearch.a03dcad5.js",
    "revision": "7f55a97996d81c2579070d0516294a06"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "72003decb22a382a4b0d81bd42cd6bc5"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "d13ad9d7f75236362d09a9858b5c5489"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "0d72cc94bca2bf5a791970006c139bb6"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "9ad2be6e5acc5df9ec179422c46567be"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "6c7cd6549848092016314b6769601877"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "46cf07cbb8c1106c1e3171fd53e296f7"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "f6362c39bfeae2504a60c2865e0a1949"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "40d7e8cba518b791449dd2aab80dca33"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "04a8bdcadbb981463c2d4ce572eea01f"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "fc6f2136aaa2c2594cbe4b391cbd7b11"
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
    "revision": "d07cd380405d2862faba2da9bb6d656d"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "d4849f0c66c9c3906242ed183df130c4"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "816a553225dda37e7f87386b80d2534d"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "9163765f93c92eba911365f7dff5588d"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "0c8fe50b5e92bd61e200467e8f5c120e"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "ebb01f91387fc8cee1353a1d16d4a51a"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "8b76e71f2dab7c169442d45a80f038e2"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "5740a63d8ed834d6da60af433c580bc2"
  },
  {
    "url": "resources/books.html",
    "revision": "db48aed696cebf813b50d8ea1e33b365"
  },
  {
    "url": "resources/community.html",
    "revision": "02d3cbed7735b1ffd75a558bdbea1f7b"
  },
  {
    "url": "resources/conferences.html",
    "revision": "af114a86eec5403e4caf1892f6f193a4"
  },
  {
    "url": "resources/courses.html",
    "revision": "9c49b3d8faa6e0fc5b181689b3c9e32e"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "47286898fd78973338f94247a8383392"
  },
  {
    "url": "resources/examples.html",
    "revision": "b819fb40f273c2d65afe498c393a4c39"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "e6b2ee5146b6e402b28a8767dd03d7ef"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "ecf87b5e356ad0a7776eec0cd350767c"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "4c13bd64e67d37997411057a08c403d2"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b5527fe50b070b936e7e0605c3a13a4e"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "93791eea93683243941bedd7f9e19737"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "1b36f8ccaf4482b533a4ba1b5bf73237"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "a57ee948ab02973621f4ecdfb0184af3"
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
