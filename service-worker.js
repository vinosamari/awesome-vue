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
    "revision": "c2583c2488b0d36747e2cae3de230f7d"
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
    "url": "assets/js/10.b47284c2.js",
    "revision": "44ecf0db1a2b08d10806028a0744f199"
  },
  {
    "url": "assets/js/11.ad83e7c8.js",
    "revision": "5db761eef75e1b6996589fb3858445ac"
  },
  {
    "url": "assets/js/12.c0200b4c.js",
    "revision": "7c847fcf1f385deff0ce06a982ae5c84"
  },
  {
    "url": "assets/js/13.36eb391c.js",
    "revision": "82f05f6f0a176722411902d9ae4adac5"
  },
  {
    "url": "assets/js/14.437b2b20.js",
    "revision": "a51e455e018c2a6d3bda3de7d9233884"
  },
  {
    "url": "assets/js/15.1f44c16b.js",
    "revision": "e72134c0e3e99577b3179ce47a359d66"
  },
  {
    "url": "assets/js/16.38bc86f1.js",
    "revision": "50d42c1aa8658be55132e717814f6d55"
  },
  {
    "url": "assets/js/17.ddded6d9.js",
    "revision": "ba5e401fe5fe7b930cc71a5aa6e7f7d4"
  },
  {
    "url": "assets/js/18.89e1de9c.js",
    "revision": "24c99d5eaa8c66f73f7254a618f14c45"
  },
  {
    "url": "assets/js/19.bdd844b7.js",
    "revision": "5bf5516a94ad0036c312a78a8e2063db"
  },
  {
    "url": "assets/js/20.a236f507.js",
    "revision": "1239a84104a4b42c816ef24ca464f60d"
  },
  {
    "url": "assets/js/21.5f8cf892.js",
    "revision": "704dfa876a74a7dab9fb2da0957eec94"
  },
  {
    "url": "assets/js/22.84fe4224.js",
    "revision": "c0d39622e6d331eead6b78da4d77f3f4"
  },
  {
    "url": "assets/js/23.e4633682.js",
    "revision": "a13393f8b6a48fc2df0cccd2ee4b4728"
  },
  {
    "url": "assets/js/24.55c09d77.js",
    "revision": "5271cfde80d0119ebbf38e72af144858"
  },
  {
    "url": "assets/js/25.209cfd1f.js",
    "revision": "f98aba8aeedabb058431d624a5d1f46b"
  },
  {
    "url": "assets/js/26.378d9f39.js",
    "revision": "49e80b3e38f213917d04323f9a0c04a4"
  },
  {
    "url": "assets/js/27.126f95b6.js",
    "revision": "942dfd0732437822ece6daa0b3611450"
  },
  {
    "url": "assets/js/28.95fabfd1.js",
    "revision": "e508e497a8610c6693ab3519f2775e7c"
  },
  {
    "url": "assets/js/29.5547f529.js",
    "revision": "f010d91323aedfb1d98d86fab67eba64"
  },
  {
    "url": "assets/js/3.f91d7b4c.js",
    "revision": "3247ac68cfc206971fbb07cfdc104240"
  },
  {
    "url": "assets/js/30.328ed71e.js",
    "revision": "1d1fea9dee0ab2a95771531abbe056cb"
  },
  {
    "url": "assets/js/31.45f12579.js",
    "revision": "94531d78835e8ba21a29730bcc4c6941"
  },
  {
    "url": "assets/js/32.5102b0d2.js",
    "revision": "270c813f45eccfc6833835064e655af9"
  },
  {
    "url": "assets/js/33.af0c200a.js",
    "revision": "2c19c9ea6de85e8140800472d9367420"
  },
  {
    "url": "assets/js/34.8cfb2ac9.js",
    "revision": "a57c0a2fcdfaf26b1b4e78a495c03e19"
  },
  {
    "url": "assets/js/35.ca4089b0.js",
    "revision": "e5069d1d7cffc67d1053fa4ae4c48d92"
  },
  {
    "url": "assets/js/36.f6da8816.js",
    "revision": "8e90f0ac9b4fd71911d325205a576b8f"
  },
  {
    "url": "assets/js/37.1230e273.js",
    "revision": "cc595f9f04b42bc686117d3949e973d3"
  },
  {
    "url": "assets/js/38.93e5da85.js",
    "revision": "ce445f379d86f13910463f050ffe308e"
  },
  {
    "url": "assets/js/39.fddc190b.js",
    "revision": "91beee784b7796d1c815e919359aee3d"
  },
  {
    "url": "assets/js/4.ce02a61d.js",
    "revision": "9b99e1739c76e1e4e146b0df3ba6ed48"
  },
  {
    "url": "assets/js/40.b42569ef.js",
    "revision": "e7d54b7c97897879ecc1ecc59606d1cf"
  },
  {
    "url": "assets/js/5.98c98201.js",
    "revision": "cdc385dbbe9420236e00e84145c6575f"
  },
  {
    "url": "assets/js/6.01879bb6.js",
    "revision": "add754746cebc6a382d4703deb7e7f58"
  },
  {
    "url": "assets/js/7.e0f69654.js",
    "revision": "59b6bbbf35f675f4a9833fad2a565972"
  },
  {
    "url": "assets/js/8.bb9e184e.js",
    "revision": "3fb0df7894a90545afbac273c6f362d0"
  },
  {
    "url": "assets/js/9.e1535f7c.js",
    "revision": "39fbb7f80dfe5ca892c94d43d08e156a"
  },
  {
    "url": "assets/js/app.2e50052c.js",
    "revision": "558b7bafb2324eefadc6888ef92512b5"
  },
  {
    "url": "assets/js/vendors~docsearch.6c6f4b7c.js",
    "revision": "80d85f27635587331d7843bd0729b025"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "286acaa9177abb7d4bc4bc9c20782aa4"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "f0a4cc896ccbd5a178564b04ac7e5d2f"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "a2ec4f22242556f0be4478ff5a83d3a4"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "15ff5c7916c272546a89ab48bc406a90"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "dcdafcce0917622e195d5df51c9c995e"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "38c44816988e392a6d9c2a8752c72fed"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "1b0735f010cc38ec0d785b7b8d9b993f"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "ead1e7775e509f84e83b4608580104bf"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "bbf94cefbc9cf411a55fa4150ade0886"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "9bdae7b6d2249f9c69eab2dea6d65ca0"
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
    "revision": "a0ea8a1c12900b7a87e219f5ab8f1277"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "e5e59e2664ee59651a9bbcb619ae4aee"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "2db75cd0f079c6d8589fd777775c36e0"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "4867fcc3095346635b341caf93e53d51"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "c5e961e4eedcdf7c59acbf244098f521"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "bdbac73bc989130a0d56989e8807097b"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "e4d5ee036b44b0424390273bb2190346"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "c5ef67b44cc4fc1e4fabcc59b146f10e"
  },
  {
    "url": "resources/books.html",
    "revision": "47a6cf868a53ea5b59762dde4ab4542b"
  },
  {
    "url": "resources/community.html",
    "revision": "816683390fdb2b74401f186ab84a4bde"
  },
  {
    "url": "resources/conferences.html",
    "revision": "c236ba5b3193c65103124947f27c836f"
  },
  {
    "url": "resources/courses.html",
    "revision": "0fc5e39536f5bf9604048a3d84968c0d"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "606c05f49e7536de3e93d62e4f88c341"
  },
  {
    "url": "resources/examples.html",
    "revision": "25c99350730d8cd2a8f79650877bd8d2"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "856ed5ca850e9599e3f4b40d2a791979"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "61a201eff82ce8c23fccb7d370e73596"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "06e7c16b49693716bf20d40f4b850f6a"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "fd74aee0b136ec411c752f6c6abf8ba8"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "27bec1596af5697be554eac9544d5e65"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "f35c2bee0629b4411b904a2746b4e9f0"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "76fc00ecdd7f39837dfad6adf0cef56d"
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
