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
    "revision": "13fcd1c4ec78d44412734f1440c6c42d"
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
    "url": "assets/js/10.419e395f.js",
    "revision": "23353514b3c74420c5c6e142acf4efd7"
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
    "url": "assets/js/15.ae3d843d.js",
    "revision": "3ee6b6c906aadfca88ecbc13eb319f14"
  },
  {
    "url": "assets/js/16.83cfee0f.js",
    "revision": "9302d008c73960eb6620e337668247fb"
  },
  {
    "url": "assets/js/17.e35ff57b.js",
    "revision": "3bccd000a8b6c6f02b419388b6b73172"
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
    "url": "assets/js/31.96a97c36.js",
    "revision": "9e5a7ff3ca9789f417a09254ec1af5e3"
  },
  {
    "url": "assets/js/4.2cafdfbf.js",
    "revision": "c0f55ceccd0df82b990fa87b0b601b2b"
  },
  {
    "url": "assets/js/5.18082fe2.js",
    "revision": "727cb481a15361d586f961469cfaaddb"
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
    "url": "assets/js/app.15b4f081.js",
    "revision": "571273d413d10ec5a91c6619f34d93b8"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "f3ebe26301a8d3016d7ce669a1126cd4"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "8beec8d16884aec45c90e51ee8db866a"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "29d2189dafe659bc44854d37fc9a6f3c"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "6b7dda0cced919b2dc46aadefc2d3b6e"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "1035bfe70c3613c986d010aeb4dcf9c0"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "6a3590be164c324b35fc2891cb630ff5"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "dfd96a38fceda17fe2ec2f15ac4a1ec7"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "c6f5a3b0f95d10d43d2eb16ee0026ec3"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "a3af90d5bcf1afcea31116c9a28f92e8"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "276c5d632f3ce924c274302429d534e7"
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
    "revision": "d5d0cb6e3179b6a7e78dc339526e2bd0"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "416e7df5568269b50d0bcfa95198cba4"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "657d696a36143c2004da31bfcfcaa006"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "4a6eafb4c83dccc011af33c4ecc798a5"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "79441c43da248f3f5701b75146b7fa8a"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "6261b4c0ae6788e866606dfab6c4c689"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "cce447e66d2fde83b1b77a36670621d3"
  },
  {
    "url": "resources/books.html",
    "revision": "a6ed12912396b4c64499a7f2a3cb11b9"
  },
  {
    "url": "resources/community.html",
    "revision": "0f1f71d76ce7568c1852213028a3f354"
  },
  {
    "url": "resources/conferences.html",
    "revision": "1ee295f5cdd65d88a83d92631f75d37c"
  },
  {
    "url": "resources/examples.html",
    "revision": "82180218db299c50b6ef1994bfcff559"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "1534ca04e4445d5b3958a83957c354b9"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "ab08d41bade6ab87b3cdef7755e29859"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "8d8c40a5829d46bb9289f81e7f7cc2af"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "72cd47a51bdfb7e981d2a04c8f8d6251"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "9ebc87eac274dd17dfa26a15b06bad48"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "ee5d9a201fcb4b6e3b4ee0ab674ee575"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "d5ea79df85284bc18fd55b56c796a6c4"
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
