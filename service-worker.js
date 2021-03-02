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
    "revision": "91805614990dadfe667143b9b0703c3b"
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
    "url": "assets/js/11.462a09e5.js",
    "revision": "4fff4a26d1a64235c1544da2f16a4242"
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
    "url": "assets/js/15.af5bc348.js",
    "revision": "16c04bf3312b20d7f825e7e976ab7ba0"
  },
  {
    "url": "assets/js/16.f7ac9b10.js",
    "revision": "4e04220d074160a8f80ca4d4f6c7aade"
  },
  {
    "url": "assets/js/17.c380f808.js",
    "revision": "a7ff8a6ab00419ad53ee65cfa2732288"
  },
  {
    "url": "assets/js/18.1ffbe09a.js",
    "revision": "a34010b66e456618446d27dd59264d3b"
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
    "url": "assets/js/22.fe6574a5.js",
    "revision": "9ccd0817742ff5a3f2f7be2b2f3f4196"
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
    "url": "assets/js/27.b5d0e63f.js",
    "revision": "2cd93a0ffecb5b235deb9c194bf327fb"
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
    "url": "assets/js/38.d3d21b7e.js",
    "revision": "22bf8201e0280bed284eda450d87c605"
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
    "url": "assets/js/app.74e3ed2c.js",
    "revision": "94d9bf88a3c9a779c6cabc7a7406d5df"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "a3a462b1c1581426f27dc33b4db0eb3f"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "34ab6b3fc3f496d9d8c6a41ba919b1cb"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "6069b7807c6ab1ca78d225ea43844916"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "be06603bd98546e6646bea0897e1491b"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "2e20627b5645922dd1dc17cdb5949690"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "de8c079442b892743aeb4f7c179b24f3"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "a512b62b4dc933ac0cd83915c4b26619"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "6af2004acadf1ff9d078bee325659533"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "b2b3d3116a817a021fabe2068b6122be"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "0962aa13f11b0573aa559663c94b6673"
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
    "revision": "7d250c05df57e7d0dbb55d3030877dca"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "42aedfd3cf43f399798d45d78de630d6"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "09858e5475c1da2f3261e89e2a04597e"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "b5d989b2d3c5bfe7ead8f396631912eb"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "188d31119239774d2f8736d708efa87a"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "578789c6ce616aa0fc56601d9e9ac0ae"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "0d332156f66a61318b569fc57ab5f2fc"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "f94ecc3601a38a49eaf38d59d37e9cb2"
  },
  {
    "url": "resources/books.html",
    "revision": "b04d40d7ac6bee6ec1a61547707c14c7"
  },
  {
    "url": "resources/community.html",
    "revision": "c8a06c6bce2f69656ad7315be861b10a"
  },
  {
    "url": "resources/conferences.html",
    "revision": "b60ceab2ec2f088c6e1545259c4a4b94"
  },
  {
    "url": "resources/courses.html",
    "revision": "458838f0b6d6b6d248baf8d247f54bba"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "193123c43df54cecd8e2c0503a633bb2"
  },
  {
    "url": "resources/examples.html",
    "revision": "564a0c811a60b55d360a13b9beb1e125"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "8e7c005dead754c405cb11f4789b00e2"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "57077ed4fc4d9a2313d6163b2c413eb3"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "79233218b63296c2a2a9d755af4d9705"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "3b67dbd33d6d5074b76bc8d716278bf7"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "08ea9f6d74b54c927cd42292ee195ca1"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "0a4408e019cb717107f343f19d3ed0db"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "9d75cde1a8fdc9c72ba36a6a110e9eb8"
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
