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
    "revision": "a9d95eeebf2d80cd48852c547470ff4d"
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
    "url": "assets/js/10.2e25f907.js",
    "revision": "10ac1fa51cbd2a5cd521643bcb5728db"
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
    "url": "assets/js/20.8a1a9a6a.js",
    "revision": "39ef07714b7558e61659e968044b508f"
  },
  {
    "url": "assets/js/21.6c166073.js",
    "revision": "f848830c271a9491e83b0654e12aff6b"
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
    "url": "assets/js/29.66b8e0fe.js",
    "revision": "9834a78b7f1835e359c47566c2024e80"
  },
  {
    "url": "assets/js/3.5783feae.js",
    "revision": "07b20e01ecf946606bac0360087ba5a9"
  },
  {
    "url": "assets/js/30.ee778fe7.js",
    "revision": "8ee061eca96aaf00fac45c4543b80cbb"
  },
  {
    "url": "assets/js/31.0feec944.js",
    "revision": "810264b28d2b310ddbb708d229286283"
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
    "url": "assets/js/8.269df3ab.js",
    "revision": "d62b9793878e52fe26283ace673a00c3"
  },
  {
    "url": "assets/js/9.4a602647.js",
    "revision": "f0b4bc01dea29fba8b281458be4c3dc5"
  },
  {
    "url": "assets/js/app.d51e3bf0.js",
    "revision": "dc0c2441b58113149deef558d6b863e9"
  },
  {
    "url": "assets/js/vendors~docsearch.a03dcad5.js",
    "revision": "7f55a97996d81c2579070d0516294a06"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "a1b458eccfe794049d23cbf45bd0ed29"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "078aa72113ebe3db39fb4a71339fd957"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "644c67689b64897e8a8ab5d4a942a6a7"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "f01927489e95a5be7143677fa93fc8ad"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "48a86690194fdf6096c4fee6a36aad60"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "956a4b930f134c12eba27d2cfeae156e"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "4200aae66a12734fb0cbe6ffcf718bc2"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "52c18b0987508f091ff91958138993b7"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "69caadd1478cc2fa3ce2c2d9b593ac46"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "d6a57a6c9b3ecf7ab6f796cfba69e439"
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
    "revision": "72d2237d6b036092ab2a0f86d8c94387"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "3183cdac2ef34755ac3ab680d00e4eb9"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "6e5483f7e1938ad200301f1388865422"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "e906369d75728fb7717c644c44275f59"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "4afed2324ccaf3155790f1575f6af520"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "ed78289c34f8a972f7c42407cb670e0e"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "6b5b7cd046ddc464369cdd22eedfe952"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "7d646af69b1b0ec5555df6f39e833d1a"
  },
  {
    "url": "resources/books.html",
    "revision": "5688877dbf5fba2e344a8ef43b54bfc9"
  },
  {
    "url": "resources/community.html",
    "revision": "38ccdfa9b380ec8925e0620994573a2a"
  },
  {
    "url": "resources/conferences.html",
    "revision": "17ad6f09e5513a1eaf439bd5f38da442"
  },
  {
    "url": "resources/courses.html",
    "revision": "3cbca096677d3c6d7882695c581412f3"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "74c5dca9ce41eb1d0045c0dc03621d85"
  },
  {
    "url": "resources/examples.html",
    "revision": "98f3bd63921ca5953d659b2047fb6ed2"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "b18d3df39397cb9aaaeca1bebb27791a"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "c0d703e98d1f92a55b16f2979254a9c0"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "6e0c599da202c7acd886e146fbf464f6"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "1243b604ca62087fbc586342bf3a468e"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "1541694d30925ca3be06601a130e3459"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "51506e77cba27163b724defd9b4fda44"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "501e54ca0488998899981888a8699efa"
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
