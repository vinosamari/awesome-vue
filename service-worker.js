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
    "revision": "ba5703a6ff37424f84bfa94110b2c6bf"
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
    "url": "assets/js/10.aed84b38.js",
    "revision": "6cec4b5bd7009685eccea69c98741e8a"
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
    "url": "assets/js/15.47fb80eb.js",
    "revision": "de3bcf7de16450a6e44df9aadc1bd2bc"
  },
  {
    "url": "assets/js/16.f69dfc2b.js",
    "revision": "eca180f82bd1e5f69b5c20f268e4f6b0"
  },
  {
    "url": "assets/js/17.82d57924.js",
    "revision": "986cdb5a5f1ac6a9b7151fdf0a0c6137"
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
    "url": "assets/js/25.05b77336.js",
    "revision": "b1dfb3068c09899095ccccaf605e1fa2"
  },
  {
    "url": "assets/js/26.2447d024.js",
    "revision": "a07b92de4f196222eb6a5abc8dc6b42c"
  },
  {
    "url": "assets/js/27.670bcf19.js",
    "revision": "fd90167492ead91dd9679c2b1bd6dad4"
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
    "url": "assets/js/32.2b8c0f94.js",
    "revision": "1b423b245bcbf38c2afc0de1755fd88e"
  },
  {
    "url": "assets/js/33.5e17d0f2.js",
    "revision": "87689b999eb7fcdfc35844ff1f0c7fd0"
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
    "url": "assets/js/38.928f5e8d.js",
    "revision": "d55bec2fc6677b77196895d8003b3bba"
  },
  {
    "url": "assets/js/39.00ec5b90.js",
    "revision": "5625f7356576f467cf65e54b800bc12a"
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
    "url": "assets/js/app.da96ffb3.js",
    "revision": "4c0ead2fd928af603ff17c9d4d9b9bce"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "97f057566d41a252953f3fac118d13ef"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "b9a40159b9827b412dc28b161f4ff541"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "b2de62111feaeecc354a59c657811880"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "d871169b5609123a89cca4a1daab59b6"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "3cf5fa48ffdce5f8be03c6b4869fb7f9"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "30a94a0cff4a6121b9c87685d235ef17"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "43dbe4e717f57006440ed5998140ad99"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "7705c40b339c8747d259c762a15853a9"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "8dc92aca7725954379e3583f3914c8fd"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "3bce99c0b25d046d34c1377308789601"
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
    "revision": "867d3329e90ec23a550d21dbdfbe3716"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "8036c59b92825773165a97e52ea58c9d"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "43b210720fed3820ab4e7f26d52862c6"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "0e438d87e6a23f61b7b00a2ba73eb1c8"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "d08b0df0350c3ec6ce2adef718b51353"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "7100dfb3f6457788903c46a64666876c"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "b3b2179ba8f85225c43819e9c32d642d"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "fe953b41964664c885750da3bd5a90ba"
  },
  {
    "url": "resources/books.html",
    "revision": "ad5b3de9bd4ca5d09dff7d1b69708349"
  },
  {
    "url": "resources/community.html",
    "revision": "61459ed672e54d52c7bc6e11d51081e5"
  },
  {
    "url": "resources/conferences.html",
    "revision": "c3ff4375a2ad7edd0e4e86cd7291f898"
  },
  {
    "url": "resources/courses.html",
    "revision": "fb9c1eab73cdefa304242b510f16e75e"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "4f8608ad090d596d004e47d658618ec8"
  },
  {
    "url": "resources/examples.html",
    "revision": "5080434529ed13bb45d6f8a123a86e5a"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "6f42295cb0fb29ef82f1dfc3319525d6"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "22e09e06a1e15e51adbce8ced6e7bd52"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "6a325260799b7984ffe0bcdc349b1158"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "c08fb56691218aa126f0b3cde0578f78"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "e9aee87ee47b347d082c36a26326a053"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "be1754065923bb8a090eb53d40d5bca2"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "9b0fb8bbf74736b3dea1909d8696edd4"
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
