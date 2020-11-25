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
    "revision": "fddfc9214a57e4d81540b2543a31693e"
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
    "url": "assets/js/15.efe6b776.js",
    "revision": "53d6fc17e924c61fff3bde5432cae71f"
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
    "url": "assets/js/app.5e1ea8a2.js",
    "revision": "d012e062388828ae27ad6cbedcf5c437"
  },
  {
    "url": "assets/js/vendors~docsearch.729fc4ac.js",
    "revision": "d941049115fdd30e8e07b0bfd4817639"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "a0956a8ccf97935fde7feca88affb7b5"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "438b14b6baca38dd3c52b3d957607a73"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "182f2ba18cda0f32fa16ef11fe079f0f"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "20d614538fcf06554124bbd70977e5b6"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "5accbb055d7321ddd7a22d450ac8292a"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "3cfdf670800346330b8e13785df4244f"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "146b84d1910393e7c9ed4d9defad6722"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "195a88a72cd7ac8215b730180551b086"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "086c84b839226047917780f69d447874"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "4e01b6b444311b57499ad85142d59ef4"
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
    "revision": "8696818e4f53e12fbd1ff693afee1864"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "88c1890dcb3f03a7e48f5a80f401adbf"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "8648ba801544fe72ca8546cccf500f9a"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "8d4a76d9b6faab1f6d2944dcc54f9495"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "9f31f7e3c35c6594d8713f3138aaa103"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "1687a1115909db20979407d235b5c15b"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "6455c4dd8a4e446ccd5301dbcf02f36b"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "6588a312808045584879df308d0df5dd"
  },
  {
    "url": "resources/books.html",
    "revision": "c7684c059c546ac3368802e853d650a1"
  },
  {
    "url": "resources/community.html",
    "revision": "b0d2d91ab29132fcbaff8f5761118ba6"
  },
  {
    "url": "resources/conferences.html",
    "revision": "e72d14ef370f4a3013268ba8b5e86c01"
  },
  {
    "url": "resources/courses.html",
    "revision": "2b536f607ff42d805f9d38293d35b8e3"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "9a99fe7373464fe407d538cab6c50e33"
  },
  {
    "url": "resources/examples.html",
    "revision": "b1d3726a0f58a22585eb37f7df1ff6b5"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "003b00ce3b6f823c380d9bb941d657f9"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "1ebc793e20bff502df985ae1ef0bf8ca"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "a570f7424d872e47117fc36b16df8cb0"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "3efd0c1c2cec232cc8bd45904a286770"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "f0f41e980d6ec453ad378c99f6db604e"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "e3e92d25b933ac200dc761a3cd3af876"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "f0dcf94618de3493c7e9c17e593ceca9"
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
