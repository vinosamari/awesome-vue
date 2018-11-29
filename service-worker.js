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
    "revision": "5f0b633a5e5e724dcbaada67cfbc6d43"
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
    "url": "assets/js/10.0b5fbff4.js",
    "revision": "c3b360b8f13ce00d6f83274363cc777b"
  },
  {
    "url": "assets/js/11.0d3f1135.js",
    "revision": "da72d267814a95ce7b9964949dda3c2a"
  },
  {
    "url": "assets/js/12.69ec26f2.js",
    "revision": "bdee621e47e15d80c7d5b24a3841c1b0"
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
    "url": "assets/js/24.f43bdb08.js",
    "revision": "0d73d80fff2d8f8018fe41d654bad5fb"
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
    "url": "assets/js/5.ceff4f34.js",
    "revision": "25f5043cc4a4f0e83113c7b17e7b3aff"
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
    "url": "assets/js/app.bc130fe8.js",
    "revision": "dc26790e9e23caca31bb18bf7955c413"
  },
  {
    "url": "assets/js/vendors~docsearch.c6236e72.js",
    "revision": "a47f03ed0ad284c8d5dbf0bfda64a455"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "16cf010abed9feae36a19560cb1a06ce"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "151e14203e2498f9e3591adb926fa1e4"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "cff7729946c89874665c96219d268e9b"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "cdb3ad98c0db003b765ab496b8ce735f"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "56290d1da771373f4106fb7163188534"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "fd6aa40efb045bd32e766036164456eb"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "2bea19931c0833586ac5e7c9eb69bdd2"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "5f3e1076645136bbccc3298db5f4e320"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "fcdc4f382ba893ad1592528f34295255"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "c6eef47030378d683335d469f9f5d408"
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
    "revision": "6b7c28db75228fd30318b5ae75301ec3"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "12556f0b6adb397051387b40c8832c44"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "e35895e9fb9b46db070878d055016db8"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "4e5be5c3632db0b943ea98a3db0568e7"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "34bc2bffbb2f7a9e7965c3e1546de882"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "e1993695a85a0d708c94c3edac7ade71"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "ea7699a6e3e020005106bb27c8fbf514"
  },
  {
    "url": "resources/books.html",
    "revision": "0c16a070b3cd7741b00c803a47b5ec69"
  },
  {
    "url": "resources/community.html",
    "revision": "e7ba4087e7ca80901f3a5804ad2547d9"
  },
  {
    "url": "resources/conferences.html",
    "revision": "361e8562296e17b1a8fc55cf777dd64e"
  },
  {
    "url": "resources/examples.html",
    "revision": "0211543bbdcd941d5e976a17adce8a8b"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "8d23c6300f88428a7830ad509657d705"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "a570f2f9b698e7a565ac4099674c9f9b"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "49f21c51e1ccc1ed86bf46bdffb6e74e"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "89ce08fc48b6ed36775267d6feb977a9"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "c4307b6ce6460ba11039e44f7b81eaf9"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "9b81f23883663ce9fd282bb883b4ac58"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "82d81019743790b442ddd0a906974570"
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
