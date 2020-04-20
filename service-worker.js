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
    "revision": "0da882258aed04bae79a383f6d74e43e"
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
    "url": "assets/js/10.bbd9f1d1.js",
    "revision": "867187ffc8528b6b74da879e2e8641d0"
  },
  {
    "url": "assets/js/11.ae81e877.js",
    "revision": "8bd1de4e5a29f679e4a65cc878013f75"
  },
  {
    "url": "assets/js/12.23548fe2.js",
    "revision": "ebfeeae8a34f9b9cc6443403669596c4"
  },
  {
    "url": "assets/js/13.3b98747b.js",
    "revision": "3d1a37104acc740befac8b7ea5435823"
  },
  {
    "url": "assets/js/14.7aef6b1d.js",
    "revision": "2ad4df103c095a7452af5131fa6126a7"
  },
  {
    "url": "assets/js/15.204468cf.js",
    "revision": "37a1de5ce557536182787c8874f88fc0"
  },
  {
    "url": "assets/js/16.251ddcab.js",
    "revision": "d481de45812e36c315f85317390ce3c1"
  },
  {
    "url": "assets/js/17.d56449a8.js",
    "revision": "cb31540c052f55717bc9fb0e9edd1c68"
  },
  {
    "url": "assets/js/18.034cb714.js",
    "revision": "835336af74697a53874ccecfc47cef8a"
  },
  {
    "url": "assets/js/19.da8e36f0.js",
    "revision": "86398a19a5c97db565cdebada75d36f3"
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
    "url": "assets/js/26.3c7cca13.js",
    "revision": "2382b3aa61eb5e9746b3a9338c5a52f6"
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
    "url": "assets/js/36.290ea93d.js",
    "revision": "1a78c10d2796bcf13357ec074e3a73b8"
  },
  {
    "url": "assets/js/37.f035d1f9.js",
    "revision": "6daceaa1793982f209761a0f1fb105e7"
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
    "url": "assets/js/8.d001b08a.js",
    "revision": "5b2f418796c6676096190cf743025eba"
  },
  {
    "url": "assets/js/9.3a1ffd60.js",
    "revision": "d2e0d15b20e0f7385a0aafed26e8eddf"
  },
  {
    "url": "assets/js/app.1901c412.js",
    "revision": "d37944be295e824eb3c2d2e8410d6714"
  },
  {
    "url": "assets/js/vendors~docsearch.a03dcad5.js",
    "revision": "7f55a97996d81c2579070d0516294a06"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "9a17aac023a5700fa9ae0819c0da0fd6"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "4befc657882e018caa30770c966475e5"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "ea68fde1976f4b418b068fb5b109db8f"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "495fb69e3d7b472e6c83d9d18aa05700"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "d5941ea4de5300925712c8cdba6e7d13"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "f8a7de1f2e36f1fc10b2620a53c758be"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "55c0022b76a25fbe06211198af928f56"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "edcacff7554c57bedab1ed3937b2efda"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "6b44d6fc6f905957634d76dc688c3c14"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "7c0ac27d341e92218be95f6aa08b2a92"
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
    "revision": "5966fc5e744a60932fb2fa9db0ae14c2"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "fe0f0e94cb4149a8e078e5868a9129f0"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "3c464ee77256aacb55a590b67a4c0731"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "ab2a0a4d92ab1458c52f15b7703c02a2"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "625546bb9f3db3f054f903e3c084b144"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "38d8d271275d3cb66cfc8e59f18af514"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "33a6811d4661a9af63823fa8a5dd420e"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "bd5b387301a9afe338451a593850590c"
  },
  {
    "url": "resources/books.html",
    "revision": "3da0fdc94936735c45ef5c793dc3d32e"
  },
  {
    "url": "resources/community.html",
    "revision": "78de057bcaaaa04680ec9f368b36ba7c"
  },
  {
    "url": "resources/conferences.html",
    "revision": "759777b4f5a0a0d478787ee878910898"
  },
  {
    "url": "resources/courses.html",
    "revision": "bc053308704de36f043e160bc39a2a5a"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "c96615a740537a5d1a698a7c7fc08a51"
  },
  {
    "url": "resources/examples.html",
    "revision": "9f0f1d318ee03e77912a204885ac1dcf"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "0240ec27bd104d1a77e73845b2474be0"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "6fd752c47e164087dd7e7970d24b24da"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "120a466928d20fd31342864329d6bd1e"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "e105e6e0a85d6f2e3191a266801683a4"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "5c4cff1786a3e527b23eb9582020a27b"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "62230b15ca2eaad7e258e12defae1e3b"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "3f4ce41e86448d42a15b83389b05b91e"
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
