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
    "revision": "81c1b1eb6b29f9df6f0a131fa31cbc5c"
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
    "url": "assets/js/11.d43657c9.js",
    "revision": "90b19d2a423b66a60d165657657e2f99"
  },
  {
    "url": "assets/js/12.6a64786d.js",
    "revision": "bedd84462b7c5391839acea97ef9adae"
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
    "url": "assets/js/15.920c4aaf.js",
    "revision": "06e1f8e653d231595b4adc7090e59d98"
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
    "url": "assets/js/18.021e2793.js",
    "revision": "71f8174ef271ee2f6709a0386ef8c11a"
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
    "url": "assets/js/21.f3a8e8cd.js",
    "revision": "24ccde71fb38c6f03b35338effc1f505"
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
    "url": "assets/js/app.792661c2.js",
    "revision": "6be6b6cb89cb0f7585c7085bc8f15148"
  },
  {
    "url": "assets/js/vendors~docsearch.729fc4ac.js",
    "revision": "d941049115fdd30e8e07b0bfd4817639"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "396927b31806d3ea8ed91367173da36e"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "061a41804ddf6157c8386afab650ab9c"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "0facb2a9a20797cec5c20ec445f63da6"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "a768e762f228b3f58fa7d6d98d3d9fb6"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "bae53c3df085b2f9112d5ebaabf5aa4f"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "73788879c264bdcd9c1e52032a5a89b0"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "7960e446a683c8135d0352d676774da5"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "8a758e789d5fb98b039534f1efc09177"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "bd90fc9053e4dc640784f22f1f67c4f2"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "016b48ae89b106e516f65b06b107b5d1"
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
    "revision": "a443a798ea6138f10901c891d49170db"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "6daf21869817614f55a216da7e45967a"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "cd7984718318181d4ac976d075b2516b"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "0be9181965cae543f0a3e0814b08fcc8"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "9ce203ac2e2b3adf9fa9ad64438f9f6e"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "21b2f36d0d893550cd272a94caa89b96"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "f1dfaecd56ce69f04453d040e3f404dc"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "2e32e987cd7c2a094a2711ac890c204b"
  },
  {
    "url": "resources/books.html",
    "revision": "d3c0c9cfb458f8543e1f1cf4e22ecab1"
  },
  {
    "url": "resources/community.html",
    "revision": "d4dbf632997b00db32c01600e67e2a70"
  },
  {
    "url": "resources/conferences.html",
    "revision": "1abc94388b3268972d3cf9b76122f061"
  },
  {
    "url": "resources/courses.html",
    "revision": "5459579fbe968891739a8b7a6e6d0d70"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "3b011780457f3e93383c491fa3e9ab78"
  },
  {
    "url": "resources/examples.html",
    "revision": "577db34d536a5bd4d7c18675c3f0fa7b"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "ba4680f8c534272cdc1e0017c5007f0e"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "73015eabe6382fcfe5efffd9a4ad7295"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "26b8d73a4abde681bf8b7f6bdc254ab7"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "337e2a57fe6d93ad28029e0783406fab"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "e13218b259891eb3d6002e278bb6ad59"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "905b26e185007295633d7909e994ab9f"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "8a691e5777d9eb59001a9304d0dfda7e"
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
