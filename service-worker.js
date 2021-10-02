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
    "revision": "5020df0beadca2fc9065fdb344f8ef65"
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
    "url": "assets/js/10.3f0c9b2e.js",
    "revision": "8d4ec612675f47b7591a1d53088e5805"
  },
  {
    "url": "assets/js/11.8932d53c.js",
    "revision": "3214753b354cf89cf62d300235d96b24"
  },
  {
    "url": "assets/js/12.139f1dc4.js",
    "revision": "587b7729cd93cc881e4637dc41d9d8a9"
  },
  {
    "url": "assets/js/13.d46cb5a9.js",
    "revision": "00e20c82b0bcf86d38395ae13bee75cb"
  },
  {
    "url": "assets/js/14.b65e1e5a.js",
    "revision": "4504f2222671ece5b616d5a0e83aedd7"
  },
  {
    "url": "assets/js/15.eafaa5c3.js",
    "revision": "168291fe3660cd5a88e0625f2ff3009b"
  },
  {
    "url": "assets/js/16.e8c62fc0.js",
    "revision": "74ce0dc5af53901f4a7bbc337bacd4da"
  },
  {
    "url": "assets/js/17.45476a5f.js",
    "revision": "c0aa95d68323824eb15f7a0dfcc0838e"
  },
  {
    "url": "assets/js/18.e28f42be.js",
    "revision": "a85c035922e71d50462af47df887797d"
  },
  {
    "url": "assets/js/19.15cbf2bb.js",
    "revision": "6591a0d1753056b2ece5004c1584ab75"
  },
  {
    "url": "assets/js/20.087bc700.js",
    "revision": "0acd3ef77e99292cf3ac3197c3e5c1f3"
  },
  {
    "url": "assets/js/21.732faf65.js",
    "revision": "e582867809675761b2cf8bb58cc1758c"
  },
  {
    "url": "assets/js/22.6de78005.js",
    "revision": "794e689424197d2d1c1957e89f1570fa"
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
    "url": "assets/js/25.2de02a49.js",
    "revision": "0434d3cd0d408ccb30bef93be1f59a2f"
  },
  {
    "url": "assets/js/26.d4b067af.js",
    "revision": "ad672ce7504faafebb070d1d7cecca8c"
  },
  {
    "url": "assets/js/27.a8f80312.js",
    "revision": "44f4ccf2a8a643e445d203bb258dd698"
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
    "url": "assets/js/32.f6e60129.js",
    "revision": "9394118ae5b58b52a49173a9e661a68f"
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
    "url": "assets/js/38.e3882b6f.js",
    "revision": "484b51e6fece52705cbd618638145a68"
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
    "url": "assets/js/9.4c7ad202.js",
    "revision": "bf13758daeb0249e616c59abd32378d2"
  },
  {
    "url": "assets/js/app.4badeeee.js",
    "revision": "08da02ae4a0a271f5f49ded3a4ae05eb"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "1f9deaca8d8b49d94fbbc827f97b3c03"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "a8325ecb78addb020f1dc241dfec03f4"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "94af9c59b78157bf423d9807ce76421c"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "d594566e060b1c197ef7de905251416d"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "03e00008dadb70e8bc87f6406f3b8df7"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "a6a58ea8650ea8c48ef1afe2c133cf74"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "d2c3868c31bdada6190f295510194364"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "1e40a3a68d63502bc6536518b1fd118e"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "da27d4c4fe3fd1883390cfb396138f0e"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "278d06c16ea7df3aa7ae09920d2fd273"
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
    "revision": "98dc3997952958c63583026d32082392"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "3c7e79d4922353d09a836204215bbe30"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "5a041fff367981f0058f64f7fef1b4f6"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "531e33bd122f34729b4d6d0ba5c72fff"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "cae88e138186f172811759c33b2c9be3"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "7aac0443c57e9c5c762d852c10cfd19b"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "bee9b94ef12b3b9157e2dff00e34fc81"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "59e8e3e3eb7b2f0da9a610fa887d0221"
  },
  {
    "url": "resources/books.html",
    "revision": "0f3682fa9d8011482204590dc4932c18"
  },
  {
    "url": "resources/community.html",
    "revision": "d8cd5d775dd59f936e9012ea91421e46"
  },
  {
    "url": "resources/conferences.html",
    "revision": "b94fd07d38b7ebcd416b5d6f7e7a0f6a"
  },
  {
    "url": "resources/courses.html",
    "revision": "52f98e60ddfa263786d7201c8a666d5b"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "966b0173e4aa2c4e0f148d1cb0ee1316"
  },
  {
    "url": "resources/examples.html",
    "revision": "d4f04cb9afab4c5ac2d8dac478c2fadb"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "a2b7d8cdb42d362c9246f201f520dadf"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "a679a3c8446157712e8bc8d2959747a6"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "8e7f304a8599faaa276d8d494e8e7872"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "3d7057cde89f252e133f05e3570fd1a7"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "ff14bff1b10c371e1bc1833891ca4b6e"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "f26a5d43eb22aaeecb92009cdf2a2c77"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "4442669a16c7232b34f16faa1cbde9cc"
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
