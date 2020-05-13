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
    "revision": "109ce26cba6187a0fe799473d950d5dc"
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
    "url": "assets/js/10.f8d1fd71.js",
    "revision": "d7b635f57c459642ea6ce1fcfab4e05a"
  },
  {
    "url": "assets/js/11.eaf11f20.js",
    "revision": "ed8b1f4a4e387de1733c6af5042c28c3"
  },
  {
    "url": "assets/js/12.5598564a.js",
    "revision": "a232069a7ffc473763ab13a872d1dd91"
  },
  {
    "url": "assets/js/13.d5d945b0.js",
    "revision": "910222b7c3910e4050a0cb3eebd7c267"
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
    "url": "assets/js/19.8a891692.js",
    "revision": "b107a0dfda532e5b6929a28b596bd8af"
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
    "url": "assets/js/30.5b1563c2.js",
    "revision": "666cf6f80068c3e0defaa76814cd3c4c"
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
    "url": "assets/js/36.6b724f7f.js",
    "revision": "652ab801c6a9b594dd3bb4cdc22a057c"
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
    "url": "assets/js/8.1c6499b7.js",
    "revision": "26d27075977d120b4be5d6a1a6a6c347"
  },
  {
    "url": "assets/js/9.927d638b.js",
    "revision": "3dbf52c055cc8103e9ecf505bb886d98"
  },
  {
    "url": "assets/js/app.feb356be.js",
    "revision": "ff2446556d8b79136d3cf5e6d3eafab0"
  },
  {
    "url": "assets/js/vendors~docsearch.7ff8aade.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "f772222fd4beec1a282c0044a239198c"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "3acf4fe993d56880d40cb13f7b6b9ae0"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "61acd7a4e594a4110f4e2db9db737c92"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "8d95e1dc4e50bd2350f5a7e12f643eeb"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "f6d9898ad6c92a71c184b692745c009b"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "d125f9733312f7aeb55c02adc3119be9"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "445b6e1125cd7c888956a64975342217"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "dc6b177f99e1ee1af8695064373805ac"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "242214553dbe7159ac29b27824ca4cb4"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "7bf3a197e3a54a65e4db5b5002671586"
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
    "revision": "301baf3d084276d301b1a80c5c336ad2"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "f9733dfb7b98d7ae30cb2efbc19ce6d0"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "8f2c6787b24a7b8bf2632fcbebb1792b"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "09966173376df99977360ced79371316"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "93322f6c835f24728965b7b5090e3e9d"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "0dd59196d72520c199916fec7ec93aaf"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "7456d48ef4e26945a50f6fe6dc1ac412"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "643e157ee525d41ed6171d0c158a941a"
  },
  {
    "url": "resources/books.html",
    "revision": "f5fc4621ee3566ba02576821ac6318f7"
  },
  {
    "url": "resources/community.html",
    "revision": "26728765c7f9b82e9fa02bf6c8616816"
  },
  {
    "url": "resources/conferences.html",
    "revision": "d24674095a8d2782dc125c6bb4f221d8"
  },
  {
    "url": "resources/courses.html",
    "revision": "142065b46c5bc39d87a1c20af318d851"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "7e847e9c084d6066c88f79e36912e3c4"
  },
  {
    "url": "resources/examples.html",
    "revision": "da5d143769fa220308f4160c7309ddfe"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "83d1437d165a426e0d8edb1442322de0"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "8121d57d9057a4335ce4582bc32eebe1"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "90b3b5ab42191be78efab62908d4b5f3"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "e75400b8dad136eb17a34a6e7b740188"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "bc571897ee506eefb8330717b6cb67be"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "17d6339c7817c593788838151180e736"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "f292582e6a10eb1584f6cf2606ca2947"
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
