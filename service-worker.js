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
    "revision": "ae28b9c1402a85cde7985138af43d556"
  },
  {
    "url": "assets/css/0.styles.faa55993.css",
    "revision": "135c90cff3040a651b1774cf15c05188"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0697bb0e.js",
    "revision": "77476eb0e7b1e371e3e139259d85eef0"
  },
  {
    "url": "assets/js/11.bff27ce7.js",
    "revision": "381d31a7d84b8738ad6c2f53dc541fe2"
  },
  {
    "url": "assets/js/12.f75be051.js",
    "revision": "5704ca0cae54e143aab021d95bc347e2"
  },
  {
    "url": "assets/js/13.61acff87.js",
    "revision": "f7d8c5748ac2585b28ebd388ec853921"
  },
  {
    "url": "assets/js/14.2c34dbf1.js",
    "revision": "cf85be77a57d51422286739aa6c0bd43"
  },
  {
    "url": "assets/js/15.aae20716.js",
    "revision": "467ee2b3710f725838abf9d406d93e6d"
  },
  {
    "url": "assets/js/16.2638bdc6.js",
    "revision": "7a5d203fa238cf0aaf6d9c2f0981b36f"
  },
  {
    "url": "assets/js/17.7419e4a0.js",
    "revision": "7d6acf544da3729c617ae698e099216c"
  },
  {
    "url": "assets/js/18.6b2b7329.js",
    "revision": "e53da276511d4ae3de982278318683eb"
  },
  {
    "url": "assets/js/19.4abde098.js",
    "revision": "a4e79897684a53e473570c58a4ba9fcb"
  },
  {
    "url": "assets/js/20.b008f0f9.js",
    "revision": "5b07e3ce272ff85b3cbca77c0ba6a107"
  },
  {
    "url": "assets/js/21.e4c68eef.js",
    "revision": "13be60ade15647087ca5f0bd592e8d9f"
  },
  {
    "url": "assets/js/22.42e4efa8.js",
    "revision": "81848eec5c57e78d5d73533d5f9be07a"
  },
  {
    "url": "assets/js/23.8d68e77b.js",
    "revision": "cc9df05d56b5d584fab13683c22d38c0"
  },
  {
    "url": "assets/js/24.c09453b4.js",
    "revision": "a50c99c98ab258102ff9cbb9e2a29bff"
  },
  {
    "url": "assets/js/25.74d296f1.js",
    "revision": "f2ab0a0be371574d2f6facbebf2d30d7"
  },
  {
    "url": "assets/js/26.1de66769.js",
    "revision": "f8556d1387032890da1fec05d20564da"
  },
  {
    "url": "assets/js/27.7fc57dad.js",
    "revision": "6ecdd2293ffa0681167eb83370daa8cf"
  },
  {
    "url": "assets/js/28.db4cff29.js",
    "revision": "a4466874bf796c8b1abe7dbc31dd8c3c"
  },
  {
    "url": "assets/js/29.209e5d3a.js",
    "revision": "470639f16242cb023fa40cff250fedce"
  },
  {
    "url": "assets/js/3.71767182.js",
    "revision": "42bf27c478e73a1f4d1365adb5937f5c"
  },
  {
    "url": "assets/js/30.ca8c2494.js",
    "revision": "7ba0f93218280270ac6813c7dfa4afba"
  },
  {
    "url": "assets/js/31.b12918b7.js",
    "revision": "3b55d635109a71e631c985e303631b18"
  },
  {
    "url": "assets/js/32.0f2f394d.js",
    "revision": "edf8c1df15bb89435473c10d2ade8894"
  },
  {
    "url": "assets/js/33.51e41ca3.js",
    "revision": "fc6370c0ecba5675c74920a6d9e7aca6"
  },
  {
    "url": "assets/js/34.23de4028.js",
    "revision": "5fab9650a5daf1a4c6dc96675231830e"
  },
  {
    "url": "assets/js/35.a0b1f594.js",
    "revision": "325d684fdb17210940f579a06f05f8cf"
  },
  {
    "url": "assets/js/36.05e84fb6.js",
    "revision": "41b72de23d17b7cb4c67f487f35960f5"
  },
  {
    "url": "assets/js/37.b29fa909.js",
    "revision": "0e1a4ce7d57e0efa914fdbdfc8473731"
  },
  {
    "url": "assets/js/38.269e883a.js",
    "revision": "9b326e773a8615b65d7dad3e6b072a33"
  },
  {
    "url": "assets/js/4.aefcdd70.js",
    "revision": "97c86b8cbb498634e80176b85825f76f"
  },
  {
    "url": "assets/js/5.5c135d5e.js",
    "revision": "055a4d6d5d68a436f05842f4cffbdd37"
  },
  {
    "url": "assets/js/6.d8b56762.js",
    "revision": "87f7cf8895d76371e075d90292b1abe1"
  },
  {
    "url": "assets/js/7.98f4d58e.js",
    "revision": "6ff48b173fe48d74f83d91ddae9ed94b"
  },
  {
    "url": "assets/js/8.ddb03887.js",
    "revision": "230a57cb1d99de382ef10780d5c847e0"
  },
  {
    "url": "assets/js/9.2fabded0.js",
    "revision": "2f773fe0cf8cd2d2a773f17d84a7aa88"
  },
  {
    "url": "assets/js/app.ab3ae0e2.js",
    "revision": "fdb6422490570c2856e136dc07a2f4fb"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "3341fa8ae28eda6afec01d3974c3b13d"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "4cfad9540078ad000f31f8f528518618"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "c27b5b5275783067a68e8125d879704a"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "aff335416110c022c5a0adc9b85f132b"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "47db6a5908fe05ee0586ae38550e7477"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "62338d6877dc1b8e15e779a526675c17"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "d26296b6b6cf5cffcebc9682bdc66cbc"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "6d00dcf232910a5c22cab6c04c9f1689"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "b147f757ce33c4343e82d917bc39cc8a"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "80581112350045e58584c0d587b59c06"
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
    "revision": "3112391718acd9ae68236fd649c29ca0"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "fa3f02a7ae9bded6309c0324566bfad4"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "f5c1ce8839a03cee4f0d4c83c44bcf16"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "98d519e2ee62622959aa3985715a2b15"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "99a286ba032ef487e7516c49f5fe35db"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "bfca55bd0422da853eb4716a225a728a"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "e6ff212671b7217c4559ffdad138cd57"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "33cc4afa13ecbf32863f3d101ebd943c"
  },
  {
    "url": "resources/books.html",
    "revision": "6f1cdd3ff74c68ac9a2a669892a28f40"
  },
  {
    "url": "resources/community.html",
    "revision": "279c9de4e454e62af220166335d61f80"
  },
  {
    "url": "resources/conferences.html",
    "revision": "1a2ce1eafb30e1eb132b1ed25d08076e"
  },
  {
    "url": "resources/courses.html",
    "revision": "9f6ee8dd75f261f902f98361856f9fff"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "9c125fc70eaee7b51fd07cd12808066f"
  },
  {
    "url": "resources/examples.html",
    "revision": "9ada65d7258fd0f1198b081d78cb163a"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "e3d60fc71d06465efe3920d307861a73"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "1365b1d3f5d32c35551b682117016427"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "9a2e03f3f1fa66dd4c421c52485ab714"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "2d22103e8c1bc1dd0cf12a3ac8dbc272"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "a2e2c174eb9acd36c7bdf318af235ae4"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "93430893464d53517e041e670807ef6a"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "85990983066ec6bfb03a37e9c1becaa4"
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
