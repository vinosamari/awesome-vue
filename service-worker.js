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
    "revision": "97a0fd68226bdf54eaf69773a39f2cfa"
  },
  {
    "url": "assets/css/0.styles.bdda569a.css",
    "revision": "c024588bf133710af070a4beb6bcb5f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e6460e8d.js",
    "revision": "e5255816fc0a32119a892b6fccd09c41"
  },
  {
    "url": "assets/js/11.6924ed7c.js",
    "revision": "9fa4564ac0a912e67996b45f45729783"
  },
  {
    "url": "assets/js/12.98475e27.js",
    "revision": "d2362f733d478fb4c1271e3decc62ac1"
  },
  {
    "url": "assets/js/13.9ac040fc.js",
    "revision": "096ce92472aaf509177e86e6c781e0b2"
  },
  {
    "url": "assets/js/14.e36e6a5c.js",
    "revision": "c1781aacd09566000f442fa54bbeb826"
  },
  {
    "url": "assets/js/15.cc1f300d.js",
    "revision": "4022ea2e688eb61601bd7a70715affee"
  },
  {
    "url": "assets/js/16.91025610.js",
    "revision": "4589846320da0ad256af5080288d12ab"
  },
  {
    "url": "assets/js/17.1c1dedf5.js",
    "revision": "40b0a7ba84e69d26873f93e1e59cda23"
  },
  {
    "url": "assets/js/18.e30c7628.js",
    "revision": "6473e430c55f5c714b4e544331f88e23"
  },
  {
    "url": "assets/js/19.8cb50f60.js",
    "revision": "71b38b423cf8042dcb745f5fc02e00a9"
  },
  {
    "url": "assets/js/20.b8e118ee.js",
    "revision": "51804e3a715d67f81358278c8869b0f8"
  },
  {
    "url": "assets/js/21.038439f5.js",
    "revision": "f2311c02d2b559f14c017da8596b0fba"
  },
  {
    "url": "assets/js/22.ba4b6e71.js",
    "revision": "7563511d8d3cfe2f27d97a2d7150f260"
  },
  {
    "url": "assets/js/23.c1bdf1f5.js",
    "revision": "020d00cb7eb4fdc82eec84021991eca4"
  },
  {
    "url": "assets/js/24.1d01c96a.js",
    "revision": "dbcf4960708ac791e58ffff68084de25"
  },
  {
    "url": "assets/js/25.d10edd5e.js",
    "revision": "be65dd299808a76f25cb479857dac6c2"
  },
  {
    "url": "assets/js/26.8c6b1bda.js",
    "revision": "b893944d10581b069614d7de6cf4bba7"
  },
  {
    "url": "assets/js/27.df6eac84.js",
    "revision": "f2ba4c336deebdfe362280c71143e09b"
  },
  {
    "url": "assets/js/28.0fae5872.js",
    "revision": "897e872ed1c12e9978c470a55923a963"
  },
  {
    "url": "assets/js/29.59425912.js",
    "revision": "a17cf2c21374ced8e5a38cd2aa95c824"
  },
  {
    "url": "assets/js/3.8962f383.js",
    "revision": "de67384635107d887f904ebb580989e0"
  },
  {
    "url": "assets/js/30.d4ee7a76.js",
    "revision": "9ecf4bb61fd983de0bdbf9f32e59ccc5"
  },
  {
    "url": "assets/js/31.425fb2ba.js",
    "revision": "edd2b7ef78e7561c96d26e08e61af1de"
  },
  {
    "url": "assets/js/32.9d77fd81.js",
    "revision": "92bf891b498bca2fb6989f474d547164"
  },
  {
    "url": "assets/js/33.b16164f4.js",
    "revision": "f07dd56c5d5cd96892c609baa896a91a"
  },
  {
    "url": "assets/js/34.0009c053.js",
    "revision": "e5793d0727daa0498891f31ed640dccf"
  },
  {
    "url": "assets/js/35.15152f1e.js",
    "revision": "fd1fc41699ed0d375e3366b43203e287"
  },
  {
    "url": "assets/js/36.8ca552fc.js",
    "revision": "5f171c92c84e5bf5e65b1597f3b67e13"
  },
  {
    "url": "assets/js/37.5faba6d3.js",
    "revision": "17a53fb23f8517d55c790e865ccde5df"
  },
  {
    "url": "assets/js/38.1e3761d6.js",
    "revision": "689b689e3d05a6ee0fc9c450979e47f8"
  },
  {
    "url": "assets/js/39.b44e3fb8.js",
    "revision": "fcd303d8d861547e6babf3e7e19d2c14"
  },
  {
    "url": "assets/js/4.9e67c679.js",
    "revision": "17576109aae22927d1443c1674e45763"
  },
  {
    "url": "assets/js/40.529418c5.js",
    "revision": "26d3d58acf8d5bc6b17032651d3f63a6"
  },
  {
    "url": "assets/js/5.88b9aa21.js",
    "revision": "8c37873a81de640ca323ba2bcdf0c4a5"
  },
  {
    "url": "assets/js/6.15e351d3.js",
    "revision": "431f00f3475767f7a82d4072c452ddc2"
  },
  {
    "url": "assets/js/7.beda3ddc.js",
    "revision": "82bdc10348788377430e8e4ad35544ac"
  },
  {
    "url": "assets/js/8.cb9cb39c.js",
    "revision": "3f1995f6dc8bb91d3899131953bd5a52"
  },
  {
    "url": "assets/js/9.ea9d3e8a.js",
    "revision": "131aad72d34a1be61cfff859ae65018c"
  },
  {
    "url": "assets/js/app.0ee7fa42.js",
    "revision": "1d14118f14db9bd66387c36c68435209"
  },
  {
    "url": "assets/js/vendors~docsearch.729fc4ac.js",
    "revision": "d941049115fdd30e8e07b0bfd4817639"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "8ed07702183b3a3ead2162ea94dce3f0"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "2c61fb5ee4c494e80bb15a8de97f7581"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "aaa802d33296dbea5acb32a38b2eb333"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "a174ac5b618198438da8329909d6b8cc"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "6db7541cbf32c84318dfe253a66efec1"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "39059c7bb04dd63eefe90c4eea0222f1"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "6cd3d39eddc77debb9b28d0574b0ef67"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "18538cd5279286c2c327e8e1b64a0ee2"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "c1a990cdfa9fd47250b86551004247c5"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "bac9d59c6552a6837edc1bb86a313a26"
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
    "revision": "17dc203e3a1494fc6eba6d79dbd22799"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "cb139de8f04e3aa2ccc85d15b2812270"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "5ee1458c99099c8433a2ce289838960b"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "a67d034311f80d921f7b8c90506d490f"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "caf87bce3674dcff0e1e89c4ac729be1"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "be3acd8a44e5bac79f89dc6d95c3c361"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "01cbdd177b29643964cad2de5bd0991f"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "d200306d76c4d8d8e06cc27bc824dac7"
  },
  {
    "url": "resources/books.html",
    "revision": "b41b6c78b80c07a55187f25eff1fae55"
  },
  {
    "url": "resources/community.html",
    "revision": "de3dc3348e3b468603fa42173ae49e15"
  },
  {
    "url": "resources/conferences.html",
    "revision": "a302ea787d2a270e5a2c8b5ebab103cf"
  },
  {
    "url": "resources/courses.html",
    "revision": "1e4ae74edf61a763a6f3903a2772ed26"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "fefeca1530d1f3ff538cbfbe18cefd9f"
  },
  {
    "url": "resources/examples.html",
    "revision": "69efe9de2d3eed5a471a16cb7cb518c6"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "a935c27d9fce3781d64bb3515c67109d"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "f2e31972a3760f4ca4574f5516d5c8a0"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "b797c910f2652f3755d02c395126dc10"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "13e324533e209ed5c29615cee3afaf56"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "5c936e9c6d745597b3d52a7eacaa6f08"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "7840e23d0765a57602adc73a3d818e43"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "b117cf00ef3c59ac70b572dd024a3aab"
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
