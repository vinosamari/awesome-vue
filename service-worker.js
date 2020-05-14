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
    "revision": "a77051f61e9cd40730031b8fe00a933a"
  },
  {
    "url": "assets/css/0.styles.8fc1956f.css",
    "revision": "370c44f8042e55929aa76df6d486a38e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a87ec863.js",
    "revision": "98ebb232b5763a17e1a105462c586a87"
  },
  {
    "url": "assets/js/11.3ce978ff.js",
    "revision": "aeae8d256edb6c1ef77fc865da85463f"
  },
  {
    "url": "assets/js/12.0b7f5bc7.js",
    "revision": "9ef8c22a770602a709756b03d6bc62f6"
  },
  {
    "url": "assets/js/13.edb2b327.js",
    "revision": "a520b68d63e2635ef9720b24e57bc6a1"
  },
  {
    "url": "assets/js/14.80b37aef.js",
    "revision": "676b5be05c26853d9e69ecd30415287a"
  },
  {
    "url": "assets/js/15.c63fd429.js",
    "revision": "858294e9adb1221681394be04d8c4d40"
  },
  {
    "url": "assets/js/16.325a9ffa.js",
    "revision": "4aef88bbbf4c24ceeca098a9e40dd2c9"
  },
  {
    "url": "assets/js/17.fa9c59aa.js",
    "revision": "e3e8ac8dd757b1e91ca5901fed2957e0"
  },
  {
    "url": "assets/js/18.9a2b8f95.js",
    "revision": "f36f3b88782df9d2344878789f84f76f"
  },
  {
    "url": "assets/js/19.ad6ea5a8.js",
    "revision": "7afc803592dafd0b469a38fd6fafc835"
  },
  {
    "url": "assets/js/20.9db99b6a.js",
    "revision": "9cc27cfd0ceadbb4eb85cbb2025be74b"
  },
  {
    "url": "assets/js/21.c5626fe0.js",
    "revision": "bbf53c7c2cd39998d21e108fa8e0e11d"
  },
  {
    "url": "assets/js/22.4804a2cd.js",
    "revision": "8ed1189c70e48b1620d6f9577108e54d"
  },
  {
    "url": "assets/js/23.78d5e876.js",
    "revision": "7631c3fac1bea1ae769d01b704d2a216"
  },
  {
    "url": "assets/js/24.c4c2ee58.js",
    "revision": "7c99960cedcd0c957bc8a3ddf0baa743"
  },
  {
    "url": "assets/js/25.a2dc9613.js",
    "revision": "98f02d740b36ad91d278e7c0655c2b8f"
  },
  {
    "url": "assets/js/26.7ac08335.js",
    "revision": "b4a9a539f217475f3fecda0c5df10d83"
  },
  {
    "url": "assets/js/27.2488b214.js",
    "revision": "0df42188a58119425b812efc10dc2716"
  },
  {
    "url": "assets/js/28.34944976.js",
    "revision": "824eebaaa56f5ad0d581603b98deda6b"
  },
  {
    "url": "assets/js/29.e2e283c2.js",
    "revision": "8ae36adac97d3cf1bf4441c4abd37958"
  },
  {
    "url": "assets/js/3.819fbb24.js",
    "revision": "7123533c2036de474b1e457fb6b91d73"
  },
  {
    "url": "assets/js/30.5b1563c2.js",
    "revision": "666cf6f80068c3e0defaa76814cd3c4c"
  },
  {
    "url": "assets/js/31.017d309c.js",
    "revision": "decd2b8156837778f1e0f128c58b6f4e"
  },
  {
    "url": "assets/js/32.8f2f06df.js",
    "revision": "faf5955fd189a86c20e1614445caae1c"
  },
  {
    "url": "assets/js/33.9ccaa2e9.js",
    "revision": "712fdeb330bde70d847e2e9f6a835286"
  },
  {
    "url": "assets/js/34.ca097f1f.js",
    "revision": "a12322e81333dcd911f6943d6c572e4b"
  },
  {
    "url": "assets/js/35.234c49ae.js",
    "revision": "2cbf3cfafefc29b8d752ea33d81dc25e"
  },
  {
    "url": "assets/js/36.6b724f7f.js",
    "revision": "652ab801c6a9b594dd3bb4cdc22a057c"
  },
  {
    "url": "assets/js/37.b36000cd.js",
    "revision": "adb719577316e71f6c76d4a698585963"
  },
  {
    "url": "assets/js/38.b4218f7f.js",
    "revision": "8ef6b6dc845aa4ea89248268b8d90fe1"
  },
  {
    "url": "assets/js/4.a5b20dae.js",
    "revision": "7a06f2c82abedb3ae539f031dbcd37b4"
  },
  {
    "url": "assets/js/5.666f6940.js",
    "revision": "53f6787ef3e87b01413d5363c80fefb3"
  },
  {
    "url": "assets/js/6.91f8f894.js",
    "revision": "e546742eca0669946aa4216528f667cf"
  },
  {
    "url": "assets/js/7.f73304c2.js",
    "revision": "e41fb9041606040795932459d9292a34"
  },
  {
    "url": "assets/js/8.0c937613.js",
    "revision": "d0b2b892165f9ce0ac1d90b251912d02"
  },
  {
    "url": "assets/js/9.0afd2772.js",
    "revision": "b2bc8ee9fa714004c2c8e7f9df1ab5e9"
  },
  {
    "url": "assets/js/app.a082f645.js",
    "revision": "30b749c1b80cdc8b540cd2f9c5a06ad5"
  },
  {
    "url": "assets/js/vendors~docsearch.7ff8aade.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "456b33d96eff41cfb46eee94db0d7295"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "fe2cfb2a5eed8fd10c4689f02beef21f"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "a4a6188f545c8a15f161c8886e01a898"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "879719861a20840541ea75610ffd9cdc"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "de6379921a75c0608317bb422e3a37c9"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "ff55f5f16dcbd6039cbd1b6040c12c8f"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "fedb56420bb2268ccbc8f6e8ab496751"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "fe5cc2a43df8eed335cf36c574427d2b"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "cdae23f81721d59cf40bf05104eb9e60"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "4b210e97925124971888a04aaa0216c1"
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
    "revision": "50abe71f9327452dae4b6652d8197599"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "a428bd85cf6cebc694d02e786f4c6635"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "e7bdb7f24726997d558b3e9f6237a43c"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "937e9114397be1dcd97909740cc6c5a7"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "c79d0e5e1055fa2550f5c12b450e24bc"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "8ebe83eee46de7bee3a53309c53daa61"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "5577978a332fe803801d828a97c13e39"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "323d3b524be1e0487f1fb69c09051bc9"
  },
  {
    "url": "resources/books.html",
    "revision": "55670f5b5b50c4db975d007de0c5a813"
  },
  {
    "url": "resources/community.html",
    "revision": "16f851fe3a4f6a3d7e89ebaa0a8d0fa3"
  },
  {
    "url": "resources/conferences.html",
    "revision": "13ecabc94cae80b686454d575a51cb02"
  },
  {
    "url": "resources/courses.html",
    "revision": "50eb4dc19815acc4803ba0bd75b17cfb"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "85f66ff88365e4ac072eb3433667b321"
  },
  {
    "url": "resources/examples.html",
    "revision": "bb9f251d5aefafc6e813171c0e1cc8d9"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "a27590dace885a13b9dc728c2bf10ec5"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "a9afbe3ee6e935507040f9eb67959d93"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "8591396e9c64cbe07d06df0ed9be96d4"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "70eb5f4ebbf08c9d30f46e7beedc731f"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "553e5a20fac79ac7c53aab392151f537"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "c8529c0b1f92002cee76b9ecddeb366b"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "df88f1f8ea5815b6862b16c35b5d9ffe"
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
