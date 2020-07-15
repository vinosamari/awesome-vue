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
    "revision": "44db1dcde32069ab2b707d463f9817c4"
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
    "url": "assets/js/13.1ff24875.js",
    "revision": "4e17b83b9101b2f0884790fe2707cf28"
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
    "url": "assets/js/19.5ad8acee.js",
    "revision": "45a4aaad4ca710f7ed6ce716929e0941"
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
    "url": "assets/js/app.29aae4f5.js",
    "revision": "3d0e67197e3c0a3c3676da9b7c9c703f"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "486b831f4bf668089ce55191bf36c775"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "50d211a57b1c00d9324a0cd59db50532"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "5b168f60641e444cda9ac5aa5eff6457"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "4b61f3dba7e2b18bb731ec563bc093d0"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "a18d0cfa33a3e2287e96d0396690f824"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "793f2da44402e1514baa3f45258e8211"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "c16d7498716baf05885d3f22fe71219b"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "ebd1cf948d706b6c314cf6b2a871848f"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "d603800affcbf3fad696b7951befa6b6"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "f6da228adfc34e5c1488a8577507e468"
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
    "revision": "a6dad155f26a45d8ad6de65167775790"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "c66249bf4442ddea27975aa15940028c"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "b3724ff103d0cfc9a624b20e50f213ea"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "e733b7e178023009df9a3d83e5a95222"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "0cf2185ae033da389219299ab6256154"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "8c94751bf3c0e047cadc786e973479b4"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "7601075eafa8971c49099a865046b9e1"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "4b7eb0bf9f3af0f933b9f2763a59ab9b"
  },
  {
    "url": "resources/books.html",
    "revision": "d0a8e0cd84d4b0ba04254524307fff59"
  },
  {
    "url": "resources/community.html",
    "revision": "09b0fbf87673bfce1362220809c12eb2"
  },
  {
    "url": "resources/conferences.html",
    "revision": "49f92e33c84558b0eccfd5670addb6e2"
  },
  {
    "url": "resources/courses.html",
    "revision": "8a326d72fd9b16342af6681e48320322"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "d7dc6e0d7358f82e278ad672b90c0c43"
  },
  {
    "url": "resources/examples.html",
    "revision": "6d6a6b5575fa1f79c991c02d1e6f29f1"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "bb4e9bc60e3cee25e2cdf1e285b2e0f0"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "fa4cd91655b0ac3f099f51c8dbf42a4b"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "73e09fc0a7eefc4758110013a1eceea8"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b945b56515dfd2385fef26c49aba9fe7"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "04fc5c16f4a5dd47c28b623ac7202528"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "345174426c163eda1c971ccee903e038"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "b8f6545e5b359a856efe905dd5b74e66"
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
