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
    "revision": "8d15f13413c23ebc66bc19dd0b6b9b94"
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
    "url": "assets/js/app.ba61cc1b.js",
    "revision": "32ca685f35484f4e5ff294930abe213a"
  },
  {
    "url": "assets/js/vendors~docsearch.9bd2c564.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "9df36dcf3656bf1b3b78c9efbdfd0bd4"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "acfbc211c4de2b50cb234b52d94c5538"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "f8631e6829b57e3c5f1a131907e633a9"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "4a8228556cca41bdac55822222aa26a5"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "1e16a2c3e61c68aaaa5823b312da38aa"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "fe81bc007546b1d94ef21b5f8dccdc9e"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "745ed5077494968bc997becedee4e5ed"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "c9df42d6e61a269a4c666e5a98d362a3"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "16a96876ec341d40206d8ab0f7de6521"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "cf450ac1bcc791e3665b7f058d4dfac6"
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
    "revision": "b3c082a75ad4ce28c7fb0f8549aa4d38"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "20f9f4b4318fb1408aee4606bb709c47"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "875639627a25b41113d31ea6faf70aaa"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "c4efbfe3eeab05aa0a83429f76ad3e59"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "0b3cad0f6eb51a0e0edfa1d10b205eff"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "6d6e30647fe8496bb574bdffbaea7c12"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "98272ce00e8333148ff207ec92159aca"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "16781f6e87c5cd3d6cbd4930cbdb2db6"
  },
  {
    "url": "resources/books.html",
    "revision": "99f51169a5120f92380a921fdb1b53b5"
  },
  {
    "url": "resources/community.html",
    "revision": "5c5b6c750e4bc2f1e95e70e4c113ce0c"
  },
  {
    "url": "resources/conferences.html",
    "revision": "6fd028669071ccbbd3f957bf9082b872"
  },
  {
    "url": "resources/courses.html",
    "revision": "89839df9c3fc479fef0b330900cb97c9"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "4a7b58609849527ea065238372ee2872"
  },
  {
    "url": "resources/examples.html",
    "revision": "2f105e2c7760e4f95e6998be04bf479c"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "4ab444a2a907dc1dc567f70c07dc2880"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "f65c928e94c343afadadf6a827edda35"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "f3708764a5e52113fde870b8ca37490e"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "5d542003d15b95c816d1eac1f0701645"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "784a14a7f9f3b151bc2b6d7bc60f7c36"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "7161b63f66e2aaed2225c0f9b8a175d3"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "24500ce91f3a8d24d4cb72aab6fa1470"
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
