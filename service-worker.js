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
    "revision": "02cf29340b2551fa893ce8435b9c2c1e"
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
    "url": "assets/js/12.a3f06d2c.js",
    "revision": "7dab39345c799d5dfd19835b13cd2e77"
  },
  {
    "url": "assets/js/13.9d85628b.js",
    "revision": "60866b1cd849f2ba4235d1d0ddffc978"
  },
  {
    "url": "assets/js/14.9a0e7b96.js",
    "revision": "8e4352c7ba5fc3ced88c760cba105214"
  },
  {
    "url": "assets/js/15.30d45f61.js",
    "revision": "30a325c82a57a647611aa38bc85e998a"
  },
  {
    "url": "assets/js/16.754491ce.js",
    "revision": "460b13c817ea7ce7ac7a48b52333b9ef"
  },
  {
    "url": "assets/js/17.bef9ed2f.js",
    "revision": "4cfa6fdc4c0a04201d9b73ea287105aa"
  },
  {
    "url": "assets/js/18.9ef43591.js",
    "revision": "b1644648120d90cd80a24d37b1e095f9"
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
    "url": "assets/js/app.1cda8ea6.js",
    "revision": "da03c9e404723b5a2717673f8153af80"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "949f782c88eaf1fdd7eca12ac7fd4757"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "c67816fe38869745d31c2a4976c714ff"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "5d9d810fa8597f8badf7bfffc9341a83"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "8f728ba9cff31a38ec74a0fd0c2d6e1e"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "5f633d958d9855b1941f932416e17ee2"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "d21c390c90fd7994136a9d656f56e479"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "d38be443f235bf3a023554ff0b7fbb32"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "e7e7a7c983ed00207dd5d589109fb3e0"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "4139e53fd26c6b0e6a6dc74faebc9605"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "ca85ffd3897e38c8f4242c1c518ee040"
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
    "revision": "04be22df29377e592c126c3227ffd74c"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "da2c2dd88ffdaf84c9ba22fd02755dc6"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "b59f4900e8a803ab995babd34bc28324"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "9b66249cf636652a977708a014ee23ed"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "4c69c3de07fbadcc41e591996dad0eb6"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "36e5d1ac50d09d0a1ed82271da814151"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "b9eade6621df0fd8d259ecba7946e67c"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "31b67462edcbd168f2e60b323226e4d9"
  },
  {
    "url": "resources/books.html",
    "revision": "9185141d952276ec8f21639a9165b3fc"
  },
  {
    "url": "resources/community.html",
    "revision": "4e67d88286e04edc714fe496b62f135e"
  },
  {
    "url": "resources/conferences.html",
    "revision": "58b66d7411cb975ba5ea239d8b0cf429"
  },
  {
    "url": "resources/courses.html",
    "revision": "7d19889b513dea0f657d72923ab40ce3"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "8a1e654e45574351d80900381a956a5b"
  },
  {
    "url": "resources/examples.html",
    "revision": "d4b1b120e2dc41f4edfa0dc2099a860e"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "b1c8d82bd77fd0a28a082576013b6c62"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "e087de31684e5e09de735e063eede383"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "97f8f3c5f11db419b344198e8f098aed"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "d401af221c68808b03219353f13eef7d"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "a68d8fd8c948a80502bc9fec58142f8a"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "6998ff1ece4cc19fcc5afcf8dc82c3b3"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "2983263cda650ed5cf5ced4e972c3316"
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
