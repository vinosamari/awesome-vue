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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "93f23e7d3bd51754573b9e3581d390cd"
  },
  {
    "url": "assets/css/0.styles.5ff31be7.css",
    "revision": "58e5e53660314010897cdf9a92270eb3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f784894a.js",
    "revision": "f8b144ab4aeca76e930520c44217b5b0"
  },
  {
    "url": "assets/js/11.9c07e140.js",
    "revision": "975c9f9e290e18a2254ac4a5aaaf6c83"
  },
  {
    "url": "assets/js/12.6c18356f.js",
    "revision": "f5bf7bff58242f69a35834742c2b1bed"
  },
  {
    "url": "assets/js/13.543df86f.js",
    "revision": "cf24775b6b686c08c61532ca8e737252"
  },
  {
    "url": "assets/js/14.2bfe9dd2.js",
    "revision": "1be62664b76331994b6e28582c108578"
  },
  {
    "url": "assets/js/15.a72d6148.js",
    "revision": "c3055af1cb8b2143adbc835bd0738d71"
  },
  {
    "url": "assets/js/16.b4a8465f.js",
    "revision": "2795380475a961afa5bdee81d6d5e222"
  },
  {
    "url": "assets/js/17.fed634b3.js",
    "revision": "704fba3b93d6c362c54f98ddb3c8e910"
  },
  {
    "url": "assets/js/18.713285e1.js",
    "revision": "d75a9e76614946a87b5ffbd967b377f2"
  },
  {
    "url": "assets/js/19.425522b1.js",
    "revision": "92c8c5bf68f0ec38e23334966e95eb21"
  },
  {
    "url": "assets/js/20.803dc0b1.js",
    "revision": "77c7fbcde76078d7b40ee47ff67a5495"
  },
  {
    "url": "assets/js/21.099140f2.js",
    "revision": "e17ecbf75174d993d1483eb6fafb1e00"
  },
  {
    "url": "assets/js/22.5d203eb8.js",
    "revision": "787520bb048af7aeb3970748438fbdab"
  },
  {
    "url": "assets/js/23.63c1f4e2.js",
    "revision": "e204a7e7ca82bf69cc49eb82ceccce90"
  },
  {
    "url": "assets/js/24.52e11734.js",
    "revision": "bbef4ba904b718c12b5c951165ea464a"
  },
  {
    "url": "assets/js/25.fe4425a5.js",
    "revision": "414bfc815ff6ab05772906cc404f5e58"
  },
  {
    "url": "assets/js/26.c91f52d5.js",
    "revision": "232c8ed4037a8ee7695521200574d4fc"
  },
  {
    "url": "assets/js/27.f248dcd6.js",
    "revision": "822431d5da07142860573dcb68e33b0d"
  },
  {
    "url": "assets/js/28.94ab042e.js",
    "revision": "ec53ef905bbe123059460df70e90699a"
  },
  {
    "url": "assets/js/29.34055373.js",
    "revision": "d0ffba5d80d6e021831a9f9894a4b378"
  },
  {
    "url": "assets/js/3.0544d826.js",
    "revision": "12ea2c2ecd72f58881a070cd7c4896a5"
  },
  {
    "url": "assets/js/30.c740bea7.js",
    "revision": "f585a44c44f93b6e1b7d64185dcb2d67"
  },
  {
    "url": "assets/js/31.84cc67c9.js",
    "revision": "5b0acaa379f7e3e8a6e8de3bae47a8d1"
  },
  {
    "url": "assets/js/32.7a8dbae1.js",
    "revision": "88de8eb75205a711ba07b2aebdf530c5"
  },
  {
    "url": "assets/js/33.5cf3be9d.js",
    "revision": "a52d1f348c2da9288e854cb6f8a9f628"
  },
  {
    "url": "assets/js/4.7dd03a5a.js",
    "revision": "ac09bbe8a61009d28a2cda1f6d67e4ee"
  },
  {
    "url": "assets/js/5.162ed396.js",
    "revision": "dcb71203ea7b70feaf6f96ad48a07fa3"
  },
  {
    "url": "assets/js/6.2171c073.js",
    "revision": "ce704ac785c48df14e8b8401475dc41a"
  },
  {
    "url": "assets/js/7.354c023a.js",
    "revision": "fb18f0d16531efe27e7b0c625c67af84"
  },
  {
    "url": "assets/js/8.9acb0697.js",
    "revision": "473bb0c5dd34c55f112e996324f81eb3"
  },
  {
    "url": "assets/js/9.6d48fd7f.js",
    "revision": "f8827e2bf6e1aea22d1242a8200efbc9"
  },
  {
    "url": "assets/js/app.f991d5fe.js",
    "revision": "fce69a4b4511ea19a6696bd15fb14669"
  },
  {
    "url": "assets/js/vendors~docsearch.12d3b6b4.js",
    "revision": "d04cdaedc0417584670fe05179d38dd6"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "1f93016cd66e48c919eb8451f97d9a29"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "83004dc93dd535ba6aeaf63af54df50d"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "51273834ee587368698b82fdb927144b"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "e88bf76704f183dfac8cfc991f966834"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "beef0ada7646b5fe2aa009cc7cfc81fe"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "47fdd8a9c2cc39f61aa16bce59516d95"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "8306095270f7acebbb38705e5031d256"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "f2fc996f47a574f0146c3b1b447d8919"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "f46c2ebbc73e957783fad5fb4680c6ac"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "80724c8cd004af482d71ba2b3b98941f"
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
    "revision": "1ca877d5f1f840173244ebfd012938dc"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "797ed39c682fe56fa13aed40a7e0609b"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "fca6aca5d980b463244b3ed001b75009"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "aab2838b1cf50bfb256c59496ad60447"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "56251d6b0220ff4856e4186a12551c2b"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "d0523c429b72cc5d4f8874fd30e5bf03"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "b254206ecbcc6378373b03fe8e069d77"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "fbee56e7bc9c9a8dac5229dcce0b06f0"
  },
  {
    "url": "resources/books.html",
    "revision": "bc9a63ca5934a88ba2fc943ddeb42e97"
  },
  {
    "url": "resources/community.html",
    "revision": "d920556ceb1442a2b3c62975a39aa7ee"
  },
  {
    "url": "resources/conferences.html",
    "revision": "eabdea22005913aca2a513deb9458abd"
  },
  {
    "url": "resources/examples.html",
    "revision": "a1d3549221a94468b93281f73bcbcdab"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "d448bdbc612485570b4c1386d2258b40"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "1c730450f789e194a6f23a8fc5a2cae9"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "1f7b2aa766e29a6a95df9875ec2af680"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "97363a7ce129526d271f8ba584ee38cd"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "d20c32fc422687b1da535002b3f540c8"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "af59699caa736f95d2fbdfe5463fbae6"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "21348e60c3b0e99980c0676343ebede1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
