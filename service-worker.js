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
    "revision": "18bb6ef13934a3bba00362b30f6f84a1"
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
    "url": "assets/js/10.85dc1911.js",
    "revision": "1ccfac8df267c1a7ff93f4c64ddd0332"
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
    "url": "assets/js/16.afee11e4.js",
    "revision": "e21e1a8b4b5fb83617e08195a3fda538"
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
    "url": "assets/js/app.f635023a.js",
    "revision": "14d58c2ee989b92ff427649d8fd870e7"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "ee01c7970f58fc5a8df08f372cd488f1"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "59751c3cd1fe48e000feb872f7dae6e9"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "5e786943fd16990bbce85465f4e483aa"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "783b4bd60031d05cacf8162582e965ab"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "b1d0aecb38f08e38ac6683ddd4a292a3"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "f168de500907dbfeb71e0d0c0c33a9f2"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "f138bb11a5ce918b1d66e00bb50ebeb5"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "bd22c4fa086781663d65162dd7f314fa"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "f7f4cf9aca06cb3da4457477c7838af0"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "14107b69dc67fb46e20623d335e46201"
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
    "revision": "dacf6c0edda78fb94495247606db2f16"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "80973989ad910624fc055ff59e40bd49"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "2dbae1bf0ceb20c959a3b779235c2c39"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "20c2b3006d6b2c9a2ae3af031a999feb"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "6f0bc5dc95909f0b54a72b2430f25b6d"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "0d1f371ddd3adaab0fc78acdddc93028"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "4b12f9d2575fe9596cdb7597f34f1155"
  },
  {
    "url": "resources/books.html",
    "revision": "ee64ffaaa8c3fddac3686a803eebfee1"
  },
  {
    "url": "resources/community.html",
    "revision": "37ae208df5660cbb5ef200a1586fd3b6"
  },
  {
    "url": "resources/conferences.html",
    "revision": "878bbb8554dba92ffd282dc6d489e685"
  },
  {
    "url": "resources/examples.html",
    "revision": "4cd7cb692de98a2e3926d53848496441"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "e5ae2323b28573366078ae0e79d29aea"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "45cfba5cbd16d109091405af363cc492"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "69d68098a0d3e0fdd04bf30eeaf8cf8b"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "f0996605d7395211d7362647be1dac7a"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "fac650e0af53426882232081d77dd643"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "91ec96544cc3cc37662b6d9a1a40577b"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "5a15c80a5df8ef80690e42d3ab458298"
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
