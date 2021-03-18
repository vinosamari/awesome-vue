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
    "revision": "095036dee89862bc5c08be31893f9a51"
  },
  {
    "url": "assets/css/0.styles.c667ae91.css",
    "revision": "397c5036c5d791deb513cfb431edba00"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.984c481d.js",
    "revision": "374233626dd7530f56c91edbb4065361"
  },
  {
    "url": "assets/js/11.6a89b43d.js",
    "revision": "a789edf24615d4e5bb279274cacb9967"
  },
  {
    "url": "assets/js/12.bce1a4fa.js",
    "revision": "043cb260e51dfd16edbb9a9e0e7cea2c"
  },
  {
    "url": "assets/js/13.f4ff75c0.js",
    "revision": "abc811fbd0ad195c9f3b31f18084a8a6"
  },
  {
    "url": "assets/js/14.6f807feb.js",
    "revision": "6d2b103c231b878ebc2a74f402956ba9"
  },
  {
    "url": "assets/js/15.d7fe958f.js",
    "revision": "f38e5f34709c42b4bba2358767ef9331"
  },
  {
    "url": "assets/js/16.f7ac9b10.js",
    "revision": "4e04220d074160a8f80ca4d4f6c7aade"
  },
  {
    "url": "assets/js/17.861ea17e.js",
    "revision": "c83c348c90987e2042b40ceed68d3e5b"
  },
  {
    "url": "assets/js/18.f7761727.js",
    "revision": "35fd22820a1faafcad358a619553362d"
  },
  {
    "url": "assets/js/19.1c581542.js",
    "revision": "cceca1ffd4e5715a309dd638b5e68137"
  },
  {
    "url": "assets/js/20.5f00bcd1.js",
    "revision": "3f2e6d71217e2ff835215e8f819a23ec"
  },
  {
    "url": "assets/js/21.d670ba65.js",
    "revision": "6604aafeb78ee32a3f874c8d927cf09c"
  },
  {
    "url": "assets/js/22.29b876c5.js",
    "revision": "a94ec4b98c988802c0ebec7708e0afff"
  },
  {
    "url": "assets/js/23.b5d0ca69.js",
    "revision": "d61c06154642178c2fc3ae4e02dbfd7f"
  },
  {
    "url": "assets/js/24.71c9eee6.js",
    "revision": "d55cb1a42ad6b08b170a9a468001852d"
  },
  {
    "url": "assets/js/25.8ffddad0.js",
    "revision": "7731d477934e06aa026f0480b48b5bb2"
  },
  {
    "url": "assets/js/26.76e7f23b.js",
    "revision": "72f6c084fdc18f493458b5f43155647a"
  },
  {
    "url": "assets/js/27.e426735d.js",
    "revision": "85b15908092a9de1321369de13a665ab"
  },
  {
    "url": "assets/js/28.1897b791.js",
    "revision": "3ac167a5176421b97d0551d2b74e0c17"
  },
  {
    "url": "assets/js/29.bc471523.js",
    "revision": "5ff8d6cda9ad26db065c1424fbbe5221"
  },
  {
    "url": "assets/js/3.769ec940.js",
    "revision": "0a584a186dbc418060998bd53d3d6592"
  },
  {
    "url": "assets/js/30.1503d74a.js",
    "revision": "50eb9ed6e987273a433134a9d4eabf4d"
  },
  {
    "url": "assets/js/31.a2fa8b22.js",
    "revision": "566fb6f29de657169cf323b288f35f7e"
  },
  {
    "url": "assets/js/32.87c035c6.js",
    "revision": "848417aa1bbd9cdc35506cf82efb68b0"
  },
  {
    "url": "assets/js/33.0cccabf6.js",
    "revision": "1f3f4d20bf1e0e958ab21a31deda2741"
  },
  {
    "url": "assets/js/34.c81409da.js",
    "revision": "66988bfecfab21e8346a3817064da9aa"
  },
  {
    "url": "assets/js/35.eb69e658.js",
    "revision": "0627908e669b95b74fdaed55701e0ac8"
  },
  {
    "url": "assets/js/36.bde460b1.js",
    "revision": "2e042626ad1856aa12e82958cb823199"
  },
  {
    "url": "assets/js/37.08f1899c.js",
    "revision": "21b7d272cf4a77cc6cdb32a1ae650492"
  },
  {
    "url": "assets/js/38.b1786da9.js",
    "revision": "4ba1d9466c97bfa26114afbe12eb7657"
  },
  {
    "url": "assets/js/39.00ec5b90.js",
    "revision": "5625f7356576f467cf65e54b800bc12a"
  },
  {
    "url": "assets/js/4.64e8f72b.js",
    "revision": "fe03dc4c98f26bedc571549b97a639fe"
  },
  {
    "url": "assets/js/40.c7cbba88.js",
    "revision": "53e62a1b4987c045c1a5569de48d6064"
  },
  {
    "url": "assets/js/5.a38c5fc8.js",
    "revision": "0e5b483c06e09913a19bb3962d19a1e5"
  },
  {
    "url": "assets/js/6.d2b71544.js",
    "revision": "c5bafdbc29898568014c39ebfc78d0a1"
  },
  {
    "url": "assets/js/7.8139f0ce.js",
    "revision": "bbb2feaa7d0937f80a930f3a16df606c"
  },
  {
    "url": "assets/js/8.dbbba277.js",
    "revision": "eadd3d0c984b4dca965079f6bfea2349"
  },
  {
    "url": "assets/js/9.a31ed6ac.js",
    "revision": "544883e1ee9ab4fc93f6d0c3b8da6ee0"
  },
  {
    "url": "assets/js/app.c4d20bf0.js",
    "revision": "c8fdc0d88dd06acce69f32e2853bb7d6"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "eb4afcf083945ce52193bd109a726644"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "1aad9af42f529ab89a839844806f47e4"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "d87ed77b8c405766dc98e3df273bcfbc"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "82c9d0c136daff81bb6ac6d6ad6f6769"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "b997d9928859c121847d9dd5914661d1"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "0fa0528a9079cb3470fb7e84c4543146"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "3c9f26b3afe087c939d87925e4aac876"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "9cc393c1600c5ba258a724410dfac041"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "9e9f6581cfcd17ffc13ac63f0f0a23ca"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "167e87755ec80ffa085690cdaa9539b7"
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
    "revision": "a1a3e08937ac82bddceb19ab8566c2a1"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "072cf57e5519a577c0036a8de982d1f9"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "995fde4fcbeb8cfadf3fb1322fd120ee"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "b3aa6f56cf646108f18956de33a0ba1f"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "16feb3796bc1bfcd930a16936644fbe3"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "364714fdff18ec9cd10851a8324e9913"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "dbcda57034ca7aa9c150e8faf56d5dbd"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "4a3e12b05c4d9758156532bc99d10f9a"
  },
  {
    "url": "resources/books.html",
    "revision": "038e5add935f5e0a74d98843437fad91"
  },
  {
    "url": "resources/community.html",
    "revision": "303a2d1303b8c46847958b0a20fa0400"
  },
  {
    "url": "resources/conferences.html",
    "revision": "df2fad72f417acaabd102f17ed925984"
  },
  {
    "url": "resources/courses.html",
    "revision": "de925f3d2311c2b93cdfeaab62c81a6e"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "015ca483ab798c488710cb9b7bd74e07"
  },
  {
    "url": "resources/examples.html",
    "revision": "11bf42ec5b44bcb6daa27d5b70515d6d"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "3fe8025a744b8ab65dccdd3f8d31eef5"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "9d64477e6978207a5bfb76878466f4c1"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "5f8f25248401a4d92f1c1fb41a2d937c"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "e5da8ce16a86bd8c7af263b473d1e419"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "1a88c43b2151ea6c7915bc93116b7e52"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "d715115fcb08960314127cddd7234216"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "07a72723ffc42c6031554c2f4977522a"
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
