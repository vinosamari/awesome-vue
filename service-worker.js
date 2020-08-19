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
    "revision": "6734610aa502acca59113acef7a8762b"
  },
  {
    "url": "assets/css/0.styles.8285d57a.css",
    "revision": "45f98fafcf1e548c8ef06add2cd765c1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cd24251d.js",
    "revision": "77476eb0e7b1e371e3e139259d85eef0"
  },
  {
    "url": "assets/js/11.bbde8846.js",
    "revision": "381d31a7d84b8738ad6c2f53dc541fe2"
  },
  {
    "url": "assets/js/12.2342e8e7.js",
    "revision": "f73cf2ac5bcd9fd913cdc8aa1637b4d2"
  },
  {
    "url": "assets/js/13.709b2b15.js",
    "revision": "059f801df6812aace19bd707bd850b1c"
  },
  {
    "url": "assets/js/14.5b55466c.js",
    "revision": "cf85be77a57d51422286739aa6c0bd43"
  },
  {
    "url": "assets/js/15.0725a9ed.js",
    "revision": "700d7acd91cdb152202a9890ec36b12f"
  },
  {
    "url": "assets/js/16.b0e8da49.js",
    "revision": "4de01d2a1c2132bc1dd0629ec4c9d15e"
  },
  {
    "url": "assets/js/17.54f35cf8.js",
    "revision": "7d6acf544da3729c617ae698e099216c"
  },
  {
    "url": "assets/js/18.4d6c09d9.js",
    "revision": "e53da276511d4ae3de982278318683eb"
  },
  {
    "url": "assets/js/19.a1d07ec5.js",
    "revision": "222156e796e37eddf80692b51147a8f2"
  },
  {
    "url": "assets/js/20.5e3b2b3a.js",
    "revision": "0572051f7efe32aaab1497770c1050c5"
  },
  {
    "url": "assets/js/21.9e587444.js",
    "revision": "13be60ade15647087ca5f0bd592e8d9f"
  },
  {
    "url": "assets/js/22.73ba2365.js",
    "revision": "81848eec5c57e78d5d73533d5f9be07a"
  },
  {
    "url": "assets/js/23.af7d6148.js",
    "revision": "95fbc9481d424c18dbc8417f7ff59743"
  },
  {
    "url": "assets/js/24.16f3805e.js",
    "revision": "a50c99c98ab258102ff9cbb9e2a29bff"
  },
  {
    "url": "assets/js/25.8fa19085.js",
    "revision": "f2ab0a0be371574d2f6facbebf2d30d7"
  },
  {
    "url": "assets/js/26.3b22d619.js",
    "revision": "f8556d1387032890da1fec05d20564da"
  },
  {
    "url": "assets/js/27.f1a32bc2.js",
    "revision": "6ecdd2293ffa0681167eb83370daa8cf"
  },
  {
    "url": "assets/js/28.1262166d.js",
    "revision": "a4466874bf796c8b1abe7dbc31dd8c3c"
  },
  {
    "url": "assets/js/29.59b32718.js",
    "revision": "470639f16242cb023fa40cff250fedce"
  },
  {
    "url": "assets/js/3.2d940320.js",
    "revision": "e79fbcd20d0db5bbb9298510483b00a2"
  },
  {
    "url": "assets/js/30.a073c13e.js",
    "revision": "e70316920e9dce05ba3dd3243e21e370"
  },
  {
    "url": "assets/js/31.32ec69da.js",
    "revision": "42d4cf8213d5145a9e6e74caecde4611"
  },
  {
    "url": "assets/js/32.ccdd9a7f.js",
    "revision": "edf8c1df15bb89435473c10d2ade8894"
  },
  {
    "url": "assets/js/33.9f1c8374.js",
    "revision": "fc6370c0ecba5675c74920a6d9e7aca6"
  },
  {
    "url": "assets/js/34.05a7beb9.js",
    "revision": "5fab9650a5daf1a4c6dc96675231830e"
  },
  {
    "url": "assets/js/35.58c6fe65.js",
    "revision": "3a087a67c6d137187ceaa5efc3e30f54"
  },
  {
    "url": "assets/js/36.816278ee.js",
    "revision": "7ad90d2549949012c7995cc10531420e"
  },
  {
    "url": "assets/js/37.e2e819e1.js",
    "revision": "0e1a4ce7d57e0efa914fdbdfc8473731"
  },
  {
    "url": "assets/js/38.269e883a.js",
    "revision": "9b326e773a8615b65d7dad3e6b072a33"
  },
  {
    "url": "assets/js/4.71403271.js",
    "revision": "97c86b8cbb498634e80176b85825f76f"
  },
  {
    "url": "assets/js/5.5c135d5e.js",
    "revision": "055a4d6d5d68a436f05842f4cffbdd37"
  },
  {
    "url": "assets/js/6.b4674824.js",
    "revision": "87f7cf8895d76371e075d90292b1abe1"
  },
  {
    "url": "assets/js/7.f221329a.js",
    "revision": "2f338c8a3347232715c2316ec66c44c9"
  },
  {
    "url": "assets/js/8.c44141c4.js",
    "revision": "75dcfdf6f15f57378aac1feb460306c1"
  },
  {
    "url": "assets/js/9.3f62ea2f.js",
    "revision": "3c82b4b7d3041de6b781a335ec505138"
  },
  {
    "url": "assets/js/app.5c8b59c1.js",
    "revision": "dd17ffa0ae49a52649b4abf526dda2ed"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "413cf1fafcad777f3e1738cdfe0107b7"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "8db8752b9402c941ac269f8fe9d0f6d2"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "b6bc3e5faf68f387a5cd1066e8f268d1"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "730df6f34995efcf37eecb2696823fa6"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "1b30073efd2d1fa0df8f8ae8c89de165"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "339b53ab35d4da9a68fbb406425e2a10"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "dc5caa95d66a0f0adcd639a1c5723797"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "b84c864b5fbbff112482886bc55531a8"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "fad606e25c12e5ea0f3449525effb1d6"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "b4617a2e41f6f91415041fd46f9ab83b"
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
    "revision": "74291acc972832f78dabef02970f1873"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "024a723f3ee749de06dce9d297107ad0"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "a4004cb446364d68b6a886469fe7f02f"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "d72e9c9c0d9dd3f20286461c9d61b040"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "c329602b9989094ee65a83d50666a443"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "cef52f587262cc031088eee5e86633e8"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "24b7b29a2a4d8aad56c0f2ded69eb357"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "d43717b5f9105db48d0d3fc005528523"
  },
  {
    "url": "resources/books.html",
    "revision": "da62e7ef2eb3f95d39317e465bfc4ee5"
  },
  {
    "url": "resources/community.html",
    "revision": "c3f72778c46c27176b391838e675ccae"
  },
  {
    "url": "resources/conferences.html",
    "revision": "212aad87e5a8bd12c60b20b23599bbc3"
  },
  {
    "url": "resources/courses.html",
    "revision": "eaa1fba924a758ceb522fa9ddebf51a9"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "a79be2424d904da6ba0a8a2827b96ce8"
  },
  {
    "url": "resources/examples.html",
    "revision": "a5218f2a0c56d5667c2b38f97d336eb4"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "c5b8e273fc6f0c54265b2a84e571a08e"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "84578cf3d35aa4be819590ec03a3ac70"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "f45b31c1b23581047aa8efae7d2ddab9"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "fc4fd1c8a2bb4d05230691c182bb6b1d"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "a67098ad0b959fa4723ac9ae9cbd6453"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "09d8370efd6e5b8bde23e28239d88071"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "8ff0a07ace154e2330751e62cccdf4a9"
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
