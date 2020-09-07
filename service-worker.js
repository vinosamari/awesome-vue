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
    "revision": "1c5e7319d84eab6f56c36ddc1335c62b"
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
    "url": "assets/js/19.301d58b2.js",
    "revision": "c85dbf08ec12e3cd2a31ac8658f74e38"
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
    "url": "assets/js/23.0c5d14a4.js",
    "revision": "35fbe09786e4cdbeeee3d5733f05d5de"
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
    "url": "assets/js/app.1e0d403d.js",
    "revision": "68fb7449c05c3461c7fb8699df331164"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "c4acd2fc61130eccb1dcf78d8cea1488"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "aceecf3c3813e13f8d5e5c1168516526"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "ef8827ea689cb0065037e3c2733d0b6b"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "07ad54fb32c02b474931bacc40e7566d"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "fa1feb21f7412485c87cc470075f107c"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "19ae856165a0c67a5f1754b046064272"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "a3f70ca8804c8eb8254b4be768814dd7"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "9368d2e5503c1418d57cb380f81585ca"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "48a2e72550a91616ceadcf0e2f1c0f5e"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "bae77f021e42b283bc0ecad78f01eadd"
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
    "revision": "bda21055de540efd9cddab79f26ab343"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "e9c9a12fceb6ba4ec0ba9693b65daa44"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "a1080bf353e71b5a0c608757eae6d902"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "69e2858b1a9dda062219748841323811"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "837a44cd098554e5de8b87cc1bf51c6b"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "23c51425b989a440aa0d079ada2fe1e0"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "aa9db9750fa6745c8aaf7cebe8d85cd3"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "db0742a3da9785f7e0a66f5726a39733"
  },
  {
    "url": "resources/books.html",
    "revision": "487a0c454a6daea0f4dfb5687c2a629d"
  },
  {
    "url": "resources/community.html",
    "revision": "5d5a824ba2032f05b517c7ac477ead08"
  },
  {
    "url": "resources/conferences.html",
    "revision": "e8a59b6f19377251deb217f8444db0ce"
  },
  {
    "url": "resources/courses.html",
    "revision": "96be48b7c2692865433521f73631b53d"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "95fc9b8d73c012222b378b289bcf4b08"
  },
  {
    "url": "resources/examples.html",
    "revision": "cc281a5b5443b01e89209be0bfb2dbae"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "efe4169393843300460935d78c031fb3"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "218027ac37282fef84ebc1a3239da521"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "776386389b51ff521d6675fa7016ad62"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "0fa08b62330bf7e054ed5902cce77acb"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "47bf859c05dd7509c975b067c50af574"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "c85daecd266df074b6e10442bc60fbf8"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "f8a4367ca0896296e1e0be3877caffab"
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
