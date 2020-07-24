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
    "revision": "ade98b96e281e1d17bbc5317c87219b9"
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
    "url": "assets/js/10.e9a8f0d7.js",
    "revision": "cb3fac259a7ecadf1ee608b657796ff5"
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
    "url": "assets/js/13.ba40c548.js",
    "revision": "769222810582965ec2e1aaab271146dd"
  },
  {
    "url": "assets/js/14.d2b762da.js",
    "revision": "cf85be77a57d51422286739aa6c0bd43"
  },
  {
    "url": "assets/js/15.3b967465.js",
    "revision": "4f8855c15e6e83fd138bec79c04d8c4e"
  },
  {
    "url": "assets/js/16.e9573d20.js",
    "revision": "afb4c527ed7c70982cdfed5db14483da"
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
    "url": "assets/js/19.8f56632f.js",
    "revision": "1f56e862ff3cd76e9e8808752180bbfe"
  },
  {
    "url": "assets/js/20.4398ae3f.js",
    "revision": "0572051f7efe32aaab1497770c1050c5"
  },
  {
    "url": "assets/js/21.886d4cf1.js",
    "revision": "13be60ade15647087ca5f0bd592e8d9f"
  },
  {
    "url": "assets/js/22.ee2bc5f1.js",
    "revision": "c6803ec3333fddd9d49a46f622fd06fa"
  },
  {
    "url": "assets/js/23.53b1c3e9.js",
    "revision": "95fbc9481d424c18dbc8417f7ff59743"
  },
  {
    "url": "assets/js/24.96918f4b.js",
    "revision": "cc6d7fbe589e1b7acb3075c315670e24"
  },
  {
    "url": "assets/js/25.180b63e2.js",
    "revision": "4da7d94fe5b760625c396db0aa021531"
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
    "url": "assets/js/30.3075a88f.js",
    "revision": "4e0a21cc95ab7440ac4c0245ee6d6ae4"
  },
  {
    "url": "assets/js/31.4d694870.js",
    "revision": "962ae0dec1016a75c2e94de97c0669ff"
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
    "url": "assets/js/36.79965472.js",
    "revision": "35c4fcb9f8808b6ce7a0989575cf2329"
  },
  {
    "url": "assets/js/37.20b2790e.js",
    "revision": "7daafe4f47d8ee64bf6a46bd98850e65"
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
    "url": "assets/js/9.8d9df600.js",
    "revision": "b72277be40fcc99cf17d826e588a85c6"
  },
  {
    "url": "assets/js/app.7e3a82cb.js",
    "revision": "007f9a64741a31cafa42846aa846d8f1"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "3a0545767b387fb05807fbc6cee3c7d8"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "09e12034b9c4d68b2d02cbae911549f6"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "99eab0d0c467a6839d749003345874f5"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "8f9c9d6877c4ec6adb2cc9bed8df10ff"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "5326570461970e56f55497440b44468e"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "264e900823b0821c1d0bc040058e4f40"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "995a5932a93bd868cadd2e336a012de8"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "249c606e99d981c6224e38d56632df88"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "8ac69cd337605a937a315d03912b8a43"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "0cf424f35b67537dba231f34b16aff20"
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
    "revision": "6ab836b4c61fd22b66c5670cfe383cd9"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "f98ff5813a5a5d2f104b19f67839bb7e"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "d343b0c81ce673961e1910282f727199"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "6406354da721f30fed0da1a046ad1837"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "92d7008a15bbdab452a7933ff70af2ee"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "ff078ea574ea91a918cbb2e09f050188"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "4075ed8d951e2e1d6615ffe1b03ffa89"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "1ebefda7bf8c2285cd1477525af32872"
  },
  {
    "url": "resources/books.html",
    "revision": "24032850686fe35a1e99ad83eec4decf"
  },
  {
    "url": "resources/community.html",
    "revision": "0fa5f82782640bd033ab12d6f04e0bc0"
  },
  {
    "url": "resources/conferences.html",
    "revision": "ff7e0ff2dbd605287f6293cd638f1d58"
  },
  {
    "url": "resources/courses.html",
    "revision": "912ee9d8859de44cf756b91527f86a6e"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "61901a664ad1914ddcebba92a00f96fb"
  },
  {
    "url": "resources/examples.html",
    "revision": "40da2f22ae8ac8bce44ea988a513e733"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "4676bd2de7526dee3509b5e6beb89e35"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "0103ca2c3f928c7684af680a130415a0"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "40eb23460906b1753f62270d665603ec"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "c419797e698da2a90f6cc797ac1921a4"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "9faee002e1428eb6eed8cce3fdfd51ae"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "e23a12211c90886b95c376881d163b7c"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "4b691cd1da2ffbe3823e2194a5a53ee1"
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
