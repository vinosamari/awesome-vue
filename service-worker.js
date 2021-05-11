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
    "revision": "03cbfc62dd0867d16ea2f110538c8d2a"
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
    "url": "assets/js/17.273ec9b7.js",
    "revision": "95018d24397f347aef993114b2231ce2"
  },
  {
    "url": "assets/js/18.6dd311eb.js",
    "revision": "1c2abc0baa931a5627b9d7903f282793"
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
    "url": "assets/js/app.e4159e5c.js",
    "revision": "4f11d08fad56d5a3657f41d766be45da"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "6545eeca194166b6370a047e59a37540"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "bcf9af6c8f05061f2c16c34a0c388ead"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "b725eb129419d94319d12b7a55f56db0"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "37f183742a579d8d8162b33b16405589"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "fcb738f84c52c0d98a5d0089bc8fcb1b"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "556f9566c7ac637011d1d4cf192c2369"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "5a47a4d5dbad7dd772670d5c3ae14cec"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "5cfe2d16e322aefa433d35ee208608fc"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "957f064531dc42340aaec7c1a30a004f"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "b012ea205aa3ed34c1a4474d73c07c28"
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
    "revision": "72162bb28ccdef1ed15b9fd37e2346c1"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "b4deae15e44f80db06815be3be623adb"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "b6ce08dccfdc36ff8accd2488ca858e1"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "88d013793d4523ef7d2efd3e266450bb"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "42dea42c73bd1bbec32d58f3d8197e77"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "5ff37600db6c219056d77f2b033f917c"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "d85302d4804c61c408c5a76e1f047dd0"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "8fa4c8c070d02caee85aa1b57770828d"
  },
  {
    "url": "resources/books.html",
    "revision": "ce5d9505408c4236a9c5807e7625339a"
  },
  {
    "url": "resources/community.html",
    "revision": "a4acf70aaaec2656b65a3c91fc379b86"
  },
  {
    "url": "resources/conferences.html",
    "revision": "4fe1901c2110eb4eb48e037590d2a155"
  },
  {
    "url": "resources/courses.html",
    "revision": "0b83ede7e83dc0532a224ef4669460b8"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "99ad0a4d19686d4dd4ab81d740048286"
  },
  {
    "url": "resources/examples.html",
    "revision": "a028a0d870b9691c2f330acfc5784e5a"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "572931cc4337485e371a739946c1522d"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "4099f87f3be78f10f4cbaa900a95a974"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "d5500b3593a6ab523ed642095f995800"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "26a4ddb1d01a6d98a23964e85a015c20"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "39c15a5e047a863705182f31183483af"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "a4fae52ebb1cbc2a0e53dc7fa1b4d022"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "e9681a26ec7b36e53c377fd73be5d6f8"
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
