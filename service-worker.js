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
    "revision": "47a1f66e5c36977374b12cc0ee618c2a"
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
    "url": "assets/js/13.482b4b19.js",
    "revision": "5d54dbd784b307c700f209eb25feedf1"
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
    "url": "assets/js/app.9d5599b1.js",
    "revision": "cc1628d5a46bac07fb40a5455ac7ae8d"
  },
  {
    "url": "assets/js/vendors~docsearch.960e2738.js",
    "revision": "22c66d04b3add4e4e7985a7b41769d5f"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "46b2e5da07450496f3f6b3f85568a91b"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "16c6dde09300dc93478d6721a990c481"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "faa75cd10cc0b26fcf359ee6a78f752c"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "0f7afcb2a8c38be2da0cea36b9abdda3"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "0d77b67bd422ead27254cfaa3556cc98"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "9dd5074159f85d1915789b9320be31e8"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "b0f782e72ad42440e3ba2e914b33c7b9"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "362d132ae2f72c09ac8b6e15dde66c7d"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "3016fb365d6203ea2e6d4b80dca582df"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "55f7e20de954b5f7bfec59a28017121a"
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
    "revision": "6b36aba7dece47120519c6c5550f07fb"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "b111e6d96b86797599f38332fdbbba6e"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "4ba8881e3ed2aabc77dd50b1d638a6f7"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "fa820d7f8a35424a1fc3e837948d3e10"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "8f89c14e3013a6af1ac5376bac14276c"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "e8686626e8c7de9b41f4caf9f92b6de4"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "07170b319d823337214c9062ee2e86c5"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "078e6790005a2d8f1f87f8feeeb8a2f8"
  },
  {
    "url": "resources/books.html",
    "revision": "f0f2783c69cd25c3acf4529787e223e5"
  },
  {
    "url": "resources/community.html",
    "revision": "3c75a68fe83c5abd9a4e13996713eb8e"
  },
  {
    "url": "resources/conferences.html",
    "revision": "7ad5b271542f3799306e47b63005630f"
  },
  {
    "url": "resources/examples.html",
    "revision": "068bc492a0546105ebd50b1b20ff49fd"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "e898198f221264e4dafed66316c8dc9c"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "4f65b40d54eff8a9c9e11da8d2bd94a2"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "59a11abb695dc4c9d0390e12550ef5b1"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "8bee70f875c133e208d4356c92c659d6"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "b36850acdf2326b83037fd2952da651e"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "98e630b8f6e2842644554877e46e6cc2"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "01f28f06e4c9325e84d71bbb89f296ed"
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
