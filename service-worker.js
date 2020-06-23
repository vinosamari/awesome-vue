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
    "revision": "a96415645f2874b956cf9e3735d3b054"
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
    "url": "assets/js/13.541e868c.js",
    "revision": "30263f8e32d4b570233a7f990127827d"
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
    "url": "assets/js/23.99da4b76.js",
    "revision": "ee322d75ee1610da7e06f09a9950edbd"
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
    "url": "assets/js/8.2d338014.js",
    "revision": "551c3ad0a22dc2d3c67d4af81179ca56"
  },
  {
    "url": "assets/js/9.70647bdb.js",
    "revision": "b3334324963ed127733a211ad29d91bb"
  },
  {
    "url": "assets/js/app.dfb77abd.js",
    "revision": "ce12c7bf3848e3ab1c746b7058dee272"
  },
  {
    "url": "assets/js/vendors~docsearch.9bd2c564.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "9266bbc7f523b5b254b88e836d959633"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "15508745ba6014152c229d2be41eb765"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "41f6735e03edd5922acdd94ca9c6baf7"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "014f55b0a82636fc54ebf741c42eeae3"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "c9b8fb94b2f45795300a94abec89b7f2"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "2fb4c461a0e5e017827f2b6ac5912820"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "854d53e3ed5eb5f8f5e91771675f3743"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "66b5fe754cf5470fb8331d2c85fad28e"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "6ceea7d6afea39aad8cce306d0fa73ed"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "3b29da36ebd4b7eb64caac58f67df61b"
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
    "revision": "ae541b852bba0dc3b373b68ac2aefd91"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "1bda34b0c4d6e819639a73496dced628"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "627f0b972bd293e5472e7f47435b2eb8"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "e3e8e697a251645d1d8986a039a914ff"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "8109d95eb27aaf51c7fdae5a95e90313"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "5d0d77d96fe79e7379c23c78a86c2d94"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "97bc2e1227af632931b0ce50ba8ad271"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "522d1a6ab72ed7c6c22c85933b47e5f7"
  },
  {
    "url": "resources/books.html",
    "revision": "ff5e26da4f7a60f6264c75df7f552bb3"
  },
  {
    "url": "resources/community.html",
    "revision": "9f3a30da3f5bbff63bed13887107ccc7"
  },
  {
    "url": "resources/conferences.html",
    "revision": "457a98b32ef866620eb65135b0dd65d2"
  },
  {
    "url": "resources/courses.html",
    "revision": "cbb1a92ae7eb8449f3acd644d38d629b"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "68c05ce97f4902c9352b9f859bf14cc7"
  },
  {
    "url": "resources/examples.html",
    "revision": "0f7a14bd5239e0f4d7cb1c0600f3c048"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "2c5e1e1ac231239a92e588087e005532"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "2d77dbb5b09441f9028589e640b1521e"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "f694af715f6b11387cd12afa601ce106"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "9212d46915c5a9b9f4b7ca4fd4996053"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "8e833a03e8746a1253f66498d8c1a939"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "3cdf185ffc390b7bfb2d9f996b67f788"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "6b2fc86eeef440368df7696f1b8d5f10"
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
