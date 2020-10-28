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
    "revision": "f8fac5f8298bdbb300a3933f27c7cb7f"
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
    "url": "assets/js/25.195d6575.js",
    "revision": "cf426b75a984f79b2fc158eb56dd4891"
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
    "url": "assets/js/app.26d0cb4c.js",
    "revision": "c86b9948ea6c6b7e57959d1b80f9a120"
  },
  {
    "url": "assets/js/vendors~docsearch.729fc4ac.js",
    "revision": "d941049115fdd30e8e07b0bfd4817639"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "c1a2c53c022662f0f1b38563da47de64"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "fae7ffa5a99a56869ddd4d90ffbed742"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "0bbeb43296867f701ef3f0574a5e2e67"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "8417b9563d1359443358bf17acdee2a6"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "704bfdca36b86881fd9c3ba9a633d57f"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "b148665fff101d7dffeb452204a0e796"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "50f5c2556e2a039cf162563fc3a17f11"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "24550b99682500c3c8ceecb877f8c28e"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "b8b61fd62a336da2ec0738e9aff47236"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "a1dd44a6bacc0d1ad98fcaf6fb1f5b77"
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
    "revision": "967739e8d13db3c41610a8dc434fe315"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "ae52baecaf5023764d40469c8c9f4310"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "58351c00a62ea589ec578b2a4ad613b1"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "068e3ea63952cbd04a58724cedbb214e"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "a5e81b96f962fb58c05f3f441ae03494"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "b369644e2c0f3fb20cf3a794456a2eb9"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "ad2a5ee3b48961d70ed572222f83399d"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "abf9bf29430e194c65d6d3ecf7665142"
  },
  {
    "url": "resources/books.html",
    "revision": "dd82722cf0f9769e9ca6eb4bbfd64c1f"
  },
  {
    "url": "resources/community.html",
    "revision": "56e36c864a2c343e5ce57f9044d4f4e4"
  },
  {
    "url": "resources/conferences.html",
    "revision": "51117d79dc6a71d854ae7861e096da7b"
  },
  {
    "url": "resources/courses.html",
    "revision": "769ce11d5a467f21277f2cb762f2fef9"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "3a189187cd14697ee69cbdf39bf54c1c"
  },
  {
    "url": "resources/examples.html",
    "revision": "50978da5d8405f58def8e36eb37c59d7"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "43007cbca09cebf146d4a21ba236172c"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "fa77244fd28eb5c571912c22cff50e18"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "7fab2ad98a035193aec369d4feedef5d"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "3e8acf5e7a5be972d99ab01d6348d3c4"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "a31921c6d9b9a2d7abfca8ca2c2a9504"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "7dcd7648eaad0a486d03c246668817f1"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "52efb14893b6b33a28f6a2ffa2dc8add"
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
