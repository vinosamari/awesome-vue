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
    "revision": "226f30c166e404acf86bc27174a39616"
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
    "url": "assets/js/app.69768567.js",
    "revision": "de9f6c901be16bf7606d71d5581c96b1"
  },
  {
    "url": "assets/js/vendors~docsearch.c609d121.js",
    "revision": "02bd7b68139dde7aa8df15ec0c3c8aa8"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "4f05a80164ab6a3f4f136bc5b868d077"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "daf43aa3fa4153aa5b65adf50ac02a4c"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "7d02ca27e369b824f9d96cea4853f378"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "08dd65c36a8b6b0bc6a57363ca8dc2d9"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "bfbf156672a60a9c7322f83e616ccbd6"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "0716cc96581803a522a69bd63201f269"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "306cda4b969579168dcfc3e7c547d9e4"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "421932a77171764c27444aded3f8e473"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "f471d65cf1b481b4b0f199dcd6380605"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "b62b70aff2b8491fa50d31171afa199b"
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
    "revision": "8f80ffa92e7fd4d1bfd2d864a79c0793"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "14c9defd0c0f7e3bb889b87cbe932895"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "2598ea91531ce76f9dc4c25bd1173164"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "d15d144f5717686c7630e0f1ae55b0eb"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "35e6b07c1e4e96f74011b9d3e5bec610"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "672581b71a089a8f2cc34e7893063ee5"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "5a1c939930ba5871050a15a078c76e0c"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "afae45980f69aea6865d08827185b87c"
  },
  {
    "url": "resources/books.html",
    "revision": "ce07bba8b0e3ddcb976aba35b519f35f"
  },
  {
    "url": "resources/community.html",
    "revision": "690a679536ba1c189e354ff79abad6f8"
  },
  {
    "url": "resources/conferences.html",
    "revision": "a4935495b7c41a44c226cf916e37c7fb"
  },
  {
    "url": "resources/courses.html",
    "revision": "30f46d10d14fe488c6d32e59874824b0"
  },
  {
    "url": "resources/examples.html",
    "revision": "7e3da0aae2df674579cc225988ced161"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "e1ff46a59f7eb2ab8ee15488e6a022ed"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "25e9dc0b762006d5f45bf69becfd7992"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "9dde03b9974889b46331e80407df1f9a"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "43e11f84fbff8b99841094cd6eb2d48e"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "5835a82eac97c2d1fbf37d09b28335b4"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "bb2a77f832c3d5e6a5945997f57ede7a"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "b24d76a49c248916ff8cdd9cb2365252"
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
