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
    "revision": "d65b146215db4d29efd46b59062e88ae"
  },
  {
    "url": "assets/css/0.styles.c667ae91.css",
    "revision": "397c5036c5d791deb513cfb431edba00"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8557da8d.js",
    "revision": "5322dbb87f5edd1dd2fd9aa6eb6fb728"
  },
  {
    "url": "assets/js/11.17640617.js",
    "revision": "b1f153157dd096652732e4b1eef6ec49"
  },
  {
    "url": "assets/js/12.8282f0c1.js",
    "revision": "7e0a13acbcf7b7147519dd6dbc778f71"
  },
  {
    "url": "assets/js/13.f4ff75c0.js",
    "revision": "abc811fbd0ad195c9f3b31f18084a8a6"
  },
  {
    "url": "assets/js/14.588bb86d.js",
    "revision": "e41e52a0a752574325717d7e83eab402"
  },
  {
    "url": "assets/js/15.43c4d82e.js",
    "revision": "0d3927e7d71f08e497212c3757fc51dc"
  },
  {
    "url": "assets/js/16.c8c49b59.js",
    "revision": "57d250f1f73242d8a990537831a629b3"
  },
  {
    "url": "assets/js/17.c701dc94.js",
    "revision": "1e1e500c638861dc94c228027d2f74ea"
  },
  {
    "url": "assets/js/18.e2389056.js",
    "revision": "87a9be18ecf0786fe30bce6cf6c50504"
  },
  {
    "url": "assets/js/19.1c581542.js",
    "revision": "cceca1ffd4e5715a309dd638b5e68137"
  },
  {
    "url": "assets/js/20.5f00bcd1.js",
    "revision": "3f2e6d71217e2ff835215e8f819a23ec"
  },
  {
    "url": "assets/js/21.f1b6158f.js",
    "revision": "373c2f1849f9ea772f02427cfee2b806"
  },
  {
    "url": "assets/js/22.c431f83d.js",
    "revision": "6e5c1270816eb16823ff56440332a506"
  },
  {
    "url": "assets/js/23.ec5295c3.js",
    "revision": "f8151b95523c9cbaf84957b262f575c5"
  },
  {
    "url": "assets/js/24.a427e5ed.js",
    "revision": "4e2e9683fcb7a86f556fa88025e1a7d6"
  },
  {
    "url": "assets/js/25.7efc6ec4.js",
    "revision": "c612d60ab33b5b9d601854213d4a4f11"
  },
  {
    "url": "assets/js/26.d4b067af.js",
    "revision": "ad672ce7504faafebb070d1d7cecca8c"
  },
  {
    "url": "assets/js/27.c8aa190f.js",
    "revision": "3801cbaaae2b1d561fc08c2074bf10fe"
  },
  {
    "url": "assets/js/28.ae3e164b.js",
    "revision": "2c81a3cc6447f08d5d9aea0f668c5ab1"
  },
  {
    "url": "assets/js/29.826833d4.js",
    "revision": "6725e232f7c303536467e20f74b7662e"
  },
  {
    "url": "assets/js/3.fc80c13a.js",
    "revision": "f654c8d72530eee237a1c86d7beffc6b"
  },
  {
    "url": "assets/js/30.5df5b2cc.js",
    "revision": "6f66401fc1b4e40e1392f77f97746fb6"
  },
  {
    "url": "assets/js/31.ed50e515.js",
    "revision": "708922aa6a939f911b4736f6d4582d3a"
  },
  {
    "url": "assets/js/32.563af517.js",
    "revision": "c9b6a9e702b0c26207920c5c1b99402e"
  },
  {
    "url": "assets/js/33.5b43df12.js",
    "revision": "68a6581e636aff57adb525f6c7a49f2a"
  },
  {
    "url": "assets/js/34.7d8a00dc.js",
    "revision": "662f9c5f1bc1d9f34eef2409cefb1105"
  },
  {
    "url": "assets/js/35.d4d6ba72.js",
    "revision": "eb29d97a2b43af12cb46ac3005acc3fa"
  },
  {
    "url": "assets/js/36.4ca4856c.js",
    "revision": "25d3f10a018a469455d100b0d0f4b844"
  },
  {
    "url": "assets/js/37.77b24638.js",
    "revision": "c6df099db4025f9dfcdeb79572120f9f"
  },
  {
    "url": "assets/js/38.76a66cf9.js",
    "revision": "13e04c06def62627d771a1e334adb3e7"
  },
  {
    "url": "assets/js/39.5ef0778d.js",
    "revision": "7958c6466a57180acac54004adebbf7e"
  },
  {
    "url": "assets/js/4.5eacfc7a.js",
    "revision": "412eebb9a5434cdb211d5f67b419140d"
  },
  {
    "url": "assets/js/40.c34b6542.js",
    "revision": "77dcc6c81e805abe6f2ce8e978645a85"
  },
  {
    "url": "assets/js/5.e7dc9ee5.js",
    "revision": "d0bcb52c4170c4ecce113a0596454e2f"
  },
  {
    "url": "assets/js/6.afec999f.js",
    "revision": "e36bedf9c8f81bf58ccaa53a82336f03"
  },
  {
    "url": "assets/js/7.dfb416c4.js",
    "revision": "d9339842774a34f925282c21d3ca93e0"
  },
  {
    "url": "assets/js/8.fcfc7498.js",
    "revision": "16b9367efafb2f592a8fd6a1c6ed0971"
  },
  {
    "url": "assets/js/9.98d85d8f.js",
    "revision": "48fe631ec5b1683120a98775f849c23c"
  },
  {
    "url": "assets/js/app.b21b8b59.js",
    "revision": "5aa3ecc95391f39343a1f6c21ae1be72"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "46b5d1236a67fb82212c5e72485c7bb8"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "84ace161a95a7bfca0a0619b2cb0198e"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "c5c41b41a7f870d840f2a16a59d27a94"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "1c074a183ac735b5bdf81701733aba75"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "c716ac149fd92acbb95f289a3af6eb48"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "a1d84894d4504172e379ec5bd58257ea"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "5750af8ebc9a69e798a7ec4c2a4f3471"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "e1b49e1fa420d7247d7071f58207035a"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "4b4fdb900cbcc844323eeb742e222e24"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "3cda27d3a600df23c74bf1ccb60998e7"
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
    "revision": "e209138c69a6e9b78fbde5200d7efc85"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "19336e4243ddc3b22a61f3c6882fe848"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "5b25d53c2c0d30cb97764d3b528cf10f"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "f272ee8c1f7d94e8bc0f0dce67397cfc"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "1ee4af8dd6c007f5a36349f2f97cf4da"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "4dfb485173a91026ded9d4d3d96d9d9d"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "a556d855c3fd12af928b7a07b396b16f"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "90fd3225c1134863a2e6b1760e7e8f57"
  },
  {
    "url": "resources/books.html",
    "revision": "b0f72f264d308d1b930b58b8d99dca63"
  },
  {
    "url": "resources/community.html",
    "revision": "86681be32da8a2e336e2489e16766fa0"
  },
  {
    "url": "resources/conferences.html",
    "revision": "6b8acf23314945be87f17aeefd7e08c8"
  },
  {
    "url": "resources/courses.html",
    "revision": "9d2254aaa48d794030bd5f9a9c3e0553"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "784bc0703df980aa0e76a9876c923b4c"
  },
  {
    "url": "resources/examples.html",
    "revision": "77c578d79e50e946e5c05a0bd3006550"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "02abda8e6c19445897d0fc3ab2476113"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "6d18d8bbf435b7ebf01226661c054e51"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "8a3146153144639d82780f0fbb8efc60"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "ae2ae70d1277e51dbde2af79ed3a4d23"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "f90f1b29330ee97721a73cb3aaba59eb"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "86b00472232519dfb6b05eafe9156535"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "5cbf32e5c074dd96f53646356ba44c45"
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
