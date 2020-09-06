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
    "revision": "cf381739f0e6f56f18f173bc6ffb19aa"
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
    "url": "assets/js/app.1666361f.js",
    "revision": "cddc3ca1ee9dd57040fb3ebca8ff1154"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "03d168211e99ec6516d9f7c3e7b8cc3c"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "fb7abada40ad71c16633f5dc7fac16a5"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "ea01847911e1bf26207e08650f71f139"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "89d6ac78457599a7e40145bacb7b89dd"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "0d84dea3e66ca6c93bb2b1468bd35522"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "8dd81e665ff78938c1c3e6ac48a9211a"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "cd9530ddfa55c6ad492a17b27f5f5e60"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "42b011e7e3b22d1f6a161353aef8bff3"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "71278630cb0c57603283002ba22914b6"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "81071e76531fe3281d37d887a93fd1be"
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
    "revision": "4dc267f242fc44662ec4e2940b9b80a5"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "9197dd1533e4c741ffa0cf060da18108"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "a4db6cdfce4336b4bbd2fb3cfe5145de"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "df4d672c6f9282defe65ba69077dd05d"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "dafa1435edd09d18f3c286e24da1be5b"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "eeb0ba6edd077c2350b0df7283f10715"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "b6a4295d68515b4d56ce100c6a13c645"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "ee83b78e91cb22a976145c2ad1421dd6"
  },
  {
    "url": "resources/books.html",
    "revision": "26860c24d3c4b89a4187e6684aafd1fb"
  },
  {
    "url": "resources/community.html",
    "revision": "624f46278c541379024ac7955c440642"
  },
  {
    "url": "resources/conferences.html",
    "revision": "a151cd2038dff7ca9c625b754c05abf5"
  },
  {
    "url": "resources/courses.html",
    "revision": "68e98fb159b6a1b55ec03b6f6c8df447"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "45d15bec784d530c5e337c5b7ccbefe6"
  },
  {
    "url": "resources/examples.html",
    "revision": "73b40e521dce528f8ab876a008759507"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "e9fddc69849ef62419d719b8feb25c3e"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "fa41e65b41cdc260a4e53cebb1f0c6ed"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "a0c5cff55125a10d6f347766850c8fad"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b292744f44773328287663f2e0251a25"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "aa7d90fb58a1479941fbc40d4ce96d9c"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "8cb16a65825cf6daefe8f994df0ba786"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "01f94b1bc92d8232a19d0dbef119ff31"
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
