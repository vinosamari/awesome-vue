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
    "revision": "86835377b2b4744e745acce7e11843fb"
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
    "url": "assets/js/10.81eb452a.js",
    "revision": "9054fe7fd59caa609f938e57e27a53ae"
  },
  {
    "url": "assets/js/11.623af8db.js",
    "revision": "2dc2366ab3c0a81833cd015422dd4cb2"
  },
  {
    "url": "assets/js/12.77d3b244.js",
    "revision": "2b50802c119fe77d5e98613ead0275e9"
  },
  {
    "url": "assets/js/13.4da206f8.js",
    "revision": "6a57ced07ae39a124b56af9aabc65ae9"
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
    "url": "assets/js/16.2ec3ab34.js",
    "revision": "91a7277bcc7319cde65484c031234bea"
  },
  {
    "url": "assets/js/17.990f1381.js",
    "revision": "35447f7f7a81dd729b0bad1eb4dac89c"
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
    "url": "assets/js/5.ac4e6527.js",
    "revision": "cb410bed8326ed93843c6793ee616d1e"
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
    "url": "assets/js/app.97368d36.js",
    "revision": "478e7f4f1a273074dfa5a9c09e36f58a"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "cfd822b744b1419c61bac9658f2da256"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "0aa6eac8c0787bddde61a987d33581c6"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "61a39df11b222cfda2a4721d1cd7b981"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "e402375251b1bad8978414e25a3cd265"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "8f9f3f61bf027581b3d25936abc85b46"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "8dc7d54608b310b285e5ff86b75438a9"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "d59f61f318b5e3aac6031fa31dc08eb0"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "04130c6162083f090a0e277975246601"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "20cc60b250b477d2644fd7fc76af51aa"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "1c31133cc499dffeaab893d098a6ff2f"
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
    "revision": "f322cd5a6d64680c3542a4cec7eef353"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "ca50da073708887959559c4d139d875e"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "fec7d1aae4d4c88880e1531b3b463b01"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "82f79b77bd467840d2ae4e44ca36bb17"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "56cd588ef7fbde674321ec3f7e4adbd9"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "24fb15f5fefd1b0bd050a69e05663fad"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "f7748055465b8badeec9455f1314019b"
  },
  {
    "url": "resources/books.html",
    "revision": "abdc2fa559e028c82306d3748db2ccd8"
  },
  {
    "url": "resources/community.html",
    "revision": "09d5c2dd3f28837ff655853b4e5d1a67"
  },
  {
    "url": "resources/conferences.html",
    "revision": "38cfdd584d3d7519a19c8e65a1985f9b"
  },
  {
    "url": "resources/examples.html",
    "revision": "1ceea44e9964b943985ff967de7581f3"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "c059c5421acf73ee824708d659246489"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "4feb1db0c7bbe659ceae4d97c4c0510e"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "da1b042630d29d64d9dc2b0eab051b76"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "4e46ee82eb418cb6cf3b875b48dc9177"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "ee8df3a264341cbce735130b5f110481"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "80e73bf2b202fec473e89e482dc5116a"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "62be54ef09628c1d5752e7d70ae292b3"
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
