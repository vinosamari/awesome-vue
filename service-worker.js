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
    "revision": "f30b3c02a5bea4aef834ee27bbb86c46"
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
    "url": "assets/js/13.945f59cd.js",
    "revision": "ef5fc299620d255eb1bb2e3cbed85236"
  },
  {
    "url": "assets/js/14.5b55466c.js",
    "revision": "cf85be77a57d51422286739aa6c0bd43"
  },
  {
    "url": "assets/js/15.f0577308.js",
    "revision": "bd220c3b881042561c56b86b2311403c"
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
    "url": "assets/js/19.7c409d12.js",
    "revision": "8690ea2f5d878c3642aba334e38f20ca"
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
    "url": "assets/js/30.5b8f4c5b.js",
    "revision": "d02dcc0b3d3ee22cbc36d996cb98da6b"
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
    "url": "assets/js/9.39fae4ce.js",
    "revision": "bb6f340c705f40126793338fc9501928"
  },
  {
    "url": "assets/js/app.ba1bb646.js",
    "revision": "1ebb1e5ae5a6f067b1aec8a1a6080385"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "30922c32a572b9d7b70343110adc44a4"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "55dc50006633b569b348791156ba5d9a"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "791d8ef2a6be395968e2ab1865789644"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "561ced4e5f6538a990c8ddc7d6915b8c"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "36991c4b1e00c63683655adbf9d729b2"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "fd4f83c36118dfdf83f5fe05b1053cf6"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "255ec0cedca4b68d8ba390b046b716d2"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "1ca2824354636e53d3fc614cfe907e92"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "0fa421f0652e729dd56ed7d65aa941bd"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "10986646be751e445da664007a3b1713"
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
    "revision": "0552952c2caf11ebc060f6396fd22a17"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "20add4ae734fdd471075565730f11c91"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "63a455c7ff2d66d8c397959f51c63692"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "0d4b631301d973a0cd3d7b48855a8b28"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "23b851f8a8ad7c910e3b075e38628fd8"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "68a062092662ce93d8eeac5fabc4b9b7"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "68da3a6aa78ecdb8b15de1bc1c1f9eb3"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "45c9aa6e8416206d5ca1d9ddcd7621e0"
  },
  {
    "url": "resources/books.html",
    "revision": "7b654d44087dba1ae4ddbf2b4ff087eb"
  },
  {
    "url": "resources/community.html",
    "revision": "fcbd419fa786d6e9e13d9fbe79f08606"
  },
  {
    "url": "resources/conferences.html",
    "revision": "417d49f9356ed438f8c2ed3b8f1087f8"
  },
  {
    "url": "resources/courses.html",
    "revision": "4c2c1ffe7918a8c1fd81b32b3715746f"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "64309be75f844e60f56077488f07bb8e"
  },
  {
    "url": "resources/examples.html",
    "revision": "0998b86beaf59992129a5933b38388d4"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "a4a869dcb5bdd1c4d3514820120d861a"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "d097441e49570faec36122cc9cb23d4e"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "2f1c05e9f2bbf566aa522c8fce4df15a"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "2480a75846d54b2c8e4cc9c7d7bbf175"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "0c7218f34922e5f6fd049bc78aec3502"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "a5c40075ac59a9eeb07ac8daa4da0909"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "11f6a8e9cf0a08dec3b8c91aa2cfc45a"
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
