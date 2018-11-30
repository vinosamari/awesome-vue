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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7c2479a3bb645db5acdff6b634ac1c20"
  },
  {
    "url": "assets/css/0.styles.14fd8401.css",
    "revision": "58e5e53660314010897cdf9a92270eb3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6075692c.js",
    "revision": "b12b365f42fed16d0163d8b08984cd35"
  },
  {
    "url": "assets/js/11.0d3f1135.js",
    "revision": "da72d267814a95ce7b9964949dda3c2a"
  },
  {
    "url": "assets/js/12.69ec26f2.js",
    "revision": "bdee621e47e15d80c7d5b24a3841c1b0"
  },
  {
    "url": "assets/js/13.734f8252.js",
    "revision": "c167e0c5155f1def70572965c8f94712"
  },
  {
    "url": "assets/js/14.68e68728.js",
    "revision": "d71b5b49824fb0f5482599bafa4836ac"
  },
  {
    "url": "assets/js/15.b9c60886.js",
    "revision": "f6f83e807318b54b17c7c11738ba7c8f"
  },
  {
    "url": "assets/js/16.b99e1c84.js",
    "revision": "6e8e20ae67bd71f80e8dadffcac996b6"
  },
  {
    "url": "assets/js/17.b4fdcb62.js",
    "revision": "1d415681f27575a621ae5feb858f4f33"
  },
  {
    "url": "assets/js/18.4bd89867.js",
    "revision": "240964a760343d7a1bf307cb5363f016"
  },
  {
    "url": "assets/js/19.29c3e07a.js",
    "revision": "59ebfb90fdb6c4d80866fba0351d3485"
  },
  {
    "url": "assets/js/20.4c016fa5.js",
    "revision": "fad3e7962f84de4398cf7e3eea8a4074"
  },
  {
    "url": "assets/js/21.80c4a275.js",
    "revision": "8dca011c70d4794a7472b9340aeb9434"
  },
  {
    "url": "assets/js/22.7e454468.js",
    "revision": "bd1777f923d8dfafb721a143545f72ec"
  },
  {
    "url": "assets/js/23.9ece9879.js",
    "revision": "fbb703ead6ea740a99c4941ded4eb7a4"
  },
  {
    "url": "assets/js/24.c9c0c799.js",
    "revision": "5d0c8c6d3d3eb4cf13072f9bbc0ec9a4"
  },
  {
    "url": "assets/js/25.d1366a42.js",
    "revision": "62a9bd216cd7345fe2e6da71c5a0fca6"
  },
  {
    "url": "assets/js/26.b8044dfc.js",
    "revision": "5f707a0fc9fe34929f1145f8138b9f92"
  },
  {
    "url": "assets/js/27.ad23fe43.js",
    "revision": "07d2729cdd0e2d16671ed9769c4cb37a"
  },
  {
    "url": "assets/js/28.15d3e4e2.js",
    "revision": "8b1d0d04e6f78eb29c67138907848db0"
  },
  {
    "url": "assets/js/29.cd2f3630.js",
    "revision": "efe8f549c1a70c9b6c08fa2a8acd4a9b"
  },
  {
    "url": "assets/js/3.56cb5c48.js",
    "revision": "51095e57112cf623aa21bdac4093ec8b"
  },
  {
    "url": "assets/js/30.71c9d750.js",
    "revision": "a6041367269e0e1672f4ee4c7d88cf4a"
  },
  {
    "url": "assets/js/31.acf300ca.js",
    "revision": "c0603730bbeffaa8581e2684af4a37dd"
  },
  {
    "url": "assets/js/32.a77e1b3c.js",
    "revision": "9cae2f6dded5d82310128cdce8e7fce7"
  },
  {
    "url": "assets/js/4.03e78e57.js",
    "revision": "866898f0a865db1e5d3e3bc64b5fcc59"
  },
  {
    "url": "assets/js/5.653e516f.js",
    "revision": "85f2fd028a1cf7ac2510213989509b32"
  },
  {
    "url": "assets/js/6.ea3c5d42.js",
    "revision": "f53a3909bec897429df34abcc80ea5e9"
  },
  {
    "url": "assets/js/7.8bc1ea8a.js",
    "revision": "dedce9c672ab630cb5f1b53441ded87b"
  },
  {
    "url": "assets/js/8.b01f2003.js",
    "revision": "85060fd769c2e3f56203315d1a5db41e"
  },
  {
    "url": "assets/js/9.09b4e63b.js",
    "revision": "54f80a5e2f8062c9f136fca44f06873e"
  },
  {
    "url": "assets/js/app.2e567be0.js",
    "revision": "b2c88de8d6a9175dbf0dd643c740f2db"
  },
  {
    "url": "assets/js/vendors~docsearch.c6236e72.js",
    "revision": "a47f03ed0ad284c8d5dbf0bfda64a455"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "6d1bfa4018e23c669620181b4290d8b8"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "970c85f5b4c86893ab03e487b147c93d"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "aaf6f5b9f9d92df3f249af280ebfd560"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "63089ea381250a06c3406e5607bee5c5"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "d7b966758c3e47827bf0517fcf3a318c"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "a3678712629a64f5e4af6271bcd315e1"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "fa4872953f9cdcf9aff4d9f14502414f"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "128f79c6701973c274488a652c0b0211"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "efb169274203d03f7257d9ddc4fc7fb4"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "705f63cf17711fbad5bff1dda03eaa47"
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
    "revision": "3a2f8e290c06fc0b4b9f3aedae119b36"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "e1445e85eaa3f2edd0a1fa2257ba9913"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "a1dcc2c30f3621770a705058d3a4cd4f"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "e78fcab9487cee055c8063140964e7f1"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "6bc6358be24a24ee2ac205f7988391a7"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "ec6dd979991750ea3d8dd279b2fbae59"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "5f0dbff2d674fef50950443d68f9b4f7"
  },
  {
    "url": "resources/books.html",
    "revision": "8145f2124d57b41b7fa1d72250599e37"
  },
  {
    "url": "resources/community.html",
    "revision": "7ce62ac280792ac3194dc8eff2b61e91"
  },
  {
    "url": "resources/conferences.html",
    "revision": "3164e3a76b2faccdc3847802eb81b646"
  },
  {
    "url": "resources/examples.html",
    "revision": "7a9bc540615bf070bc71ee1e93419044"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "3c0ec078ddcda0bb193f460a39c0d2cd"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "877e143949be13aa62b45faf94fa5939"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "52e6e6b00e091b54cd47851edb88ad63"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "a9d01af95d5022394035616b94751338"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "3919b88f308812935ad4a96569ebcc61"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "2162f8442db8dfeb4fcb4c5f45c6eb1f"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "fbd3ad7de548b0ce23d03aac75e4dbdf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
