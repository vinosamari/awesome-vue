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
    "revision": "90430298b9f724656f9b65c351ea4d73"
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
    "url": "assets/css/styles.2227e204.css",
    "revision": "111688225d9e18a4a4436044dcb54c26"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.786cedd2.js",
    "revision": "896accf71a707762651fdd44ef8182b2"
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
    "url": "assets/js/app.2227e204.js",
    "revision": "6f7fb7969aaab69cadf4baedae12b454"
  },
  {
    "url": "assets/js/vendors~docsearch.95b3b8d1.js",
    "revision": "5867230197954c5d93f4ade6c7f172b8"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "2ed3026b3bab496f22c0ad2cf8203bd4"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "bdabad146c247c88b93962f185bc13b0"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "dc06b204e4a99329767a382ca9fddc66"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "082419c99fff8ee5cb6aa8414f0cc3b6"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "3aa348ad67e148b6b2b5c8a6bb7a664e"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "a82080c9f2a4581144a6cd7085e212ba"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "4b008075aeb9d7b1a53316393c7acb3e"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "08326cebe479dce841ab9427f2f3ebde"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "b6de12e6e1f4f10314e758e75725704c"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "b50cce3fe30843bbef22eecb501cfa7b"
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
    "revision": "1db24536d48277c8b53bf89d445e187e"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "4309919c268a693cc74587ab5fa34223"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "696ee9b2deec59dd1bcdbac420235216"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "b4ae0e51357b2468db0bc35545333e37"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "902172e159d20603f0e82aa019b96e72"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "d4bbf48c993cd618ed4e6dde0634559d"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "29822b5f3a4cb5565c33ccb660be5a95"
  },
  {
    "url": "resources/books.html",
    "revision": "46e4b29505eb8c0622c6356a6dbc00ff"
  },
  {
    "url": "resources/community.html",
    "revision": "91ba5360c6c4fa77618447e2a6fb1851"
  },
  {
    "url": "resources/conferences.html",
    "revision": "df888055002680f7f0a1aaa3b0aee31c"
  },
  {
    "url": "resources/examples.html",
    "revision": "6e3c2c09b182914cca65d37380e2f222"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "982e46b21cc2f14f502c160ef4fcd034"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "56c238a6c5190d0ffbd90609ac36532b"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "ce0fe0927dddbb538324f2945bd3257a"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "56e238a34390cbf32676e8e905e57c29"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "6603e498a9c59ab82265c812b3feb06c"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "5f138112e275c0f2e6a52bd8066c6aca"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "dabeacbc6240138e460ef8ee06ac1750"
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
