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
    "revision": "c969461af3d961647cd25831bf74570f"
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
    "url": "assets/js/18.0dbb0f9e.js",
    "revision": "461d19acab27ff3babe1a28c9605f0b3"
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
    "url": "assets/js/32.7116f1c2.js",
    "revision": "d709585578393391dc550a2862f76eaa"
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
    "url": "assets/js/38.01fff69d.js",
    "revision": "b5780fec9191c87df3f8e527951e8c37"
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
    "url": "assets/js/app.85dabd51.js",
    "revision": "4a7bd064ea5e3295e9a888c5e4e8467e"
  },
  {
    "url": "assets/js/vendors~docsearch.6c6f4b7c.js",
    "revision": "80d85f27635587331d7843bd0729b025"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "bb8f4020c4543e8cb52b3eecc5999d3a"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "f8798aafaf361d8a5b7324e1cc47ed1c"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "c2ba6a69329c66118807409f5755e0d9"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "9f429d5a4875d5abbcf7d9d9be9962ff"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "0bf7a45444f9c3138aff73d46b641c0e"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "f67dc832929d5ddf74e54ef5b87a5b9b"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "db58af8a6f661defc2cde276bcee1ac8"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "a2886824661602c4092a0e55a5e0c033"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "3aa82940650d1bfaef1912167efe5673"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "9c519b7ebf624de0879a368953d8b508"
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
    "revision": "9f173dbe2a67986a196fd6232abf08d2"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "a0eb90f1054194f3073b7edb355fc49c"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "0061902893c371140e147e1acd8e2405"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "4481851de6d94427d3375973852ca480"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "787ff86ba8af79015f38280b0511cbec"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "8c62f1b75228441fe6f8f5f467b1462f"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "f0c118639fdc41a99e243fd4ef161907"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "47383f9e9ce2dace899554cc58628bfa"
  },
  {
    "url": "resources/books.html",
    "revision": "9b999eb2854fdc767f3140f0a9676dc9"
  },
  {
    "url": "resources/community.html",
    "revision": "42667191f187856127c45c73f562f8d1"
  },
  {
    "url": "resources/conferences.html",
    "revision": "2c770adfdd9e8f22c895354c6ae7e2fe"
  },
  {
    "url": "resources/courses.html",
    "revision": "103863bff8b0c6c71805d8bbfc48a8b0"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "38ffee81942160b6ba926f46f34dabbd"
  },
  {
    "url": "resources/examples.html",
    "revision": "d0f18cf480878b5a44e40e4b987ef96d"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "bbab13501d5992d51043fe631b1c834b"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "be04b887a8f2466e73d852ac32a78d7d"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "3be7b3bc3baccd3b2ee9efe2248f97da"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "dd0346c478dca2da57b28f54a5d2dc31"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "24be7105d4aa2748bd422e82fd99990c"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "bd38d0f1bc064c0989a2e411a447ce0a"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "5fc64b8b8aaeeb29cbc571571392fa21"
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
