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
    "revision": "358bb30dcea224a70444b266206a0ce1"
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
    "url": "assets/js/app.ffa340f7.js",
    "revision": "452f6c5fed63c27ba1fec291fd62e5bb"
  },
  {
    "url": "assets/js/vendors~docsearch.c609d121.js",
    "revision": "02bd7b68139dde7aa8df15ec0c3c8aa8"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "bfddf7b0026e64d97ae2af6ac2f90efa"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "c526ee36e35d0362d594d67ec06e0f63"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "22b1ecf48ee1b352ab295689538b0ea1"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "05b0a0c55b2a6676740e7f208f7e4cf6"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "289f345eb21845df87659c01ea4ba2e6"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "90f4c42e03b010d56d929cb93349a393"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "9b2bf75f7540110c669b751a72071915"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "3803fe802e57b07602d1c2a1cae1953d"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "699869748bf69c9da0304cbae0feff6c"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "61232803cf781114c5eb0815d57adec5"
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
    "revision": "5f8b0cf9045d5deb86f255741cda6ac4"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "7f98c6ee166b59f65ffedae9e80e2d54"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "de092a793687a61b473b686fb87974b2"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "b8438a1a6c4bdc221a3a810e94785d92"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "7c2baaf570fca5ffb6d5bc7793a1ec09"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "6d810ce33403a1ee34d4631985083ced"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "9cc5fa762ae12bc9934f3c16bc40c631"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "9718c638ce55084171de0f8d1dba9805"
  },
  {
    "url": "resources/books.html",
    "revision": "c5a7494178b723a69405dd6f3b5711b7"
  },
  {
    "url": "resources/community.html",
    "revision": "7591b5fcd2c0c92cf7b8c902883919ef"
  },
  {
    "url": "resources/conferences.html",
    "revision": "8ead788be94308701a218a59ee215ef8"
  },
  {
    "url": "resources/courses.html",
    "revision": "8d7606b5025da4ac8c33e982d2dcdb25"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "bc8be9002225f45427a7a61971992220"
  },
  {
    "url": "resources/examples.html",
    "revision": "a97a2f9cdb766cbd680ea77a9434fee6"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "5935c6268e5550514c62c249c8b7afdb"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "52ac5db74d2b8a4831c0162282511744"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "4700aae6ea6c2b900ad222679178b1a0"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "9039f531417d4f9d1a1820fe9b29ebc1"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "54e1bab55f2853f5f87dac34f89b7204"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "36e56848f1b9e1dac77fbb0e74a653a2"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "1b72898b86817366fd5580757452984c"
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
