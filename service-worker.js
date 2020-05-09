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
    "revision": "915d1fa49378db352314d07e40ff028f"
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
    "url": "assets/js/13.87642fbd.js",
    "revision": "1fb56bdeb585c7798799b9bb50c2e284"
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
    "url": "assets/js/16.28edea71.js",
    "revision": "2a2aed7c9c0765f722ff1553b19ad900"
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
    "url": "assets/js/app.872c3a58.js",
    "revision": "82a76867bcf5c6c3727705374e73307e"
  },
  {
    "url": "assets/js/vendors~docsearch.6266588b.js",
    "revision": "7f55a97996d81c2579070d0516294a06"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "55e7cf5dfb70b69a5f9eeb0125d4d788"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "e091c23b57fb49333bdf7fb078bcc8ff"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "1358da7e1b0d5bb8408ed8826d837779"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "eb8d0766a50bb38d142e9e5c55931080"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "16048744dac4da99b2ac084483078847"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "3aac0de424e38034689615020f9c62c6"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "60bcb5d0a22af68e457e403e6cd0778e"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "d7e39fcce217c8e79ac290ec69e9d40e"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "cd4753a23f534a3d30a67e5fd04184e2"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "9434e0f239f936ec47b66f5b15148b41"
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
    "revision": "87393cf4829e57985da4dab9f184c542"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "66c02289674fe0f0b4c95e522c38b5d0"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "df1fcf6700daae19c68ad9094ef89390"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "bb206dd16709706e71e876dfed4a7af5"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "294ba0c667ab5e0ae873b2f6325ed222"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "3b80398e358d8c7cb12f6f3fbee80abf"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "b70bc13d902cf8a0b24085abef2d16aa"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "f1fc2ad694e425baa16d4c52d011df75"
  },
  {
    "url": "resources/books.html",
    "revision": "ecd986b7ea108435ad3392b9e73b6fc0"
  },
  {
    "url": "resources/community.html",
    "revision": "c06f7dbdbe26f1fbe5f6f600c7475494"
  },
  {
    "url": "resources/conferences.html",
    "revision": "14620a9c7d557b0cf543e7c48b22ebd6"
  },
  {
    "url": "resources/courses.html",
    "revision": "83738472f3e72c0cd6d8850f5aa0ef0d"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "684a979d16eeacc9fcf10b3264b10697"
  },
  {
    "url": "resources/examples.html",
    "revision": "46a4c97fd4085c12629e741dee1682b8"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "23b2304f900771648fa6d90d822077ce"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "a1a298f3da1ac5e8282f4c18f1aebdd5"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "a110e58b043d524b2a26157b3182bc63"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "4940ae7c73bdac3f4c09206142f54874"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "c0779d58f71da35b568adad470326c9a"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "11dbc1357dd6bc0298d7d1010d0d139b"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "bccd27eec316a0b666ac878ffa977170"
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
