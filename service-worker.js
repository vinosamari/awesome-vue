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
    "revision": "3cb9e0554995c72210c1b7c781dad140"
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
    "url": "assets/js/14.fe4c2812.js",
    "revision": "72edc11a8273addd246778ea3c13e50e"
  },
  {
    "url": "assets/js/15.acc91817.js",
    "revision": "bfd96e054d7513a672dfd583891b6c9d"
  },
  {
    "url": "assets/js/16.f7ac9b10.js",
    "revision": "4e04220d074160a8f80ca4d4f6c7aade"
  },
  {
    "url": "assets/js/17.78dc5924.js",
    "revision": "4e813e9d4c7bac656c7f884f09ac481f"
  },
  {
    "url": "assets/js/18.8d789a5b.js",
    "revision": "3bcaf20de6e5987561a9c68a50b012eb"
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
    "url": "assets/js/21.b28a8d07.js",
    "revision": "b11d43a39b289b73dd384a56cfe60000"
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
    "url": "assets/js/3.8de3f819.js",
    "revision": "19563db5a82b5e718f973332e8f64dfc"
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
    "url": "assets/js/32.d632830c.js",
    "revision": "2ed97bc69f11f0d9915cc9726648a106"
  },
  {
    "url": "assets/js/33.5e17d0f2.js",
    "revision": "87689b999eb7fcdfc35844ff1f0c7fd0"
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
    "url": "assets/js/38.f71430a9.js",
    "revision": "97f5102ca8a49185ba00b803ca247aa3"
  },
  {
    "url": "assets/js/39.deda5e8c.js",
    "revision": "fdc90754ac0c402af4b1a76e7e5d892f"
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
    "url": "assets/js/7.55b3eaf9.js",
    "revision": "0303374e75a09a69cef83901978869e5"
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
    "url": "assets/js/app.ca3b2f12.js",
    "revision": "3aad4e91022150a32ee7d05be510a9bd"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "d1abd3602f127a54ec7ffdef1c976e03"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "f25ae2d016439b0827719d4cf1c9c495"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "d311268bd8b24fb58a0e66802715d8da"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "2f8d92371427077a0de6d8118c5bad4d"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "6e0dcc9bbb8ce4404b910fa69c1d2c91"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "55fa07dce80bbde071fe683acb61c069"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "4f471b4decdf620628186b290933c6e5"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "70d68ca72aaa126a2cfa102757be0bb2"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "9cb854a1cc1806a21167c5b324d1c2b8"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "a22ee4c58035d377fe6c60aed2191180"
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
    "revision": "191f2973b95cc98f528ba2b101621013"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "1c8bc46a9da0f1baa2f4bfa0e2018f96"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "fe937b42cedb9509284e9737de389616"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "665dc15c0b5a0bb9e2661469fc977a2f"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "f5fb2548e81d61b9069a7f240cbe8bdb"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "bc1cf705a04e2fca51aad8cc20a46fb6"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "c279a3336ab60dddc2c3f5d09f0ae40c"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "aa079e384b7a0fa045fd3a6cedf3d4ee"
  },
  {
    "url": "resources/books.html",
    "revision": "962579e614a023bbdbc866f23a1f3736"
  },
  {
    "url": "resources/community.html",
    "revision": "781d1bf55c9828e276b9972d48fa006a"
  },
  {
    "url": "resources/conferences.html",
    "revision": "e15e0d088f0f798008e6a4ef3b41f2ab"
  },
  {
    "url": "resources/courses.html",
    "revision": "49c2b2567d36caf088ddcb21bf055503"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "fef90102f8f1fcd269d7b7ff24f161bd"
  },
  {
    "url": "resources/examples.html",
    "revision": "15e46748ffff4c6323faffafd3fea3ea"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "536d4c8dee9fa9a8713b209ef528afa3"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "075969fcfebebacc8103a2678b60fe8b"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "f891aae24a08cda140c3755866a620d9"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "0c6fdab188fa5e1f9d76950bde4767c0"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "2e640775effde0b261bf7d5c9e47b412"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "6c7b840fe980c2a0381947dd7144b281"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "7091ac623bec1b373673ae71d2b1df8e"
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
