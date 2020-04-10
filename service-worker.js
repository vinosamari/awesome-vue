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
    "url": "assets/js/13.ee9e27f1.js",
    "revision": "b464db86b8276f0798e1d9775b065541"
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
    "url": "assets/js/23.64d129c4.js",
    "revision": "aba406f96dbfc142037a9d88d5beb665"
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
    "url": "assets/js/26.a4b07800.js",
    "revision": "61e0c00c566a656a2b442265768bd7ef"
  },
  {
    "url": "assets/js/27.000ca510.js",
    "revision": "550ab92182cc769e997b8891b2753fe4"
  },
  {
    "url": "assets/js/28.c234520f.js",
    "revision": "a28f979a73646dffee2cc9d3db81819e"
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
    "url": "assets/js/8.3d92d877.js",
    "revision": "0bae4959e17471968c8e8affde20b8f5"
  },
  {
    "url": "assets/js/9.5286745d.js",
    "revision": "a76892a34e5448aed2ea4f944275c9a2"
  },
  {
    "url": "assets/js/app.7395dc9b.js",
    "revision": "900587c31d34d501218713566b0053d4"
  },
  {
    "url": "assets/js/vendors~docsearch.cb998e4b.js",
    "revision": "7b0136a228daf0b9ed9dd8f2319dca13"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "4d9f03b9364fb6d034a12e246bc1a8de"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "c3b242f413d64c5ce287b8ab6b425b70"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "e2d999f0a71477c5d0c118a7131e2b5e"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "be77231b240bac812f79044db0ec3d33"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "95238782a328e5660880ff278f3c1109"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "2e85cdb0300fa63599ea4de01acf8115"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "0cf289a6947762f55b75dc69804936d1"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "f4071bac8a26ecb3438307b67ec441c9"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "b19b7c47faee664227643068a11064c9"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "db54b91c4da9df8eb2d58a558d48430e"
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
    "revision": "8b91b6f457692cb7c92622a00a31051a"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "f1fea3065cadab5385764d6b3f311831"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "d4539f6338c0233e8200dd098a51e39e"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "b70d429d80bec2896bed2348848c234b"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "063d84e913a2fdee046197dcd26b05a2"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "d4dc41dd6cc60f0efdc3b1ee3b56e6a4"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "73020df1d020c00cf2acd6cb1eed9fbd"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "257522f01cd1ffe7004a01306b593eeb"
  },
  {
    "url": "resources/books.html",
    "revision": "df25b771bccf1a983a493d05e51fbb90"
  },
  {
    "url": "resources/community.html",
    "revision": "e6a8f335d072020b375dc5b3105a6e4f"
  },
  {
    "url": "resources/conferences.html",
    "revision": "1fde460cb86f3e1d3a6d0464dcbfa054"
  },
  {
    "url": "resources/courses.html",
    "revision": "f6b01505ecd336445ea18ac00cf483d2"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "da00f5f198bf42a63b4837faac4b1456"
  },
  {
    "url": "resources/examples.html",
    "revision": "24584752b7965b123d91f40962b1e090"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "ce69e4c825b1a6fcae6cb31ae1d3b2f2"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "fadb7198db1029dce38df4f6890bbab0"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "3b756ea40109b3ec1134d5e62ab11f4e"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "47c5a51646b0f81370475d19f04d8222"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "95eac1a7a007283597660decbc1f5614"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "05e402f3c27a8a24f69e9b6bb651c286"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "d81d096af38f2364ff457527168a273f"
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
