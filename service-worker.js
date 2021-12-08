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
    "revision": "1e60d9f2494cf443213efa205aa3dbfd"
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
    "url": "assets/js/18.8a22e86c.js",
    "revision": "538487f50731553e4e947074940816af"
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
    "url": "assets/js/app.b2a670be.js",
    "revision": "079f721523f29030ca325a9d35068d59"
  },
  {
    "url": "assets/js/vendors~docsearch.6c6f4b7c.js",
    "revision": "80d85f27635587331d7843bd0729b025"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "12045afee58790a5000f64616a46a5cf"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "818394403c5dce79d711d768c6a5f638"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "0ba1a2408d1a16f260f48cf5e72f4e84"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "de716258073c9ff4236d93301a46a0b5"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "9d439b48e47dee459b18738f65bed13a"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "4b0286f673edee92e940c29b4bff5de6"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "9d20a39c182a898a74e3c85614baa44f"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "1fefd0c12518c097ab4e3c2219c63540"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "df9ec3d56027296e6a40260730fae096"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "f42ec6bcea470dea119c54bb64d17328"
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
    "revision": "9c30fa9d62fc88f30983ca3297520a42"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "5db5e3f370f434003584151159b2f92d"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "c36f2e390df5ac112ec5b69e35e7d20d"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "ede35bffb5d4fb33585fcf09fca40c45"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "b5d28a187cb6ca51e480787274edd218"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "eca4a7f1cd85fd52b28dce26281eefd5"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "5e70292bc461da123c384897d57c1dda"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "3def0bb9a63e884c20d17e56d5e8367b"
  },
  {
    "url": "resources/books.html",
    "revision": "24d46b7654737802befee4edd349c6e1"
  },
  {
    "url": "resources/community.html",
    "revision": "d65335f6513b0e443753df65329a4b8b"
  },
  {
    "url": "resources/conferences.html",
    "revision": "155848c6b83bb032f84abbdd4ea8e743"
  },
  {
    "url": "resources/courses.html",
    "revision": "28b4f9d531a49dca16a0818739e06fe2"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "028b83397541929ee6b00b7c95182b1d"
  },
  {
    "url": "resources/examples.html",
    "revision": "a428c5e8dcd9bb73dce13976dc4862f1"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "724284efe58bb8dc5a4fb193955f8860"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "d4412600093867eff5cc301878f6b6bc"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "913879ade024571703370472a3275d67"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "d274da1fb24959cd0a5d6ecdd0b2a9bd"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "90a7e0c37955422a8f0db2963d753122"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "8deaf4685683379755cd3707a1ee9fca"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "9fdce5ceb001696693ba9b87cb48cd6d"
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
