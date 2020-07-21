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
    "revision": "24ba9b18d45d5f5c0f60c0e75c7d8faa"
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
    "url": "assets/js/19.82374dd9.js",
    "revision": "79f70ee36300fea0aaa7b65b9877234f"
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
    "url": "assets/js/app.bbd40fad.js",
    "revision": "a2d9bf590e839776c1efc08434d842ae"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "5a35ce10b0cfb1ede1924400ef07191f"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "f7d43ce6bbb89153f7f8632c6cf11f34"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "67f102d99777a3d03cf0213abf5a4899"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "c7c7f09225ab371017e80c37bc132715"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "1770104c39828d9b3aba2e9e1c3b8409"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "02aa78695396b6459088cc0fe118cae3"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "ff874cbfc9fdacc35cddb03de691dbd4"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "e27cb0ad34ab1181e90765c5b0cae5aa"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "a760d3e04dc7358bd3eaa495a8716eeb"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "f3e1cf7bb9bd9edff328f699bab8a05d"
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
    "revision": "15196fd574395024dd1bd0bf023f6869"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "cd89da8032db5c29ad9ff2db4253e037"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "99863e5c9fbff00037259eb6d96bf5de"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "76ef24e88536c025819435499ea86a67"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "54543aebb56ce380f940c1539d59d98e"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "957dc5180d23ed22ce5ec3595fc3d879"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "74abe27d8840b5865ac1385da27cdd86"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "22d7740780add87e1c2c26a1f4f4fbf2"
  },
  {
    "url": "resources/books.html",
    "revision": "2e7ed815bd1dffc3eff6360dd23bd8ae"
  },
  {
    "url": "resources/community.html",
    "revision": "63aba320be62b5f0a27e078e02048566"
  },
  {
    "url": "resources/conferences.html",
    "revision": "636d363e1605e345a49cf5f94d01d27a"
  },
  {
    "url": "resources/courses.html",
    "revision": "2800b89d98e43a964bf7d9b9547816bd"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "dc4b15d2abfa9f171618f0074e6e4c6f"
  },
  {
    "url": "resources/examples.html",
    "revision": "598595b9d5548b0f9c4395f832445a44"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "13f35dbd0d910af7c79e8198a4381022"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "89dbbf50412f7566d38489397ee57fed"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "3149e32c9d6927efe4769895fec1a7cf"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "4566311d8431b6ad80f0674aa74e52bf"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "c0ca31255abdf7b159728832e681f9d7"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "fb7b85f59c02b009a2b75c5ca4d53788"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "35de666f25908024f497f732c16a66e9"
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
