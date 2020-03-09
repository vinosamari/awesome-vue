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
    "revision": "25210ae15d95aa80161fa1da95f282e8"
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
    "url": "assets/js/12.76a1faad.js",
    "revision": "61e4733d4fffce02509f7ab31630388a"
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
    "url": "assets/js/app.8952728f.js",
    "revision": "05fd75acb589da1ebb68b081e7dc4394"
  },
  {
    "url": "assets/js/vendors~docsearch.c609d121.js",
    "revision": "02bd7b68139dde7aa8df15ec0c3c8aa8"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "44c07f4eb95799d51f50607c3c1fe849"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "82085c1ef3b63f5ef66551681805b70e"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "60027782ebd64ab2e4eb76b34484fd10"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "90f02e048ac98526551a17fc68da3b52"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "7bf5b0235d90966c0de88d1d58b614a8"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "90e9b650cd99ba08ce4519a9cd1137bc"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "db0278461569fec51dc8918b3dff355b"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "fc87858c0f6425cb35f843b5ac80e341"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "a426bf0ae8fa95417b7688e9e89e0a20"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "f39eb8dd06b1f427629e268df16a6583"
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
    "revision": "8b0e1d46d0eef8995da582fb5bb1ee0d"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "c7887a2769030a72a76f24f595521730"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "e4bf7abf2ce33bc8d42e86896c793ae5"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "9c323c234ed5225c5569c5a1b81995e6"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "760d6c9f8e9f5f0ae043703eb4059310"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "c7f59c4a788e142dbeb30078ed08b307"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "4d21cf4ba73f46536810a38e772bf24c"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "df10dfe43cea811293b57a892c37a24b"
  },
  {
    "url": "resources/books.html",
    "revision": "18681d5b747618596553472906384e0a"
  },
  {
    "url": "resources/community.html",
    "revision": "4d57172f57d7f25e4ce314f35d35c74c"
  },
  {
    "url": "resources/conferences.html",
    "revision": "209134419c52a230967df4e9637a2cae"
  },
  {
    "url": "resources/examples.html",
    "revision": "e9e63398de38214d9e6842af50b51587"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "1a8ad96061eed4d9f210b85f73c9034f"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "c30ffebe8cdb17b0d20f8c6bdf7f688d"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "3e43c114a827b9f5529342d881b073c3"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "d7b280326b3b2c467795244d2fd3df6c"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "d9469065d740e9388a03ae6d642ff8ec"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "3d7026760a98356ee83b86aacb7ce98a"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "2570ac25423591458e8e0e3832ae63bc"
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
