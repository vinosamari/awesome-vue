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
    "revision": "f471c2b1541aa63fe30b6ebe13dda712"
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
    "url": "assets/js/10.980304d8.js",
    "revision": "5c69b5bd06c0c053fc3803c20c768229"
  },
  {
    "url": "assets/js/11.0d3f1135.js",
    "revision": "da72d267814a95ce7b9964949dda3c2a"
  },
  {
    "url": "assets/js/12.0195d168.js",
    "revision": "f58a0ea3766c10f3f59ae0a4697a8569"
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
    "url": "assets/js/5.09abb484.js",
    "revision": "8657b20a0e0078e0d6921fac52b07152"
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
    "url": "assets/js/app.69b0cdd0.js",
    "revision": "20ab197209b154b7b242e43f17401aa6"
  },
  {
    "url": "assets/js/vendors~docsearch.c6236e72.js",
    "revision": "a47f03ed0ad284c8d5dbf0bfda64a455"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "ea39ba97ef1893050d7cbf58f3b46903"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "6ae077986f6c02c85e29f46868c1b11b"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "b48402e724d088973e1fabb7e509d054"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "797ed693dedaea59528cd7d1c45b67b0"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "b06dc08b6492267e0dc4f50f6d3b43dc"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "0a3ed6049a403693c16a9e4e0bbc6ded"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "7a92398df1ebc1e9c0fb145d2bd3c0eb"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "fcfd17bd7678e6b994f16e80f112c40f"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "21b71048e03be5714aa90fd7133ac960"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "ca6c2da5c052e3392b63534fed386261"
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
    "revision": "acdae9ad41d23fe0cf3d3c8b3f3034de"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "480480f5ddeaca1278174967c6e33631"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "8bee28b217d69ffe2b7ea27d76cc4d30"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "8a15226276dbe4e47a0384cfc2a20ac1"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "d46818c78766ad7e6fa87e40c83893c5"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "30f5c55a352be95beda0f118c4e7bd3c"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "f5ea78982ad218fb1a8ab96bbc9012ca"
  },
  {
    "url": "resources/books.html",
    "revision": "c80cd69e12ffb26e704ec24b066f3d69"
  },
  {
    "url": "resources/community.html",
    "revision": "a099c33996b5964ab1ff8fa06b0c587c"
  },
  {
    "url": "resources/conferences.html",
    "revision": "66a7121f5cfc29b8cad2ca5d68612196"
  },
  {
    "url": "resources/examples.html",
    "revision": "3424a59f58475f504ad832e241ee86bc"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "568dc03ef0152e3e5bcd1782ab6b04bb"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "e65726d83c698cfc129d5e04ff1a2c94"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "d5ebb72477e819df96995d77e3ce38c3"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "ca066b12e4fbc038d6fb81a7a5c28340"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "addda91c03dd15ba9b2a86f840869bf7"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "6e40d2718e9c175a5a1bca10065b8f8e"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "434db20dec4b4b48fb309568f0ca9234"
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
