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
    "revision": "04d4103e519c66bee49fc923f0b89c94"
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
    "url": "assets/js/15.01cc39e6.js",
    "revision": "bec7642a30ee012aa1dce2809c72648c"
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
    "url": "assets/js/18.d2ea0936.js",
    "revision": "c1a0d7e6eb5f75334a0ac15439259460"
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
    "url": "assets/js/app.0248b81c.js",
    "revision": "0b09d89f82a341443514ae2b435214cb"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "f8d2ee22265de30f23f71552ab19089f"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "c1b8704f78635b4bf421bb815cbf3a8b"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "986214ead7f77dae1ea60261a60065ab"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "3eb27ec480159c40f8eff3aaa11f5544"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "ccd6b6a0b90172869c005ac2c325d302"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "c83f0ad797f893c48610c847e4e035f9"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "115d4b362389732ac91c0fafce2fd935"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "3755b007a014eb994ad74f1b25f94c34"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "254f9c25578a5f9bb326e003fa0883ac"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "c679841356f51247d49f0ccd20419f48"
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
    "revision": "a6c6470b76afe267b3e5e4d4a860cb92"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "ec79dad00e51a08e026912a980c488a1"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "2d57749c9b0040326d529f95e10bad75"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "c404622f50af4f154481ee67e92271d6"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "16add74ef8e18afcf389f2d963e4f4c6"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "d89a6610838ca56a955c44ce6d348649"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "05dffa639d55a8907636080b40189495"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "390c05c0e3f388f0aec7a661fe946bd1"
  },
  {
    "url": "resources/books.html",
    "revision": "805e6ef5e3dfff0205a3b36a31253524"
  },
  {
    "url": "resources/community.html",
    "revision": "864691a2ef3b74221b1f8fb515a05062"
  },
  {
    "url": "resources/conferences.html",
    "revision": "9c74942f205bf16cd8f13fefec1b9d64"
  },
  {
    "url": "resources/courses.html",
    "revision": "100a810963e8f90f738263be163cdeb2"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "1678fc42a4a71e21e5ec48476e673c4d"
  },
  {
    "url": "resources/examples.html",
    "revision": "dda5f4911d169c29d520c93da31b8be2"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "bf53d88e6d8562f20dcc2154c4ee2551"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "c82fd67624507ef444a15949ff66f792"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "5404a3a8dbbec7ad5506dd1a845b5a2b"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "5c43a7dd9ae38a6c0c2efd92f3edd49c"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "6807de3b0c553adca326fcb5a7415ff7"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "e9ce5f5e0e283c2168a0191511c153ea"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "59d86bfc675fd24f016a04779677da45"
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
