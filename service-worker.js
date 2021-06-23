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
    "revision": "c089cade300b47fdd77e2175a603f3cc"
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
    "url": "assets/js/15.0ea8b858.js",
    "revision": "415ca3f1a914f68a702da88f70b129b9"
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
    "url": "assets/js/25.05b77336.js",
    "revision": "b1dfb3068c09899095ccccaf605e1fa2"
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
    "url": "assets/js/32.8cc67a40.js",
    "revision": "8447663ca9c8a212136254c1361c0570"
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
    "url": "assets/js/app.f2916df6.js",
    "revision": "b40f18d974814a4dc2ce3b2b638cc737"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "7c63614e9ffd3e1f87eed2754570aa86"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "ecba7a7ab314fbf682f9e1f7bac29993"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "fc7bda8787f525e335b1500cfb8fe038"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "13e8a46df739af22268d70b4565c1bdb"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "321df47b073cba53fa4edef249295e15"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "61afe8655184c30e276ad83452ea3325"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "b71c38d6321de19ddde9e97cac783b39"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "bed43bab6a098e0ee53ffe48560fb3c4"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "941a2ff5d8cee28fdb1e2e5c7913b443"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "18c3631e3b5cda764007c0bd9255272e"
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
    "revision": "fa344a05b6126a29b96d9fc17292f292"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "306c791954d268e7c801ad4fa53e94a5"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "07d68fce8d8dc0369c08c6e94f1fb83c"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "c13c9ac5bcc8c4d140161116ff8e18df"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "0e8dddc6d484897072ab132019344e8e"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "bbe6bf75de7d9a7bcffd7f26318e5eff"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "ffdfb78d1e9e872dd499d0900032723a"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "d65d3d87954abcb2ea9b3a851906ea8c"
  },
  {
    "url": "resources/books.html",
    "revision": "9d873222fd1438224e0b60fdf1ebc01b"
  },
  {
    "url": "resources/community.html",
    "revision": "0808fb560174fc7e366e3a6791f69206"
  },
  {
    "url": "resources/conferences.html",
    "revision": "3fa86176fcaa9e02b4076347bd1eb673"
  },
  {
    "url": "resources/courses.html",
    "revision": "e7097a90936e5da763b82ff9efd495f1"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "7a6020408a8ee614f21e5d0a022368c1"
  },
  {
    "url": "resources/examples.html",
    "revision": "8f6aceae80e4f29012393bbb2224897d"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "04c1737fd812983cbfae99983ba185d9"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "e03cc816090834540cb21f0186c5dd08"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "60a16661c49194c15148c101a1b356a8"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "f7e5e4d90e1609015cd0da524daae014"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "12a56d19980c259a914a22f7f524ba8d"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "3172e6ec087c602c457a27f86d9cba25"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "0287347767b7926cdb6d6d18274ed2e7"
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
