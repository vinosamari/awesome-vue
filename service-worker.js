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
    "revision": "588a9f9217e28b70cfe8210e67b8922a"
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
    "url": "assets/js/14.e62d42b0.js",
    "revision": "6d2b103c231b878ebc2a74f402956ba9"
  },
  {
    "url": "assets/js/15.81025c44.js",
    "revision": "41ffd1172d086f7fb19c62b83d913527"
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
    "url": "assets/js/18.48583769.js",
    "revision": "70c506fdaaf5cfdd2a246245459e4023"
  },
  {
    "url": "assets/js/19.aa2a9abb.js",
    "revision": "cceca1ffd4e5715a309dd638b5e68137"
  },
  {
    "url": "assets/js/20.a3da2bfc.js",
    "revision": "3f2e6d71217e2ff835215e8f819a23ec"
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
    "url": "assets/js/26.d8a15bb0.js",
    "revision": "72f6c084fdc18f493458b5f43155647a"
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
    "url": "assets/js/3.ad7084b2.js",
    "revision": "c6579fbce9d094b66c9c77746d1c408c"
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
    "url": "assets/js/32.fc9d492e.js",
    "revision": "848417aa1bbd9cdc35506cf82efb68b0"
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
    "url": "assets/js/38.bc6e5508.js",
    "revision": "06f2039934e35ca2c3c8a59924f1e36d"
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
    "url": "assets/js/app.9ced58d0.js",
    "revision": "c613d2cfb27c97febccbb326438c9af7"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "5c9e2a2f71e235a25f8f65ef9bbf6b66"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "486258034b7d103a5dc10010088f16f9"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "5401d67325586ce01be0f332de8dbadc"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "618dfd1622906807771e971e73c418c0"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "352e9d935ce8826361b907ea426c962d"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "98c9f27cefa36513fa1c1c27ceaf7012"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "0fe94ed80bf893a69b242a8f8b2846f2"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "13ee6f8236d9a65a73f336501b8e0c9e"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "294730f7065e7fba435e4ef6e4d63ee1"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "a2e25cda0407974236f0d2bf2e34239c"
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
    "revision": "d363a5dd953eae198418803db5bb2f6c"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "070f61ddbc3a73764456a106ee0d14c1"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "8c7cf7887226a40d7b931c56ae0ea3b2"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "ccb46de1c6cfa72e062c67f84e1ea8ad"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "c6d424c4e9fd9d0bc0a84f3f3a92ec46"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "2727ad28dbb7719c1f50ac146b4d7f9d"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "a6bf2dfc62cf0ae48013efc9d3dd0344"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "e38e09f073c0664fbff4213665ef2b49"
  },
  {
    "url": "resources/books.html",
    "revision": "7e5cfa6e10f24fcdc05c14a84b9cf9e7"
  },
  {
    "url": "resources/community.html",
    "revision": "29724d1797c02ab33e7452fc64630034"
  },
  {
    "url": "resources/conferences.html",
    "revision": "cda853df838019b1b078afe4bc964c07"
  },
  {
    "url": "resources/courses.html",
    "revision": "268f25ad33e2272b1f5086b66d552f06"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "8a018deb830cc7388d454faf5c7ab300"
  },
  {
    "url": "resources/examples.html",
    "revision": "3bbbebd1b750b84a554dc00a0a0f8230"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "4939a2943a1007ca939992d956507903"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "2c2da21ae8630f5e31c763ba8c376f1d"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "574c73a5f8e46c111096785bd8c1e9bd"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "36f97f75f9ce29fcfc3834c53a910dd6"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "0c57b979d4ea526a85b737c087f23d38"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "06693a7d97d06fedc91d39711688e9de"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "1cae7a2a2282172878987906d0c67d09"
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
