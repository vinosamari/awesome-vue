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
    "revision": "8faa9c3aca7a196d1af33f6332fcf229"
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
    "url": "assets/js/14.6852b6a4.js",
    "revision": "a52b1b018efd2141b8cc9356591eab2a"
  },
  {
    "url": "assets/js/15.71574646.js",
    "revision": "5c8398c752ba4f68fcba9b1ea11e1ae5"
  },
  {
    "url": "assets/js/16.0bbd5487.js",
    "revision": "294588a18b4d1af81f98a4655e82ce6d"
  },
  {
    "url": "assets/js/17.0ad00126.js",
    "revision": "67e45af285cd348aa73bacedc5ee5e29"
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
    "url": "assets/js/36.991d221c.js",
    "revision": "e4aeb5883e5ed6332f34227dafa54f27"
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
    "url": "assets/js/app.3b79327d.js",
    "revision": "e3004417f9c1ebbaef64a15d31213e43"
  },
  {
    "url": "assets/js/vendors~docsearch.7ff8aade.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "e7a12969a4e3d6d9ee61192178bc842a"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "cabe79b139b8f101d32bd3a27a4d28a2"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "334b330769b917cfff63a6344ea45953"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "75d7cafec1ef4637de77183b062790b7"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "6410d8f3b7fb88989566fafb5db116bf"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "9a12ce169d23e0b6a7970e6d281a4a5e"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "a45f7a8a0b5f6c8b0c632a2521858716"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "d3d23c9b78397141869b47521ba4b5ac"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "695da249d9fb1d9986d483bd5accbf09"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "1e8174c21f7f646ed6e799944a077a8e"
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
    "revision": "adb204f810aca229ffba80f971f8d4a6"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "ba784a035e0a8474e42e14aaf84d20d2"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "36eaf5f32df29a319c19c8b873b1a2d2"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "a00d327849c907c666ee919696aac50d"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "be0787c4bbb229d9753eea7fcfd30d4b"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "1749f3fd77af522c0c560a7442f43ae5"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "0ebfcca35caa28fe395f4a2721ad7561"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "03710ed1fd7c6c958a0138a2f91af33a"
  },
  {
    "url": "resources/books.html",
    "revision": "a4ee5fea1cfac00d8124205302ab1e06"
  },
  {
    "url": "resources/community.html",
    "revision": "3a3c1f95b5ec8f6e0b643c273571757f"
  },
  {
    "url": "resources/conferences.html",
    "revision": "1699a3189035902605187d1a3e8e6fef"
  },
  {
    "url": "resources/courses.html",
    "revision": "ba97baf63aa6b4e45c594f4a2d3fc43f"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "1c6ee1aac58f135fa8a15d8deb2efd7a"
  },
  {
    "url": "resources/examples.html",
    "revision": "932ebce59c26b42ccb6de83f379715a7"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "ffcda4360f9c6349bd3812d8a9a10ccf"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "08b2991349fbf12cc26d9c56495af31d"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "40a9774bc5d5ffc584b732922c727b38"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "298cacdc47df284d2a4b63b82d453989"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "bef0df8a92e18fbb94fe0f5338d588f9"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "89c98ef058447b37c323b2d303d05b1f"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "8108cc7f040b3e70015267c30ec6186f"
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
