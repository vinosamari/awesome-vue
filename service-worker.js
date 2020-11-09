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
    "revision": "fb3d597c773b1d1728bbacbec66ed0d2"
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
    "url": "assets/js/10.e6460e8d.js",
    "revision": "e5255816fc0a32119a892b6fccd09c41"
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
    "url": "assets/js/15.44771376.js",
    "revision": "3b7754bab82624d0d9e76505299e0f42"
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
    "url": "assets/js/38.8b6ebec1.js",
    "revision": "70ba69215a5b4b4cfcd027d9cb64bc50"
  },
  {
    "url": "assets/js/39.71171e35.js",
    "revision": "90e402c0d1072946fca01a7046f33b1f"
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
    "url": "assets/js/app.c4c320a7.js",
    "revision": "7b67ff2645dd66bdb84de78e3836e05a"
  },
  {
    "url": "assets/js/vendors~docsearch.729fc4ac.js",
    "revision": "d941049115fdd30e8e07b0bfd4817639"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "0b7eb23db11ff7d61b572704e1b9df3b"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "8ac6dcd073f986785261d492325f5588"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "ac6528a6c6735ca9d192d878a2cd381c"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "651c1c96cc8f9d704fc5beeac3012b68"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "31823d01cd8684eabe24b4ba71fbd7b4"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "cdb46772dde2d3a657f112023c896621"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "52372de406da72dc2ae653684394c3b1"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "b1bbdd2dea42cd7fd2a39258f735f31a"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "694bdcb16001813c59cb43557d2338cb"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "2ed35018e6de1722d91e33a3eaf37dcc"
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
    "revision": "d7f6b28ff8b09db6492a15ba7ad391b1"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "14528d421c9da387ae7a1b9d974f2312"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "2800cb707272923c7f9fa43a67399338"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "a40f043b47b3481528a075e34aa50450"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "e72bb75861c1d406e1a61df2e53ef452"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "2adaa202321c78fb7b51c4530ba5d977"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "de2d0ed0ff0f1048dbd09942e9d39b73"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "a8ac928aaffb9d9e665c181508763d85"
  },
  {
    "url": "resources/books.html",
    "revision": "6cb7cddf714e05dd79a01d7de8104aa1"
  },
  {
    "url": "resources/community.html",
    "revision": "a38852b3f3c2a9caf84be94f2d722233"
  },
  {
    "url": "resources/conferences.html",
    "revision": "013e257e94d9f99644f4dbeb8e48c76b"
  },
  {
    "url": "resources/courses.html",
    "revision": "782b954182bfe88d7deffa12c612270b"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "af8b20830db64ee499b0edd4f8973cdf"
  },
  {
    "url": "resources/examples.html",
    "revision": "cbb054e2248e8dd04ede2773e534b4a7"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "1d6125a738be87801981e3287d75d533"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "aa1eb462c34a1b10d567fc162a9c7afd"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "8ea5115349b0a9142cde7692dab76eec"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "4b9876e3ff38b2958baa025133024f35"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "619f777b6cb226a2551f9d7d39a01bcd"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "a7785d2a77dffdd2132a5296414b1b0c"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "2e1b95664b886d8d4829ca705e257b5e"
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
