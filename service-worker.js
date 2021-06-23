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
    "revision": "718f377c751225b6862144586100107f"
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
    "url": "assets/js/10.105d6623.js",
    "revision": "1196b4596f497493ccf4b04aaa37e414"
  },
  {
    "url": "assets/js/11.60a63e52.js",
    "revision": "2dd740b920c4cf425db8da5a9d1a1c96"
  },
  {
    "url": "assets/js/12.3c3e8e22.js",
    "revision": "32a738ec2f399d57630d94b7ef63822c"
  },
  {
    "url": "assets/js/13.f4ff75c0.js",
    "revision": "abc811fbd0ad195c9f3b31f18084a8a6"
  },
  {
    "url": "assets/js/14.588bb86d.js",
    "revision": "e41e52a0a752574325717d7e83eab402"
  },
  {
    "url": "assets/js/15.3e68edc3.js",
    "revision": "2b37c1fed4f9836fb66bbd05734dfc6c"
  },
  {
    "url": "assets/js/16.f69dfc2b.js",
    "revision": "eca180f82bd1e5f69b5c20f268e4f6b0"
  },
  {
    "url": "assets/js/17.82d57924.js",
    "revision": "986cdb5a5f1ac6a9b7151fdf0a0c6137"
  },
  {
    "url": "assets/js/18.7f806ae5.js",
    "revision": "2780b834a0ca2d1eec5231505b70a112"
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
    "url": "assets/js/21.120cace7.js",
    "revision": "deece61e1de1e05d0ce8881455264c92"
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
    "url": "assets/js/25.05b77336.js",
    "revision": "b1dfb3068c09899095ccccaf605e1fa2"
  },
  {
    "url": "assets/js/26.d4b067af.js",
    "revision": "ad672ce7504faafebb070d1d7cecca8c"
  },
  {
    "url": "assets/js/27.c3b4da67.js",
    "revision": "1d2429b804e8dba4788fadcd0e3001b6"
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
    "url": "assets/js/35.d4d6ba72.js",
    "revision": "eb29d97a2b43af12cb46ac3005acc3fa"
  },
  {
    "url": "assets/js/36.4ca4856c.js",
    "revision": "25d3f10a018a469455d100b0d0f4b844"
  },
  {
    "url": "assets/js/37.77b24638.js",
    "revision": "c6df099db4025f9dfcdeb79572120f9f"
  },
  {
    "url": "assets/js/38.cd79a9ec.js",
    "revision": "a4f4166e2c25ef825eee64dbf46d74d1"
  },
  {
    "url": "assets/js/39.5ef0778d.js",
    "revision": "7958c6466a57180acac54004adebbf7e"
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
    "url": "assets/js/app.67908d9b.js",
    "revision": "f1c121d00494e98b8f2d29df0df28f80"
  },
  {
    "url": "assets/js/vendors~docsearch.6d7b943b.js",
    "revision": "dde5d9ba28eeec4b873efc2e167cd6b9"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "ac1e0e632116603fc94ca65824ac587d"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "0b5503a10374e8c24794c6e5a40e1092"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "bdd7ba7a1f84014d061f1774c1690cf0"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "3d29db9f23345c3edff8bba492f6f9a4"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "01c357a424c2bd7861c2ea52775dfe42"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "e60657aa50666c8a0f18526cb6279fed"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "d42b3130e52713657945396825ae6d43"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "c5d2b2983acfa0e37bc9d14a2b8de2c1"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "5d628de14f717d2a5959c38fa3469b40"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "d05e8e49c621bb367b536b8796993518"
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
    "revision": "5911274badae7c294d706004a0b260e7"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "645c9c6e3729863881bbf83b764954f5"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "d1637324bbc47e5b970d17a8e5f310ba"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "a0065ff75e1821deba28d75f3d5d284d"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "02733ae311f0e86aaed2366865984806"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "4eac32bc5068cf62a768b35faa86cd0b"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "8a57e349f54fa2faeb530335b8ec16ea"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "91e976917e8960bbc82a4b0c9093a737"
  },
  {
    "url": "resources/books.html",
    "revision": "afd1e79a224543ebf640a830c6988f60"
  },
  {
    "url": "resources/community.html",
    "revision": "0a2c20b723264d8be5c56cd0fab6e79e"
  },
  {
    "url": "resources/conferences.html",
    "revision": "3290b9efc95c349e076107641ebd44bc"
  },
  {
    "url": "resources/courses.html",
    "revision": "f4634ef373a92074282cad67ed28f179"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "82bfc22454157ad2c60aa15667721994"
  },
  {
    "url": "resources/examples.html",
    "revision": "c50dfc4ca78904cee667ab53d0664436"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "2d4784d6e98c4229f27d21158a8e7950"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "ac5cab339617b87869117e2d6ae25beb"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "587d98ae1b60cd34e3b49044281c09f2"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "a48c1e1cfd1a3f0da2282c8f5b58e492"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "c8f34b22a6772326c7a61e896810cb67"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "dfb5f2d57c7e15410f06b5c1aa6f5a7b"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "49ab1d32e6701ca01914e9605f6a5e10"
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
