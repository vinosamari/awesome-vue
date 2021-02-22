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
    "revision": "e4f5c7961259ff7ab5f20a485cf02d9a"
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
    "url": "assets/js/10.029f3b9b.js",
    "revision": "de162007fe4b52765c210d218ac48f34"
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
    "url": "assets/js/17.49e3b416.js",
    "revision": "cf74f1121a2c17d948fcc16144bc8074"
  },
  {
    "url": "assets/js/18.cee03f67.js",
    "revision": "ea08bad80c9d6a01b9c4298b643768bc"
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
    "url": "assets/js/25.50f1e786.js",
    "revision": "36834e6e8cd5558f61ac487f372759ef"
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
    "url": "assets/js/app.3f7355b4.js",
    "revision": "57d393ea6d9883d3af925f50eadc250c"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "47a576cb365191a74dc2131b43f8ba83"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "ac8fcddac31e2b99fa4f530b2d4a0d76"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "a915d15b2c157508cc8182fb9c9c0849"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "c52c6cefdacef6e89903e535be52e9f5"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "8070cbf94812bc7d7eb93da56067cfd7"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "548f74bfa32b70f6f838068e5572e54a"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "285d262d75b1e910fba3907a70812607"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "1c0b1ca160df6b311cbf46514db6d7fb"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "7dd11aeb8d9e3b8df43da22e112af89e"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "f9110f5716caa583de10cebb298eec0e"
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
    "revision": "b29cee8a5f6516a7214274ed297d4f14"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "05e7b422d26fa75e5c67e0f33fe21146"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "3a694f9e63e3b76f9e220a279268502d"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "383df0be84f224daed3007328b6abaca"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "96d1b3d7853bfc0c2779b956d6811ef9"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "5782924c76f20a410a2c3fc6fb7d5dcf"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "5df4c105b2d2ea218a6856342096f457"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "3061f11a8d03119f401b3d694a674aab"
  },
  {
    "url": "resources/books.html",
    "revision": "987df7dc0d59372aebd8a0b6a7268153"
  },
  {
    "url": "resources/community.html",
    "revision": "ed123459377f9f5a2f7242b88abac84e"
  },
  {
    "url": "resources/conferences.html",
    "revision": "9a7ef7810776f06e1438390d7177c466"
  },
  {
    "url": "resources/courses.html",
    "revision": "616c17d717acd443eb3b7fa4245f44cf"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "00bcb5cd9dac96b295a680e25e227bbc"
  },
  {
    "url": "resources/examples.html",
    "revision": "f1e13f5b7be783f70bf2f534cbf38a3d"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "3bf5187ce56d46e5c9f017026b55ea64"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "4c70370c2ee2577bc49c5282bac684f1"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "b316b1672aa0bc308989d931d8ee771e"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "5f79050a7e7a40370ef3b6fcb910d3bd"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "ac049f8585eea80779ceca20b823d681"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "64951bf1792d44ac7875172a7262a7c1"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "b9b06e308dba5311929d364bfcdcf11e"
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
