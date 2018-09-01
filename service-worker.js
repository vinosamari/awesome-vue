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
    "revision": "001da8b00db7ce355632d744df577751"
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
    "url": "assets/js/10.91d6a2bb.js",
    "revision": "165331cae140d3bd2c4241df7a93e3e3"
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
    "url": "assets/js/app.7353ba77.js",
    "revision": "a7d6a059a75e369a6cea239ac349115b"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "4ce4a7609d112e87b85496ef5eeec3e5"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "849706fe235affeffd27547a73825e56"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "b4e29cde7d8852a3186cc63a99f4be33"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "998224b77f4e0bd3218611eeec25ddf4"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "89072dc82e0fdfebc92f95c1fbc41142"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "fdd77ec6c66d75084c23a82b9c4e8e08"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "b1f07cb2eb1de6ffd2f626967e941dc6"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "a2b6a14d7ef3df1a73543fb0a255e4d2"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "1f295a0764732996e242aa906fc4f7b6"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "81dc1bb1a2c37412c6c60925c408a260"
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
    "revision": "eba3759d67ca8ed7a10521d1b43b8cb0"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "2f8b5d9f642c6608a5a965eeffd6ef81"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "82d020fbba97b0492d2288aadfe2bc1e"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "1e37a8c300d91797390aeaac6550d7d5"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "9acac0f814f215517579761bd28813b5"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "c42960fa5e2c240b457d047ddf9338ff"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "2f23ffd1d4107675f00a041ed039165c"
  },
  {
    "url": "resources/books.html",
    "revision": "8a1f0c5f0c3d910ba5013b4475ae78ba"
  },
  {
    "url": "resources/community.html",
    "revision": "00111bda04a1b0fe065e31b2c864821d"
  },
  {
    "url": "resources/conferences.html",
    "revision": "ca4e1d2ec5f64c739741043e3af3c08a"
  },
  {
    "url": "resources/examples.html",
    "revision": "a2a232d21cc954793f1ef981b468daa0"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "226a1cb7d6a2f742d1a81d885891ffa9"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "e6b97e0e4ab4e9076a51f3418ad3fa83"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "33bd4fe84e9524a9a678d44df7a684fa"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "25f5c9ccc9820bcd572cecc437114d33"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "ecaabb91c18c349302fa6df738b57a58"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "51dffc116c8881b6f48aa395736cf6ce"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "72027f2ca2e216b4df53046b1a605608"
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
