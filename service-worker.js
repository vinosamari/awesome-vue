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
    "revision": "d5f47fa86447771a339dd1aa1bd44544"
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
    "url": "assets/js/14.437b2b20.js",
    "revision": "a51e455e018c2a6d3bda3de7d9233884"
  },
  {
    "url": "assets/js/15.afb400ff.js",
    "revision": "800b2a82febbaf23aeeb00757ff387e5"
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
    "url": "assets/js/25.8a490f25.js",
    "revision": "1d6d50d0dc163aa200198785b385cf8c"
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
    "url": "assets/js/app.dc41c457.js",
    "revision": "dc2108a2db02bab7394451af7f53889f"
  },
  {
    "url": "assets/js/vendors~docsearch.6c6f4b7c.js",
    "revision": "80d85f27635587331d7843bd0729b025"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "5c01ee9cd33428dd9cc82a2ef86df3c2"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "3acf8bc6513043b177abd9952fbcd19a"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "a3b7016cf678692f6713c1150a8f96ef"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "abb5441e4be3bad347ede91043be75e3"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "e74e110034c59a7909e15e49b526c1c9"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "fada32a5629255c3ca1fdb1d22cf1fd2"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "bfa0f577fc0ea150205223efb8d5d7f6"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "e13355856510d28f2ec64ee2ed60a5a9"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "890efd37026013ee21d6c1257b755f2f"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "278c90349be98182b142b174a513c1a8"
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
    "revision": "02c70a8910099eef89400d8d7ea4b505"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "049408eadd0224402c6bfdc817e78116"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "033a0052d8c8ddfc3d51f1648638d204"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "c5e8988d74e023254f84be7bc163e723"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "27ff055367256e0c0fd5884e17db7603"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "77d025549547aa2bd40255f52dbc8778"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "9fe73b7d524b8e17023636f57e5dc84e"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "2b2d3dd07856479e3b9e7027e0074e02"
  },
  {
    "url": "resources/books.html",
    "revision": "c78bb063d3699c51e27a02ac786bb83e"
  },
  {
    "url": "resources/community.html",
    "revision": "3d0a3ed4d1eac51b9536889f4bea2042"
  },
  {
    "url": "resources/conferences.html",
    "revision": "f2011849e8065d47c6223485ce85bdd3"
  },
  {
    "url": "resources/courses.html",
    "revision": "44b6951827d14297bcf9fd259b798fb9"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "27e80a84cd26043a03c9a1984ce6df2b"
  },
  {
    "url": "resources/examples.html",
    "revision": "a9ef67de59b561c906e89d676c97082d"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "cc2097f35c856b3697123b6501c1cb43"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "3106d0d522ffe2e62aca68941e7c7749"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "e46f1ac72af23aae4379fc569db6c4ad"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "0da2bee5b1829756f1f7bf24504fac9f"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "2c20a880b3c153b4bee38cd3ea87e4d5"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "eb82943feca779e594e8120436b5c87c"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "15ab8bbbafdc2031ebb5b10fc0c824a8"
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
