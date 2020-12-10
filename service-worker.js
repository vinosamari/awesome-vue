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
    "revision": "969cc2a2f0bb1fa35802f604402bbd10"
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
    "url": "assets/js/15.e4920c98.js",
    "revision": "2ec456ac32f94dca4cde758638378f21"
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
    "url": "assets/js/18.000dad49.js",
    "revision": "3c72a5efb31045958f454f0454e4ed6b"
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
    "url": "assets/js/app.638c7ec9.js",
    "revision": "f81d93a0bac3271df3324fc0637625e8"
  },
  {
    "url": "assets/js/vendors~docsearch.729fc4ac.js",
    "revision": "d941049115fdd30e8e07b0bfd4817639"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "2c6dc7fa643943dfb62937c9ce059256"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "9871a3cfb1f0442edaa48f574dfa1bed"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "16a01528d887a92ee9fd94aeda736cad"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "1eba97cd478084c634eb245193043983"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "4105473508bb553f109a3335df059aa7"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "3f7c3b7205251a250b3071f9c85d42ab"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "12d2ce25db9f1d71c5b5a47daaf70ccd"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "e358d537204bd262a5ecff67752cb169"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "4728d9b4cb2afcc77486d1c75a5b3e1f"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "477fc44c740bfd0b98e8e7be4c05bd11"
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
    "revision": "4715af34a6bcfce8d85d162c0cc03d6a"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "80ed117d9fed8dd931e903fe56223550"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "4316316c63d33f5d2ee275b357d0f258"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "08bdceaa1c6679382966ac2c57a2f82a"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "d8d532edd6616ea48faace05af4b954c"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "7d413cf4dbfb525c47508822157a375f"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "e6c6b2bb32e14b3aa02caa051eb28e9d"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "238c70971d756aa59a88cd1b6a5c09c2"
  },
  {
    "url": "resources/books.html",
    "revision": "bead0a50e07506986c64b3ef7b425a1a"
  },
  {
    "url": "resources/community.html",
    "revision": "fcbaeb72c476db86a184f809498c709b"
  },
  {
    "url": "resources/conferences.html",
    "revision": "3bbe61f99b520eb5cac050fb307fe5c9"
  },
  {
    "url": "resources/courses.html",
    "revision": "4b1cda95dd2e79bc3c55db4ad9282af9"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "5d987fddb635fd8a4298ee0ef63af1f7"
  },
  {
    "url": "resources/examples.html",
    "revision": "d694d2de4ff23ca40d3b2d01963b7209"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "ff0ddb73fc7c8b2c42f54c3d7f3c7460"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "f0ad40031bf5257fad4b456820ad7a5f"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "93a19ea6980e321bbe36874bf709c651"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "32983994452063c93d6ff7933f82188e"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "642fb1a8dcf7c421dd1db81758272aff"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "81ad58004b7ff1ddb0af56ebc8b94bbd"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "0a34e3c8f7c37f25efc41a9b82b4ba72"
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
