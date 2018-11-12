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
    "revision": "02186bf8b7e3b3770693cfc10ee14f15"
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
    "url": "assets/css/styles.4199ceb5.css",
    "revision": "111688225d9e18a4a4436044dcb54c26"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b4482875.js",
    "revision": "f08b32c138824293355b402a63e7bc7f"
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
    "url": "assets/js/20.6184b46b.js",
    "revision": "ef8da22cf915be3a1b3d075c12793b46"
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
    "url": "assets/js/app.4199ceb5.js",
    "revision": "ae9ca1ba3aa19eef48fa2c45785e34e0"
  },
  {
    "url": "assets/js/vendors~docsearch.95b3b8d1.js",
    "revision": "5867230197954c5d93f4ade6c7f172b8"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "49cece41e9fd9a8ec7494d2ee1cd910b"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "05799d527601ca2f9e31854d44504cf3"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "9398da6a9bd85ba96cb1923f7b245cc8"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "1d277d284e4cab8b775630927026dd8c"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "28ad4f599bdd33eaf3ccc0ec41251563"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "cbf62f326c2532a106f47377b3c1690a"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "41904943d233065dfaa0cd81c5a99f13"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "83a6768f3428f316305de8a3e00a3ea4"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "d94707fb697d8f95eb251e8192a0e53e"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "32d88b20ca3d0a25aa8649b30c2ca001"
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
    "revision": "05fdfce06e680b2ab9bbb57da5759baf"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "5fe3d927535221ec63e0b85aabc58022"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "ea4ae5026826f085b6009686215dab15"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "b20f0929dd7813a7779fcb9dacf3645c"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "abcf4079dd14e795499dee8d56ff5629"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "ed8feb764084ad7650c96643d25a4082"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "83440e945f2ecfc56d9c5fd1e09cb01c"
  },
  {
    "url": "resources/books.html",
    "revision": "94bef9647a6c24a4241998971c48da9f"
  },
  {
    "url": "resources/community.html",
    "revision": "28df8078776ce183e349487ed491a3c8"
  },
  {
    "url": "resources/conferences.html",
    "revision": "165b8d24baea39a117a245264acee534"
  },
  {
    "url": "resources/examples.html",
    "revision": "2f8b6c59f109eeb74a05b8a9c55a5371"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "1485b3330d31d2a15988014516c83768"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "cd64ad85918a37a0ab895ad03baff837"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "0b31e96640658c406e26825f55b961be"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "a96233005458ead265ebc249a64e4525"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "2e5f90d8b9971307cb396ec61b42f2b1"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "73f167ad041cd65ab5d21af2b4ca90d7"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "431547bda02489cf9ccd168581b77372"
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
