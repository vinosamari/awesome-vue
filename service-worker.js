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
    "revision": "00db1b387552e14d9379960dcfb4d250"
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
    "url": "assets/js/13.2ba8b586.js",
    "revision": "48d8bb7cba4d529aa0037221319c2e08"
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
    "url": "assets/js/16.a257663c.js",
    "revision": "9e34bd0177d1cbed876e5189ea7b6259"
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
    "url": "assets/js/app.c6d4d058.js",
    "revision": "1edf6eeeec0c42508e4a3b30b96c105b"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "93d53c493f811be2f7b66b22cce3aded"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "495124ae93ddd15638f8669cf4d8b950"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "0123e4ad32dfbadf50edad8f0a03bb81"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "bc73f2ef3667c0f30ab79ca97d6407cc"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "130496123a7ff56a3fd77ed147cefc83"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "3e4c5f993deb25c3a096ade5b05422c9"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "18a1b5437f73befba116835e517ec3bb"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "6ac67803ba65291712d031bc642793e1"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "58511d3039588c998a42889a64ac0b75"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "7f518e9bc21515fcfe9941217ea90f60"
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
    "revision": "31cf9a4ef3c27da29a6f2c35720b9f26"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "7cc0ee69a9f347f4bce60505f3c7f337"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "147081d6bcf7b0cc48d3a1ff0b74d2ee"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "e4030e8b9d98f20ad7c03a48b0231e4b"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "508e7018db05580c767323422d9c6e54"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "76f8ccac34a93add97662de193d3d230"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "b45b0614a7c921fc1479d53cc5e48334"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "bc15ef452341b0f849b1d0ae3cd5b28e"
  },
  {
    "url": "resources/books.html",
    "revision": "69ef9fed377f3443459faeab84bdf152"
  },
  {
    "url": "resources/community.html",
    "revision": "d1e00af999a998d7674e9f91ff308043"
  },
  {
    "url": "resources/conferences.html",
    "revision": "6cfe56dec3f4ab49575b780246dbdd61"
  },
  {
    "url": "resources/courses.html",
    "revision": "1deb29ac5ca2b2e1e816b1ae2bef97fb"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "6050bacc4b12740fbed03d944db1fdc2"
  },
  {
    "url": "resources/examples.html",
    "revision": "ba9603cb40d9a66debfae4598fcab71a"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "924d856d37e699dbb754ad12f839c9bd"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "b29da1912639983f9ed62d013a826333"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "c0ebf6ed214c96ae1790f529662208ae"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "05c94061e6f20cb4fc43340c73aea927"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "b14fccc9f0fe570bacf938fbae763cb6"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "804b41f3972fd75cf070afe4d5d3a2da"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "2a37c9a5b11b0a0cc100501159ee047b"
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
