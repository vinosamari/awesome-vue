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
    "revision": "0c1b0a48275017f552c3a2ec94996704"
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
    "url": "assets/js/10.f2ba2fef.js",
    "revision": "0a7af9176afbe8260190b37aba88db22"
  },
  {
    "url": "assets/js/11.eb20ceb5.js",
    "revision": "30b17002f38429299064a827a3d228b0"
  },
  {
    "url": "assets/js/12.55ee5b43.js",
    "revision": "5a252b642dc26d8e3551fe8264b91ce7"
  },
  {
    "url": "assets/js/13.470a6024.js",
    "revision": "71b9eb384bb4298e02a770503b39b4fe"
  },
  {
    "url": "assets/js/14.a6269e15.js",
    "revision": "2685968514afddf43622b163fc7118a8"
  },
  {
    "url": "assets/js/15.3652aa9a.js",
    "revision": "555a469a7f36ca2d6ff403446ffb097e"
  },
  {
    "url": "assets/js/16.8f8d294d.js",
    "revision": "d57bbc64a6977281e8b52dcc7b69fc72"
  },
  {
    "url": "assets/js/17.07daefb5.js",
    "revision": "9dad1078a9e9ffd1667d7c5cee7ceff3"
  },
  {
    "url": "assets/js/18.de2de111.js",
    "revision": "c7780e3f149f9cf82a88d5250f08ad5e"
  },
  {
    "url": "assets/js/19.ec4827ca.js",
    "revision": "403d4e89d8d9bd462b27643cfa984c52"
  },
  {
    "url": "assets/js/20.acc52255.js",
    "revision": "3de97b43b39a0c6441bea3b75221eed9"
  },
  {
    "url": "assets/js/21.6649d9c6.js",
    "revision": "87a4313d4add55eb5194b63d214a8ad4"
  },
  {
    "url": "assets/js/22.d9a82ead.js",
    "revision": "c9902066ab743784b7522df70c7ad0d2"
  },
  {
    "url": "assets/js/23.fdc32263.js",
    "revision": "f8d095093e70e82f7c3cf59157fed042"
  },
  {
    "url": "assets/js/24.504c5ef5.js",
    "revision": "5e3409d7378f92b826d01e6b86b9759d"
  },
  {
    "url": "assets/js/25.7daa9238.js",
    "revision": "d4ccd1ea7b03c8976ce0172f0e2620ec"
  },
  {
    "url": "assets/js/26.9cf25ab9.js",
    "revision": "2e7439e08c2df03999f30c4c1e80fb71"
  },
  {
    "url": "assets/js/27.1ff76a11.js",
    "revision": "e31945a3db3e73d3bf8fc783dd8bcdab"
  },
  {
    "url": "assets/js/28.36d7522e.js",
    "revision": "e63019e4a38777b8c159275c0b07d50b"
  },
  {
    "url": "assets/js/29.72b44a70.js",
    "revision": "e1eda444f83450c9bfe5c34caafd7596"
  },
  {
    "url": "assets/js/3.4868b891.js",
    "revision": "4dcd9df9db1676025cbd2e4e2f0fc313"
  },
  {
    "url": "assets/js/30.22914c97.js",
    "revision": "8e9454e2af220acebff33c0b97dad395"
  },
  {
    "url": "assets/js/31.ae783fef.js",
    "revision": "d4238053411c57319b87cffe5f13d42d"
  },
  {
    "url": "assets/js/32.d2284c40.js",
    "revision": "c63a5aec908fbb9ed2f77180fc0c1f39"
  },
  {
    "url": "assets/js/33.b53d4476.js",
    "revision": "b96332a4d12a81635b5d77ab6fcbb5aa"
  },
  {
    "url": "assets/js/34.c2a7a7d0.js",
    "revision": "5e3cc26dc4610668d2ee37cec0442140"
  },
  {
    "url": "assets/js/35.2ffd4657.js",
    "revision": "6c867425e2543a62aaf35e53a8971666"
  },
  {
    "url": "assets/js/36.cb5b1fc7.js",
    "revision": "bff807b92bcdfe44e3fca24527007961"
  },
  {
    "url": "assets/js/37.a8e3b772.js",
    "revision": "455adc78d3e4070a20e413b51e2c35a8"
  },
  {
    "url": "assets/js/38.3d269ec2.js",
    "revision": "4c56d4cbddd4d4bf5b05d344dea5af0d"
  },
  {
    "url": "assets/js/39.3be44295.js",
    "revision": "f07c148002e3b92bcdcfb01ba4d47726"
  },
  {
    "url": "assets/js/4.0308219f.js",
    "revision": "7bdfad0dfc03d07ce90ab2229f76f54d"
  },
  {
    "url": "assets/js/40.c34b6542.js",
    "revision": "77dcc6c81e805abe6f2ce8e978645a85"
  },
  {
    "url": "assets/js/5.fe6119d4.js",
    "revision": "90519971ad7d0f6f7b32d46ef4c6199b"
  },
  {
    "url": "assets/js/6.536b001c.js",
    "revision": "22bf8f55de5ac36bf859dc09aeb41d8e"
  },
  {
    "url": "assets/js/7.353d46cf.js",
    "revision": "8607be1e0a24f76b78df963dfcb0381c"
  },
  {
    "url": "assets/js/8.fd0ab605.js",
    "revision": "d0925ae2d9c03cae24a5afd99aea56c0"
  },
  {
    "url": "assets/js/9.dd716df7.js",
    "revision": "375a702b33865d0f4779d1d937d7567d"
  },
  {
    "url": "assets/js/app.0355d3d7.js",
    "revision": "859cf34b041be1d3433adf6ac9c03074"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "43b74f00eb2d78b4077e867769e2a336"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "266909032bf43fc24885dff2008e0201"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "19796aef4509eca6bd5965c2878eefc6"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "23244633e8ad9540f6a3b55ac6ce1b03"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "20c1e6d9cffa1c433fade9b78086e8bb"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "29df1461259fcc8621198351bf9d23bf"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "094f9de0c904ee038606206ea08f21da"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "79c85ae7ae52ef7678d5aec7ec92194f"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "8a55f339b47749d8382f740b6b764367"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "c5117607183b8b9d72a17ae9f45405cf"
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
    "revision": "2ecf700255b46264add52a1ea3f3989b"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "3c361758febfcdb6b245bbad48ef99af"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "11d154c8bc9bd703f3868f867477e9c9"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "9ad3779f2fbfe458e52dc64a547f06e7"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "52bfefcfff092ce4e47dd6425d8e5e48"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "8b73770640ee07e1e3247fdae8f41709"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "a2f0778490cc8cd83ee5f6239f472722"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "fcaa686326f3b1e3d150619d2ff354e6"
  },
  {
    "url": "resources/books.html",
    "revision": "ac645c4b8cba38f333663c9c67eee173"
  },
  {
    "url": "resources/community.html",
    "revision": "16cd5f4c2da5db4b6bb530658d9c4241"
  },
  {
    "url": "resources/conferences.html",
    "revision": "4ced2726c299d658d0cd53fbff512de2"
  },
  {
    "url": "resources/courses.html",
    "revision": "932d6b24df390f7ef2e9ce25c8e8cce3"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "eeef56c8ccba3c9951b54df8b863def3"
  },
  {
    "url": "resources/examples.html",
    "revision": "9d29de78d7eb285e29093ee065bfa979"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "7da7202d0360f60ab3e598a5875177ee"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "49f29e04a861f4634e0218ded75f380b"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "b2e7cb758faa97c5dcf644efe058a6f5"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "cba5e58ad53a6b950d348bacea1308ac"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "20571f5a5976e21e31a10948753e6bfd"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "1905e1892b8fa497d0a25b9bfb841dcb"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "3200ed380d8ab92f0242de6199bfa281"
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
