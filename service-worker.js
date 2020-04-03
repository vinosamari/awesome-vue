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
    "url": "assets/js/13.4dca58b9.js",
    "revision": "d5123874709b4554881ef7152511719e"
  },
  {
    "url": "assets/js/14.cb1d4cfa.js",
    "revision": "4bb1eed91c1cc04deba106a9573ceb2d"
  },
  {
    "url": "assets/js/15.69f678f4.js",
    "revision": "65b31e06179208cb2af3966ba1468e58"
  },
  {
    "url": "assets/js/16.18c19f35.js",
    "revision": "74debe2a8553ef7767865b90ab5cbc82"
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
    "url": "assets/js/19.3feae4f5.js",
    "revision": "0a3b67908a97efac9fa7c1ff9ce4567f"
  },
  {
    "url": "assets/js/20.be2c96fb.js",
    "revision": "f27bbcfec3de325aa9faf0c09e325e58"
  },
  {
    "url": "assets/js/21.bec49cb8.js",
    "revision": "c26074b0314c8144ac0b5d7564f18ad3"
  },
  {
    "url": "assets/js/22.1dbc4483.js",
    "revision": "2bf50c8582927c81d0e86c3b7a4cb361"
  },
  {
    "url": "assets/js/23.ef16f872.js",
    "revision": "7d454217f3dd69a57281bc74d422dbd1"
  },
  {
    "url": "assets/js/24.59f93c9c.js",
    "revision": "b31e41c3ca8d94f12f3ad63fcdfa6fba"
  },
  {
    "url": "assets/js/25.31e64e1c.js",
    "revision": "92c20245148f580d8fea7264aac8b4b5"
  },
  {
    "url": "assets/js/26.8d483d76.js",
    "revision": "7a749aa708afd07a0597b13ab75b0e51"
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
    "url": "assets/js/30.36b8430c.js",
    "revision": "992023884cd774d6316ae7e698b276d7"
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
    "url": "assets/js/36.c7e478ff.js",
    "revision": "45eb8c0d0abd9c33759bf50cd2b55103"
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
    "url": "assets/js/7.a7f16fd6.js",
    "revision": "9763b75cc4d6da4eb2ef520123479f79"
  },
  {
    "url": "assets/js/8.7a628312.js",
    "revision": "7e2e59040600c8b5d5b1f85dd032c1de"
  },
  {
    "url": "assets/js/9.5286745d.js",
    "revision": "a76892a34e5448aed2ea4f944275c9a2"
  },
  {
    "url": "assets/js/app.284d194f.js",
    "revision": "d15728768ec4e8a572431ebc02d52a2f"
  },
  {
    "url": "assets/js/vendors~docsearch.cb998e4b.js",
    "revision": "7b0136a228daf0b9ed9dd8f2319dca13"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "b1da52ee1bf48e657374aa8f9b70e9e9"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "287a9e4cf70e615f6fc4bd6c21d14800"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "587e8ec78a48cd832034f7168b92a586"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "eefc5e21def78bd59350f8c8e72f1ed9"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "3831cd5229907256169d1cdfd47678f9"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "6f28723768095f127f84e54f2ad0c1ed"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "4a60959767626b66bfb352d666f918ae"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "2188d92fe3030fb89bd63398c0824eb2"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "4d523a20cf7a11ada9bf78c0d2b110eb"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "2dc1d42d0ebd7ec8bac9cbcfc4478aaa"
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
    "revision": "e011862dd047e8964b0d4dac2dcc08f4"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "e97bb2982a69b283b1568d312df3d66a"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "d6c26ecce0ad79a8f954487f0917518e"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "acff175f33589471dbfa2b259134d3cb"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "53e53aa1936ebb11b7943091f641eeb7"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "169b7ade46e272865706be9b8c943ff7"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "c926b58d7b90d7618c6a1412e04fe45a"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "4b75ebf257219af2437db6a32f1111c9"
  },
  {
    "url": "resources/books.html",
    "revision": "f909fac2f1a31a6271085cca8b2cb04c"
  },
  {
    "url": "resources/community.html",
    "revision": "3bdc936e37cb7766eea67dc9712129e4"
  },
  {
    "url": "resources/conferences.html",
    "revision": "1ffe1da3314089c82992036fe815e7a7"
  },
  {
    "url": "resources/courses.html",
    "revision": "f4131abbfe913b4e5465b59e5b06d3ad"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "a4dfffe2d96920d49cc7d8d226996fdb"
  },
  {
    "url": "resources/examples.html",
    "revision": "07a4c7c9c567f6178040bf8c3128c12a"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "937f134c49d68bf99c938bcf63611671"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "c885f1e034a171fc8c1c4b11810b5c2b"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "5acca2ebf3cbfb149e277d3f103b422a"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "9b59a61be5c8ed07eb18580f18be18a8"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "1d8439bae0622ab23d48d999b50409b0"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "5a87cd24f2dcbc93a641f3dcc41570cb"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "3a51d2dc5341bdab11481c12e5c6df86"
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
