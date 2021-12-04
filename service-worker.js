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
    "revision": "094a2f5d0f06be182cb37555c58c53bc"
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
    "url": "assets/js/21.362bc0c7.js",
    "revision": "5a22d47b8712674c5410304aae9b5f18"
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
    "url": "assets/js/app.ed81f288.js",
    "revision": "c935eec976326b1d94a963b50b13bb78"
  },
  {
    "url": "assets/js/vendors~docsearch.6c6f4b7c.js",
    "revision": "80d85f27635587331d7843bd0729b025"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "e96cca5e535c7cb1ccace85e8c728a94"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "041b2c1b3459813e9ff73a87d9098008"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "affbf7de412cbc47be9865869b3f3f7e"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "4349d297806542dafd707d60a5c10dde"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "fa0234e16aac26022d8454d4e78d2d98"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "6b653ec888c5abb7f2502642ef06a2cc"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "1b2cfc503890f15a1783b85d1a57ae4a"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "279e02cb4c6eba6e54f7d756e1950fa9"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "3ec3b757bf2a3a254c5e4cb178581f71"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "cf223ebba7285fb398973f4cc6a16026"
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
    "revision": "dba185f7dde045adcc95bf86662e467e"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "a44be492272394ebac4f182259122810"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "c184dc19a462f7651e7fc8f78f22e9f5"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "8bbe8561ac37f382367a4e25f0df6699"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "d1fd8db5e9a08767e8f1a13789400c4d"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "19cc7629f967b51cf36408a6a6727a07"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "d7478cc5c41eda4d85a1171008926ca8"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "45d709172326c47e53b7787ad19b2ba2"
  },
  {
    "url": "resources/books.html",
    "revision": "3ac6f115358accd5e857df5911a17ffc"
  },
  {
    "url": "resources/community.html",
    "revision": "9fc9f06a5ca6b2a5d6b4e445c2d91d71"
  },
  {
    "url": "resources/conferences.html",
    "revision": "70c25d0ee00450f3ce5c4433d4ee4048"
  },
  {
    "url": "resources/courses.html",
    "revision": "5ec2208f6c8026200c04e4d4f3f7109e"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "63b0b6e9a9dfd1d4a7f1a517f44fda92"
  },
  {
    "url": "resources/examples.html",
    "revision": "8b1322c08f4747a914e02727071e5c9b"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "0ef94034537edba46efb88127ff34185"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "53a39e5549548e79c2e155337717b511"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "d57c4779ba331725baec1f79a1e66404"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "6e0391830a6d538fd0f9009d64a4faf7"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "3d77cd4973b5ae313678b36e04d267c8"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "4e8934e0d7256859277d8d38aeee1f07"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "997acd656627f92ce3282d2591ada45d"
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
