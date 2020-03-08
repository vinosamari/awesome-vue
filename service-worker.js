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
    "revision": "48563ceaa2c89d1424a435dacbefaf13"
  },
  {
    "url": "assets/css/0.styles.521f9818.css",
    "revision": "dfdabec112fdbd5878bcb9ca7224f637"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bcafafe3.js",
    "revision": "c7952d62efefea8d11a98307ff0a3ce1"
  },
  {
    "url": "assets/js/11.3b430b7b.js",
    "revision": "72dfdacb4ab88bf2f6daaf13bda99461"
  },
  {
    "url": "assets/js/12.3d019f04.js",
    "revision": "997adffaf959e9a5aa6a9f0ef7f363c2"
  },
  {
    "url": "assets/js/13.3854ec38.js",
    "revision": "6141ba9ee741f0bec29da0968d3b9905"
  },
  {
    "url": "assets/js/14.b1a0a151.js",
    "revision": "e7afd0c89b31fa421ae8dd60ae560aaf"
  },
  {
    "url": "assets/js/15.47232b50.js",
    "revision": "ff5ce61844821127d0c7eb4784bb19ad"
  },
  {
    "url": "assets/js/16.5b216992.js",
    "revision": "ae3ee1f68e10ae17bfc2175d1825d960"
  },
  {
    "url": "assets/js/17.16ecc9d6.js",
    "revision": "6b87a333fcee81b3bd18d6dac383e234"
  },
  {
    "url": "assets/js/18.c1dd68ad.js",
    "revision": "23ea00e665da5516c9f4c15d658254fe"
  },
  {
    "url": "assets/js/19.5a7cfc2c.js",
    "revision": "1e98a5990cdd27b6b0182e9501fab4ca"
  },
  {
    "url": "assets/js/20.d685d2e2.js",
    "revision": "38242621115487102b1a261620e4569d"
  },
  {
    "url": "assets/js/21.abd34d2c.js",
    "revision": "183270b0c37d2d1ac794c70f1170399b"
  },
  {
    "url": "assets/js/22.7f876be9.js",
    "revision": "73eb15a6f961b0d00e22f4a6de2fe2f5"
  },
  {
    "url": "assets/js/23.4785ab56.js",
    "revision": "c607d3d934d257ca16ddc01e45a0a992"
  },
  {
    "url": "assets/js/24.ee8c9117.js",
    "revision": "25ed1c606091e399d009b8c6b6a31d20"
  },
  {
    "url": "assets/js/25.f9e42ed3.js",
    "revision": "b81f139f6b251347c5b358e6e4c947ab"
  },
  {
    "url": "assets/js/26.b653cfe0.js",
    "revision": "676bce0cbc79d716b5acf2e0530af09b"
  },
  {
    "url": "assets/js/27.d3b9e8d5.js",
    "revision": "5dc1343de73d8261815d303528aebd39"
  },
  {
    "url": "assets/js/28.dc4fe2c9.js",
    "revision": "2a83c99af822c17b2b143e1ff6b6bff8"
  },
  {
    "url": "assets/js/29.51ee8318.js",
    "revision": "3427bd6ece4f8a72f6e15f84b42feb67"
  },
  {
    "url": "assets/js/3.73fcae93.js",
    "revision": "03b56acc16debd4a353169da1c553cca"
  },
  {
    "url": "assets/js/30.ece2f2fa.js",
    "revision": "f0a678a2f06577cb8d364e462546794d"
  },
  {
    "url": "assets/js/31.1126bc77.js",
    "revision": "a914e73929d4e63082767dbdb0274cef"
  },
  {
    "url": "assets/js/32.4a9359af.js",
    "revision": "c90e57ae267c78f7e1711b9bf6249034"
  },
  {
    "url": "assets/js/33.bea4cb75.js",
    "revision": "1b088a45f0703c5a012d2da01264db14"
  },
  {
    "url": "assets/js/34.2dc4e90b.js",
    "revision": "79a356847befc8bebc6e943fc49146a0"
  },
  {
    "url": "assets/js/35.8e6e9b59.js",
    "revision": "f658f6c0cb27c22bfefc830f5a02bcf5"
  },
  {
    "url": "assets/js/36.cc8786d1.js",
    "revision": "7aafd4524d881a29c5c60444d7c45457"
  },
  {
    "url": "assets/js/4.792630df.js",
    "revision": "26a18028b55bbd64596a544faf89b010"
  },
  {
    "url": "assets/js/5.aba52061.js",
    "revision": "7c144907b43efa3ae57e0e0d92055462"
  },
  {
    "url": "assets/js/6.1bac72b5.js",
    "revision": "7e75b5c0445dbd878cc265d4e0ac2e3c"
  },
  {
    "url": "assets/js/7.e72c7ff3.js",
    "revision": "cea5acd745413eac3ce8e9f25e559088"
  },
  {
    "url": "assets/js/8.a6188b0f.js",
    "revision": "ea7c68b790f40078aa8adf757f1b99ef"
  },
  {
    "url": "assets/js/9.c619b924.js",
    "revision": "c0f02948574b016286c7e6a713f19991"
  },
  {
    "url": "assets/js/app.9797cc2f.js",
    "revision": "988d6d1b1b23dad2d8695affc352ec3f"
  },
  {
    "url": "assets/js/vendors~docsearch.c609d121.js",
    "revision": "02bd7b68139dde7aa8df15ec0c3c8aa8"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "9ceb73b0d20f07a71efc5a3164569d73"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "bd064c8fa7a1b1c247b96c3253d22635"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "02c3c692dfed93a346d56a87fca6e95b"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "a4a32c1b5ab6c5c154c8a954a02682d0"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "95c0e952875c794507cd35acba28ff0d"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "7fdd751ef0921d6714a71d4c68b4365b"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "0e5838d5f1aa7818eb546c3141b70ceb"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "3dc10e031bf170757998986270692d15"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "42310fbd3041db857e8b22a745627830"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "9cd546cc1f350ff4442af227561f4f90"
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
    "revision": "db8e52f126707eab302341278c7c9d02"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "40cd6373d20a42520a02cb5fa999f652"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "325c2d4c1e1d87832a6a94e693439245"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "97b84e4ad412f3c77b01d5560d025ffe"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "b37c4b93d0574ce8d4b2efb0b0707288"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "55c2ba1a7ee2cdcdf253247e445f8e47"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "2d89079a178a8834034561162f646601"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "1b3fa4f2285e08342f9d7ca8537f8c93"
  },
  {
    "url": "resources/books.html",
    "revision": "1f23dcaef2bb0eb186962d35f703857c"
  },
  {
    "url": "resources/community.html",
    "revision": "f8ad153d4a90c261677be2a7d31424aa"
  },
  {
    "url": "resources/conferences.html",
    "revision": "98f3d98cd94e447625471194787e868d"
  },
  {
    "url": "resources/examples.html",
    "revision": "d10f3f87c832a8c208209fa84b47b273"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "0160e114574907782ccda518560cb88a"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "57e3b8f3e4b084bd2f3e4693a644b5c6"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "a7b2ef1435cd09e468e45a4a037d722b"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "eddff7bfd682d5fd9b16873334614dae"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "03601d0616df982345ccb086e70f4e69"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "c89a46cf5e4bee3633770c7fe5fa33ff"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "642edb08d98160f505d9b3f6de19db59"
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
