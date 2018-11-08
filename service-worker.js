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
    "revision": "decf3047e1e38057caf0a3867ed44bf5"
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
    "url": "assets/css/styles.a66b1af5.css",
    "revision": "111688225d9e18a4a4436044dcb54c26"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8a591211.js",
    "revision": "08adcdc665842cacef9f39ee6b87b0d5"
  },
  {
    "url": "assets/js/11.bac7a5b8.js",
    "revision": "6c8d4852428f47914248c4399439d6ea"
  },
  {
    "url": "assets/js/12.a72f29a9.js",
    "revision": "0864b9e78f4cf7c38855aadfe31c92c5"
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
    "url": "assets/js/16.87bc6f3c.js",
    "revision": "aae90f2a1c6d00d51a87852292f8a945"
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
    "url": "assets/js/20.72faa1ae.js",
    "revision": "8225e10f1cc2fc0fe1481cbef29e3d55"
  },
  {
    "url": "assets/js/21.f265904e.js",
    "revision": "c9a0005ec0acc10a5978beb72d0becc7"
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
    "url": "assets/js/30.38ff875b.js",
    "revision": "576ecd86c324f7e714ff77122967bb10"
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
    "url": "assets/js/app.a66b1af5.js",
    "revision": "ba6dd19cc1e945983fd356cb76001977"
  },
  {
    "url": "assets/js/vendors~docsearch.95b3b8d1.js",
    "revision": "5867230197954c5d93f4ade6c7f172b8"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "8c5551977a8b22b8ee332882cba08dbf"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "3462e33e81719ade6483963f4845490a"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "2660e0f901b591f3a48cdda7c1fdef04"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "96755b57db3d0b323914feaa5edbd961"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "c771c7cb97f840cc89c124a4169c89ec"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "aa4f78c2e2089d99f18e5ff1181d490f"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "3dc209272d2369c8741e92f9faf606fd"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "e92bc0e5d754cd3f7bfb2131349de885"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "02bd47c59c915fee5a44a11ecc4c8dfc"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "b0b428c7cefb5b706d5740e1fb724ebb"
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
    "revision": "d96c73ce1b1750a005b9c661ff600963"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "e91ad96a178e694162adf8c01ec650a1"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "1b334b76688f1432b158fb80085d06ae"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "2d0da09b52b5cc225806f41a74692f21"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "e759ad84fab56537613e3dbdae9548e4"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "0ba4cccb817856b0478254af0d55fd43"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "ad697fe086d355e991d794e62c5fc5ea"
  },
  {
    "url": "resources/books.html",
    "revision": "6dcdac6b67739aaf2d61378fbd887268"
  },
  {
    "url": "resources/community.html",
    "revision": "51c32c71c4539a91a791a3c6cbd04c40"
  },
  {
    "url": "resources/conferences.html",
    "revision": "63a84c982cafb4d86bf189d34ce6d303"
  },
  {
    "url": "resources/examples.html",
    "revision": "0bbdffdf7278926d1126cd36328c1686"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "20b160007d7c3ac93fb9aa7e6fb14ad0"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "772e4fa3ae80ba5f1f350b9e385d24ec"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "d4e9360ebb4ea9e25719cad1ee12ff72"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "c43cffc9d2cba87db4844336e9e0d9fc"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "a0ce346e64a773cf13c8ad5c8758a8db"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "077ef4c173601731de123b040f88aed1"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "0b58720261ead6c54598ad8ffb032dcb"
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
