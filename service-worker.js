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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "25e51b7532f37f04c5e43e7e23ad0076"
  },
  {
    "url": "assets/css/0.styles.83d3ab16.css",
    "revision": "08e41451ca6e0767b468333f7650a3cf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0e9fcdd4.js",
    "revision": "2ba3f6ef9b0ed621f8a0f2e2780dc225"
  },
  {
    "url": "assets/js/11.623af8db.js",
    "revision": "2dc2366ab3c0a81833cd015422dd4cb2"
  },
  {
    "url": "assets/js/12.b860376c.js",
    "revision": "0334277433ad24c462b9baf946143a72"
  },
  {
    "url": "assets/js/13.cbcd874d.js",
    "revision": "2b626ee0d590ea90825d042916a32b2d"
  },
  {
    "url": "assets/js/14.33e7cbcd.js",
    "revision": "9ddfdaf900233e89f2cedf248534bb7c"
  },
  {
    "url": "assets/js/15.6fcd71ec.js",
    "revision": "d2baf048510bc0efcf0c286b0e247ae7"
  },
  {
    "url": "assets/js/16.0725649b.js",
    "revision": "ac67050f619b38a7146991ff013694e9"
  },
  {
    "url": "assets/js/17.606c0d35.js",
    "revision": "81415b4ab88477feeaa5647fb7598e84"
  },
  {
    "url": "assets/js/18.a1aabf6f.js",
    "revision": "4e72e5453f9edbddca1ebfe5776d266c"
  },
  {
    "url": "assets/js/19.7e029e95.js",
    "revision": "1b7447054c7b8fc2a8e919540f53ee90"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.8ee84b50.js",
    "revision": "5d7983755295b79b35b3cdb90d35e2e3"
  },
  {
    "url": "assets/js/21.86f70854.js",
    "revision": "55b90ec24c02c5a4d87727b527ee664f"
  },
  {
    "url": "assets/js/22.56ada333.js",
    "revision": "7c3dec955ec66c0a154a3a0ca07ce74c"
  },
  {
    "url": "assets/js/23.4d713b1c.js",
    "revision": "2bd7a3dad8972e5588ddf2df6beaef24"
  },
  {
    "url": "assets/js/24.2bcccb3c.js",
    "revision": "68e1b46c4131dbfcd5201282c330ad58"
  },
  {
    "url": "assets/js/25.29da0185.js",
    "revision": "49e74447543021aa2075139dbfadb061"
  },
  {
    "url": "assets/js/26.012ddb8b.js",
    "revision": "25f5b1c8bd56e7e9c0dd0abe426bfaf6"
  },
  {
    "url": "assets/js/27.51a7cef2.js",
    "revision": "d3fe82e06950ef9f7f59495a450f388d"
  },
  {
    "url": "assets/js/28.608c86cc.js",
    "revision": "9f2fc498108835b360f2b0082a19e640"
  },
  {
    "url": "assets/js/29.90b908fd.js",
    "revision": "6613dd951e370d11b3935b19fcac3b6b"
  },
  {
    "url": "assets/js/3.9baff14b.js",
    "revision": "314b8e96e769542397a001cb23e4f9a3"
  },
  {
    "url": "assets/js/30.cdf11cd1.js",
    "revision": "d307a5a189b0e6ffce88f2daf9e90d5d"
  },
  {
    "url": "assets/js/31.3ad56195.js",
    "revision": "c3ae8311d0fedf79e6e9deea1fbf26b6"
  },
  {
    "url": "assets/js/4.fc05f7a4.js",
    "revision": "5e77995e2da47810be1a11d8d028003c"
  },
  {
    "url": "assets/js/5.63523e1e.js",
    "revision": "211ca90931f8a2cdb53ed8783dcc5fb6"
  },
  {
    "url": "assets/js/6.2ed85e0a.js",
    "revision": "245756bc73ccb3d95386723a79b8610b"
  },
  {
    "url": "assets/js/7.b380769a.js",
    "revision": "bc0d828a6583bb7f39b35c832051f32f"
  },
  {
    "url": "assets/js/8.5ed27bdf.js",
    "revision": "f235773318ed914c2ba5ee5c7068fa83"
  },
  {
    "url": "assets/js/9.890efa7a.js",
    "revision": "4534e11e0fccb1a120a4ba1c1851881d"
  },
  {
    "url": "assets/js/app.7cdd9fd4.js",
    "revision": "b485afdd2f3f962d53317166d142744b"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "5e6f7c602b8a9404e0bab00dddd0ff25"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "8852ad8abd0fe19f70088e592eca43b8"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "917344c687fb11865896d7845c8caa45"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "cf1e101ce7f6f087d4fe86e9e6bcd7f9"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "5c21b383700ceff22fedee33b39f858e"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "65a46924a83b236e60b33e35a9db8eaa"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "fc930a50de73f4d69da9e3b63c9dc518"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "2f438e97eb903ff443a184e81abe6031"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "6b8da1742a7df046d82b3763c91d8413"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "4788be5d8ae852cd85c39398ba9db4fe"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "7bffccee82e15b856ff052661ec2c132"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "39ef4093fc7535453340c96dae8e36bd"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "82f2c029d417cf7f9561953401ebc752"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "3d712402c31316fbdb209697f8f1a6e7"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "41044f76cf4187b32ee5863ed08a9c39"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "33151d0e3f0b05e4da512f0d9cb5c817"
  },
  {
    "url": "index.html",
    "revision": "e01ae78d0b4b216dbb0c93e0f0846954"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "386c1aee1da703b13ae7beacdc10fc18"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "40183c60d1ed7346f7706b34e6776ec6"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "537df096484037b5fab0d6bc3b7786f3"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "882ec7b1f220addb5433e3a8f4c63897"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "a504df9c310f0821a42719061d9b3e1c"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "d197243102506fede05a013d450fd87f"
  },
  {
    "url": "resources/books.html",
    "revision": "a0d8f108fd9fd2508f202d61f99cb301"
  },
  {
    "url": "resources/community.html",
    "revision": "25701bc8cf516955a7f1c8256d361ec3"
  },
  {
    "url": "resources/conferences.html",
    "revision": "b99e0bd51e49ea63dcbeb996d29c01cf"
  },
  {
    "url": "resources/examples.html",
    "revision": "b1efaca04b1879905fd5d36d0d7b7fbb"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "f94da36be89c3c4d18fb5e2ffafe5e39"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "ad17291251f1951ba244a45d7f5d6c14"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "6bca92d7e067d9222e2cf58f7d7ae202"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "8113fbde8034697bbb0977f83ec311d7"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "38f7e45f84e48aaeb46f52b1d876a57b"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "de87a17cefbb09c9c11c117d237b9320"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "23b4423eab0f3950f6573c7907340644"
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
