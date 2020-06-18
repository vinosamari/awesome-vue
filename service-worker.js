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
    "revision": "6dd8ae31e64e4f8aa6f1ec0ce25afaaf"
  },
  {
    "url": "assets/css/0.styles.1bea1ed5.css",
    "revision": "d094276598c5f5ba8a9b78db767ad7b0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.76c23015.js",
    "revision": "6cfddeb12db513cf18d744565bd93fa8"
  },
  {
    "url": "assets/js/11.ba96a8f1.js",
    "revision": "aeae8d256edb6c1ef77fc865da85463f"
  },
  {
    "url": "assets/js/12.10a04a1d.js",
    "revision": "58ee7bd7373da3a3269b6d220da8911f"
  },
  {
    "url": "assets/js/13.a1588e92.js",
    "revision": "ed2d0f893bd9ccd268e8927ba2556cc4"
  },
  {
    "url": "assets/js/14.af55f0f4.js",
    "revision": "676b5be05c26853d9e69ecd30415287a"
  },
  {
    "url": "assets/js/15.01fcd058.js",
    "revision": "435f487bcb89cdf7299b1fbda1cedeba"
  },
  {
    "url": "assets/js/16.af457d65.js",
    "revision": "a2b3f90433a20647ad81a042984f0e15"
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
    "url": "assets/js/19.6dae4ee7.js",
    "revision": "53cde89566fbf3661b9a7420d6193e8d"
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
    "url": "assets/js/23.1a90b166.js",
    "revision": "71b9c63f275838ca78d64af068cc8c79"
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
    "url": "assets/js/31.d98a9642.js",
    "revision": "a5d4bca416dcc1e16155a9b5c9a4a8c2"
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
    "url": "assets/js/8.29ba9cfa.js",
    "revision": "fee0d8ea215b9d16ee9daf805537d665"
  },
  {
    "url": "assets/js/9.70647bdb.js",
    "revision": "b3334324963ed127733a211ad29d91bb"
  },
  {
    "url": "assets/js/app.2866899b.js",
    "revision": "758c433d02266adef8b6fe266c084b8b"
  },
  {
    "url": "assets/js/vendors~docsearch.9bd2c564.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "504bcdf614698f083edeb172f71f1caa"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "2b291b22afa5ca0b4e78dee8ba2a67a1"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "17c15733f156343c97e4ef3605959f14"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "569b47fba224ef1438c58ecab8291bf1"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "b1c3326470cccc7b64b211bbe0f71603"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "5ecd3acb1e2103150471f3dbe8746a26"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "947bccf9141d70df985b39e2b9c8445c"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "2f6d742cf62e800f782fbf8a093ed53b"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "e7dedffb53409bbd83fe28d60b9b544a"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "5db1e67e3558cd5d3ea402e101e4fa85"
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
    "revision": "2764af31d7caddfba25ff1699d66dc6b"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "032da0d8d861f26876e4531f63b23a9e"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "95e4e7dcaa01c204a0edadcc7569d363"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "327d8b4b63cf074889838b3bbf18b5e7"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "ce370a27777c90a4beae9c0a2e86bed9"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "0fbbabc0edf669d82aa636e33f5460c1"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "5f16dd4b55c159cde7fffab21d3c9c4e"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "c67b30cc31933fa4967b54e91d693e29"
  },
  {
    "url": "resources/books.html",
    "revision": "1c847e1a6be32ca4c0102969a3b92e96"
  },
  {
    "url": "resources/community.html",
    "revision": "d200e895f9ea1a3de17daa949816373a"
  },
  {
    "url": "resources/conferences.html",
    "revision": "c591e6e1d99cfbeedce5929ffc1a9cc0"
  },
  {
    "url": "resources/courses.html",
    "revision": "61babb0853665ac7f1c8a6e4b8c0c0ad"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "5cecff5eaf063b88226369f0b6debc09"
  },
  {
    "url": "resources/examples.html",
    "revision": "0c6e14cf1da1778ef53df04a5125da39"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "e06198fbf1cb7d69181fd61b068f4be6"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "d1f74311ed553e8a5ace2f1152d52250"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "ccb4156e781070c04b80ca72873ffbd0"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b387d18cfc937bda83fcc4c4ccb5044c"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "e0cbd3472e12b07ff99220fce5591c19"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "39a42ddd0683714ff0904615ffb3c015"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "4930e29c16c4e731072d715c6b6ad413"
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
