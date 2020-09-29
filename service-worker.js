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
    "revision": "17ee03e5946236d109076075f28ef3a3"
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
    "url": "assets/js/13.0494ac41.js",
    "revision": "8fad548ad70cb55fdaec01c1bb4b624e"
  },
  {
    "url": "assets/js/14.e9e46dcf.js",
    "revision": "1421ff0afeec0f6779c4eec6659c156c"
  },
  {
    "url": "assets/js/15.9b1e76c7.js",
    "revision": "0df684cf5ebead2032b99268fc5366c5"
  },
  {
    "url": "assets/js/16.950043e8.js",
    "revision": "b922686a961a35040f4fb40f8ee01292"
  },
  {
    "url": "assets/js/17.cf82c334.js",
    "revision": "58ccec7d2c00529dc580ae1d4b6d7229"
  },
  {
    "url": "assets/js/18.da710d1c.js",
    "revision": "e74a16c5967c814b441d2a61a1dfff02"
  },
  {
    "url": "assets/js/19.41ba5e90.js",
    "revision": "71b38b423cf8042dcb745f5fc02e00a9"
  },
  {
    "url": "assets/js/20.6dbefe4b.js",
    "revision": "51804e3a715d67f81358278c8869b0f8"
  },
  {
    "url": "assets/js/21.7368dd9e.js",
    "revision": "3820f8f9beeaec16c7fb237a2ce918d1"
  },
  {
    "url": "assets/js/22.fb0a12b8.js",
    "revision": "266e62d0faef8a10d980719d9b285978"
  },
  {
    "url": "assets/js/23.a9f888fc.js",
    "revision": "92c6e7695e03a1e6f1fc9e52a15e13bc"
  },
  {
    "url": "assets/js/24.cd8bf1d3.js",
    "revision": "59fa058f3ae2fe95c593cd881868736c"
  },
  {
    "url": "assets/js/25.c286f243.js",
    "revision": "006300b97c2bad965acd68d2c6972859"
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
    "url": "assets/js/33.c74a53fc.js",
    "revision": "5559f96dbb4b0dc94d4eaba0cb882514"
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
    "url": "assets/js/38.0f2d677a.js",
    "revision": "093251896e2da33c40983d26f8ea637b"
  },
  {
    "url": "assets/js/39.5bffd9fe.js",
    "revision": "ebe7a05da504371935a18d75ed2dc1ad"
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
    "url": "assets/js/app.79dc45af.js",
    "revision": "51d7d0e8f9f0fbf53ecc33a4514fac95"
  },
  {
    "url": "assets/js/vendors~docsearch.2c1e3e44.js",
    "revision": "c5ebf7ef01be97d8f408d5b2d3c929ce"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "5ddb4acb3080d8a1e9a798d303b5672b"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "c68ce235722a37d2b6a4260d7fcf37be"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "9e7342832f6d81c967b00473e8d7e059"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "0a07a311524e2e4be1dd639a46385486"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "cfc86e5cb91010bafd0c90790b5e6775"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "77a8322159be933bdb16c61b7d92be14"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "7ca0f7e06712e28437843ece44a327c9"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "8d9b6ffb02ce4797c076edb7de1c3f30"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "e093c051ac77e910caea27f97aee029a"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "c9e8563c4f4e7743cb2b723a9f55091b"
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
    "revision": "1d2d80f98a4deffba665b6fbf99a1167"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "54f712707de9c060242f5cd82550a9e0"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "a8a11797c953c13f03b81f1465c1beb6"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "aef8a596cb3b4f22d0044ac02add192d"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "339b2873160715c665ab8b211cc0bc9c"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "c1cf7dc08034b4f649e36e0b5be2ce09"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "b7c8ae4f2d2694baee5a042b654cc993"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "465509f8806373521be4220ea9f5907c"
  },
  {
    "url": "resources/books.html",
    "revision": "24eb02c591d48a35b0f397a79a7bd845"
  },
  {
    "url": "resources/community.html",
    "revision": "bb2374101bf8f3d028b200a45a5d9c76"
  },
  {
    "url": "resources/conferences.html",
    "revision": "b688f1eb9c46c0c18136fd7f3bd0909d"
  },
  {
    "url": "resources/courses.html",
    "revision": "2fd1ae15e60997590b39ea7584036bc6"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "03af41d79ecf6241c232f28c63d1b213"
  },
  {
    "url": "resources/examples.html",
    "revision": "d1534cfea49c963bdbeb8ca79d576177"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "af157ab953ad8317d086818f02b5d226"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "f3c2d3f241b8b08b7ac640c193a0481d"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "8997afbec20930a3c5d24a51a7777552"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "d8ed50d8bf10fc244392c540c719248e"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "0b89ba1075aec7bf2242158c1a510324"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "d702ad61c18f94d6115c191915bffd9c"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "3fea35ffaf8ab88823f6bf8e1a5a3e43"
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
