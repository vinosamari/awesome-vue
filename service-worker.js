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
    "revision": "492442ecc8895ccd445e1b581179a8ed"
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
    "url": "assets/js/15.51c98274.js",
    "revision": "29d81b1e3d5f3a82a2d31685c457c217"
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
    "url": "assets/js/app.29b48c0d.js",
    "revision": "af8c2509a25ed29e2376804856abf5e8"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "b8ae8d622f2cad7e7ff590e8c5baff43"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "bce1330735ddaf66c1c8eecf7946e046"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "8bed19ca522653122b022afded425307"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "2246604f499c5e5c09485b4f5c72d48e"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "a5b417f6cd69a53b5d29ccde567e2e68"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "efa7565236f3b78e6dad04acb239271c"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "44bdd608f121082e2278fbee59739b49"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "cdd86d16a4df7911388fbdfe9c08d93a"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "11b7d32f46ebb4b00d5a15c6f1aad538"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "db8957cf8e1d9ded6d111050fbbb87a0"
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
    "revision": "c121b3d89a383af559f8a8ef26e8e50e"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "bd3699f198d805e20293775dd48803a1"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "0af9ec5dfaab6292b96a2a97fcbf0865"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "2d5e0006bbeeb5da7e5e77c540d15cc7"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "1a7ba4be75de5a8583c305e141125fdb"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "d688bbe50c4aaf2d85b61dd70b670d01"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "1537d0969149d2fa59afd4bff0eece23"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "b50852600428bdf12c3993c4b64c9d67"
  },
  {
    "url": "resources/books.html",
    "revision": "7d509a8e8225cee4e4014c2e053349f2"
  },
  {
    "url": "resources/community.html",
    "revision": "3417a26ec9deffcc82410f9af1aa2095"
  },
  {
    "url": "resources/conferences.html",
    "revision": "0d111171e3f20c7653ab27fdad912fc4"
  },
  {
    "url": "resources/courses.html",
    "revision": "f5dc56fdc5a394195aad780804a3131f"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "4fa43fbb6f57b185d651c227eeeacb19"
  },
  {
    "url": "resources/examples.html",
    "revision": "8b3b842a72ec3f1afda47a1d00e6a6f3"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "cae77951a10a98f6fb3fcd0de5034949"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "377f48c4db734562a2b8d9d81a652e1e"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "cef61c981d58ace7b20dc24fbb45d7e5"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "fb9a077921f33b5419abd673b34746e2"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "d48f221d7d6a539f198cb04a90d7c34d"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "a3710056d89ed1716ec1a5358ddceabe"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "21b11f37bfe5be7262dc7b2c9bc5af95"
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
