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
    "revision": "3a45e576d8887ed77330cab39871f541"
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
    "url": "assets/js/13.2a4e8d6d.js",
    "revision": "57c36d5f080364dcc931d9fcf7d287b9"
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
    "url": "assets/js/19.1c9aff56.js",
    "revision": "07dba2a3bbec2f3a6ae4062fccf44d7c"
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
    "url": "assets/js/30.dabbc7e9.js",
    "revision": "05c6508d097d055c623dbc31f85ff1fd"
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
    "url": "assets/js/app.61d56f8b.js",
    "revision": "a0ba625330fcb403ce3a0a3953c8f5b2"
  },
  {
    "url": "assets/js/vendors~docsearch.9bd2c564.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "432c9c62ec51a32dbb693a0b8a44876e"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "be9931ee4f4108dee9f7257a5f5746ed"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "d49e6163a27abbf6d21e4dc8fe5ba38c"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "80af2708c46093c405be8b67748e34c4"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "de6b86c120f569b8e1a37f72d3b637e0"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "20709393fc04def8172a16412e62d213"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "9109008928b5345bb6dc39b0510ff64b"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "5d3878641fc1a570e113b19000b739b7"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "8cb63461fb5946e3aa4853de4de5e727"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "35f7249b6dc0998d9447058205e539a0"
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
    "revision": "66e34f5902650b5f69782266f47b46fa"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "d726478928c55971cbabaf82ae78d1b9"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "aef0d80f7159e83a95800c364fa059f5"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "fa928b6554318646bda814ea79592823"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "d731cde1c05b1936574b4ee8af62a64a"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "df79823083ec132b8b063efcf8f1df60"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "0354647effe8bf138b8526387e0915ca"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "551797f7cf1211bcc892d52ee5fa0c3b"
  },
  {
    "url": "resources/books.html",
    "revision": "62bcd82003f91bc3b3407365bf650f57"
  },
  {
    "url": "resources/community.html",
    "revision": "b943e91df3cb8d0970eee18d1f39a8f2"
  },
  {
    "url": "resources/conferences.html",
    "revision": "df911ffa0c7c4ce91f53fcbf2cbc294f"
  },
  {
    "url": "resources/courses.html",
    "revision": "6a031460241dc5c11a1429b26e2e7bd8"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "8bd2ed79712eb8f0ffdfec29d70efbb7"
  },
  {
    "url": "resources/examples.html",
    "revision": "f2e1735bdea176be8c6e075809a8aba8"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "441f0fea7c0bbed06fb13e40fc4b3f44"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "e264b1c9a2461a3afe4e736929136477"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "6eda1528c5e1a0d076e5ae756316c543"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "148956e6cc62b3ab8f00e6757fc67e22"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "d2c8ac9aa890d9502a5335e8dbc72ade"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "c1a351b385e59cab1b8292a6944e0295"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "448653b26dd08704177ef7101fcc977c"
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
