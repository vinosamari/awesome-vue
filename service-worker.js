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
    "revision": "6b20e523f4ad116e1a84e04278ac5adb"
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
    "url": "assets/js/13.1147f95b.js",
    "revision": "968e31c54cb2ae736dbfcd0994117365"
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
    "url": "assets/js/app.ff89f5eb.js",
    "revision": "d7e4a90707bad8437b00444e4604abbd"
  },
  {
    "url": "assets/js/vendors~docsearch.7ff8aade.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "8ee85b84c4ac32e777931883fccd86c6"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "707acf7fa6ca19a0e07d4765e161014e"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "0fc27d32a73506e00f6776c086d329b9"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "414d75fad035da3063bce3360de95348"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "3a40d9cfc8a1c73eac8feed371c72202"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "fcbcdc2c860cf530132644e72d219953"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "67444eb2575adb61926b39d3378cde12"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "9e4b339cdf25fa9ca2cbe88f690da6b9"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "6597a7791fd47475afb1e19ea716266c"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "380a23b92a937f3a64cf4d2ca20a8037"
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
    "revision": "ded01a465f99190ab4bdffced06b8440"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "af491ea0d31dfd4614c411d471d8d5fc"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "e5d40f1458165fbebbc7ac8aeea2f96e"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "427aca04035a31975c60dfb6b2e32c0c"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "6c4347b69b140d27189045b3c1669e8e"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "30a94d60bf1e37a6a26db1ededf0d99c"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "a4f1dbf4b5b6113295ea8a20f104d556"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "a591728cd609ebf32d5d597013b7bd63"
  },
  {
    "url": "resources/books.html",
    "revision": "fa582eb8b21868dc9c3cbce3efedf04d"
  },
  {
    "url": "resources/community.html",
    "revision": "1409fb9e062b747ca21e807dd191f7a0"
  },
  {
    "url": "resources/conferences.html",
    "revision": "3032f3634d6ba756ed5b24ef22c2a067"
  },
  {
    "url": "resources/courses.html",
    "revision": "d6de3b22623fde680019211816003b80"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "288c12021fcbe19b20b8f1c7dee713f9"
  },
  {
    "url": "resources/examples.html",
    "revision": "2a632b0678d7c6ff984511730417541b"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "30621bf66acc338d2c18f693389599b4"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "432c283f17c7372406d655105ebc2b66"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "13f7c3a91f59ee9fe5b7c950bb23a08a"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "07f1cb30645e9591511eca2a262c35aa"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "0cea7ba1b40557d05f3085e0250f62b4"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "039697479f0c44d0a3b57be41ddf4e87"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "338f26cd89264ec8845bcebd329787b9"
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
