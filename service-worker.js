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
    "revision": "4c14b10121aae5d9c204a6c0ecede07e"
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
    "url": "assets/js/12.e06c3983.js",
    "revision": "46b5d239fa78cac377066024e65dde79"
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
    "url": "assets/js/16.1406b5bf.js",
    "revision": "ddb5e3b53024e0f0ec07b77dfbdd5a49"
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
    "url": "assets/js/20.8d59ab9f.js",
    "revision": "65240e7d04274bbbcb7bfe0585c1237c"
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
    "url": "assets/js/24.086823d3.js",
    "revision": "683c0633d58871924954898c37d4e86f"
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
    "url": "assets/js/6.c1471161.js",
    "revision": "a428785a43e21f78430b0cb056eb8dfb"
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
    "url": "assets/js/app.f25f5b1c.js",
    "revision": "d11ac3f531b5d43192c681196463656c"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "57347d2a38e2f8c21b5456a96b8072c4"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "8f4392d1478f22c303f2d7a203e9f7a3"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "b658f68cead3cab4f01e2e4a1b357b01"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "86e92c5e916c35eb587424419d61afd9"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "827426dc037196750b3c6a8a747603f7"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "fe0e2bbcec32ef321bbd4d38a9515a30"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "d61b66d9d5881817fc8d445fabbe9df6"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "ede7c9f13dd847c0d0618bc80474ad6a"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "64f5614608ca996d6abb06c265871238"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "49d9f851a46d05407c470c12667c8cf6"
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
    "revision": "e0adc3230e65a80ff02ee6daee503bc4"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "bc100b020ef39fbf452482304982374d"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "2f371150b5da88cba6cf26f384c6c20f"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "1061bd7bf834ca328ffcd359b0b0072e"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "4946984364b05d9aea55c9a9225e306b"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "046757524105c789387c87cc8ef3735b"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "8c519212bcb3aa977a928bc1b5d1fa63"
  },
  {
    "url": "resources/books.html",
    "revision": "ce9ccaf4cd9300d4fac3a76972265ca4"
  },
  {
    "url": "resources/community.html",
    "revision": "3e3603a0de013bade9449846b4a2c741"
  },
  {
    "url": "resources/conferences.html",
    "revision": "92f89cb407cfb285e055677f3f666ef3"
  },
  {
    "url": "resources/examples.html",
    "revision": "b43b9ffb0bcc2117122d410f55932dcc"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "68d9a41426cc85be127c7fe337eda7ec"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "89978b0fcb0b79f753d642dc2d9f6336"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "f128bdce642bfab8bb895329c9cb3020"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "d24a6332c7c01eb65dc3c0582e861121"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "62c2889c9ff9b58c07d9a47122a34fbc"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "dde79e03c8065024a23ec80c76337e75"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "499367231cef62b0353ec72cd67a1edf"
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
