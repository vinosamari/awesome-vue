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
    "revision": "1d936ecccca0b8525d75c2d32fa9811a"
  },
  {
    "url": "assets/css/0.styles.cd6a4cc2.css",
    "revision": "092ece92b88dc0d9cc1fbe3682853753"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2a88e282.js",
    "revision": "f46e8006e33b068f83966c0e81fbe2c4"
  },
  {
    "url": "assets/js/11.23201328.js",
    "revision": "fff4e6e19f4f2cdb0e704c65169d5042"
  },
  {
    "url": "assets/js/12.d37f9145.js",
    "revision": "fccb8e5803c7be389a58ed84c63f9fa7"
  },
  {
    "url": "assets/js/13.c1a45525.js",
    "revision": "e04bb4c4394fa3404446957b87576cdf"
  },
  {
    "url": "assets/js/14.95e2b7cd.js",
    "revision": "ba24d271f794fb103f6b9effca9e427b"
  },
  {
    "url": "assets/js/15.cccb9ea2.js",
    "revision": "2265395ed0e1041fb349cefd1319d6cb"
  },
  {
    "url": "assets/js/16.76ab7a5d.js",
    "revision": "8ead1439214153e3d702a797cab06e56"
  },
  {
    "url": "assets/js/17.ccc9c013.js",
    "revision": "8a6c12cde0bf082173025cc5c8422d33"
  },
  {
    "url": "assets/js/18.8c24b370.js",
    "revision": "5e7b42cb2a9b3367bf81c34e973a1864"
  },
  {
    "url": "assets/js/19.eef9dc12.js",
    "revision": "71b92327aa11f097c52a55a5ac7241e5"
  },
  {
    "url": "assets/js/20.9d0b9615.js",
    "revision": "14adcf695d65f309ebb1b5baf0a70ea8"
  },
  {
    "url": "assets/js/21.9f145bf2.js",
    "revision": "fc3f18c99b694762919772fd8ab2914d"
  },
  {
    "url": "assets/js/22.5acd0ae1.js",
    "revision": "e18a95e2a43244c096aca54ff76bcf01"
  },
  {
    "url": "assets/js/23.b9275109.js",
    "revision": "a45667e8db5afd6bf5354dace052a009"
  },
  {
    "url": "assets/js/24.5be1d1f6.js",
    "revision": "493a6dbf1acca8d2d98f92104a4a01b1"
  },
  {
    "url": "assets/js/25.fe72664c.js",
    "revision": "1cdce0c6c4d909c708b72db6d75bfb16"
  },
  {
    "url": "assets/js/26.73620b0c.js",
    "revision": "3a6cf36fbe8298ee0e581dac7762f9d4"
  },
  {
    "url": "assets/js/27.ce2d551f.js",
    "revision": "0a52bf8aa51abb596d3bfb35b90e3303"
  },
  {
    "url": "assets/js/28.ebdcd60a.js",
    "revision": "74751388f79d9697d6002349feb11051"
  },
  {
    "url": "assets/js/29.6df1401d.js",
    "revision": "3262cd90ee0257b136620691c257125c"
  },
  {
    "url": "assets/js/3.54d4e622.js",
    "revision": "07b20e01ecf946606bac0360087ba5a9"
  },
  {
    "url": "assets/js/30.663e2be5.js",
    "revision": "db2fdf43ba2eaa677c26a500036b728b"
  },
  {
    "url": "assets/js/31.5fe6d997.js",
    "revision": "d4158fbcd31d0acd0e6994d063b97fc2"
  },
  {
    "url": "assets/js/32.7ce371a2.js",
    "revision": "3e17b4a836c092d08b235c1540a4472d"
  },
  {
    "url": "assets/js/33.0e643692.js",
    "revision": "86a117078f58d293c11f1ecdc9f7f6ca"
  },
  {
    "url": "assets/js/34.c3c0ef7a.js",
    "revision": "0215e313f74ceef68d25a38e963b4ba3"
  },
  {
    "url": "assets/js/35.a5bbab28.js",
    "revision": "8480a62d213453cfb02f3dc3d2bff873"
  },
  {
    "url": "assets/js/36.6dbdb4b6.js",
    "revision": "4e0dd4fc479130b23898559190219c7f"
  },
  {
    "url": "assets/js/37.008c1fde.js",
    "revision": "8f58f28b87268ac354e18c8055fea75a"
  },
  {
    "url": "assets/js/38.f9a5085f.js",
    "revision": "598cc18bf3355bec6b29eb1c17ff0051"
  },
  {
    "url": "assets/js/39.923cabeb.js",
    "revision": "10478fff0000783330aab66667dfdb3a"
  },
  {
    "url": "assets/js/4.b5bc61f5.js",
    "revision": "7cc394de7ab47a77227016224ef41493"
  },
  {
    "url": "assets/js/5.541b5d86.js",
    "revision": "4c888af53f5ecf02f721a4e8c48198d8"
  },
  {
    "url": "assets/js/6.78f6ad05.js",
    "revision": "1592f3b2ad2f590ac05d4edb39128d44"
  },
  {
    "url": "assets/js/7.3bbe8171.js",
    "revision": "47bec9a3d95a1a3f0c313c4bafee73f8"
  },
  {
    "url": "assets/js/8.9397f704.js",
    "revision": "8f53b70d2c62bea0d23d62398aa05367"
  },
  {
    "url": "assets/js/9.697c5db6.js",
    "revision": "d2e0d15b20e0f7385a0aafed26e8eddf"
  },
  {
    "url": "assets/js/app.e5933911.js",
    "revision": "f1c992524e2307483e59df923442e576"
  },
  {
    "url": "assets/js/vendors~docsearch.6266588b.js",
    "revision": "7f55a97996d81c2579070d0516294a06"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "de21ec46391b88979a26126f97735a6c"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "968759df0920911627f30d61277b1ca6"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "4207b6d41c855956b23d2162c730c892"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "38b7307038b38df17eb92b52bd0231ae"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "6ceb471e898ad4b4b168f091498e3ddf"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "ef4f8a7ea60f302f652da4e864903aa9"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "24a9f1c3462838c122bfc205fafcb810"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "0b349283a48fa83dcf6eac9e2336296a"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "fc229d4934c1fc24de4e3700fc477528"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "9e99fdb469309baeb0a0f488d13c499c"
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
    "revision": "8acad0e82a896c7d1a9f027e0d5a6dfd"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "6d484edc27d2ceef89e8a691c13785b5"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "4744e5e969ba4fbb85b4bc8aff83de52"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "cf005a84dc4517d1f6c1e92c6426379b"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "8e91fded1fa296c905dc36b8a577551a"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "7ecbd4b784f77c9b71cfadd0d59ba897"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "1cbe63e08ca55aab44bc4b809f1cf587"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "e1e4e59e4eb2d6fa445051343869eda9"
  },
  {
    "url": "resources/books.html",
    "revision": "382db680a2dd8f3849069c59426f3275"
  },
  {
    "url": "resources/community.html",
    "revision": "3815cd584ca273c7160ceb81c24984ed"
  },
  {
    "url": "resources/conferences.html",
    "revision": "d3a9f2c5f1e76553c538f792d8f20dab"
  },
  {
    "url": "resources/courses.html",
    "revision": "8394333a7b22537d5c4f309583e93100"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "f1f8b7002d59d249d55af9b5e2493a23"
  },
  {
    "url": "resources/examples.html",
    "revision": "7268cb51745806a85b26f63f13990db5"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "a1e72b04d01ce6b257095fdc0a3211f6"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "fada39d4a822e65d2746aaa5bf2fc0b2"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "f9243e2f6d52d32f4f8784a2f36de040"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "ca049fc69f4462e82e54fc6567c259d8"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "6281f58e9ad64faeba47803586fd1d3c"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "2bbab64c668bd3987c47294e367979bc"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "cad5dd8b27cb801de313f57b55a5443e"
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
