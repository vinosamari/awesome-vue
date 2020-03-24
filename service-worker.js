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
    "url": "assets/js/13.3d302dae.js",
    "revision": "a700841275998c43a99798dee336e8cc"
  },
  {
    "url": "assets/js/14.cb1d4cfa.js",
    "revision": "4bb1eed91c1cc04deba106a9573ceb2d"
  },
  {
    "url": "assets/js/15.4743353a.js",
    "revision": "10f3536d5fde4000cc3393907637c5da"
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
    "url": "assets/js/19.972671ff.js",
    "revision": "9cca8784cf2891c90c2330f47eb9955e"
  },
  {
    "url": "assets/js/20.cb3c8164.js",
    "revision": "e48bcd7e285e0a56b141b328db4d8385"
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
    "url": "assets/js/23.9c2e833b.js",
    "revision": "27affce57bc1c86bdb53b6c5a6a6b8ad"
  },
  {
    "url": "assets/js/24.59f93c9c.js",
    "revision": "b31e41c3ca8d94f12f3ad63fcdfa6fba"
  },
  {
    "url": "assets/js/25.9336c6d6.js",
    "revision": "1fc78b643e964432b044df2d4abc5495"
  },
  {
    "url": "assets/js/26.15b42db2.js",
    "revision": "5299247f9a16c412024ae90d55c7587c"
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
    "url": "assets/js/app.5065c1d2.js",
    "revision": "c37402092ddfc8f340e85661ac050a5b"
  },
  {
    "url": "assets/js/vendors~docsearch.cb998e4b.js",
    "revision": "7b0136a228daf0b9ed9dd8f2319dca13"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "fa3a43d0952cdc24596e0dfb9c80a79b"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "d9168108d7f5e832d90611da17facb4b"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "b58345835f15a3426e1364e40e7e0888"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "6753fc5c621a9280c88706679e1f884f"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "eafa8042a92a04f5949528bab71b44c1"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "c2cc8fec886db3da3e4989802a1f145d"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "a960df41687873ed7da745634bbe8a7d"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "4664709d81226bfad415ccdf6bbede85"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "eca6761a27c13e218a962502fe562128"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "1f7b9823908d0de3c16f56bc2077aa36"
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
    "revision": "69fd2ff5d7ebfc46542251261239b45f"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "4a52b2bfad823055adcee0ff6cb4e25f"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "d66475f58d52c1856fd5bc7eb008e20b"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "33c7daeeba9ca567bade2a38afbdf6c8"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "4c2521db21c163c58dad713aba4b2a47"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "ea903a8fceab6644de8b785abc4f36ff"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "734ad7c5575ae9252fb1aef7254586e5"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "f8b3fbf1cf570bedf4e139db76098038"
  },
  {
    "url": "resources/books.html",
    "revision": "42018fab403ef78b267c9473fd787743"
  },
  {
    "url": "resources/community.html",
    "revision": "863ff2ea4053b373e9d495ee24688ad2"
  },
  {
    "url": "resources/conferences.html",
    "revision": "11116b46e65e8d4336cde9af79a08d98"
  },
  {
    "url": "resources/courses.html",
    "revision": "ccd9a0f7e8629c4d4cd3192b704bf3af"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "33f934c0707f012b368e0be31a7f6802"
  },
  {
    "url": "resources/examples.html",
    "revision": "8eff20ab0cb482641c70ce32ceb4b244"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "da57a469ce78f162c60701943d5e9aef"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "ed608f74a4b887ff37dee23b83c98f2a"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "1ebec77c004d7574273bb2ed9cf5d3e5"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "04f7f829774bf68a3e400c10479cfa29"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "b0a64319ba470d8b62e08bd6959bef29"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "7d029477d450932692eedf4c0c794345"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "8611bdd5684242e9d7be0467403f7b2f"
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
