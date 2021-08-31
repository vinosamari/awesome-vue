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
    "revision": "4f64a2293b52a0a640c5f3c877c05dfe"
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
    "url": "assets/js/10.3247c1fd.js",
    "revision": "d4a1bd4578bf45b87e1414cfc3af71cf"
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
    "url": "assets/js/25.062eb9e3.js",
    "revision": "53846b1d70040d2475129f925dcf564e"
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
    "url": "assets/js/32.b5cd1e35.js",
    "revision": "70f1fe682bdb3394bb3d58a156afc005"
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
    "url": "assets/js/app.f5619458.js",
    "revision": "7c1b83e01c996bcf07795f4a62d86103"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "2d405121674835c2d4b076bf40b514b8"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "1e08e81cdb96ca9dd6e304c163c52c7e"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "1a79efff88a41bcc0af7b272481ece1f"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "0107b7454b8b503627e667c18df5d14a"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "5851186fe13f31cab1791d64a3e417ed"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "e5bc6fe8222d99b646d3e3e6e4c282f3"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "247113d5e4213aeba24f7d417565899d"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "bdf32a6045beb7f505fdfea6aca69ebd"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "f5a7a61e2cfbd78c03b4a03780d0be9d"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "dec190975a81b145d182d42497e834c0"
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
    "revision": "dd7a6ab12705eae2057bed13ef9d05c5"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "e70aac300c7a343ec39d478a25e858e3"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "41aa55ea59ba896cedfa94b31fa29b11"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "b55eac4fc20b029df1e659d88c817b81"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "f5db0c5b0423c436c16c6c0822fdc161"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "69c56ec278c9234023f7f7214f761ace"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "00e78dd39522ff95c7dd313f7f3a44c9"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "381a71e24da6b0a869f3acd1cd1178f6"
  },
  {
    "url": "resources/books.html",
    "revision": "5830d5e3956c1b9b992e1298e0404b95"
  },
  {
    "url": "resources/community.html",
    "revision": "99e060b23445455b59e6fba07c14bdfe"
  },
  {
    "url": "resources/conferences.html",
    "revision": "29fac010ab5674f7d3d20bc0832237f4"
  },
  {
    "url": "resources/courses.html",
    "revision": "6a55d6eaed9d1f6c9498e5a0be3b957a"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "58073755a555e977b7e922aad2a3609d"
  },
  {
    "url": "resources/examples.html",
    "revision": "2b64d642eac670ae67dd04aab5afa624"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "1196af60eb1dfe020cc656275c4b509e"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "cf4b3ffc09d3731b6af5bfea1b307825"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "18acf702167ae833c01be055d3c99257"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "668fb65584b95ded32a2e6a702047694"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "9168aaac3b6f767da9a63214f1ef2276"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "bdb02de8a4173a2a3788a6485622ba37"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "c2fb431ac27352f5ba5858fb35677ac6"
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
