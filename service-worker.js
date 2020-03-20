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
    "url": "assets/css/0.styles.436faf72.css",
    "revision": "09e11fa6a61b7eb6294f6f0417a93cb7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f76a7a85.js",
    "revision": "7aabc5ab5c1feeb1773686a25a9becf4"
  },
  {
    "url": "assets/js/11.36b68626.js",
    "revision": "1945cef88658c5576f12816960538183"
  },
  {
    "url": "assets/js/12.b85f755d.js",
    "revision": "cf2a9cc32ab4151961bf7bd070667c51"
  },
  {
    "url": "assets/js/13.02e8067c.js",
    "revision": "fc55d10ebf2f52b9bd9eebfc147607c0"
  },
  {
    "url": "assets/js/14.05886b0e.js",
    "revision": "5b57ac927adc156413683004cd0e261b"
  },
  {
    "url": "assets/js/15.020636fe.js",
    "revision": "4abf449463fe126d3a46922633b6b503"
  },
  {
    "url": "assets/js/16.9e45c27c.js",
    "revision": "40012a79368fc17a36b9f566b7146e1f"
  },
  {
    "url": "assets/js/17.ff575d10.js",
    "revision": "eedf297856d897c6e5496015bf2fde44"
  },
  {
    "url": "assets/js/18.5a45066b.js",
    "revision": "61f991b7f9bf6fafa9d3e606acf81300"
  },
  {
    "url": "assets/js/19.a55f572f.js",
    "revision": "74c8add6a0dc75948ff1cc3699ed7f50"
  },
  {
    "url": "assets/js/20.5deda5d4.js",
    "revision": "9f7b3b42f073d3c97cc234a684f95a9d"
  },
  {
    "url": "assets/js/21.4e784d76.js",
    "revision": "5af21771817bc14fc7fd2d48332ba852"
  },
  {
    "url": "assets/js/22.d4ab2172.js",
    "revision": "1b51115460564a1f0e512ddc30a47d8d"
  },
  {
    "url": "assets/js/23.2c4b08a5.js",
    "revision": "76e330071c99356e2948c30f7c679f93"
  },
  {
    "url": "assets/js/24.4fefbb1f.js",
    "revision": "fe7b0c53d9dac8308915a5779327128d"
  },
  {
    "url": "assets/js/25.6a7ca1cc.js",
    "revision": "3f3c890013f012c72e485b3d26f1883e"
  },
  {
    "url": "assets/js/26.8ec15b1e.js",
    "revision": "de3fdda7fd755fc3a0973d1cc793a82d"
  },
  {
    "url": "assets/js/27.000ca510.js",
    "revision": "550ab92182cc769e997b8891b2753fe4"
  },
  {
    "url": "assets/js/28.a6a732c8.js",
    "revision": "63fd8a81dca812ac18e99b160393213b"
  },
  {
    "url": "assets/js/29.829692a1.js",
    "revision": "ba9856f29d965bf6dab5f9853408b8eb"
  },
  {
    "url": "assets/js/3.4d649191.js",
    "revision": "78751c2dcca2b99172ca8f8318d2d958"
  },
  {
    "url": "assets/js/30.94829423.js",
    "revision": "243830d347f9688f809c67fda5af417c"
  },
  {
    "url": "assets/js/31.469dd5ae.js",
    "revision": "85ccdfeaffbebe6c086b2727c06b33de"
  },
  {
    "url": "assets/js/32.4bc7f1d7.js",
    "revision": "7a300cf3cb56416ba4326d0587654e70"
  },
  {
    "url": "assets/js/33.e92343ae.js",
    "revision": "3dce2573e471fd7a65d5e88d02b00617"
  },
  {
    "url": "assets/js/34.ee32fb74.js",
    "revision": "1c4a8e5c147684f4911dd5bee372d4f6"
  },
  {
    "url": "assets/js/35.eea7b551.js",
    "revision": "322f381f00b6b30ba8b76c571c09ba29"
  },
  {
    "url": "assets/js/36.378fcd1e.js",
    "revision": "c9c5f5b953a481d6089ed010d1f87b90"
  },
  {
    "url": "assets/js/37.fc8f9b9e.js",
    "revision": "3dfa6c910139f12788b045f7a1be8902"
  },
  {
    "url": "assets/js/38.76056c20.js",
    "revision": "a5ef3b807b7c14ac4e80b3035c24abb2"
  },
  {
    "url": "assets/js/39.0bfb5e54.js",
    "revision": "324048726bde97ecc81b9b6c20ee8023"
  },
  {
    "url": "assets/js/4.908c1a64.js",
    "revision": "eee6245d1294d46021712dfd46cc25bf"
  },
  {
    "url": "assets/js/5.0cdd0de4.js",
    "revision": "ef2ff63c015a77245d66f75437abe6e8"
  },
  {
    "url": "assets/js/6.9865bf00.js",
    "revision": "9004722f744a4a885c3aeee545ae9922"
  },
  {
    "url": "assets/js/7.66cdd46e.js",
    "revision": "9f40c952ffaec28a0fe55fa6f2b8b148"
  },
  {
    "url": "assets/js/8.ff7235f4.js",
    "revision": "880a97182beee8de42b1c109d86c1d48"
  },
  {
    "url": "assets/js/9.5286745d.js",
    "revision": "a76892a34e5448aed2ea4f944275c9a2"
  },
  {
    "url": "assets/js/app.d1119aea.js",
    "revision": "778bd7e42f7fa12c4e60d0ac416a6caa"
  },
  {
    "url": "assets/js/vendors~docsearch.cb998e4b.js",
    "revision": "7b0136a228daf0b9ed9dd8f2319dca13"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "0a515bd945c51f8e7ec3183d9b4903d0"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "cfd88ea6ea1fddd08e71b7917fc83be3"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "539d77afe489f56e35dc8ac3072e816f"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "caea6089a552027ead9aea240e6a0a8b"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "ec9db9756977838a8cc4321d046e11fe"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "9ccb7c01ad2513c87384157f1fecac63"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "b7ac97b602c5e6d1b5fca88d3cb44fd6"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "52c6632be3c7d452278f5efe16d1225d"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "0c2f38b2c0b9bd79623fe7dcb71e5e64"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "990eb6f0d2c86bed582675540adf2c57"
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
    "revision": "07c6f13f22259bd46dc2e38d80220842"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "3525722f4fae2718206990562f24bd1a"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "826e9e809e3d12048b6a478df8da5165"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "bf721a66cc29f2c9fe9ce88dfaa458f0"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "7f207c13a4739b063c6b43ed9d8dde14"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "86e55157e25ab92247d89c9006c23f9c"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "489317487b3a7410b5389c8e1a3fb7f5"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "1e7bed095d81ddf299854f33b25d4c12"
  },
  {
    "url": "resources/books.html",
    "revision": "d3fe1244b91c7684fc2317aaad304cf2"
  },
  {
    "url": "resources/community.html",
    "revision": "7913e7c85e09d4081944394f235041b9"
  },
  {
    "url": "resources/conferences.html",
    "revision": "3f6048a39df44ef3afaad43b50ae1871"
  },
  {
    "url": "resources/courses.html",
    "revision": "aef88a2bc0961b6fe3b710400bc0effe"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "9aa76e8545ed34bc7bbe227995999a0a"
  },
  {
    "url": "resources/examples.html",
    "revision": "5cbcd0a34d896b5d46ea0581891e0dff"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "64c981f612be7837a2b4aeb0e4a5c208"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "1c64a09ecf63b342b95e5524db1b248e"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "049337482de41bd99850c7ed158ee815"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "6b3dec63d019031ddecab0d6df98d570"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "38ab5ba5746a1ae83158070c5c343f50"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "7692fb9a4538c5901732cdb5ac0ec119"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "bf49c1fd061ddda625810dea96898e0f"
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
