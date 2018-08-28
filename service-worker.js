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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7174b2059af70d6fc6d6f5972e7e5ae2"
  },
  {
    "url": "assets/css/0.styles.4568b041.css",
    "revision": "2ed4c8df4ff33bc36857f179247b429c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9b4f8300.js",
    "revision": "6dbfc83ad96d0f81ebd2197a3b79c854"
  },
  {
    "url": "assets/js/11.8511181e.js",
    "revision": "a7cc8f8c63689f312bbf50899c83c819"
  },
  {
    "url": "assets/js/12.86319f7a.js",
    "revision": "c4ff1ff9cc5c96a4d0bff7bb0bf381b7"
  },
  {
    "url": "assets/js/13.d8442be7.js",
    "revision": "a2126c7d0b7fdde151d3946e80cc2019"
  },
  {
    "url": "assets/js/14.bfad0bf7.js",
    "revision": "ddd69a2cdcf26d38e7ad808e207f58e1"
  },
  {
    "url": "assets/js/15.9a4b3837.js",
    "revision": "1d6fb61ea91b64339f11201a9b9c99d0"
  },
  {
    "url": "assets/js/16.8bdba1cc.js",
    "revision": "57298ef3400c76dab5af3be9df513ae3"
  },
  {
    "url": "assets/js/17.6fb67496.js",
    "revision": "4e623b6da2d3dc0b9f7c3591ea1029a4"
  },
  {
    "url": "assets/js/18.daf0754a.js",
    "revision": "ac5ffab1f635bb7f509e5f7809362ef0"
  },
  {
    "url": "assets/js/19.62907eea.js",
    "revision": "2c30819693b0cfbcafe221a2153e6192"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.a7e997fe.js",
    "revision": "f3bc7e8e141a56e57161d081d93cc70c"
  },
  {
    "url": "assets/js/21.b23d6f3e.js",
    "revision": "885db4dc724e2a0f9e6ac715ec0dd674"
  },
  {
    "url": "assets/js/22.e894fad6.js",
    "revision": "61c3263edc3bb83a6b952e600f5db7e5"
  },
  {
    "url": "assets/js/23.f1c8cf11.js",
    "revision": "c728940c0215d12394474772d287b440"
  },
  {
    "url": "assets/js/24.784a8466.js",
    "revision": "c5c4660e9ef26084fb23b2edddc6f28d"
  },
  {
    "url": "assets/js/25.f4c895a3.js",
    "revision": "cabf102a6bb98ddfa0124abd432ce162"
  },
  {
    "url": "assets/js/26.92636580.js",
    "revision": "d2a37f24b7b7e6880ebe7d62844f5360"
  },
  {
    "url": "assets/js/27.fa05a285.js",
    "revision": "c9f60a511abd5192b2044a175f9797a4"
  },
  {
    "url": "assets/js/28.5b53d3ec.js",
    "revision": "c4a92b6cf7e726a18b2a666b746f05ac"
  },
  {
    "url": "assets/js/29.507f92f1.js",
    "revision": "05f7fd4ed32b82acf1e45e5563d08f73"
  },
  {
    "url": "assets/js/3.c95546f0.js",
    "revision": "015098ad26b05f91df9cf99db480d128"
  },
  {
    "url": "assets/js/30.19bf5fb2.js",
    "revision": "e651f56e645e4241e7eb51aec66bf79f"
  },
  {
    "url": "assets/js/31.932c6ad6.js",
    "revision": "1e791ddf79cc02c8a2fbbf511cb7629d"
  },
  {
    "url": "assets/js/4.dcaabf4a.js",
    "revision": "457acf7f9a2fb7643da65264495c9ad0"
  },
  {
    "url": "assets/js/5.b94eaf64.js",
    "revision": "48c5b913070f16ab1a6d0bd248934769"
  },
  {
    "url": "assets/js/6.dd68c987.js",
    "revision": "64b15aee8850c18df06b380a80b53509"
  },
  {
    "url": "assets/js/7.8ce7466f.js",
    "revision": "467d2f1f090a7458127576463e544d65"
  },
  {
    "url": "assets/js/8.935582cd.js",
    "revision": "5d53de071528c8dffb1e1824d69c9efe"
  },
  {
    "url": "assets/js/9.a693e809.js",
    "revision": "d13868dc02f6c6747933fd0145505c88"
  },
  {
    "url": "assets/js/app.34369564.js",
    "revision": "9ece57c801ffe2358550086381a5cac4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "589fc93bdfab8d278f511adeae25fe70"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "683646c10b38fff300dbe0348314ed1e"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "a17d1ed2c8399f9080bdee9b592cd99c"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "88dabbac1b4833be4f026cf5571649ed"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "d4ccac79c69f45b0208fb9ab04f9ca69"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "09abd122e5e2d070eceb9c0d6db75c58"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "b8a1e246da35f986fd7e04c3ff116a87"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "e8fa9b177d877bf53bebb0bf50e1ef56"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "0d93331cf5c7e24ed197e3f72811416b"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "6374a54bc536d651c43bf2dd74260bfb"
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
    "revision": "768cf106f1f94d4a4700182d2e4b1038"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "16f7a824a906f081937155c63f93961a"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "40ee4043e114a979ec20848cd08e739f"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "986264367a7e7df392810be99074bce5"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "9cb0e8a6061be621b65a24678ef51726"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "cb44c102c70e0c3eb5c1b5e05c8136b0"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "855f2372658b4140e45485748610fa70"
  },
  {
    "url": "resources/books.html",
    "revision": "81b81057e53705912d1298b054b741e0"
  },
  {
    "url": "resources/community.html",
    "revision": "51db432ef3f8ff9323e1752f12040dc2"
  },
  {
    "url": "resources/conferences.html",
    "revision": "73cc8253528831a5e6b6de05582d8770"
  },
  {
    "url": "resources/examples.html",
    "revision": "ecc841256fb0aa0766842f6e401b02a9"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "71b8718f616bcc6aa71cf93640cd8c9e"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "152daebac71af0d1a7004f7a76ad3255"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "9a30f76665ffca32c26e88bf8fb2f38e"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "68418503282d13ec1aec93eb735b1a5a"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "e2610f11f60ec6066c5c273cbb0a9157"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "10b6521a9d422484f9e5c63d5e273c59"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "2131089af262f8b94df0bdf702d25d1b"
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
