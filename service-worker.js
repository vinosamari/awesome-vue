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
    "revision": "c188b2c207e2f162536ef42586b7514d"
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
    "url": "assets/js/10.23506856.js",
    "revision": "e0f56f7fd1fef2f0bf943a2524037937"
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
    "url": "assets/js/14.d6a8e1c8.js",
    "revision": "50f315931122d3792f4ef33bb7640645"
  },
  {
    "url": "assets/js/15.652a1427.js",
    "revision": "35b71555abf410224918b4a8f2c72b2b"
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
    "url": "assets/js/9.71c2718a.js",
    "revision": "58f78ed12fe68f7e2baf9633d2c085c4"
  },
  {
    "url": "assets/js/app.346de8c8.js",
    "revision": "9a82a281606cbccd47b03c30fbff8339"
  },
  {
    "url": "assets/js/vendors~docsearch.729fc4ac.js",
    "revision": "d941049115fdd30e8e07b0bfd4817639"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "ae73a712e8e361e1aafffad72e423f68"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "d79fa8bbcf52f1dea659536143a86e89"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "1d83314e2958bb5fd7e3f2cace209974"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "e562fb8c04442267a609d7324693bba8"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "a58ee4303813144c0bfcf4556a1e280a"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "6094d36f404653788c779aea04427933"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "f8278d0d323346da316b17df9777fe3b"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "df664badd34cf2af169902a458bc195b"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "d0cde5314ab6956588f80a3737d667c1"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "8f24af532dee2a04fc35309819fef4b9"
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
    "revision": "8fa9c3148e2601e6d72afe1c9d929750"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "28351fd30738403ed75789d1e5698965"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "edd8411e39d6fd5e193d41dae9b47ce3"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "26685db1297ef1f8c16563c2f6347353"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "f06ea8bc0c47d53aa3034485fd761f68"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "1db42aab47e902aa413c0ee36c2c9efe"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "38bc0f7c8b0627088805ed6391652592"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "e353cea21f85a482d9e2b9522c96780f"
  },
  {
    "url": "resources/books.html",
    "revision": "3988b7d59c168709c269d483420b153b"
  },
  {
    "url": "resources/community.html",
    "revision": "a14729f18ebd103d4b89110bb775ebf1"
  },
  {
    "url": "resources/conferences.html",
    "revision": "3f7124fc41b576a07f42aa45e91684c2"
  },
  {
    "url": "resources/courses.html",
    "revision": "8332471c51a46fb4d6992b2bf7c1b4ff"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "c8be1816429cc866859aef9da7b0dd3c"
  },
  {
    "url": "resources/examples.html",
    "revision": "e0e15f45f19c183e0f3c3820fe6a6869"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "e4cfe26361441b5c777dd82718b9ba4b"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "c2b11b7b663246be1390357331d11dc9"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "14faa6e845d358140f0b52af68edb1d3"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "65586a1e275954c2f4fed9bb7c820564"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "8e641cca5e6a4a082895e91fca83ece1"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "24711193e61b4daf24193eed7029f8b9"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "3f08c33d674250bb2121d1cd6bd8680c"
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
