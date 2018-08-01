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
    "revision": "0f50af792323be7cc8ea7a6f6682c8d0"
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
    "url": "assets/js/10.8c58e8cd.js",
    "revision": "ff0e1a3706cb20621f460f53271e73e3"
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
    "url": "assets/js/app.7d688902.js",
    "revision": "3134c6f7ec5c9e8ed554c89aba77233a"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "61122a675983fd7a976de1aa321d50aa"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "67f5b5d57193b7ad33e1fa9de55ac50d"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "81943ed45f0bb20cae56211878e03967"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "6cd43b9304a93758c5dba2d17ed1160d"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "288de8f73a730249ee22c852c3fbac80"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "231cb04ad21bf5871e80281a349bf35e"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "bf138948609fd20d500c20a122e1ddd0"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "d1ee6a2a230f606421a8c4887eac40d4"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "cb558728577c6f5fecaf65d66c7ab1f3"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "6783ddb3add1bcdf929e5722a50c0497"
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
    "revision": "6645e1a6ec4f3dd16b0292b052a52fda"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "849e03c2002c047758a4273cfe1b11da"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "1df02c37805d3155b0a1a42b5cdb8fbd"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "ec07d01f1f2bf3a8924680cc0498537c"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "d4d965a974bb30de14a17920457eaad8"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "b5f3531059a32ffc9964d0308029ac45"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "707bd9b5d5934c1ffbfafc817df2aaa1"
  },
  {
    "url": "resources/books.html",
    "revision": "8223e19431f8c31b8058f57d76f576ad"
  },
  {
    "url": "resources/community.html",
    "revision": "ddb77a46a4cca25e40ba5b34b2fc1279"
  },
  {
    "url": "resources/conferences.html",
    "revision": "fbff207e7d56d81761b65ac1c0dc7d21"
  },
  {
    "url": "resources/examples.html",
    "revision": "e96824b17a4e003db0278b51e71bf1e1"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "843563be5c50d3a5ec6abb5d16e7dde3"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "197c0d5884609135008c86a962e0a03e"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "37e87e26e6df4f64b2c096044cbe4f2c"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "58ac8ddd0651a3c44d98ab964b2ff595"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "fd8983e7a10e869ab39df39f61c029bd"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "b9edff3d5aef34bbc9eea833185f0e29"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "ab660410ecd70c2885b64f35308ddf30"
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
