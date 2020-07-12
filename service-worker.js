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
    "revision": "50b7c2d4c9d586dfc23527aa09a709af"
  },
  {
    "url": "assets/css/0.styles.af48d92d.css",
    "revision": "d094276598c5f5ba8a9b78db767ad7b0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c803715c.js",
    "revision": "77476eb0e7b1e371e3e139259d85eef0"
  },
  {
    "url": "assets/js/11.141a516f.js",
    "revision": "381d31a7d84b8738ad6c2f53dc541fe2"
  },
  {
    "url": "assets/js/12.18901236.js",
    "revision": "dd9ebd245bfbfe9dc3af15af2e835454"
  },
  {
    "url": "assets/js/13.49ad1c17.js",
    "revision": "5f8ca66f53ea781c22c4f912e19b0d83"
  },
  {
    "url": "assets/js/14.d2b762da.js",
    "revision": "cf85be77a57d51422286739aa6c0bd43"
  },
  {
    "url": "assets/js/15.5c6605a6.js",
    "revision": "71e866d5a6667c4b7509912643375a7e"
  },
  {
    "url": "assets/js/16.f5b12e39.js",
    "revision": "99665b376a88040962913d9b31ee03fc"
  },
  {
    "url": "assets/js/17.e8a1aab9.js",
    "revision": "7d6acf544da3729c617ae698e099216c"
  },
  {
    "url": "assets/js/18.5f986569.js",
    "revision": "e53da276511d4ae3de982278318683eb"
  },
  {
    "url": "assets/js/19.97c2a104.js",
    "revision": "189d341585278bfc67b0d91392620a8e"
  },
  {
    "url": "assets/js/20.e7b72ccf.js",
    "revision": "6f079c5668b3a5a2a2a35f98ccc7aee5"
  },
  {
    "url": "assets/js/21.886d4cf1.js",
    "revision": "13be60ade15647087ca5f0bd592e8d9f"
  },
  {
    "url": "assets/js/22.e8a7a452.js",
    "revision": "81848eec5c57e78d5d73533d5f9be07a"
  },
  {
    "url": "assets/js/23.53b1c3e9.js",
    "revision": "95fbc9481d424c18dbc8417f7ff59743"
  },
  {
    "url": "assets/js/24.128364cd.js",
    "revision": "a50c99c98ab258102ff9cbb9e2a29bff"
  },
  {
    "url": "assets/js/25.a5f973a3.js",
    "revision": "f2ab0a0be371574d2f6facbebf2d30d7"
  },
  {
    "url": "assets/js/26.c5b5a818.js",
    "revision": "f8556d1387032890da1fec05d20564da"
  },
  {
    "url": "assets/js/27.569585f9.js",
    "revision": "6ecdd2293ffa0681167eb83370daa8cf"
  },
  {
    "url": "assets/js/28.1840b3a0.js",
    "revision": "a4466874bf796c8b1abe7dbc31dd8c3c"
  },
  {
    "url": "assets/js/29.8993f122.js",
    "revision": "470639f16242cb023fa40cff250fedce"
  },
  {
    "url": "assets/js/3.0743bac4.js",
    "revision": "151fbf3ef65d76fa890b6743411b2bc1"
  },
  {
    "url": "assets/js/30.f9129080.js",
    "revision": "d02dcc0b3d3ee22cbc36d996cb98da6b"
  },
  {
    "url": "assets/js/31.d2e1b9ce.js",
    "revision": "42d4cf8213d5145a9e6e74caecde4611"
  },
  {
    "url": "assets/js/32.e0af3c28.js",
    "revision": "edf8c1df15bb89435473c10d2ade8894"
  },
  {
    "url": "assets/js/33.241eb205.js",
    "revision": "fc6370c0ecba5675c74920a6d9e7aca6"
  },
  {
    "url": "assets/js/34.42a1fcee.js",
    "revision": "5fab9650a5daf1a4c6dc96675231830e"
  },
  {
    "url": "assets/js/35.6f2ed33a.js",
    "revision": "3a087a67c6d137187ceaa5efc3e30f54"
  },
  {
    "url": "assets/js/36.dc51cceb.js",
    "revision": "7ad90d2549949012c7995cc10531420e"
  },
  {
    "url": "assets/js/37.17d41513.js",
    "revision": "0e1a4ce7d57e0efa914fdbdfc8473731"
  },
  {
    "url": "assets/js/38.269e883a.js",
    "revision": "9b326e773a8615b65d7dad3e6b072a33"
  },
  {
    "url": "assets/js/4.153f8c43.js",
    "revision": "97c86b8cbb498634e80176b85825f76f"
  },
  {
    "url": "assets/js/5.5c135d5e.js",
    "revision": "055a4d6d5d68a436f05842f4cffbdd37"
  },
  {
    "url": "assets/js/6.1177d97f.js",
    "revision": "87f7cf8895d76371e075d90292b1abe1"
  },
  {
    "url": "assets/js/7.21fad1f2.js",
    "revision": "2d642a751c915113d2bf90d3132cf9c1"
  },
  {
    "url": "assets/js/8.ff44ce5a.js",
    "revision": "75dcfdf6f15f57378aac1feb460306c1"
  },
  {
    "url": "assets/js/9.905b22a7.js",
    "revision": "bb6f340c705f40126793338fc9501928"
  },
  {
    "url": "assets/js/app.29640d07.js",
    "revision": "ed3ec69d65acd0f1b91d8ca9afbf6e3e"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "07249ac0a7a2ec55c6d54ead4fe36d58"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "fb59a6b4eea61a8dfcba7ea1a31c7709"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "a5b230ee6d436defe112dc68eed281d6"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "d12b05100b1086b147af20ab6010d2cd"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "fb4f54c251a33878363ea9d9c770a906"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "13ecf6552f59dadfc081f952f9dbfc3e"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "a054ddd0faab6cda359e88211a43697a"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "ce1e692ec5145b739b0cc9948ecea983"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "adbcf1aab2e009ed8eac2f8d8252e1a4"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "2160b98c36298a15086fa4ad6a560c56"
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
    "revision": "1ebeee8d3ad3e5811cd8ccd72071035b"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "ec5c450f1cb20fb30a8da87e6509d0ce"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "9bf1473f7d14b97b7624e0284bbb8445"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "36572519b0e052d30d411bc6464c5a36"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "c4fe4ec7e9c4f1d59801202162f579f3"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "a732f59fe17b55e530f6300eed146bd8"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "7a19cdb0ee83d007da7ed1487eb2dc4f"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "c4f6b9c63fb6c760ee66a04ec65cbec6"
  },
  {
    "url": "resources/books.html",
    "revision": "4bba2852e07302e6915a47addf949cf8"
  },
  {
    "url": "resources/community.html",
    "revision": "69f7f8070e2d57da8bc5761b72c42203"
  },
  {
    "url": "resources/conferences.html",
    "revision": "8a6067088d1d5d80e851a67664b66fee"
  },
  {
    "url": "resources/courses.html",
    "revision": "360d434bc61fac6e6e99f78f3718fa18"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "4599e623474d8a6b004136f36b4a0c94"
  },
  {
    "url": "resources/examples.html",
    "revision": "e18c15ef0e09279baef168f17a4a5da2"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "7b90cef5c4115df37877cc8c508d8bde"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "90e5cfc8657204a26eeedb36972a7b3c"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "e19b810cd93d814d24fe6d009e6c9e65"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "e5e855b17c96ba210ac7e4cae657f1f1"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "ac6a23adb52e6064e727bd4160a89bac"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "0d99bc49519bd8940d7485f5a5a85ac9"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "1fa079431495fd238d630f4b656d4a68"
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
