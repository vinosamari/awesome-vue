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
    "revision": "fabc151e199ceb88653d04e3ac1984c3"
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
    "url": "assets/js/13.a49311bd.js",
    "revision": "b8a372b32652b41a34f89919f84d9aa2"
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
    "url": "assets/js/16.d1d119c5.js",
    "revision": "20448d0053e915383647f1e88fee2e6f"
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
    "url": "assets/js/19.5b27c8a1.js",
    "revision": "6b81724b60c06490293092502d284887"
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
    "url": "assets/js/23.d18d25ea.js",
    "revision": "9e60cc36e302cb5c43b9a6479bb17fcf"
  },
  {
    "url": "assets/js/24.dcaa1d1d.js",
    "revision": "585b279ab847f24c48433b56f7f2356d"
  },
  {
    "url": "assets/js/25.0a02a50d.js",
    "revision": "da59b76c5dff002e4a927d0b4f679b4e"
  },
  {
    "url": "assets/js/26.57de579b.js",
    "revision": "c995e250fd3b0efe4bcf9a8bf910b78b"
  },
  {
    "url": "assets/js/27.09415e5e.js",
    "revision": "5418a909d25a5795f1e64fda46b7d3dd"
  },
  {
    "url": "assets/js/28.da9ff9ac.js",
    "revision": "dc4ba0ab867e4c0778318ef61474a373"
  },
  {
    "url": "assets/js/29.4416f3ff.js",
    "revision": "c7ae5a99c7ef673c36917fc02da945ac"
  },
  {
    "url": "assets/js/3.73fcae93.js",
    "revision": "03b56acc16debd4a353169da1c553cca"
  },
  {
    "url": "assets/js/30.d19387d4.js",
    "revision": "c40fa73d760ccc4afb7d177e82b3f7c4"
  },
  {
    "url": "assets/js/31.848ebf18.js",
    "revision": "f54eda11c0f5cb56e11a7f2a7856927a"
  },
  {
    "url": "assets/js/32.6e83e4f6.js",
    "revision": "e6a460d7b0c9049bd860d9c82ae1e08a"
  },
  {
    "url": "assets/js/33.6815f9cf.js",
    "revision": "49f0f90c9ec545678ad23aeee8d0d776"
  },
  {
    "url": "assets/js/34.505d0dbb.js",
    "revision": "0a25d1b462f591f2cc6074ecdc0e3215"
  },
  {
    "url": "assets/js/35.b2056d24.js",
    "revision": "4cf907a864788aaa825431141b0b8296"
  },
  {
    "url": "assets/js/36.465617e2.js",
    "revision": "545f3283a2057bcad2e397af610e313d"
  },
  {
    "url": "assets/js/37.8ffe68e5.js",
    "revision": "c2cf84463c9e458ac6a3e083bde3d34e"
  },
  {
    "url": "assets/js/4.792630df.js",
    "revision": "26a18028b55bbd64596a544faf89b010"
  },
  {
    "url": "assets/js/5.e595de8e.js",
    "revision": "6571c1172d4687978ba1aaec3ff4f25b"
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
    "url": "assets/js/app.5d4d2878.js",
    "revision": "8932821643d4a67dd6cf276f7ba2d995"
  },
  {
    "url": "assets/js/vendors~docsearch.c609d121.js",
    "revision": "02bd7b68139dde7aa8df15ec0c3c8aa8"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "168e8e021436045006ba4c9d48a907a6"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "abc216f1a6a454ad1dce52df98a3a7c8"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "d34b4c7f14d8244e88c756fde6de25e1"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "8deded97bf50b79d89ae5fd7ffdf77eb"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "044896eab26eda17f18c784173674fe6"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "38b7fe40657d7ceede290243da49944c"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "82ad54d4a00f1d502144cc3e02c27fbc"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "beee3c96f243517888175bee73941a7f"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "75586259ca3f6816a68bf62b0f5d53f6"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "a0feb0896e954b4df38a38c4e7b2c5c4"
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
    "revision": "447c618d5d8f3bc9bfe0bd1b8cab5ac6"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "501529c59408e07ae060a1110cf165a8"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "49959e240feea3c4a84169a2273743ac"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "44bb648acc6b219fcb178c10e77ae5b4"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "185b87b473ac4293870e45babd0f9774"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "c9e21411cf63532f64fc94b221ad2f38"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "3e6aeedaacba4514b10fe83b7adc3290"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "bbc862a727aa060b2b0f96be32eaf1bb"
  },
  {
    "url": "resources/books.html",
    "revision": "5916b619e142236fa95906a7fade3302"
  },
  {
    "url": "resources/community.html",
    "revision": "c67357c49d13c4a1b9dd558766bf40e2"
  },
  {
    "url": "resources/conferences.html",
    "revision": "5d3f8558daced33007a0b92862f1c746"
  },
  {
    "url": "resources/courses.html",
    "revision": "d362803234e2c21f45b43d0e11c70775"
  },
  {
    "url": "resources/examples.html",
    "revision": "e698f25313fb668e8b3b6f394c18c2e7"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "6aa647662921ae270f6d53a293881071"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "b2024ec8ca4ae8aec6f4bc1319b1ff4d"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "349f2ae2da15c3ad9be1e9712be33dd4"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "6dfd16957d3bc3243925361e154100f0"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "41c66fdbdf2ae236b68e47e0e7b5a373"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "1f635ba5c87ecca8a6dcf5be21ca809d"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "d503817f46fd6ceeecd5a26e29327729"
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
