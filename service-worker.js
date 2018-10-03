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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "57f4f1589103e2e03da6b2a8f6f5187a"
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
    "url": "assets/js/10.10688bf1.js",
    "revision": "5de20c4499184a995e3251d6ab44a51f"
  },
  {
    "url": "assets/js/11.01052310.js",
    "revision": "7c387df7732ec372bfb5c9c4eaae238d"
  },
  {
    "url": "assets/js/12.ed13b2ea.js",
    "revision": "2903dfac51b471c00d7403ab29259c52"
  },
  {
    "url": "assets/js/13.3b356c44.js",
    "revision": "7e8b789562daa6f22188e065fc5531f5"
  },
  {
    "url": "assets/js/14.93f756ee.js",
    "revision": "ddd69a2cdcf26d38e7ad808e207f58e1"
  },
  {
    "url": "assets/js/15.c8dfba58.js",
    "revision": "3ee6b6c906aadfca88ecbc13eb319f14"
  },
  {
    "url": "assets/js/16.120eca33.js",
    "revision": "49c5a4b499fa1b90128aaa77e983a3cb"
  },
  {
    "url": "assets/js/17.c1fc16f7.js",
    "revision": "3bccd000a8b6c6f02b419388b6b73172"
  },
  {
    "url": "assets/js/18.13b5d9dd.js",
    "revision": "ac5ffab1f635bb7f509e5f7809362ef0"
  },
  {
    "url": "assets/js/19.133c19cb.js",
    "revision": "2c30819693b0cfbcafe221a2153e6192"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.dca0b1a5.js",
    "revision": "8760d76bc4df551bf3f1d6f734cd7d06"
  },
  {
    "url": "assets/js/21.7fa3ee31.js",
    "revision": "885db4dc724e2a0f9e6ac715ec0dd674"
  },
  {
    "url": "assets/js/22.d513bc7e.js",
    "revision": "61c3263edc3bb83a6b952e600f5db7e5"
  },
  {
    "url": "assets/js/23.4b16f434.js",
    "revision": "c728940c0215d12394474772d287b440"
  },
  {
    "url": "assets/js/24.b9c0dcf9.js",
    "revision": "bffba72a3febf0805e3c8d04d5dcdcfc"
  },
  {
    "url": "assets/js/25.f3b63587.js",
    "revision": "cabf102a6bb98ddfa0124abd432ce162"
  },
  {
    "url": "assets/js/26.faf88382.js",
    "revision": "d2a37f24b7b7e6880ebe7d62844f5360"
  },
  {
    "url": "assets/js/27.6327f0cb.js",
    "revision": "c9f60a511abd5192b2044a175f9797a4"
  },
  {
    "url": "assets/js/28.0be95cc1.js",
    "revision": "c4a92b6cf7e726a18b2a666b746f05ac"
  },
  {
    "url": "assets/js/29.80088a5a.js",
    "revision": "05f7fd4ed32b82acf1e45e5563d08f73"
  },
  {
    "url": "assets/js/3.d5d373a3.js",
    "revision": "015098ad26b05f91df9cf99db480d128"
  },
  {
    "url": "assets/js/30.a0c22aaf.js",
    "revision": "9392ccd9ba1db9624392c3ee7fe56527"
  },
  {
    "url": "assets/js/31.ed6f11c1.js",
    "revision": "9e5a7ff3ca9789f417a09254ec1af5e3"
  },
  {
    "url": "assets/js/4.1f039718.js",
    "revision": "a2d808084382be4b996d834186845884"
  },
  {
    "url": "assets/js/5.03ee6508.js",
    "revision": "09c3cedb8e3dcb878e6e510e8c159bbd"
  },
  {
    "url": "assets/js/6.b11a1b35.js",
    "revision": "f840f89bbf1d60c9e10054e5baf53348"
  },
  {
    "url": "assets/js/7.04a53379.js",
    "revision": "467d2f1f090a7458127576463e544d65"
  },
  {
    "url": "assets/js/8.e5fb2339.js",
    "revision": "5d53de071528c8dffb1e1824d69c9efe"
  },
  {
    "url": "assets/js/9.3f3c3ad3.js",
    "revision": "d14c8056b9b4d6cb82092d3b1ab98154"
  },
  {
    "url": "assets/js/app.3a01beb5.js",
    "revision": "dc90a9c02442f481733a0a4cba4791e2"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "275de16d1b62a36f6b95b664d37d0c89"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "5cf3844a0af760c3f310b4d8f0b4c96b"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "8d67e45d0009512b436bf49f3d808cc8"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "d703943f5187714a1689712010ae5fa1"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "88022497ea5c8ab173179742a182ed29"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "df8396bac670e39c3627be29fcc15817"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "24a906e5af7851f51d818db84c3852e3"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "2d10ac08693aa9711276268cfeea0143"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "9bd75b90c8365e363d19491487691672"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "e82a99b7d9076a52bcd66c02a0a513f3"
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
    "revision": "cbe89fd68f4a9898c4618f1a9ce3c3c6"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "905e36b017ea59307cacc01b1c2789d7"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "cee55ed9bcaff1901e10ccec4a403b64"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "a4aa71221ed7f7c2e4aa171c882d8ff9"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "88c1821883026968bd54fbf00b6905c8"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "b494ebc6e2c18f3369d6d39c352d3cb9"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "4d2da41c58a11028ca641482791128e5"
  },
  {
    "url": "resources/books.html",
    "revision": "e75fb21bb7606dfc643d3f7da13534ae"
  },
  {
    "url": "resources/community.html",
    "revision": "1348dcc69792f10e0e254b0db4ede1f1"
  },
  {
    "url": "resources/conferences.html",
    "revision": "b643633055a6e647e277b32cc8551a0a"
  },
  {
    "url": "resources/examples.html",
    "revision": "9944004fdbbf0eb25c6eafd125814dbc"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "41c00de9f81b3f4922b3ad593bbb23ef"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "5d43f840038cba298947d508f853e574"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "7745bc15caba48b50fed0adec5bae58a"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b0a64ce771f9e1a928feb3591f13412b"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "0f49de02c45a46d578657288255b7e5f"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "ee39a6d857270acabd4f087fd669b1d4"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "acf71f45a7e8d7fbdb2b0c184bcc4c43"
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
