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
    "revision": "65be0463ebd4480b30fa0aa706fc2a0e"
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
    "url": "assets/js/10.48cbaff9.js",
    "revision": "f92b51b6ab4c4b280238d6d7d8555043"
  },
  {
    "url": "assets/js/11.623af8db.js",
    "revision": "2dc2366ab3c0a81833cd015422dd4cb2"
  },
  {
    "url": "assets/js/12.62c76de3.js",
    "revision": "f293ae9a2f8bb98709a4a1f5195fd15f"
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
    "url": "assets/js/16.a967d5c7.js",
    "revision": "937a3c9cd7bf67dc25c5fcddfafaffb8"
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
    "url": "assets/js/20.c213ab5f.js",
    "revision": "201c03163e4de51052a849de3bf8b73a"
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
    "url": "assets/js/24.a080dc06.js",
    "revision": "b4d183b35966c88d2aaf46a3c807e59f"
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
    "url": "assets/js/5.24c54a14.js",
    "revision": "77a2879a15007043c3f4a21f686886e7"
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
    "url": "assets/js/9.2a8d8eb6.js",
    "revision": "0f60b43128ccb8f3244ea98e58b5fb62"
  },
  {
    "url": "assets/js/app.7b2ed71a.js",
    "revision": "5105d9422cc9914190122e1b7fb38f7b"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "ff7c3c33f245e0c4632cab5dc6b69ac3"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "cbd3f64c8b402d579e4ee56e534a9b20"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "0e5729b695a7f88fc2124e3df2e9b541"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "a49ec6020697872e60ab081eebf71458"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "bfbcdd66f392cb70bcc8ba0740f4bf55"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "d885510f3f9b13f2c2adb06065c899a6"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "2f99f445fc554c62a5d5f7d468cd117a"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "ef857374bb359720f42edf31f1d9b8d1"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "04e20d1c1ee8e71d1489cbe3351157f0"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "dc7dab8757614a0be0b901a735d6645c"
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
    "revision": "e09144aa40eb52d6ec73cb2e1c3c0bed"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "6da3d229bc700c21a8e406b28a19ad63"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "b818ccd1c767a3b762a655e9261ab82f"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "8008f11a6b4b8c474af2a9c5d7944a6d"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "a8f65a4c5abbd0807a18dab76a34d6b2"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "2a17050cb2cc3596a4747d79ce3c0355"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "e0ac8e16edee36c0f43759c152ea3881"
  },
  {
    "url": "resources/books.html",
    "revision": "6810ebf22fbfc7f12f8b8910731821ad"
  },
  {
    "url": "resources/community.html",
    "revision": "9099d7fdb3afc3a3d8aa47ecf44341ff"
  },
  {
    "url": "resources/conferences.html",
    "revision": "f8da540baa8ed8c828227aeda6a4337a"
  },
  {
    "url": "resources/examples.html",
    "revision": "84b381323223998b50ea6492f55707cc"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "05b8be270576d2d67460dbbdfd591c06"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "770fd2edadaf55bd20d1d2606e3181bb"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "6eb583ff5ddd1e8fbb5e050292dc676f"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "154d71cb522902ce0f510e60b55060d8"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "6b8ef79077281481e1f1a7501bd48db1"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "bce3f1354c360d57f4d325918ae65cc8"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "a9b42dda04fd0990dd6902ab365ad667"
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
