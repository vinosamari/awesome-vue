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
    "url": "assets/js/13.caae835f.js",
    "revision": "4370d389cdb9bab913bedd8cd8491e3d"
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
    "url": "assets/js/app.b98e79f7.js",
    "revision": "f4ee260f340f4d13eb04ac9dc090daf7"
  },
  {
    "url": "assets/js/vendors~docsearch.cb998e4b.js",
    "revision": "7b0136a228daf0b9ed9dd8f2319dca13"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "651ea13d996f2497d27d8f15157e85d5"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "bbf812421824e018053a4c18353da958"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "72b17e6a732aa2cd3460140b4bb689a9"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "5a4a5231944fcf4a8f337caa6352b5be"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "57a466050825b995f4ea1dd86bca0f9e"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "d549309321aa435b9c2d37c1ed111d63"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "89fe708b3a196a7a31de2e6cec9f682e"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "a1b3af6cae22255bbfbe16ade5bf6bf9"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "fc9b98a29b45666ba49d80f03d7aa6db"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "857ede374b469f9b7b66f1151e8e84fc"
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
    "revision": "473610158a2cc3cd22ab41a3304e4663"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "a0a6f4496ba2803b8e882336126a0f91"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "4f5c9d11b6b8d435a1d5dbc4435b5754"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "76d3d382e60a65c001683ce700052352"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "636662cbfb2ccd6097423ddfd49e9f3a"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "2a7d16dd81ac53ca093485643a0d5d28"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "504a62bcfc2b81bd9b77bd0d6efaf396"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "26c8d9189bd273a34afad003c558f158"
  },
  {
    "url": "resources/books.html",
    "revision": "94f04f6a000545bb02b0f55cba8d44b2"
  },
  {
    "url": "resources/community.html",
    "revision": "b737ee035b921f644d2e540c211d75d6"
  },
  {
    "url": "resources/conferences.html",
    "revision": "c78d69a1e357816e45e6572b1501c9f2"
  },
  {
    "url": "resources/courses.html",
    "revision": "12a8dd0225f000d6a4afe66ff07b4070"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "4bcf17ab82e6cd0da2ee4a162bb2bbae"
  },
  {
    "url": "resources/examples.html",
    "revision": "c38aa34480e1184b33b273b7148c44a7"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "955b2fb006abd7b6f0fd4343e30650fb"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "665f930b1f58a3df0fa3423ec7778be2"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "ced5e9bb8b76d72dbc633eaa1ba6b241"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "9fa087c540cdd2a3d7082c2e1e573adf"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "c869207ea93ad200454ea0bf632f161f"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "f97bb99d758b42ea7831f1e1bfe4014a"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "3b3485dede2f0922db87e8766b817d9d"
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
