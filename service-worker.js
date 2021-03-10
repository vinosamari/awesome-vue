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
    "revision": "35dfd50cf83269f9e3caf8df643bc7fe"
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
    "url": "assets/js/11.462a09e5.js",
    "revision": "4fff4a26d1a64235c1544da2f16a4242"
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
    "url": "assets/js/14.6f807feb.js",
    "revision": "6d2b103c231b878ebc2a74f402956ba9"
  },
  {
    "url": "assets/js/15.d7fe958f.js",
    "revision": "f38e5f34709c42b4bba2358767ef9331"
  },
  {
    "url": "assets/js/16.f7ac9b10.js",
    "revision": "4e04220d074160a8f80ca4d4f6c7aade"
  },
  {
    "url": "assets/js/17.c380f808.js",
    "revision": "a7ff8a6ab00419ad53ee65cfa2732288"
  },
  {
    "url": "assets/js/18.1ffbe09a.js",
    "revision": "a34010b66e456618446d27dd59264d3b"
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
    "url": "assets/js/25.8ffddad0.js",
    "revision": "7731d477934e06aa026f0480b48b5bb2"
  },
  {
    "url": "assets/js/26.76e7f23b.js",
    "revision": "72f6c084fdc18f493458b5f43155647a"
  },
  {
    "url": "assets/js/27.b5d0e63f.js",
    "revision": "2cd93a0ffecb5b235deb9c194bf327fb"
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
    "url": "assets/js/3.769ec940.js",
    "revision": "0a584a186dbc418060998bd53d3d6592"
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
    "url": "assets/js/38.34c23db9.js",
    "revision": "e2c7003e2c953af65ea4df96ca606427"
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
    "url": "assets/js/7.8139f0ce.js",
    "revision": "bbb2feaa7d0937f80a930f3a16df606c"
  },
  {
    "url": "assets/js/8.dbbba277.js",
    "revision": "eadd3d0c984b4dca965079f6bfea2349"
  },
  {
    "url": "assets/js/9.a31ed6ac.js",
    "revision": "544883e1ee9ab4fc93f6d0c3b8da6ee0"
  },
  {
    "url": "assets/js/app.4b9a0bc2.js",
    "revision": "907690a40af90e9674a1a6dff66805f9"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "bfdf9e42deba443bef028a7c8687a3ce"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "44c5557bdb2c7e0abc2b90b3d6a6a7f8"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "ab6f8dfcffa65ae292f2e3c8f87a5db2"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "b706547be56723040574409b7b3c00fe"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "e9f03293afb09a05e27a8a454e4b5043"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "007a3a5899e611807d5a3f2ee13a9a8f"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "fc43333d7b75626431b74bf135ef4695"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "449a9d54428decf01211dab4b3dbbcac"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "d05ac5dc8a4ee60b69cd612a8c84f890"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "267ef7c55097bdba761261c84d0c028a"
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
    "revision": "7f448e6a5e54b3205fb5ff1f238e2417"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "085c274b5d32aa8bbdc927cc1655acee"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "e3f7a6b3b0e5ee5b94a51247b14894bc"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "fc7fbdef66516fb33b35746059244fda"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "4f0256e6e25aaaa6f779eba97524c92e"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "50929ab26e08cd81a959b1ca0a54c95f"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "4e80f83af866ae5b248ef8b2389e7ad7"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "64efa8899392472e112c5ed39cd84849"
  },
  {
    "url": "resources/books.html",
    "revision": "151b160e99b785800bc7c1cd6fcf5140"
  },
  {
    "url": "resources/community.html",
    "revision": "594a577d7c13319095db5d17c4b90e75"
  },
  {
    "url": "resources/conferences.html",
    "revision": "38e21be15a6051d923e3514cd4f7dffb"
  },
  {
    "url": "resources/courses.html",
    "revision": "308351a0e7539a4e18d29153ad3647a2"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "759c0f407c94464f7a850ffd94a1c621"
  },
  {
    "url": "resources/examples.html",
    "revision": "93238371bbdc61afa1fba216422ccffa"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "5109c3b482d98c2fc5ea3ea2a2081cdc"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "f939132de4efa14a0eadf82ecf446c6c"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "6d3261444586d0075751fbef53b7412a"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "f697826c2a4fc37c67fa25379249cbf4"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "9a9d503929df0acbac9b40d3f6bf98b8"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "29f144a1c9e257bb22f7241b4bc0e847"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "d663454c303b4db3bbbec124d1095cd4"
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
