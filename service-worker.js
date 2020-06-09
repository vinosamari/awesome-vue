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
    "revision": "99c77f065025dcc287d7cbbf3ae494b6"
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
    "url": "assets/js/13.d9ad3321.js",
    "revision": "a89f71a0a6347832171d581a3d3629fd"
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
    "url": "assets/js/19.8f51e067.js",
    "revision": "9cf304479d4ab691ed279b285dcc7bc9"
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
    "url": "assets/js/app.0eb08516.js",
    "revision": "de33152b317ce0f275a9f8c16fdba406"
  },
  {
    "url": "assets/js/vendors~docsearch.9bd2c564.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "040c095fccd82dbde6de2f6fbfbe8155"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "7294137f862df8dd278d5089da29feb6"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "3b7096a492ed3834ee7f97bdedbc346f"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "5062951e9c41ff5794acfb0e9c026cb7"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "92bf06e6b59ed588b56ddd21957b5f44"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "34dd5961e652929cd237fdef1976080f"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "70538ae6927ca4fe9d4c9f42d348565c"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "f8423eeca8a3b3e4bab9fa070bb943a9"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "82945121d2be2efdf4de9aeec235398e"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "56de047ab662becfe940c586086e8556"
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
    "revision": "913c58dbdf15eb1fa2b627bc54b1b3cc"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "f3f2c569b73582ef594aedad9b21b68d"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "2f0625d5b0a3826b215fd1db86390f17"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "402cc1edc1a2a5f365479e3d324cc1e8"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "d9f63c8cf9f9b6e0399a9775509b79dd"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "b1ca32867e4dbed29501a091f28301dc"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "c0871290da7398e01d9f1877d0a49085"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "f22d3d4cda459900731428c883898ce8"
  },
  {
    "url": "resources/books.html",
    "revision": "e185d68f8bff756d5040f5877cb086f6"
  },
  {
    "url": "resources/community.html",
    "revision": "d48a02efdff69d917dc022ace7d36301"
  },
  {
    "url": "resources/conferences.html",
    "revision": "2e2133bc69f0a36fb9b1931ca20b6da7"
  },
  {
    "url": "resources/courses.html",
    "revision": "f8c3a0ba1077e4960f629adb73d1e4d4"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "2c4e7996cb7d885d77f5261f44e0b8b7"
  },
  {
    "url": "resources/examples.html",
    "revision": "33d336f2ad92b889f8457e973290f43c"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "dea8a9b48d01856f12d5656eae903cfc"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "ecb17afa841e95313d601def3713dbd0"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "0e39dbf86947e52b6d8dd0a764687f7b"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "af9a35551447c0f0de105ef59ca8e5d8"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "be51de218f71a8732ddafbbf345a0de1"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "4d67329d4789b941f5a2d7e88a8e2775"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "3140345bcfc0139576e22a6247063a48"
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
