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
    "revision": "78cd30d56a9e86002695795aff7c285a"
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
    "url": "assets/js/12.4fadaa79.js",
    "revision": "f73cf2ac5bcd9fd913cdc8aa1637b4d2"
  },
  {
    "url": "assets/js/13.8f4a7053.js",
    "revision": "ba214c1720180b506ce975e9f6be0aac"
  },
  {
    "url": "assets/js/14.2c34dbf1.js",
    "revision": "cf85be77a57d51422286739aa6c0bd43"
  },
  {
    "url": "assets/js/15.e108eeb4.js",
    "revision": "700d7acd91cdb152202a9890ec36b12f"
  },
  {
    "url": "assets/js/16.817b8a2b.js",
    "revision": "8479501658248764657a84cd2811dcc1"
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
    "url": "assets/js/19.0938c858.js",
    "revision": "222156e796e37eddf80692b51147a8f2"
  },
  {
    "url": "assets/js/20.7f907a9d.js",
    "revision": "0572051f7efe32aaab1497770c1050c5"
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
    "url": "assets/js/23.f8e5b80c.js",
    "revision": "95fbc9481d424c18dbc8417f7ff59743"
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
    "url": "assets/js/30.7a029f9d.js",
    "revision": "d4ef6451fb3882b57436585b93d37244"
  },
  {
    "url": "assets/js/31.d6b03cba.js",
    "revision": "42d4cf8213d5145a9e6e74caecde4611"
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
    "url": "assets/js/35.ded9b883.js",
    "revision": "3a087a67c6d137187ceaa5efc3e30f54"
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
    "url": "assets/js/8.235a4275.js",
    "revision": "75dcfdf6f15f57378aac1feb460306c1"
  },
  {
    "url": "assets/js/9.1c15ace5.js",
    "revision": "b53229077ee029d83fe16cde46fe7c89"
  },
  {
    "url": "assets/js/app.f2e2ab1b.js",
    "revision": "2005a0723a7103eb721d516172b2e962"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "619b6e43550707f5ad8b9b8441716d01"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "c68739cff62ac74f86c1417b902c3363"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "422b9ca8f0a908758846c603bdaa57aa"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "1e1ef23022e1fcbbd2fe3de0e2e94492"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "72c4238184d560f22e1a2229f98dbaff"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "235f4c67671fd6d5483718a1586a7a26"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "48121368dd1bed2d92a245ecce003e01"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "5a8f4052d92965a34b6dd3de03324eb4"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "02e55ebff6f6bd359310da6a534cc7a5"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "794cca642a8a72273133d8b31cbe8285"
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
    "revision": "6d95b682ada2ef7de248e16fdeb6248d"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "0b5319bfb728ce271c5641741c88e234"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "60a417c579c08b78fce40ebf2db49418"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "a7c45d7f7deb1b1e769de92174686897"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "092c39ab1d94146d5a62c17d4835b118"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "a17eac474a71be277755debb2ee2daea"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "4da52114e3fa953dac7acbb72e53c8f1"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "2c75875a56a01471ec6f9c40ba42d546"
  },
  {
    "url": "resources/books.html",
    "revision": "7b1bcd4c9927baf6ef0f39dc40ea7e01"
  },
  {
    "url": "resources/community.html",
    "revision": "761024f32b8fa073d31f330a54b1c18b"
  },
  {
    "url": "resources/conferences.html",
    "revision": "728a7d224980ddc6c2c1499df61f1dc7"
  },
  {
    "url": "resources/courses.html",
    "revision": "b499df2a898e54e5af7dfe2447b46365"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "8d926857c03d49180b390119e0228d50"
  },
  {
    "url": "resources/examples.html",
    "revision": "e00cf21dcc47e71a47f7172272ee742f"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "a336a1118e41f9f8d32e342c99c2b85a"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "3e2de27a577f3598ce099f6d35b7a2cb"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "f9f228eab7e54d55cd5608b8f9b8efea"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "75fab6eb80b9376187ce559ea6f532a0"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "d9b5f1205a0d5fa716153ce370d033bb"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "79a5f35721268c1e6df3e1bb28c50047"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "f8b38eded6b6f2e84bfd2571a6519fb0"
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
