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
    "revision": "b7c1d5b172a542ec31be16f89b99efea"
  },
  {
    "url": "assets/css/0.styles.8729c105.css",
    "revision": "c04f618332e622297b4ad1f3132b827b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.50c3ffd9.js",
    "revision": "5266b001509fcd0a624209458d97dc20"
  },
  {
    "url": "assets/js/11.bd14e3af.js",
    "revision": "e2a08dec58e2fe4ebeac80f6c244ffe9"
  },
  {
    "url": "assets/js/12.d7c6d842.js",
    "revision": "50065e12f5d04504ef4d0b8b4c542a2a"
  },
  {
    "url": "assets/js/13.0909a73f.js",
    "revision": "096ce92472aaf509177e86e6c781e0b2"
  },
  {
    "url": "assets/js/14.327840d2.js",
    "revision": "dd70f58db469920b0bb0c57db4403d03"
  },
  {
    "url": "assets/js/15.f25dab32.js",
    "revision": "b5826660781a879322f11acff5e12c95"
  },
  {
    "url": "assets/js/16.da285d26.js",
    "revision": "6d7180a3257331994088f945d4ded1af"
  },
  {
    "url": "assets/js/17.2def535f.js",
    "revision": "68425132156843c52cfaba2657c8bcbc"
  },
  {
    "url": "assets/js/18.a2e0a331.js",
    "revision": "ac4958c7b3c61306254beae91b900047"
  },
  {
    "url": "assets/js/19.4d3f03e2.js",
    "revision": "5269938794f45c928bac4280f28d784b"
  },
  {
    "url": "assets/js/20.596d9c26.js",
    "revision": "bdef87edc3b63610a7c8d5e96b5fc3df"
  },
  {
    "url": "assets/js/21.e73b98ec.js",
    "revision": "242b6859b0a796f44461ba240af8cdfb"
  },
  {
    "url": "assets/js/22.fb0a12b8.js",
    "revision": "266e62d0faef8a10d980719d9b285978"
  },
  {
    "url": "assets/js/23.102cc458.js",
    "revision": "4c412388d205fdc53d4097318d3d81f5"
  },
  {
    "url": "assets/js/24.4a418aa3.js",
    "revision": "dbcf4960708ac791e58ffff68084de25"
  },
  {
    "url": "assets/js/25.c9feb01f.js",
    "revision": "ef59ab7aa61b5d271f2422359277b04c"
  },
  {
    "url": "assets/js/26.3a70ef78.js",
    "revision": "b893944d10581b069614d7de6cf4bba7"
  },
  {
    "url": "assets/js/27.7e3042f7.js",
    "revision": "f2ba4c336deebdfe362280c71143e09b"
  },
  {
    "url": "assets/js/28.314af7d9.js",
    "revision": "897e872ed1c12e9978c470a55923a963"
  },
  {
    "url": "assets/js/29.99283ab2.js",
    "revision": "35220f15a6d9d18d1aa134a5dc91720c"
  },
  {
    "url": "assets/js/3.6c356d29.js",
    "revision": "7255dc64cea7dc1e2ae0387619329a08"
  },
  {
    "url": "assets/js/30.4aa2d303.js",
    "revision": "bb14ab931c22c0e87e9b8a2eedc61d10"
  },
  {
    "url": "assets/js/31.3216408b.js",
    "revision": "3758d1e47dfc7fdced9c2829047f8a7e"
  },
  {
    "url": "assets/js/32.29e4f92e.js",
    "revision": "bfda5ebf36f4321d37b23501966300b2"
  },
  {
    "url": "assets/js/33.e7f74ca7.js",
    "revision": "a0a5a3d3e974af0fe14c37d00f3e81c0"
  },
  {
    "url": "assets/js/34.a5eb7415.js",
    "revision": "ac3d0702f6327c38a2639afdad2b7f02"
  },
  {
    "url": "assets/js/35.70dc3cfe.js",
    "revision": "a2223996938c8e867ca3c25fde77470b"
  },
  {
    "url": "assets/js/36.87d622c3.js",
    "revision": "1ab7a838c6cf63acfb1ca53e65eb205e"
  },
  {
    "url": "assets/js/37.3bfc927e.js",
    "revision": "23551e3b86550b476064680daa806ebb"
  },
  {
    "url": "assets/js/38.03bbe73c.js",
    "revision": "bb8038b06d608372c92ad707f6d9162a"
  },
  {
    "url": "assets/js/39.ced6469e.js",
    "revision": "85fb8e954d951beeb3384a9469832b7c"
  },
  {
    "url": "assets/js/4.9fb9b92a.js",
    "revision": "c5ee3e9af3a607348c8c827aa42b3b47"
  },
  {
    "url": "assets/js/40.49fabaae.js",
    "revision": "411e778818848e4f92877f42f4dac886"
  },
  {
    "url": "assets/js/5.9bae494e.js",
    "revision": "d02ec2d88671f4ab5a2aaccd67f85340"
  },
  {
    "url": "assets/js/6.d5ed689a.js",
    "revision": "fe56141121f92b1ee72d0da4ac566240"
  },
  {
    "url": "assets/js/7.84eec1d4.js",
    "revision": "6643a914a2b7a4a1ead9c49ffdb25f56"
  },
  {
    "url": "assets/js/8.5b17701c.js",
    "revision": "4c53067e94032b80a8d65d524722bfb8"
  },
  {
    "url": "assets/js/9.062ba36f.js",
    "revision": "211fbb05a765f488bbca7968bda44326"
  },
  {
    "url": "assets/js/app.ed25e7f7.js",
    "revision": "87413736484570a8853f229c610368f4"
  },
  {
    "url": "assets/js/vendors~docsearch.2c1e3e44.js",
    "revision": "c5ebf7ef01be97d8f408d5b2d3c929ce"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "7caae67e77b058b5aca65c1a76d42c4a"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "e6e4a8d569868292a65ea5e01ab148c4"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "41d1cb1d3d8a2066301695da10f7fd31"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "1e436ccc65e9ea5705f0ef22b86a59f2"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "97be7ad13d867b83a422914a85567a3c"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "b84d7c799a8b5f3410cbbfeedcd8610a"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "0639806449f74cd8633ce7db2a0c233f"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "1024b0905aa6416e02d0f63e0e89ce96"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "091546f9abf4d2e3eb1eb7c80e6ec5d9"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "21ad763b346f0b5a6e93a7e09a38103d"
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
    "revision": "008315348343822e366ba00aa1b50efe"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "e0e602801530f738d249f04d16178a11"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "c29ccb9ef89955cb6a4a2673c46749a2"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "6f9db3dbb5a6d1b137a35f1aaf25d1bb"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "c54490538e09eedf807672e2cf50e486"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "8a57f111835d4fee207a4d76ee62fa73"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "4987c190de4c1c86202e173fd267dd3a"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "8f987251b5682245a7425a761c721e9c"
  },
  {
    "url": "resources/books.html",
    "revision": "cf35ea7490c7cf783490d1aa33ca857e"
  },
  {
    "url": "resources/community.html",
    "revision": "edf851417a4056bfaeb6a1abec13fee0"
  },
  {
    "url": "resources/conferences.html",
    "revision": "0635a0d6020d9164411a7500e9aa4883"
  },
  {
    "url": "resources/courses.html",
    "revision": "3b07e3d4db2b252cb2767838126c5609"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "2e141b25cbce280847befb5b80bef691"
  },
  {
    "url": "resources/examples.html",
    "revision": "f2ae913afbe9c9ef314cbaa966174c49"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "a035632deb8b691a7b201fdd7c8ce13c"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "a8c2dfbede1c553f399b6480575bd61c"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "c72bef66ce7d2461273875e896ac0f77"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "c10f4828f92e3d97dee1953ee7e2f3ac"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "351990345b8729549b023f6eb30486dc"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "6891b1836d70bc024c2b4377fc71b987"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "93c81eba069522fe1892b621c2abfd5a"
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
