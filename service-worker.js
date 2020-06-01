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
    "revision": "08ee0d145a7e2fbc0e78b20f85b3116f"
  },
  {
    "url": "assets/css/0.styles.2aa3027d.css",
    "revision": "370c44f8042e55929aa76df6d486a38e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3658515e.js",
    "revision": "98ebb232b5763a17e1a105462c586a87"
  },
  {
    "url": "assets/js/11.ba96a8f1.js",
    "revision": "aeae8d256edb6c1ef77fc865da85463f"
  },
  {
    "url": "assets/js/12.34992ceb.js",
    "revision": "9ef8c22a770602a709756b03d6bc62f6"
  },
  {
    "url": "assets/js/13.c1db0df9.js",
    "revision": "7d5ec8f5bb48a7d8d91d01cb049bfcea"
  },
  {
    "url": "assets/js/14.af55f0f4.js",
    "revision": "676b5be05c26853d9e69ecd30415287a"
  },
  {
    "url": "assets/js/15.120d3c80.js",
    "revision": "858294e9adb1221681394be04d8c4d40"
  },
  {
    "url": "assets/js/16.5604ad7d.js",
    "revision": "b876f387acac0e9b6d8955996eae9c4b"
  },
  {
    "url": "assets/js/17.1235d9a3.js",
    "revision": "e3e8ac8dd757b1e91ca5901fed2957e0"
  },
  {
    "url": "assets/js/18.850c42d5.js",
    "revision": "f36f3b88782df9d2344878789f84f76f"
  },
  {
    "url": "assets/js/19.20c5967e.js",
    "revision": "1d267833d694de6cb2db8fd1149d7f68"
  },
  {
    "url": "assets/js/20.46ba5f6a.js",
    "revision": "4dcdad25ab69033905623e4b34903419"
  },
  {
    "url": "assets/js/21.ee295a0e.js",
    "revision": "bbf53c7c2cd39998d21e108fa8e0e11d"
  },
  {
    "url": "assets/js/22.f784833c.js",
    "revision": "8ed1189c70e48b1620d6f9577108e54d"
  },
  {
    "url": "assets/js/23.ab267dfb.js",
    "revision": "7631c3fac1bea1ae769d01b704d2a216"
  },
  {
    "url": "assets/js/24.e0869f58.js",
    "revision": "1f53d00a56ccfd47896dfff15ed080ea"
  },
  {
    "url": "assets/js/25.1bd06c1d.js",
    "revision": "8005d9e13c806766a997d85fe7be8e2a"
  },
  {
    "url": "assets/js/26.06c1b3ec.js",
    "revision": "d130d0d0e0894a3970524732aa10e1b7"
  },
  {
    "url": "assets/js/27.dd55005d.js",
    "revision": "20dea440db99d43f50f65da4d8985a05"
  },
  {
    "url": "assets/js/28.a37bd21a.js",
    "revision": "5ab8d3d743ebe3bf5c21968860eaae76"
  },
  {
    "url": "assets/js/29.3ea09148.js",
    "revision": "9beeb569c6535bd2c85907f61825541c"
  },
  {
    "url": "assets/js/3.8aa232f8.js",
    "revision": "f0ae3476b63d06509737e47f70be51fd"
  },
  {
    "url": "assets/js/30.6cd27aaa.js",
    "revision": "7982b4cc1202a6ea74d96b50f6bf3af3"
  },
  {
    "url": "assets/js/31.cd5d8193.js",
    "revision": "a1256db9efe898813c50b0d101fca6f0"
  },
  {
    "url": "assets/js/32.4f71cb37.js",
    "revision": "faf5955fd189a86c20e1614445caae1c"
  },
  {
    "url": "assets/js/33.690000c0.js",
    "revision": "712fdeb330bde70d847e2e9f6a835286"
  },
  {
    "url": "assets/js/34.2a4cb547.js",
    "revision": "15acf5afde769ce2cf46bed673d3d8c5"
  },
  {
    "url": "assets/js/35.ada63f66.js",
    "revision": "28e53f12b8725e2d3d31f51463c96039"
  },
  {
    "url": "assets/js/36.0a39c4b7.js",
    "revision": "d7167b01c16526758f1c3a1f62aa57cd"
  },
  {
    "url": "assets/js/37.c8b8b8be.js",
    "revision": "d95f944c83304df6b13928f22298a248"
  },
  {
    "url": "assets/js/38.fedfc4e9.js",
    "revision": "8ef6b6dc845aa4ea89248268b8d90fe1"
  },
  {
    "url": "assets/js/4.33a8c835.js",
    "revision": "7a06f2c82abedb3ae539f031dbcd37b4"
  },
  {
    "url": "assets/js/5.f96485b2.js",
    "revision": "53f6787ef3e87b01413d5363c80fefb3"
  },
  {
    "url": "assets/js/6.273712c1.js",
    "revision": "e546742eca0669946aa4216528f667cf"
  },
  {
    "url": "assets/js/7.183efc3c.js",
    "revision": "e41fb9041606040795932459d9292a34"
  },
  {
    "url": "assets/js/8.cda03df7.js",
    "revision": "82ae970773f81e7e8194562ac3078328"
  },
  {
    "url": "assets/js/9.70647bdb.js",
    "revision": "b3334324963ed127733a211ad29d91bb"
  },
  {
    "url": "assets/js/app.59e1e1b7.js",
    "revision": "61b90a10491528c5b3a1372503c29f46"
  },
  {
    "url": "assets/js/vendors~docsearch.9bd2c564.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "0221f0cafd2d67f6a427d62dbaf370e2"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "27cb59a5c2da3d8ac6c48896d6638949"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "1adf1997022c123d7d4c3aaef69ac4fd"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "918d3d5a66c08cb79aac9e5c76763d4f"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "5f9909564fd961bebbcc3f190e924dac"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "f344764bc38a5379284d0fe2817eb548"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "fc4a6ecf203cbcd9ab31a08ba1235dce"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "adf10e9dfafe89910edd47884d4d6c34"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "fa001384d06c4628d11ea5813bde26ff"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "58c38d053c30c5751244b0cc3d3a9ad5"
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
    "revision": "6659e13c724ae75857e4f55fdd330f7d"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "c04a019185f6db65fb3d3c7849bca1b5"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "1d33e4eb0895a9e02064ec49fb189f8e"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "18b984e1ab01e764ddc1760c705cde1e"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "877912765d5310a304a2f877b0a8e55f"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "0cd157a6720391ed1efdb332b571ba8f"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "e8dec65fea4f8443de879a1c335eadab"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "900818f7e418bb9d59b93596754b3a91"
  },
  {
    "url": "resources/books.html",
    "revision": "d1b5ea351a61a1727d350184c17f0eb9"
  },
  {
    "url": "resources/community.html",
    "revision": "0acc7c5a23b54e97b46b1387bef55334"
  },
  {
    "url": "resources/conferences.html",
    "revision": "d21818ba9967174c89639979e95f50bb"
  },
  {
    "url": "resources/courses.html",
    "revision": "108e94679142fd4a0c3a34e8f837eab7"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "8cbf96c837aef1d619c6165e50c8bce1"
  },
  {
    "url": "resources/examples.html",
    "revision": "b868e11b2cab64ca5b348265bfe333c7"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "94de7dccb6b645ad1bf9477deb08df1c"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "d679062193ce16aafeeec8f323b91927"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "e045314e81a516b9ada5685a3a2e18ec"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "f5ee818dcb5a23eda53db40564766e65"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "ec1cf1827d5efbebed0232a5d9ae611a"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "b18ad80191fa3d856b9e92c7bac78e24"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "327683e0642e25bc975df96a0359453d"
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
