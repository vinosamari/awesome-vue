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
    "revision": "fef77be14d73b25b5c6abc48844fb629"
  },
  {
    "url": "assets/css/0.styles.faa55993.css",
    "revision": "135c90cff3040a651b1774cf15c05188"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0697bb0e.js",
    "revision": "77476eb0e7b1e371e3e139259d85eef0"
  },
  {
    "url": "assets/js/11.bff27ce7.js",
    "revision": "381d31a7d84b8738ad6c2f53dc541fe2"
  },
  {
    "url": "assets/js/12.4fadaa79.js",
    "revision": "f73cf2ac5bcd9fd913cdc8aa1637b4d2"
  },
  {
    "url": "assets/js/13.7fe87649.js",
    "revision": "5b3b74c74a484bb8638eaf68a9ae7edc"
  },
  {
    "url": "assets/js/14.2c34dbf1.js",
    "revision": "cf85be77a57d51422286739aa6c0bd43"
  },
  {
    "url": "assets/js/15.e108eeb4.js",
    "revision": "700d7acd91cdb152202a9890ec36b12f"
  },
  {
    "url": "assets/js/16.817b8a2b.js",
    "revision": "8479501658248764657a84cd2811dcc1"
  },
  {
    "url": "assets/js/17.7419e4a0.js",
    "revision": "7d6acf544da3729c617ae698e099216c"
  },
  {
    "url": "assets/js/18.6b2b7329.js",
    "revision": "e53da276511d4ae3de982278318683eb"
  },
  {
    "url": "assets/js/19.ac70fce2.js",
    "revision": "d3e869873825d83e8b803dba386cca26"
  },
  {
    "url": "assets/js/20.b008f0f9.js",
    "revision": "5b07e3ce272ff85b3cbca77c0ba6a107"
  },
  {
    "url": "assets/js/21.e4c68eef.js",
    "revision": "13be60ade15647087ca5f0bd592e8d9f"
  },
  {
    "url": "assets/js/22.42e4efa8.js",
    "revision": "81848eec5c57e78d5d73533d5f9be07a"
  },
  {
    "url": "assets/js/23.06d172a5.js",
    "revision": "8ed0a6444feec9a6f04916104ceca8d2"
  },
  {
    "url": "assets/js/24.c09453b4.js",
    "revision": "a50c99c98ab258102ff9cbb9e2a29bff"
  },
  {
    "url": "assets/js/25.74d296f1.js",
    "revision": "f2ab0a0be371574d2f6facbebf2d30d7"
  },
  {
    "url": "assets/js/26.1de66769.js",
    "revision": "f8556d1387032890da1fec05d20564da"
  },
  {
    "url": "assets/js/27.7fc57dad.js",
    "revision": "6ecdd2293ffa0681167eb83370daa8cf"
  },
  {
    "url": "assets/js/28.db4cff29.js",
    "revision": "a4466874bf796c8b1abe7dbc31dd8c3c"
  },
  {
    "url": "assets/js/29.209e5d3a.js",
    "revision": "470639f16242cb023fa40cff250fedce"
  },
  {
    "url": "assets/js/3.71767182.js",
    "revision": "42bf27c478e73a1f4d1365adb5937f5c"
  },
  {
    "url": "assets/js/30.7a029f9d.js",
    "revision": "d4ef6451fb3882b57436585b93d37244"
  },
  {
    "url": "assets/js/31.d6b03cba.js",
    "revision": "42d4cf8213d5145a9e6e74caecde4611"
  },
  {
    "url": "assets/js/32.0f2f394d.js",
    "revision": "edf8c1df15bb89435473c10d2ade8894"
  },
  {
    "url": "assets/js/33.51e41ca3.js",
    "revision": "fc6370c0ecba5675c74920a6d9e7aca6"
  },
  {
    "url": "assets/js/34.23de4028.js",
    "revision": "5fab9650a5daf1a4c6dc96675231830e"
  },
  {
    "url": "assets/js/35.37babc5e.js",
    "revision": "f28adc6205be9a464ee23f6b271e0cb9"
  },
  {
    "url": "assets/js/36.d2338b1c.js",
    "revision": "7ad90d2549949012c7995cc10531420e"
  },
  {
    "url": "assets/js/37.b29fa909.js",
    "revision": "0e1a4ce7d57e0efa914fdbdfc8473731"
  },
  {
    "url": "assets/js/38.269e883a.js",
    "revision": "9b326e773a8615b65d7dad3e6b072a33"
  },
  {
    "url": "assets/js/4.aefcdd70.js",
    "revision": "97c86b8cbb498634e80176b85825f76f"
  },
  {
    "url": "assets/js/5.5c135d5e.js",
    "revision": "055a4d6d5d68a436f05842f4cffbdd37"
  },
  {
    "url": "assets/js/6.d8b56762.js",
    "revision": "87f7cf8895d76371e075d90292b1abe1"
  },
  {
    "url": "assets/js/7.98f4d58e.js",
    "revision": "6ff48b173fe48d74f83d91ddae9ed94b"
  },
  {
    "url": "assets/js/8.235a4275.js",
    "revision": "75dcfdf6f15f57378aac1feb460306c1"
  },
  {
    "url": "assets/js/9.2a70800e.js",
    "revision": "9b1c61b42c9205e064861563a98294b1"
  },
  {
    "url": "assets/js/app.41ecfd7c.js",
    "revision": "b947c0a69f71d07edfdf81b4aca1dc3b"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "d3edc0d823280d83c2b0d3d644db33d6"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "c6ea0ac75988ae7c96bd56a226713de1"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "e254c82dc555b0241e9567e9907afd22"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "b7f8a12b90a1e82b5f9d20a1082d9b06"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "dd1814af7fcdec7c56e024c73296904a"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "fe082d6683cb267df1c3385f6f3f5e58"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "094ae9146caecdb20e89926d7ca2bf5f"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "fe40d2129e3eb2fd79667707a5317fb3"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "a51d895c10aecf1fe717c180548918d5"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "1c4822d8edb6331f6b20db76a6550ea8"
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
    "revision": "1bd7d0723be4940cfb7dcfd3d26dc4e5"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "d3d11edf8ca66c70f270ee4526a9f16d"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "47ddfee7d9c39a12f2feb2f369bda0fd"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "16848cee75e89e7c3a1cb5e25ae3f340"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "2d1469814d1a260d78875391dd2a2190"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "948ad4e406f1a57ff7ea7d110fe471c9"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "75c87b351810f92d9c2005372fbd208c"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "c7a80f3070985a570c4641957ddc5087"
  },
  {
    "url": "resources/books.html",
    "revision": "1c979a05958ac22cf9a43d7e55e3f421"
  },
  {
    "url": "resources/community.html",
    "revision": "e54f27d0fa7952507b1ec682bcb19ed4"
  },
  {
    "url": "resources/conferences.html",
    "revision": "81425274c0dff8b6e34c892a7a83968a"
  },
  {
    "url": "resources/courses.html",
    "revision": "ceeff6270c103e99c85dfa112dffdd9d"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "e47c396ddfb7b05404f692290f9357e5"
  },
  {
    "url": "resources/examples.html",
    "revision": "20810a9865531842ce1dc2f63ae5b8cd"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "af1020507b6f7f6d11ea8cb8dd6c7793"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "df141af79364c1c28be6a1e6648b3c16"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "7adc58600814d87fc8b84c495f4f322e"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "7dc68702195d47d0548dd09698320ea4"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "c98563bb6f02d5373a82c8364b97623f"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "808b91396ce39a30e977e76e2faf0933"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "678cc9dbb2d65f2d65db12dcb8ec8a90"
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
