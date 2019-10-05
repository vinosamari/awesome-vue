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
    "revision": "8d2b44bed287c175ac43bb431a6241f0"
  },
  {
    "url": "assets/css/0.styles.edd06054.css",
    "revision": "aa68e412d008cc0090b0c6d1ff2dbf9f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2871c695.js",
    "revision": "11ec82094fdcfc6e2d661de7fb6a1612"
  },
  {
    "url": "assets/js/11.0a89712d.js",
    "revision": "954807c6a7048c2dc4ee42da2ea90fa0"
  },
  {
    "url": "assets/js/12.9bad4da9.js",
    "revision": "3e2287d8de6898a77ceb3ba9433b0485"
  },
  {
    "url": "assets/js/13.ae7a163a.js",
    "revision": "2d14f30c55bb56891481cef53d83deb5"
  },
  {
    "url": "assets/js/14.4b7b2745.js",
    "revision": "a05eee715dbbfc4b9366f09baae59f10"
  },
  {
    "url": "assets/js/15.06f757be.js",
    "revision": "5c8f36f8e849ba5e519f5d84ee9ec43b"
  },
  {
    "url": "assets/js/16.4df6de18.js",
    "revision": "e4f1a89e325e703b92d1fd45407b4de6"
  },
  {
    "url": "assets/js/17.c20b71d8.js",
    "revision": "4d239e68f701878140060735abbc8d6a"
  },
  {
    "url": "assets/js/18.24aa9e1b.js",
    "revision": "cd14070c443b74531ddc386f6ac319e3"
  },
  {
    "url": "assets/js/19.7089f789.js",
    "revision": "af65c3c9cdffa9baa9b0d00b7e82f37f"
  },
  {
    "url": "assets/js/20.edf81f73.js",
    "revision": "5a6189054e2d05ffee5f7c81eb62c751"
  },
  {
    "url": "assets/js/21.30ee22f4.js",
    "revision": "3d74e6d860e41f1dfd55d0b185f443c8"
  },
  {
    "url": "assets/js/22.c017b9df.js",
    "revision": "d4fa5a42c942270bdf42e188ff782a6e"
  },
  {
    "url": "assets/js/23.7476443c.js",
    "revision": "72b1d0c65b293ebed132b4c1ead14cdb"
  },
  {
    "url": "assets/js/24.5ba7e102.js",
    "revision": "eb9c928bcdd6efd272bffaa2eb117102"
  },
  {
    "url": "assets/js/25.799cca2e.js",
    "revision": "0b3ef67d350f3275b1ec1057129498d7"
  },
  {
    "url": "assets/js/26.0b328a7f.js",
    "revision": "1c8e67d0a49c78c8f327f7a2eb885749"
  },
  {
    "url": "assets/js/27.6ac8af6d.js",
    "revision": "d582cf0144f434dcc6b1de93335a7aa4"
  },
  {
    "url": "assets/js/28.5fb2d20f.js",
    "revision": "8f3d3d9927e8604b9ed217b3c2a095f4"
  },
  {
    "url": "assets/js/29.c347e496.js",
    "revision": "45f356e6640dea31ab24c736ec5bf0a0"
  },
  {
    "url": "assets/js/3.ec291cd3.js",
    "revision": "acf175d676ca98b835e08f0dd4e6bd7d"
  },
  {
    "url": "assets/js/30.e2fd1bc7.js",
    "revision": "80787d66b21d9736c1b22394c7289487"
  },
  {
    "url": "assets/js/31.9e611077.js",
    "revision": "ccb962d54cfee01722922941a8a4b894"
  },
  {
    "url": "assets/js/32.9592da57.js",
    "revision": "7398b0257000f48793e08c5610deef46"
  },
  {
    "url": "assets/js/33.652c6268.js",
    "revision": "9909bfef1432e2e7c60989c74677c636"
  },
  {
    "url": "assets/js/34.a7b85a0e.js",
    "revision": "f93b76e64f57d9fbf9622b6ed1c3cc77"
  },
  {
    "url": "assets/js/35.ae5b2083.js",
    "revision": "7633c851448f5fe559ba607640a29ec6"
  },
  {
    "url": "assets/js/36.065cfb45.js",
    "revision": "5ad5fe3ecfcb2372b6f5efbf74da813b"
  },
  {
    "url": "assets/js/4.5609cb2d.js",
    "revision": "429277fda6f100f773a2c653a6ccbbc9"
  },
  {
    "url": "assets/js/5.2dcf57a3.js",
    "revision": "ef067f16b1775018dadf1bff873d5e87"
  },
  {
    "url": "assets/js/6.f61748d5.js",
    "revision": "caeded466998a79d39c2089e075df877"
  },
  {
    "url": "assets/js/7.6b95cebc.js",
    "revision": "7073c2f1a0b9d9f02843469f7feeae15"
  },
  {
    "url": "assets/js/8.91434a12.js",
    "revision": "3fea8f138ca5557a971cd2e49b88828e"
  },
  {
    "url": "assets/js/9.395c5677.js",
    "revision": "7de65b57927ec48dceac7b8ca8d7d956"
  },
  {
    "url": "assets/js/app.73fb68b4.js",
    "revision": "ede70067e3c5940dfe685d0c95856b9a"
  },
  {
    "url": "assets/js/vendors~docsearch.3a75ac66.js",
    "revision": "c43a5696dcd6aa2e005cfe9865863d5f"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "5d9bd16cb2a72bd95b6ce08432b229c9"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "a56b64b170ae0a67151506779e753eb2"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "94993b79e489b9e5223d096fa2480b83"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "095acd98aa1bc240f6926b6e21e70f4c"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "938e850a16eb9fc4f7b1c673b3c85ca4"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "f7aad39c8208eda64c69319201c91395"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "32841fe8ba970644b6845a32a2b2ac3d"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "5ab58ecd006984f8ee6a88112fbd68fb"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "2e47876091891b1945a6cd2ca0d34862"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "0792a2bfa500b71d5439d850205a3b7c"
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
    "revision": "faec047a1e456ed6e04b361442d8f55c"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "465383929e9b081bc6de6063639f5232"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "7221d49417d65e0c39b2b1efbcd84b06"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "6c2905f823e68e1d0416397485c7a98c"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "a13685baf7a277c19cf93a237ceb4ef2"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "7bbd0fabc214bed48544a7fbd0a40a35"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "3ddb0f03033a51e4d33fc94ac97df6cd"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "1a04585be7c2707a7792909e80146747"
  },
  {
    "url": "resources/books.html",
    "revision": "f0b43afb229337fedc55695a5bc12d3d"
  },
  {
    "url": "resources/community.html",
    "revision": "c60948d864ca1beb31d2b2449d47523f"
  },
  {
    "url": "resources/conferences.html",
    "revision": "7f1088b8bc6d937b43017f9147f764b2"
  },
  {
    "url": "resources/examples.html",
    "revision": "6697413d6a1afb10928fbcd38641cf1f"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "afa50f9780bd725932f23de4bd553406"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "b63dc9bd1866f249682d854345b8dc08"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "803d4b0646c311123307ec9329b40672"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "d7df490a5dc88ef9e573cb79ba87a484"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "63d57909b7ac161b49260263cf785baf"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "785d1c7ad68fe766ba1f175203a1d275"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "6380e005a838b269a74a92e9f17b54a4"
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
