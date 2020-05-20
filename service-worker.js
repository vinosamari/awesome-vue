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
    "revision": "b8688c6cdaebb597282ea4d6c4fed579"
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
    "url": "assets/js/13.e70fb42a.js",
    "revision": "e0adfe1854f5c8201a640a8f77ba805c"
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
    "url": "assets/js/9.57e04c9e.js",
    "revision": "65096d62e2b10177def5eacc13769f95"
  },
  {
    "url": "assets/js/app.0dc124ab.js",
    "revision": "dbf751b995ac36837aef65ecca2d0956"
  },
  {
    "url": "assets/js/vendors~docsearch.7ff8aade.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "653820a45e86feda7a3d4f2776d04db6"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "622c351052622195afa3cc4c12b8af14"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "67223845c23ea62fa8ab260a20fcfefc"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "074330f91aba6e8cec93c4dc08aec8b1"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "c4841dd5fd4cebd55fb8a8cf906bc412"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "388f65abc7fd2cdff11b2fda0efbfc48"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "a97b1a5d997108882a63c1bb4570d004"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "e6ead8ac90319e751f97cb6e94f3412e"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "78372dc17df0e68831fcce98840af812"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "2d896a7743ee10c69af5f31ac6454afe"
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
    "revision": "90bfdcfc3ef4aea4c53195dfc1a40cd6"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "41ccc3706ca0fccf851382eb4f2617d1"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "5f238b04bea22bbb2437499d761806e3"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "0b0f35726462c1d5e139c5ec1c98a2e6"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "9396a70d595970b3deb7a023d81199da"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "f80c14e23da04130e398080040a790f4"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "24bd0db4fb9bbe4d7ecd1be6a1edd052"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "70879a24c08d59ee06f8a97a38c7e35a"
  },
  {
    "url": "resources/books.html",
    "revision": "992a63efa7fc2ecd32fbdc0779de07bb"
  },
  {
    "url": "resources/community.html",
    "revision": "25dde2157e3a7dc9ff9c8503b2982c8c"
  },
  {
    "url": "resources/conferences.html",
    "revision": "2311eb3470d4965accb5e7bec9a86f38"
  },
  {
    "url": "resources/courses.html",
    "revision": "4115580cb0033ca856762e4aa0e205e8"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "a1aa029dc1f497f827b761c69910f1d2"
  },
  {
    "url": "resources/examples.html",
    "revision": "807483127490989316b4131a71facaf2"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "c4e277dfd5190e027fc8c21b33e228b7"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "28b434ef44a0d8619bdadca1eff17c64"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "da8be329307228934c6c4f3edef017c2"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b6098917cc71a82a0250e76e595d4ec1"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "6a234991f55894c05856363cceffd7c5"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "1f7c9b242562333f24f5dee44a455907"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "d26613993e2716e9ec862ce1e4798668"
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
