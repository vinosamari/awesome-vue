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
    "revision": "24c1e0867bfa181f42aa1117221a70d0"
  },
  {
    "url": "assets/css/0.styles.faa55993.css",
    "revision": "135c90cff3040a651b1774cf15c05188"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0697bb0e.js",
    "revision": "77476eb0e7b1e371e3e139259d85eef0"
  },
  {
    "url": "assets/js/11.bff27ce7.js",
    "revision": "381d31a7d84b8738ad6c2f53dc541fe2"
  },
  {
    "url": "assets/js/12.f75be051.js",
    "revision": "5704ca0cae54e143aab021d95bc347e2"
  },
  {
    "url": "assets/js/13.59098f88.js",
    "revision": "42e6ae5fa40ea14047359e145c14a05b"
  },
  {
    "url": "assets/js/14.2c34dbf1.js",
    "revision": "cf85be77a57d51422286739aa6c0bd43"
  },
  {
    "url": "assets/js/15.aae20716.js",
    "revision": "467ee2b3710f725838abf9d406d93e6d"
  },
  {
    "url": "assets/js/16.2638bdc6.js",
    "revision": "7a5d203fa238cf0aaf6d9c2f0981b36f"
  },
  {
    "url": "assets/js/17.7419e4a0.js",
    "revision": "7d6acf544da3729c617ae698e099216c"
  },
  {
    "url": "assets/js/18.6b2b7329.js",
    "revision": "e53da276511d4ae3de982278318683eb"
  },
  {
    "url": "assets/js/19.92dc5e77.js",
    "revision": "69894ec1ac755fa3ebccd4b6ba66fb68"
  },
  {
    "url": "assets/js/20.b008f0f9.js",
    "revision": "5b07e3ce272ff85b3cbca77c0ba6a107"
  },
  {
    "url": "assets/js/21.e4c68eef.js",
    "revision": "13be60ade15647087ca5f0bd592e8d9f"
  },
  {
    "url": "assets/js/22.42e4efa8.js",
    "revision": "81848eec5c57e78d5d73533d5f9be07a"
  },
  {
    "url": "assets/js/23.0c5d14a4.js",
    "revision": "35fbe09786e4cdbeeee3d5733f05d5de"
  },
  {
    "url": "assets/js/24.c09453b4.js",
    "revision": "a50c99c98ab258102ff9cbb9e2a29bff"
  },
  {
    "url": "assets/js/25.74d296f1.js",
    "revision": "f2ab0a0be371574d2f6facbebf2d30d7"
  },
  {
    "url": "assets/js/26.1de66769.js",
    "revision": "f8556d1387032890da1fec05d20564da"
  },
  {
    "url": "assets/js/27.7fc57dad.js",
    "revision": "6ecdd2293ffa0681167eb83370daa8cf"
  },
  {
    "url": "assets/js/28.db4cff29.js",
    "revision": "a4466874bf796c8b1abe7dbc31dd8c3c"
  },
  {
    "url": "assets/js/29.209e5d3a.js",
    "revision": "470639f16242cb023fa40cff250fedce"
  },
  {
    "url": "assets/js/3.71767182.js",
    "revision": "42bf27c478e73a1f4d1365adb5937f5c"
  },
  {
    "url": "assets/js/30.ca8c2494.js",
    "revision": "7ba0f93218280270ac6813c7dfa4afba"
  },
  {
    "url": "assets/js/31.b12918b7.js",
    "revision": "3b55d635109a71e631c985e303631b18"
  },
  {
    "url": "assets/js/32.0f2f394d.js",
    "revision": "edf8c1df15bb89435473c10d2ade8894"
  },
  {
    "url": "assets/js/33.51e41ca3.js",
    "revision": "fc6370c0ecba5675c74920a6d9e7aca6"
  },
  {
    "url": "assets/js/34.23de4028.js",
    "revision": "5fab9650a5daf1a4c6dc96675231830e"
  },
  {
    "url": "assets/js/35.a0b1f594.js",
    "revision": "325d684fdb17210940f579a06f05f8cf"
  },
  {
    "url": "assets/js/36.d2338b1c.js",
    "revision": "7ad90d2549949012c7995cc10531420e"
  },
  {
    "url": "assets/js/37.b29fa909.js",
    "revision": "0e1a4ce7d57e0efa914fdbdfc8473731"
  },
  {
    "url": "assets/js/38.269e883a.js",
    "revision": "9b326e773a8615b65d7dad3e6b072a33"
  },
  {
    "url": "assets/js/4.aefcdd70.js",
    "revision": "97c86b8cbb498634e80176b85825f76f"
  },
  {
    "url": "assets/js/5.5c135d5e.js",
    "revision": "055a4d6d5d68a436f05842f4cffbdd37"
  },
  {
    "url": "assets/js/6.d8b56762.js",
    "revision": "87f7cf8895d76371e075d90292b1abe1"
  },
  {
    "url": "assets/js/7.98f4d58e.js",
    "revision": "6ff48b173fe48d74f83d91ddae9ed94b"
  },
  {
    "url": "assets/js/8.2d2ea21a.js",
    "revision": "fecec816d169e320f4524396daf5378f"
  },
  {
    "url": "assets/js/9.2fabded0.js",
    "revision": "2f773fe0cf8cd2d2a773f17d84a7aa88"
  },
  {
    "url": "assets/js/app.416c50ff.js",
    "revision": "26dc4aa73ed1137b4fc05e37571ce3d9"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "158f8135db2f77cf66c459048d769029"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "427eeea1981e6a226fa2503489b881cb"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "2acca8f12041ddeb3cc350b5d85c6263"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "1896f2f7057f12f3e37c7c4159f32606"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "97827f65db6f6fcaa7240126c9aae174"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "333b3342289fe4a191d2f042a39cfaa4"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "be5e857fb3a01f50f3bd7b5b3ba11fe4"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "48c3fa20d9d7822705122aa70185b654"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "1c4d964cb56089944a67358fc0b822aa"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "ac384e47fca129d13cc96b17a3d32764"
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
    "revision": "dc4eaa0680e300fd0c310d20d1ca8244"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "7c09436c48aa74e88c351703fdde435f"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "037ab83c5079ca478d7c263c34eea83e"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "0bdf08c452ad92ead2c778efc52da2a7"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "6593817737e091e00da2dfa9aa8aab95"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "b666ac12392ca2ee76345628ac1d30be"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "521789722f01376a4ea823b004ffcd20"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "cbaf66262d2907a7c1fc2a5e5a3cbfbb"
  },
  {
    "url": "resources/books.html",
    "revision": "8b35f7d8b2038421a961f93d1f89a5b2"
  },
  {
    "url": "resources/community.html",
    "revision": "dd6a05861b644c475c7d6563ad5f7c6a"
  },
  {
    "url": "resources/conferences.html",
    "revision": "3e3e289bcb876ae8d2cb39fe7858008d"
  },
  {
    "url": "resources/courses.html",
    "revision": "091aeb7a9ec2e55387a04b33341d04a8"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "52b75f937b9bbf71bc766bc135bb99b6"
  },
  {
    "url": "resources/examples.html",
    "revision": "2a7d3a153c4382e319490ada47b13328"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "20e2b8cf2378a6a569d340e50fdaf2f1"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "6e8fb8925e2a7c0edb0c22b5ae0d09ba"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "a95af99c1b0f451bd2238cb4e1d0c549"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "fb562e931d0f9b3e62b85e856e15ec47"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "a02d9088ed4a9418e3c3e01166d6ec1b"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "aec7ab0916ab38dd6a30537ebc1fef5d"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "8d409527b4338dc05088064c29c496f4"
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
