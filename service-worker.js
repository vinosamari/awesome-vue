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
    "revision": "c30140af0cdd79691a99dbfc2ce65108"
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
    "url": "assets/js/15.3a8f0be1.js",
    "revision": "fb4de29fb99cf36ca48cab18a0f43cb6"
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
    "url": "assets/js/app.18db1a36.js",
    "revision": "d150fe3a8234606e978a246022087d74"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "03283a87ba512035537867ad612668f0"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "dd968a1003f22cd34730993538a07cf0"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "cef5b7b7e8db3c1e67e0dda5be997b2f"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "fb7c4e81ce48e67970b5a88f26cf91cf"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "7bf8f36a15b14bde01c33c994f71fd64"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "3b01102e54cdbac27fae47b6501b428d"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "6e2d047940fbb0a262af66d8853765f0"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "2c529884b8583d26d1f156299718d9b5"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "eb721b697ee58b12745f9edac335d4cc"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "66363cc1120d7bd1ed867313c64c09de"
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
    "revision": "a9557076b652d1e1f72dad22b20ee1ee"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "15abad2e16fc2b9d9ba9375a59308857"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "3d0fa6e5c11c19ff7da866952438d215"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "59928584c2e51959c45626295d2a1e46"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "44afdeda624dfc2a33d8609e531415cb"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "98e03c1ae42f711550df7f29bb7f88f8"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "f33713ebc0a090dc630c81a7a3bfd4ba"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "1ea57569ab535d5548f3c823ec18bac3"
  },
  {
    "url": "resources/books.html",
    "revision": "92a357873a694cba863b1505f8f6c468"
  },
  {
    "url": "resources/community.html",
    "revision": "4dd717f8ac84173174fcda2393ee155d"
  },
  {
    "url": "resources/conferences.html",
    "revision": "3c6ed88fee73cd63da8d1ffd8289d6fc"
  },
  {
    "url": "resources/courses.html",
    "revision": "769044ae383b9fb3fc5fce26ac440397"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "fbbc8e6bdda94835ac23c0b028b251d1"
  },
  {
    "url": "resources/examples.html",
    "revision": "51fc10eaad966bafcac72b5a59851648"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "12e9341a5960ffa3e3a187b4607a292c"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "2926f91fd5dba244d7ea00a6223731fa"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "01398232049b07a17c9ff0044ed4a240"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "d1b066a32283b148782f7c21caf60adb"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "95c8247df89db91c222b79d5d6c2a1e4"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "b068ccfaf16f4a172b41d71acb74ae7e"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "11fb6239c224b5fae3abc450a6ecc4ad"
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
