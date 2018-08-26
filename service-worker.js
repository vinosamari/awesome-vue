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
    "revision": "6ed8da4008ae03e63116f63874324917"
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
    "url": "assets/js/10.589cb766.js",
    "revision": "ccc0f3990f277d6ff222ef7a0b650b91"
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
    "url": "assets/js/app.da108ded.js",
    "revision": "46252852a2c08ebefc0a6241eb5c54e4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "f5990ffcbf7d734dcbf2264ad4dea704"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "80716a258a0c738e30de70a92becf2e8"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "16031cecec833deb7f870baa58736673"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "c427f5e86aacd13850dfb957f8479141"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "f4377d186a62b55d72d445ac6662b0ec"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "525ac9f266673cb693f4f94a79dfbbe9"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "22805b44a8631ea603a4332d7ae39fe1"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "57db892d5066d81c811643aed0294ea4"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "5d71c8a5494ccef139dd8aee3659df7e"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "eb2c8fd3ce33e8967d7cb21b68ad9648"
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
    "revision": "10e4d9541b1ab495f0c4fcca7fbe95eb"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "e991af9cfec5b7a5d31b276d923c7ee2"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "a9262831cf25468b33951193ec56052d"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "1150a95f6a26918dc953386878b918c2"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "4a68d260c636bfc3c91335542d328ec7"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "4c05118ddfd2b8c0c42d332e75f78323"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "18be0b3c4f2a3fd242092220e8127020"
  },
  {
    "url": "resources/books.html",
    "revision": "30c1d3ac930e219a6e9eb2dc7b9fa169"
  },
  {
    "url": "resources/community.html",
    "revision": "8b6c604699e99157d7d7dc7c8686f1df"
  },
  {
    "url": "resources/conferences.html",
    "revision": "4a00259475e69d1180cd7745a7b8d56b"
  },
  {
    "url": "resources/examples.html",
    "revision": "af7de1b03b757e4525506b3ca6b81317"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "fa74713d947c7da15b6433aa8c0ab480"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "b1a30ae5eceaece98fe008ba0ea8f50f"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "03e75a44e7f01b2b09603a9a683fc0fd"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "5e71034bb67ee5dfbfcad45280f32b24"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "e9bb1af535741ea6e7983edc562b8a80"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "acece434177ebb801e372a48260e9db5"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "ae291a7d06fa82f58a3268d6705a3bfd"
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
