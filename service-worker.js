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
    "revision": "11bdef5e7eb7666b1adbfb7a7e7ad93d"
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
    "url": "assets/js/14.fe4c2812.js",
    "revision": "72edc11a8273addd246778ea3c13e50e"
  },
  {
    "url": "assets/js/15.925e6be6.js",
    "revision": "3a37309915fa790b621891106773b3f4"
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
    "url": "assets/js/18.f2687630.js",
    "revision": "f5f5d3ac660f7ceef88b515b79dd28dc"
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
    "url": "assets/js/27.670bcf19.js",
    "revision": "fd90167492ead91dd9679c2b1bd6dad4"
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
    "url": "assets/js/3.8de3f819.js",
    "revision": "19563db5a82b5e718f973332e8f64dfc"
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
    "url": "assets/js/32.25259996.js",
    "revision": "2241274297c59d75346aa0730a77852d"
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
    "url": "assets/js/7.55b3eaf9.js",
    "revision": "0303374e75a09a69cef83901978869e5"
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
    "url": "assets/js/app.1aaa59e3.js",
    "revision": "f5dcf7f5cd12af71da68ff87b31a53a7"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "fd078e22106eb5a743ba105b4d4a8740"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "fa0ce34cfa528089d026c7e30ab3eb1a"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "c42b4770196817c5dd25efc7507bdcec"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "287de9e13d6ce2c6be73c722a38a0caa"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "563c0292d8971fb1b74718e28d4fa747"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "d09f65c15c404314980edbd1e6eb6d74"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "1e8beee8da5da2c82132624d508f5472"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "a5e8dca3c4e2ff7c6d48f30c47f0e24b"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "5e8ede192e420349ee0aab39a70f0273"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "77850fcaf0e29c3ac1264e6e6cea7634"
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
    "revision": "ecf53dda8684db34abce33260a30cc47"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "e49ae55f33b8e1161d45a917a13b6362"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "887bc349d762dc66fe8b0332ff620514"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "fa9ec78ad665d8cc17da3dba1c51e3c5"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "afdd4893bc4d22f3bab1d62630439f7a"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "309e8362010229059a40ec59912d5429"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "384a528f49a6f09d06dcdd6c970e1e18"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "de3d2023c2c8e891aab64b73fcfbfd2f"
  },
  {
    "url": "resources/books.html",
    "revision": "4cb3b5b9bccdee301be23519c6a6473e"
  },
  {
    "url": "resources/community.html",
    "revision": "452ef8d8b90d2b0e0d1d4398e7ae3cb1"
  },
  {
    "url": "resources/conferences.html",
    "revision": "50312fbaf8fb5bc720f42efb92aa5d4f"
  },
  {
    "url": "resources/courses.html",
    "revision": "15f90d9931644c4b20792f1bd09bc52d"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "869f51dec19bed3e35ad101cc4949733"
  },
  {
    "url": "resources/examples.html",
    "revision": "fd81ee453d67414633565a964744811c"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "0445d2fe2350cb21d040638127bfe695"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "4c94abe6980dbd457618a46fa5fd8e78"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "6b2c727067b6d09e2ead78bdbff6dc94"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "f953918944548f7e0c7ecd7f6d28726a"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "9e6f555f1a40405ee871196b67104b44"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "3c99d4f45d2cf92e749e11cef8acacd4"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "64cb1d8c02767c4f8b80878385569c94"
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
