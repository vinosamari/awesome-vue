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
    "url": "assets/js/15.cfadc524.js",
    "revision": "42fb350f018e7484fe596a55baec9175"
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
    "url": "assets/js/25.854b2bc6.js",
    "revision": "2161f003292ccc3a8dc86a33b71b3f65"
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
    "url": "assets/js/app.92b599d6.js",
    "revision": "1475b0547fb4046a489ca5838809071a"
  },
  {
    "url": "assets/js/vendors~docsearch.cb998e4b.js",
    "revision": "7b0136a228daf0b9ed9dd8f2319dca13"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "53517800c9c86c47bb48e4bbd3e44107"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "223f84d99986141a0f419c88faf27525"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "4cbf10be0563acb824498f1570e6d45e"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "5927626ccb7991fc518e1d501aaef328"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "988c37938029a0eb9e93dadf439e80b1"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "a1277d943b141d75159d60677826e66f"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "f962c3951669b78e9173d8c5776fa612"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "7757c67e4b42ecda110a6c27ef8f2e8b"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "ebed3a5e6dd04c2b26cbf629b3d1a710"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "34e7bd5dfea4ec889c1962ff58244974"
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
    "revision": "20523fa16abf0e2184a84b1df2fa0b9a"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "0b72943af1220589680c8b2ec1ed477b"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "ce8f7c9401ea7576bd3d8676527c9173"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "5ddbbc77825f8ccd7588de24b474b306"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "672ba5b60e26ca52648f5ab7a9c8b5c3"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "44e24cefea9d2691534719c1166e6b80"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "c409718c432daf18288524a22fd6264e"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "921076ab284c70f26da902f60ac2995c"
  },
  {
    "url": "resources/books.html",
    "revision": "7e79b38886e5ab3cee9cdd5f55090f58"
  },
  {
    "url": "resources/community.html",
    "revision": "4c3b2586b565c6f1360f4f931a335e00"
  },
  {
    "url": "resources/conferences.html",
    "revision": "5d0f99f32ea855ee4d2103cf88384490"
  },
  {
    "url": "resources/courses.html",
    "revision": "ca9c94b988781159d80890a9d9ead1da"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "635d9753609a52051225e6baa299fb6d"
  },
  {
    "url": "resources/examples.html",
    "revision": "d87009207b4bb356ac209275c1bb7774"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "62541b003c3a61c90c38026586813978"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "d109b4a6cc210dfc4a43df0ee8369498"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "1cef7e34f39313df9794180871460621"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "f31de737f1aaf591c08e1c01f66ba84d"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "7973f378c75e19a320f68f37d3ec3f34"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "7e3271db0f4ab4b2784c1570e64e457b"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "de32bef62a2bf355430a66e3331d6638"
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
