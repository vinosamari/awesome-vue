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
    "revision": "30c9c826899074493d187f3078755379"
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
    "url": "assets/js/13.c430b2ff.js",
    "revision": "cf051cb9c83d0b4b61c867a1ab16fc95"
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
    "url": "assets/js/app.daa167fe.js",
    "revision": "221f7e09475571e4dbe32c7f7b26e019"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "bf21c7fe2acb21f58fbb99995fa7aa07"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "185909720b91048c112723804d1becc1"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "f67b4f95b28fd65117ef033d4d5263de"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "816eec0c23081a5d87ff2181cd3ea3dd"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "5f4168233fa610b57503e09f2c715cff"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "a96ee037eb09d441d3c3e657f495a532"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "2e09f1a9a8fa6c0334e41fa101710a19"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "21de40cdbefb46aca4e23cfac75ffdc0"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "3037ccad14515107e0e6c9e4b023abaf"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "5de666f22f4ab8454a56815e4edc339a"
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
    "revision": "49af9c22a53411ffd439b30e1c7e8e54"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "043afdbecb2849b6d877eab05f578268"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "7ef5a1eea99ab049b6a735c7e2f14ba6"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "599daa0fe28840db4a9b09f77b4d75e2"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "4292a3209d7445388b3973428cd7fd46"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "451e4cea8f75ab22f04a2020f5dedf2d"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "f5c0893713f696cf6c71b31274e3d230"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "4e96ad878d73b24c3a642a68eb81532d"
  },
  {
    "url": "resources/books.html",
    "revision": "a8447bafac942c6d76f81ac1f4de32b5"
  },
  {
    "url": "resources/community.html",
    "revision": "a775fcf5be6c9d26545c4dda3d9c46c0"
  },
  {
    "url": "resources/conferences.html",
    "revision": "3c6a3a103ea7ee0c275a74c5767761e9"
  },
  {
    "url": "resources/courses.html",
    "revision": "e8b5f5a4229ab059592d4da14d4c05fe"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "463b047bd9c0ac994806bf41e0775095"
  },
  {
    "url": "resources/examples.html",
    "revision": "602f9e246b0b5477ce75beb955da34d9"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "b2b96e49224a76590a3b9ebde9130706"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "27d17a68ab01d85acf4879cfe0b50c8b"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "014690987c76576691338b6046f93f04"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "adac3c032a5cb7a96d57308143d570ff"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "96f161ef510c01941479f7f56c57cf99"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "71a0301e159a28debced7b7edc2b5e9b"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "9eb5207b2745f94a1d6f12836bcc0a70"
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
