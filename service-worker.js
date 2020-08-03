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
    "revision": "4d9f662a7fd24c74e8804a953022445d"
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
    "url": "assets/js/10.043680f8.js",
    "revision": "1fd3f3f529bca8b80e5c791bb209e361"
  },
  {
    "url": "assets/js/11.4754d98c.js",
    "revision": "8a9d4b5c54a509b5fe398e4d5a27a5b0"
  },
  {
    "url": "assets/js/12.0a4c9b0a.js",
    "revision": "b245cb7b3a80c1badf471e092568d16f"
  },
  {
    "url": "assets/js/13.0006cb9a.js",
    "revision": "dac0ab1d48a6e59b0068d95f46cd01ff"
  },
  {
    "url": "assets/js/14.11f926e6.js",
    "revision": "c0a77abbbd9f4d2f446c7b79932a38ae"
  },
  {
    "url": "assets/js/15.4ceb4ce3.js",
    "revision": "d2472386da03b703e6d0f58404d87e6d"
  },
  {
    "url": "assets/js/16.13db6e59.js",
    "revision": "4002ea966875283402598418df85ac51"
  },
  {
    "url": "assets/js/17.683def0e.js",
    "revision": "371b4a1fc7e04ee7c54176b80755b329"
  },
  {
    "url": "assets/js/18.6dccd2ee.js",
    "revision": "9ad5647814a48c41c1fff41dec7605c0"
  },
  {
    "url": "assets/js/19.e1e9901e.js",
    "revision": "22170fac268c31625c71f02c069646a1"
  },
  {
    "url": "assets/js/20.0eae5ccc.js",
    "revision": "5c507a974902ec29af8f2641b08fdecc"
  },
  {
    "url": "assets/js/21.fd80e075.js",
    "revision": "1f41807212efb813efc5c2713deb4485"
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
    "url": "assets/js/7.2b38e738.js",
    "revision": "0e1c2d51cae21c756b090b6d69d4e8ff"
  },
  {
    "url": "assets/js/8.15e71755.js",
    "revision": "860c07617b292f519d3a8f049e758e25"
  },
  {
    "url": "assets/js/9.dd29da5d.js",
    "revision": "466dd6d0a5405d56e2a7727ab065fdd0"
  },
  {
    "url": "assets/js/app.10aeb6cb.js",
    "revision": "e7aba5cf322f0ec77b7b21314ba50e78"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "402b48238fbaef10f62247af6620c305"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "2b0237b63eb77287b8872758bd934174"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "3c59a52dd3410aaf35cd3113c562e92b"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "a3387241887ca77419e48aedc68de3ca"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "b18673d6054ebe89b0e59e9d1830dea5"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "1a75a64104b2f7fde129611f2913d58f"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "4b195e4a4e327584c7dba45e8f35656b"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "0215e1e662165fa448314e40a8cfba70"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "32e17d068bc06bd93be1abb037447f13"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "3f1a55879e69fe5db92fc483dd1d674d"
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
    "revision": "486535e06a95060a3855e97aebabece8"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "ffdb516d426084184048a6e1323629db"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "984601c4d3b96c04f3dc9a7749741709"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "d1dbc5a3e26b5ca545b8c3f6b6608f1d"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "d1b109968587c7c1d5befbe04ffc8dc0"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "77021b9ecd9ea7f25d4f9a2152492e54"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "23c498995b22f1e3280f9aa7b86f8033"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "8c6ba8d3f60b76773e2245c24e6ade87"
  },
  {
    "url": "resources/books.html",
    "revision": "432114afea39b9286eadf6deeedf68e1"
  },
  {
    "url": "resources/community.html",
    "revision": "f5cbd53a62ab5d2153f2dac41f769ea9"
  },
  {
    "url": "resources/conferences.html",
    "revision": "06f25388f220e24f793fd49c1c82e3c8"
  },
  {
    "url": "resources/courses.html",
    "revision": "8ff3d557929e2f50c92b2a9d40d22bb4"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "e26fd8ad06733eaa5a43c812519a4a72"
  },
  {
    "url": "resources/examples.html",
    "revision": "3a97abfa6af9a012708ffadbbe6063c6"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "c5bc669c013e27b201ad02b7ef504ceb"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "5063e65880e799e2ba69950503aded2b"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "0729e2e1c8f351ba3dea8a9b289525a4"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "c4db01eef00ab93506865c02223babbf"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "fc49fef3a29e79e4c12ef14b38215061"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "3cb04f4dadfbe8df01a0e6142bb46801"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "630d87c50979d91eb4c7df1416b2a77f"
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
