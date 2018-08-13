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
    "revision": "25a5c30838752b7e977e2c760d84d78d"
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
    "url": "assets/js/10.7509adce.js",
    "revision": "b0cccfcd385a065a57f420c32c567004"
  },
  {
    "url": "assets/js/11.baa5ea78.js",
    "revision": "a7cc8f8c63689f312bbf50899c83c819"
  },
  {
    "url": "assets/js/12.7133e9f4.js",
    "revision": "bb5155350c558468e222f82ae76702bc"
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
    "url": "assets/js/16.f2fbe11b.js",
    "revision": "4bbdb0f6edc3a7d8d6fea5d3a3292f08"
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
    "url": "assets/js/20.bd1ac104.js",
    "revision": "18958491ee3c35b1be578a4835f32c16"
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
    "url": "assets/js/24.60df7ba0.js",
    "revision": "d9a4763fdb1cc2b35ec733cca180bd7c"
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
    "url": "assets/js/5.52784b3d.js",
    "revision": "7403d9dea32cbf8e7bbba4ea97ee757f"
  },
  {
    "url": "assets/js/6.788abd9a.js",
    "revision": "537a3733bd715e6c2c48a32c747195ee"
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
    "url": "assets/js/app.670a0e4a.js",
    "revision": "082e1bf580630d9ead0bed50498ea304"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "51f7a09e6c6774cd94848e0974607b07"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "42a9227117c499af106658c8d04cfd08"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "45b6b23442361540ae5810c0437af48a"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "fa9be5917f5eb01e9df728446d68b42b"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "8bc4fe7514c7b6511e62a69e592354fd"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "2ee9bc7fedf41e9165ce36c9cb1c4cf8"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "1af417b831a6b6c2e8464ccca507621d"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "12cdefeaa2aae0064c826e6fb73c0d96"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "4fa41822b308cbf4ba5cea8fb4442bf9"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "6cf97f598b2f5e2bb9e0d793f64180af"
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
    "revision": "654347385be2594a991a9ede32076f6a"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "d013a89d23be43d12c3308ea47b29673"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "fd1cd3803da3d426c81003cff0c61d40"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "815be89f5229ae2125d5eb05843579ce"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "f385171f025a31d2014fa18128df86b7"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "bdb58879e4c3fb9a5a4d751b6399bd21"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "31e74f334d179e5cd537b5fb357bfbb2"
  },
  {
    "url": "resources/books.html",
    "revision": "d5c9f6437d0078210a023f4697bc509e"
  },
  {
    "url": "resources/community.html",
    "revision": "acf12b7a5a06937b55279b358dc69065"
  },
  {
    "url": "resources/conferences.html",
    "revision": "80a1680eeaaa355593e9996ee3e7f113"
  },
  {
    "url": "resources/examples.html",
    "revision": "272831d3be5116028ad9b7cb555da6ff"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "de1bd3dd6a39177328c3ac3a6689ea9a"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "81553d93ebbab00f63a69fe45b8510df"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "82b298f742747e9a22c41495d7652171"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b6555bc0f731d696b10b7806e3f1b2d4"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "c9f0254f8f88a0c8f47b8663b743650c"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "b54cc54ee441102cc1f7e83611a58d57"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "51ff9cfa3d9fefeaf693f869ba14db32"
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
