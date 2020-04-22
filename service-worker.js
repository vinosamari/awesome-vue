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
    "revision": "5b07a124f37f90caa0cf7950a2e86791"
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
    "url": "assets/js/13.4d74cdcf.js",
    "revision": "4334e6aa623ecbece3c019115a40d241"
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
    "url": "assets/js/16.417d1f9d.js",
    "revision": "f0d5964cad6754ce1315b424a0b206cf"
  },
  {
    "url": "assets/js/17.28c09dc6.js",
    "revision": "8a6c12cde0bf082173025cc5c8422d33"
  },
  {
    "url": "assets/js/18.1e5eb0c0.js",
    "revision": "cfe2de08b2690de3d97033774a4f7874"
  },
  {
    "url": "assets/js/19.da8e36f0.js",
    "revision": "86398a19a5c97db565cdebada75d36f3"
  },
  {
    "url": "assets/js/20.8a1a9a6a.js",
    "revision": "39ef07714b7558e61659e968044b508f"
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
    "url": "assets/js/27.8a751373.js",
    "revision": "2a74ff895c7bf1bd9ffb916c2aafd872"
  },
  {
    "url": "assets/js/28.7d341524.js",
    "revision": "1bd3c3ff3d297540b150dceaae05448c"
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
    "url": "assets/js/31.c598bada.js",
    "revision": "da3208eb9593d57ca41021dbc42d9035"
  },
  {
    "url": "assets/js/32.75e19e4d.js",
    "revision": "670a0d47209512cd0ad1a41390a93f49"
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
    "url": "assets/js/app.ff7d64fc.js",
    "revision": "b2b252bffd5055ad20e9681e1c1df108"
  },
  {
    "url": "assets/js/vendors~docsearch.a03dcad5.js",
    "revision": "7f55a97996d81c2579070d0516294a06"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "813ca40dd79f0b8850f27d4affd43d99"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "c82d42eb61d5fa11eefd13905d8056c9"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "e85f14abd52d328d9ee19da041b64252"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "a8c33397d6d6f209e8b88ffda94120b7"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "b45ff4f110aa26f53b51891593f6a28e"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "6d5d9d0763195267c144a86f93c8d11e"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "f8fbf59a93a96d161341765b28222220"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "e2fec84bfc7924f21c0acaf9b9d22eef"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "e1a8056c22abebc2e5f498fc5738c207"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "f7ee996fed2e49e6f6895004c83e2cee"
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
    "revision": "871cf8ddac0b69f783c1dc55f993879e"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "7bc25c3f57b26c720d058091202b1f4a"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "8ab73003db8dc4b9a893c13c6ae5c51f"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "f90b8791b0b67116e5a032d1c9a05428"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "594799a50095603b63c50ca4794ecdcf"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "50cd757de73ae5ca35a512a5af343553"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "f11de7ecd70cfa40b74b26236323522f"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "660333a380f570365faf797346840094"
  },
  {
    "url": "resources/books.html",
    "revision": "5006085b4cb7b66a1d89ae998ae44717"
  },
  {
    "url": "resources/community.html",
    "revision": "05a48fa36fc3d18b3a955e4e2d456c6c"
  },
  {
    "url": "resources/conferences.html",
    "revision": "bc0e1d5d87a4fd24bb1e44b2c0758a2d"
  },
  {
    "url": "resources/courses.html",
    "revision": "64ac579109b469b01a0a6a148be4bf00"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "317190e71d9a04b10e3ac3c1fafc0e12"
  },
  {
    "url": "resources/examples.html",
    "revision": "a1663fca4c65ba36c993ead896e24aa9"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "1013ea014cb70ac0d627a264882b59dd"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "67f8afabcb7f9b98e708c2e15ddf8971"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "54c3d0cd801efbd74c71604d1e73ac80"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "6b41683543db24af4701f839af3ea13d"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "1922344255f199cd9cd14e633878909d"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "9915411b339cbca8ff49af0c77e6d94a"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "e5a9e89e777729c4c5961ac28dd00164"
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
