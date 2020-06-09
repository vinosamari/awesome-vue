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
    "revision": "40f9a1461cf7d89f60e3bb7a7b24bc19"
  },
  {
    "url": "assets/css/0.styles.2aa3027d.css",
    "revision": "370c44f8042e55929aa76df6d486a38e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3658515e.js",
    "revision": "98ebb232b5763a17e1a105462c586a87"
  },
  {
    "url": "assets/js/11.ba96a8f1.js",
    "revision": "aeae8d256edb6c1ef77fc865da85463f"
  },
  {
    "url": "assets/js/12.34992ceb.js",
    "revision": "9ef8c22a770602a709756b03d6bc62f6"
  },
  {
    "url": "assets/js/13.3cc97e6e.js",
    "revision": "e3e1cbbddafbbebf67dc0fb43db9f697"
  },
  {
    "url": "assets/js/14.af55f0f4.js",
    "revision": "676b5be05c26853d9e69ecd30415287a"
  },
  {
    "url": "assets/js/15.9e64bfe6.js",
    "revision": "00f22da11468f0858d1517c8bd65bc35"
  },
  {
    "url": "assets/js/16.5604ad7d.js",
    "revision": "b876f387acac0e9b6d8955996eae9c4b"
  },
  {
    "url": "assets/js/17.1235d9a3.js",
    "revision": "e3e8ac8dd757b1e91ca5901fed2957e0"
  },
  {
    "url": "assets/js/18.850c42d5.js",
    "revision": "f36f3b88782df9d2344878789f84f76f"
  },
  {
    "url": "assets/js/19.20c5967e.js",
    "revision": "1d267833d694de6cb2db8fd1149d7f68"
  },
  {
    "url": "assets/js/20.46ba5f6a.js",
    "revision": "4dcdad25ab69033905623e4b34903419"
  },
  {
    "url": "assets/js/21.ee295a0e.js",
    "revision": "bbf53c7c2cd39998d21e108fa8e0e11d"
  },
  {
    "url": "assets/js/22.f784833c.js",
    "revision": "8ed1189c70e48b1620d6f9577108e54d"
  },
  {
    "url": "assets/js/23.ab267dfb.js",
    "revision": "7631c3fac1bea1ae769d01b704d2a216"
  },
  {
    "url": "assets/js/24.e0869f58.js",
    "revision": "1f53d00a56ccfd47896dfff15ed080ea"
  },
  {
    "url": "assets/js/25.584449b1.js",
    "revision": "0ada21b7dadb0fca3ca40a5ddab2f55e"
  },
  {
    "url": "assets/js/26.364af343.js",
    "revision": "b4a9a539f217475f3fecda0c5df10d83"
  },
  {
    "url": "assets/js/27.d0fc6402.js",
    "revision": "0df42188a58119425b812efc10dc2716"
  },
  {
    "url": "assets/js/28.07c1a310.js",
    "revision": "824eebaaa56f5ad0d581603b98deda6b"
  },
  {
    "url": "assets/js/29.dbfd3640.js",
    "revision": "8ae36adac97d3cf1bf4441c4abd37958"
  },
  {
    "url": "assets/js/3.8aa232f8.js",
    "revision": "f0ae3476b63d06509737e47f70be51fd"
  },
  {
    "url": "assets/js/30.6cd27aaa.js",
    "revision": "7982b4cc1202a6ea74d96b50f6bf3af3"
  },
  {
    "url": "assets/js/31.d9496104.js",
    "revision": "8eb0532c2b3b46acaede5dfa94ff5157"
  },
  {
    "url": "assets/js/32.1b282938.js",
    "revision": "c500b68666f867841b04e374a9007581"
  },
  {
    "url": "assets/js/33.0c509eac.js",
    "revision": "b84f75df16e498c23c433774c779a20c"
  },
  {
    "url": "assets/js/34.9bb4dbd2.js",
    "revision": "a12322e81333dcd911f6943d6c572e4b"
  },
  {
    "url": "assets/js/35.bc25062f.js",
    "revision": "2cbf3cfafefc29b8d752ea33d81dc25e"
  },
  {
    "url": "assets/js/36.6b2f9850.js",
    "revision": "c13b617c65d40191a4ae34f338406c4a"
  },
  {
    "url": "assets/js/37.759cb88c.js",
    "revision": "adb719577316e71f6c76d4a698585963"
  },
  {
    "url": "assets/js/38.fedfc4e9.js",
    "revision": "8ef6b6dc845aa4ea89248268b8d90fe1"
  },
  {
    "url": "assets/js/4.33a8c835.js",
    "revision": "7a06f2c82abedb3ae539f031dbcd37b4"
  },
  {
    "url": "assets/js/5.f96485b2.js",
    "revision": "53f6787ef3e87b01413d5363c80fefb3"
  },
  {
    "url": "assets/js/6.273712c1.js",
    "revision": "e546742eca0669946aa4216528f667cf"
  },
  {
    "url": "assets/js/7.183efc3c.js",
    "revision": "e41fb9041606040795932459d9292a34"
  },
  {
    "url": "assets/js/8.cda03df7.js",
    "revision": "82ae970773f81e7e8194562ac3078328"
  },
  {
    "url": "assets/js/9.70647bdb.js",
    "revision": "b3334324963ed127733a211ad29d91bb"
  },
  {
    "url": "assets/js/app.a4d8caeb.js",
    "revision": "033725dcf95301036f7ebb5dc65b7d85"
  },
  {
    "url": "assets/js/vendors~docsearch.9bd2c564.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "6a74a6e435052ecdd558016cc685b6d7"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "bfe24d61038f06da7654d539b5dff2fc"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "7110b0a21791b7c42a449e0604d4a4d5"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "51d03c4e29bf537bd970c7eb56f7f8fe"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "a4ceeb89819b1555650d32430ca702ee"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "24691b11cb6511daa073a62b6e25c465"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "2d9bf03eae854e50082180604abde76e"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "5a4801c96816b581c9a8b08f0fb87a8e"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "4a1ea4252fe16496b8989b6577e4d35d"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "e566f46deb0d57abea683a4c6e613744"
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
    "revision": "76adbfdabe89a100269b2c4c5b54d544"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "1452b3cc22d1d18c7f10f5c93d314f9f"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "3de749b6764e6da368447f9b759957fc"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "65cbaefbeea992e2301f8b99646b2bf5"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "040de52e0ab8ec12b9e74d69ea9e13f5"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "25f765370506625137ef1f5a3b9ddb43"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "23c88c1e8d6d0aba18ab860d591e6f86"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "db80794376070b78a916fb32319fc46f"
  },
  {
    "url": "resources/books.html",
    "revision": "e46c6c2610ddab6cf7abffa6e05ce4be"
  },
  {
    "url": "resources/community.html",
    "revision": "94dbc55df5a7b9fef4003e2e1fce8019"
  },
  {
    "url": "resources/conferences.html",
    "revision": "9dd4a65ffba7efc5f2dbf244f0d08149"
  },
  {
    "url": "resources/courses.html",
    "revision": "da9b06bc48b3c6d40200730f2cfc54ad"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "6c4047522fcfdda59ba0884b236c5196"
  },
  {
    "url": "resources/examples.html",
    "revision": "3bcd602b6bae20766a94579b2cdba48c"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "e0cc72a07d190c55b86bf6fc5672ab6c"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "d319159916ee50cac53133ba7c3a8757"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "10f5b08344b69c120f7082ebb11abc5d"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "d826693c1d22b4695d64ed14ce8fae62"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "5c3bc985df97547553e407ab922317f2"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "90ab213f1281304b6b92e7eacfa3028c"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "4ae8cadfc6167b48f4c75ea189b2fb9e"
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
