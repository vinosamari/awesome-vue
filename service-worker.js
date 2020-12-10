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
    "revision": "3a621d2fd5c67dd4ee03a0f25f3aa8ce"
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
    "url": "assets/js/10.d597dba2.js",
    "revision": "600b771b945a0a6b79a201b9d121df71"
  },
  {
    "url": "assets/js/11.c10cb217.js",
    "revision": "236d497e0cd101557abfda9082d822be"
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
    "url": "assets/js/32.fbb298b4.js",
    "revision": "9c0ba30a2a5fdd79f67f882a8b6fab6c"
  },
  {
    "url": "assets/js/33.fad24f73.js",
    "revision": "bc85d39c52d06db6b5017566035bc64a"
  },
  {
    "url": "assets/js/34.754c33c5.js",
    "revision": "06b3e7d41b338c31654f16ecb4e77309"
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
    "url": "assets/js/9.7c9efb00.js",
    "revision": "318f54be4eae488ea585e103aa657004"
  },
  {
    "url": "assets/js/app.faf3c105.js",
    "revision": "51c5581f59a3bcdc17603934271fe684"
  },
  {
    "url": "assets/js/vendors~docsearch.729fc4ac.js",
    "revision": "d941049115fdd30e8e07b0bfd4817639"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "bf3c75dd4b9edb56560aa8fe1791ef6a"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "5d8f194f17e2d91b4c1d9dff0d5ca73d"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "01f1a9a6b14010d128ce37e62aeb0157"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "1ca691fc304cb02169e28171cf10da2a"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "831eb0728c04309df2765875c3843f22"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "899c8ffd390a559b452abbf40387ca65"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "6e66c824a7765053e21d2953f33e8728"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "5839212e6b1522ada1062100ea389354"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "87b681f7ae05610f30b3d0a0c60b1180"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "9d507bf30c6ff2044c235a39e3eab8da"
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
    "revision": "b38862f0db83b85ec65ff181fffcbf7d"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "6f1f99b3de07631899ede74d60a5d481"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "7e354acc1bdab4702801a42381844730"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "91155f38b27b2c91f3d07bdab35a8fc8"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "62102885c57d65a84ac6299fdf48a922"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "ed2486dd51a7ddc14f53ae4344053c7c"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "ae5cc7d71adde6bc3aefac6019e1ac52"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "34a05be3555b00ec73e473de56b3cae3"
  },
  {
    "url": "resources/books.html",
    "revision": "0041685b85ee3329d3f2e493a274ae36"
  },
  {
    "url": "resources/community.html",
    "revision": "4c83e01933c4adf898c559fbed5dfcb7"
  },
  {
    "url": "resources/conferences.html",
    "revision": "28aeb4cc70401547332702430ea9cb18"
  },
  {
    "url": "resources/courses.html",
    "revision": "3f72add6c8f4282003521cc0531ebc19"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "f83fb37b893d444a832475e9f020cadd"
  },
  {
    "url": "resources/examples.html",
    "revision": "18968dff44899ee8465a81a61aab3108"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "75e1f22445c7a5ed2566f412b400c5ea"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "588d8a7e4681cd56d2fc9c1b5516246e"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "1ce6cfa94d9e42032d69caaa488b65ac"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "2b41eb02b5ded46b8562d6d303967447"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "92a44a4cbd554292fe6855ceade4dcf9"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "4e34c958752c6d0c3be252d1a9554974"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "e80737d36f87479c599a10d2f1710456"
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
