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
    "revision": "895967b1561d1508c38fb20cc525854a"
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
    "url": "assets/js/13.9b2ccdd1.js",
    "revision": "a11faa7a02bd2d7abe5ce6cbc3de3e87"
  },
  {
    "url": "assets/js/14.af55f0f4.js",
    "revision": "676b5be05c26853d9e69ecd30415287a"
  },
  {
    "url": "assets/js/15.120d3c80.js",
    "revision": "858294e9adb1221681394be04d8c4d40"
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
    "url": "assets/js/36.269b8b22.js",
    "revision": "7808da3cac8a87c6bef801400c5bcad3"
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
    "url": "assets/js/9.e4359c66.js",
    "revision": "65096d62e2b10177def5eacc13769f95"
  },
  {
    "url": "assets/js/app.83c45580.js",
    "revision": "22f74a5bd6960d00431e90cfc61ba799"
  },
  {
    "url": "assets/js/vendors~docsearch.9bd2c564.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "17c04f78f605008cc6869715df43f77b"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "b945926af4c830c0cf7c16806d4d1059"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "70a731d84956c1b34cf2917a6fcc055e"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "23e095048ef8adf5a06e17d3a57d5e72"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "9ce977c7e56970d324b96466e2897d51"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "d3236515d5a867c5c6850c01f772e70e"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "ec6e32480e371f4914a8946a12d25bbb"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "4061c357f01adc58b23ecba45bb51394"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "8bea0a65aa9d4dfd3c13e672e0af4b61"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "c95f99a456ab5d066208e4940ffe4951"
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
    "revision": "2fc16d7d3b19bd518e0eb83213b8a9aa"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "4f7d22d86c1e6332740ad1d8266ce48f"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "95af413c4944372346a4cfc4c47651da"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "26b704ab827d68f41bac38fa7f3858c9"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "406e2c6a1b536916587b58f7ef0fae3d"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "e1150eaf4b567f27d8b388c6958fb557"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "829d878cac011825c6b4429ce6e76824"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "ab6d6005bbee06238252b6a8ab736c30"
  },
  {
    "url": "resources/books.html",
    "revision": "ed3fd01f84e4897b6afc3c9526ee0348"
  },
  {
    "url": "resources/community.html",
    "revision": "a92840ac8f387e3edac211937299f335"
  },
  {
    "url": "resources/conferences.html",
    "revision": "6365beafc9358f3abc86b3976ac5347b"
  },
  {
    "url": "resources/courses.html",
    "revision": "15aad0f28fc01b289971ee429bf96493"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "b4b2a87fd94853d339d390498b4ab97a"
  },
  {
    "url": "resources/examples.html",
    "revision": "b5d22a5c0dc271268aee7a309c446482"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "b92fe7c8af5c91faf1f2eadb32be4dd1"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "c51eff3891582a6eec8a15579c293e50"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "4ac6255757eaba7ecdc3f4e4e30a8c9c"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "d3046d22dec04972df53605b191c43fc"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "5bd65aeea16ee45997ac66481681ad21"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "6c9a4628b49b0629f6be3b69aed3e161"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "4af38933ca20e44bfdeb62fb27eeeb19"
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
