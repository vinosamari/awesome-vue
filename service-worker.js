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
    "revision": "405f2092434c39ce39f140c04857116e"
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
    "url": "assets/js/13.b2af1c41.js",
    "revision": "0c42148ba6092e11b834048468c83966"
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
    "url": "assets/js/19.0a39151a.js",
    "revision": "02c767234f5c497978d97f2fd2e8bdb4"
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
    "url": "assets/js/7.f221329a.js",
    "revision": "2f338c8a3347232715c2316ec66c44c9"
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
    "url": "assets/js/app.d757cc00.js",
    "revision": "7dd69db1b1998357af3812d7b7aec4c1"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "0fb7ca82b233f1c402eba6ef9621ed9f"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "36a92a331c2cdb2f786fec2e42bc61d1"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "11aea27630adbcd0bfd2e87ab2275851"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "98ca0d8e7049dc33d3ae48af1afe08f6"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "2f50408a3dafffc379764a51f2376c30"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "370202837778aa31c8278014575340f4"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "447a1ad94de048df465557957a194579"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "9f2f950eaf17a3c0b5dd606bb7eea97f"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "5f81b714e335e09405ca02340c8f0ba7"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "c3f61e0eeffa87283575e34397bd0a5e"
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
    "revision": "a7c7f8cb4fdf88bb89808273119545ac"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "1505a8c1938eaa4d73aaede9886b754d"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "ae5dbb74752474b7e0e0b47568804fd4"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "f30fb2edf25680d4c1ef2ada5c9acdcc"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "09c0ebb8871f9f07e2877d2cfbf36a80"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "873e7373500f400d050ca8c270d535a6"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "83360f925a14c4cff3df0a1a4617aaf4"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "f59f54e802cdd23d5dc23ae2a9b2a8b6"
  },
  {
    "url": "resources/books.html",
    "revision": "a9735586d10ede803167ca947ee46d17"
  },
  {
    "url": "resources/community.html",
    "revision": "c04ee7bddc7d8e998f556cf338682e32"
  },
  {
    "url": "resources/conferences.html",
    "revision": "1ee689f7932f0dfc3fbbf8c8a4e19680"
  },
  {
    "url": "resources/courses.html",
    "revision": "338d887f525ca13cca25602867a6853a"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "99e4e1f1e71b43b2daa828f21016097c"
  },
  {
    "url": "resources/examples.html",
    "revision": "ec4ba555210a98485a2c297c750d3e0f"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "daa466ad5132da1860b6e393f4fd8258"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "3e137429b0c239f7f89c62c952c663bb"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "5b5ca51b41912e73f2bda82ba9a9f592"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "88652e62c559109031afb53647190497"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "7f497b523ac0c8d519305a921eef9f8b"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "197b0e642a593ea968a3ad6d80b4ea2f"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "1c321a5839d3d6d71dcbaa6dd24895fa"
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
