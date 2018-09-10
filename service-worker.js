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
    "revision": "c676c466743de1c12e1e5a39ffa25d63"
  },
  {
    "url": "assets/css/0.styles.4568b041.css",
    "revision": "2ed4c8df4ff33bc36857f179247b429c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.eb84fda1.js",
    "revision": "cbac6bde603d230a39630ffeb7c105b9"
  },
  {
    "url": "assets/js/11.8511181e.js",
    "revision": "a7cc8f8c63689f312bbf50899c83c819"
  },
  {
    "url": "assets/js/12.958ef262.js",
    "revision": "46b5d239fa78cac377066024e65dde79"
  },
  {
    "url": "assets/js/13.5e414734.js",
    "revision": "77953222b8e84f17dbd5fb79d3a5c608"
  },
  {
    "url": "assets/js/14.bfad0bf7.js",
    "revision": "ddd69a2cdcf26d38e7ad808e207f58e1"
  },
  {
    "url": "assets/js/15.ae3d843d.js",
    "revision": "3ee6b6c906aadfca88ecbc13eb319f14"
  },
  {
    "url": "assets/js/16.7eb37fb2.js",
    "revision": "226d148a60bbb2b6435dfa8dfe1413fd"
  },
  {
    "url": "assets/js/17.e35ff57b.js",
    "revision": "3bccd000a8b6c6f02b419388b6b73172"
  },
  {
    "url": "assets/js/18.daf0754a.js",
    "revision": "ac5ffab1f635bb7f509e5f7809362ef0"
  },
  {
    "url": "assets/js/19.62907eea.js",
    "revision": "2c30819693b0cfbcafe221a2153e6192"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.a7e997fe.js",
    "revision": "f3bc7e8e141a56e57161d081d93cc70c"
  },
  {
    "url": "assets/js/21.b23d6f3e.js",
    "revision": "885db4dc724e2a0f9e6ac715ec0dd674"
  },
  {
    "url": "assets/js/22.e894fad6.js",
    "revision": "61c3263edc3bb83a6b952e600f5db7e5"
  },
  {
    "url": "assets/js/23.f1c8cf11.js",
    "revision": "c728940c0215d12394474772d287b440"
  },
  {
    "url": "assets/js/24.1c266960.js",
    "revision": "249741a8ad6bad4aa235e6b0cdc37fd8"
  },
  {
    "url": "assets/js/25.f4c895a3.js",
    "revision": "cabf102a6bb98ddfa0124abd432ce162"
  },
  {
    "url": "assets/js/26.92636580.js",
    "revision": "d2a37f24b7b7e6880ebe7d62844f5360"
  },
  {
    "url": "assets/js/27.fa05a285.js",
    "revision": "c9f60a511abd5192b2044a175f9797a4"
  },
  {
    "url": "assets/js/28.5b53d3ec.js",
    "revision": "c4a92b6cf7e726a18b2a666b746f05ac"
  },
  {
    "url": "assets/js/29.507f92f1.js",
    "revision": "05f7fd4ed32b82acf1e45e5563d08f73"
  },
  {
    "url": "assets/js/3.c95546f0.js",
    "revision": "015098ad26b05f91df9cf99db480d128"
  },
  {
    "url": "assets/js/30.13c71c90.js",
    "revision": "9392ccd9ba1db9624392c3ee7fe56527"
  },
  {
    "url": "assets/js/31.96a97c36.js",
    "revision": "9e5a7ff3ca9789f417a09254ec1af5e3"
  },
  {
    "url": "assets/js/4.2cafdfbf.js",
    "revision": "c0f55ceccd0df82b990fa87b0b601b2b"
  },
  {
    "url": "assets/js/5.46b30efc.js",
    "revision": "49a52dc65bbb9818f08996b7c8af4f2f"
  },
  {
    "url": "assets/js/6.eb9c11da.js",
    "revision": "1f38c7252f887bbd3b6bfa2d146487cf"
  },
  {
    "url": "assets/js/7.8ce7466f.js",
    "revision": "467d2f1f090a7458127576463e544d65"
  },
  {
    "url": "assets/js/8.935582cd.js",
    "revision": "5d53de071528c8dffb1e1824d69c9efe"
  },
  {
    "url": "assets/js/9.a693e809.js",
    "revision": "d13868dc02f6c6747933fd0145505c88"
  },
  {
    "url": "assets/js/app.8e63a74d.js",
    "revision": "44518daa0b741cda5248da6c98af455c"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "767c502355c93ee42e717e7553ec827a"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "38176c49157244b8807a4c66dfe93c73"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "52e79fb8aff50678c6add287829e661c"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "86f219847bbf24a8891830c84805ce4e"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "26a118be0562446b5bb669a8659937d0"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "60a64e05d0ff3fcbd4c69d67f7094da7"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "99bf59f8646892a541ffa30ddf7f2096"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "25d4ee0ef8f68e5c35b5381d06e5d847"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "aa28db878d53fa98145e63b101de3c99"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "710cd3bc4a786cc12e7e1c3919a5afcc"
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
    "revision": "308cd8cd33e06431ce4bb0125d91d016"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "fbf41645d3357a872afa40dad48f7aad"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "b1c19e3f5bae33390a12fabf552285bb"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "6223721f0da27da5a0aa69f4f81da806"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "a00428ac5969e844fa9d11a9ce2df16e"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "9ef69d85c5ba9bff210503534746d13c"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "1f97f101197ee24a2f0aedbc2e994914"
  },
  {
    "url": "resources/books.html",
    "revision": "76747e01b9729462830d68e05965f02d"
  },
  {
    "url": "resources/community.html",
    "revision": "07ff535594b8ef14763a65203e782431"
  },
  {
    "url": "resources/conferences.html",
    "revision": "5bea89254e4af49174854dde8a9212a9"
  },
  {
    "url": "resources/examples.html",
    "revision": "26c530f5766e39cb947a8ef2e2a05e56"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "25001ac8d77a093eb22efe2848361dad"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "20477ee3be4042343a75c0bddb09de68"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "f8df1a77f1dac6deb9b2a79246e5cd97"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b19dfb363583cd0b295d180503a581a9"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "efbf6b934dec21507cbe9ed12d33abd5"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "e6402728723658abab7825173d134827"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "0640a5e89d68e1fe62886500516c3978"
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
