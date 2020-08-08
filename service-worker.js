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
    "revision": "52cfe17da377c088cf7d70a7ed47e5ef"
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
    "url": "assets/js/13.71d6855f.js",
    "revision": "7b428d9948cd1935419670d83a5518cc"
  },
  {
    "url": "assets/js/14.5b55466c.js",
    "revision": "cf85be77a57d51422286739aa6c0bd43"
  },
  {
    "url": "assets/js/15.8445adb4.js",
    "revision": "ae3efd56376249973c3f4a13000de367"
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
    "url": "assets/js/19.154d31d2.js",
    "revision": "1f56e862ff3cd76e9e8808752180bbfe"
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
    "url": "assets/js/7.b91b729c.js",
    "revision": "2d642a751c915113d2bf90d3132cf9c1"
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
    "url": "assets/js/app.a525c4c7.js",
    "revision": "03a95482144642386df8f5fab45c1214"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "bef231fc6296483dc0b642b5f43651f6"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "6c4c51a616ac61d4a982cb1f53cc372c"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "1d29b0885a3d9c8669d876b42d433617"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "5222ec704756a11c7091cf7b3b6e9f4e"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "2112acb9e9d97fce382036470dcd76c4"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "7a3f5d23ed4bb052d71ba892ebbd698a"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "ba3635f6bce36d10eb7399ac75d566fd"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "fd4da740003cd72e5e80db7a6c7d7809"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "63a67086d670112ded004e233753417c"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "3e7552828a7cabec27e13a8baf40b4c3"
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
    "revision": "fd773f67bb1d5e04281fd8b9639f3e79"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "797646d8bb6f9b6156af40af31ea00f1"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "11b21b238c4cf495e86300274a6e5d74"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "5d6fdb31fa8dfc68f0b8016a9e399945"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "7998a4a261d7f9b7c78031a1e1674f19"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "b20c76fc3809e2f2cd21e1e6474fd4c4"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "b7b8e5938cbb503aeac265862fc25d35"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "25c8332c1568269008d5fad0f6220e2d"
  },
  {
    "url": "resources/books.html",
    "revision": "af7759646f24ba2dc347a98e9ede64cb"
  },
  {
    "url": "resources/community.html",
    "revision": "73c6087be75fc2cb7d5b861809aa243e"
  },
  {
    "url": "resources/conferences.html",
    "revision": "5da94c4acb44df1309ce6a6073b327ea"
  },
  {
    "url": "resources/courses.html",
    "revision": "8d6d71a9371bbf7ee88d7afff11328e0"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "cb7814ea99141e6aec4ff3d145b91b37"
  },
  {
    "url": "resources/examples.html",
    "revision": "dc1858c2d10c10cd824be7f5acc03ffb"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "61e387fcd1eb0d9e4bb56632b1fdf604"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "c53022ed86a694e73c029ac8555e1301"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "b65281759dfebfacbfde7cf229ca6aef"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "1d538ec917ff11d87ea5a5a3f5fbae38"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "6d6cdfbea009b8530af5e0fe8a5542bc"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "b002d6da257480ed97ea5eded7751d71"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "4f74767b02456e028ffaa9ffa86687a7"
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
