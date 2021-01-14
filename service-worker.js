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
    "revision": "2ad0d002427a91c553b9947656834eee"
  },
  {
    "url": "assets/css/0.styles.61a27945.css",
    "revision": "1291b6d22fc0526eab41e499766178fe"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f6f2b2e7.js",
    "revision": "955fa0a8bc6bbd30cc86769e6bf9aee9"
  },
  {
    "url": "assets/js/11.2512b5e4.js",
    "revision": "4fff4a26d1a64235c1544da2f16a4242"
  },
  {
    "url": "assets/js/12.06367b4c.js",
    "revision": "043cb260e51dfd16edbb9a9e0e7cea2c"
  },
  {
    "url": "assets/js/13.34f1931c.js",
    "revision": "abc811fbd0ad195c9f3b31f18084a8a6"
  },
  {
    "url": "assets/js/14.2c8894ca.js",
    "revision": "4e00e23e11000ef104ec905966b7d82c"
  },
  {
    "url": "assets/js/15.bdbd2a17.js",
    "revision": "49377389670824148d491febcc92b722"
  },
  {
    "url": "assets/js/16.c69f30db.js",
    "revision": "4e04220d074160a8f80ca4d4f6c7aade"
  },
  {
    "url": "assets/js/17.6cf514d6.js",
    "revision": "13ad8b7909ffe9ddba708c67a61783ae"
  },
  {
    "url": "assets/js/18.e1998680.js",
    "revision": "aade57871522f55ff19589287a5c801c"
  },
  {
    "url": "assets/js/19.aa2a9abb.js",
    "revision": "cceca1ffd4e5715a309dd638b5e68137"
  },
  {
    "url": "assets/js/20.5dee4820.js",
    "revision": "0fc07d2db88ee0adedb671de5259c231"
  },
  {
    "url": "assets/js/21.6c52adcd.js",
    "revision": "6604aafeb78ee32a3f874c8d927cf09c"
  },
  {
    "url": "assets/js/22.8bb51312.js",
    "revision": "22100ef0a606391ec379fefec53e6d2b"
  },
  {
    "url": "assets/js/23.7ebe3d5b.js",
    "revision": "d61c06154642178c2fc3ae4e02dbfd7f"
  },
  {
    "url": "assets/js/24.e647dcdf.js",
    "revision": "d55cb1a42ad6b08b170a9a468001852d"
  },
  {
    "url": "assets/js/25.e7d66833.js",
    "revision": "3e96cd5582fb689723bf17ec4615ca2b"
  },
  {
    "url": "assets/js/26.270e2b3f.js",
    "revision": "122166c725460c03974a4ce58428ff5a"
  },
  {
    "url": "assets/js/27.151a8484.js",
    "revision": "36b777dd8224c7dacce98fd5660527d7"
  },
  {
    "url": "assets/js/28.45e33b61.js",
    "revision": "3ac167a5176421b97d0551d2b74e0c17"
  },
  {
    "url": "assets/js/29.4a90533b.js",
    "revision": "5ff8d6cda9ad26db065c1424fbbe5221"
  },
  {
    "url": "assets/js/3.ee39270b.js",
    "revision": "e108c0aa67a9c9a51282edc106f4802b"
  },
  {
    "url": "assets/js/30.9243b983.js",
    "revision": "50eb9ed6e987273a433134a9d4eabf4d"
  },
  {
    "url": "assets/js/31.f7161e6a.js",
    "revision": "566fb6f29de657169cf323b288f35f7e"
  },
  {
    "url": "assets/js/32.0e08e2ae.js",
    "revision": "15825e9d3d27ef438e6dcacdf682e481"
  },
  {
    "url": "assets/js/33.45427c1e.js",
    "revision": "1f3f4d20bf1e0e958ab21a31deda2741"
  },
  {
    "url": "assets/js/34.3da0ec78.js",
    "revision": "66988bfecfab21e8346a3817064da9aa"
  },
  {
    "url": "assets/js/35.fb300819.js",
    "revision": "0627908e669b95b74fdaed55701e0ac8"
  },
  {
    "url": "assets/js/36.daf4781c.js",
    "revision": "2e042626ad1856aa12e82958cb823199"
  },
  {
    "url": "assets/js/37.b5943928.js",
    "revision": "21b7d272cf4a77cc6cdb32a1ae650492"
  },
  {
    "url": "assets/js/38.01eee222.js",
    "revision": "6688ae37611651a0b8cab686272f4763"
  },
  {
    "url": "assets/js/39.b2fb15f5.js",
    "revision": "5625f7356576f467cf65e54b800bc12a"
  },
  {
    "url": "assets/js/4.77880ce0.js",
    "revision": "6760cd938d1485f127d99a0291eb8181"
  },
  {
    "url": "assets/js/40.c7cbba88.js",
    "revision": "53e62a1b4987c045c1a5569de48d6064"
  },
  {
    "url": "assets/js/5.a30d82a1.js",
    "revision": "68feb4730f79f343e6589d8c8192c831"
  },
  {
    "url": "assets/js/6.4ad548bb.js",
    "revision": "1545c6a848a161c0441a5151aeebe3c9"
  },
  {
    "url": "assets/js/7.d0bc59da.js",
    "revision": "d6344ace030106e3c6cb7333b2257a82"
  },
  {
    "url": "assets/js/8.e0ff736b.js",
    "revision": "eadd3d0c984b4dca965079f6bfea2349"
  },
  {
    "url": "assets/js/9.5a5654d9.js",
    "revision": "544883e1ee9ab4fc93f6d0c3b8da6ee0"
  },
  {
    "url": "assets/js/app.c32f3ea8.js",
    "revision": "78d3b13b9f9393b76bb581f764a409b2"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "a455923a7f376a45dbf3836e8ba91a78"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "ae60dad8347a991349b4c58141e7e4d9"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "3874432ca07dc57918815b6314f55d9e"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "79048c20b5070259d8d3b72953340cf6"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "bf5321b5814d92cf35b16deadeb5513c"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "869bc558ddd59db1d5caddc8d0220228"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "4e5370c74ee6ad33e9df6aa9741b35cc"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "0998fc040e23d4d2187445477d6e5990"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "84fe3a6b76104da4ac4fe1c8e5e02f18"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "f0aa3f7c4f005665e13d5be7c018db5c"
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
    "revision": "ca8129f0ebb4362c3e01a5da15f581ed"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "c035526f6a49ee11d60167d76b542fa2"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "7f1fdc806ebeefcde92243b24715663e"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "6f0652ec5a3e8d59e275135b314e4507"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "9481cd36cbce2f6b9ed9eb55e85d86e3"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "50db292263ca4b540b00fc8e89303c72"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "b385e76ed71e8ba905dd98582fcb990e"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "0c7adb6c8b197d7b7da8ecade2f6b2f6"
  },
  {
    "url": "resources/books.html",
    "revision": "ccba24d599161e28bebcd1226088f38f"
  },
  {
    "url": "resources/community.html",
    "revision": "87d43f927d708b15abce10294ae190eb"
  },
  {
    "url": "resources/conferences.html",
    "revision": "8f3fc146a161352907fdec21e41475dd"
  },
  {
    "url": "resources/courses.html",
    "revision": "3870822ae596cab68b8a8e3854449983"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "de7fc79c12f3356c5a2bc9a978bde24d"
  },
  {
    "url": "resources/examples.html",
    "revision": "276484a3cb7e63aa9b22c23c8e5cc332"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "9adf458453c33c34fe7746aff814df7b"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "28eb2a31e39ceb5c07a9308c977d4625"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "ca0cf02ec7326a98295a54adcde0bfed"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "cf6c475dbf1f5a4911c9d423bdfd719b"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "8cc432b9ef9648f31f06e27f0d156b0e"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "74e0faa14ea33163677270dfd7e523a4"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "2357feacdd960426c1025951429ed4f7"
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
