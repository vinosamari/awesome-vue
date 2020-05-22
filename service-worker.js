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
    "revision": "8acb6b3eba9429bd915056850ae8f433"
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
    "url": "assets/js/10.a87ec863.js",
    "revision": "98ebb232b5763a17e1a105462c586a87"
  },
  {
    "url": "assets/js/11.3ce978ff.js",
    "revision": "aeae8d256edb6c1ef77fc865da85463f"
  },
  {
    "url": "assets/js/12.0b7f5bc7.js",
    "revision": "9ef8c22a770602a709756b03d6bc62f6"
  },
  {
    "url": "assets/js/13.4260c1c0.js",
    "revision": "e6163278699a6a6411c0998078e2e3ef"
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
    "url": "assets/js/19.27c1b466.js",
    "revision": "a49f66adf14fdb6df25d17033288d7a0"
  },
  {
    "url": "assets/js/20.ca84e85a.js",
    "revision": "4dcdad25ab69033905623e4b34903419"
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
    "url": "assets/js/24.71f0b033.js",
    "revision": "4fab995d86f4fbd09a3cd43aee759cbf"
  },
  {
    "url": "assets/js/25.9b22ec40.js",
    "revision": "0ada21b7dadb0fca3ca40a5ddab2f55e"
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
    "url": "assets/js/36.0ab1adc8.js",
    "revision": "7808da3cac8a87c6bef801400c5bcad3"
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
    "url": "assets/js/9.57e04c9e.js",
    "revision": "65096d62e2b10177def5eacc13769f95"
  },
  {
    "url": "assets/js/app.2aa77768.js",
    "revision": "2b7a4da56003589daac684b92e46ab1a"
  },
  {
    "url": "assets/js/vendors~docsearch.7ff8aade.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "779364976cb57ef27199cc7db956b4c7"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "331d13c49f46f917990c6399c09f9f5f"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "41d7f603f010d029b00eaad9a17df2fd"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "640b61999166ee29b9fda3d9ed7631f0"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "17ae07f6fc2aaf82c7c353018a49bd82"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "2006808bd3110a8b29a4e992704bb7fc"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "96cea77006fe2532048fc16022374d27"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "7008e35b515ba88ff6f6248fa6d2b1f6"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "d163ced03f5d0ef99d1cf96ed572e173"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "3e0fa3bbb49fc7e59755206194990df8"
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
    "revision": "1ee7702b71213db0416c3527aca00292"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "dea63f6b708f21e5adbe78eb229d3353"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "9d9284f37c81d0308d9af74d618c48b1"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "998d943bd5ae4e4fde3ac4f18829b637"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "c90eff69395535c649bf7c2f9a73e23f"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "5a370e467778d5fab07a200eb648d0c5"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "a96337853c647a6225dd64a625e0df5d"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "73854843c3560c583c77f1d2eee1293d"
  },
  {
    "url": "resources/books.html",
    "revision": "6dbd31f62cf82133b2bf3fee3fd5ae0b"
  },
  {
    "url": "resources/community.html",
    "revision": "fb4fcdeeb6455605448f454bc58d554d"
  },
  {
    "url": "resources/conferences.html",
    "revision": "e8331e6f628453ba186010733b901854"
  },
  {
    "url": "resources/courses.html",
    "revision": "ff00d7b5fccf7c473c69cb266362a4cc"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "ac1540784d14b23c172a67d000dc00e4"
  },
  {
    "url": "resources/examples.html",
    "revision": "a24b039b8cc15418bd8255aeed810c70"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "e1b62352d023df39e09b3239d26d478f"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "078f2f4081e94293fa532cdc6de3c7fe"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "3c5b85543017c6134e77b608682c4a27"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "1a1901140fc52924acd626fe3d9cf638"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "3ffd5ba852c7fb723b5988591f596a70"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "ebde6451f8891516b9b6a0544dd69d47"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "2d94ec46e0086108cabf5f3a05ec9137"
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
