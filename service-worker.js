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
    "revision": "4aad87a0a6b586f1ff32ff5040bedc92"
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
    "url": "assets/js/10.aed84b38.js",
    "revision": "6cec4b5bd7009685eccea69c98741e8a"
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
    "url": "assets/js/15.8bf5a5ac.js",
    "revision": "ff0b2295f4c1c24f6550ca4023b3718e"
  },
  {
    "url": "assets/js/16.c8c49b59.js",
    "revision": "57d250f1f73242d8a990537831a629b3"
  },
  {
    "url": "assets/js/17.48b501c9.js",
    "revision": "fb5139b201de1b7e387a954ff85b93a9"
  },
  {
    "url": "assets/js/18.ba9a2671.js",
    "revision": "9eefbceb15c4191bbb88f9c0b05dd127"
  },
  {
    "url": "assets/js/19.1c581542.js",
    "revision": "cceca1ffd4e5715a309dd638b5e68137"
  },
  {
    "url": "assets/js/20.5f00bcd1.js",
    "revision": "3f2e6d71217e2ff835215e8f819a23ec"
  },
  {
    "url": "assets/js/21.5504b330.js",
    "revision": "b1ff235c15cd140465e55c967dfc5ab7"
  },
  {
    "url": "assets/js/22.fe6574a5.js",
    "revision": "9ccd0817742ff5a3f2f7be2b2f3f4196"
  },
  {
    "url": "assets/js/23.b5d0ca69.js",
    "revision": "d61c06154642178c2fc3ae4e02dbfd7f"
  },
  {
    "url": "assets/js/24.71c9eee6.js",
    "revision": "d55cb1a42ad6b08b170a9a468001852d"
  },
  {
    "url": "assets/js/25.f627eaba.js",
    "revision": "782a94bfedcd2357a61bdfcd8430feec"
  },
  {
    "url": "assets/js/26.76e7f23b.js",
    "revision": "72f6c084fdc18f493458b5f43155647a"
  },
  {
    "url": "assets/js/27.670bcf19.js",
    "revision": "fd90167492ead91dd9679c2b1bd6dad4"
  },
  {
    "url": "assets/js/28.1897b791.js",
    "revision": "3ac167a5176421b97d0551d2b74e0c17"
  },
  {
    "url": "assets/js/29.bc471523.js",
    "revision": "5ff8d6cda9ad26db065c1424fbbe5221"
  },
  {
    "url": "assets/js/3.fc80c13a.js",
    "revision": "f654c8d72530eee237a1c86d7beffc6b"
  },
  {
    "url": "assets/js/30.1503d74a.js",
    "revision": "50eb9ed6e987273a433134a9d4eabf4d"
  },
  {
    "url": "assets/js/31.a2fa8b22.js",
    "revision": "566fb6f29de657169cf323b288f35f7e"
  },
  {
    "url": "assets/js/32.69464143.js",
    "revision": "f7285b7c3d420aea85cd83b7211848c5"
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
    "url": "assets/js/app.debb696d.js",
    "revision": "3eb27946d0f683cc04d5d4bd5fc57d27"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "2a23ae00c37769d31a7ee3db2a847c1d"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "892b4a239035180b0f61d808c7dd1e41"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "33d924908de85ecd30e14d48f37d0cee"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "4c714af9b8df7a328c201517e64eb46e"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "91c6048f2fe3b5df45325596d4b02255"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "bac406738c6e454691af01b89643bfdb"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "5b419d670151c46d3d4df842b12ce087"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "7a9047ac63e6da2d78453b386b91ae58"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "d1465bebace9a13e8fa37db14beff35e"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "1567d02a43a05663b8ff4263f10a1582"
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
    "revision": "e1a966802d5fde6caf607fd65eb9d418"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "f135a50f01cd1e4cf1c5a14a57ca15c4"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "7dc9de0e7d26e2ee7a99d9520c671ba6"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "81c38656bd42e1b3c2af8fac77e62e83"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "de7e51fe44b39ce44ff1f02caf79962e"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "12e1669d5d2a14cb3469ad21581582de"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "c5bc9769fc1b33a22c3818e022b5c41a"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "bf9cebc919a94ddc06ac18ac2c416588"
  },
  {
    "url": "resources/books.html",
    "revision": "79863ad3a9ad77c1abe59f3bd3800c95"
  },
  {
    "url": "resources/community.html",
    "revision": "b07f815471fd1301abeecdcf1344ca41"
  },
  {
    "url": "resources/conferences.html",
    "revision": "66f0ad20fe377aa2e30f679f75bc918e"
  },
  {
    "url": "resources/courses.html",
    "revision": "6dcf8e28124949739f093e95bee664d9"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "482dad96916477d13c647f4a3bb40c43"
  },
  {
    "url": "resources/examples.html",
    "revision": "0242998011731116e645bb178bd5e685"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "8e01d6e579ee9caa53648d0a264a71f7"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "fb21806a3568bbfac51ccba34c288963"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "49a5829d300f481b80d668369338dd68"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "c208f9ff6a6014ea6dfa2d200ab80290"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "ea08e39205a0a053f62833c04003c563"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "85695c9d22d26301c6e4a007d7482f9e"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "739003aee3ed8199f3fd7d755ac003ca"
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
