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
    "revision": "f1d733b9859aff9a7f9bac706edc1bcd"
  },
  {
    "url": "assets/css/0.styles.a9d47db4.css",
    "revision": "1cf788e5055372fe632a1eba244f314e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.10e63525.js",
    "revision": "9d282d1d5ef4ac050b97ed9123b6f0f1"
  },
  {
    "url": "assets/js/11.f0b01372.js",
    "revision": "1a50ed91ef66b023fce122ec26b2d22a"
  },
  {
    "url": "assets/js/12.571194ad.js",
    "revision": "11acdbb186015cd01c145404d48c3250"
  },
  {
    "url": "assets/js/13.f32619b9.js",
    "revision": "16f19cd0ae43bb1d55692fab0bc005b8"
  },
  {
    "url": "assets/js/14.0a6c833c.js",
    "revision": "0b6540d636cc6e7430f9cc1ac756d9a5"
  },
  {
    "url": "assets/js/15.02ac812d.js",
    "revision": "6405de5b64def3cbb7cf6dd6b8547e02"
  },
  {
    "url": "assets/js/16.e0691bde.js",
    "revision": "4aeb1049f893c2c873fb6e31a14683d7"
  },
  {
    "url": "assets/js/17.eb59a860.js",
    "revision": "eeec25404182781db925967b02333dab"
  },
  {
    "url": "assets/js/18.6cb448ff.js",
    "revision": "dbfdbe29a03377b3c6edb1e3595ab058"
  },
  {
    "url": "assets/js/19.d91cf701.js",
    "revision": "2d903ea5e779158519b24293a40c227a"
  },
  {
    "url": "assets/js/20.a38f6790.js",
    "revision": "6ec2df38fd6ad0ff99c5c771956970a2"
  },
  {
    "url": "assets/js/21.31de888a.js",
    "revision": "73c5176906451d1702008e028bc1b3cb"
  },
  {
    "url": "assets/js/22.a84f9df5.js",
    "revision": "9660432516e8430ac3d66dc2f92b120c"
  },
  {
    "url": "assets/js/23.e08aae83.js",
    "revision": "21df430111357dee899fe1606c3a7872"
  },
  {
    "url": "assets/js/24.8f06d808.js",
    "revision": "9886ce1ee2e799d09abfbe5ced0af854"
  },
  {
    "url": "assets/js/25.59febc6c.js",
    "revision": "957eda19bbe5d5c5e50dc03938539b89"
  },
  {
    "url": "assets/js/26.62041a5c.js",
    "revision": "d286b1a3e487f99eec87115e97514709"
  },
  {
    "url": "assets/js/27.c2099987.js",
    "revision": "cfa49932059a425b801dff0c459feab7"
  },
  {
    "url": "assets/js/28.b4283c8c.js",
    "revision": "06787ca7b4c475b97d8bed33bee69f10"
  },
  {
    "url": "assets/js/29.43da7b95.js",
    "revision": "25dbb285f7be83d32bc35d6d0a7796b7"
  },
  {
    "url": "assets/js/3.53ac99fe.js",
    "revision": "ef7e12047e1400a53ab386f9f7b1270f"
  },
  {
    "url": "assets/js/30.01c8cc7c.js",
    "revision": "f9c85861e45d2ac2d3068c6a27d74431"
  },
  {
    "url": "assets/js/31.545d5a9f.js",
    "revision": "5a11e209bff2796821cdff73b5512240"
  },
  {
    "url": "assets/js/32.653089e0.js",
    "revision": "a930a849c3751a7e256cb81ed3e9bb76"
  },
  {
    "url": "assets/js/33.72817d1a.js",
    "revision": "a621e5dd1b0853b26fdd5c9a4da06675"
  },
  {
    "url": "assets/js/34.b0c09f38.js",
    "revision": "c8ed4973d375ad8c41a7e13bacbda770"
  },
  {
    "url": "assets/js/35.b0b9b834.js",
    "revision": "c937dd0c762cde824e3d26dc736ea129"
  },
  {
    "url": "assets/js/36.87b3565e.js",
    "revision": "51f16c7d869ffe6ed219aad36b4b77fd"
  },
  {
    "url": "assets/js/4.7d3a193f.js",
    "revision": "210f267dab14ad32647a3d98a1232662"
  },
  {
    "url": "assets/js/5.56695c71.js",
    "revision": "11bb2a6dd0a6eba405db14a6f812d8b0"
  },
  {
    "url": "assets/js/6.d64d1c96.js",
    "revision": "a5f3abbd3d1e73ba649ee15aeeb878bc"
  },
  {
    "url": "assets/js/7.eb6c75ea.js",
    "revision": "8a15345bc9f3c8ac3c7697279941cce9"
  },
  {
    "url": "assets/js/8.527b555d.js",
    "revision": "c892498fb3c9c0bf970acec46ace541f"
  },
  {
    "url": "assets/js/9.c8c854ee.js",
    "revision": "d0b2a1f8d462d15f89359bdd700512b7"
  },
  {
    "url": "assets/js/app.21266160.js",
    "revision": "2d2dd5650631724cde7b4fd82b01dc57"
  },
  {
    "url": "assets/js/vendors~docsearch.4a9d9afc.js",
    "revision": "5eaba87c46cf5f501aa1d4ca2a8f61b3"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "0256d1f3d7c1b1062690a8da789617b2"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "82ef040173f2888e3991de41fbac4175"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "672a81093e1c015c2bc7df19b605ff61"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "6dde02b4c0ac973179f62f5353b10629"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "74ab39dc70a3e2ca37d670ce8a09b439"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "b5394bbcd7cdfa50abc42f96a3e29efa"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "9df22591a31772668cc9507f26cbed52"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "e3f579aee0140f7b1804ac66c801c25f"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "eb215881af66fe2345448b010952ccfb"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "0804e299a89327efe6c6328d0c76eb86"
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
    "revision": "8cd44de4f7c5adb0fa68cdf0b6da0174"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "81af2ad4dba9ee1095ecfc1b112c48d1"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "e25882e9e233e6026996fc5e181d1598"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "e9319e0961f3d38806329c91d792cb29"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "92d127f938f97d1de267805aacc1af5a"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "f130fcacfd6fec27ad7a74dec9c27974"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "09e18dd472a01b11bb89dbf61757ed4f"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "b00d94291393cfed2ca97c8b188084be"
  },
  {
    "url": "resources/books.html",
    "revision": "09590a4a721eae4423111d379907c6de"
  },
  {
    "url": "resources/community.html",
    "revision": "fa807e4d0ad0e6675af1c453a2926afb"
  },
  {
    "url": "resources/conferences.html",
    "revision": "00e88a25401a16a06fffc58ba7e4446d"
  },
  {
    "url": "resources/examples.html",
    "revision": "b0ee6fbc0783ea1abf2f7a1e179270b9"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "6f91343b9c692e8dfd5447eb5dca57db"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "01f058f9c705eba8ae36f1ff6fc340a0"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "8b74e6a515670752681cc96932311ddf"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "baa7690cfb6f214adc249789fd7c3e65"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "33c33da72dbdc43d06c33adef711983a"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "ec43f63a2d9879c2198022e85c11be60"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "3150b3d6b00bd77392eea378acf2ed64"
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
