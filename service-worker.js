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
    "revision": "96bd7f0c9b9161583727b1e3ba8a061a"
  },
  {
    "url": "assets/css/0.styles.8285d57a.css",
    "revision": "45f98fafcf1e548c8ef06add2cd765c1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.54e8c9c6.js",
    "revision": "a544722054a0a7ad32e532a450231073"
  },
  {
    "url": "assets/js/11.b5ad5200.js",
    "revision": "687060fe4579727ebfea20dc3c570aa4"
  },
  {
    "url": "assets/js/12.c4f219c5.js",
    "revision": "d08113b6bafa5742845072bbd3857551"
  },
  {
    "url": "assets/js/13.b14be8ab.js",
    "revision": "5f20a17942822659f4742d323f0602e2"
  },
  {
    "url": "assets/js/14.c83d2d4e.js",
    "revision": "c0a77abbbd9f4d2f446c7b79932a38ae"
  },
  {
    "url": "assets/js/15.fad850fe.js",
    "revision": "368ee63761fd7ff36940f7b16d491391"
  },
  {
    "url": "assets/js/16.27c5281d.js",
    "revision": "d7eb3ee33a61535db9978da0532d1156"
  },
  {
    "url": "assets/js/17.774d8a82.js",
    "revision": "5f64f37c591e879b313f10a0b68cdd3c"
  },
  {
    "url": "assets/js/18.460a27c0.js",
    "revision": "5d8a0551870efd467f84bb1134ddb510"
  },
  {
    "url": "assets/js/19.7c409d12.js",
    "revision": "8690ea2f5d878c3642aba334e38f20ca"
  },
  {
    "url": "assets/js/20.5e3b2b3a.js",
    "revision": "0572051f7efe32aaab1497770c1050c5"
  },
  {
    "url": "assets/js/21.9e587444.js",
    "revision": "13be60ade15647087ca5f0bd592e8d9f"
  },
  {
    "url": "assets/js/22.73ba2365.js",
    "revision": "81848eec5c57e78d5d73533d5f9be07a"
  },
  {
    "url": "assets/js/23.af7d6148.js",
    "revision": "95fbc9481d424c18dbc8417f7ff59743"
  },
  {
    "url": "assets/js/24.16f3805e.js",
    "revision": "a50c99c98ab258102ff9cbb9e2a29bff"
  },
  {
    "url": "assets/js/25.8fa19085.js",
    "revision": "f2ab0a0be371574d2f6facbebf2d30d7"
  },
  {
    "url": "assets/js/26.3b22d619.js",
    "revision": "f8556d1387032890da1fec05d20564da"
  },
  {
    "url": "assets/js/27.f1a32bc2.js",
    "revision": "6ecdd2293ffa0681167eb83370daa8cf"
  },
  {
    "url": "assets/js/28.1262166d.js",
    "revision": "a4466874bf796c8b1abe7dbc31dd8c3c"
  },
  {
    "url": "assets/js/29.59b32718.js",
    "revision": "470639f16242cb023fa40cff250fedce"
  },
  {
    "url": "assets/js/3.2d940320.js",
    "revision": "e79fbcd20d0db5bbb9298510483b00a2"
  },
  {
    "url": "assets/js/30.5b8f4c5b.js",
    "revision": "d02dcc0b3d3ee22cbc36d996cb98da6b"
  },
  {
    "url": "assets/js/31.32ec69da.js",
    "revision": "42d4cf8213d5145a9e6e74caecde4611"
  },
  {
    "url": "assets/js/32.ccdd9a7f.js",
    "revision": "edf8c1df15bb89435473c10d2ade8894"
  },
  {
    "url": "assets/js/33.9f1c8374.js",
    "revision": "fc6370c0ecba5675c74920a6d9e7aca6"
  },
  {
    "url": "assets/js/34.05a7beb9.js",
    "revision": "5fab9650a5daf1a4c6dc96675231830e"
  },
  {
    "url": "assets/js/35.58c6fe65.js",
    "revision": "3a087a67c6d137187ceaa5efc3e30f54"
  },
  {
    "url": "assets/js/36.816278ee.js",
    "revision": "7ad90d2549949012c7995cc10531420e"
  },
  {
    "url": "assets/js/37.e2e819e1.js",
    "revision": "0e1a4ce7d57e0efa914fdbdfc8473731"
  },
  {
    "url": "assets/js/38.269e883a.js",
    "revision": "9b326e773a8615b65d7dad3e6b072a33"
  },
  {
    "url": "assets/js/4.71403271.js",
    "revision": "97c86b8cbb498634e80176b85825f76f"
  },
  {
    "url": "assets/js/5.5c135d5e.js",
    "revision": "055a4d6d5d68a436f05842f4cffbdd37"
  },
  {
    "url": "assets/js/6.b4674824.js",
    "revision": "87f7cf8895d76371e075d90292b1abe1"
  },
  {
    "url": "assets/js/7.f221329a.js",
    "revision": "2f338c8a3347232715c2316ec66c44c9"
  },
  {
    "url": "assets/js/8.c44141c4.js",
    "revision": "75dcfdf6f15f57378aac1feb460306c1"
  },
  {
    "url": "assets/js/9.39fae4ce.js",
    "revision": "bb6f340c705f40126793338fc9501928"
  },
  {
    "url": "assets/js/app.4708c844.js",
    "revision": "ef3992b04581d520ddfffb193f7c7f8a"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "8f708b69ee08e0b2508effad467d367c"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "713ecbf08f3ede72db4bc50bfc1f2ba8"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "0ff825553edd9b8c75859fcf4e7a355c"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "e2c597252b24a508b8e6fb99e0b96a84"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "e400b975b4334351ed3d8dc64a36632f"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "b4c22badefe8897e981f7d1023cecb11"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "ed524c820dac582deece54bcb0858bad"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "4d199a3a40a2c14b79197985ee0d9796"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "5afe605fffdb7bac08ee7df5848ea703"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "bd4d9e9fe7495880fee362fe8efea0c1"
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
    "revision": "714f94a7f6cdc3edf3ad376779ad7ec8"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "1fee74855532ed969ec5c88f379c5e50"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "699e1dee46e4da02ff83d4d8acb6320f"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "27f2f6583db0653468365966f79deff9"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "6aac46d4a6d6fa02176b3bb034b3e871"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "c661f0b14c65465760c67c457c9a2d58"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "d8351710f415395b32a544c5fe495671"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "5cbdf02627bd1c512b92e88f02a830a5"
  },
  {
    "url": "resources/books.html",
    "revision": "8559038e9e3fffd8f070e7d66db3f8a0"
  },
  {
    "url": "resources/community.html",
    "revision": "b8c9bc3df0419c812096f92f5a2b4373"
  },
  {
    "url": "resources/conferences.html",
    "revision": "c052f0b2389f85e357965ffc23e1c33f"
  },
  {
    "url": "resources/courses.html",
    "revision": "b78a9d12b3b257c70b88c0d198b904e4"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "d91e162bcb8234885613f5ffab4d9784"
  },
  {
    "url": "resources/examples.html",
    "revision": "a0921151474787abe39f3a91a0b5db24"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "2f3c46a3272d8244ef77767588ad6a16"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "7181b7f11876590cf2398bfad496532f"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "54a43791a706c36a41055a40893109f7"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "0bb38bcef46024aac43a7aa3730596c3"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "b08dd6828d0d7a928f88cad6a420759e"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "760e6e979edb4d4185dc73ba9d7fc1f1"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "ce7d47360ac65255eceb029671e40614"
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
