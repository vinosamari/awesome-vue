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
    "revision": "f3a198a840ed42e36d36cab53536159a"
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
    "url": "assets/css/styles.271ea488.css",
    "revision": "111688225d9e18a4a4436044dcb54c26"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f0563f3a.js",
    "revision": "dd138a8618b5a1c4f8d863441450322e"
  },
  {
    "url": "assets/js/11.04247811.js",
    "revision": "6ff2f950d9f74d3425f4011ad5dd33a5"
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
    "url": "assets/js/24.0b919bc5.js",
    "revision": "8e27f6ac7f530f83135b09ba3b403e92"
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
    "url": "assets/js/app.271ea488.js",
    "revision": "c0d641004212f4091c1086b548cf6287"
  },
  {
    "url": "assets/js/vendors~docsearch.95b3b8d1.js",
    "revision": "5867230197954c5d93f4ade6c7f172b8"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "33b1dda27a801fdea1abc6e297861913"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "5d808f156adc50891b34adc41eacd732"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "c4bbcdf006b34a8ceb57023a3937bd3d"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "5eb0c20f3ab8f543bb34f9712027dce5"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "a87312cb0c1aac80b19e1766bb762a50"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "623ca97eb1140e516762ad0165485ef8"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "6e3d222fb061f350dd796e248bbe2a43"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "015f2ab5bde7f43a61cb9cdee31eebd7"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "6f0cd0544484bc6b5b6213e627c522cc"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "748cd8da8340f9a1f66923782743f1a2"
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
    "revision": "e28e909c42d4058f840cde5a3b3d65b4"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "afb7649e86cf659e318a65f86c7da359"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "ae4056b79356a6601923adfbbf1c63ad"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "01c2c468e58a8caa9299891e9e9c6f1f"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "282dc3b4256150e4ed0cdade1aea0e7a"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "dbfd8b27ace480ae875f681ad9a846cd"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "be7405038dee285167a6e6b4b3ad557d"
  },
  {
    "url": "resources/books.html",
    "revision": "4258165b3f85b12d78226989e529f687"
  },
  {
    "url": "resources/community.html",
    "revision": "6b7676cbb487b16dbe1bfc84d669ca0d"
  },
  {
    "url": "resources/conferences.html",
    "revision": "26dde0ebd860e78a0202c55a619f87fc"
  },
  {
    "url": "resources/examples.html",
    "revision": "0475eeec1a95f542910c1f7800825e54"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "2c31a8519f69982150a2b60831146684"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "2c4dea0724a6adf72fa5e06e6882f5c3"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "cff9361522471304100c7afe7939fa78"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "ee53b892140627b8b508ab8fe08bceb4"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "6aea945f7cc1122850b17d15cdeed395"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "593220fd815044e491a03df3a1ccb226"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "a61d7e1b4a63070b72524394526b19d2"
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
