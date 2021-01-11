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
    "revision": "82897a8e8c87c960461a6f77e87be138"
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
    "url": "assets/js/14.f804cc20.js",
    "revision": "5772efc65a515796545fdc8477610f14"
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
    "url": "assets/js/18.831e91a7.js",
    "revision": "439bd91d74585e74804048c0d11cd005"
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
    "url": "assets/js/app.de549f67.js",
    "revision": "2eb1979e44616d606b5db7827beb8983"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "67b0ef2b7538bdca00eb32bcf453b1f3"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "1c09f4fcebdd8f33a448859ec53f65a1"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "1e8c4a49693c5792a2aa607431d85dad"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "1f965e48b5e07ac58c686f9e91221683"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "d0d7bde0d144c6c46e118fa26ed8ef62"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "82ff01222b72fb2705d8fcf926182e65"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "dd5b2bdf0dbcb54e83879f5c75839955"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "0d01aebe451c91a81fbc7df674238039"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "dad5702368afc98a086a89307df6fca0"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "f7dbce28b85a7801963e435d011f06a8"
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
    "revision": "61dd4da07c111fa123569063eab2011b"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "b9456ddbdaf2853e940da931352ac5cc"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "2401d6eeed9f1ae0ec2a984b94ae362c"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "1adf49b4ec203827e996c64d31a0c3e6"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "f255dd794a44c8ec7e699a8c84c4fd35"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "dc46028764d1358eec5e7d9d455188e5"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "5c7cc3ded598546041d6ceb32a2c8471"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "81e893d7f858f1f9eb52cd531f92debf"
  },
  {
    "url": "resources/books.html",
    "revision": "17cb60ee6647d6ca05c040cc60dfffcd"
  },
  {
    "url": "resources/community.html",
    "revision": "ac540ad4d42d1a769e686920fcc8e323"
  },
  {
    "url": "resources/conferences.html",
    "revision": "50e1e781fd4982b0f064c715ca98f84e"
  },
  {
    "url": "resources/courses.html",
    "revision": "43781744d9b73719df4c1bb10f80001a"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "223ee148f5245674c160ccdf980ce9fb"
  },
  {
    "url": "resources/examples.html",
    "revision": "7570050aec8e060a69837d6af85fd1d0"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "450dc32469141eaeee4f8ea856f630e6"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "1c98b3d2815e56ecaf4d07b1bdbc3c09"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "36617932417b36d012c6056c62ef2fe3"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "5bbf7f0c45dfe728cb1944392f41f29a"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "c01ca59e68f6d68775015bcb46e71c44"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "1c0e61d65ead3f126ac2354340afbea5"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "ee10f1a4ddd10a8e9ef0a4a4ac520631"
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
