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
    "revision": "0f468304afd76c2cf2c9898b15685f5f"
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
    "url": "assets/js/10.5df994de.js",
    "revision": "eb95dfd0f6c3e4157536f212c53a5da6"
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
    "url": "assets/js/13.f864d01a.js",
    "revision": "9c32e2e53775114545dc68daf5f3678a"
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
    "url": "assets/js/16.67f92b7b.js",
    "revision": "a6188da72e9556dac733be1b1963c9f1"
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
    "url": "assets/js/20.37da5dd7.js",
    "revision": "ec8842a17b7dd07c11f42b44a4ae5486"
  },
  {
    "url": "assets/js/21.e2a77783.js",
    "revision": "fdaf38eaa775d6d7ba5dfe03bc33a7c3"
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
    "url": "assets/js/5.bbdf5c0e.js",
    "revision": "b76b4ceb8836f04d16c3c2b8f8e57490"
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
    "url": "assets/js/app.9a99cee1.js",
    "revision": "2e59805c690507942fa09f461e636454"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "c813c1c84a8bd05a65d76e723a1540a0"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "359c30a3ddbe88d08177c9a8ca16535f"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "3499262561568c5d44e5864b422330af"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "f20ff27926e6cdbf22511d91224b32ca"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "35fcc5a1d0f4b5f7938031171ed41163"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "1930b5ff6419eb47e4db83376fbfd6d9"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "9e124c62813f15ef247476028fd70bfa"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "ea06058f900b4dbaee3f059c7d7137f6"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "91f4db1b042c11dff3710810594b6e37"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "2486fb3f89ec12eeddfbfdd7febff5af"
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
    "revision": "27760144015af39b455e83d5b15ee6b1"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "8ade399e21ab40f5294654826521a262"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "c5e9178121958f2c034610c30db5e946"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "8ab14de09cc5e162e041ae94cc3516c6"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "819e85b019aeb943c6258a10e6a32472"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "11f556778ef1622329023d14b5568a12"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "4a3b760a7c061c8424420cf90606e7a5"
  },
  {
    "url": "resources/books.html",
    "revision": "08b275ef596fd41d377c595406f725ed"
  },
  {
    "url": "resources/community.html",
    "revision": "cf84d7e2b21540b939ca8070b5f9b8f8"
  },
  {
    "url": "resources/conferences.html",
    "revision": "faa4dd9c374d0e8152485c787ea0050f"
  },
  {
    "url": "resources/examples.html",
    "revision": "33846c183389acd86f837af26df9569f"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "6c0b26a8f5b2387d3e278c17dd381811"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "4fde4faf7d1905c2a10b3dccd92e4a2a"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "6ccc72de521dccd3f378f02ef50cb07f"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "8d39bf923d1cd91667dec049023540b1"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "ca09106a26a37ba85f9e3e77522d9ea9"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "e988a4ed820bd9fcdeef0eeabfd94f9b"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "344c8ae0349d623b102ce15de38f8fc6"
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
