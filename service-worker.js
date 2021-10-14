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
    "revision": "2b24300f88b88c848ed58c9edf6e5804"
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
    "url": "assets/js/10.02d10149.js",
    "revision": "45e999e6c41d3dc0d1c2f7698bcec41d"
  },
  {
    "url": "assets/js/11.37b22210.js",
    "revision": "7d826737e2b69eee920c4a3ff41f4562"
  },
  {
    "url": "assets/js/12.73731cb7.js",
    "revision": "0aa0a47dffeb2927732b28a0c55f1be5"
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
    "url": "assets/js/15.fc8ff572.js",
    "revision": "ae5721eaf316ef63bc67486d72d7b809"
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
    "url": "assets/js/9.0e72ce60.js",
    "revision": "f14d4bce776ba5bf76d574bb227b38e6"
  },
  {
    "url": "assets/js/app.fb5969f1.js",
    "revision": "905cc1da9e96d08074bc434e9b5bedee"
  },
  {
    "url": "assets/js/vendors~docsearch.6c6f4b7c.js",
    "revision": "80d85f27635587331d7843bd0729b025"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "75f2ce247c498d642ac5c9a433d6d155"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "f1762cf8037853e100d3bf145d08d91a"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "a4952808102e6e14fd904edc2ffdf840"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "d290b7e2c7d4b46191778e66863ddc79"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "3068a0c6dfa4264de9509bec2a0fe32d"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "d61c879ada72206a061c479fda943733"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "c1953fcfaf835f57e2500797bdf69e33"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "d44fdb3022be292f84ce02b905d2d8d5"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "108a18d8010d72340d8a6da348893f06"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "5eac5e62b573acf61bc5ec3fc608421c"
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
    "revision": "b861b90038dd43628e9d0f94d19c1fae"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "3a4f9706db382c011aa4a0edf2279ff0"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "d70693c9dd5d06b8c0a29843074d00e4"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "d44f84b67c74544bc0bee67f4cabc980"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "eda23f6187a652bc0a178b9bc8926bf6"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "dd34556b04d4f0d15a7243cb8416f9ec"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "4481d1da404cee0811301fc198247548"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "cd1d5f2304b3eb0c0e8962cd04f0da9a"
  },
  {
    "url": "resources/books.html",
    "revision": "b7ec972fdfe77b8877bde0caeaaf8bd6"
  },
  {
    "url": "resources/community.html",
    "revision": "a912b79a69a73f47bea36a9845597cde"
  },
  {
    "url": "resources/conferences.html",
    "revision": "a9cfb97cab8d6533cf9c74c2c8623feb"
  },
  {
    "url": "resources/courses.html",
    "revision": "a8b76323c626850404cce166d9c362be"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "104c69c6ab8e98ffe9da07b01a86ecef"
  },
  {
    "url": "resources/examples.html",
    "revision": "9f92c4040dd20dc0fc2d2fc8e0e28ea9"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "10a038e6c0a603031b05c7fe1c530b03"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "a87e23a7b58b71d0b04a586d304fb82e"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "ad67af0e0c2860dc300fe624fe382720"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "07944abbddec73d9ff3f62933bbd5105"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "2c76fb5194b0861efb65ceae62660a0c"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "b6a5103bf632dd193145de8486c7be02"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "fc690303d9cdefcbe8f5a8781cc5c61b"
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
