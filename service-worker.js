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
    "revision": "e8cc1059116b4c9126c9ab15dc228c2b"
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
    "url": "assets/js/10.260b9a44.js",
    "revision": "68b1f0e5b4dedc6177d6d8c1fe8caf75"
  },
  {
    "url": "assets/js/11.3b430b7b.js",
    "revision": "72dfdacb4ab88bf2f6daaf13bda99461"
  },
  {
    "url": "assets/js/12.a802ab45.js",
    "revision": "400614ffbc3b586392b9b770bcd9c2b9"
  },
  {
    "url": "assets/js/13.484de095.js",
    "revision": "f01f6a6ac1bccb19598ce914a25bc55b"
  },
  {
    "url": "assets/js/14.6941b0e7.js",
    "revision": "563a38b5b686d781472f7061b79b36cf"
  },
  {
    "url": "assets/js/15.22edc335.js",
    "revision": "8a81dc36dd989303cf8be68de1175aff"
  },
  {
    "url": "assets/js/16.ead24297.js",
    "revision": "d1187b8509c380a409ea2d82bf372d9f"
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
    "url": "assets/js/19.5dec68e0.js",
    "revision": "0baa19877dcd714e7fa33fe48fd3c489"
  },
  {
    "url": "assets/js/20.8dc76710.js",
    "revision": "021459067ddcb7c98cc9906f32688132"
  },
  {
    "url": "assets/js/21.403f5259.js",
    "revision": "b067f9f41f860255f8f3e209ec85e71e"
  },
  {
    "url": "assets/js/22.7f876be9.js",
    "revision": "73eb15a6f961b0d00e22f4a6de2fe2f5"
  },
  {
    "url": "assets/js/23.9c4755d7.js",
    "revision": "9a4ae0b4a488c5357d0e18c91015a915"
  },
  {
    "url": "assets/js/24.dcaa1d1d.js",
    "revision": "585b279ab847f24c48433b56f7f2356d"
  },
  {
    "url": "assets/js/25.16da834c.js",
    "revision": "a233c47fe2398ea38b48d55140f3fcf8"
  },
  {
    "url": "assets/js/26.47d2a4af.js",
    "revision": "8c8640c300ca0f9351364b1252633f58"
  },
  {
    "url": "assets/js/27.75ff838c.js",
    "revision": "06e0305cd333e58b76ad220644ac30d7"
  },
  {
    "url": "assets/js/28.da9ff9ac.js",
    "revision": "dc4ba0ab867e4c0778318ef61474a373"
  },
  {
    "url": "assets/js/29.6d64eca1.js",
    "revision": "a66ddaac19fbe56c47e55a4388867222"
  },
  {
    "url": "assets/js/3.73fcae93.js",
    "revision": "03b56acc16debd4a353169da1c553cca"
  },
  {
    "url": "assets/js/30.96c3f149.js",
    "revision": "2540099479392ff7f9191bb78a409e38"
  },
  {
    "url": "assets/js/31.52c11f84.js",
    "revision": "cb57bb9fdb026b9ec6822a7574ced2d0"
  },
  {
    "url": "assets/js/32.9b0ee6a2.js",
    "revision": "483c71e37c34114b957a66705a007ac6"
  },
  {
    "url": "assets/js/33.e79942ea.js",
    "revision": "781dbcd4156a981441be7648aa832183"
  },
  {
    "url": "assets/js/34.8d3a5728.js",
    "revision": "1acb8fd1a7ada8e77cdba99c5f13b5a9"
  },
  {
    "url": "assets/js/35.fd263bca.js",
    "revision": "56c0d568d73271ecf93b132460b373ee"
  },
  {
    "url": "assets/js/36.1964ab67.js",
    "revision": "132532f4377822449a07142f1ba4b8ae"
  },
  {
    "url": "assets/js/37.027863c6.js",
    "revision": "04c87713ff483dacb3fcaa1192cef97b"
  },
  {
    "url": "assets/js/38.ddc7beb2.js",
    "revision": "a5ef3b807b7c14ac4e80b3035c24abb2"
  },
  {
    "url": "assets/js/4.792630df.js",
    "revision": "26a18028b55bbd64596a544faf89b010"
  },
  {
    "url": "assets/js/5.2642d68d.js",
    "revision": "47a1b5894d0b7d6fbf28889400b807ed"
  },
  {
    "url": "assets/js/6.1bac72b5.js",
    "revision": "7e75b5c0445dbd878cc265d4e0ac2e3c"
  },
  {
    "url": "assets/js/7.2f0769e3.js",
    "revision": "c045fec3772a49a3a8c93d46dc2e3c3a"
  },
  {
    "url": "assets/js/8.2edc9da3.js",
    "revision": "07b65268ed7d9b93c7ce1664a733dccb"
  },
  {
    "url": "assets/js/9.4a7f00ad.js",
    "revision": "3d935c07b3082e59f8b179d069f521a6"
  },
  {
    "url": "assets/js/app.0a3b29ad.js",
    "revision": "6c7bdbe1d016499534ce543c10c1fd5f"
  },
  {
    "url": "assets/js/vendors~docsearch.c609d121.js",
    "revision": "02bd7b68139dde7aa8df15ec0c3c8aa8"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "aeeb48b231229796378c8171acbd2ab9"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "94be1b1c949372365b3541f371095cfa"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "352f3b074f781374ac16848ac1038e18"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "2226001737694f278f8635de6d240b76"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "ee47911f2ead3c2f0e5bd5d59bea2d46"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "86350c63e79e47b0db87de3c92c50cc1"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "dfad90c00b8e7e42831a5f2974c2fe7c"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "34b02552be896d7bfb56af2c0f68a6ab"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "0c08d197c6b9dc3d5ba35adb13803902"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "509997cb445c59cf2bc7eaefc9911ad5"
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
    "revision": "09a9dbe06a8ae929cc0117784c364f7f"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "b27b1cb6d281c694b79a673ae5d779e0"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "e3c92fa160488697b393f30fc987400b"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "4a6e02effd3e9918f3d066c2f43f2296"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "cd913ac75ced07d38303afdee2ae984c"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "44bfdfc4001dce65372244aa5b5f3828"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "3dcb70735fdb12c2bd8837d29dabb51d"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "ca867b42e55f16c097cda09256594434"
  },
  {
    "url": "resources/books.html",
    "revision": "c49065a122c1b81ec3ef489bc4875503"
  },
  {
    "url": "resources/community.html",
    "revision": "a4666f5148e9eaac9ab3fe24b797ad4f"
  },
  {
    "url": "resources/conferences.html",
    "revision": "8133ba0d38808f3e0691dc8d9863dff3"
  },
  {
    "url": "resources/courses.html",
    "revision": "027d73d06efab22e324d7e8f9b0e80ee"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "d77b32880794f444925a95b9f3ff80a8"
  },
  {
    "url": "resources/examples.html",
    "revision": "6cec6362aa78df05c8b92c7dfbdb0480"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "35190703b3c4844b4f487da2729ebfd7"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "9fbdb4e9be8b9f7d179fd8a8bf23deba"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "f49bc177257c7eae14e654b284e93f37"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "683f520c2abf988615c9296aa38dfb32"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "67f57f933fac08e07e0e11f3356d3dd0"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "5c256e2f5377ea424859f9fec34f7426"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "f73813fa759d5973627d9b16e421a2d5"
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
