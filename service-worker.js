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
    "revision": "7d3b816d49157f68f311561866fd41f8"
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
    "url": "assets/js/10.40cf9e4e.js",
    "revision": "3b4e9f1aecc192158226d0ac4fb89cbd"
  },
  {
    "url": "assets/js/11.60a63e52.js",
    "revision": "2dd740b920c4cf425db8da5a9d1a1c96"
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
    "url": "assets/js/15.a098a6c6.js",
    "revision": "1791454de3144941a635038e8020a223"
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
    "url": "assets/js/18.7f806ae5.js",
    "revision": "2780b834a0ca2d1eec5231505b70a112"
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
    "url": "assets/js/21.88ec8620.js",
    "revision": "eabbaff89d7b368ce1584e1f7c9d88ea"
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
    "url": "assets/js/25.0f6a1525.js",
    "revision": "ef0d62d30903cd24071a3574ec4b356a"
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
    "url": "assets/js/32.6503e8d7.js",
    "revision": "4fb290c3dfcdd26a426e786198f2c64a"
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
    "url": "assets/js/38.079ae001.js",
    "revision": "cad2a0babdd7aa2c901ee0d7377824c7"
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
    "url": "assets/js/app.f861b62a.js",
    "revision": "c910d6ce9d76b478b59e44ee14955962"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "afa268e072abbeef87de1ee23cdc34a2"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "656b9024184432dd4500e33552f22491"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "d0748084c394aefe250b7e869007b76a"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "7be3fec93c6af7899caeaf477f41817b"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "297fb98869155eaac699327fe2ac3e6b"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "3fd0096f40fa482d4b44387628eef7af"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "a97a7c9b374f34afa985168a31456274"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "925781259c7f5ad99b0f424f51ce8026"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "b39d19334ca31560b2fc1448f00ebae9"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "53ffc50d45aa1c5f008cc46f43f22f76"
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
    "revision": "69b89df40d33375e92e77c6cda27ca27"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "1e2db94cf7dc416a6c38f4e5857b81fd"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "0062c154156a7c9018c068869c646809"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "54c05855d943e432e13954e9edc8ae56"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "2fe95e72cb958b3cc5796e7fb6720abe"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "9649394146819e98dc90d136f4c1ef44"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "4db83b9585da5617229cad613214520b"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "65067e886168fa92bdafbaab8cdbd3cd"
  },
  {
    "url": "resources/books.html",
    "revision": "304101b2065c85ae3a239e93a3c64d8e"
  },
  {
    "url": "resources/community.html",
    "revision": "7ff025a68cf316fffdd1fd6affde039a"
  },
  {
    "url": "resources/conferences.html",
    "revision": "853d6156260a437096bc0425e99c4624"
  },
  {
    "url": "resources/courses.html",
    "revision": "820c31cf7f54ca4b4dc5445a9dfd7b49"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "b134a9c593e54df6ae7be00016024560"
  },
  {
    "url": "resources/examples.html",
    "revision": "974cd6ad711cccbdf04d997ef63fdcf6"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "d3685bf250d44da9ea62be1b264ff36e"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "80e45e22403949dd196b8b0826481d14"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "07848a2f24340b956b2d66b5369591d8"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "5da35cac7ea8567cb2a8a4e17380ee7b"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "c095694208b1dc0c3a07405e74996b50"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "75a25d2614d69e85089ddb052507ce44"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "85ea0e97c4afb9e11f53f93afd9febb7"
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
