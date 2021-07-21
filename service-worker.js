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
    "revision": "4b0a2e7d7942424264561ee365951895"
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
    "url": "assets/js/15.b9fb2e3d.js",
    "revision": "d69838c1d7be7960b119f01eb5dff584"
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
    "url": "assets/js/18.4e94b887.js",
    "revision": "316267e9ab4da0efe7f2a8631e874f2f"
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
    "url": "assets/js/28.d48f87f5.js",
    "revision": "161c712d1871ada48f292a4406e09a2d"
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
    "url": "assets/js/32.7771c197.js",
    "revision": "7bc0f4d7c981f5264ce35dee6741d72d"
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
    "url": "assets/js/38.cd79a9ec.js",
    "revision": "a4f4166e2c25ef825eee64dbf46d74d1"
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
    "url": "assets/js/app.8e999dc4.js",
    "revision": "e8d73fc8ce0438a10fcc86924baa9f9d"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "43a631605210de783001b08f15a81e61"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "2d949c8e633429d78fe3fb7e062d13e9"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "a584a365e6e93eb7c581ea502d5e924d"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "3911982a606d14713d2ae13c85f2b5e6"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "49264aed50159a18aa068540ee9aa2dc"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "f4242bc9b1c63acc24c4a0e8e4ff75a1"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "b35d0fd210795bbb9a7126086ece6702"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "74984da376238caa19240b24c50af8f0"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "00e6983903eeb6b1c654ba38fe4ffa32"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "fa805d0876d4582e131501be83d0cca2"
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
    "revision": "64c985f7d67bc548925ec7dfbae884b9"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "905d59dcd044420d809f0af20c4e8e69"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "004b27d4f47e21025aab1b75d1bbbe79"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "9e367e1777c6b56fbfa0dd71c8b825a5"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "232f987e9611c341573e535c4535597d"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "a497a238e3d5cea7daf8d99c742008b3"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "1d7193d93dab271394497af8993384c5"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "7a819a453d90bfb0346b48cabba0a06a"
  },
  {
    "url": "resources/books.html",
    "revision": "f7ac0f4414a2f71d7118c3ab0094068a"
  },
  {
    "url": "resources/community.html",
    "revision": "98f70dc055d67cdbcff2037f1c993629"
  },
  {
    "url": "resources/conferences.html",
    "revision": "c981ff7917bc2832ebd4827dc77e9fc0"
  },
  {
    "url": "resources/courses.html",
    "revision": "57660f5f325048a0465c0bff276afe00"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "e69ad641db1ef5ed31ef4230819e1d58"
  },
  {
    "url": "resources/examples.html",
    "revision": "b9ac4167f3bd5e04cf0134f0c6970def"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "91232843b06d0dfa6fb2410dc9c6ff86"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "139ceb14baff382d2049218b87360777"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "244cdc808f427e3b37543f42e9bcca9f"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "907950445f94a7bb0b5605afebc96807"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "4dfdc97064e8c030ece300c83d2a9d6c"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "9c185d30c64e8aafb7faa47f2d041633"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "9a0808b51bb2a341fd4d6090be49e233"
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
