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
    "revision": "12ce06b5b41cf2af6192c7784daaa1d6"
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
    "url": "assets/js/app.7a4ab36d.js",
    "revision": "d60c0edc6416480271bc77b31f735d23"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "2bd3f69d0f9183fb982841775ab95c33"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "4ea023a3ec93c4f518602cb22662e36c"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "fcc72ca1c971ab12ef5bb84b2649cf9f"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "c2cea119f01a42a93f1ab19a8ab8ff4d"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "49d5795cdb88a2f2fea97bf936941049"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "8cf0130061f506cfa1df343ddae04cab"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "47c21a95120e4e8fca8db752198a88d6"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "733e6d9015e71fb6b61546812ba28124"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "345771c02df1ddc42bf132a1cb70b68b"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "264ef4cfc27b86c7e70c0840b60d9a56"
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
    "revision": "88c49064ef47f35fade3143a8e37f9eb"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "5e8276766c479f06e6c2991b310c7cd5"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "5edad7c371cf0d2d5b74068b1099876f"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "6087ee0a11ab6234b16c2f7341b28277"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "32cbd055719898ac27c634c4b1fbf14d"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "abd0299045121af30a806d2ed9ba2a93"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "8fc96e0ac766eafcfa28f05f36eefce4"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "6f81b505848e51f18319207d8a1459b7"
  },
  {
    "url": "resources/books.html",
    "revision": "2cd7495a51016f6d337c2ffa76e55c23"
  },
  {
    "url": "resources/community.html",
    "revision": "192898d909dcc0cfba5c6baa9300d319"
  },
  {
    "url": "resources/conferences.html",
    "revision": "7342a534fc4e9e3a6bb652b95bbc4f2e"
  },
  {
    "url": "resources/courses.html",
    "revision": "7be25dc54e93c0bc7f4dc7a8fab74fa8"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "51ac0339345edfabb01f5f0209362238"
  },
  {
    "url": "resources/examples.html",
    "revision": "918ef181f4ca8d648950163db1b89bb7"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "029f608594b9a8904e9db126b37506e7"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "8797d8e7cb1256a2b3919e8a9e7da051"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "d1e8f3a7d8b3bd9f4d3272e1e16843bc"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "4c176770faffcdec85441778b3859bfe"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "52f5e299638ca1b2225afaa5b149b6c8"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "143992415ac6127b7e6066e7726606a9"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "7919828e32ebd518e47a81554660b276"
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
