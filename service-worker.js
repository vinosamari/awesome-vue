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
    "revision": "cb3f79d60d99e9f7f5229dc1117b4249"
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
    "url": "assets/js/10.c81a1882.js",
    "revision": "e7a05e241bbf891e2d24623b22ea6d8d"
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
    "url": "assets/js/14.e9606785.js",
    "revision": "e66044ba7ca31184b9bb0b90a6de0952"
  },
  {
    "url": "assets/js/15.f53fa000.js",
    "revision": "9ab0474ff19ab35ff7f593fc179a0181"
  },
  {
    "url": "assets/js/16.391c1ba7.js",
    "revision": "e91fb8c2b166568f214a0cb5b5497814"
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
    "url": "assets/js/28.0601df25.js",
    "revision": "5ffea54a887a7cdddc2f0ca5f812173c"
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
    "url": "assets/js/32.175c670a.js",
    "revision": "21148e10b42e618a841bcfcc63076ace"
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
    "url": "assets/js/app.2e0d115b.js",
    "revision": "9f63a6c0159ec7982f7b1f3e4fd88ef9"
  },
  {
    "url": "assets/js/vendors~docsearch.6c6f4b7c.js",
    "revision": "80d85f27635587331d7843bd0729b025"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "d4270af69746748386e23a2e54c7bd9a"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "67b6c214c268841473e7fa9b42236889"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "0ba84e178cf015f80b6221687bc032d0"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "df8141f6eecacf4b9b0d5924d5de8a99"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "87142da2fcebd81ace8bcf87c3c18818"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "3b606f9fc3e209e3115c8ad2884f6b69"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "fb73001d45ce8247a64eb28ef4b8b443"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "cc30f189a40b6b99bdc7400efb0eb887"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "92dd47f11ba5ca1eb4f6e795155e60c1"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "772f9a570aca4ff4e25a227a297729ce"
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
    "revision": "b7cfabfff06ccc3e9cb9c0ca2ebd6a2f"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "291295178612daa31ca781efe78682fa"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "82faa0e45d6cff0716037f12ac7cdf97"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "2bba7f1afbbd2aee6d31419ef4bcc37c"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "6cb675c03c16f41dfde987f766c456ca"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "ca25b2596e560dee333f62e8677bf845"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "a3192ff6a4e01a211e1c34b99afec8a1"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "ee6b6f9c6f917530ba813974490137fd"
  },
  {
    "url": "resources/books.html",
    "revision": "fc22f962bb396eeb0de94552268ca66c"
  },
  {
    "url": "resources/community.html",
    "revision": "875fdbdd96bf92aeccdd12d57a85d347"
  },
  {
    "url": "resources/conferences.html",
    "revision": "4dee85447742feada4335dd7ae9d7786"
  },
  {
    "url": "resources/courses.html",
    "revision": "9b14018f6edfa6c5eff5aa764539c66f"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "552fa4a26390a6cf0d7cdce47d74082e"
  },
  {
    "url": "resources/examples.html",
    "revision": "14525ef5153f50f8701760a3a58900d7"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "da2442d3b1dd66333526652ed3d6ddc5"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "fa57cc1ce342cd8e2e9abc21dd4ae952"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "4f87e149493ce77fea2b4a2e9d7b6187"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "73ab02304f2bc54583603cbf112dfe16"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "4abf04ec82f4ae7a55f3d1b8a5ee237e"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "9c0c9cb8d8ed581eaba987663e350665"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "02e5dfb067c5d9d424a9d8cf0322d80e"
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
