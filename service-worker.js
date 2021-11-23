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
    "revision": "6bdc565c18d1128ade8caac63d0f1634"
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
    "url": "assets/js/10.8bb71d42.js",
    "revision": "7e8699d6fdfa103a6e70dad1267c1691"
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
    "url": "assets/js/14.380d5bbe.js",
    "revision": "37fdff05fa847ad569b2930bf06acf52"
  },
  {
    "url": "assets/js/15.e5dc14b0.js",
    "revision": "775e132806608bd6ca5e323967bfb972"
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
    "url": "assets/js/18.e25d6acc.js",
    "revision": "16563abbf5f5e5520fea9f17941ac3aa"
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
    "url": "assets/js/21.b55c080c.js",
    "revision": "830e35317d98e9f27b9302fe26f42fce"
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
    "url": "assets/js/25.f8fa1859.js",
    "revision": "b187580c50dd8c8f1c277c0924ca4448"
  },
  {
    "url": "assets/js/26.bbbd9406.js",
    "revision": "df8ac90ae6a2ae368129324d4ee6e0c0"
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
    "url": "assets/js/32.a0e1afdd.js",
    "revision": "ccb190b88b14b15838a2d9f49f65ce8f"
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
    "url": "assets/js/38.125a488f.js",
    "revision": "7c54569218cd35c020077908b81146ab"
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
    "url": "assets/js/app.29837ebe.js",
    "revision": "6bbcbd99dbf831ec9a91158a2b5842d5"
  },
  {
    "url": "assets/js/vendors~docsearch.6c6f4b7c.js",
    "revision": "80d85f27635587331d7843bd0729b025"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "c604b0fd1f4728feb0c7fcb464064700"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "70231319c35c9d12a2057089090e9fef"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "bbd93cfa12077ab074c1a7b04163633d"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "2809aab1d293c8347725b0816f9d1e87"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "726b73da18fa05e7e1e9f54b5ed21faf"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "5c071b8e552906c3fa3142c4cbbbd1b4"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "e3f39e9160faa3cd534d987f73b3a137"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "3e13279255fc12600373a4a19162d066"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "f0a9b33b2874de928910764d73a10137"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "470fde59af27296da148702c43fea008"
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
    "revision": "c382ca23a36b50d0a8c1321efdc37d71"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "1c4494fa38c857ab712307aea22956ef"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "a1c58946c4c7fe0041ef01a5fef1f956"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "516068027638b0ef82786839cbe6840c"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "54fb5e5b35e5f3e26129bd4fa3f34d4f"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "0d4467aa8983bacb347c2d1af8113bb7"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "ae130b844b72aed16f93d5630bac7f5a"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "0943f3efc0d1a17d5c706806acd2f98e"
  },
  {
    "url": "resources/books.html",
    "revision": "71944cbd8bfb4340b8e3c5e71d14211a"
  },
  {
    "url": "resources/community.html",
    "revision": "797eb40fe3a36bc9195f1b525c458599"
  },
  {
    "url": "resources/conferences.html",
    "revision": "188c86b46061188e35c591e04d749fed"
  },
  {
    "url": "resources/courses.html",
    "revision": "8d8a2ad5908ff4e599aae4078a42a11f"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "4a77d56308be0a57066501905172f3b4"
  },
  {
    "url": "resources/examples.html",
    "revision": "cf3e58e9a49c1ffcc44ffcb7bf146d5a"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "bfe82939d634ea2082c238f69c45cc45"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "652e416e270b4b5b45254c5809230c4c"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "44939ebcbeefc65455effd9c1e7cebb7"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "a8b39f152d0a125ce20b7e392233353c"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "b572f740520b784fac15bc007c9354c8"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "0bb53e7839fd47147f35690c7d8485f3"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "920a943a5a1cafc39fdfcec6d7a3ab86"
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
