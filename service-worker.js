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
    "revision": "584367447492c04b923a834101699ddf"
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
    "url": "assets/js/10.1538d419.js",
    "revision": "0c760752f706f17cdba1241b32d763a4"
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
    "url": "assets/js/16.b9a4b39b.js",
    "revision": "4a967cfe7f192f3cfada860943f2e9c7"
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
    "url": "assets/js/4.dcaabf4a.js",
    "revision": "457acf7f9a2fb7643da65264495c9ad0"
  },
  {
    "url": "assets/js/5.96cb6c7b.js",
    "revision": "f10240b2d97a6e7f98bf1790d1a8e3f0"
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
    "url": "assets/js/app.66ef0bb5.js",
    "revision": "918dda7e0f284828646653198a01434a"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "9efdb5f6251aad7f01e4b18c7b20ebec"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "17d581f490c167683dc2b4eedac6b7e2"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "33cf5a481ed572310987fdc40be89f52"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "e04fc0b7fc32139ef498acc04b984447"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "b9d3bee027c2b9341f2bc7daed6155aa"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "0a5b755ccd5c88919a42dbd540344ebe"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "c772f10a82aea8972e145bf7220e0e60"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "a46fb45bcf305ab43892bc6971137f3e"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "ce8135acc4e14c05a1f9eaf0daef93fa"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "cee33728f42e7d2ca61385dc22bb4d8e"
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
    "revision": "21d2e8d6184e009c0ed3d0e89089e3ab"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "16e971243d3c0548f7a37034b2dfe444"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "cba4f1588e6c0bb86a243fa1bf116dae"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "fb7295b6fd5c7385628d7b205938fb98"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "70c957511e2535c8da1c44aef2285d63"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "21bf2f5d0ce67abfc9dd7d6d29a251a6"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "e0b16a40853a2d51e0767d67ed390a1a"
  },
  {
    "url": "resources/books.html",
    "revision": "2005ab943f040596deaa3def556ccea8"
  },
  {
    "url": "resources/community.html",
    "revision": "af74543393b315208e36aa624703a378"
  },
  {
    "url": "resources/conferences.html",
    "revision": "041d7e14bd25b0933e8e210999db1db8"
  },
  {
    "url": "resources/examples.html",
    "revision": "aede4f0a8892ec5df115583d393ef2e4"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "f62a6c39ecb63c7fdd727c79188694e6"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "1fcdbc0d77eacd0993fcf8ad1733fa46"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "023b3cb3ddc7dd610209986b11021017"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "09e9722ad834a86fea35f94c1d18b287"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "9cb63a35701d2236b7702bfc0fb8db71"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "1670df462cd6ffce004ad29dd0fbc59f"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "6d23e69db19eacb5439e3fa53d604e59"
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
