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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c5b607fdcafe57a7f696ad0c77eb15a1"
  },
  {
    "url": "assets/css/0.styles.bdda569a.css",
    "revision": "c024588bf133710af070a4beb6bcb5f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e1cce948.js",
    "revision": "9891ba43d490c4513dc4bcf330de0448"
  },
  {
    "url": "assets/js/11.d43657c9.js",
    "revision": "90b19d2a423b66a60d165657657e2f99"
  },
  {
    "url": "assets/js/12.9abfacbb.js",
    "revision": "db1f5b8cc854a821449b88a3d9ff6c75"
  },
  {
    "url": "assets/js/13.125dc3cc.js",
    "revision": "8fad548ad70cb55fdaec01c1bb4b624e"
  },
  {
    "url": "assets/js/14.383b7982.js",
    "revision": "fa98a64c51ba7d3e3ad5c90dc5939589"
  },
  {
    "url": "assets/js/15.03a040d4.js",
    "revision": "0e44b0d5eb36237598183ca58fd066d7"
  },
  {
    "url": "assets/js/16.e90410a6.js",
    "revision": "83d0e72a9d00202552df22e01a9ee766"
  },
  {
    "url": "assets/js/17.68ec3122.js",
    "revision": "b7a6e050a45fab40b1f16978885a65e5"
  },
  {
    "url": "assets/js/18.7af7182b.js",
    "revision": "14b0d42a9f6047fcded86135d5083b18"
  },
  {
    "url": "assets/js/19.2cccac8b.js",
    "revision": "6986b5364c28d6363a6196fcb4c4c1a1"
  },
  {
    "url": "assets/js/20.ab0309ce.js",
    "revision": "8bc0ace4a030ab0e71a564a548bf75b5"
  },
  {
    "url": "assets/js/21.3d069eca.js",
    "revision": "095bb54f31aba361e3c410d618b0ec93"
  },
  {
    "url": "assets/js/22.9ab3724e.js",
    "revision": "c161b128c5eb7985c6dcd221b739679e"
  },
  {
    "url": "assets/js/23.e5e52aef.js",
    "revision": "8429ea5c5d10caedf62e181cfbf86737"
  },
  {
    "url": "assets/js/24.5c8ea490.js",
    "revision": "3bcc903e2bd0045007aceaa28f72e029"
  },
  {
    "url": "assets/js/25.77a198cd.js",
    "revision": "596f221981e9e05caa587a7ec419260d"
  },
  {
    "url": "assets/js/26.2928697e.js",
    "revision": "08aa5bc6882ff792143110a2d37618cb"
  },
  {
    "url": "assets/js/27.11e0ca54.js",
    "revision": "fd20f6bc3fdc26a26d8d3c7f6b0421b5"
  },
  {
    "url": "assets/js/28.8bc395fc.js",
    "revision": "991d240571c215f9a9d8a5b9cc7a530b"
  },
  {
    "url": "assets/js/29.733e13b3.js",
    "revision": "692be2fcb2b8cd165febd264dfb60692"
  },
  {
    "url": "assets/js/3.8962f383.js",
    "revision": "de67384635107d887f904ebb580989e0"
  },
  {
    "url": "assets/js/30.e705ae47.js",
    "revision": "550e8e4d5fd4cf2bc23b341d505dcb7d"
  },
  {
    "url": "assets/js/31.425fb2ba.js",
    "revision": "edd2b7ef78e7561c96d26e08e61af1de"
  },
  {
    "url": "assets/js/32.9d77fd81.js",
    "revision": "92bf891b498bca2fb6989f474d547164"
  },
  {
    "url": "assets/js/33.b16164f4.js",
    "revision": "f07dd56c5d5cd96892c609baa896a91a"
  },
  {
    "url": "assets/js/34.0009c053.js",
    "revision": "e5793d0727daa0498891f31ed640dccf"
  },
  {
    "url": "assets/js/35.15152f1e.js",
    "revision": "fd1fc41699ed0d375e3366b43203e287"
  },
  {
    "url": "assets/js/36.8ca552fc.js",
    "revision": "5f171c92c84e5bf5e65b1597f3b67e13"
  },
  {
    "url": "assets/js/37.5faba6d3.js",
    "revision": "17a53fb23f8517d55c790e865ccde5df"
  },
  {
    "url": "assets/js/38.c80c7676.js",
    "revision": "886abf15ff5e6becf0f62b4c88644ce7"
  },
  {
    "url": "assets/js/39.b44e3fb8.js",
    "revision": "fcd303d8d861547e6babf3e7e19d2c14"
  },
  {
    "url": "assets/js/4.9e67c679.js",
    "revision": "17576109aae22927d1443c1674e45763"
  },
  {
    "url": "assets/js/40.529418c5.js",
    "revision": "26d3d58acf8d5bc6b17032651d3f63a6"
  },
  {
    "url": "assets/js/5.88b9aa21.js",
    "revision": "8c37873a81de640ca323ba2bcdf0c4a5"
  },
  {
    "url": "assets/js/6.15e351d3.js",
    "revision": "431f00f3475767f7a82d4072c452ddc2"
  },
  {
    "url": "assets/js/7.beda3ddc.js",
    "revision": "82bdc10348788377430e8e4ad35544ac"
  },
  {
    "url": "assets/js/8.cb9cb39c.js",
    "revision": "3f1995f6dc8bb91d3899131953bd5a52"
  },
  {
    "url": "assets/js/9.ea9d3e8a.js",
    "revision": "131aad72d34a1be61cfff859ae65018c"
  },
  {
    "url": "assets/js/app.9b7ca8a1.js",
    "revision": "fe041aff6a404747aef73706300752ee"
  },
  {
    "url": "assets/js/vendors~docsearch.729fc4ac.js",
    "revision": "d941049115fdd30e8e07b0bfd4817639"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "eba25fbf441cf6dce37967b6853073a4"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "6ff56f5b0e3c7ed732d601f28e7100ae"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "937b1f0ecdb1296e98c34bc530b5371f"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "e6837e444b705cf47dd3f85edf404bc9"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "24a987b610ab8486b7fa27436f6b59ee"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "4334e4de098fd0bae4e7d5d3f025b9a2"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "e575e822e44cbfdfdd64b352dbeabff1"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "719d03b19db0ce886aa876937381d122"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "5043493bc899c4aecbd9dea0b3ef708f"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "902042bbfef454ae349467b80525409f"
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
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "b078710cc712e1d34aa3319629c69ea0"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "113095c3af03d12b5daf42224094ead9"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "720d7c8899687a45dcf40211e66af129"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "23ab228308bc3b75e2d81b97f52f8708"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "9628c01dd65c29929464a85e2051dbda"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "80a9d9883021c15d8234eb35a21c7d6b"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "7e394a9816fbc04ac0cabb1c396d4e9e"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "cb185fd790fe01d50f4fd1e0ad4a0bad"
  },
  {
    "url": "resources/books.html",
    "revision": "b0199315d0cf48ee5485178842270310"
  },
  {
    "url": "resources/community.html",
    "revision": "eac9ee46547bfb98ae2ed85368ca766c"
  },
  {
    "url": "resources/conferences.html",
    "revision": "d1c4eed337151f00c5761847cc67ad6a"
  },
  {
    "url": "resources/courses.html",
    "revision": "c693abdfe0b87c7e01458ebb516ccea3"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "7f7f42a40970a6ebdb0c10e090f6ecba"
  },
  {
    "url": "resources/examples.html",
    "revision": "374d78a23bfba990091927682d9a1ead"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "27e5644c961c3b3e4763d707ea8065a6"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "344c9fdea7e5ea237e76f55b5683d7a0"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "34aa319b97fed7a5cb2ea6b8b85936e0"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "bdd77edcc3e0af3cd1fb368ff0242e37"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "94e4a24e7ee873285819bb9620282a6f"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "455ce589787ba35654d1e5b2990da155"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "70c2e3c165acb4a6fedcf35ca7e22a38"
  }
].concat(self.__precacheManifest || []);
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
