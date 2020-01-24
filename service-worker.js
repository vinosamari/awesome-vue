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
    "revision": "a6e1691c015091ef190cd1c997ac8630"
  },
  {
    "url": "assets/css/0.styles.df7d355e.css",
    "revision": "964417c6713863b0f454c1557c183483"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e92b6f26.js",
    "revision": "12f69dec52c9fd07c19d9d6f51a6ed27"
  },
  {
    "url": "assets/js/11.6903938d.js",
    "revision": "06cd7506dc596bb11a48c9388d33e6cd"
  },
  {
    "url": "assets/js/12.c8453c28.js",
    "revision": "e2d0185d4161ae82d53b479dbe4e3fda"
  },
  {
    "url": "assets/js/13.4f8f1798.js",
    "revision": "f94f03a772b1fd010d4e5deed3551b03"
  },
  {
    "url": "assets/js/14.a01028b0.js",
    "revision": "983aae3e6df80f318bef8cecf984818b"
  },
  {
    "url": "assets/js/15.c625276f.js",
    "revision": "3ebc4ba97db4e337bff220c3bc4f4724"
  },
  {
    "url": "assets/js/16.f2ca81da.js",
    "revision": "417d41aeb30d1ab07b99bd9433af0dfa"
  },
  {
    "url": "assets/js/17.1e835028.js",
    "revision": "b9f54301363d0189662d5d06988ffd59"
  },
  {
    "url": "assets/js/18.c5a377ac.js",
    "revision": "48099f27e3ae07492b398ec7eb9c96db"
  },
  {
    "url": "assets/js/19.850bee9b.js",
    "revision": "c313976ba357f1b5024acf3f941e839d"
  },
  {
    "url": "assets/js/20.ac8ad572.js",
    "revision": "bcf080b8a2c284ff8e15adca40e69026"
  },
  {
    "url": "assets/js/21.26d579ff.js",
    "revision": "c8c450f1afd4b64e948075e0368e1cb8"
  },
  {
    "url": "assets/js/22.6249b93a.js",
    "revision": "42dcd345dbad914614c520a57ee2c99d"
  },
  {
    "url": "assets/js/23.562ba06b.js",
    "revision": "4b4bce8a28141b2d1d58a50262230e10"
  },
  {
    "url": "assets/js/24.d6c410cc.js",
    "revision": "82ec7e591f6f7a68820e77757758616a"
  },
  {
    "url": "assets/js/25.7b84eabd.js",
    "revision": "bddb166e593657e06e56a842b41bf800"
  },
  {
    "url": "assets/js/26.ffc1274d.js",
    "revision": "60f5b0ba29dd26b76d7ca56a7f3a489e"
  },
  {
    "url": "assets/js/27.fdd07940.js",
    "revision": "1ad6d3d7ab5c9da269ce3b801a645f18"
  },
  {
    "url": "assets/js/28.32870d20.js",
    "revision": "50e23befd9b3dd096a7d9d63787a50a2"
  },
  {
    "url": "assets/js/29.75deb485.js",
    "revision": "be9b88c8342b7710e30211dea25cb570"
  },
  {
    "url": "assets/js/3.3c4f81fa.js",
    "revision": "81ecbbdbf6e3551edcf4651090a34a41"
  },
  {
    "url": "assets/js/30.fbbc69ce.js",
    "revision": "5974799094d92e34affebe6e8229f1c7"
  },
  {
    "url": "assets/js/31.588ed58d.js",
    "revision": "3e508827a510f8bd19a5b179f4e7de66"
  },
  {
    "url": "assets/js/32.004f389c.js",
    "revision": "0a6dff6fcb975710a68528d3f6355081"
  },
  {
    "url": "assets/js/33.9fd13c72.js",
    "revision": "4743f8629355b91762650d858759cd8b"
  },
  {
    "url": "assets/js/34.a10795c6.js",
    "revision": "2948386e6dcc3bfd8c67e34ddf7feb24"
  },
  {
    "url": "assets/js/35.f3798df1.js",
    "revision": "8e71500176d8acf3ac44bd7b9543421d"
  },
  {
    "url": "assets/js/36.c169ed7b.js",
    "revision": "5ad5fe3ecfcb2372b6f5efbf74da813b"
  },
  {
    "url": "assets/js/4.3ef14f0a.js",
    "revision": "d50775f1a02e337ab61e5c110f259c6e"
  },
  {
    "url": "assets/js/5.4a0b4d7c.js",
    "revision": "77aed24fb12d9d205b29810c76fd0ea4"
  },
  {
    "url": "assets/js/6.f45d1a76.js",
    "revision": "ef52fa4c37cf6721547aaf764032b28d"
  },
  {
    "url": "assets/js/7.453d86f7.js",
    "revision": "eb7c745fbc24676cb86d036adabcd3f7"
  },
  {
    "url": "assets/js/8.22b7fbfa.js",
    "revision": "82781679e5b82a41cd082f478a175ee9"
  },
  {
    "url": "assets/js/9.3a4a54cb.js",
    "revision": "b0140675c5fb90ba4414ab4a13485ef5"
  },
  {
    "url": "assets/js/app.4a07f204.js",
    "revision": "54a0983f90df008be0e5209f88b68de0"
  },
  {
    "url": "assets/js/vendors~docsearch.960e2738.js",
    "revision": "22c66d04b3add4e4e7985a7b41769d5f"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "812789d8d70a6faa5a5e630461df2fc5"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "9be2beaa658576bfa525e51e52abad6f"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "fe30780524d54e141e87aacd52169eb5"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "0af5d5d573f0170d71b9de7748bb08ce"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "44ae6beaeaa43c5328cc45f1f492a18b"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "a0e51c41e0cf9d01026f0b7c0e43f3cb"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "ae019db50c765bae9155a0447e0ae9b2"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "2a84a8e8eaf0d4b3fc8d853a8323bae3"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "d4d15ece3b788bfee5540d0e3c74774f"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "6887ca44a0ed8bfd775a62ad8b564e43"
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
    "revision": "98fbfc22da9f4253f89df3b0a8852e31"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "8edd12e9b29c7786d1c1962835b71501"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "cd5e04caf689df1e5697542071d5c733"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "3f124c514a891af04bc692ae60844c32"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "73fd393f3171092f13a7ef077063e48f"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "bd524302acc115030b678abfa4b1bce0"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "5c9ca23ea87bd6c3106409c231dba9ef"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "d464ed99f0d3b2d756428f6ffe3b0263"
  },
  {
    "url": "resources/books.html",
    "revision": "1bc5505c0a72454ec97751c5b8f4218e"
  },
  {
    "url": "resources/community.html",
    "revision": "6f2c1960fefaa7afa248f309173638c8"
  },
  {
    "url": "resources/conferences.html",
    "revision": "8144901d82b3dbd66757ed57a8a649d5"
  },
  {
    "url": "resources/examples.html",
    "revision": "32b90e77d0b63d381983e2ad39e66ce9"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "b69d43d63f40e73d0d3914e083c3e0e0"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "7c0e7777c2190c4404673649c5148aa1"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "a3f409cd0581e6c36043fb8fdf9f7452"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b043afa123a16c15dcc1637c351f8a85"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "968f4c9374ab780bfd097d983d87fa7d"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "f570ef8bdd131782cb7562ca18e802ac"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "7996ca19a8da0dd6b0c1ae2aca67586b"
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
