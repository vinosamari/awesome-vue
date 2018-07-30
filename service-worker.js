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
    "revision": "fcfc305f25c324e70935abe21f93293d"
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
    "url": "assets/js/10.0044b109.js",
    "revision": "5552870c1135e4982b8efdacda27ded2"
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
    "url": "assets/js/app.4f7ee505.js",
    "revision": "a29bdebb2355cc9bb3483c08505b1c1c"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "ff54e87d18eda8fdd385fd2f346c61f9"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "b84b05179b4bd9b6e432f5b47313caa0"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "72a76b5cf685864fab08eb405ec60a9b"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "3d49f04f1510f5817ca4be5714ef1bab"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "1efa158180d7e57d7f086abe528f33c5"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "3199b9ca50f7f39890d0ec49c117a130"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "71ee44ac78a3f5a93b490e892e480089"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "9b7afc88a81ed3363078e689ba67683e"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "257073871c93fd79a91c19cff7a8cd16"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "0739532150ca2e5a29406c48531a4ec8"
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
    "revision": "5da1902d3bf5e8bc1793812574f0150f"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "e4c0cd84ef4e89ba187275e172a89f92"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "a12b368b8f4ee6d47b0507f4a92ae0ad"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "a8587999d1afbe4c12e90cb95ac4612c"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "22618e8ea77b2685928d5b06412aa8f2"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "be4c02e72ae426f4a4858382e7624bed"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "41e5e8e498ff23cea08c64ee5512b71b"
  },
  {
    "url": "resources/books.html",
    "revision": "1fc96f2d2b8ae8547b966d936f7146fb"
  },
  {
    "url": "resources/community.html",
    "revision": "0879b9f5c4c9df59da90952ceff65064"
  },
  {
    "url": "resources/conferences.html",
    "revision": "46f274cc1f971f0568cc626808c67cab"
  },
  {
    "url": "resources/examples.html",
    "revision": "bfdc34bb72889956fd5bf5499b7edef3"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "bca22cac94cef48910f1500d9456d5bc"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "8adca373e900c160da0426682a3909ec"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "cc895604b7e167a5f3db9b99103aa99c"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "c235be5287ad6debe276a9b0df67eefa"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "e41e5819f3d3868ed3af656894d9b37a"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "71459d04f92e820a0455e7173e67634a"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "91facc4d4ec55df84a8d1789bad97bbe"
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
