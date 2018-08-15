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
    "revision": "9c7090af659531a0a067817ef3bccd6b"
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
    "url": "assets/js/10.3885ed7e.js",
    "revision": "c337adc74080aafbd3ba11c970188bea"
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
    "url": "assets/js/app.3aef7689.js",
    "revision": "0a60739d2bf53cd82ad8caad00370cd5"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "f274aeb8eb0b22d1ca946841609af2ef"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "9f1bb7a45d097e7761e7c381df357ba2"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "c4b73feac9859df05c2a5fa9647df66b"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "e8a512332f5a488a948dfd8b0379b71a"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "cd03372dbf09362b570c21829a026230"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "219d69651582274ae1793ab8241c2fbd"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "2cdd66e088d7cb6089f17422a01fcc0d"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "08ae69a3b8f878402de61481fed0c197"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "902d589f9ca536981670df9ee5f934ae"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "e646f9fd737b616aca89ff999a027608"
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
    "revision": "e758a1fbacbc2ee590c592fb300e1224"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "002c01ee715d56165965cc0d701b8107"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "4c8b0bae8d11a2a2055541f9775b2d06"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "b3bf196a929acd8c4da57e1bf1f415c6"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "f14bc83ec51363171302d4d41dbbfcb0"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "d24192ed762cd250d3901129fe3c3b14"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "b128c28bdc78b0ffc883ed2a77d05179"
  },
  {
    "url": "resources/books.html",
    "revision": "8f291eca8a8df67e9db051019b931b46"
  },
  {
    "url": "resources/community.html",
    "revision": "11af30743a2d85844b8b004188ae2038"
  },
  {
    "url": "resources/conferences.html",
    "revision": "40868a0e2c0c7a02f1f169ebac002840"
  },
  {
    "url": "resources/examples.html",
    "revision": "37de3d1a3b834d608ac55716a52bfa4d"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "262ef69606f65f4036ee2cea5b7e9980"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "fab6cde22f71b44717c615827ec0e85b"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "8c7d13990a5e90ff5a5d3c6541b059e0"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "ba7eeab3754b2bc00ba8ff4094bee1ae"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "31ee79fc3250e4592cb9da73d7014d33"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "1f402e15fc6470a8f905abe06305ad16"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "5e980ec60c3b78d037925f3074bf72be"
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
