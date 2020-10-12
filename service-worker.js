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
    "revision": "e92b7d9c54581c3c09b6f64bae61bbd6"
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
    "url": "assets/js/10.2d94a685.js",
    "revision": "5fe563750188b9e3ae7d91d33232624f"
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
    "url": "assets/js/15.f340cf95.js",
    "revision": "852086812f271d195f4bd8240126afd1"
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
    "url": "assets/js/25.db5a45cd.js",
    "revision": "9e5f5bc905680d11e3fd53aa6af8ac6c"
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
    "url": "assets/js/33.086361d2.js",
    "revision": "473167a2699ed7158ffbf409668d0b05"
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
    "url": "assets/js/9.764283b0.js",
    "revision": "163dc8433bd636a107902db31b8d8af1"
  },
  {
    "url": "assets/js/app.bdd0e676.js",
    "revision": "5da4fe6c400fcd1dc79e9c68f8668272"
  },
  {
    "url": "assets/js/vendors~docsearch.2c1e3e44.js",
    "revision": "c5ebf7ef01be97d8f408d5b2d3c929ce"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "0ccd213ad7d566cc3b01a54562a7d1c8"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "c34fec4334f820dc794aea590544b17e"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "1aab7afc5205b3b583f321aec9003554"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "ea4811fa358138b9776d2f6150f367b5"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "8add1344e024d7b99efa3ca268d1583e"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "705d8b95e7d27d97b4618bc828dbd69d"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "d3c5a2e9781f382268887434822a7f91"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "8aecb29dba4d349c2fb6900de20e7ef2"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "1bd4eca6f97ff69f410c11e440f9dd3d"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "a5ef66d8828b75d595d5eaf4d982b74c"
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
    "revision": "07734e38c02cd6a4bf8933ca09e1de9e"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "93847a4b3875ea34d0543c8ebfff6e53"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "9676c38bc96cdd601cb7d293c032aeb6"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "4f721e2191b3d912ffe5e7cfb919977f"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "0f749be51e1c1180e8bfbbf396de43d5"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "7b6fc19bd1d62b7dab29dcad0be80779"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "52f1fa353b1c2cd23c90238d82f6183f"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "bc72e6f1dede284d257c63339baf219f"
  },
  {
    "url": "resources/books.html",
    "revision": "7c76ebdff3693209105be2eee77b2a42"
  },
  {
    "url": "resources/community.html",
    "revision": "e58be489c3b63c1a555a9635a5ad3a55"
  },
  {
    "url": "resources/conferences.html",
    "revision": "c33742b8188a4b2fbb64859cf898e157"
  },
  {
    "url": "resources/courses.html",
    "revision": "4714cd3268ea213aa348cdd0e95b21f5"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "975485f765d234d6034d3279f1d24975"
  },
  {
    "url": "resources/examples.html",
    "revision": "bab48ee843953010cb7333c4e59a7bea"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "0ef83af451a2a57bd4203ef69ad26fa6"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "fce6dca118595afd3add0f72042de8d2"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "5efdef95875dc3fae6b32ea604d86759"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "52c2df445864113cab45f9a425481116"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "eca09a81eda58751f362bf84eb1cc698"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "4a4373ad27596c6f243d556769e46f08"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "74caa67938dbc9b8a8713c0fdc85fc46"
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
