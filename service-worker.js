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
    "revision": "bdb2434293b26a1a37993b0435caaae7"
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
    "url": "assets/js/27.9c87875f.js",
    "revision": "56dcb3ec9dc938b6e113ab831058408e"
  },
  {
    "url": "assets/js/28.a37bd21a.js",
    "revision": "5ab8d3d743ebe3bf5c21968860eaae76"
  },
  {
    "url": "assets/js/29.3ea09148.js",
    "revision": "9beeb569c6535bd2c85907f61825541c"
  },
  {
    "url": "assets/js/3.8aa232f8.js",
    "revision": "f0ae3476b63d06509737e47f70be51fd"
  },
  {
    "url": "assets/js/30.7a89b027.js",
    "revision": "7fb4ecabaa259d7802b3d891fffa5f8e"
  },
  {
    "url": "assets/js/31.2e294c8e.js",
    "revision": "f5b70c7b841b7461f83bf86d091f95c0"
  },
  {
    "url": "assets/js/32.4f71cb37.js",
    "revision": "faf5955fd189a86c20e1614445caae1c"
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
    "url": "assets/js/36.f0661c14.js",
    "revision": "72b435782c9a301020aa2526f09a969a"
  },
  {
    "url": "assets/js/37.c8b8b8be.js",
    "revision": "d95f944c83304df6b13928f22298a248"
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
    "url": "assets/js/app.2a57e7ff.js",
    "revision": "a0683f2a1aef1c2164dfc22f3426b8c5"
  },
  {
    "url": "assets/js/vendors~docsearch.9bd2c564.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "465a0fe33862bc6e76873399de980ec1"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "506e2abb298a9ffb3f132f3a8d5a86a2"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "cd6a021149279298ec1262c7feae8272"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "0b58f0ded8a70eb604cdf8830d643b4f"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "948711e3a2d461103b96d82eb35af902"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "96a6591976f19691f4261837170775fd"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "c0330ceb256b0a146e9870022d75dce7"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "40aa11e09bcdd5fc8ea9e07e0a8e1c5e"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "547a3cdf21723b49b6f6da95aac4fe40"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "84b31df06f72452be2fe888e0ed2c694"
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
    "revision": "3e3a0ad6c7d75e5a571e162b35613859"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "cc916e02aa4529091fceef8b2459abe6"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "b86146ff1fadd4caa868d34b50d329dd"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "725811301ded2ba8215b2de3490d3195"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "410f6b00391b61ab40ea7dd061cd0b01"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "629fe67bccb3588873685bb26d96b70f"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "10e923f6e3103284d27199ef9d16ac47"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "cd2db3ef64c1f76b66fc1b1963ddf2ee"
  },
  {
    "url": "resources/books.html",
    "revision": "f3575a3e93edbd3644cdcaf1359a8903"
  },
  {
    "url": "resources/community.html",
    "revision": "40c9b78946769ed577dbb298bd998188"
  },
  {
    "url": "resources/conferences.html",
    "revision": "ddb8eed2c18594b735671d438042bc7a"
  },
  {
    "url": "resources/courses.html",
    "revision": "467b22a890fd66999e17e9e2ac5a9720"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "962a29f0a3406ba17dfc1ce4d3cca510"
  },
  {
    "url": "resources/examples.html",
    "revision": "fc4a02a766402767083717f2c0a6c770"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "d5d4396b8a57b35c1a1c302189b147f8"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "dc059b025efc5df4cb918d2f0969c246"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "158d549da2d0a4f698db5eec9f7777be"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "d523a683d37881268b48a21b4fa29753"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "ff4c65cb6453b38cd52c8ebc46233a57"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "481b65bc60463c51cdde7457aaaeb4ee"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "a5d68ccd62511ffe4cc46dcc1305ca1c"
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
