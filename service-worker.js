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
    "url": "assets/js/15.a40e0ea4.js",
    "revision": "f0c7d7b078ec84ce4d4f3a99b3781387"
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
    "url": "assets/js/app.d6907c73.js",
    "revision": "ee558ff607ff15cc4bb607b7ae29d687"
  },
  {
    "url": "assets/js/vendors~docsearch.cb998e4b.js",
    "revision": "7b0136a228daf0b9ed9dd8f2319dca13"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "1f978c73f18e0d7d2d749f2e7b18b46d"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "b44975655f4d35ce9b4ecfab718ff1e5"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "f7f9af6ee625a52c858ed30457a0fc7d"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "87763f42f1bc52b102b2a7d3331aa57c"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "df7f4c617adfa302cc663cdb4e5d4da3"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "aafc4ca39e6a367d96990e2a1637c2ee"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "fc8c2fdac2053030ac491970edd0d660"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "c305df2c69042c8e821f5233b3c74d4a"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "7b434eb1cc893a13f104bfc562ad7fdc"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "486d1c78c1eb77487dc2ec162e3032a2"
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
    "revision": "aa99eac6972677189325a790b85e934f"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "382d995b8123c0753836e08fca2414ed"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "cb226ac144cfc3890fe650218b2e7e2e"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "326014e3b83f332750821a43a6b593d8"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "45cc80f64dace70207119cdb89598211"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "04f810f80fd4721a2a3aebdd98c70110"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "8145a0db133ec47de5a1ddeec48e18d6"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "ab6132e5b6c617bad08000a02c9faaab"
  },
  {
    "url": "resources/books.html",
    "revision": "e62e167b9d0bcef25cced02ef53e0381"
  },
  {
    "url": "resources/community.html",
    "revision": "5c14691de68358cea81d257f05e1c887"
  },
  {
    "url": "resources/conferences.html",
    "revision": "f1735f6ac9909e51e5657ddf4863ba8f"
  },
  {
    "url": "resources/courses.html",
    "revision": "67499d865520d631df8be65ac7052273"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "9c8847581e9f8c4ed70d421d53a65b6b"
  },
  {
    "url": "resources/examples.html",
    "revision": "7da128c2cefdbe28a61a66cfd9f39279"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "bf4db291cc9db49066af401d4be797e0"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "7d157ee645acfbc831531d0d0be6000a"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "02828edc088086cbbddc10d3492ef3de"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "205375fb087a3dcb25dd5c631d369b6c"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "4e937130ae966db4940acee9e6b01daa"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "49ac324a7ecbe6faf52f29605bb96158"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "134cb5b63e08bbac2556e14bc00950ec"
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
