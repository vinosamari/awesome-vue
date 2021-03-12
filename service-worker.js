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
    "revision": "00ba4a64abf4a5b75c7cf1ae2e995aac"
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
    "url": "assets/js/11.51a084b8.js",
    "revision": "5fdca74b9f8b377a7d46d54f03882078"
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
    "url": "assets/js/14.76d8a65e.js",
    "revision": "916092f63ca2abd8567fc48faf486bdb"
  },
  {
    "url": "assets/js/15.642a0071.js",
    "revision": "09207b3dcd99b3403575f5fb91b28ffb"
  },
  {
    "url": "assets/js/16.754491ce.js",
    "revision": "460b13c817ea7ce7ac7a48b52333b9ef"
  },
  {
    "url": "assets/js/17.54f9ce86.js",
    "revision": "6c24b7f17dd41e80e0aa0ed3765484c2"
  },
  {
    "url": "assets/js/18.8562574c.js",
    "revision": "44e21491c125a46049a4e1058222959e"
  },
  {
    "url": "assets/js/19.e7be866f.js",
    "revision": "2515021aee5358f8e7c491494270aad6"
  },
  {
    "url": "assets/js/20.1f3c4dcb.js",
    "revision": "76b2aa4afd563a16966f5adbcf90fdb4"
  },
  {
    "url": "assets/js/21.5dbeda8b.js",
    "revision": "7bedba71a5f7f588285a5e329e2c7072"
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
    "url": "assets/js/app.8deeb325.js",
    "revision": "8ff279a3c0bc257d317d9ac5359b92f1"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "b97660ea87b9de0d4144d456f86cdeff"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "c31a825c05861d67d9b56eca08562e40"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "fa7f0411d18bfa17a3360340c2b21aaa"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "ba7605d64bb95025e28ebc82c3a7f6ff"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "4145a1566a7e7098e2d95f077eacffc3"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "b45b042ca288138011f56667ba02059e"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "8015891c33cb5505f908eeabe9af9e63"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "17ebc359f3f1d992d5ff6275d22d25ea"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "ce30f2d99166c581fcf78df340735009"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "d64794e910067c55492bf945f8c16de0"
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
    "revision": "67b3d5366368453cd73c268ff91ea270"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "e6e29ff16089ff2ec5cd1d14ca05b46f"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "b00a693abf10c58321efb23dd48fa082"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "89752a545bcc93203db6f8b74981e284"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "6e06f98152f074a27b57484db4bfe72f"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "d23e237907b14df620d05f89df7e50cb"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "79af524e4808770c0a3c855b932d3065"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "3dd2b1b2bbf2643708dd43d9d4bf39cc"
  },
  {
    "url": "resources/books.html",
    "revision": "28a7222cef41715db7f674bdbdf71b1b"
  },
  {
    "url": "resources/community.html",
    "revision": "dbae80944c76e9fae43a109b9463d0f1"
  },
  {
    "url": "resources/conferences.html",
    "revision": "f39db99c53c779891fb289523e5456ca"
  },
  {
    "url": "resources/courses.html",
    "revision": "5f11dddd7c5d445c6d8d1714653fc84a"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "14696a8ce7621b6de614a2b5f6a12314"
  },
  {
    "url": "resources/examples.html",
    "revision": "7e875d7ff70d34210bb8b05588ed73a3"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "c2fbd1e73e534d1e07b1068f8b3615a7"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "410a11766c9cbcf573864f3e54ff1563"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "16d10e662ce57e00c2ed69fe7538c130"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "64c0b64e759bcbef8d336f85bbdc11ea"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "a2ce4fa4c32b79b1c8856eef98b1b96a"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "b028b5c560ec6f49e34dd5ba594916e0"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "478b3767d7b9f3e0d858cc9866ee9ac5"
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
