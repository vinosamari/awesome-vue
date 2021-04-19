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
    "revision": "1932db6c034470ca75a49e038e5b4d2b"
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
    "url": "assets/js/15.f7f1e398.js",
    "revision": "85f93b0e537d47878ebf8b5b829a9fcc"
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
    "url": "assets/js/21.b28a8d07.js",
    "revision": "b11d43a39b289b73dd384a56cfe60000"
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
    "url": "assets/js/32.d632830c.js",
    "revision": "2ed97bc69f11f0d9915cc9726648a106"
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
    "url": "assets/js/38.493fcadd.js",
    "revision": "53338ea9640182212f1133921b67cb21"
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
    "url": "assets/js/app.b22ef5bd.js",
    "revision": "a50b8bd1283c83bf1b8c2add3cc5cd4e"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "e2f573ce2cccb11038988c7c571b91c6"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "0ddb96f06c71ce886575192460b20a5b"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "4c735d10ca1eb4391de122334e109690"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "1ef8ec8df0366f73575a41aacbfd1c76"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "856048e08f5d6b7a3ada56c6e81948d0"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "4706c68c7bf223d604b79e420c3c75d0"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "8edf89b90e8faf9f12591e68029fa8c8"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "e9db6c6bef1a89b405258094e7b8bc50"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "6679246851915f9d869ccc117c771960"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "1e5e0a3f70d3f45966be49db8280e71e"
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
    "revision": "17f267303ea31d296402958d711a7134"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "458768072605ef0039ce15c55e552ccc"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "86f2c997c44012ae9b5125bb3e29051e"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "806d6ebb9a76a48a4b594963c9a34873"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "ad73d1c8adeaa22e200dac6ae2ab822b"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "a60ce7ad4041c5715bae7d1dfd2cdc34"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "edae84a1cd8d7630fc2be336ddcb489b"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "11c15b70b738aae8e2966ef7221c4906"
  },
  {
    "url": "resources/books.html",
    "revision": "ee33c63e7a897eabba2eb58bd34bd0d9"
  },
  {
    "url": "resources/community.html",
    "revision": "a3f84b6e16182bb5c5054ab686f82d0e"
  },
  {
    "url": "resources/conferences.html",
    "revision": "43951ea6887d084fecdfa2681f463d00"
  },
  {
    "url": "resources/courses.html",
    "revision": "d2e5d817472633566c6c8f857e84f314"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "15b1a1eeecbf369dbe520d66a026aa46"
  },
  {
    "url": "resources/examples.html",
    "revision": "79a2ea45ef38279e3f0f29a6c7020752"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "5af79323071bd93bf8aa823c43271cee"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "605e2435fbc838d7636f19369ecdccea"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "e8b15474b41a931b053c3f9a1fe8b858"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b306f28166fe6214ab131147533a1b03"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "6d9e31939a18753da3fcdd76b6aadc23"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "bf6e8ccdfdab590a09d4d819f2aa0639"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "1c2f7e4c6bba653ee5cd1f24ba590f0d"
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
