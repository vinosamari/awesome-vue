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
    "revision": "7282f89b2b406f5e5e95bb5faa142f15"
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
    "url": "assets/js/10.a15314a8.js",
    "revision": "1ecac6b4a1fc918f589ceff048c4a584"
  },
  {
    "url": "assets/js/11.ea9fa4e0.js",
    "revision": "8911495aa1b624f6ae866df8a66413c4"
  },
  {
    "url": "assets/js/12.4bd65ce2.js",
    "revision": "efe9483334d2c907494b2ea73cd338be"
  },
  {
    "url": "assets/js/13.0909a73f.js",
    "revision": "096ce92472aaf509177e86e6c781e0b2"
  },
  {
    "url": "assets/js/14.eb285913.js",
    "revision": "dadf5b45e707b8007e6e63876c01575e"
  },
  {
    "url": "assets/js/15.f0d55511.js",
    "revision": "342b00cecc2afc7595f8fbcfc6576b73"
  },
  {
    "url": "assets/js/16.da285d26.js",
    "revision": "6d7180a3257331994088f945d4ded1af"
  },
  {
    "url": "assets/js/17.d2c3e688.js",
    "revision": "6151b6b92512f55961da0bb096ab0f85"
  },
  {
    "url": "assets/js/18.b9ebb7a1.js",
    "revision": "baebb3cef898042b724d7fc02bfb3495"
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
    "url": "assets/js/21.adeb6934.js",
    "revision": "e3886f91dcf44574cb1701607b412ad4"
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
    "url": "assets/js/24.2310c835.js",
    "revision": "4cfa0fc354439f1a0a871bdcaad315e7"
  },
  {
    "url": "assets/js/25.cbcbd66f.js",
    "revision": "4b1b6a0f100193d277700bf1749d1686"
  },
  {
    "url": "assets/js/26.3a70ef78.js",
    "revision": "b893944d10581b069614d7de6cf4bba7"
  },
  {
    "url": "assets/js/27.4e5bf800.js",
    "revision": "aa84213a63f15723ea1123d0e13ccf95"
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
    "url": "assets/js/32.7003290c.js",
    "revision": "badce8d8ea29e282c4ec332ea451a5c1"
  },
  {
    "url": "assets/js/33.fefef5a8.js",
    "revision": "5187554912a953eea21844ae6b1b73bd"
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
    "url": "assets/js/38.e87da1c1.js",
    "revision": "4eba2eddbcb4e0d579a6a0c109c8505c"
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
    "url": "assets/js/app.36972fa4.js",
    "revision": "294564726a89f643d480a4fed6a30089"
  },
  {
    "url": "assets/js/vendors~docsearch.2c1e3e44.js",
    "revision": "c5ebf7ef01be97d8f408d5b2d3c929ce"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "9e23a85b751ac2b97ca81c348aa84136"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "5d2fb93e735202cd9cd105e4720fb509"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "53cf2821b7313dd0a9d3dfa06f08e67c"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "3d35acc08f96fd878ebbdffcffac13c8"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "a3586aec1989f2fa5773ad270806378d"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "9fe6be675fdd52a884e49485ea979c86"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "1d3ada04f83b4ac81eb243f144fcb25b"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "f5ca2f79d75dfde3bfb9febc9d1fd578"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "ac1ce3f447d5d3402d63d452fed836e1"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "4930e967a5e3408c580a2d8390eceda3"
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
    "revision": "ef48a3bae631c83633a81e9d4231838e"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "22cff5ec8deda7eaa3c9f36031f50eef"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "51e50665dbde229bc505f83cc6db042a"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "ef5b65c704c083dfcb593dbe75142ad2"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "36618bd13fb94c187390334c26d0afa8"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "daea5db8b87ebdf3e450ba509fcfcf18"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "6a2f1c7e08e0cf24d846b9f8b817eb40"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "464b86f68488fda9a015987dc5d6e7e0"
  },
  {
    "url": "resources/books.html",
    "revision": "c5208f4b2d39964ab2659a8454371dfb"
  },
  {
    "url": "resources/community.html",
    "revision": "8332917557ea155dcdb7f16469ce7fec"
  },
  {
    "url": "resources/conferences.html",
    "revision": "12ad620865f01f6f82667af406e74ea4"
  },
  {
    "url": "resources/courses.html",
    "revision": "16937dcde7864a2d29e85ec3b5fb1058"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "f49091bb5b9d93c2235f48401a648ec2"
  },
  {
    "url": "resources/examples.html",
    "revision": "d19ee06dc3010e54f921784e33d19e5d"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "316883f8d058baccf14e0164eab43566"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "2cf70ffcf8f5a598b3341712b7807bb2"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "e255e6f82264f831bd45bc62d47793cb"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "941846bb8f1fd11353c7c3d309ca9678"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "c83b9cb7b39b7c4dbbb3f0f99da7fa4e"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "dfc6bf8cdf5962448a8317395df7787e"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "91dc9f30206986b7f9f77cdb8430a683"
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
