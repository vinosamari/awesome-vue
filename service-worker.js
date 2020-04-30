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
    "revision": "9fbb79201887e1d836d0b99839784659"
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
    "url": "assets/js/13.2d2d52c8.js",
    "revision": "3d83ed21ad6359c5462ffc94670dd156"
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
    "url": "assets/js/19.590edec3.js",
    "revision": "ef5ee6d5b144594e0e4af99b546c043f"
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
    "url": "assets/js/app.6daae9ce.js",
    "revision": "fb6519882ba0c141bf1c2a266e9837e8"
  },
  {
    "url": "assets/js/vendors~docsearch.a03dcad5.js",
    "revision": "7f55a97996d81c2579070d0516294a06"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "9784151ad6b89d8083f50fd02505e5a6"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "f9758f09212d8d45da960926acf1f170"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "eec51da323a276ed521b97ba4598ffdb"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "08570032d0983fd95b4bc0b490534b36"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "d46d198483e431930cbb8460a9a6bc90"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "dcd458753705945e0c3421c7c57c9b0d"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "141aaa2e7ab29a88dd0b510eabb8a12a"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "72a98d08ec787c7168c740c545cc2ba0"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "901193de12fa733157822ae8817b600f"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "d58e289d1f2a749600e097be1e62f5df"
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
    "revision": "cb4e17270b909d021b6ea347de464997"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "fab53303c3906c0a3c9637db872a56dd"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "a97e7698a0a1f392686bb20182baf838"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "038ac927d4626e1162b64ccd721ec64f"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "06127a3c69d0b48632479fe3e0867c1e"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "5bbb28171e96812e57172e712e2bde72"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "b388af164564ccf110892285cb7a81af"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "eeb7d868fa5988f590e64ba2f883b8d2"
  },
  {
    "url": "resources/books.html",
    "revision": "6cbfbe90f7b2cc3e34e5c639b3123118"
  },
  {
    "url": "resources/community.html",
    "revision": "f716449bd1a03561a99e1a4562aa9680"
  },
  {
    "url": "resources/conferences.html",
    "revision": "639e37ba0ce5e2a025bfc3d43abc46a6"
  },
  {
    "url": "resources/courses.html",
    "revision": "47eec7a3bbf693f4900c0fc3cc842087"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "d9549284544403929a95201b3ba5ba68"
  },
  {
    "url": "resources/examples.html",
    "revision": "54b673eec1091542a9abb5a010f0aa2e"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "806445a25167b4c365d1835f358a6672"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "7ca5a2613ab1a566506ffaed40264d63"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "239be1c1bd37e9b2980d42e10b392e31"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "041fec653a1e2da6edc69fbad6aeca50"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "683f598acf15f7ce5c961758e4361419"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "5ca43f186be3d603dd6e4691d8302c03"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "fc2cc3a3735fb6859fece5b7e2ea46fe"
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
