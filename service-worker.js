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
    "revision": "169ffa0a68cf85c4b07d0b3762addc7f"
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
    "url": "assets/js/11.f9d6bbdc.js",
    "revision": "73d310f13b0550fc9307c2edd2304072"
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
    "url": "assets/js/15.b139c31a.js",
    "revision": "a3026712061441872f6011e89b9dec57"
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
    "url": "assets/js/24.2310c835.js",
    "revision": "4cfa0fc354439f1a0a871bdcaad315e7"
  },
  {
    "url": "assets/js/25.db5a45cd.js",
    "revision": "9e5f5bc905680d11e3fd53aa6af8ac6c"
  },
  {
    "url": "assets/js/26.3a70ef78.js",
    "revision": "b893944d10581b069614d7de6cf4bba7"
  },
  {
    "url": "assets/js/27.7e3042f7.js",
    "revision": "f2ba4c336deebdfe362280c71143e09b"
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
    "url": "assets/js/32.cdf58ae2.js",
    "revision": "d366d1e8c024a3874b7695e4c350317b"
  },
  {
    "url": "assets/js/33.086361d2.js",
    "revision": "473167a2699ed7158ffbf409668d0b05"
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
    "url": "assets/js/app.ab513e52.js",
    "revision": "35d2b55afcda693becaac55d63f752a8"
  },
  {
    "url": "assets/js/vendors~docsearch.2c1e3e44.js",
    "revision": "c5ebf7ef01be97d8f408d5b2d3c929ce"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "adfdb70afe823849ac0358732db396e3"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "461bdf7edda35e1e48c079bda81c9df6"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "e198423fb49676a7a8a8b03d9cbe64a5"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "bdc86a8a5430bb9c13b71546a8c5b8a9"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "ddbb5e4b88f50e6b18cadc007cd33fe7"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "d21e6856d3d2b2e47ca97addd99afb4c"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "ac94c4052e6170c19b1309ebb2e11637"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "e6ae9e3b5b52cd169beec88850539392"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "e1792f2f4c12f90e4ce7148c6ab78b97"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "c846ca7f4654fc43d00c9302f17ef0a2"
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
    "revision": "20e764b0fea0fa619aaf06d8e44cc03c"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "a31e36476b06431404e06b0d037f974a"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "f298eba4522fd4642a93ff9be27b87a5"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "b5f6c1977879071c80d50f478cf030c5"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "b0ddd0b2e2e414472083285c20cb81e0"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "7f9ed27b751a6017516f6e0cd716c728"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "50005835b85a5425f109c09dae22d1e4"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "245031ed873e5871f4b78722c7605c2c"
  },
  {
    "url": "resources/books.html",
    "revision": "102a1ec1f44629d183f04b5a44ded51f"
  },
  {
    "url": "resources/community.html",
    "revision": "47b576681601d5b45eb47f65f835e83f"
  },
  {
    "url": "resources/conferences.html",
    "revision": "9f5879414928256dad3eb42b1f919e84"
  },
  {
    "url": "resources/courses.html",
    "revision": "4f81019ef5202f4b7b51e7fa9c0bccad"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "bceca0284f937378df31bc2cc9c7f00b"
  },
  {
    "url": "resources/examples.html",
    "revision": "edc6a669f18a3c990a6b199bd94c29e0"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "c294fa7703dbc1db478e39cda12e0f6a"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "bc960509568ddd85202b666a0e191e78"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "2ae64a6701a9d8aba014f905f049368e"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "08c68a02528d51fba0b726098b6c1843"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "1704edd256f98969a7b5db5d1d0b1f7d"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "928acc6ccd8422ec8e8c6abe7a593daa"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "7c51ce8be4e5ac5863aaa67f41230533"
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
