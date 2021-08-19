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
    "revision": "35e32b37a7505cc83d507b80233c3811"
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
    "url": "assets/js/12.f0d772fb.js",
    "revision": "84b245243547e45dcf36efce52696782"
  },
  {
    "url": "assets/js/13.f4ff75c0.js",
    "revision": "abc811fbd0ad195c9f3b31f18084a8a6"
  },
  {
    "url": "assets/js/14.588bb86d.js",
    "revision": "e41e52a0a752574325717d7e83eab402"
  },
  {
    "url": "assets/js/15.b3d41130.js",
    "revision": "3019080a37e31d7e533a13ac04596e44"
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
    "url": "assets/js/31.24097aea.js",
    "revision": "c332a77492ebc8971891732ae460a404"
  },
  {
    "url": "assets/js/32.c576ca22.js",
    "revision": "2fb378f56dcd1e95d0f2683644dd44bb"
  },
  {
    "url": "assets/js/33.5e17d0f2.js",
    "revision": "87689b999eb7fcdfc35844ff1f0c7fd0"
  },
  {
    "url": "assets/js/34.c81409da.js",
    "revision": "66988bfecfab21e8346a3817064da9aa"
  },
  {
    "url": "assets/js/35.eb69e658.js",
    "revision": "0627908e669b95b74fdaed55701e0ac8"
  },
  {
    "url": "assets/js/36.bde460b1.js",
    "revision": "2e042626ad1856aa12e82958cb823199"
  },
  {
    "url": "assets/js/37.08f1899c.js",
    "revision": "21b7d272cf4a77cc6cdb32a1ae650492"
  },
  {
    "url": "assets/js/38.f54079bc.js",
    "revision": "0b82669999c35e217566eb7f1ba5b736"
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
    "url": "assets/js/app.e922a752.js",
    "revision": "ada6dba828b2713bd28b16920bb3f886"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "be60b3539968a2384e5bbc5850f2c722"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "1ccfd730646c7afaf56b21cf374f0e46"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "e42fe32651eca9e20f4731be1a572e46"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "d0dd48710d1a646fda36025d690a1380"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "082436ac6e778258e5579d2f7bd7a522"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "4d97095c8acac3899125af5a0a3a8c04"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "4954d79b98547f870bdc94f58014191d"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "f519699a9f97d537d189e760dde2c5fb"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "38c8a17694c55e7fe863098343ae9114"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "f5b1ef735b06c632f08cd8523bfc7442"
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
    "revision": "2923cf3b4bfc02e47055f75385eb81cb"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "e93b6155c6e054a5a38217821f00de3f"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "a9daa9ba7c770e470ace60e13b291be1"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "41bd24f04be5a4bd0d43df717a844d9a"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "9c9ee7e441e53a5ea1eeb6e2f03e7a76"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "4755fee30eaf1016b18c4b018c1835a1"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "5bec5c2dcc740872384b1e987a1fc013"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "d4d79c783e3f1f05130be5a770117eed"
  },
  {
    "url": "resources/books.html",
    "revision": "1fa100aab21ce9d67d095873631ec4f3"
  },
  {
    "url": "resources/community.html",
    "revision": "e6b6b71a28b8d4b6d5e7854c57785e2d"
  },
  {
    "url": "resources/conferences.html",
    "revision": "67822feb10417bbc5446693d1d2c2f85"
  },
  {
    "url": "resources/courses.html",
    "revision": "026d20b1f0b0c9fce5015950e5df1b3a"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "add4ec20ee0c76be20d591bf1a27b738"
  },
  {
    "url": "resources/examples.html",
    "revision": "2c7e29f582eb9c4444efbcc9b5937dc7"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "5ca5f2508f993cad28e428e36dcfad39"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "ce96e95bca165172d47fb99f21f314b0"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "2aa0824bd66cdbf906a9a1a757d343c8"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "16f046182fa3a76582d1edb17f467971"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "387f3a22befae280bd815adbc5080454"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "df27d80b7c6c7d68b10dbebbafe6e849"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "06ec5bf03acb47184dbd515eed930af8"
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
