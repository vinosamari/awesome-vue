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
    "revision": "44a17c6794480d266f4dc809b9183ac1"
  },
  {
    "url": "assets/css/0.styles.2aa3027d.css",
    "revision": "370c44f8042e55929aa76df6d486a38e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3658515e.js",
    "revision": "98ebb232b5763a17e1a105462c586a87"
  },
  {
    "url": "assets/js/11.ba96a8f1.js",
    "revision": "aeae8d256edb6c1ef77fc865da85463f"
  },
  {
    "url": "assets/js/12.34992ceb.js",
    "revision": "9ef8c22a770602a709756b03d6bc62f6"
  },
  {
    "url": "assets/js/13.78127f3f.js",
    "revision": "5bd27bf383a17327f6cafd66efe32bd7"
  },
  {
    "url": "assets/js/14.af55f0f4.js",
    "revision": "676b5be05c26853d9e69ecd30415287a"
  },
  {
    "url": "assets/js/15.120d3c80.js",
    "revision": "858294e9adb1221681394be04d8c4d40"
  },
  {
    "url": "assets/js/16.5604ad7d.js",
    "revision": "b876f387acac0e9b6d8955996eae9c4b"
  },
  {
    "url": "assets/js/17.1235d9a3.js",
    "revision": "e3e8ac8dd757b1e91ca5901fed2957e0"
  },
  {
    "url": "assets/js/18.850c42d5.js",
    "revision": "f36f3b88782df9d2344878789f84f76f"
  },
  {
    "url": "assets/js/19.20c5967e.js",
    "revision": "1d267833d694de6cb2db8fd1149d7f68"
  },
  {
    "url": "assets/js/20.46ba5f6a.js",
    "revision": "4dcdad25ab69033905623e4b34903419"
  },
  {
    "url": "assets/js/21.ee295a0e.js",
    "revision": "bbf53c7c2cd39998d21e108fa8e0e11d"
  },
  {
    "url": "assets/js/22.f784833c.js",
    "revision": "8ed1189c70e48b1620d6f9577108e54d"
  },
  {
    "url": "assets/js/23.ab267dfb.js",
    "revision": "7631c3fac1bea1ae769d01b704d2a216"
  },
  {
    "url": "assets/js/24.e0869f58.js",
    "revision": "1f53d00a56ccfd47896dfff15ed080ea"
  },
  {
    "url": "assets/js/25.584449b1.js",
    "revision": "0ada21b7dadb0fca3ca40a5ddab2f55e"
  },
  {
    "url": "assets/js/26.364af343.js",
    "revision": "b4a9a539f217475f3fecda0c5df10d83"
  },
  {
    "url": "assets/js/27.d0fc6402.js",
    "revision": "0df42188a58119425b812efc10dc2716"
  },
  {
    "url": "assets/js/28.07c1a310.js",
    "revision": "824eebaaa56f5ad0d581603b98deda6b"
  },
  {
    "url": "assets/js/29.dbfd3640.js",
    "revision": "8ae36adac97d3cf1bf4441c4abd37958"
  },
  {
    "url": "assets/js/3.8aa232f8.js",
    "revision": "f0ae3476b63d06509737e47f70be51fd"
  },
  {
    "url": "assets/js/30.6cd27aaa.js",
    "revision": "7982b4cc1202a6ea74d96b50f6bf3af3"
  },
  {
    "url": "assets/js/31.d9496104.js",
    "revision": "8eb0532c2b3b46acaede5dfa94ff5157"
  },
  {
    "url": "assets/js/32.1b282938.js",
    "revision": "c500b68666f867841b04e374a9007581"
  },
  {
    "url": "assets/js/33.0c509eac.js",
    "revision": "b84f75df16e498c23c433774c779a20c"
  },
  {
    "url": "assets/js/34.9bb4dbd2.js",
    "revision": "a12322e81333dcd911f6943d6c572e4b"
  },
  {
    "url": "assets/js/35.bc25062f.js",
    "revision": "2cbf3cfafefc29b8d752ea33d81dc25e"
  },
  {
    "url": "assets/js/36.269b8b22.js",
    "revision": "7808da3cac8a87c6bef801400c5bcad3"
  },
  {
    "url": "assets/js/37.759cb88c.js",
    "revision": "adb719577316e71f6c76d4a698585963"
  },
  {
    "url": "assets/js/38.fedfc4e9.js",
    "revision": "8ef6b6dc845aa4ea89248268b8d90fe1"
  },
  {
    "url": "assets/js/4.33a8c835.js",
    "revision": "7a06f2c82abedb3ae539f031dbcd37b4"
  },
  {
    "url": "assets/js/5.f96485b2.js",
    "revision": "53f6787ef3e87b01413d5363c80fefb3"
  },
  {
    "url": "assets/js/6.273712c1.js",
    "revision": "e546742eca0669946aa4216528f667cf"
  },
  {
    "url": "assets/js/7.183efc3c.js",
    "revision": "e41fb9041606040795932459d9292a34"
  },
  {
    "url": "assets/js/8.cda03df7.js",
    "revision": "82ae970773f81e7e8194562ac3078328"
  },
  {
    "url": "assets/js/9.70647bdb.js",
    "revision": "b3334324963ed127733a211ad29d91bb"
  },
  {
    "url": "assets/js/app.c4776c07.js",
    "revision": "36512a6582859891f34901de979febb2"
  },
  {
    "url": "assets/js/vendors~docsearch.9bd2c564.js",
    "revision": "9b9f0ed813f1056b468404d8e2930623"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "17a2a90def4eb5a639e9caaa60f0e35e"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "4e58530c727b13661f35b27251b6d6d6"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "73ed2c7c836fab51a71ac5ec8698ec05"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "9bc0a1a458c635655f7ff722e7f79635"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "8e93b629e9a5867ee2a70f3274b91ae7"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "f75e9c37a2cb38c96f7875de62cd0958"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "37895e08cb7ea453dcf448e08ee4b427"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "f64e74bcf2d2a8fdb4d7c52dbbbda3d4"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "05800edcaaf8a82c77c6c67c42dcef79"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "04f3f3f4f60de0f45132133f1aaaec9a"
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
    "revision": "e913e1c75a954f82e3c7cee99bc99b9d"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "d66a12936350aa186cf504a453a05f26"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "3a81c96603c6ba2b39e852af44533553"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "46b55ba470b476f3349f7d876ebcd3d8"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "c30fb314d0e76122c54411a4ceccd2fd"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "0d86ffc0e01e0e43ff7478b5b98bd80a"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "8769330a0a87dd74837e9d67b8297c6c"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "2581fa9ea3bcf7faa12a3aadba82a0eb"
  },
  {
    "url": "resources/books.html",
    "revision": "72b14b96d2da8e063ecaf65afe276a16"
  },
  {
    "url": "resources/community.html",
    "revision": "3452da39eac04debb7082b51f25d7623"
  },
  {
    "url": "resources/conferences.html",
    "revision": "81530d5d3793f3a4d4f7c5e6a0e1311c"
  },
  {
    "url": "resources/courses.html",
    "revision": "cab0310745c440a7ef198fbd45432c65"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "4979a3e57ce2f0a0a2911cfe3148e0fe"
  },
  {
    "url": "resources/examples.html",
    "revision": "f6fdc34e68f13a222f0bf40efb1098ee"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "152413a104231ab260c14e8ae50d593a"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "4811efda1cbb0ef15955ebeab26474ba"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "f0c7d641778cf098ceb76a00c081d5d6"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "e9f85022011d05e120cded499d067cbd"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "d2977a716e3cf3e960a7c05ccb25876c"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "31ad53f6e3b8c9e1f8197a290b291592"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "f6b5d4a160bf55b5c60fe64a952655b0"
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
