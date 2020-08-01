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
    "revision": "e6140fa370dacca3c70a3af47d9b17f9"
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
    "url": "assets/js/12.cb8631bd.js",
    "revision": "f73cf2ac5bcd9fd913cdc8aa1637b4d2"
  },
  {
    "url": "assets/js/13.48cc5bfb.js",
    "revision": "1a1e833cfd6be103ede0d4adfefdebf3"
  },
  {
    "url": "assets/js/14.d2b762da.js",
    "revision": "cf85be77a57d51422286739aa6c0bd43"
  },
  {
    "url": "assets/js/15.43040b38.js",
    "revision": "ae3efd56376249973c3f4a13000de367"
  },
  {
    "url": "assets/js/16.88f7fb1e.js",
    "revision": "e5914af1ebb40ae614173ddf8ea53075"
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
    "url": "assets/js/app.b1003767.js",
    "revision": "ce3e3bbdc26a6eb4e23b0b5edbbc74df"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "4d8ae96f6609f135806a9a8d379c9a5a"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "cda4cb3b827a2f2dbf0915e69740c56a"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "ffd6023e8dea3393f36f22bc9762c828"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "f309db3f0c3cbd01675ef7a20db2f4e7"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "0ac38464b2e54931f46bc8cbf0af1b0d"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "ae3e786c08b31952b4ae604b82c90b56"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "d8612e45af98b7bce2df03f2ff97d3ba"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "cc2b26ae41af827bf7eaafffcd03d9cb"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "bd2bd4f3e9e28ed3604551eb3c0b9524"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "ed0c05763561075e159eb5e6b88258a3"
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
    "revision": "4ac2d92a284ca4f190deec3e403a987d"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "3371a4cc47dea46e6c4ccd2b1aaf2d0a"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "24a96f1d91e285d54b9573dc257fadca"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "fe995ccb31df4656efc1130c4f403bbf"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "e72e8961913eee9d165f280cc5acfd62"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "317d2f250b310a34a20670d5c23ae79b"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "6f3e9870927bc6994c3114db689540a3"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "96c55f2cc1da2be708020ff666fe1899"
  },
  {
    "url": "resources/books.html",
    "revision": "77c021b1453ef8719160b93921d7bbed"
  },
  {
    "url": "resources/community.html",
    "revision": "c0b997fb4e89605a9725f1a4f60df108"
  },
  {
    "url": "resources/conferences.html",
    "revision": "2122be233796ee11cc5ab8a8cbfba439"
  },
  {
    "url": "resources/courses.html",
    "revision": "fbba71566277282bba3dc139abbbff3c"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "7d650d8afced2e662a5cc41a234a1c86"
  },
  {
    "url": "resources/examples.html",
    "revision": "b357245b251265bbc3e78ae7dc884b90"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "45ddb0774af99b4cc896acfd11484a86"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "3eb36cf3bf2f89f985cb48d5b52fee02"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "5cc2800c0977d2b40d259ec87c5f70d0"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "596649fa5e40ae7249762a05eec5d0e8"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "019dbde2d271b2147a70f02bfdab610b"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "355aead1351403023f744dabb6600796"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "5f0d4a3c6e41b2cdaf2444e9777bbbd4"
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
