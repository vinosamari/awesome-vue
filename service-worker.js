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
    "revision": "78c065134f35c796aa181b4d82b9bbca"
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
    "url": "assets/js/17.861ea17e.js",
    "revision": "c83c348c90987e2042b40ceed68d3e5b"
  },
  {
    "url": "assets/js/18.569b6da7.js",
    "revision": "6b098f68ef418c6ffbeb82d8f6754b9c"
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
    "url": "assets/js/app.9312acf5.js",
    "revision": "055fdc7e77967f76fe39514d12f709db"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "9dae2ad4fae5a1b16d7483ec746ceb59"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "d22b887d1866b4585fe544f44247da99"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "13bafe6adaedb6b535a99522e3571e82"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "4b553bd44c899808a61c3c79ad3c1053"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "c95112551367344abedb548bda97e3f9"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "fb34b4430f891e39c2714d0db92635f3"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "90597472dd595eea5be7295b8bbf66fd"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "00c3a963fe7288a12950ce3ecc1feb24"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "dfea493db4503ea038a3ffe94e960d58"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "b8b76d6a8d5c21092001c2ac18db0b00"
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
    "revision": "5cab3cf5fd757fa35c87a685effc6d37"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "790f55a8d140518004fa51c72105edb6"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "7efbf4eb900e04c4af772b28aa3bed45"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "0ebb0e6f7dc1089b3991133a64f41b53"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "9acd5154ccf9e2a7d4b2c4c723c5b391"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "ed596585bc9f0aa6c3da8172e43b70ac"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "fea64f1457a87c8ff92079e2bca065f6"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "9c2c30c27d3381203a261749694743d1"
  },
  {
    "url": "resources/books.html",
    "revision": "de210a5265eff586f14f8566d33ef393"
  },
  {
    "url": "resources/community.html",
    "revision": "a0bd6ac0e3ae523da43e6e196053f5de"
  },
  {
    "url": "resources/conferences.html",
    "revision": "d860c8d192acc8d34a740043820c23d4"
  },
  {
    "url": "resources/courses.html",
    "revision": "a040daef30c6b9b99f65a9686b242d10"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "6808f2fe68a934e62605bb784ad024ed"
  },
  {
    "url": "resources/examples.html",
    "revision": "fdfb8eeeffd44e992a04d272f761f89d"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "1f6a26ccce63ea035d42b037d2ceefe3"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "aa58f0fb0123d8191ef4412aa098004b"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "145e12de041294b9b94d7542232d2e85"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "204dd6e7f175ccca5b338fbb610bf0f2"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "a918a3435d0ddcd62103892076be063a"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "4a0565304c9a880220f9db3b9c6dee26"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "24900c7d8b1f40f1c9fafdaa350a8a20"
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
