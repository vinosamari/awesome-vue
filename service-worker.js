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
    "revision": "4bb77245adb312bbf5169e71aef4174c"
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
    "url": "assets/js/13.e70fb42a.js",
    "revision": "e0adfe1854f5c8201a640a8f77ba805c"
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
    "url": "assets/js/19.27c1b466.js",
    "revision": "a49f66adf14fdb6df25d17033288d7a0"
  },
  {
    "url": "assets/js/20.ca84e85a.js",
    "revision": "4dcdad25ab69033905623e4b34903419"
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
    "url": "assets/js/24.71f0b033.js",
    "revision": "4fab995d86f4fbd09a3cd43aee759cbf"
  },
  {
    "url": "assets/js/25.9b22ec40.js",
    "revision": "0ada21b7dadb0fca3ca40a5ddab2f55e"
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
    "url": "assets/js/30.d89616f7.js",
    "revision": "7982b4cc1202a6ea74d96b50f6bf3af3"
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
    "url": "assets/js/36.9bfca4fd.js",
    "revision": "57579a48e1c9df9c38b9d6c910c67409"
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
    "url": "assets/js/8.487371aa.js",
    "revision": "82ae970773f81e7e8194562ac3078328"
  },
  {
    "url": "assets/js/9.57e04c9e.js",
    "revision": "65096d62e2b10177def5eacc13769f95"
  },
  {
    "url": "assets/js/app.00abe474.js",
    "revision": "f8dbead786730795aee68f1bcdb95910"
  },
  {
    "url": "assets/js/vendors~docsearch.7ff8aade.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "baa88657b7ada5b8ada2a71ee0a407fb"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "3c21af3e2ee054f055cb80fe6a1c0ae8"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "46d9c28b43883ed67cb37917aea15658"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "fdbe4f519872a3997be4b5c4d681c5d8"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "7d3312967a7add6e880b9c34c2198227"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "1224d314dcd86e84a31b0fb89221fcb4"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "872c02acacdf4308dadb0a259e67615a"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "b0dcd05de795171e6c303017ba1e3bfe"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "04e1a5999bfee4bf40a163a4239e71f1"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "d36310e0359e58bc7508e8c319b85f80"
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
    "revision": "391e74c234ba2b7e39c56b3c512b366d"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "3df1278d69e2ca1ab205c44e3e0c0d38"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "63fd8af11616f151a8349a83dab6f5c0"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "f43f2bed107a9061841da94f7e739cb7"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "1391938c6469afc86a71c537a2e834e5"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "97279d6969f84c8d4aebbd94af009139"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "f870b1f9c7722d589b08f3ce2e92dc8e"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "65f59e5fb5cf08d4a012b1ccba745b82"
  },
  {
    "url": "resources/books.html",
    "revision": "7ac33fc2784edadd1f254b0bf0ffff7b"
  },
  {
    "url": "resources/community.html",
    "revision": "6f73c1643a029fe5fb4eaaa50e2f3afa"
  },
  {
    "url": "resources/conferences.html",
    "revision": "3f5892fa9ed4fddc1355573208281ef9"
  },
  {
    "url": "resources/courses.html",
    "revision": "259737580d542bc0f8915a1e263a0fc6"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "c8c1a736c07054a6e10195b43b936479"
  },
  {
    "url": "resources/examples.html",
    "revision": "7312f450c0a9f25d55f4c8c7a2b1f57b"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "72ed3b7a7924c6fd41582b3de2437311"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "fc63e2c614a0e4cfe2c8590752757903"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "9f81f87600c96193bd453cfd2e29ebb1"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "ade43c418ca7e1a9825e73bcf61f7154"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "a10fb50144e8460e9f052cf0d040922e"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "77e11438d6926f37f8f2125b4f226245"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "95cb88f1a1305c05a6276e63ccd4eabc"
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
