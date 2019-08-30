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
    "revision": "5811e3eff5656fad0490dab9b263c59e"
  },
  {
    "url": "assets/css/0.styles.a9d47db4.css",
    "revision": "1cf788e5055372fe632a1eba244f314e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.10e63525.js",
    "revision": "9d282d1d5ef4ac050b97ed9123b6f0f1"
  },
  {
    "url": "assets/js/11.f0b01372.js",
    "revision": "1a50ed91ef66b023fce122ec26b2d22a"
  },
  {
    "url": "assets/js/12.c605b93f.js",
    "revision": "769c9e434fe7a95bf831650505017fe4"
  },
  {
    "url": "assets/js/13.79730203.js",
    "revision": "f2a08574e7a1e13864c260edfe3672a9"
  },
  {
    "url": "assets/js/14.0a6c833c.js",
    "revision": "0b6540d636cc6e7430f9cc1ac756d9a5"
  },
  {
    "url": "assets/js/15.02ac812d.js",
    "revision": "6405de5b64def3cbb7cf6dd6b8547e02"
  },
  {
    "url": "assets/js/16.e0691bde.js",
    "revision": "4aeb1049f893c2c873fb6e31a14683d7"
  },
  {
    "url": "assets/js/17.eb59a860.js",
    "revision": "eeec25404182781db925967b02333dab"
  },
  {
    "url": "assets/js/18.6cb448ff.js",
    "revision": "dbfdbe29a03377b3c6edb1e3595ab058"
  },
  {
    "url": "assets/js/19.63b60852.js",
    "revision": "26a8ace76dd5cb6458c1ae3a2f46b413"
  },
  {
    "url": "assets/js/20.a38f6790.js",
    "revision": "6ec2df38fd6ad0ff99c5c771956970a2"
  },
  {
    "url": "assets/js/21.9c79817c.js",
    "revision": "b07250d5cef6d5e066381c4925474b1f"
  },
  {
    "url": "assets/js/22.a84f9df5.js",
    "revision": "9660432516e8430ac3d66dc2f92b120c"
  },
  {
    "url": "assets/js/23.aec64111.js",
    "revision": "2b6e271f8f235d84771f1a211563f83b"
  },
  {
    "url": "assets/js/24.8f06d808.js",
    "revision": "9886ce1ee2e799d09abfbe5ced0af854"
  },
  {
    "url": "assets/js/25.59febc6c.js",
    "revision": "957eda19bbe5d5c5e50dc03938539b89"
  },
  {
    "url": "assets/js/26.62041a5c.js",
    "revision": "d286b1a3e487f99eec87115e97514709"
  },
  {
    "url": "assets/js/27.c2099987.js",
    "revision": "cfa49932059a425b801dff0c459feab7"
  },
  {
    "url": "assets/js/28.584b23a9.js",
    "revision": "f7a83226266bbd43fc9666e7edd08e19"
  },
  {
    "url": "assets/js/29.a025178e.js",
    "revision": "160935725a0e436355b5b49de6f38622"
  },
  {
    "url": "assets/js/3.53ac99fe.js",
    "revision": "ef7e12047e1400a53ab386f9f7b1270f"
  },
  {
    "url": "assets/js/30.01c8cc7c.js",
    "revision": "f9c85861e45d2ac2d3068c6a27d74431"
  },
  {
    "url": "assets/js/31.545d5a9f.js",
    "revision": "5a11e209bff2796821cdff73b5512240"
  },
  {
    "url": "assets/js/32.653089e0.js",
    "revision": "a930a849c3751a7e256cb81ed3e9bb76"
  },
  {
    "url": "assets/js/33.c9cf4a26.js",
    "revision": "f92e9091797faebf811e68d37929525c"
  },
  {
    "url": "assets/js/34.9e886f55.js",
    "revision": "c20b2877fa0b53430d46bafa476dada1"
  },
  {
    "url": "assets/js/35.b0b9b834.js",
    "revision": "c937dd0c762cde824e3d26dc736ea129"
  },
  {
    "url": "assets/js/36.87b3565e.js",
    "revision": "51f16c7d869ffe6ed219aad36b4b77fd"
  },
  {
    "url": "assets/js/4.7d3a193f.js",
    "revision": "210f267dab14ad32647a3d98a1232662"
  },
  {
    "url": "assets/js/5.56695c71.js",
    "revision": "11bb2a6dd0a6eba405db14a6f812d8b0"
  },
  {
    "url": "assets/js/6.d64d1c96.js",
    "revision": "a5f3abbd3d1e73ba649ee15aeeb878bc"
  },
  {
    "url": "assets/js/7.eb6c75ea.js",
    "revision": "8a15345bc9f3c8ac3c7697279941cce9"
  },
  {
    "url": "assets/js/8.527b555d.js",
    "revision": "c892498fb3c9c0bf970acec46ace541f"
  },
  {
    "url": "assets/js/9.c8c854ee.js",
    "revision": "d0b2a1f8d462d15f89359bdd700512b7"
  },
  {
    "url": "assets/js/app.b979bba5.js",
    "revision": "db25982b3e6379877c306f2a118140f0"
  },
  {
    "url": "assets/js/vendors~docsearch.4a9d9afc.js",
    "revision": "5eaba87c46cf5f501aa1d4ca2a8f61b3"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "ac8b1dd6aabb14061b62392335cc21b1"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "274f2d9cc8d69913d0450750a3d82248"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "cc7cfb8b2e2dc0d9f3d94582924039de"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "72677e29bf95e5de40f083638558c249"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "d42bee13a79c498841d5430ba3054120"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "4e1eb7172f796965f8e5f3329c8f6260"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "bf676f3b1abc8c6cffccf683215f2ad4"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "c3b1f8061f398987caae3d14bef692db"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "0af858fab742d44e5708fb734de58305"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "974ee6869821e00b57c64c969e1d9dc1"
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
    "revision": "6a4f8852c6fe9da488ee524d02d91fc5"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "9a7f93c1e4f1b50e97035f966ad7c361"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "92972b270ef4bf180b09e5f01e3b8dcd"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "6e9dc07375d87c2d84c12a16a4d3eda6"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "a73aadb07594218fca80b8240dfc39ed"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "fe0bf36655c46f254906abe6410a3c8e"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "4248931eae9ba7914a684bb1ec6400fd"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "43446da51da389ee7b33a65a806584c0"
  },
  {
    "url": "resources/books.html",
    "revision": "4b8f5012695d271c8bc6bd698f923b1b"
  },
  {
    "url": "resources/community.html",
    "revision": "0809a0b46b56fe5a67d6846ac6f4f931"
  },
  {
    "url": "resources/conferences.html",
    "revision": "c5985732a66bd44a1195c5d0ea70aac6"
  },
  {
    "url": "resources/examples.html",
    "revision": "ff0e5a134da1404cabf24b754a86043f"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "0acb4ee14d63dae3f83824786d5c0411"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "b6e2084479acf1eb7d4a6fb52c80d0df"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "5ac5f698aa1b5638eef496edd36c23e0"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "089896011680ca2ad31c63e7b37ae076"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "5ede32111274771f4b661d30d75da478"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "38e0cebdbe5e84aaf8dd3ecf339aa32f"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "06d293d485e58c69bb5754516ee35b05"
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
