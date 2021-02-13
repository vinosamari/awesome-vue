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
    "revision": "be0c077ee8e27d897ea84256f18165ae"
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
    "url": "assets/js/10.2170686a.js",
    "revision": "84d95890a298504d17ad55f9104a5fe7"
  },
  {
    "url": "assets/js/11.f2a26b0b.js",
    "revision": "0e4c19019c6467f46b32bd5a05157af1"
  },
  {
    "url": "assets/js/12.2d9bc09f.js",
    "revision": "515b83e9f618cf93272b82caeba6912d"
  },
  {
    "url": "assets/js/13.f619c53a.js",
    "revision": "1ad892627cc06c1bb849033577c5afd4"
  },
  {
    "url": "assets/js/14.099cfd41.js",
    "revision": "df2e78731830732f8c58a7e207ccf9cd"
  },
  {
    "url": "assets/js/15.8a1fa8f9.js",
    "revision": "3ca395bfac26a6dd777249150c9d76e4"
  },
  {
    "url": "assets/js/16.afc62a93.js",
    "revision": "864dc36f3a5a6696bc8efd98f183e6e5"
  },
  {
    "url": "assets/js/17.204ab2e2.js",
    "revision": "aeaadc3a401d522b6a3559ff379b928c"
  },
  {
    "url": "assets/js/18.df7ebce4.js",
    "revision": "bdf2f863b947deb61d93a9f2ea46680f"
  },
  {
    "url": "assets/js/19.7445a937.js",
    "revision": "89f4a6d9fbd1024aceed3e836cdf9b12"
  },
  {
    "url": "assets/js/20.ad39e02a.js",
    "revision": "e974ce6412d04e82bc39a41acf7c79f3"
  },
  {
    "url": "assets/js/21.0eeda341.js",
    "revision": "a4ef5ee561d902f008ddc15992d04127"
  },
  {
    "url": "assets/js/22.eae50bc6.js",
    "revision": "b7e3719ad8f209b83aab50e61e2875a4"
  },
  {
    "url": "assets/js/23.7b44a964.js",
    "revision": "a8fe0baefad574ef52d68a0c8a6b2177"
  },
  {
    "url": "assets/js/24.585b2fff.js",
    "revision": "a646db96fabaa5f91181bc4171096fc1"
  },
  {
    "url": "assets/js/25.e56fed30.js",
    "revision": "6257e5350d86356b119ec78310f506b0"
  },
  {
    "url": "assets/js/26.20cde1d6.js",
    "revision": "a07b92de4f196222eb6a5abc8dc6b42c"
  },
  {
    "url": "assets/js/27.cfedb0a0.js",
    "revision": "89131bacf59863234786b6de6a9a9bb4"
  },
  {
    "url": "assets/js/28.263615bc.js",
    "revision": "a37858b8ffbac0caeeb14a4827a7078e"
  },
  {
    "url": "assets/js/29.224e107e.js",
    "revision": "a607ad47b66fbe6b99e3434607b0d84b"
  },
  {
    "url": "assets/js/3.8fcf933d.js",
    "revision": "9a3398b30d4becc008b0a1287fcd59c6"
  },
  {
    "url": "assets/js/30.f4e42f2e.js",
    "revision": "1f5edf6906ce00042d8bceb316bf3434"
  },
  {
    "url": "assets/js/31.2a1382f7.js",
    "revision": "944da04c4b0c6f73da919712de1c30c7"
  },
  {
    "url": "assets/js/32.9b5bee15.js",
    "revision": "1b30141f233e7394367e03ad4b6f07cf"
  },
  {
    "url": "assets/js/33.af8f0905.js",
    "revision": "6598149f1d6f06dd1e73e4579bf3e27b"
  },
  {
    "url": "assets/js/34.5b3d22b8.js",
    "revision": "db3c32c390e205f5c16304338a4419ba"
  },
  {
    "url": "assets/js/35.f26d1c53.js",
    "revision": "24a7de13ea0d50361f802901650030e8"
  },
  {
    "url": "assets/js/36.d18026ad.js",
    "revision": "763f83fe9908e3627b33e3a0f17d9aaf"
  },
  {
    "url": "assets/js/37.751b0fed.js",
    "revision": "2051f71ec578731925b03203301c341b"
  },
  {
    "url": "assets/js/38.b0ca2e42.js",
    "revision": "40f4fb7a15f02aedbe35eb9c86a1c31b"
  },
  {
    "url": "assets/js/39.2edc98be.js",
    "revision": "eab1308cdd95a431ab99c45d915b551f"
  },
  {
    "url": "assets/js/4.3a759814.js",
    "revision": "00b9a95e68b2a58ed264f37159ac8c18"
  },
  {
    "url": "assets/js/40.fb1748a3.js",
    "revision": "6cb5437b6c8baa2583b41ba0b31f1b71"
  },
  {
    "url": "assets/js/5.861093c7.js",
    "revision": "a32c8b1c6354b141cc5742bae1b6d419"
  },
  {
    "url": "assets/js/6.9ab2e3ce.js",
    "revision": "284b4fa7d20a33756a9d5f09c4e43176"
  },
  {
    "url": "assets/js/7.781372f7.js",
    "revision": "49a106c0bc0b7e912408bf70f99eeb77"
  },
  {
    "url": "assets/js/8.b9f491c1.js",
    "revision": "d42d5cbc41ab12d65f82d117822e6a80"
  },
  {
    "url": "assets/js/9.b84a59df.js",
    "revision": "3e7ed365b02862e5cd94fd09b056f2de"
  },
  {
    "url": "assets/js/app.fd05f7d6.js",
    "revision": "092ede8c666b4eaeeeb9ac3e377ba1fd"
  },
  {
    "url": "assets/js/vendors~docsearch.3fe60842.js",
    "revision": "29f55eb16b48514ebeadf65356fa85b4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "7b732b93aca7615480df2efd64eb85f7"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "b18d67341add48441c49723f73aea548"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "9a2ea3f1b3db19c19c752011edc44689"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "8ed84ab386191a7fb0ed073a7a08276c"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "4096826ebade9fb406edbfecf12acb7c"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "fff9c4953412d901ca2ec8fe1ed6b465"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "b3210d64f17a2c4f6a081ed6fe97b075"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "c55773cdfa59b62d6c9c09d2a17c3f5b"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "719b1271ce06836800fd6da8c34971dd"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "c77aca62b17dd59d4b632984d1452e54"
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
    "revision": "94d1b5da301111753f2534e0717a1b92"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "9ec03a9399bac5c479aab5d9fc49edee"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "62697b8a6ba839c1c335a022b841d163"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "f67226153310ca6c88aa7011a57c2600"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "0dea4a9db7400b8a8682c979d3cf7edc"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "88d3ba15b9dce3194d57fb696369acbf"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "df78abb256d58afdd69fafb0503fcc65"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "66cf826a8b2bfda06cddbd2301864a0d"
  },
  {
    "url": "resources/books.html",
    "revision": "47ff27de9a78bc8a7697f3516b4b8688"
  },
  {
    "url": "resources/community.html",
    "revision": "a9456778e83b6aa5d9f4c6df488f1349"
  },
  {
    "url": "resources/conferences.html",
    "revision": "99f22df98a6d425ea8e7f66fece66c97"
  },
  {
    "url": "resources/courses.html",
    "revision": "c8cf3be7677ab9b24ca4168bbfa25219"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "b4d48ba1f1f7ad970c3ad749a2af8bfc"
  },
  {
    "url": "resources/examples.html",
    "revision": "607482b8a4f3a95651223fc0260d9297"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "cee2e45d57d2df1e24a05fe7b78aecf1"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "1e93dc439a4b989afb6b56aa48d1e578"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "f8cef9cb5cae42df6fa0dbe00b9f2b0d"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "8a578fb069961845f4677f2779b9f740"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "175e6bdeb9e5248e1a987ef241ceeb1c"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "e7b40179ac3b6a192108be51fad18bd3"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "5f6919ede454907a031661982345a565"
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
