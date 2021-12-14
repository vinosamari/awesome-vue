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
    "revision": "c98ae2c5552af55dc7f1ef710f9a9709"
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
    "url": "assets/js/10.754f5da7.js",
    "revision": "c629f9d55480f61ea44b0b1c9bf19e7e"
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
    "url": "assets/js/14.87fe3661.js",
    "revision": "bf3f4b6762323c5d8781d86f71076c75"
  },
  {
    "url": "assets/js/15.c08d568b.js",
    "revision": "56d9a94fdd5d725ccbc7530eb54d31ce"
  },
  {
    "url": "assets/js/16.38bc86f1.js",
    "revision": "50d42c1aa8658be55132e717814f6d55"
  },
  {
    "url": "assets/js/17.82b35549.js",
    "revision": "adc952f8e51f5b005e795853082eef10"
  },
  {
    "url": "assets/js/18.8345815f.js",
    "revision": "ee59aeaae5a924f57fb2d83cac2f8bd9"
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
    "url": "assets/js/21.362bc0c7.js",
    "revision": "5a22d47b8712674c5410304aae9b5f18"
  },
  {
    "url": "assets/js/22.24be59a8.js",
    "revision": "409d8cec94d5ef2eb96f50a94f01d167"
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
    "url": "assets/js/25.5855dd3a.js",
    "revision": "94a405ea4c70735cdedf256bdbdeda16"
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
    "url": "assets/js/app.5287b45b.js",
    "revision": "a3c53b78f5da0826a1eb2a9a5431bdfb"
  },
  {
    "url": "assets/js/vendors~docsearch.6c6f4b7c.js",
    "revision": "80d85f27635587331d7843bd0729b025"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "9c5fa83edbd11d2525cc2b847c5ab08c"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "35076802d122fd5833cc5212c817d340"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "87a7ea2f1b30bb52c2f653e1fbd47862"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "016a3a201a7463d0e96d8131579e23cf"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "7e2ac9605331371b07e9b5586007e2e3"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "93a99c8510adef9ec2b445c5087e7c1b"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "013078b3036a89aa1b62ce0519d6956e"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "9bdcd17e1b0a0eb5b8036f8dcfd8b964"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "7da6b65cfd8eeba81c9ff54cd62c37e3"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "eda07750b2bf3843fd1f356a1c8672a9"
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
    "revision": "7a5cc81007bd1dd7e024fb19fdc0c863"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "64e67afbb862d42526b808219edc5874"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "841b058a84c1bbd5a56b1f981acf4a93"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "19f0f098191d61cbfd55bf8c864667fd"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "c9c84e9556cc273fa89f4829d35b2f64"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "56c6ed43e4f6e20167f0a4a913f44bee"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "3dbe0717f3617b551683a56fd3be20c3"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "05c00526ec7c648e25f5e9eb272f1414"
  },
  {
    "url": "resources/books.html",
    "revision": "e1057d35d1cb39832d94c2eb0033db3d"
  },
  {
    "url": "resources/community.html",
    "revision": "80fd7c98ddd23dbdb16aabf1f80163fa"
  },
  {
    "url": "resources/conferences.html",
    "revision": "bb206fc7e24101acc288993be2d3a41c"
  },
  {
    "url": "resources/courses.html",
    "revision": "0f3614eed0eccb2565c5af3e1fa53377"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "6bcfa131c86bae00591917a1a0fa0366"
  },
  {
    "url": "resources/examples.html",
    "revision": "752d610f625f5cc7a4452c10b4e8db39"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "6e73daf9493ac7b17f512a18cd86c755"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "5134f57d875cc643e5bb2cba66955a84"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "a587750f8b82dff9af27543f42054d14"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b4c38ec0412cfde65a1860d4cbab2644"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "ca87b2778e80a63dd99745560b6ee433"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "ad5724858f73aef853b37113b7c5469a"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "0ac018ed07cceafa05e25f6310f1dae2"
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
