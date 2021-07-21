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
    "revision": "95b3db9f7eed5cfb750af00d7676a56b"
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
    "url": "assets/js/21.81a7e256.js",
    "revision": "65cb56d169292c27ce2ee1bf43fcd3f8"
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
    "url": "assets/js/app.60989380.js",
    "revision": "1f737d88161580ae4f50658542dacefd"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "25f55bcd305ca7bbc04f8f1779fdffda"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "12e15b12edd517fae23f9a7aae555989"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "8dcb9f768005ae95f459f5bdc1fffecc"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "77fca72186b227d73417c485e7985493"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "f5db2ef5e777963a2fe67b1ce93a3cd8"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "ac63138f0ac284e95b30c444a7fae670"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "6b4690d99fdf99022b1783afc0ab9cde"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "fedfa18dc0abbc86ff7b30841f02a1e0"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "bce427bcb3cbde68decc4cfc828da6bd"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "023baddc9df968924ece8e9d8588cb7d"
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
    "revision": "5ad4c85e74f717c574b05f1e8727d986"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "c3ca78f5408c66f033b8c49eb02537ac"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "3b0ebe1e1742162100ac9617c3d3952f"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "19fc12cbc9e58a61a54dbd4f13320c60"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "130f9f3ef63e8975b4d28c257b9c4806"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "a43126ce4c106111372b05604e8dd6ec"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "3ed2050f07eb09a10abe83d3c1e35abb"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "3053996140a67891322947f6043a0c5e"
  },
  {
    "url": "resources/books.html",
    "revision": "3e14b77db2cc7dedbc58260e7b57b65a"
  },
  {
    "url": "resources/community.html",
    "revision": "73b3ff1fb9bc3a01e91dbc8f166ce429"
  },
  {
    "url": "resources/conferences.html",
    "revision": "1b62f0bc8ffbf8f9ddee6ee865416ab8"
  },
  {
    "url": "resources/courses.html",
    "revision": "5e4e93405b4f9ac0e0eb0742ac6f5580"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "3adca666ac1e2d37e0602e1466e9b03b"
  },
  {
    "url": "resources/examples.html",
    "revision": "0951697504f59ac837710a005e480a35"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "59b379539109a325366a19c67abe3c87"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "25804e91313dc26852fdf82284bde4ff"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "74cb01f3fa65d6dac2307ea95a0a2c1c"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "047cfb1c56e858f9b3642779ae8b62bc"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "a2f36e751db4cb2130a52a962b09f444"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "5ff84739db947faad0065c32a19ff51f"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "4b6a7f3755a390e4333e29f5d04a42e9"
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
