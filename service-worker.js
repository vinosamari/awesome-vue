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
    "revision": "d71980c58ac622efb040fada4fd3fb4e"
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
    "url": "assets/js/27.8a761b13.js",
    "revision": "3ace6507a1c8ee389bb46e73feed44e6"
  },
  {
    "url": "assets/js/28.7973af84.js",
    "revision": "c45bfbc547e3ca3342ec8128d56a682f"
  },
  {
    "url": "assets/js/29.5e7b0e18.js",
    "revision": "c8f4361f1bc0c7bacdd81ac033e04400"
  },
  {
    "url": "assets/js/3.6c356d29.js",
    "revision": "7255dc64cea7dc1e2ae0387619329a08"
  },
  {
    "url": "assets/js/30.c509e2d3.js",
    "revision": "0fc9530616631cd4195a7d11e449f983"
  },
  {
    "url": "assets/js/31.914081a1.js",
    "revision": "b52eb5f504cb58564a40f50f4ae94f15"
  },
  {
    "url": "assets/js/32.1cddf9de.js",
    "revision": "0ee56b6416d51b75741ce032533d6765"
  },
  {
    "url": "assets/js/33.e39670c2.js",
    "revision": "df6798dde54d31812f4fce9cb3415bd6"
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
    "url": "assets/js/app.a035aa2a.js",
    "revision": "2946049f3671845ba9a02c776f65f915"
  },
  {
    "url": "assets/js/vendors~docsearch.2c1e3e44.js",
    "revision": "c5ebf7ef01be97d8f408d5b2d3c929ce"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "2d70bc2ad6a6d51d7e9b2c3321ddc2cf"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "f2cf70e6e74444db1412f6236660975e"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "1a4e4d29f712a68a75f56e0821232b16"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "0230047e77877a8c3a12d62df327b04b"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "30f29eceb43a997f73593e5dc1d6bfa9"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "01d024d31b65217da647722f8cdc011e"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "fa4e2ed0a7a1855ada33c70a3b230b40"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "b6472cb31b0ba3ee36b8b180109590a4"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "deca1b4dd6f5eea3ff284a3f26ecfcc7"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "f4696b7fd13b2ac4f7eae988aaea1089"
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
    "revision": "44c44461fcba1ca8373592f5b8e723e3"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "713beadfb7b53a2a94ff842b3c809dbc"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "c85134cd808c4a6459546f95d1d8d542"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "b51376c114d5dbe9030ec64223ef471f"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "aa171303b70b2f8d93d7010b1e2d431f"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "f8737c75d5945729e2be591458b71a08"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "95ebeb7be29c468fabecbec8ba710e35"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "90475aa74ad1522a7ec8b7a5cb78b7f2"
  },
  {
    "url": "resources/books.html",
    "revision": "17e8d66f99ad1ecb4a80a2253adcdee1"
  },
  {
    "url": "resources/community.html",
    "revision": "be0d7299815493cb2733713270e83aa3"
  },
  {
    "url": "resources/conferences.html",
    "revision": "507cd6cc5ca0045f0f77bb636d337701"
  },
  {
    "url": "resources/courses.html",
    "revision": "591985950ad413a56a020524c966108b"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "ea5385195fd5b942a3e499697e48030c"
  },
  {
    "url": "resources/examples.html",
    "revision": "d5872022be527e4a35a226540f707e6e"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "f970451e211019e347e27bd72d13374f"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "20ce2416377686605be8b5bbe33709de"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "7dcbbca838b18754c60fc5cfe0f95bd0"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "d0e150d3f03d6da8d162d3f476c3e175"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "1ccfc3f7f52b785e2b9ed6cc03727fa6"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "649662005624856deb0e42b78e98ecc0"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "d387fef9d281a3456282e0b7ef8292f6"
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
