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
    "revision": "efe69c151bc6c3c71360a92a01a604df"
  },
  {
    "url": "assets/css/0.styles.f2d66872.css",
    "revision": "b0ead893d9c8cda1798254163cf87b92"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e3548f90.js",
    "revision": "82439d386f68577eaaf57fd48990058c"
  },
  {
    "url": "assets/js/11.c20da763.js",
    "revision": "bbb3b6ebadea106082e9ec2b9db536ca"
  },
  {
    "url": "assets/js/12.e226f7fe.js",
    "revision": "eec467df5086584144e75aeafff6a9c7"
  },
  {
    "url": "assets/js/13.3b31f6c8.js",
    "revision": "f81204b9c1296a9691196d7b5cb9f397"
  },
  {
    "url": "assets/js/14.c77ba4ec.js",
    "revision": "3b5a836b92455e480eab61f697da7a2b"
  },
  {
    "url": "assets/js/15.90929ead.js",
    "revision": "9d0942cb32e247ca8b6396f4ab14e795"
  },
  {
    "url": "assets/js/16.a72d6993.js",
    "revision": "a237edd2de5b2b2864d325537e2afe94"
  },
  {
    "url": "assets/js/17.c2166bc8.js",
    "revision": "cdefcdb6aca34d09354f1f5e354d97c0"
  },
  {
    "url": "assets/js/18.f38d623f.js",
    "revision": "81969345f8675500677acdbb70294cb3"
  },
  {
    "url": "assets/js/19.f61a1507.js",
    "revision": "d24a1e8210c0735cf8b5caecef2ad984"
  },
  {
    "url": "assets/js/20.e3815536.js",
    "revision": "c212f20dad6d30ff00c9221faa57b356"
  },
  {
    "url": "assets/js/21.8dc8c226.js",
    "revision": "1a30e17cd3eb0f4194cb8c49bb45edb8"
  },
  {
    "url": "assets/js/22.1884d997.js",
    "revision": "cb3f32ec36ed46b50a5d952c84b5b9dd"
  },
  {
    "url": "assets/js/23.526d12b2.js",
    "revision": "33ee05c7af519d62893de8b39a15b72b"
  },
  {
    "url": "assets/js/24.f2437997.js",
    "revision": "67d51905620116e24ae1cabe9608f459"
  },
  {
    "url": "assets/js/25.482a281a.js",
    "revision": "57e521c9ae94fc54ac01a6855337f9e5"
  },
  {
    "url": "assets/js/26.077eb7ec.js",
    "revision": "674e05f212275186df6a97111187fdf1"
  },
  {
    "url": "assets/js/27.5f4ddf7c.js",
    "revision": "2f782bc693ef758cb35ee702f1f23a89"
  },
  {
    "url": "assets/js/28.4daf913f.js",
    "revision": "4059cf8e4c087a286f5181a59bb85c6a"
  },
  {
    "url": "assets/js/29.98895ba5.js",
    "revision": "4b536aa47425889737214462774e9e32"
  },
  {
    "url": "assets/js/3.b5597dae.js",
    "revision": "ee76ab649944bf8ef533dee9db982ada"
  },
  {
    "url": "assets/js/30.20799f9c.js",
    "revision": "a3f84611e97df37bafb12681339e7ae4"
  },
  {
    "url": "assets/js/31.1d09254c.js",
    "revision": "a2a6a4e2a20c80c0e1d1e60017f92752"
  },
  {
    "url": "assets/js/32.793052ae.js",
    "revision": "a2bd80cc3c3840bc3648ba4989741a8f"
  },
  {
    "url": "assets/js/33.21b7344c.js",
    "revision": "f9ae40bf2595d6c6ea85b947365675a8"
  },
  {
    "url": "assets/js/34.c933cc57.js",
    "revision": "d5d9dbd2c95556d8505d41104cb2fcab"
  },
  {
    "url": "assets/js/35.d4e95ef4.js",
    "revision": "782d0d3ef7399744d2906ddc802a24fe"
  },
  {
    "url": "assets/js/36.8eca5c21.js",
    "revision": "282842aacc3cbad90588b72458c716b9"
  },
  {
    "url": "assets/js/4.2dc29d37.js",
    "revision": "0c224f6b332f729c068f1ffb8ec01541"
  },
  {
    "url": "assets/js/5.1bee0a90.js",
    "revision": "5dacac8b25a388ddb7009f3123cdee34"
  },
  {
    "url": "assets/js/6.6e5008f9.js",
    "revision": "47192ebe55107d3e4b04c9cee8112f02"
  },
  {
    "url": "assets/js/7.f1b22237.js",
    "revision": "7d21a5f275a064b24f304541856aa640"
  },
  {
    "url": "assets/js/8.3be93a39.js",
    "revision": "3de4609fafbaaecdb3768e0a4cc92f1c"
  },
  {
    "url": "assets/js/9.e6c48a9e.js",
    "revision": "cf4b8285d446ffe003aa35df39381d17"
  },
  {
    "url": "assets/js/app.d2a7ff26.js",
    "revision": "53bc8c7ee492de7f29f59c65ecf48755"
  },
  {
    "url": "assets/js/vendors~docsearch.80c21b79.js",
    "revision": "e682e320ba953c65dfc94bf2b450c2da"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "7b7577eb8abb22e78feb3c7072cb3163"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "a856295fc270455e07723ae64c9aeebd"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "86e35a7dfd3a73e0990a7d0fdc7d3f18"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "d55b10eb71783d2d4d5f7828ec3ccff2"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "351342840d5b3d69b880dd24097e8f81"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "bf935cc69b915fe143e98222ad6a5964"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "923679dc6900f66d03bb61b22ea2fe84"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "edace78a342b9e778a6c2c4f28a3a99d"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "fc2eb52cfabc2e3ca1655b7c69b1e080"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "445cb6fc2abeeda0370fadfe1c50e826"
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
    "revision": "69fc763ef906ae054d4e09392d11630e"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "b763df0bbb43abdae52f07ac490ce4cb"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "b1725e06a9c5e32cce6e49b9f4216c63"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "0d00058d279a1bcd3a4641a1e5864b79"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "8b4484cac5f256e21a862fa59e7e73c8"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "a8ed5055a59ffa5b625ac744c7def711"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "1db11d8a6098d5a3c7ebbdf815b113b9"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "ccc914787fff130d50c6276f3e7dd2a9"
  },
  {
    "url": "resources/books.html",
    "revision": "a800f4f15831cc92a62618c83e5f46c1"
  },
  {
    "url": "resources/community.html",
    "revision": "be452c2e65f5b3d9fbdf188d3d0a2579"
  },
  {
    "url": "resources/conferences.html",
    "revision": "df4be67c1063f6cbf94872bf956235cb"
  },
  {
    "url": "resources/examples.html",
    "revision": "3756a8e2600a38f004664f6f2a1ff672"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "cd039c67614688f334fca0bb792eb0be"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "e9bb76534ae254946efd569ad458aa40"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "1a4f4a5c4ed324d818b50741689c16c0"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "a686663d4fce3564823100e509e33e04"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "4ec1b071cc0310d16d22cb0d60798074"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "43d99b856a22562c8a85d54d67cd0164"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "ec563aca58645c39ec57563c0b56397b"
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
