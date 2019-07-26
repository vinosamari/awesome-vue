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
    "revision": "29c6b885d937d133707320fbe8d3fb3e"
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
    "url": "assets/js/12.ea85cf4e.js",
    "revision": "af73bf487cd6385668444d76ac253292"
  },
  {
    "url": "assets/js/13.db3771fb.js",
    "revision": "e5e408a9668670404428f5f02224775d"
  },
  {
    "url": "assets/js/14.c77ba4ec.js",
    "revision": "3b5a836b92455e480eab61f697da7a2b"
  },
  {
    "url": "assets/js/15.823fc451.js",
    "revision": "bd2948727c70cc01c9e29cca393d12fa"
  },
  {
    "url": "assets/js/16.656e0abe.js",
    "revision": "b6af5c1cac7b5a9c3636da6d77b3b052"
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
    "url": "assets/js/19.063087b3.js",
    "revision": "f3b64c823ae66fb780dc5df5afe5a10f"
  },
  {
    "url": "assets/js/20.6f89690c.js",
    "revision": "33b9d7779d555b5b17f97f255361607f"
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
    "url": "assets/js/23.55ae917e.js",
    "revision": "9ca5ab6ce1874810768a4336c05ee558"
  },
  {
    "url": "assets/js/24.59172474.js",
    "revision": "b96350e3e75f65827d4b43a4eb4533f4"
  },
  {
    "url": "assets/js/25.482a281a.js",
    "revision": "57e521c9ae94fc54ac01a6855337f9e5"
  },
  {
    "url": "assets/js/26.c6ffc122.js",
    "revision": "f510cea3177a074a33f69662d81d66d0"
  },
  {
    "url": "assets/js/27.2b4d3346.js",
    "revision": "958703e8e2d56206648387fa2db217a7"
  },
  {
    "url": "assets/js/28.9507d8f5.js",
    "revision": "e368ba9aa89650bf2041189117290636"
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
    "url": "assets/js/34.1b8f39a3.js",
    "revision": "42fa650f2d5feb2f7211503ef94e2d51"
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
    "url": "assets/js/7.cb843e88.js",
    "revision": "6596c2912508867a78b3d02b1ffe6c86"
  },
  {
    "url": "assets/js/8.3b2d1d32.js",
    "revision": "010d78db4c643d6670f99e287ddf1c1b"
  },
  {
    "url": "assets/js/9.e69ee9cc.js",
    "revision": "52f65287d28932c786d8df3b8466025e"
  },
  {
    "url": "assets/js/app.2225e0be.js",
    "revision": "227a38ddf6b85a6bfd19261cf1673365"
  },
  {
    "url": "assets/js/vendors~docsearch.80c21b79.js",
    "revision": "e682e320ba953c65dfc94bf2b450c2da"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "45292142e72340cbe3251cd4b6c43029"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "e07518d2a0e765963832b03720906531"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "ad634c08135c40695ac3439f3b699002"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "09d8eabab7beebf628841d1eaf15dc7f"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "b716b58a23c052e968176041561fab40"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "2534dca5757d9971b98bb371a1df9790"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "743b419bba861d61d3c1dca56b2a2e58"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "0064bea31c52ed6310828d935984cd53"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "fff120cb3345f91a06214139c843823e"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "46d87e132e412d6d0693277bf790e6eb"
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
    "revision": "bd1486bfd6b1827c2fa639380cd2fd6a"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "550319a2b09949bee97c7c8b3fd9c3e2"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "e28d50666a028fadc19bbe1aa841c793"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "96ad5825d9ea987727bb55dc6aa1d44e"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "cbf3a74f4ba2e4fb173c19891e0df309"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "e730fc47fe43ce259c894e0df49c8e4a"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "5c8f9cf61efef5cbf452a90081f0b47f"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "175951a54b47dd341132aaa5bbd2a73a"
  },
  {
    "url": "resources/books.html",
    "revision": "03f8bc4728cf1f96183a021522ee2bad"
  },
  {
    "url": "resources/community.html",
    "revision": "7fea2017b81ed3920eef9ec41f8ed9f5"
  },
  {
    "url": "resources/conferences.html",
    "revision": "cdee235de3ad7c8564b0cd97cf6f26b8"
  },
  {
    "url": "resources/examples.html",
    "revision": "16835367716da3894820d298d582230b"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "a0e167db45f94a93341e1c1fa8991d7b"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "7a8b3b459b159e3ab3bd2af068578173"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "df163678e21b1c3d632b6de3c28b5b78"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "afeb32f49173e0ccf7acf97ac6e9897e"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "0282f12349612d0bb0ae641bee64c63d"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "610046eab341836cd1acb0a3c36c04ff"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "10cf0f62e832ffcce0a0cdcac5e25e17"
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
