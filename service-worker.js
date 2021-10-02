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
    "revision": "5eddbe492f6a0c44e42093b7dca284db"
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
    "url": "assets/js/22.839dd7a0.js",
    "revision": "670704149451e18e4ce59fb9fc307b29"
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
    "url": "assets/js/app.5aa0d82d.js",
    "revision": "cdd7a97e45d061c365ecebe76393cfc3"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "7da3a480106a021c9e9a88a8af606508"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "274d22a7a7d06a0db15e85a3e9aeb47e"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "d98e5b41e1cc0cda6502568be7832ffa"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "483aafbc8cd2a1ea174b1d71340103d5"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "90772cd2af713d66e34cb56a4f917e4a"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "a096c9d4ab25dd8dbfdc690b7df1a527"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "8539987cc1666950321b8b73b87c0262"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "268a75ce1a2522fdaafac6e8c9068bb7"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "ad42d0ef7290998169401ed519e56272"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "a8d804adfe98bdd37b34c07ba97d31ed"
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
    "revision": "da5b5d43ce5da5a8bbcb20449588a6a1"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "5097f0d9ce9c175e9a3d2d498938d75a"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "2088c8ea3a3a9eb8d77c4a3ac222dca9"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "8a7557e2394f4e285297963e4efa0cd9"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "b25bbf6b61a7069675c509118a22cdd0"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "ab10fa391a837a8889f5a425616c57f9"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "a017f4b5e0e9a5bd89293f63c0cd5c1c"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "8ae670240889ab9d201ab0118f454ddb"
  },
  {
    "url": "resources/books.html",
    "revision": "cb5eef9d3370830cc1e913a3a067dcfc"
  },
  {
    "url": "resources/community.html",
    "revision": "e869d1c87c6ef2de41b6a0ebc374fbd2"
  },
  {
    "url": "resources/conferences.html",
    "revision": "d26f20f4a4a61f7ca2d766669c0bc310"
  },
  {
    "url": "resources/courses.html",
    "revision": "5e0d865a76fca53967b59b2ff44f1ddb"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "8360d647af1843420e4088503f25b096"
  },
  {
    "url": "resources/examples.html",
    "revision": "c0de7569a09f2afe0606e5f8ee382567"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "0c1adac7fb0e6b80704d9a89768aa7ba"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "34e9c96c95da90b434bab5f4dc3f69d2"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "4923546cb8c4a3e54bc399fa6299a124"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "eee0da0984c8c6a382c5be75e296e299"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "bbd747623bf6c1a2d1dfcd0e84928664"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "e46942666f3afe6a5c917f0b5a63e0f8"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "1df8843fe60720d76fa84e3f0aec8f8d"
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
