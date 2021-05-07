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
    "revision": "1e028c600f1cf46860798d5baeab831b"
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
    "url": "assets/js/11.e2a4997b.js",
    "revision": "b549f283eb170d967e6b9d1737307ce5"
  },
  {
    "url": "assets/js/12.3bd9c46a.js",
    "revision": "3c6180f50315459f035da22e29a428f2"
  },
  {
    "url": "assets/js/13.9d85628b.js",
    "revision": "60866b1cd849f2ba4235d1d0ddffc978"
  },
  {
    "url": "assets/js/14.daad30b5.js",
    "revision": "241144fa112410507054f7f4a14c3508"
  },
  {
    "url": "assets/js/15.ee458084.js",
    "revision": "6e91c1a9cf987fe327415b2e666b7039"
  },
  {
    "url": "assets/js/16.754491ce.js",
    "revision": "460b13c817ea7ce7ac7a48b52333b9ef"
  },
  {
    "url": "assets/js/17.a0dbaf3f.js",
    "revision": "d5dbc1e6b5144879564de830d6565472"
  },
  {
    "url": "assets/js/18.393bf76d.js",
    "revision": "137f60b0457bf0d713220277e9ac859d"
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
    "url": "assets/js/32.6503e8d7.js",
    "revision": "4fb290c3dfcdd26a426e786198f2c64a"
  },
  {
    "url": "assets/js/33.42fbccce.js",
    "revision": "c9b390c86cd0066295b4e89c5941e62c"
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
    "url": "assets/js/app.d2da7552.js",
    "revision": "29259ae382f2c47f5177f08163c65c0f"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "1d34c8cd870053213f31ee8b3a6480f6"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "e320f6315dc1178df78c80265ac5056e"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "cba7138a213d9ec971c469a0690fcc03"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "32422cf369a841ce75f0daa6b7dcc956"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "84f6b9181a9f9bfcf07e248f89110cb0"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "3a062fc174580d118cb806fea7af1bfe"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "90b5be525204fcea81adb6c3dac64ddf"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "cd482b686eabe30eaf8893d34f1db191"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "a115e0df7f5f28775d1db1e8a9a81219"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "c2adc97e69909cbc9316588fd4e7014a"
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
    "revision": "5683dbf038603d62cff55af3e4b8b908"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "2eb0f03cdeaa6198838f78f34f3945f6"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "461bd1f0dc140653e0567ae9b359522e"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "43f8a06b7f8c0070dc72d5ca85e86192"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "7802fb9b57ad0c9d55a220f16ad51a3b"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "51f4ec9adc3e114c378cd785daf4ba1e"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "444fe77ce6ad5e504a59fafe2149b557"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "7bd5c2c8a2182e002017a5d8058d40d9"
  },
  {
    "url": "resources/books.html",
    "revision": "ad0dc1ff2cbe1d193a7a4dc76755d1ef"
  },
  {
    "url": "resources/community.html",
    "revision": "21a73eca193b47693219da1affad927a"
  },
  {
    "url": "resources/conferences.html",
    "revision": "3fb61ff0c3ba1dfe5e11da0fba0740c4"
  },
  {
    "url": "resources/courses.html",
    "revision": "240821e45d4fd0076d884f007db88568"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "90c9f24d724bc278832a8d3cd0c6b666"
  },
  {
    "url": "resources/examples.html",
    "revision": "2942a4d95dd32037cd5d7792dcd82b9e"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "b901a61e67f4a1d488365e0ccc2c2147"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "f913d4abacca6c1c0c66fd0ee242cc80"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "6ab8293192a5e630fd2d91cdb4a082cb"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "fca2177a8e053eadf8018857ad4e0dad"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "0b87b2b2ec28060af2a7c6307335266d"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "4079ab1826b9d69a31041d7a1c8b53ec"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "36e8a44c7b78a87e3d30880185ef1c6b"
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
