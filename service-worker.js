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
    "url": "assets/js/13.bf334258.js",
    "revision": "db95b867c7eaf9995785c6988ac0c0e2"
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
    "url": "assets/js/16.6ebb9802.js",
    "revision": "5fea908ae4ad36cad30fceb130de4a05"
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
    "url": "assets/js/19.9388d30f.js",
    "revision": "3ffb52895aee59be4c9b1647eada35fa"
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
    "url": "assets/js/30.228790d4.js",
    "revision": "9dab79fff1071eb886340469e0b75011"
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
    "url": "assets/js/app.f68603cf.js",
    "revision": "6f1ae1d96ca1de1d9641b4e003ecf723"
  },
  {
    "url": "assets/js/vendors~docsearch.cb998e4b.js",
    "revision": "7b0136a228daf0b9ed9dd8f2319dca13"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "f8c978edcea12580cfdcf0bb96febfb7"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "8bb12f363cda25ac3b0bd6033b86d0cb"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "c2a1d177f0834fa3b753921a9a74131a"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "f18aa563cc096afbc8f4bfcd5661c457"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "0f38dc82252c07aeaf9ec1ef4a2ebd66"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "2dfcd54754adf08885d3636bf5c41278"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "7eb5112e1cb12c50d29826070b82de0f"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "ab2bf9dad8aadd682774e80908ed2228"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "92ecb2c23aca07f33c75c422e9ed5344"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "59e7e56faae0d4c97d4ccfb458d971fd"
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
    "revision": "1529cef8f8b0ac71eea70fbe87bc33f6"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "e7562bab26fbc7ae917d1a4ec0867688"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "31da9b56d92b1cc0cd164cfd4ae5c5a4"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "ea7547ed85bbe920975d6263e2ce5118"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "f65a1a1a50922ba0d73309d20034d87e"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "56033f94dde35317884df0248910bf3a"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "58a0d88391394ab290c0cdf247ae5153"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "b9d7cd4b3fac239242c4c4acd1779d62"
  },
  {
    "url": "resources/books.html",
    "revision": "fd0f29acc03be8852ebf2dab4f209048"
  },
  {
    "url": "resources/community.html",
    "revision": "890b7db3f6713b2b4c67c96446473a9e"
  },
  {
    "url": "resources/conferences.html",
    "revision": "b1687c0f10395a6a0d66fe35a1b874fd"
  },
  {
    "url": "resources/courses.html",
    "revision": "718d347fbdfd3d5e0c4134bb1a1c7cdf"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "756fa297d9011d0126d74dba92a12a0f"
  },
  {
    "url": "resources/examples.html",
    "revision": "f96569a1bf4c2ccd673499b9fbd4c9d8"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "7b514cf5ddf537b388df7478071ddb76"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "fcce69d0ee1ce62237a9995d548c4d62"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "2d5b6d4372b6dc13ed315d8910e79906"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "6cfd48581c1b83c65eef45abb5de0fc5"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "c1ee2e8a72f87feddaa7db8a07046489"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "a300da279434b4fb78fb7331315c9bf7"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "fb0f6ba8125c47089d6020ef8835d922"
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
