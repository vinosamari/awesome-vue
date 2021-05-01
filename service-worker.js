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
    "revision": "67666295bd25db5e821b7d93b841b38e"
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
    "url": "assets/js/10.554abf67.js",
    "revision": "45a5b93201c685e03ce704d12b436791"
  },
  {
    "url": "assets/js/11.df5a3e51.js",
    "revision": "43e3f04373cfa47232c3c697a8887989"
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
    "url": "assets/js/14.9a0e7b96.js",
    "revision": "8e4352c7ba5fc3ced88c760cba105214"
  },
  {
    "url": "assets/js/15.4cc629cb.js",
    "revision": "51f9fb65ff2073293dd961e15ce0fb32"
  },
  {
    "url": "assets/js/16.754491ce.js",
    "revision": "460b13c817ea7ce7ac7a48b52333b9ef"
  },
  {
    "url": "assets/js/17.6b68a01b.js",
    "revision": "4ec05dc6e5db29e7bad76e13309a2e61"
  },
  {
    "url": "assets/js/18.84489e22.js",
    "revision": "08953fb3925402a03eabaa1c2f508b88"
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
    "url": "assets/js/21.98ea8303.js",
    "revision": "1ffb7e9df0a7b11161b4192217bfa9d9"
  },
  {
    "url": "assets/js/22.4c6108c4.js",
    "revision": "13eba00665361d5e7a37a27aff39f7c8"
  },
  {
    "url": "assets/js/23.bd94f34d.js",
    "revision": "edc946a6608c860fe60224886488d962"
  },
  {
    "url": "assets/js/24.ad2a8868.js",
    "revision": "23ff4db04c4700b2e96071ef444e6079"
  },
  {
    "url": "assets/js/25.a90cf28e.js",
    "revision": "0119c92ffd23c0a2feff2b2040a2b1a7"
  },
  {
    "url": "assets/js/26.751298df.js",
    "revision": "306dd0cdb310cde631d2efe241d316b5"
  },
  {
    "url": "assets/js/27.a5e9bb56.js",
    "revision": "8a5db782e3464161a5183f2d6337a93d"
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
    "url": "assets/js/33.5e17d0f2.js",
    "revision": "87689b999eb7fcdfc35844ff1f0c7fd0"
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
    "url": "assets/js/app.fbaedcc0.js",
    "revision": "0465ed4e892ef10343b82c96d54cb3b7"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "f5da789a358ea9ee7d1638ae323b8860"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "d60de6ce09a0d75375f98c673af30915"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "f65f9d93ac373da941f77b01855f5002"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "0f3d9acbc7a6ce508e335209f0c38074"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "8ac6e7328770c78a4b6faaccc33e604e"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "8dc98265cf768cb9df4662ba1f6d3ef6"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "0b6b6a2852a306cbc2783006ee533470"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "f91d4fdd554cdd2e7d3d572cc0e66669"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "6604d3535a1e878dcb88ccb5dad3a6f6"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "48b62cf16c068978169c246ed1bb77e4"
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
    "revision": "3955db03d527068d10763dd458e19ef1"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "4363fe6f712584dc632ddc9d8c1db7ee"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "c5a4971f755e4a7ecc27debbc0c613eb"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "aa36a2dec454bc83ca576b49b9c77ff7"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "96cb9fcbff1bc7877c9124630f44511e"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "85ac9736cee5dfe91bc701131946ba6f"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "d95cb39c4052dd8dd962065bb733e11d"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "91a1d560df8ba4f89b4fb6454583113c"
  },
  {
    "url": "resources/books.html",
    "revision": "26099130e397036465a96946dee374c7"
  },
  {
    "url": "resources/community.html",
    "revision": "c62d4e2c9bffca7d0cabd6e177101a19"
  },
  {
    "url": "resources/conferences.html",
    "revision": "82e54812e3b70a73579a3924c451e097"
  },
  {
    "url": "resources/courses.html",
    "revision": "b506ea91b93511209e76aaa27e2a59f9"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "ac4528f1e313609be753752e8acf32fe"
  },
  {
    "url": "resources/examples.html",
    "revision": "ded7e1ee56f451f4a17276b78b4106d3"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "7fef888700e54a20ef9ab870b06050a1"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "402411c121015de3d106bb5564a2b35c"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "3f9edc13b4449d94bd5fd76c38c6ceb7"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "bee2058fa75b26fa5db3a4f6e230f172"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "db88b7ec6ede882c8bbd6112581c3c3f"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "ec8bd66413b2bebcc891ddfd5d39cda7"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "332e0fde11a437f2f65edfeabcea4730"
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
