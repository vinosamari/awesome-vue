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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6f70be8c1e4bb5092fcc69c28a357114"
  },
  {
    "url": "assets/css/0.styles.14fd8401.css",
    "revision": "58e5e53660314010897cdf9a92270eb3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7d5e60c3.js",
    "revision": "957b45ab31ead9e9fa07221052fffedf"
  },
  {
    "url": "assets/js/11.81e3c4a3.js",
    "revision": "b8abea9b7d708cb79e1b4bb758b08088"
  },
  {
    "url": "assets/js/12.647642d5.js",
    "revision": "5d7597f3d2111b2cfaa55c855377232a"
  },
  {
    "url": "assets/js/13.c0b40ad7.js",
    "revision": "aba0806723b5ffede00145f950dc5593"
  },
  {
    "url": "assets/js/14.82247384.js",
    "revision": "c2e62998ac3e81167ea74873e1fd9ef6"
  },
  {
    "url": "assets/js/15.95a71304.js",
    "revision": "e0a9d19427ff6f9148521cc590f8dcbb"
  },
  {
    "url": "assets/js/16.362d756d.js",
    "revision": "7cb68fe2a73d28f56914c009f2757560"
  },
  {
    "url": "assets/js/17.4234f5f9.js",
    "revision": "64cb644f010e33e6bc6604928f4d71d0"
  },
  {
    "url": "assets/js/18.ebd6830e.js",
    "revision": "c13793756913e1d66eb33b4707d2c961"
  },
  {
    "url": "assets/js/19.8f6f46a6.js",
    "revision": "a3e32d3bab1fef0a72a8352ca2ba1624"
  },
  {
    "url": "assets/js/20.fdb24af3.js",
    "revision": "83b70b8268dc085c5e940737dc41ecee"
  },
  {
    "url": "assets/js/21.a07adc96.js",
    "revision": "56224d80b3dcf502f6923db7420efa85"
  },
  {
    "url": "assets/js/22.489c3d77.js",
    "revision": "b7848cc29ae630792966564dfaba6a62"
  },
  {
    "url": "assets/js/23.397ee83d.js",
    "revision": "00a00c5d1b652395c22801b49e74b52b"
  },
  {
    "url": "assets/js/24.151aebdd.js",
    "revision": "2a0dd69a1de76452566a0c6f4468354c"
  },
  {
    "url": "assets/js/25.8e425124.js",
    "revision": "cc6686c798bf8f277702713718e3f98c"
  },
  {
    "url": "assets/js/26.31b71fc8.js",
    "revision": "6de92bb41496c846dbe52fdff2ede5a2"
  },
  {
    "url": "assets/js/27.711c21cc.js",
    "revision": "0f4814531905a3962a621f5df2c0b916"
  },
  {
    "url": "assets/js/28.1fa3930f.js",
    "revision": "4d3a9cfdb7d6b181da17f819b36d5a3f"
  },
  {
    "url": "assets/js/29.d25cb6c3.js",
    "revision": "5cd0550975767785351685454183cc84"
  },
  {
    "url": "assets/js/3.56cb5c48.js",
    "revision": "51095e57112cf623aa21bdac4093ec8b"
  },
  {
    "url": "assets/js/30.8c47f022.js",
    "revision": "9daecb46885fe2f88e6875e022bb78ac"
  },
  {
    "url": "assets/js/31.4f34ecac.js",
    "revision": "218935f89f66ac38ee24da3fb5352eca"
  },
  {
    "url": "assets/js/32.a77e1b3c.js",
    "revision": "9cae2f6dded5d82310128cdce8e7fce7"
  },
  {
    "url": "assets/js/4.151aee11.js",
    "revision": "51ae4eaf64660e6642fbdc51bc74101e"
  },
  {
    "url": "assets/js/5.14ede81e.js",
    "revision": "88ef2faf5d89ee3132e6140791a34c3c"
  },
  {
    "url": "assets/js/6.0ee45068.js",
    "revision": "643a22949ec4efca8d21b08a359e8e9a"
  },
  {
    "url": "assets/js/7.d81abc02.js",
    "revision": "1d7b2b1d97ecc870413bd026cab8235c"
  },
  {
    "url": "assets/js/8.e6edf3e0.js",
    "revision": "44e35f7cd895f8415590ac005452e4bf"
  },
  {
    "url": "assets/js/9.e6e18304.js",
    "revision": "81a295e87f25cebc24cfa7ceb5d9ae1b"
  },
  {
    "url": "assets/js/app.2c064420.js",
    "revision": "3e092d9cbccde0238e80a832dfeb818a"
  },
  {
    "url": "assets/js/vendors~docsearch.fb7d639f.js",
    "revision": "121b3a196de4c4a41361b1cc3de9cd15"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "4e174ef98053b8505becafc7cf77fed3"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "4a0c0e4e806eb636b206ecdfbf0ab25d"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "7909baf450ef1bdf4009f7887ca9630d"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "d6658abea914ca4b298ed39bc8be5d69"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "bcbad097720c325b8ca864e4822eb976"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "11b30cf3d6e3992318ac37b16332d160"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "39c27a098ad63f0cf873121f1f74bcb7"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "3345ad3b829eb9501e6e5bec4268fd98"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "61319320980099f70974caea58518770"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "b75c4a6616293387faba494f203eef67"
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
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "7bffccee82e15b856ff052661ec2c132"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "39ef4093fc7535453340c96dae8e36bd"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "82f2c029d417cf7f9561953401ebc752"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "3d712402c31316fbdb209697f8f1a6e7"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "41044f76cf4187b32ee5863ed08a9c39"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "33151d0e3f0b05e4da512f0d9cb5c817"
  },
  {
    "url": "index.html",
    "revision": "4576d346381039686318a82a36299a9a"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "a60cbafb7a9b08931e6f27a1f290f54b"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "4dc636945a1f55d8488eae1c79dd0340"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "f370a3fe5061d405382c72e2eba4a80a"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "bb2a45bb4763db4338402f22f011b07d"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "6e70da6843f36413a85e0f53a2cf7398"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "12944a662a4424e5e4f4ff8006a3a247"
  },
  {
    "url": "resources/books.html",
    "revision": "3535cbeb5a7ad09a8bca9517e03bda64"
  },
  {
    "url": "resources/community.html",
    "revision": "7a11b758f40f2ef45d58da368e9a4364"
  },
  {
    "url": "resources/conferences.html",
    "revision": "eafecf4afd526fd54e8dc28bf85aeaf5"
  },
  {
    "url": "resources/examples.html",
    "revision": "ac4c452f1e8753546bd0712f2b8da966"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "6ad01a9d0a2d54190bbec6ef0cfd3703"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "d14d14495c0d5e70e3f2d63107344ecf"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "a9851a5beceadb4af4a752fe946b4e77"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "44841e03a4b792e0a96695eab52b02d1"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "d50f975f72e66d62deb100acc44a1688"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "aec071f9bf7c273227e4b6ffa40e008e"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "54872ceb198f370f0b6f9533ef5519b0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
