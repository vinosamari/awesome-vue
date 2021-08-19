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
    "revision": "beb23728545a34f9e28597bafff6984b"
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
    "url": "assets/js/15.f43d86f9.js",
    "revision": "d9dc17305828a75e9b33114fd657db86"
  },
  {
    "url": "assets/js/16.f69dfc2b.js",
    "revision": "eca180f82bd1e5f69b5c20f268e4f6b0"
  },
  {
    "url": "assets/js/17.45476a5f.js",
    "revision": "c0aa95d68323824eb15f7a0dfcc0838e"
  },
  {
    "url": "assets/js/18.684265c9.js",
    "revision": "55cdca714dc71e628c882b56e5ab0b6a"
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
    "url": "assets/js/app.6e4a7471.js",
    "revision": "67b81bab503aec6dddf00988db8012eb"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "6268687cad58f8661e32ef022cb7a932"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "cac842021ae4cb3f656d02fd50a2d56c"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "2f4460983ac214b3cb1359e96a9775bc"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "61498b564ba6f8719cc90d8742058af6"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "edd7e4c8cc73ccbaf63a8d5835ed6e4e"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "bbdb5b47ea5f2a8a5022d68adb31a63f"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "24148d82fab7b0617c510dd890fd7528"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "b8aba9cc042467f949bd2918cd596aac"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "258eeb632730f731f53bfbe0435654b9"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "7c7badd685aba88e3cbc16c6a6f2ef6d"
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
    "revision": "fa43a465c2ee45a2bc90029eda3b8ff7"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "4f58b6b58ddeb74b4ab8d88315b06483"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "343c8b64abc37f88eac8dad5624ae19c"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "ecdb2ea4d93dd7a909f0fb255b4e23f9"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "b6f08779475df04d619e0e7453753add"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "a45804a1b0ddc4bf08108aa28804c93b"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "d7643ceaebe86af257c40dbaaaf4c8f0"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "3b379d64984f7ed1b64031554d9658bf"
  },
  {
    "url": "resources/books.html",
    "revision": "3f7db5e7b313f0c30dff9fcbe2d00837"
  },
  {
    "url": "resources/community.html",
    "revision": "02171d10a5fea79893e149a8b2b38cf1"
  },
  {
    "url": "resources/conferences.html",
    "revision": "639035e6c09b0f8519bd6da6139043b5"
  },
  {
    "url": "resources/courses.html",
    "revision": "08b2de3ab335016c46b5ca478e99b3ee"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "142164e33f7eb126f42d1ee5f237191a"
  },
  {
    "url": "resources/examples.html",
    "revision": "6d7be12db39679c07ad0d1a2fe09291a"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "cc4b5f3c0d54deba1053b1ed02c7801c"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "adb80793674925871095bbd05f945354"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "bdbcc426bd28a8834c8533c735552a29"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "d2a2588168e1b41315a5627ce3e96a28"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "2b310f3686698274023f360c03d6402d"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "8586a9a95827b4b97ccbb559f046f48c"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "04c1fc5d42aa534ca2ced51716486406"
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
