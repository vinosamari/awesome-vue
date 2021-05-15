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
    "revision": "f3ac010f2826ea9a98910d81f7c3a8b5"
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
    "url": "assets/js/15.7b133d42.js",
    "revision": "ec7edda2b812abeb03efc9b98477de5d"
  },
  {
    "url": "assets/js/16.5765ffc5.js",
    "revision": "44294f951e645edf59e83d1f16abc87d"
  },
  {
    "url": "assets/js/17.74d0a4a3.js",
    "revision": "012e2995d0af04f7a562ed0424b35dc2"
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
    "url": "assets/js/22.0a5ed6de.js",
    "revision": "f271c3d3463c0753569b6195eec196b7"
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
    "url": "assets/js/25.a90cf28e.js",
    "revision": "0119c92ffd23c0a2feff2b2040a2b1a7"
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
    "url": "assets/js/app.467c5d0d.js",
    "revision": "80fe829c71fac2ad12151ee58c22ca98"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "73ada7149c554c56162c02de5083a289"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "b5e8d64bb75bb02fc7042d9b3778a145"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "fad4139aa0911a0ba823d3544cb7d1ad"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "522a2b716a65bdd78e686c31e108d800"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "847e15ab97bef60bcd3268d7d695b45b"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "42ec58a80fcde9130dde666221514793"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "5d5ebf050961f8cde95f887464dbb1f7"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "6ccb5a7bb39d6881bca71d209bc5113b"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "8e810b04eb354c2bca6c8fcca90d4db9"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "b2588aa6e7b693f096afdab8e64bde2b"
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
    "revision": "a9842f6d1f8e458485810dc942739a8c"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "6f078dadf998fbace52ca0b94830696a"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "e8ddaabc166dca2f4dc996d1de742451"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "3e2eac669ba58d48ef036777cf893e3f"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "6fa73c3c798ba133cef4b0d7ac2791f8"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "d550b9dd76bb822c575ae0ad06c5a4f2"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "cd9b911e43994eeede287accc87637f9"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "bed21d457ab6ae78deace5496902f2ae"
  },
  {
    "url": "resources/books.html",
    "revision": "395f90c274f25d30a57c5fad2ac56764"
  },
  {
    "url": "resources/community.html",
    "revision": "a849c2cca9f84401478638fb782379f4"
  },
  {
    "url": "resources/conferences.html",
    "revision": "dceb21233619147d5ade4075bdad77a5"
  },
  {
    "url": "resources/courses.html",
    "revision": "2d79d2c49d235374c4185f46ab061868"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "2f5225d6759a7ddecb688fcfac57f130"
  },
  {
    "url": "resources/examples.html",
    "revision": "901d34d8e094efbfbf554c9cec5058d4"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "e35f66880210ef58698f86994edb606f"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "fdf93cbd9a7fde9c3c82b0ed0377533f"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "d05e471f2555bf38054ea92ba0fb9f7e"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "d81597703f6c9f19b6a7d0c4cc7a03ae"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "3093755067c6243aa3cac7a5b5190c0a"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "cc569ea6103162b8d0bb3efc2d10db1f"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "f7c6de3267f1e654b8ee2e587de85772"
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
