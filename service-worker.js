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
    "revision": "96f2fe8ba25c572f6f5bf297a103d04b"
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
    "url": "assets/js/11.17640617.js",
    "revision": "b1f153157dd096652732e4b1eef6ec49"
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
    "url": "assets/js/14.3a6fb49f.js",
    "revision": "135c5ef8e59fc000f2f3c315a8cf9b4f"
  },
  {
    "url": "assets/js/15.023d7ebd.js",
    "revision": "618c19e4293e9f4154433b873fc5f208"
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
    "url": "assets/js/18.bb756a1e.js",
    "revision": "adffa97d10dadaa42f4671999cc02b47"
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
    "url": "assets/js/25.5d02d531.js",
    "revision": "a7e79f4fc53d5f3d753ce3935b7ae110"
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
    "url": "assets/js/9.4c7ad202.js",
    "revision": "bf13758daeb0249e616c59abd32378d2"
  },
  {
    "url": "assets/js/app.74ec89ef.js",
    "revision": "663249fb513c923572c288612612a58c"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "02d2a02f18d3cc0402049697c7159258"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "a13bfd1a88c2b678af736cd2772e9ec7"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "167c0ec6a6ba50cfb03d761c24f40dcd"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "34c2682500a1e87f89175beef81e2990"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "d0d252dc37d64213de66c3eb4f0c09fa"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "254cfc7a86eed5acb1efafa8dd8241ef"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "beb470cb1baaf9493654d160c9e2bf0f"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "1d97ed6ff94764ee746f8f139a783449"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "04dfb869fc536c3513d67ef273e357d5"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "ea4c203b68aed718614a885e2dbfae5e"
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
    "revision": "7452ebef976596e3f96c998a9f4b5955"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "81aa5d85766e72ca6e565602ff88ed73"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "8e57790ef6a79c5951123e3c847d63e2"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "230a83a68d0169fd62dbafc7713a2c9d"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "d3b6070f68f50d6099d09e7e9ffc5486"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "98263b1ba8aa4ef64e44dd10563eec59"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "c3a2076844f88d96443366f8a3c45a6e"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "6578cd6eebd1ff9b0c0a091ca16d5270"
  },
  {
    "url": "resources/books.html",
    "revision": "d4d6f0be8f8d3a1a87a479050f42cb20"
  },
  {
    "url": "resources/community.html",
    "revision": "851b45b6ce8945e311bc4a012d0dab9c"
  },
  {
    "url": "resources/conferences.html",
    "revision": "14191a08f6aa0b6f22a80833ca2db4fd"
  },
  {
    "url": "resources/courses.html",
    "revision": "ef6da55e9d8d7805d2f5603f40825e06"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "dd5f7597c8889b7d3d1b40c9b4d3d432"
  },
  {
    "url": "resources/examples.html",
    "revision": "a3c49b849eea938de8277a31e3f473d3"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "a103841aaa39bbac2fb3f20fff40cba0"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "10af3f32dad36f1fa343be44356d2b8a"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "60fea5d9c56a9419854469b2d3e8bc4c"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "21f223b91cf1fdf86f76a1aaa7cf0e27"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "9134f4aa920aff2c887c8f3c5f710936"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "1750ff008ed0e80f1c7022253ce95051"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "214e4081ee8715d4b929abb593540f79"
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
