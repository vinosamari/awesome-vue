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
    "revision": "1c725463e801e1594f23ed2cb690c76b"
  },
  {
    "url": "assets/css/0.styles.c667ae91.css",
    "revision": "397c5036c5d791deb513cfb431edba00"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.aed84b38.js",
    "revision": "6cec4b5bd7009685eccea69c98741e8a"
  },
  {
    "url": "assets/js/11.17640617.js",
    "revision": "b1f153157dd096652732e4b1eef6ec49"
  },
  {
    "url": "assets/js/12.139f1dc4.js",
    "revision": "587b7729cd93cc881e4637dc41d9d8a9"
  },
  {
    "url": "assets/js/13.d46cb5a9.js",
    "revision": "00e20c82b0bcf86d38395ae13bee75cb"
  },
  {
    "url": "assets/js/14.3a6fb49f.js",
    "revision": "135c5ef8e59fc000f2f3c315a8cf9b4f"
  },
  {
    "url": "assets/js/15.b71ce319.js",
    "revision": "b03e0ab3c5030d637385bb1576babc8d"
  },
  {
    "url": "assets/js/16.c8c49b59.js",
    "revision": "57d250f1f73242d8a990537831a629b3"
  },
  {
    "url": "assets/js/17.48b501c9.js",
    "revision": "fb5139b201de1b7e387a954ff85b93a9"
  },
  {
    "url": "assets/js/18.ba9a2671.js",
    "revision": "9eefbceb15c4191bbb88f9c0b05dd127"
  },
  {
    "url": "assets/js/19.1c581542.js",
    "revision": "cceca1ffd4e5715a309dd638b5e68137"
  },
  {
    "url": "assets/js/20.5f00bcd1.js",
    "revision": "3f2e6d71217e2ff835215e8f819a23ec"
  },
  {
    "url": "assets/js/21.d50b191a.js",
    "revision": "548a03b96278d8818c8721480b4c7087"
  },
  {
    "url": "assets/js/22.fe6574a5.js",
    "revision": "9ccd0817742ff5a3f2f7be2b2f3f4196"
  },
  {
    "url": "assets/js/23.b5d0ca69.js",
    "revision": "d61c06154642178c2fc3ae4e02dbfd7f"
  },
  {
    "url": "assets/js/24.71c9eee6.js",
    "revision": "d55cb1a42ad6b08b170a9a468001852d"
  },
  {
    "url": "assets/js/25.05b77336.js",
    "revision": "b1dfb3068c09899095ccccaf605e1fa2"
  },
  {
    "url": "assets/js/26.d4b067af.js",
    "revision": "ad672ce7504faafebb070d1d7cecca8c"
  },
  {
    "url": "assets/js/27.c8aa190f.js",
    "revision": "3801cbaaae2b1d561fc08c2074bf10fe"
  },
  {
    "url": "assets/js/28.d48f87f5.js",
    "revision": "161c712d1871ada48f292a4406e09a2d"
  },
  {
    "url": "assets/js/29.826833d4.js",
    "revision": "6725e232f7c303536467e20f74b7662e"
  },
  {
    "url": "assets/js/3.fc80c13a.js",
    "revision": "f654c8d72530eee237a1c86d7beffc6b"
  },
  {
    "url": "assets/js/30.5df5b2cc.js",
    "revision": "6f66401fc1b4e40e1392f77f97746fb6"
  },
  {
    "url": "assets/js/31.ed50e515.js",
    "revision": "708922aa6a939f911b4736f6d4582d3a"
  },
  {
    "url": "assets/js/32.8cc67a40.js",
    "revision": "8447663ca9c8a212136254c1361c0570"
  },
  {
    "url": "assets/js/33.5b43df12.js",
    "revision": "68a6581e636aff57adb525f6c7a49f2a"
  },
  {
    "url": "assets/js/34.7d8a00dc.js",
    "revision": "662f9c5f1bc1d9f34eef2409cefb1105"
  },
  {
    "url": "assets/js/35.d4d6ba72.js",
    "revision": "eb29d97a2b43af12cb46ac3005acc3fa"
  },
  {
    "url": "assets/js/36.4ca4856c.js",
    "revision": "25d3f10a018a469455d100b0d0f4b844"
  },
  {
    "url": "assets/js/37.77b24638.js",
    "revision": "c6df099db4025f9dfcdeb79572120f9f"
  },
  {
    "url": "assets/js/38.cd79a9ec.js",
    "revision": "a4f4166e2c25ef825eee64dbf46d74d1"
  },
  {
    "url": "assets/js/39.5ef0778d.js",
    "revision": "7958c6466a57180acac54004adebbf7e"
  },
  {
    "url": "assets/js/4.5eacfc7a.js",
    "revision": "412eebb9a5434cdb211d5f67b419140d"
  },
  {
    "url": "assets/js/40.c34b6542.js",
    "revision": "77dcc6c81e805abe6f2ce8e978645a85"
  },
  {
    "url": "assets/js/5.e7dc9ee5.js",
    "revision": "d0bcb52c4170c4ecce113a0596454e2f"
  },
  {
    "url": "assets/js/6.afec999f.js",
    "revision": "e36bedf9c8f81bf58ccaa53a82336f03"
  },
  {
    "url": "assets/js/7.dfb416c4.js",
    "revision": "d9339842774a34f925282c21d3ca93e0"
  },
  {
    "url": "assets/js/8.fcfc7498.js",
    "revision": "16b9367efafb2f592a8fd6a1c6ed0971"
  },
  {
    "url": "assets/js/9.98d85d8f.js",
    "revision": "48fe631ec5b1683120a98775f849c23c"
  },
  {
    "url": "assets/js/app.6461aeb5.js",
    "revision": "4922487d95b5640e739abb3da79315bd"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "1535baff882dc904d229557b97333a1c"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "12acef970accc72b18a20a7d045627ce"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "e5ccfd2e0dfee3d51d5e5617d3216427"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "666b63ac3fc1c2019a9a1014ab6feafd"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "c7bd9be78459c753531b3a82c35b0b70"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "2ef1faf351be4b1ef8ee21a1dfd7ff86"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "cb2a41baefcc169ed1581d0c9443cdf3"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "38034cdf538964d8540dc7461656bca6"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "be16181707cd66da840b06a6897fd357"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "ee8ba7b37fd7b33cef242020148db4e5"
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
    "revision": "deea126d0294b0fa2aff0911f8687525"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "a958d7b914f5e499d6189f5527826587"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "ec0c4334f3b3b61cc263961714749c60"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "0e821ab2b7dfa9422d7e133ebb81084d"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "12782ce0ff7268e6e63b46bd93100a58"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "244afffc7eb6ec71ba6b5ffb47566731"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "07637d0dcbe3f188f930f63300c9edc0"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "a06313e6d379ab9da23dda410da4912b"
  },
  {
    "url": "resources/books.html",
    "revision": "efd6f3a2998e89114abc962648cc1e61"
  },
  {
    "url": "resources/community.html",
    "revision": "d033159bc28346dbee970cd188995461"
  },
  {
    "url": "resources/conferences.html",
    "revision": "dd518e9c326901fc502152647eb9c337"
  },
  {
    "url": "resources/courses.html",
    "revision": "5b9c56c10b52bc034132496b68725010"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "ddb53921af03510b3ed15e03dd8a207d"
  },
  {
    "url": "resources/examples.html",
    "revision": "e1675671745152f2b84e35999fea2fea"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "9894d113b42bad8bfbc4c310d37a0455"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "2f91134bc949721b20820e1aa2deb54a"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "d4b2ccfbd5101b0c5e69ba3543de3989"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "ac1cc1a871f803fa97d2cfd84f2cfdcd"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "653d522e3d710fee26122a3702ed6f35"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "a3287276e1fbdcfa31bd65b4e9e845b0"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "c8715cf93f1002ae5de6e75d301d2b04"
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
