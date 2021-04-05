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
    "revision": "45b70444916dd3d1a000506cc264da6e"
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
    "url": "assets/js/11.4347a4da.js",
    "revision": "e4720912f717c74f5a7d89da840e13d2"
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
    "url": "assets/js/15.7cc3c495.js",
    "revision": "46a8cc4358e6c6e03f7ef54aa9ec80d3"
  },
  {
    "url": "assets/js/16.f7ac9b10.js",
    "revision": "4e04220d074160a8f80ca4d4f6c7aade"
  },
  {
    "url": "assets/js/17.a0c99e4c.js",
    "revision": "d4065a59dab1d6b68991c08228b9de17"
  },
  {
    "url": "assets/js/18.a6855248.js",
    "revision": "aca32cddb9e51a0e3aa2478393e719a9"
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
    "url": "assets/js/25.55155bc2.js",
    "revision": "0a23c311b99034efe4c32cf88f244a3c"
  },
  {
    "url": "assets/js/26.76e7f23b.js",
    "revision": "72f6c084fdc18f493458b5f43155647a"
  },
  {
    "url": "assets/js/27.670bcf19.js",
    "revision": "fd90167492ead91dd9679c2b1bd6dad4"
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
    "url": "assets/js/3.30994ccd.js",
    "revision": "6f289d93e1c3c976da9c2b8c1430ef04"
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
    "url": "assets/js/7.b6d73c4a.js",
    "revision": "20ae3c55a0c5065d66aa78959fe728de"
  },
  {
    "url": "assets/js/8.dbbba277.js",
    "revision": "eadd3d0c984b4dca965079f6bfea2349"
  },
  {
    "url": "assets/js/9.5d656205.js",
    "revision": "e62db5ca81cb02497d5545141773465a"
  },
  {
    "url": "assets/js/app.b35c743a.js",
    "revision": "88eb75774aec7316b319b95a8168059e"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "a1e217147770ebc5f1034eba3d71db4c"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "6a54de55ca07daae7161b6c3db776a13"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "54c810104d8b4b8a5ae77114ab74d899"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "3dafff9db68fb44d5a01983c542ecef1"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "575d90a59b8418c2e6bbc6d9a038d560"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "c006362a47235a8e43bfdf11bb114586"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "d8b7d99f0e861a053e351caa589d273a"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "6700d1759c35032f212b5c9ab9ba12ae"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "2e1b03133c0af3bf5217f92a5996808a"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "f08f05b7e81300f838c3324024b7715c"
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
    "revision": "e1a4d87181a8b0b1b14929294c0f1267"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "8c8984383d40a1a93f3f1bf728e59852"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "3791025e3b31b23f939d700c50b10e66"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "7310d22782836107b08c2f81475728ca"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "9acd71e28d3255e7d13e870e6acb57af"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "ebd90aa7d2d9351089a5f2ff3c5cb692"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "b037092fe7ef3b0b017c477b509e6de6"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "59ce7d8ea0ca4722f9d66f1da97c53ac"
  },
  {
    "url": "resources/books.html",
    "revision": "fd17df46252b0f99a44ca8155e6e0080"
  },
  {
    "url": "resources/community.html",
    "revision": "02f41053e1a6dbd486d1b91109d87979"
  },
  {
    "url": "resources/conferences.html",
    "revision": "8d055b98d916c7925b7d1c89bd206c23"
  },
  {
    "url": "resources/courses.html",
    "revision": "2ebd4a7bb5cfa6e140665d00ef60c02a"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "57f8ef61a629a6a80fad7323ec09d35f"
  },
  {
    "url": "resources/examples.html",
    "revision": "71045797394dbfc075481319ff616f52"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "bcbb6d2a42bbab65ba4e3c2e19f563c1"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "02f29678babc2d50b4790d83fe664bf1"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "572380d94108c9594640654d69fcc515"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "239cb79dd762a90ce61135eff4f96d36"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "df5160bc3c8c1bab0d15493908281908"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "54a71418b26b219b67a9b6dc0eee2cd3"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "6073fa150c1b3c9959146145e97bd4a7"
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
