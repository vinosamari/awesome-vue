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
    "revision": "502e347455283456eef674f8b77cfcf8"
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
    "url": "assets/js/10.64df32de.js",
    "revision": "590abfb6646e55141ffdeb5ac875e62e"
  },
  {
    "url": "assets/js/11.81e3c4a3.js",
    "revision": "b8abea9b7d708cb79e1b4bb758b08088"
  },
  {
    "url": "assets/js/12.469b3f83.js",
    "revision": "9aa38d34fdbfd6e91726f1202dc15f36"
  },
  {
    "url": "assets/js/13.5aa644c3.js",
    "revision": "dbbc63a7497a7c8293846870f1455756"
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
    "url": "assets/js/20.71820720.js",
    "revision": "d952dd70fac225fec7836fc534d0130d"
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
    "url": "assets/js/30.41f42079.js",
    "revision": "11de4f9b0e9a4b2057f46531b72b6dd6"
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
    "url": "assets/js/4.37e85dc9.js",
    "revision": "70a1661625f90baf5ebd7f182936a0a3"
  },
  {
    "url": "assets/js/5.4cbcd3e7.js",
    "revision": "ecd4110d0ac4f234b18210f22d1e9f6a"
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
    "url": "assets/js/app.a662e22b.js",
    "revision": "0bde852562477f189597909c6cbd54fa"
  },
  {
    "url": "assets/js/vendors~docsearch.fb7d639f.js",
    "revision": "121b3a196de4c4a41361b1cc3de9cd15"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "ad988d6defd6e0334cf00f22c9f551fd"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "e8101de58b972431a71a3520d64ea916"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "8b566eceda9a75abee2b3685ba8d9cc9"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "e3414f3ada32002033b24f57e65d35ec"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "fcbc366918e9b2c16fa9229f40ec2017"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "cb8214c43b4c8f8a942bc50a96449fc7"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "bba4122c66b39c586986345fe2b25f48"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "6c395223e0573010192f0a9ddaa04b82"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "995b000dec98464596329d548a3cde68"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "03906c64b6012304701dcfd7a9a7c26a"
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
    "revision": "228547eed6a8e82d864a82f7f3dad3d0"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "99d3ac1c90e13ac229a3549769ef448d"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "aeb0b8e17c9557d837e34b628d1124e4"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "a1725c9949d9a163fbed9268ceca9654"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "59f5eb3aad26792af07cd1ee86c85c91"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "68bbed644b62190e0496c473570ddfe9"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "8e7ba17ae882ddceb374a7a75285d427"
  },
  {
    "url": "resources/books.html",
    "revision": "1fb9b947099c147fc5f79c2431bea691"
  },
  {
    "url": "resources/community.html",
    "revision": "ed0c65803a326d327617facf6fd5ce6c"
  },
  {
    "url": "resources/conferences.html",
    "revision": "3c2c1d01d19fc9c90c9e3b7e5a09ab22"
  },
  {
    "url": "resources/examples.html",
    "revision": "04ac8e3db30a6423a3642d9af8468064"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "d00130a8fc41d347d88974c5fffd96ca"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "521ff153d1f0a4181578ce3de0fefcf8"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "670bceaa9f6a28d67f8bb64b80c760ae"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "41095a2a186338fa256d6beaea4df12a"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "392625a5f3aa4bdc326344a50afecf77"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "9cb40c7cd7bae18a7645ef17fbc05b99"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "29fb76c7f07f9eb69f08609eb5b95459"
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
