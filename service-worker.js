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
    "revision": "62350b5755585f53f8f673aa46a36a70"
  },
  {
    "url": "assets/css/0.styles.8729c105.css",
    "revision": "c04f618332e622297b4ad1f3132b827b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a15314a8.js",
    "revision": "1ecac6b4a1fc918f589ceff048c4a584"
  },
  {
    "url": "assets/js/11.ea9fa4e0.js",
    "revision": "8911495aa1b624f6ae866df8a66413c4"
  },
  {
    "url": "assets/js/12.4bd65ce2.js",
    "revision": "efe9483334d2c907494b2ea73cd338be"
  },
  {
    "url": "assets/js/13.0909a73f.js",
    "revision": "096ce92472aaf509177e86e6c781e0b2"
  },
  {
    "url": "assets/js/14.eb285913.js",
    "revision": "dadf5b45e707b8007e6e63876c01575e"
  },
  {
    "url": "assets/js/15.b2312ad7.js",
    "revision": "8614b6df8ae13f2b9a3eac1dde0ad702"
  },
  {
    "url": "assets/js/16.da285d26.js",
    "revision": "6d7180a3257331994088f945d4ded1af"
  },
  {
    "url": "assets/js/17.ceb129ff.js",
    "revision": "06e7cf002e1b6e0a74127c2bf9f24420"
  },
  {
    "url": "assets/js/18.f6b502f2.js",
    "revision": "078fac94f6661860c8c0639b32326d10"
  },
  {
    "url": "assets/js/19.4d3f03e2.js",
    "revision": "5269938794f45c928bac4280f28d784b"
  },
  {
    "url": "assets/js/20.596d9c26.js",
    "revision": "bdef87edc3b63610a7c8d5e96b5fc3df"
  },
  {
    "url": "assets/js/21.e73b98ec.js",
    "revision": "242b6859b0a796f44461ba240af8cdfb"
  },
  {
    "url": "assets/js/22.fb0a12b8.js",
    "revision": "266e62d0faef8a10d980719d9b285978"
  },
  {
    "url": "assets/js/23.102cc458.js",
    "revision": "4c412388d205fdc53d4097318d3d81f5"
  },
  {
    "url": "assets/js/24.e7dff5f4.js",
    "revision": "bebca9b08ecdaab112e37909796c94da"
  },
  {
    "url": "assets/js/25.030a0733.js",
    "revision": "64beed9adc691a942f9f12e93cd1eadd"
  },
  {
    "url": "assets/js/26.a738220e.js",
    "revision": "5370a5800b1949a7c08a71d5e23f20d4"
  },
  {
    "url": "assets/js/27.86584bd9.js",
    "revision": "33e8ed1d0bcc690018aa05c563391380"
  },
  {
    "url": "assets/js/28.314af7d9.js",
    "revision": "897e872ed1c12e9978c470a55923a963"
  },
  {
    "url": "assets/js/29.99283ab2.js",
    "revision": "35220f15a6d9d18d1aa134a5dc91720c"
  },
  {
    "url": "assets/js/3.6c356d29.js",
    "revision": "7255dc64cea7dc1e2ae0387619329a08"
  },
  {
    "url": "assets/js/30.4aa2d303.js",
    "revision": "bb14ab931c22c0e87e9b8a2eedc61d10"
  },
  {
    "url": "assets/js/31.3216408b.js",
    "revision": "3758d1e47dfc7fdced9c2829047f8a7e"
  },
  {
    "url": "assets/js/32.d8937d11.js",
    "revision": "6df05632b1ed340356290e63ecc842c9"
  },
  {
    "url": "assets/js/33.f27cded6.js",
    "revision": "4a910b93fcff5db120c27633e8f5d28e"
  },
  {
    "url": "assets/js/34.a5eb7415.js",
    "revision": "ac3d0702f6327c38a2639afdad2b7f02"
  },
  {
    "url": "assets/js/35.70dc3cfe.js",
    "revision": "a2223996938c8e867ca3c25fde77470b"
  },
  {
    "url": "assets/js/36.87d622c3.js",
    "revision": "1ab7a838c6cf63acfb1ca53e65eb205e"
  },
  {
    "url": "assets/js/37.3bfc927e.js",
    "revision": "23551e3b86550b476064680daa806ebb"
  },
  {
    "url": "assets/js/38.912c9d12.js",
    "revision": "4edf20876b6a9b29da1104015b606ee7"
  },
  {
    "url": "assets/js/39.ced6469e.js",
    "revision": "85fb8e954d951beeb3384a9469832b7c"
  },
  {
    "url": "assets/js/4.9fb9b92a.js",
    "revision": "c5ee3e9af3a607348c8c827aa42b3b47"
  },
  {
    "url": "assets/js/40.49fabaae.js",
    "revision": "411e778818848e4f92877f42f4dac886"
  },
  {
    "url": "assets/js/5.9bae494e.js",
    "revision": "d02ec2d88671f4ab5a2aaccd67f85340"
  },
  {
    "url": "assets/js/6.d5ed689a.js",
    "revision": "fe56141121f92b1ee72d0da4ac566240"
  },
  {
    "url": "assets/js/7.84eec1d4.js",
    "revision": "6643a914a2b7a4a1ead9c49ffdb25f56"
  },
  {
    "url": "assets/js/8.5b17701c.js",
    "revision": "4c53067e94032b80a8d65d524722bfb8"
  },
  {
    "url": "assets/js/9.764283b0.js",
    "revision": "163dc8433bd636a107902db31b8d8af1"
  },
  {
    "url": "assets/js/app.ef6f9589.js",
    "revision": "e816f7f3919e4b72e590ae48b61aa208"
  },
  {
    "url": "assets/js/vendors~docsearch.2c1e3e44.js",
    "revision": "c5ebf7ef01be97d8f408d5b2d3c929ce"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "cb7285753fe90ddb520b82b9724a67e9"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "ebf1bdbe550029b4182272a880e445ef"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "4d9df7766ac47776ef6e233cd68fbdba"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "9fe13715a8b22049f95c1dd4a7801167"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "da55b212aa2b14c55bc0c8986150e654"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "6fe237d5808659c409400aaada0d2776"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "b547ff861160c0ee1f3db68ab0d12cd2"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "a0b6116556c36e9e393e9cec1818be33"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "7dbf7cf122e2c252fda84dbb5bbc11df"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "10aa9982330fcfcb92484137dd366c08"
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
    "revision": "22e666f67787bd4ba37774cf6266df1b"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "4fe3b4bbb611383599d3ead628bebfc2"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "627c57fe95fbac74da38bbefb7d7f4ce"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "07e691eccc53174232ea2d6843cd084e"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "f2d58e45ef3414fed2f1fa54c79904a1"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "2d176a703ea9167fba90086b62c2a257"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "436fcd487db537b0d0076c98f96e5734"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "ff2421c7d007a74f1c4569d3c5c1ead2"
  },
  {
    "url": "resources/books.html",
    "revision": "0527e474b5f65aa0afda748c70c129f1"
  },
  {
    "url": "resources/community.html",
    "revision": "4431a8513a293e874d1c7c4db2e8fb4f"
  },
  {
    "url": "resources/conferences.html",
    "revision": "86e77e2e58f42263fd5469a47055d1b7"
  },
  {
    "url": "resources/courses.html",
    "revision": "3f9b5aebb48cae7e9dd4a089d93967b9"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "474b7986076492b9d091e86325ef6d9e"
  },
  {
    "url": "resources/examples.html",
    "revision": "c2a16426ce9d25fbd8d1f17d34ad9a82"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "1357e6f1ce496a6127a0ef1efdb7f6c9"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "6bbd9c4e8a7b0137d5a1e3a8f0574421"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "91d69e627d1069d9cc68e6fb8c30ec2d"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "9e54a3fe8c75765c748f27745ad5ce9f"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "ad019c77924b2e1cbf8c078be895a5a3"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "af3343d0eb24935107cb6be7bbd38c13"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "30dcee9baf78db8916d92cb63a43d48f"
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
