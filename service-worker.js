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
    "revision": "d6333b4e40f8b6b8745c8ed9cad3d1bc"
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
    "url": "assets/js/22.baa6ea5e.js",
    "revision": "b65a2b095223dcc4bd1e3ddbb0e0a3ce"
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
    "url": "assets/js/28.41db9155.js",
    "revision": "74f173637bfd6acc738c98913526a626"
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
    "url": "assets/js/app.07412fec.js",
    "revision": "2f482c6464aab8ee731bb64785389ec2"
  },
  {
    "url": "assets/js/vendors~docsearch.d08cb2ea.js",
    "revision": "d1d506cf6870c12df18e5974ea1a178a"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "57d23872c54a6b9f406c6ff9c6a4ba45"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "ad9d4cba1ae43acba3695d4cefa790e3"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "3655640c69181b4229d52b415f071766"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "67c5138c5391c75d86259f9666c5345c"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "7d4945e13946660bb94346b51bf80db3"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "3285a0b6d2194f4581f457e192d87361"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "86861c991bc14fb7988ec514ec36d324"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "0028962901736d9079e361d0a8b87570"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "efc513e5b1f16ecbbf750354e86fbad2"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "19f953a93f60e523f14cd4e88ed018be"
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
    "revision": "d4e4026918699db4686f2ccce2afb84a"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "9c8a40298dd00748dcfcb21b387f392e"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "23e4694fd65e136dc083770b3a684e2e"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "b3fd189e207f84192b1c67d7fee5dc81"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "484cc21ec2ada719172f6b667f9c61a7"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "c86817c8cb6ae20891164a507f9f2c5a"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "1d3f1f7d1f74348d1993a20b175c40fc"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "e7cdeeffaf439f0164625b03f60bc2e6"
  },
  {
    "url": "resources/books.html",
    "revision": "535048617d4531bda01b15bf93684e0a"
  },
  {
    "url": "resources/community.html",
    "revision": "f63931a9685efc445f592da75658f3c6"
  },
  {
    "url": "resources/conferences.html",
    "revision": "9fa9641d9e1cf5c23c1f792b5b5859a8"
  },
  {
    "url": "resources/courses.html",
    "revision": "4f05c112d7b22888e81b0188006cd8f2"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "60a4dd04c5b0578c83373769b67c29d4"
  },
  {
    "url": "resources/examples.html",
    "revision": "8a7ba0755eef207a154a363671fb46aa"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "811504be64759e95ee61833708badd07"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "3b11c0041169b3f88d7955897f9c41f8"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "34a861546f481b0f25679ee5a3d8e129"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "d3e26a7b9abf4f67cc8eb4f857f6ee04"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "90c4944c011fd90b0b594dd902de4eea"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "6eae7d8c5aa3af966f9d465eede8d619"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "b755680532bddbf219ef25bd8bccdb34"
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
