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
    "revision": "774a0228333318f4101c538807d3f0ff"
  },
  {
    "url": "assets/css/0.styles.4568b041.css",
    "revision": "e0cf3df08a028ac5a6343d0dcc58705f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.04675939.js",
    "revision": "eb95dfd0f6c3e4157536f212c53a5da6"
  },
  {
    "url": "assets/js/11.baa5ea78.js",
    "revision": "a7cc8f8c63689f312bbf50899c83c819"
  },
  {
    "url": "assets/js/12.690bb973.js",
    "revision": "c4ff1ff9cc5c96a4d0bff7bb0bf381b7"
  },
  {
    "url": "assets/js/13.f4e10434.js",
    "revision": "9c32e2e53775114545dc68daf5f3678a"
  },
  {
    "url": "assets/js/14.1ed68365.js",
    "revision": "ddd69a2cdcf26d38e7ad808e207f58e1"
  },
  {
    "url": "assets/js/15.bcc09a9d.js",
    "revision": "1d6fb61ea91b64339f11201a9b9c99d0"
  },
  {
    "url": "assets/js/16.182b699f.js",
    "revision": "a6188da72e9556dac733be1b1963c9f1"
  },
  {
    "url": "assets/js/17.4f24890e.js",
    "revision": "4e623b6da2d3dc0b9f7c3591ea1029a4"
  },
  {
    "url": "assets/js/18.0e732ad0.js",
    "revision": "ac5ffab1f635bb7f509e5f7809362ef0"
  },
  {
    "url": "assets/js/19.c1456460.js",
    "revision": "2c30819693b0cfbcafe221a2153e6192"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.5bd34b47.js",
    "revision": "ec8842a17b7dd07c11f42b44a4ae5486"
  },
  {
    "url": "assets/js/21.f1e01005.js",
    "revision": "fdaf38eaa775d6d7ba5dfe03bc33a7c3"
  },
  {
    "url": "assets/js/22.98bb2cc1.js",
    "revision": "61c3263edc3bb83a6b952e600f5db7e5"
  },
  {
    "url": "assets/js/23.fdcf4638.js",
    "revision": "c728940c0215d12394474772d287b440"
  },
  {
    "url": "assets/js/24.3c66af90.js",
    "revision": "c5c4660e9ef26084fb23b2edddc6f28d"
  },
  {
    "url": "assets/js/25.dafcde78.js",
    "revision": "cabf102a6bb98ddfa0124abd432ce162"
  },
  {
    "url": "assets/js/26.f66d5df5.js",
    "revision": "d2a37f24b7b7e6880ebe7d62844f5360"
  },
  {
    "url": "assets/js/27.e702f008.js",
    "revision": "c9f60a511abd5192b2044a175f9797a4"
  },
  {
    "url": "assets/js/28.3a7e5307.js",
    "revision": "c4a92b6cf7e726a18b2a666b746f05ac"
  },
  {
    "url": "assets/js/29.aed8e699.js",
    "revision": "05f7fd4ed32b82acf1e45e5563d08f73"
  },
  {
    "url": "assets/js/3.c95546f0.js",
    "revision": "015098ad26b05f91df9cf99db480d128"
  },
  {
    "url": "assets/js/30.9f022b96.js",
    "revision": "e651f56e645e4241e7eb51aec66bf79f"
  },
  {
    "url": "assets/js/31.d9b9035e.js",
    "revision": "1e791ddf79cc02c8a2fbbf511cb7629d"
  },
  {
    "url": "assets/js/4.238536ff.js",
    "revision": "457acf7f9a2fb7643da65264495c9ad0"
  },
  {
    "url": "assets/js/5.e2cac9d3.js",
    "revision": "b76b4ceb8836f04d16c3c2b8f8e57490"
  },
  {
    "url": "assets/js/6.213b8ef2.js",
    "revision": "64b15aee8850c18df06b380a80b53509"
  },
  {
    "url": "assets/js/7.6b996cb4.js",
    "revision": "467d2f1f090a7458127576463e544d65"
  },
  {
    "url": "assets/js/8.145918b9.js",
    "revision": "5d53de071528c8dffb1e1824d69c9efe"
  },
  {
    "url": "assets/js/9.69413eb7.js",
    "revision": "d13868dc02f6c6747933fd0145505c88"
  },
  {
    "url": "assets/js/app.7a923d66.js",
    "revision": "18c270ab8be76c797416e3f289300c7b"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "92f8e33edfebc5453e600a8875f88370"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "f61ef4167481d4058312d974047d8752"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "c81554fc93bb6edaa079565ca4b5b694"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "41a4ad5bd9a60dcaf914ae8a589e6ca8"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "9cb66517f8ed840d1f2bcf51924906f3"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "d4e03b24eb2eb74589faef77a2ff7837"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "434959ea82489862b791954dba3f609f"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "f2741cb073744ecc8418bbe38214a769"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "9fb12538af65f2f19884022b7ddcc8ca"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "57fe4dbb57e7212aeb4cb3a364eb6048"
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
    "revision": "736b3844c7fde294166518b05727cddd"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "7dbf2ea659c057a9d75feed84f6cda9a"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "9393acdcaf1ae32a4af9cdc336384e05"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "554f190ab9cc7466f54ffa31a30ebd54"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "b0f0c747d4ea0d5eee0897ea97185e93"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "dba4fafb7ec9ee4c2d7014d7fdf99243"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "cf0f927acfa185347c54d01236b00497"
  },
  {
    "url": "resources/books.html",
    "revision": "ea8669911eaf43a522a41e338332e662"
  },
  {
    "url": "resources/community.html",
    "revision": "0b7793f9b783fa9725752436d02ecae1"
  },
  {
    "url": "resources/conferences.html",
    "revision": "c5e7d2acac8380a91b8159a082274920"
  },
  {
    "url": "resources/examples.html",
    "revision": "ed83f69a9254cfc9e6ec47db45bf7dcb"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "29c70735d61c53da72fd4c87ccab7aec"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "1e512393a2f31eeae8626192eea09592"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "b8620b1df519eed573c438c4f981d17c"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "8e65e1cf8435867e331774de579eab89"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "10efc80a1ede1fd9001ee75e67e9773f"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "4b362a493d27d6c8fe5f63d2c4096d5d"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "38606d84240937030b13a560611059bf"
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
