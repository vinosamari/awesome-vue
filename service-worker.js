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
    "revision": "1743c8a5775d264f53d84d5d0428c59e"
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
    "url": "assets/js/app.70facecf.js",
    "revision": "f6d91da13de29b0c9ad6953ce703d98c"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "5cac713c367b2339c4fea2ebc84c8121"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "73882c8b2eac378458d6d543117ea0e4"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "d3f203c18558b3586991b6a42688e268"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "3affaccf33a76b092fd69909a9c8fc18"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "2525265b16fcca88ffa09182c858bed4"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "de95dd575512ef64822bc18c7678837b"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "b5f02bf5735a52d2d43bd757b07527f0"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "e6d1c9ebaa833befca0573a1374f152d"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "7a5df5f5c92f8dbc3a17c5764ba86558"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "93051e7ee3061d877f3fb2e29c85fe73"
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
    "revision": "58e70e4c87c5471c0ec2d5456d657161"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "df3b3d1335cc68c67caf0eb91e851ff6"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "8c989b7fd12de43a961b421391b4dab3"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "29666e91db1407abd16f2eee2a6705cb"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "4b9b75e62eb6639d78657e961e38aeb9"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "05a9c6a27f85a2a87b45f8bcb6fb5591"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "0b13f226e59cfa101521337633bf7a5f"
  },
  {
    "url": "resources/books.html",
    "revision": "ba6a7c7073be04afa75039d1b195e143"
  },
  {
    "url": "resources/community.html",
    "revision": "dffb93d108378233a00c022951bc3da0"
  },
  {
    "url": "resources/conferences.html",
    "revision": "dfccd3bf2b8ee98bf56a1f0ab9817e9e"
  },
  {
    "url": "resources/examples.html",
    "revision": "7c1ff9bdfa780c9a3826f23269a9a53a"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "523e0733c9caf1dc5576b358a96c8a25"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "a270a1f9c5ac19fa07258b756d2db30f"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "a62098bb93aa4ff2a333076af5c66dc5"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "e1d7145c2cdc6d9ee0a4e5ab30cdd0fc"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "fc9fb6511d249cedb780f5dfbc8b4ad1"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "b81388f769d6a82e54f305de467050f7"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "7cfd2d65b7498e6cb292764957cb8c47"
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
