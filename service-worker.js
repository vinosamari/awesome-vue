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
    "revision": "d6e88bf04f4ca81209e4038287b27d74"
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
    "url": "assets/js/30.f4637969.js",
    "revision": "3f2ed3c80d0f30d22e688dfe1e260353"
  },
  {
    "url": "assets/js/31.3a06df2d.js",
    "revision": "8eb0532c2b3b46acaede5dfa94ff5157"
  },
  {
    "url": "assets/js/32.42d8e2d1.js",
    "revision": "c500b68666f867841b04e374a9007581"
  },
  {
    "url": "assets/js/33.f5730dd7.js",
    "revision": "b84f75df16e498c23c433774c779a20c"
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
    "url": "assets/js/app.3ecb3aad.js",
    "revision": "a579584b5c4386a7512b1b49d926e5ab"
  },
  {
    "url": "assets/js/vendors~docsearch.7ff8aade.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "7f1c70b0638630bbe85de5da4cc5cbb7"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "a5035626520a5574607aac155c98681f"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "5ebd77d55223cc0bd2a109889669b40f"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "48b2c206dca4fe988d624728ae51d33a"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "08aa81241abf4e258c289d7e57349b69"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "c4db3f0b467726bfc3f1a4bdb1711287"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "e09a8ba5d412d14aa8144ee18353dda9"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "26e0e0f5022abb7e8adc0d2501d2fc6a"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "883ff781593f39f085c7a787fca3352e"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "303a6f031da9f9777479f9b923aafff9"
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
    "revision": "a029d048055ffb565ecf319fbc56d04a"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "c7ae7e8ab1fa1f21f279ea2fe695cdc2"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "3cabe7ff6d6998454adb45a56041d575"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "64fdf3f09915bd69618fa9eab5d03716"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "8fa64d46fd96ba3b0d06c1972ef489cf"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "8eabe6a0aa63eb779f2565db62f9eee0"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "7dd44e898f7a08dbb5474e7261380487"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "e6eaff22693ae2a31427382fc0d1b7b0"
  },
  {
    "url": "resources/books.html",
    "revision": "684797e192fed9cb0adf39a9dbd64df5"
  },
  {
    "url": "resources/community.html",
    "revision": "c7f89ed61e6103a839abd712a768b295"
  },
  {
    "url": "resources/conferences.html",
    "revision": "2824f3ff1081f786d3db9b849444c6ce"
  },
  {
    "url": "resources/courses.html",
    "revision": "aad462ff4a4e8bbedef8e2459a9b012b"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "1791a6edd9db967854d01853b31b6329"
  },
  {
    "url": "resources/examples.html",
    "revision": "d8f414fa0f8d179f8dd351661a687d35"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "f5cdefd69df2a2f69c2a9e0e9daeb667"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "7ccefbf0e6ea78d655568ba427aa0c10"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "9ab2c7c97db5d8afeb6f9a10c28e64af"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "de27a9a0b19bf1f347e00600e3d2d9fb"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "6ea87df0131cce5c977bc1f9bd9edea0"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "1c59768ba8f0d47dfa77a6e0754f61dc"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "3562def023bd0591dcdc62148f0165cf"
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
