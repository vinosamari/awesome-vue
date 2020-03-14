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
    "revision": "23a302242ce84901a6081c255722f414"
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
    "url": "assets/js/13.ed61e787.js",
    "revision": "ee953e2ef0bf574d8cc2cff7436bbb54"
  },
  {
    "url": "assets/js/14.6941b0e7.js",
    "revision": "563a38b5b686d781472f7061b79b36cf"
  },
  {
    "url": "assets/js/15.15423bdf.js",
    "revision": "0136a6e907719bb4edb667a10fd2aa8e"
  },
  {
    "url": "assets/js/16.d49ab9a0.js",
    "revision": "ad63578932349b075c7733d55f065ab0"
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
    "url": "assets/js/19.e04ef1e9.js",
    "revision": "73fec945f7a8e005bb6120c55d912433"
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
    "url": "assets/js/23.a4898d6c.js",
    "revision": "2da5c300922eddfa2df02ae43759c42a"
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
    "url": "assets/js/30.def24a4b.js",
    "revision": "92b63522ea815a50e26f484e7b33ef2e"
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
    "url": "assets/js/8.0897b0bf.js",
    "revision": "e98557fe873ab9317e576e7335ff40f4"
  },
  {
    "url": "assets/js/9.4a7f00ad.js",
    "revision": "3d935c07b3082e59f8b179d069f521a6"
  },
  {
    "url": "assets/js/app.29f304ee.js",
    "revision": "237f62fd746f5a7e23ac309de75afe14"
  },
  {
    "url": "assets/js/vendors~docsearch.c609d121.js",
    "revision": "02bd7b68139dde7aa8df15ec0c3c8aa8"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "6d81c194ed9f255f0f00f552ec971e9e"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "2a9ab66ba19dad9a684b4da47a2d6aae"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "5195ef7c3e91cf77ace175e215327a41"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "89c944a607d69a0ad886477b697e4ddd"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "1dd3d0b40f4c5cef9314a0e8f0a1e57c"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "3c72eb0985df5a3babbd5cf5eb27e266"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "95f809fbe89206c32d9ce0f7c4f00e9c"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "a3d36f38754c6c27e93f644692cda98b"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "3bd013825c340fc324c6f4970d198300"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "90e9705b8e85e97e7ef845c73192bf64"
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
    "revision": "599a9ffbb9736f8076ac0354ea23e64d"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "940e4c8836eda3a48b4693e6869b3ba0"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "d978f09e8dae0086835e22d17299021d"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "2260be17fb4e1b748cba6fb508c5296f"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "0b2a4ae513d86cd3b0a8af7908ccfdec"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "e40b5682512a36b0d0883c238fcabd80"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "c1683ace0f52dd73c5d7846a741ad3ff"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "b8393fefd0d7513b8484cb31895f593c"
  },
  {
    "url": "resources/books.html",
    "revision": "99b7f4fe25a13ba653c79a2aec0865f5"
  },
  {
    "url": "resources/community.html",
    "revision": "99c424ef487b74a392a6e397b717e54d"
  },
  {
    "url": "resources/conferences.html",
    "revision": "6f0327779992c1e15e7e724645c79c51"
  },
  {
    "url": "resources/courses.html",
    "revision": "22a9146c2d43c4bb9476d251c5753a7a"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "319114d0f45ac99e67b349caf9350205"
  },
  {
    "url": "resources/examples.html",
    "revision": "b6c653f8c3927136a349f3de6ea50f36"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "af721e847e5faec7a802661edc8c9c64"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "5cc6a4f14a33638d878054b01534bb6c"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "f4721f41612d60ca4d09a7c9cb933088"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "6c055ad8dee7443a231f7e66ac59c630"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "c553c341e2d7d7e5a23db9ea06fd4d53"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "9578ffb6ca48bb6ea7a7cbf13247dea5"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "fd40ea9122cc55ac4ce0d226b6e80076"
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
