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
    "revision": "c7836323a51369a7ff2ea18407aebec4"
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
    "url": "assets/js/10.cd24251d.js",
    "revision": "77476eb0e7b1e371e3e139259d85eef0"
  },
  {
    "url": "assets/js/11.bbde8846.js",
    "revision": "381d31a7d84b8738ad6c2f53dc541fe2"
  },
  {
    "url": "assets/js/12.2342e8e7.js",
    "revision": "f73cf2ac5bcd9fd913cdc8aa1637b4d2"
  },
  {
    "url": "assets/js/13.945f59cd.js",
    "revision": "ef5fc299620d255eb1bb2e3cbed85236"
  },
  {
    "url": "assets/js/14.5b55466c.js",
    "revision": "cf85be77a57d51422286739aa6c0bd43"
  },
  {
    "url": "assets/js/15.0725a9ed.js",
    "revision": "700d7acd91cdb152202a9890ec36b12f"
  },
  {
    "url": "assets/js/16.b0e8da49.js",
    "revision": "4de01d2a1c2132bc1dd0629ec4c9d15e"
  },
  {
    "url": "assets/js/17.54f35cf8.js",
    "revision": "7d6acf544da3729c617ae698e099216c"
  },
  {
    "url": "assets/js/18.4d6c09d9.js",
    "revision": "e53da276511d4ae3de982278318683eb"
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
    "url": "assets/js/30.a073c13e.js",
    "revision": "e70316920e9dce05ba3dd3243e21e370"
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
    "url": "assets/js/9.3f62ea2f.js",
    "revision": "3c82b4b7d3041de6b781a335ec505138"
  },
  {
    "url": "assets/js/app.4f9e611f.js",
    "revision": "917b7413f5b1697cfb079941201686bc"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "2e323231518e1c46d88c5c56093ee7e4"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "978d2edca7f6e418b4dd48edfcb78411"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "3707d80b4aab46cb1acbafe6303f2aa6"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "d24906dd0452690ff9a552de2bc06a31"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "8b832eeeb34c7fd259c5aaaf0685c686"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "4a59a4a9977e1cda3453676d6bcf212e"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "ce7b90d5e199231a77f822d091c2a03a"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "e31a083fd65acdd3ffb965d0f8b33a87"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "3c37b9987598088be037e6d148d14817"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "83149b0f57ef1856839d0769fccd972b"
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
    "revision": "ca87e9975fc23fe8197ac521b12b895d"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "44be8f4f23a6de57ea4c06f684524704"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "4a38fc901123bda00396062b2dc0d4e2"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "f76bb22bd31d154602f7897f3e4f0d62"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "620cba61897688450ad69f0198543274"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "777ed095eebd51b836fcabe1818e58ce"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "adf5e5eb6ee7b40e8dd24fe01f994082"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "8c6797e50ccf43a64f7fbdfa42c14299"
  },
  {
    "url": "resources/books.html",
    "revision": "875b5deb2f58388adb0bbce9f70ed48e"
  },
  {
    "url": "resources/community.html",
    "revision": "eed7616ca466fa5071a6e5ce4f1b8840"
  },
  {
    "url": "resources/conferences.html",
    "revision": "2af9c573f77447fb855c33f81374950e"
  },
  {
    "url": "resources/courses.html",
    "revision": "d7e9bc2f36bf75323b9edfca90e1935c"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "0b8c6666b7643a6eee586942e3a34a4e"
  },
  {
    "url": "resources/examples.html",
    "revision": "9cbbeb647f9ede7915d9681c89e23954"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "d4c1865b1adc59c8f241437d859d3510"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "12b6785b2cc7a9fa3ff16c4888e413fb"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "fe90323a6c48920a8072c1d5e8775b42"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "aed6504c72aec77e33d87c4e95dc2971"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "efbe1e573e816c5f702aebfa2925a68a"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "ee768fccfa848c1e38c65fd46ed22d4e"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "8a2e60315f7dee07be348744da29098b"
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
