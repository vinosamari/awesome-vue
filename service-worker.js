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
    "revision": "c7f8734bb41b30e5a85c0d2ab0536238"
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
    "url": "assets/js/app.b1ee03ce.js",
    "revision": "8a5b539b9bc8ead2e654e8db21d69361"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "2846889bea556a27530e80b1d5d4190d"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "4706bf1341ba7ee8fdcbe05baf08c01a"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "1edd1513d984b1fdd09863024f29e024"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "5f2f803499487a4adbf504ef62e1ee7d"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "5a4456b2559901d0ffc4cc89808770eb"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "f2a5514ba92791a554bec6dc6db6de59"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "5f85678c0b9544602ad3ed2575aba4ec"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "eded8c33c4a3973641c99cba6d8655ac"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "149dd7fff1f535bd5665bd5ca0d672c8"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "d4da33ee34f86ad83f1c65c58c5db60a"
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
    "revision": "e401522c440482344132d6e8758f5c71"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "7e1442528026692b30d94aa048bd4a7f"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "29e5c9310a47373b7466f8a129d6b67b"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "bba63604e1f511f080bb14f9e6234052"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "fbea42d54e399535cba1e79a199c3f4a"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "ab64663566b450c5b8e591c8adbf88da"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "ee210054b1a172f23707ff44f2279dca"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "0c2be6d15f352e9e8094e6b40e17c73f"
  },
  {
    "url": "resources/books.html",
    "revision": "992e8ab68052532189b2fde0e52d9d8f"
  },
  {
    "url": "resources/community.html",
    "revision": "b30b5dea1c772026b8eaeefb2a7daabb"
  },
  {
    "url": "resources/conferences.html",
    "revision": "127d8e66c9ce24aadb9a96b33ceb9bb0"
  },
  {
    "url": "resources/courses.html",
    "revision": "a8b14587cd3d176e89a7cd46f9dfe7a5"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "2eca01c0c1764f1f5010c1be1eb8f3e9"
  },
  {
    "url": "resources/examples.html",
    "revision": "35d7734fea266fbd16331ef0a40e73c5"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "54cb0309c53f52f63244699bff72a814"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "42d55c59ecb8a8ebb0716fb001721b74"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "816d368a19c5c5d19b5c6c4c7883c6d4"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "056dca1de8665ee045cec996381bb606"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "d8092421d64ab8b537953211db67dc63"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "861f5c247434be83df3f45c73cfe2f3e"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "50f918ac5195d169deced07f239d5831"
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
