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
    "revision": "b0932e281ae691ca84a59cc767314c3b"
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
    "url": "assets/js/10.105d6623.js",
    "revision": "1196b4596f497493ccf4b04aaa37e414"
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
    "url": "assets/js/15.1a8851c4.js",
    "revision": "085d54e742e6b065fb2fd1f5cfaac360"
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
    "url": "assets/js/25.37b51a3f.js",
    "revision": "b14b1eeb6aab0f0063f595a475be70bf"
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
    "url": "assets/js/32.5103d736.js",
    "revision": "c9ba3c7d9e7ae16b2c1fdfee1140e7de"
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
    "url": "assets/js/app.6de47efa.js",
    "revision": "64808d83ce5deb78a1623ac8d86764e4"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "6d01691832554ec7893bbb609de09bf6"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "d0f498a85cbe5c144eace256aa896ba4"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "d0209f3b5f3d4377a17389a8dc2c7e16"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "25a8e331d64403903f0bfb6fbdd80e28"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "1b8cd8b41399bde3c0c99104751e4752"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "95565aa844ed316f2afe58c1a006e35b"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "2e751deabb1ee8c973715d6a74aa1f83"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "76bb52ffe3109cb4a2fa3a9e4ddbb8e9"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "8704800c18704b0cee11bd58dcf48a86"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "bac1827e9d535562f60318d377aad6df"
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
    "revision": "3bde021e350786765ba1b70fdc57b15f"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "0c7d89e1359b9111add1ab72278155e4"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "dc19a1e34d7f0e96021fcdd979c7a2d8"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "416862ef3b5bb2903afc4eeea97e2d78"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "86c701dca6cb6dfb16b10fc2bbc91ab8"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "ab4b9dfb40ab0fa850dbdf048a508483"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "d0e3ed7a0eefff723cc73a7e96aa3fb7"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "fc5d5fae97c25e74b2d9fcf8d52f15f1"
  },
  {
    "url": "resources/books.html",
    "revision": "ddc478a2f2126840e6a4b8c50a15616b"
  },
  {
    "url": "resources/community.html",
    "revision": "b121add5d459398480b7d99ff7adb30e"
  },
  {
    "url": "resources/conferences.html",
    "revision": "f3564335b20552bdbf73cbf02794ca3d"
  },
  {
    "url": "resources/courses.html",
    "revision": "e49ab4b0ab8bc04fffb82cd84ddc5b1e"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "15791a855ce2857cc56fd7ac4d5fcbda"
  },
  {
    "url": "resources/examples.html",
    "revision": "ce8f8d0ba9c0e31108f63d9957ac42d6"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "292a386156dc16c85d9b05981b7d91a3"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "1d1cdc7a5c8a424aae24af3617d1e75b"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "5b45de4a2457f3419c42c828faaace53"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "44d889bb9399d96c686d3b4e8bda6687"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "6c90a9a4cdf6f1d466222b4669081fd7"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "6957cef4a04d5672e674121078da2d10"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "2f9574099dcdf023e91d18422d1e7033"
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
