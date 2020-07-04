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
    "revision": "33e486ddce2a21e832f2578efb9dba0a"
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
    "url": "assets/js/13.61abb381.js",
    "revision": "619b24f0c3acc8ce4ad967b9054be9fd"
  },
  {
    "url": "assets/js/14.d2b762da.js",
    "revision": "cf85be77a57d51422286739aa6c0bd43"
  },
  {
    "url": "assets/js/15.47212bda.js",
    "revision": "3f0f60d6f1a08e622d0c7af8341190ec"
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
    "url": "assets/js/app.bb082973.js",
    "revision": "da14d1b11eee07f3522ab5f595de9115"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "4749c4b863721c65c2c1f1ed34117d92"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "5e9acf7a3b813cdc9374e8910274ee46"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "85e189bf733ae705643eecdb34b87106"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "8279f081325322467bd6e0a9bde7460d"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "cd5ee8e1fdff437fd240e8f1f5517709"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "e1f6e392af78180c7118d9d1a75c49fd"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "dc68deec6c46935cb065d9df5af83588"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "f79ab4af11a84fc71281f0eae9d2094a"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "ebe5c870016cb304fa99ff8e0de87f6f"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "ed2da3223a33376d85dda3ee78b5bacd"
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
    "revision": "d67b0b8e0b0323d525b5d667fc41f0be"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "88106edaf47c0dd1c11c55e993d68732"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "22cf747bdcf06ce6ffb33c0109e82fa4"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "114af26676a0b5659554e812b23b4bc0"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "f9a8c8ab90fd13185e485085fb61d485"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "43d9884dfd315860fb0b3063459ef763"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "f04b787813b70636487b36e48ede9b38"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "36e5be332f75724fb75449b9fe370de5"
  },
  {
    "url": "resources/books.html",
    "revision": "29ef17eb067a69fb10d6094802bf41fb"
  },
  {
    "url": "resources/community.html",
    "revision": "84033aaa07d68bdfa0dda8c4a5cf5f4f"
  },
  {
    "url": "resources/conferences.html",
    "revision": "e4e934e0b909f79a4610525e9a56916c"
  },
  {
    "url": "resources/courses.html",
    "revision": "b336c94f518a438dff951b2689fbf01c"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "0545b1ab20532d11a859198946187357"
  },
  {
    "url": "resources/examples.html",
    "revision": "a9aaf2c31c6027b2c909631900e83756"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "f48815b9a477ab87cddbf8a7e8bfdd0c"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "c9673448c690f3c30599e1b054a4496e"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "21cdae0a6d20c362cc95237fb95da597"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b0366bd83e071f2067cdeb7740c5dd9a"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "d2f7117e660fde7e26b62317a08eae66"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "efbf559ecbfa151bb5ed652c99bb856d"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "e93750e550b9d3c4ec756dc1e8845264"
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
