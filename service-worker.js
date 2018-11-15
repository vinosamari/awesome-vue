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
    "revision": "44926bee627237654d4c9a8ee224ba8b"
  },
  {
    "url": "assets/css/1.styles.95b3b8d1.css",
    "revision": "e833a122d533608ee2f21b9e125985fb"
  },
  {
    "url": "assets/css/2.styles.1f7a492e.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/3.styles.80dafa89.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.a5c9a140.css",
    "revision": "111688225d9e18a4a4436044dcb54c26"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.51d4d938.js",
    "revision": "e0dcd348288f010fe79dbc09ddc75801"
  },
  {
    "url": "assets/js/11.bac7a5b8.js",
    "revision": "6c8d4852428f47914248c4399439d6ea"
  },
  {
    "url": "assets/js/12.485f9c4b.js",
    "revision": "d6994536d9e1266249d20ded596f3254"
  },
  {
    "url": "assets/js/13.7f4f01e7.js",
    "revision": "e0d2ed5a4baac804663a2616990df4b1"
  },
  {
    "url": "assets/js/14.f09185f7.js",
    "revision": "9120ed8e5c39eb07143fbfb2e787fb35"
  },
  {
    "url": "assets/js/15.d60b3a84.js",
    "revision": "f9484e57b64205b6fb134188b04b59a1"
  },
  {
    "url": "assets/js/16.c06e73fa.js",
    "revision": "0c327472b490bc17a6b3f8a2e5a3b1cf"
  },
  {
    "url": "assets/js/17.be31b801.js",
    "revision": "19d1462bf19bae19f18a9a3714612fcf"
  },
  {
    "url": "assets/js/18.a17f7ee0.js",
    "revision": "4177432f6a18bfe94f417888a9c0da4f"
  },
  {
    "url": "assets/js/19.9e15f1e6.js",
    "revision": "2bed5a9c525ac8d9d1fa186517ea484e"
  },
  {
    "url": "assets/js/2.1f7a492e.js",
    "revision": "03319fac4e1079b177ae4ded7442baf2"
  },
  {
    "url": "assets/js/20.4f7df30a.js",
    "revision": "bb9d7775253d483be6dcd0f968fcb3f1"
  },
  {
    "url": "assets/js/21.c611db2e.js",
    "revision": "29d02908c15b4b79c89e202f0ddd05ea"
  },
  {
    "url": "assets/js/22.0eb11352.js",
    "revision": "6d49baa9adda6b93e70692c59e48c052"
  },
  {
    "url": "assets/js/23.1b6df443.js",
    "revision": "8c2faf38cddea74690ab0bff419e9e26"
  },
  {
    "url": "assets/js/24.bcdd989c.js",
    "revision": "4720e3ec068e4a245773080166b3be65"
  },
  {
    "url": "assets/js/25.a890f505.js",
    "revision": "6b89cbbd1540b97ecff13c8fdf66cdaa"
  },
  {
    "url": "assets/js/26.39ec92d1.js",
    "revision": "ec18f52be5f0aa7d7ef820833c7b08cd"
  },
  {
    "url": "assets/js/27.c42dae27.js",
    "revision": "6af317da0a297f76968f891e163d188a"
  },
  {
    "url": "assets/js/28.3f37ffd5.js",
    "revision": "81b725a4f34f02301cbfc07a46944f72"
  },
  {
    "url": "assets/js/29.93eacbf5.js",
    "revision": "dff50734311ee59df680d139b462f8f2"
  },
  {
    "url": "assets/js/3.80dafa89.js",
    "revision": "60b97dcf55f23db0f46b2f36882d5348"
  },
  {
    "url": "assets/js/30.e7633b4c.js",
    "revision": "11a86fa44902b4d61c8ff96d699893ff"
  },
  {
    "url": "assets/js/31.c7258e18.js",
    "revision": "0624c030bbc6b1b3399ac79bac9ffbfa"
  },
  {
    "url": "assets/js/4.787de3d7.js",
    "revision": "7085f6765352fed194878d2d5b3614b7"
  },
  {
    "url": "assets/js/5.73739ff9.js",
    "revision": "8fe0b9e8adc3676fa04b6e9887a334f4"
  },
  {
    "url": "assets/js/6.a88db067.js",
    "revision": "9e39f4c71e2bd3614e76b3f5dad8d69f"
  },
  {
    "url": "assets/js/7.61b28874.js",
    "revision": "f4c628ad74c046c18f5b77d62ef3b38e"
  },
  {
    "url": "assets/js/8.437b5ea2.js",
    "revision": "40219edbb1455c7f93ac48fc875f6ce4"
  },
  {
    "url": "assets/js/9.914840f8.js",
    "revision": "1c9ba14372a142c53edb9e99da50a388"
  },
  {
    "url": "assets/js/app.a5c9a140.js",
    "revision": "7c6014db1b576a25af2a4eab401e4603"
  },
  {
    "url": "assets/js/vendors~docsearch.95b3b8d1.js",
    "revision": "5867230197954c5d93f4ade6c7f172b8"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "649c722a1149b179b3eab03e87b3687a"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "e5dcdf0ccd66b6a049b3fc12d5f7242c"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "372d980327f9bf296235a842b7688d5d"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "8ff051eebe0d5bc756f83ff76fbd1d4f"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "4118d55ef0daae0b178e8f6307009e98"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "2ab1c8695827dc3958da918bc4f9bfa0"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "cf1439235be475f9605aa651cfd549cf"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "4d61590ffb1f458de33c2d2e00bed0a9"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "075f596beebc256a4db2628e360b1754"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "add4f2ac34a10a52f2d20a5e034bb0c6"
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
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "7bffccee82e15b856ff052661ec2c132"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "39ef4093fc7535453340c96dae8e36bd"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "82f2c029d417cf7f9561953401ebc752"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "3d712402c31316fbdb209697f8f1a6e7"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "41044f76cf4187b32ee5863ed08a9c39"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "33151d0e3f0b05e4da512f0d9cb5c817"
  },
  {
    "url": "index.html",
    "revision": "29ee9bcb0c20fc485f053425d457ea2b"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "885d4f40eb6ad1723510b60e8aae54de"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "03d047a882059ded4bd63f6ba67e5f46"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "2e05e12bef5ffb70b5f2f71413ee630e"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "7371d16ec63b79bee987eb7f2f1b446e"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "4b288802b7292cb8462114f8ff6a604b"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "aa3ccee7f436ab54828e237d5d3e47f3"
  },
  {
    "url": "resources/books.html",
    "revision": "90c0cbb4d77bf414bff6977648587c8d"
  },
  {
    "url": "resources/community.html",
    "revision": "16f1533c51bbe76e3f50256bf6b4d411"
  },
  {
    "url": "resources/conferences.html",
    "revision": "2ef247b00d4a1b33ad99a76d69f0a136"
  },
  {
    "url": "resources/examples.html",
    "revision": "60031f8cbd97b4e1da72c4c40ffa86a7"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "cf53f4a55ff7c67032d1b4abc4dcc52c"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "4fd6f8f5f5a230786dfc5a1d77c1955c"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "82bf1fa279a49f44f95162becb0568d6"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "bd09b439bffb25dc1b186eda6f15272d"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "d6b8b066565a5bcaf211f73eb8a0c2cb"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "d53e87ab95f53e79a0eb112da667333c"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "abdcb611d99e724237a4168bd6d60cc6"
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
