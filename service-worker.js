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
    "revision": "1eff94bd6a3d3d06b48b8be48ed3e1bb"
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
    "url": "assets/js/10.6a1991e8.js",
    "revision": "78e4bbb3228e971eb2593a707b94408b"
  },
  {
    "url": "assets/js/11.edb9f914.js",
    "revision": "0582af67fafff25c62c415899a03a568"
  },
  {
    "url": "assets/js/12.8b76826a.js",
    "revision": "133131cdde257e32c97230092d5475ba"
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
    "url": "assets/js/15.da554473.js",
    "revision": "4a939cd9577cdcaf9e2f878fd276e27b"
  },
  {
    "url": "assets/js/16.e90410a6.js",
    "revision": "83d0e72a9d00202552df22e01a9ee766"
  },
  {
    "url": "assets/js/17.c40a1069.js",
    "revision": "2bb1e88581718fb5080f363250a80c12"
  },
  {
    "url": "assets/js/18.a0376b39.js",
    "revision": "2529a88b12e1ab943d341d61b87601ed"
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
    "url": "assets/js/21.2020e48f.js",
    "revision": "47afd9184a2c44aad68ac55f3f8db342"
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
    "url": "assets/js/25.782cf7b3.js",
    "revision": "4dc907a739833357dd40b86359ba754a"
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
    "url": "assets/js/38.1e3761d6.js",
    "revision": "689b689e3d05a6ee0fc9c450979e47f8"
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
    "url": "assets/js/app.ea0e9542.js",
    "revision": "e59cab85fc09e522949e3f390050e91f"
  },
  {
    "url": "assets/js/vendors~docsearch.729fc4ac.js",
    "revision": "d941049115fdd30e8e07b0bfd4817639"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "4e58a693ef6754e6e8c06cd63a6e8f75"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "eca9a17c712bc9b2c265b264b6081a2f"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "0b3487fb9c0c751549c0fabb9c9fd483"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "7d6f68887792609d88cff15bd1c3f40b"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "867a47cc641f7a58c82c13ebdcee323c"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "db1f435d4c5b4f9edc5e4aa26fda6fbc"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "3819136b5f02f4b6462e8e0304dbe80f"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "36167f15fd50c63eca2a26611600297f"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "1aee124f2cd8e4a2086a4cb46f98e1cb"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "23d13e73ba6d588e02dc6787c967337e"
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
    "revision": "1888ede721ee984159f1923a8a3820a4"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "6021a27d905bcd0728502154982a22f3"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "f1904918428c5db9b62a0ff41789125e"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "1cdb45f2c85cbc4ab002eb34fe05b675"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "b9344141f2553ade3531192601efcbde"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "8b090acecf18ef956d79747e3cc0ec33"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "074f535aa08beea0fa69253650a12d20"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "68c0c33370f09c801fc2f78e9773b75b"
  },
  {
    "url": "resources/books.html",
    "revision": "6778c5eaa7740bf9a256f0899dd9da52"
  },
  {
    "url": "resources/community.html",
    "revision": "3cec21db75c6699f7aa75003d58d9773"
  },
  {
    "url": "resources/conferences.html",
    "revision": "9a4aec3656db5511410986f7b882dd92"
  },
  {
    "url": "resources/courses.html",
    "revision": "3b394974a27596d8bc8a818d74deba25"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "0b4e34557ddff13521c7bae0b5a0fd97"
  },
  {
    "url": "resources/examples.html",
    "revision": "79d022571ecfa417c2825b310c676507"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "58f24512256b098185cdfa3d4f510b09"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "36746acc8e6458563148391551380f7c"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "537d4e1deeb6e8376c26c06cae1c2efb"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "c4169f9b9913344c6ac105d47c41f37b"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "45a52322896b997f215d437c0e572a67"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "fe043eab47dd596d3ddccd61404fa600"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "d415745efb1490177bf9af4d5dd9d091"
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
