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
    "revision": "c52d186b008a790aab8d3d1e60f29ba8"
  },
  {
    "url": "assets/css/0.styles.bdda569a.css",
    "revision": "c024588bf133710af070a4beb6bcb5f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2d4ff837.js",
    "revision": "b7ab44d3212b46c2795d852e7b08c13b"
  },
  {
    "url": "assets/js/11.66fa4c15.js",
    "revision": "29576222601470bd3da84186bca93624"
  },
  {
    "url": "assets/js/12.8f2afaf3.js",
    "revision": "d8fac539539a8410482c4ab0bc0b7710"
  },
  {
    "url": "assets/js/13.e83d8954.js",
    "revision": "f3444d01b77e7a160198667c9063e2f4"
  },
  {
    "url": "assets/js/14.6c70a190.js",
    "revision": "4fe48bbfc737dfcfe9149dd7416bca62"
  },
  {
    "url": "assets/js/15.f372f925.js",
    "revision": "0caaf6a50f2e4d05fa54a2a3ad72f0f4"
  },
  {
    "url": "assets/js/16.8420f7ff.js",
    "revision": "ab1b8fc2a4797d7fd2ccd22608e102c5"
  },
  {
    "url": "assets/js/17.02ed73c0.js",
    "revision": "3053a2373827408b34785cd2ab7b656b"
  },
  {
    "url": "assets/js/18.9758edd2.js",
    "revision": "7bf90b076a880d1cdd8a4978aa108c98"
  },
  {
    "url": "assets/js/19.1a4f4141.js",
    "revision": "5bf3fb47f1e1c3382f9debf272f0a921"
  },
  {
    "url": "assets/js/20.19a2cfa8.js",
    "revision": "31fc6e3d5578295d991a5b74f4548e01"
  },
  {
    "url": "assets/js/21.55325b01.js",
    "revision": "bf0374a86856ca8933adf7ef9dd22a09"
  },
  {
    "url": "assets/js/22.d6d71966.js",
    "revision": "4a287fd159e0b2aa46099743f2a25406"
  },
  {
    "url": "assets/js/23.406b9034.js",
    "revision": "6dd588943a515f6fcaef52a1d3a971bc"
  },
  {
    "url": "assets/js/24.f055e30c.js",
    "revision": "0ed42f4a1be6a029052337799ac8e6ba"
  },
  {
    "url": "assets/js/25.5583a717.js",
    "revision": "e271925cba80fc11b589c982bf369f18"
  },
  {
    "url": "assets/js/26.754d09c9.js",
    "revision": "f64c7a75e143054a331993c9666edd8b"
  },
  {
    "url": "assets/js/27.f8c375cd.js",
    "revision": "1e61d2b906dbaca8b21cbf687d089302"
  },
  {
    "url": "assets/js/28.697a20b6.js",
    "revision": "3bf67fc26b0a43eaf7f6c0c4cbb17d6e"
  },
  {
    "url": "assets/js/29.d3f3f0d8.js",
    "revision": "fa98b1c42220242787dfb6ac7712997c"
  },
  {
    "url": "assets/js/3.7c88a3ce.js",
    "revision": "4077b22d9a2881c5985ef66d0db553b3"
  },
  {
    "url": "assets/js/30.1f891e9f.js",
    "revision": "b8ad74e55438dab65df5a4b99da01ccb"
  },
  {
    "url": "assets/js/31.d96f7ce3.js",
    "revision": "b1ab359e3f617874ee7ebaa6f2b4dd15"
  },
  {
    "url": "assets/js/32.72afef19.js",
    "revision": "c98d1a5b33f427ab1ae5a6bd2b49af3f"
  },
  {
    "url": "assets/js/33.d87c8bd3.js",
    "revision": "9ba8d85911fe71be20edc8d2c5abc807"
  },
  {
    "url": "assets/js/34.38ca63be.js",
    "revision": "aacd1b57fcd5278c2b92fcd6daf90aa8"
  },
  {
    "url": "assets/js/35.34115fce.js",
    "revision": "cd140a9ae6c26647fb16ad069dc42258"
  },
  {
    "url": "assets/js/36.cef091dc.js",
    "revision": "b1408695aa001de6fbab1ade6e3bc569"
  },
  {
    "url": "assets/js/37.f1252b76.js",
    "revision": "c55452ec0f65e92667b4e379d18500dc"
  },
  {
    "url": "assets/js/38.8c2d114e.js",
    "revision": "831288a8ce922118735a4f05a9efc964"
  },
  {
    "url": "assets/js/39.e3b7a60d.js",
    "revision": "5f423e3ba3ba53c07aef782f90011ad1"
  },
  {
    "url": "assets/js/4.3d255bcf.js",
    "revision": "a546593ec2b27396c72f9ce96cfc6057"
  },
  {
    "url": "assets/js/40.33fad085.js",
    "revision": "bbd8cd6c9ef5d6bae241dcf65736d809"
  },
  {
    "url": "assets/js/5.310563a8.js",
    "revision": "b98d6f763f2004afb18722828c96fdd5"
  },
  {
    "url": "assets/js/6.32089b82.js",
    "revision": "4050e6d4f1e7fc576f5148e11814e2fd"
  },
  {
    "url": "assets/js/7.04e491d2.js",
    "revision": "f41db59ab52891f24858e0a073a2bf26"
  },
  {
    "url": "assets/js/8.b1e28f5f.js",
    "revision": "b83a4fec53ae9e7b102f4006159c7113"
  },
  {
    "url": "assets/js/9.f191be84.js",
    "revision": "fe5c4fa6ac13ee135512d6d7b5b27015"
  },
  {
    "url": "assets/js/app.e93cb5f9.js",
    "revision": "ce15e5f70de542012d486f69aef4b16a"
  },
  {
    "url": "assets/js/vendors~docsearch.d08cb2ea.js",
    "revision": "d1d506cf6870c12df18e5974ea1a178a"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "aa969ee1465dff2a42f495bdb2de1248"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "74ae6227da5abf4209ef3f1e5dbf6285"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "b6e1b2a32cfac0ed20040aade4bf1089"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "74196a50bd6bda8ed46ca3a90c99327a"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "c95641f3ac58d13aeabe6825dcdc470e"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "79c0de69fab62ab027b1e57a9fa743ce"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "eb6501137f9bb6dd73406f7ad000ede9"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "ddf3b08e56609ca88c218f6a024dbe01"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "4bbcbe3faeeeaf70aa6e371453db6aa0"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "33251a99b271bab90518de5da3c5b150"
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
    "revision": "5ff964e8f1f63a1dd5c3d438685d70e6"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "f51928819618304a1ce89aa4dcd6eee0"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "5b7a5e86179cbc7ca567cbe4cd217ef2"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "94127a8de86d720e091dc33332dc0eb4"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "df80c58989aff058533df7c065198fdd"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "ca924891448062018d941dbf662b20da"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "c4d1dbfd9249d2ee4f8515795ffe4e7f"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "18b3ab6eb71a3d36ed8a1943b4bed786"
  },
  {
    "url": "resources/books.html",
    "revision": "068364b84961d9ec6bafec3ff7f9afd0"
  },
  {
    "url": "resources/community.html",
    "revision": "89448a6d324d8cc835720376dfe781ca"
  },
  {
    "url": "resources/conferences.html",
    "revision": "b725ad42980010fb5dc4ef6d7ff21fca"
  },
  {
    "url": "resources/courses.html",
    "revision": "b0ae0144d825c28ee97c105bb1b4a163"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "0a68b3ec1498088b6fb8bde7d85d88aa"
  },
  {
    "url": "resources/examples.html",
    "revision": "b847693d7ae08177c3f6d4465eb30d6c"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "b3929971dd77dff2c841f90600eac999"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "64120e61b712c203b9beea9569ee2e35"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "0d35e3878fe03a70d97dfa02954a6651"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "34d187b8a073a4f4f4d24f6ed25dd3cc"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "7043687f9ad2a0cc4408e6b9adf1a203"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "0ea67d8b26a171be67d6d35964a11232"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "c9684661f2c018276e46bdd86a7c854b"
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
