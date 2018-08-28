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
    "revision": "0342a55b09a3243ef3f191d4bfbae66d"
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
    "url": "assets/js/10.9b4f8300.js",
    "revision": "6dbfc83ad96d0f81ebd2197a3b79c854"
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
    "url": "assets/js/31.96a97c36.js",
    "revision": "9e5a7ff3ca9789f417a09254ec1af5e3"
  },
  {
    "url": "assets/js/4.dcaabf4a.js",
    "revision": "457acf7f9a2fb7643da65264495c9ad0"
  },
  {
    "url": "assets/js/5.b94eaf64.js",
    "revision": "48c5b913070f16ab1a6d0bd248934769"
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
    "url": "assets/js/app.8228ea0f.js",
    "revision": "ea80be5b6cc9b26b80d56bfee0b791e5"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "0ca31ac6a61a142d42b8ca47ff6bd399"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "7eb49cf3c19845ea9da4bb341a93b115"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "613a847eb4bbd8b63ce8372b87fea948"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "478a503d26f71fc83922c7dfb428441c"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "8a2ff3d103cbc5c86d7d767be8c64ebb"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "1a513cb4e9275c7f09fc36597ab26c42"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "40f265b8e6e3955d1ac6656287ef8c92"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "1b7f35e142daa6e1ce11b760d23661a0"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "b0b4ed2e47a6842b646f00d0579ea377"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "c45ff074f858bc0d4d48dcc9c3eaa557"
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
    "revision": "8a1f2cbccd159a83f93f004b642b847a"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "639f775e4a5a0e729fd1d5cf63fd24e0"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "c67b73165ff79fc44d9eac03d5767850"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "681c64b78a3d36dca2c69855d39c0cb9"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "6397a2384ac47584977eb8c11958e4bd"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "b466ce26dc00125b18376b8094133376"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "445034e412ea4e68b54dd94017d8bf30"
  },
  {
    "url": "resources/books.html",
    "revision": "c28d87326aeb5df16ecb598793802a77"
  },
  {
    "url": "resources/community.html",
    "revision": "7456a292739b8023464afb242f4b77cb"
  },
  {
    "url": "resources/conferences.html",
    "revision": "ec98cc6224329f5fae9d2789fb0ffc1a"
  },
  {
    "url": "resources/examples.html",
    "revision": "4a05725b13e795d7d595f127b87b5951"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "4aa13718be7efccfd52d030b095b20bb"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "ebfa291773f1e3bcbfa970a931f5ecfc"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "9c0665fd34469e79f0a4181ae0ebf641"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "f6675f4e5b57c9af30d21a18cba6ddfa"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "19e5441868417b0e39b93885fc2cfd8c"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "8ea959f2dbfab8d691e9a892f0163c49"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "7d78e6d4478892bda0100ddc02b01b6d"
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
