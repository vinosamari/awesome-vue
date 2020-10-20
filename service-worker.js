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
    "revision": "45227db08ada04e61ba3929b3ea6a7b3"
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
    "url": "assets/js/21.626409e4.js",
    "revision": "df1961eba3f961b58e0c3132a8b23ba6"
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
    "url": "assets/js/app.92888d60.js",
    "revision": "a3763cdce8b382680b1dd3492a333747"
  },
  {
    "url": "assets/js/vendors~docsearch.2c1e3e44.js",
    "revision": "c5ebf7ef01be97d8f408d5b2d3c929ce"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "29d378ebbffb882ec936903ed49e1256"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "7462f9467d230ab47c913faad26b0006"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "a06eda79278a1b6400aba28d7f683956"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "5e3555fee5cc3d9ecd5ce002de0b38a9"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "ef568821734e3b705d64f0042c1ea792"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "c1357538b7cabf73e7988282b80595b2"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "4e141010e541663662bbc288a5d36674"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "c277b0833ad4f1b5d242107cbe4f9414"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "987398ab5943e5de444ec5ddccfb2bde"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "5b772c567f65df69a3b4e7f48ffb2251"
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
    "revision": "4a6eb0e589b83f74862e6ec298ee69d1"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "f639e4e6dfc1bfda605c084f0a6725e1"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "2f6c3360e1aff592ff37ada8b6292007"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "e721ce480a2e24515a3b82d840d4c800"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "ef21d3b964e9f0facd15145c7d573b00"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "ddc10b4365ebcd70d4583cf71c06c771"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "462d06cee1c3b0d9938920b6bace3aba"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "ab4778257e7d6845d7621d2337a80c01"
  },
  {
    "url": "resources/books.html",
    "revision": "a45c96a1d7028b72d608ac195f1bcc5f"
  },
  {
    "url": "resources/community.html",
    "revision": "4bf2956a7b9cdf81b616d3839348a8d2"
  },
  {
    "url": "resources/conferences.html",
    "revision": "9bcb00f8ee2090f2d88d1876dc2fb8ac"
  },
  {
    "url": "resources/courses.html",
    "revision": "cf6fc9fd57ebac910c6537643badbc9a"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "f297e5cc342e4bff6448046e5ff6d693"
  },
  {
    "url": "resources/examples.html",
    "revision": "3c5d49d26ac6617dbc8f008c2f0f2eb6"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "a71cdcd531ce982f965233efaaa948cd"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "5a10a63b1502cf4f3aff67ac93977725"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "5d84cacb5c0ae07410bcc27fb37c11d7"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "910447d42c8ea7677acc591761549299"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "1aa7851f889b70564336e6383b946d24"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "230eae17f97569a241ee6464c94f831e"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "2876928347ae6c4ca01cdf6888550f8f"
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
