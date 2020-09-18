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
    "revision": "4cd3b66659f0dddf8c39111d696d1224"
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
    "url": "assets/js/10.0697bb0e.js",
    "revision": "77476eb0e7b1e371e3e139259d85eef0"
  },
  {
    "url": "assets/js/11.bff27ce7.js",
    "revision": "381d31a7d84b8738ad6c2f53dc541fe2"
  },
  {
    "url": "assets/js/12.f75be051.js",
    "revision": "5704ca0cae54e143aab021d95bc347e2"
  },
  {
    "url": "assets/js/13.61acff87.js",
    "revision": "f7d8c5748ac2585b28ebd388ec853921"
  },
  {
    "url": "assets/js/14.2c34dbf1.js",
    "revision": "cf85be77a57d51422286739aa6c0bd43"
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
    "url": "assets/js/19.4abde098.js",
    "revision": "a4e79897684a53e473570c58a4ba9fcb"
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
    "url": "assets/js/31.b12918b7.js",
    "revision": "3b55d635109a71e631c985e303631b18"
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
    "url": "assets/js/36.05e84fb6.js",
    "revision": "41b72de23d17b7cb4c67f487f35960f5"
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
    "url": "assets/js/8.ddb03887.js",
    "revision": "230a57cb1d99de382ef10780d5c847e0"
  },
  {
    "url": "assets/js/9.2fabded0.js",
    "revision": "2f773fe0cf8cd2d2a773f17d84a7aa88"
  },
  {
    "url": "assets/js/app.61e798a4.js",
    "revision": "95837d9971f5bd8bf0d4e1af6540ada5"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "2fa844db6ffa85d20dd78d7c62307a97"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "0f3e57b63fee397dc5662e1cf172df2e"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "b9ef5941c60672ade64901494ad9c1b4"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "92d85c25b602544a11a652c7eb83bd9e"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "bac5984011fc8c1dbc7df3f66488bc9e"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "c0559bec1b99cd9310b7fcf68babc1c4"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "a3f5173ef1ada7bf7e816b90685d92c6"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "9a2ea22e6d84f37f97aa3fc966ef40d6"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "2213adf81eba0dcce4df344125afdb9b"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "86acb33b7fc7738dc72f425e00d32bbe"
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
    "revision": "8df0527ce31a44d32686b85db31d075d"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "91dbeda46c8875fd5228562129b40710"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "070c78dffedf00f9075db9fd12840330"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "cbca273b0f53c5b2acd94e389dcc717e"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "5a2ba08a81f54ec8d9a595fb980af573"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "6fd2873922f3b35d048bc4996ef27224"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "4c4871fb7ee008f90e91596d31ad6ddd"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "1766eec4bc5c96f403e98fb1afdb5320"
  },
  {
    "url": "resources/books.html",
    "revision": "2e4d9b8ed738ee53917dd8087fc4fcb1"
  },
  {
    "url": "resources/community.html",
    "revision": "c0afa8a564dbe282c9139f976dfe7846"
  },
  {
    "url": "resources/conferences.html",
    "revision": "f5eae6e6d99ee70a501c8771d56f60af"
  },
  {
    "url": "resources/courses.html",
    "revision": "a08233b972f2ad07cb4dd504bff6b132"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "9d4e547f60e2ccc4aaa4565ecdc43fad"
  },
  {
    "url": "resources/examples.html",
    "revision": "ab72ccb51b62d2ecd8a4bac3028e2ae5"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "1ddd2ef9d7722a11a3f26c5fc12b3e6e"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "0e4cb65683f431d3e8acc65133522ee6"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "7f1e59d81eb122c5293f06a0f26fec55"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "318492fac6285be0767f30271b7354e2"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "11bad8500ba9a1c673c883c27fda6f03"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "55c07b1a8c7f172c67cd207671ce4605"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "91797e30405bd7dcfc09c7aae34aca9b"
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
