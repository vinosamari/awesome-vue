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
    "revision": "3ee67de8f273d8dbf5cb32b8ff4b1e1e"
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
    "url": "assets/js/15.cc29268b.js",
    "revision": "06b61fbbb3a9a1004d0335a3fdecca00"
  },
  {
    "url": "assets/js/16.f69dfc2b.js",
    "revision": "eca180f82bd1e5f69b5c20f268e4f6b0"
  },
  {
    "url": "assets/js/17.dd0a8b65.js",
    "revision": "89b245ecc8ab9a5d447363c8aae8df47"
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
    "url": "assets/js/21.92035d2c.js",
    "revision": "9ad2a4899cd645628833eee74da788a2"
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
    "url": "assets/js/38.f71430a9.js",
    "revision": "97f5102ca8a49185ba00b803ca247aa3"
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
    "url": "assets/js/app.84fb32ac.js",
    "revision": "ea84652283955c145be00e09bc6d2261"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "95d8d93d31c970c9b1e0c5c6cefcdd95"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "d5bae90a0321effc3ca467f700150e93"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "ee4331c8d78831ff01cfd6ea1481873e"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "350f506b8dcb50e767862bddc7e9aa6b"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "4ce16ad17492eb9999b80d9bacaef783"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "748d22d577fc8ef0fe0495103ff3a3de"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "db41ee0d5dc819db33a0dbd2b653656e"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "38eee0f2447203fe275af23bfc167e41"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "f401660df8f902f21203ab9ec0c5e6cf"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "e902b8f1aea2ff2a70f62750dd087961"
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
    "revision": "f311d621ba91c3b5c454ee318e14bed9"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "a87b74cb44cc9c8d42b5761c29e504ad"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "867575c4e547c94563a9ee0b507e4ae2"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "ad362c5ba3d5e001bb73a4c8db7b2dc1"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "2b3b93b7ef59eb3b1662df1783435498"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "776a6f9bc0beb1e231728d13f1c7d620"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "fa41d17d5d125a2399f26b5380bb802e"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "397d50b85ab778f5753f90480f006f8a"
  },
  {
    "url": "resources/books.html",
    "revision": "e48db8c0188efe4f13153ea10543c98f"
  },
  {
    "url": "resources/community.html",
    "revision": "7b433653114b01665dc4bd8f98e30676"
  },
  {
    "url": "resources/conferences.html",
    "revision": "b149451d6fc5d5dd282a70da5b008b72"
  },
  {
    "url": "resources/courses.html",
    "revision": "d4d18668c079ecacf5f2d4015170cdd4"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "fc390bfa5492cfd9a416a6ea187de753"
  },
  {
    "url": "resources/examples.html",
    "revision": "69721e2a1dc3f9840d5575f08a2b3c61"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "63d3eb183bf7122e3f11d8842e41f8e8"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "786edbefed7fbac0177257e3f1821725"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "fbac7f3f91f493d77e6eec0da3a48c0f"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b710027c46f3a36b8d3facd148f92b8a"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "c7d60181f837ce4622aaabec86833e59"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "1ce4b058b9cebe9e9ae32b3198b8d94d"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "7308932a9b7695282ae3aa22afc4c2a4"
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
