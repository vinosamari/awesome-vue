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
    "revision": "8e9160c4b4afc7e7850b77bd6526bd2e"
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
    "url": "assets/js/15.3e84bead.js",
    "revision": "6790e0443b2fcb8b91870105bfda7462"
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
    "url": "assets/js/app.14d1dfb8.js",
    "revision": "5dcfff6ca2c89e478d3d9addea715f22"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "90ecb9fb9246f61e92832d35c738f577"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "b0f118c8458849d93a900cf0ef9ebf76"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "4189ee15a32e8cb17f2052f3739e9cc6"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "f7e5653b2daf3e357fc66ca20e1b1631"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "f2bce98b5fab343e47e057ae0e0cad6e"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "9af27cc11572f8632c653f046a129ce9"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "593b0d6d4aa2c952926b12909fd99471"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "52fbf3eee6716569707c9e20389b9502"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "7262fbb248e77aa6fdb1c9973f0825e8"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "77d0d770e81178c97837d1a889a74cd8"
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
    "revision": "dad55e056d5ff608ed4297a0dfe51db7"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "d1dadc5f1224142cbac7dd207b44a2d7"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "8c85263731d1a586cf3e6c36ff429495"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "199edc23dda8f994878a53496b62a973"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "30fac75d560a563eda56ce0eb96ea8d3"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "f6d1db1fff353a6fa0805dbde3433398"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "40e528d410b3b5cce8b5a96bd2f42c2d"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "31b1900004fe4ddb2fd8ef5c5f26efd6"
  },
  {
    "url": "resources/books.html",
    "revision": "ad026308dcec573503857a905dd48709"
  },
  {
    "url": "resources/community.html",
    "revision": "853571f58c53bcdf07adc13001e4877c"
  },
  {
    "url": "resources/conferences.html",
    "revision": "6cedb33cad6caaaf401cb85bf726c481"
  },
  {
    "url": "resources/courses.html",
    "revision": "b1893f99e7a7ed4fc5af0ff13a04a232"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "4a7dbe034924ca3c29edef6cff104282"
  },
  {
    "url": "resources/examples.html",
    "revision": "dacdc4596fd8d68e7346ccb3df6581b2"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "ca9aa6467d06ce63c52e857ea6b347f6"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "a6263b90646d4dcd89037c14bae6a4d9"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "6981f25d147404b4f75a8218c0c2d8a7"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "731f158f016ee3a1862f0b081887e0c5"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "e15cba9b2315d1f9ee839bc3be410190"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "1a04fe09178589b4897785b8d203001c"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "3275455ed7b458e40b9564b279f7dd7c"
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
