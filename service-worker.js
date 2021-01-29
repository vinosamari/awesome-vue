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
    "revision": "b9958543c79dbc382f398c123e469441"
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
    "url": "assets/js/18.7066fd7a.js",
    "revision": "c761c85100cc04de4682dcdae7ff1892"
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
    "url": "assets/js/app.f7233ccc.js",
    "revision": "b4cf49f6a7d7a5f02e4abf72c1d6eec0"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "927a02c5a1cd787b82aa89c9371be16f"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "55f20259a4babad6ac4dd5542bd628d2"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "3f0807d69e2e18c49868a4d8ddb65cf8"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "84acd357d8ab6a752a38d942467d1836"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "6f5cb23782f53c35d412d66d25c1b191"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "a2ef75efaa09bd1b133f6075361da327"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "c7f8c8ed13e3c3958fbc494d987a2351"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "d7bb02f1da64917084c8f10d3169b23c"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "a1623b1691e88933e2dec5e6452f38e2"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "afc064d308003b32a14242f9b708c0ca"
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
    "revision": "5c8e3e54db8b359e37a695e00e1d7e87"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "06c3fb90e1e28fc3d2fdceb4e8dfae53"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "b07c1d3cf3543460c5ab6d63f206cbda"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "f576743a878400ef8eefee5947e80d47"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "d55ad2145a411f2c3a71c9bdbc2e2535"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "93f0db417ef43705ad16290875024a0e"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "64234cf5a56394fbc72fe7e93e467877"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "13ac315138665df93027fbce230dbf13"
  },
  {
    "url": "resources/books.html",
    "revision": "9b0965007781b90802b7c651a4d04bc0"
  },
  {
    "url": "resources/community.html",
    "revision": "a532febb20ade54dde8d9ebfc548a352"
  },
  {
    "url": "resources/conferences.html",
    "revision": "894c0fea484c79b561fca6f96205fab4"
  },
  {
    "url": "resources/courses.html",
    "revision": "1758adcf657b3d4f5ccaca270224edad"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "e3a448c4c5f796b8d0c7ce846ee204bc"
  },
  {
    "url": "resources/examples.html",
    "revision": "21fbb5745d2c8aa4f59136b70acbaa3e"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "4d797fc48d119dc98b40dbfe380b59e8"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "bd6ea2018e511d0c521d510549cd2b85"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "d48096e363cf822e2ea36bc887907214"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "adad389b77ed0b4b1017286b5bef236c"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "143336e58c31ab9db6f5a946131dc119"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "5046883af410a03f55a14336bcbd01c0"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "9269cf50e8d45e91c2e5c3017a4bec33"
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
