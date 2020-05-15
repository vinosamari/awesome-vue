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
    "revision": "b937e875e031de26ee97c0f433de5865"
  },
  {
    "url": "assets/css/0.styles.8fc1956f.css",
    "revision": "370c44f8042e55929aa76df6d486a38e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f815ae7d.js",
    "revision": "562f840a49778ed02debe552ca2a8084"
  },
  {
    "url": "assets/js/11.eaf11f20.js",
    "revision": "ed8b1f4a4e387de1733c6af5042c28c3"
  },
  {
    "url": "assets/js/12.0b7f5bc7.js",
    "revision": "9ef8c22a770602a709756b03d6bc62f6"
  },
  {
    "url": "assets/js/13.d23f5d79.js",
    "revision": "fb7695e79c5d3702fc23638eef43f8b6"
  },
  {
    "url": "assets/js/14.80b37aef.js",
    "revision": "676b5be05c26853d9e69ecd30415287a"
  },
  {
    "url": "assets/js/15.c63fd429.js",
    "revision": "858294e9adb1221681394be04d8c4d40"
  },
  {
    "url": "assets/js/16.325a9ffa.js",
    "revision": "4aef88bbbf4c24ceeca098a9e40dd2c9"
  },
  {
    "url": "assets/js/17.fa9c59aa.js",
    "revision": "e3e8ac8dd757b1e91ca5901fed2957e0"
  },
  {
    "url": "assets/js/18.9a2b8f95.js",
    "revision": "f36f3b88782df9d2344878789f84f76f"
  },
  {
    "url": "assets/js/19.ad6ea5a8.js",
    "revision": "7afc803592dafd0b469a38fd6fafc835"
  },
  {
    "url": "assets/js/20.9db99b6a.js",
    "revision": "9cc27cfd0ceadbb4eb85cbb2025be74b"
  },
  {
    "url": "assets/js/21.c5626fe0.js",
    "revision": "bbf53c7c2cd39998d21e108fa8e0e11d"
  },
  {
    "url": "assets/js/22.4804a2cd.js",
    "revision": "8ed1189c70e48b1620d6f9577108e54d"
  },
  {
    "url": "assets/js/23.78d5e876.js",
    "revision": "7631c3fac1bea1ae769d01b704d2a216"
  },
  {
    "url": "assets/js/24.c4c2ee58.js",
    "revision": "7c99960cedcd0c957bc8a3ddf0baa743"
  },
  {
    "url": "assets/js/25.a2dc9613.js",
    "revision": "98f02d740b36ad91d278e7c0655c2b8f"
  },
  {
    "url": "assets/js/26.7ac08335.js",
    "revision": "b4a9a539f217475f3fecda0c5df10d83"
  },
  {
    "url": "assets/js/27.2488b214.js",
    "revision": "0df42188a58119425b812efc10dc2716"
  },
  {
    "url": "assets/js/28.34944976.js",
    "revision": "824eebaaa56f5ad0d581603b98deda6b"
  },
  {
    "url": "assets/js/29.e2e283c2.js",
    "revision": "8ae36adac97d3cf1bf4441c4abd37958"
  },
  {
    "url": "assets/js/3.819fbb24.js",
    "revision": "7123533c2036de474b1e457fb6b91d73"
  },
  {
    "url": "assets/js/30.d89616f7.js",
    "revision": "7982b4cc1202a6ea74d96b50f6bf3af3"
  },
  {
    "url": "assets/js/31.3a06df2d.js",
    "revision": "8eb0532c2b3b46acaede5dfa94ff5157"
  },
  {
    "url": "assets/js/32.42d8e2d1.js",
    "revision": "c500b68666f867841b04e374a9007581"
  },
  {
    "url": "assets/js/33.f5730dd7.js",
    "revision": "b84f75df16e498c23c433774c779a20c"
  },
  {
    "url": "assets/js/34.ca097f1f.js",
    "revision": "a12322e81333dcd911f6943d6c572e4b"
  },
  {
    "url": "assets/js/35.234c49ae.js",
    "revision": "2cbf3cfafefc29b8d752ea33d81dc25e"
  },
  {
    "url": "assets/js/36.721aca0a.js",
    "revision": "206e195fffd14d6324e8bd6fdce1b067"
  },
  {
    "url": "assets/js/37.b36000cd.js",
    "revision": "adb719577316e71f6c76d4a698585963"
  },
  {
    "url": "assets/js/38.b4218f7f.js",
    "revision": "8ef6b6dc845aa4ea89248268b8d90fe1"
  },
  {
    "url": "assets/js/4.a5b20dae.js",
    "revision": "7a06f2c82abedb3ae539f031dbcd37b4"
  },
  {
    "url": "assets/js/5.666f6940.js",
    "revision": "53f6787ef3e87b01413d5363c80fefb3"
  },
  {
    "url": "assets/js/6.91f8f894.js",
    "revision": "e546742eca0669946aa4216528f667cf"
  },
  {
    "url": "assets/js/7.f73304c2.js",
    "revision": "e41fb9041606040795932459d9292a34"
  },
  {
    "url": "assets/js/8.487371aa.js",
    "revision": "82ae970773f81e7e8194562ac3078328"
  },
  {
    "url": "assets/js/9.0afd2772.js",
    "revision": "b2bc8ee9fa714004c2c8e7f9df1ab5e9"
  },
  {
    "url": "assets/js/app.ffd61ec2.js",
    "revision": "9af00f8a854ffada171b6aa2b9efbbda"
  },
  {
    "url": "assets/js/vendors~docsearch.7ff8aade.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "9f0a98975b232aec942ed0523265a419"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "bea49779d31952e216dbd21a83ce9d27"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "6277a1e7fcc8416c93929ecb5495c6c4"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "e109c02a2ddd500bd23bd49c691cb4fb"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "5a1e7a47a69ed351f68d3fa65ca52be7"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "7a31d5e0b735bb4a2c864f397919bbe1"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "acea4256b11df08ff19e07f622ce6aac"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "975ed26e66e7c3d297cacd86bc6eb4d3"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "81d2050a5b8d6e947d257636b2adeb0f"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "14fcfbea6912eed2724ac37539d955ea"
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
    "revision": "f7744ae9fa60e1d311c55bbb66355e0f"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "f246120b98104a7f0495f3298fde61fe"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "449870e1169cb22bb95983fef32672a9"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "1b2c9fe272076542f8e5cf73369e6e36"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "1c5865c08490ae99c2328e0c07f4d5f8"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "eb204f8f54300953e982df18909ababd"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "a4e9e44752a152f9a5ca6b17c2442d9f"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "2e60a22df25a200c878fa6da4910ac14"
  },
  {
    "url": "resources/books.html",
    "revision": "d7a370d9f18adfb7820d04aeb31039f6"
  },
  {
    "url": "resources/community.html",
    "revision": "1efc7165715747392a723c522a7796ff"
  },
  {
    "url": "resources/conferences.html",
    "revision": "8d08e6a6c83a0c6fb915b575a10250f2"
  },
  {
    "url": "resources/courses.html",
    "revision": "19a1a10c6fcdb87b26a3f271dc4cb6d5"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "976116ffe029402b070c7630a0457986"
  },
  {
    "url": "resources/examples.html",
    "revision": "218ef4062a9a44413820147fed372c05"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "3d09d5b3d3cd9228fc8fcce15ce23efe"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "35f1758dc056f618b06b3b3dd5dd2e80"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "3af6695ce87ff20967c4504bd571991c"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "7c4b4b57a06d4b9cdd0f03cf603fb173"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "3cc4922506ada8743565b4e07742ccca"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "a2493a6bad466189d7dce12d1168a26d"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "bffbcd5a1d32590c1ff86c0d8beb652b"
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
