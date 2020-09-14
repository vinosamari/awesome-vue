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
    "revision": "2a5d57077175934a2e984ecf2b25b7a5"
  },
  {
    "url": "assets/css/0.styles.faa55993.css",
    "revision": "135c90cff3040a651b1774cf15c05188"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2b719e33.js",
    "revision": "db7b2c97f4075e06fc892737bdb72080"
  },
  {
    "url": "assets/js/11.d46c9588.js",
    "revision": "e757a2e00a915edec5dff73bc841294d"
  },
  {
    "url": "assets/js/12.18b64a95.js",
    "revision": "f07689e957567784f3bdf00b451a814b"
  },
  {
    "url": "assets/js/13.ff06826d.js",
    "revision": "4abc980cefd7519f2a398509c4280e74"
  },
  {
    "url": "assets/js/14.09f36fb1.js",
    "revision": "0cb7acc3a7dc370a8e6726978a493d1e"
  },
  {
    "url": "assets/js/15.aae20716.js",
    "revision": "467ee2b3710f725838abf9d406d93e6d"
  },
  {
    "url": "assets/js/16.2638bdc6.js",
    "revision": "7a5d203fa238cf0aaf6d9c2f0981b36f"
  },
  {
    "url": "assets/js/17.7419e4a0.js",
    "revision": "7d6acf544da3729c617ae698e099216c"
  },
  {
    "url": "assets/js/18.6b2b7329.js",
    "revision": "e53da276511d4ae3de982278318683eb"
  },
  {
    "url": "assets/js/19.92dc5e77.js",
    "revision": "69894ec1ac755fa3ebccd4b6ba66fb68"
  },
  {
    "url": "assets/js/20.b008f0f9.js",
    "revision": "5b07e3ce272ff85b3cbca77c0ba6a107"
  },
  {
    "url": "assets/js/21.e4c68eef.js",
    "revision": "13be60ade15647087ca5f0bd592e8d9f"
  },
  {
    "url": "assets/js/22.42e4efa8.js",
    "revision": "81848eec5c57e78d5d73533d5f9be07a"
  },
  {
    "url": "assets/js/23.0c5d14a4.js",
    "revision": "35fbe09786e4cdbeeee3d5733f05d5de"
  },
  {
    "url": "assets/js/24.c09453b4.js",
    "revision": "a50c99c98ab258102ff9cbb9e2a29bff"
  },
  {
    "url": "assets/js/25.74d296f1.js",
    "revision": "f2ab0a0be371574d2f6facbebf2d30d7"
  },
  {
    "url": "assets/js/26.1de66769.js",
    "revision": "f8556d1387032890da1fec05d20564da"
  },
  {
    "url": "assets/js/27.7fc57dad.js",
    "revision": "6ecdd2293ffa0681167eb83370daa8cf"
  },
  {
    "url": "assets/js/28.db4cff29.js",
    "revision": "a4466874bf796c8b1abe7dbc31dd8c3c"
  },
  {
    "url": "assets/js/29.209e5d3a.js",
    "revision": "470639f16242cb023fa40cff250fedce"
  },
  {
    "url": "assets/js/3.71767182.js",
    "revision": "42bf27c478e73a1f4d1365adb5937f5c"
  },
  {
    "url": "assets/js/30.ca8c2494.js",
    "revision": "7ba0f93218280270ac6813c7dfa4afba"
  },
  {
    "url": "assets/js/31.d6b03cba.js",
    "revision": "42d4cf8213d5145a9e6e74caecde4611"
  },
  {
    "url": "assets/js/32.0f2f394d.js",
    "revision": "edf8c1df15bb89435473c10d2ade8894"
  },
  {
    "url": "assets/js/33.51e41ca3.js",
    "revision": "fc6370c0ecba5675c74920a6d9e7aca6"
  },
  {
    "url": "assets/js/34.23de4028.js",
    "revision": "5fab9650a5daf1a4c6dc96675231830e"
  },
  {
    "url": "assets/js/35.a0b1f594.js",
    "revision": "325d684fdb17210940f579a06f05f8cf"
  },
  {
    "url": "assets/js/36.d2338b1c.js",
    "revision": "7ad90d2549949012c7995cc10531420e"
  },
  {
    "url": "assets/js/37.b29fa909.js",
    "revision": "0e1a4ce7d57e0efa914fdbdfc8473731"
  },
  {
    "url": "assets/js/38.269e883a.js",
    "revision": "9b326e773a8615b65d7dad3e6b072a33"
  },
  {
    "url": "assets/js/4.aefcdd70.js",
    "revision": "97c86b8cbb498634e80176b85825f76f"
  },
  {
    "url": "assets/js/5.5c135d5e.js",
    "revision": "055a4d6d5d68a436f05842f4cffbdd37"
  },
  {
    "url": "assets/js/6.d8b56762.js",
    "revision": "87f7cf8895d76371e075d90292b1abe1"
  },
  {
    "url": "assets/js/7.98f4d58e.js",
    "revision": "6ff48b173fe48d74f83d91ddae9ed94b"
  },
  {
    "url": "assets/js/8.2d2ea21a.js",
    "revision": "fecec816d169e320f4524396daf5378f"
  },
  {
    "url": "assets/js/9.2a70800e.js",
    "revision": "9b1c61b42c9205e064861563a98294b1"
  },
  {
    "url": "assets/js/app.77dfe018.js",
    "revision": "38aaa7d801315247643610d3d12eb8ca"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "fda960d72c789be7c352e0024e0a2c6e"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "cb25fbd57087b25169324db2be216945"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "739a09bb506811fb19a991bc7082b51a"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "10b4593b52ed4ac3e97b8de02b2db6dc"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "6c3a988d3f7d90c06fb44742c9ddfab8"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "41195b14f2ce3965704e99b262c7f14e"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "0b4c80d557d08a266c0f3330ef6d8ebd"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "03048a8c53a323984a8c92150558ae5c"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "d2f59aceebc6b91e3cb7c5d9a5ab8c39"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "a3e9ccceca4e7f44e7e26cd5f3e0fe1c"
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
    "revision": "916d5d8e79fb018b48ed13957f0f8e69"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "c20f28f527779e2c64a86dd9e7fcc729"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "34e3df36278a7b5a7fbc4b7b33bf6f63"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "7f030defac2f9d2c77de0b173a784ce5"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "c2be2846acf24060389b7d6e6c96ec1a"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "163d98a437f4818b8e26ae4e69ecb212"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "99bcfb1eff972d2db52c1d838059ba43"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "be73f87f1bc403531942eb0fa401fc51"
  },
  {
    "url": "resources/books.html",
    "revision": "5aec6017901cc599e194cc2d6bc7321c"
  },
  {
    "url": "resources/community.html",
    "revision": "1cf68018a70860aaa74bf087fb17661c"
  },
  {
    "url": "resources/conferences.html",
    "revision": "2fd8aced1247260f5ae419bb728c27ca"
  },
  {
    "url": "resources/courses.html",
    "revision": "24fcb6262083a4c3cbfad31c9f158ff3"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "6822c43ecf9d86cbcb8f45b19d991be7"
  },
  {
    "url": "resources/examples.html",
    "revision": "d6d69093432d85e98647d32409183182"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "5b3b68eed1791399baf75fd20b3c2098"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "8494b5dec368619ec32bd471f58334f0"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "2baea27f0917384267f60c3ef1f36529"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "07fa38237f4f1bcf9049e12a427f5bf9"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "17e14f6544f3f1efaf4e891b1a086683"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "3c3aa56c533efaf65e508a8b1c5d0fab"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "c040f8d042e8f4784bc0940603fce0c3"
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
