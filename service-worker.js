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
    "revision": "7c8f8aab58005da3275928328a0d035d"
  },
  {
    "url": "assets/css/0.styles.c667ae91.css",
    "revision": "397c5036c5d791deb513cfb431edba00"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.984c481d.js",
    "revision": "374233626dd7530f56c91edbb4065361"
  },
  {
    "url": "assets/js/11.4347a4da.js",
    "revision": "e4720912f717c74f5a7d89da840e13d2"
  },
  {
    "url": "assets/js/12.bce1a4fa.js",
    "revision": "043cb260e51dfd16edbb9a9e0e7cea2c"
  },
  {
    "url": "assets/js/13.f4ff75c0.js",
    "revision": "abc811fbd0ad195c9f3b31f18084a8a6"
  },
  {
    "url": "assets/js/14.8ec33ccb.js",
    "revision": "eaa9cc1ac2bbfdcecef0faae7505374a"
  },
  {
    "url": "assets/js/15.0fc7347e.js",
    "revision": "a91ea796a863628de0455514a5ea8255"
  },
  {
    "url": "assets/js/16.f7ac9b10.js",
    "revision": "4e04220d074160a8f80ca4d4f6c7aade"
  },
  {
    "url": "assets/js/17.a0c99e4c.js",
    "revision": "d4065a59dab1d6b68991c08228b9de17"
  },
  {
    "url": "assets/js/18.a6855248.js",
    "revision": "aca32cddb9e51a0e3aa2478393e719a9"
  },
  {
    "url": "assets/js/19.1c581542.js",
    "revision": "cceca1ffd4e5715a309dd638b5e68137"
  },
  {
    "url": "assets/js/20.5f00bcd1.js",
    "revision": "3f2e6d71217e2ff835215e8f819a23ec"
  },
  {
    "url": "assets/js/21.d670ba65.js",
    "revision": "6604aafeb78ee32a3f874c8d927cf09c"
  },
  {
    "url": "assets/js/22.29b876c5.js",
    "revision": "a94ec4b98c988802c0ebec7708e0afff"
  },
  {
    "url": "assets/js/23.b5d0ca69.js",
    "revision": "d61c06154642178c2fc3ae4e02dbfd7f"
  },
  {
    "url": "assets/js/24.71c9eee6.js",
    "revision": "d55cb1a42ad6b08b170a9a468001852d"
  },
  {
    "url": "assets/js/25.55155bc2.js",
    "revision": "0a23c311b99034efe4c32cf88f244a3c"
  },
  {
    "url": "assets/js/26.76e7f23b.js",
    "revision": "72f6c084fdc18f493458b5f43155647a"
  },
  {
    "url": "assets/js/27.e426735d.js",
    "revision": "85b15908092a9de1321369de13a665ab"
  },
  {
    "url": "assets/js/28.1897b791.js",
    "revision": "3ac167a5176421b97d0551d2b74e0c17"
  },
  {
    "url": "assets/js/29.bc471523.js",
    "revision": "5ff8d6cda9ad26db065c1424fbbe5221"
  },
  {
    "url": "assets/js/3.30994ccd.js",
    "revision": "6f289d93e1c3c976da9c2b8c1430ef04"
  },
  {
    "url": "assets/js/30.1503d74a.js",
    "revision": "50eb9ed6e987273a433134a9d4eabf4d"
  },
  {
    "url": "assets/js/31.a2fa8b22.js",
    "revision": "566fb6f29de657169cf323b288f35f7e"
  },
  {
    "url": "assets/js/32.87c035c6.js",
    "revision": "848417aa1bbd9cdc35506cf82efb68b0"
  },
  {
    "url": "assets/js/33.0cccabf6.js",
    "revision": "1f3f4d20bf1e0e958ab21a31deda2741"
  },
  {
    "url": "assets/js/34.c81409da.js",
    "revision": "66988bfecfab21e8346a3817064da9aa"
  },
  {
    "url": "assets/js/35.eb69e658.js",
    "revision": "0627908e669b95b74fdaed55701e0ac8"
  },
  {
    "url": "assets/js/36.bde460b1.js",
    "revision": "2e042626ad1856aa12e82958cb823199"
  },
  {
    "url": "assets/js/37.08f1899c.js",
    "revision": "21b7d272cf4a77cc6cdb32a1ae650492"
  },
  {
    "url": "assets/js/38.b1786da9.js",
    "revision": "4ba1d9466c97bfa26114afbe12eb7657"
  },
  {
    "url": "assets/js/39.00ec5b90.js",
    "revision": "5625f7356576f467cf65e54b800bc12a"
  },
  {
    "url": "assets/js/4.64e8f72b.js",
    "revision": "fe03dc4c98f26bedc571549b97a639fe"
  },
  {
    "url": "assets/js/40.c7cbba88.js",
    "revision": "53e62a1b4987c045c1a5569de48d6064"
  },
  {
    "url": "assets/js/5.a38c5fc8.js",
    "revision": "0e5b483c06e09913a19bb3962d19a1e5"
  },
  {
    "url": "assets/js/6.d2b71544.js",
    "revision": "c5bafdbc29898568014c39ebfc78d0a1"
  },
  {
    "url": "assets/js/7.b6d73c4a.js",
    "revision": "20ae3c55a0c5065d66aa78959fe728de"
  },
  {
    "url": "assets/js/8.dbbba277.js",
    "revision": "eadd3d0c984b4dca965079f6bfea2349"
  },
  {
    "url": "assets/js/9.5d656205.js",
    "revision": "e62db5ca81cb02497d5545141773465a"
  },
  {
    "url": "assets/js/app.03a65ba2.js",
    "revision": "70bd6481e7ba4290318a89144c463363"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "ad1ce278d04ec899450ff699a9911642"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "44d9f39a6ce0fa9074a2ab433c6dc9ae"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "4d4a3585736ab4ab999ce1077385c327"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "18dfd09cdb95fda9bce4f576a6411203"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "8d371c2d49bfccb58f9a94f74a3af701"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "9a7a493e2910f8acf6587a4f8cf01a82"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "5d60eea8621ace172d08220e27681239"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "329c2d98cb7877b1c093f43b62375163"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "a4b8ac38f4e4e300f8b7035d47edfbfb"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "2dce85b0f3a4b21832bf5a7e04984ea8"
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
    "revision": "2f03c6b84cc073c1c7cd024dda64a580"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "790fb4df1a94b82a236e4a9c4cbfed31"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "01439a90ba885011f72e5bd941fdd484"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "c8df5e7931f3eb42f6aeef123e13d4f4"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "80a20b0238f8246a2abcd3b5379fe24c"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "10d9049e904bbfdf73d54319eaa35367"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "52dcc312fba023a0e182acc1df11271c"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "123fd50275243c4eda4a08af2b0f7005"
  },
  {
    "url": "resources/books.html",
    "revision": "16d26fdeb559e00b3b4236dc43618a70"
  },
  {
    "url": "resources/community.html",
    "revision": "37136423a36d2b4a007729714867364f"
  },
  {
    "url": "resources/conferences.html",
    "revision": "f1f11b462003bcf0e6d826c78121f6b9"
  },
  {
    "url": "resources/courses.html",
    "revision": "c42483b4eb63c951ec7cc59dee0d8c2b"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "3571dfef96b3a8aa3fad98e620ab7aa6"
  },
  {
    "url": "resources/examples.html",
    "revision": "0e17533c7c071aaf09a33cd760aea850"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "b18643b6556f42c7da0c1080a87ea071"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "09d6ec622d19dac300cb67a8d609d8bc"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "00b7ad9e3a0e7b690f7ed1777477b83a"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "cd1294a463bbe9122ae516136bd21180"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "dd3781348d18c10c70551f44496b58bf"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "f59060761575e99caf3e1a6f86ccc018"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "9669b0196bf5c26d259ef53284cd8913"
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
