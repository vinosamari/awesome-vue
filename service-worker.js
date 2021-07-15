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
    "revision": "f561e4f37da500fc1fdc3083f9ac03f5"
  },
  {
    "url": "assets/css/0.styles.c667ae91.css",
    "revision": "397c5036c5d791deb513cfb431edba00"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8557da8d.js",
    "revision": "5322dbb87f5edd1dd2fd9aa6eb6fb728"
  },
  {
    "url": "assets/js/11.17640617.js",
    "revision": "b1f153157dd096652732e4b1eef6ec49"
  },
  {
    "url": "assets/js/12.139f1dc4.js",
    "revision": "587b7729cd93cc881e4637dc41d9d8a9"
  },
  {
    "url": "assets/js/13.d46cb5a9.js",
    "revision": "00e20c82b0bcf86d38395ae13bee75cb"
  },
  {
    "url": "assets/js/14.3a6fb49f.js",
    "revision": "135c5ef8e59fc000f2f3c315a8cf9b4f"
  },
  {
    "url": "assets/js/15.226ff7b2.js",
    "revision": "79ca01e667f485025510b2c069ebc210"
  },
  {
    "url": "assets/js/16.f69dfc2b.js",
    "revision": "eca180f82bd1e5f69b5c20f268e4f6b0"
  },
  {
    "url": "assets/js/17.45476a5f.js",
    "revision": "c0aa95d68323824eb15f7a0dfcc0838e"
  },
  {
    "url": "assets/js/18.4e94b887.js",
    "revision": "316267e9ab4da0efe7f2a8631e874f2f"
  },
  {
    "url": "assets/js/19.15cbf2bb.js",
    "revision": "6591a0d1753056b2ece5004c1584ab75"
  },
  {
    "url": "assets/js/20.087bc700.js",
    "revision": "0acd3ef77e99292cf3ac3197c3e5c1f3"
  },
  {
    "url": "assets/js/21.81a7e256.js",
    "revision": "65cb56d169292c27ce2ee1bf43fcd3f8"
  },
  {
    "url": "assets/js/22.c431f83d.js",
    "revision": "6e5c1270816eb16823ff56440332a506"
  },
  {
    "url": "assets/js/23.ec5295c3.js",
    "revision": "f8151b95523c9cbaf84957b262f575c5"
  },
  {
    "url": "assets/js/24.a427e5ed.js",
    "revision": "4e2e9683fcb7a86f556fa88025e1a7d6"
  },
  {
    "url": "assets/js/25.1f424e88.js",
    "revision": "bdd1c5ede11998198b9cb6fd54b954b6"
  },
  {
    "url": "assets/js/26.d4b067af.js",
    "revision": "ad672ce7504faafebb070d1d7cecca8c"
  },
  {
    "url": "assets/js/27.c8aa190f.js",
    "revision": "3801cbaaae2b1d561fc08c2074bf10fe"
  },
  {
    "url": "assets/js/28.d48f87f5.js",
    "revision": "161c712d1871ada48f292a4406e09a2d"
  },
  {
    "url": "assets/js/29.826833d4.js",
    "revision": "6725e232f7c303536467e20f74b7662e"
  },
  {
    "url": "assets/js/3.fc80c13a.js",
    "revision": "f654c8d72530eee237a1c86d7beffc6b"
  },
  {
    "url": "assets/js/30.5df5b2cc.js",
    "revision": "6f66401fc1b4e40e1392f77f97746fb6"
  },
  {
    "url": "assets/js/31.24097aea.js",
    "revision": "c332a77492ebc8971891732ae460a404"
  },
  {
    "url": "assets/js/32.975fe650.js",
    "revision": "c4f4b59dc207c19a638e8ba3b63a123c"
  },
  {
    "url": "assets/js/33.5e17d0f2.js",
    "revision": "87689b999eb7fcdfc35844ff1f0c7fd0"
  },
  {
    "url": "assets/js/34.c81409da.js",
    "revision": "66988bfecfab21e8346a3817064da9aa"
  },
  {
    "url": "assets/js/35.eb69e658.js",
    "revision": "0627908e669b95b74fdaed55701e0ac8"
  },
  {
    "url": "assets/js/36.bde460b1.js",
    "revision": "2e042626ad1856aa12e82958cb823199"
  },
  {
    "url": "assets/js/37.08f1899c.js",
    "revision": "21b7d272cf4a77cc6cdb32a1ae650492"
  },
  {
    "url": "assets/js/38.cbaf7b8f.js",
    "revision": "989bc0f6c27cb0157d5e92c143724ffd"
  },
  {
    "url": "assets/js/39.00ec5b90.js",
    "revision": "5625f7356576f467cf65e54b800bc12a"
  },
  {
    "url": "assets/js/4.5eacfc7a.js",
    "revision": "412eebb9a5434cdb211d5f67b419140d"
  },
  {
    "url": "assets/js/40.c34b6542.js",
    "revision": "77dcc6c81e805abe6f2ce8e978645a85"
  },
  {
    "url": "assets/js/5.e7dc9ee5.js",
    "revision": "d0bcb52c4170c4ecce113a0596454e2f"
  },
  {
    "url": "assets/js/6.afec999f.js",
    "revision": "e36bedf9c8f81bf58ccaa53a82336f03"
  },
  {
    "url": "assets/js/7.dfb416c4.js",
    "revision": "d9339842774a34f925282c21d3ca93e0"
  },
  {
    "url": "assets/js/8.fcfc7498.js",
    "revision": "16b9367efafb2f592a8fd6a1c6ed0971"
  },
  {
    "url": "assets/js/9.98d85d8f.js",
    "revision": "48fe631ec5b1683120a98775f849c23c"
  },
  {
    "url": "assets/js/app.30c2bef1.js",
    "revision": "55d3d27adf2c705e1f10be931052c4e8"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "f14d0f1e111490208a5a56b033e0ea9e"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "96a33aa18f8efef795f932363d6dc5e9"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "405c7d142deedf09a7bc4af461b2ef1d"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "93069dcf968b242deadf61649e5437cc"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "994f84efcc576c3a481c6643c67b7890"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "08dc969259852792f5bbc1d2e3180f40"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "b3993b97e8106e45557558dbad3bf328"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "63acf86bae9692d5053dfe21bfbd8cd1"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "d6f06cc0145a9218919de0b0c0662bdd"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "46ae5ca0079e409bb86739becc98d632"
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
    "revision": "732f4dfff06f6f9196aad55ec26d58e6"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "33b07350f166140c5636275e275cc8a1"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "5f5d56e6049199d665e4d65a6944182c"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "e7810be9cec8293505e481710565d198"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "718468b975af87e1e162a4e6f3d5953a"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "b371c6db28e8e87e434e516f591c0d6b"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "ae31943f4325b3914ea53330bf903340"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "7f96dd3e69953b7910a2488312439ec2"
  },
  {
    "url": "resources/books.html",
    "revision": "e9d6da6f71e6dd25c815dd285e143032"
  },
  {
    "url": "resources/community.html",
    "revision": "523ead27b6d837f31684d119210b7d88"
  },
  {
    "url": "resources/conferences.html",
    "revision": "93c4bd97ff5aad65590799109846d902"
  },
  {
    "url": "resources/courses.html",
    "revision": "f5f6b31fa6935fa0515b421e51a0b079"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "1cf2e4fed47877a580d87bd411a9a2b8"
  },
  {
    "url": "resources/examples.html",
    "revision": "900f3506598dafadc0d69b3e3b68aea3"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "dcef4befbd52f23ba8aab0218e2c252d"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "7883c314d43abc16726923605d454f62"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "c82d5b2d0509c744aa54ab32b691f6fb"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "e0cdb398795229c40cf85cb276c234b0"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "f7b2def1517affceb1c1044d6f55c264"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "381d47276e6c732ce37d486e8367ded8"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "557959029bc9e0bfecbb475070faf8d4"
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
