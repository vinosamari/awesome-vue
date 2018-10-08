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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d5654720be87c36042a47ab2caaf5b66"
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
    "url": "assets/js/10.06588144.js",
    "revision": "f6886013166c93866e05c90d6fb50fce"
  },
  {
    "url": "assets/js/11.9d3d310d.js",
    "revision": "6fb95addcc1a78181decdfe2db4f71e4"
  },
  {
    "url": "assets/js/12.2811de46.js",
    "revision": "5457f49dedecf332d6d03b52ae56c7c8"
  },
  {
    "url": "assets/js/13.2b4285ee.js",
    "revision": "520c44c0925480fb007f46dcab88eea2"
  },
  {
    "url": "assets/js/14.93f756ee.js",
    "revision": "ddd69a2cdcf26d38e7ad808e207f58e1"
  },
  {
    "url": "assets/js/15.c8dfba58.js",
    "revision": "3ee6b6c906aadfca88ecbc13eb319f14"
  },
  {
    "url": "assets/js/16.5f9d9f35.js",
    "revision": "fd843beb1f506f616c1f923a268c8e9e"
  },
  {
    "url": "assets/js/17.c1fc16f7.js",
    "revision": "3bccd000a8b6c6f02b419388b6b73172"
  },
  {
    "url": "assets/js/18.13b5d9dd.js",
    "revision": "ac5ffab1f635bb7f509e5f7809362ef0"
  },
  {
    "url": "assets/js/19.133c19cb.js",
    "revision": "2c30819693b0cfbcafe221a2153e6192"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.cd9766f2.js",
    "revision": "dc0831600bbf53673c2efa3c81125e22"
  },
  {
    "url": "assets/js/21.7fa3ee31.js",
    "revision": "885db4dc724e2a0f9e6ac715ec0dd674"
  },
  {
    "url": "assets/js/22.d513bc7e.js",
    "revision": "61c3263edc3bb83a6b952e600f5db7e5"
  },
  {
    "url": "assets/js/23.4b16f434.js",
    "revision": "c728940c0215d12394474772d287b440"
  },
  {
    "url": "assets/js/24.c4684edd.js",
    "revision": "47705c237d71197795d33933713ef46f"
  },
  {
    "url": "assets/js/25.f3b63587.js",
    "revision": "cabf102a6bb98ddfa0124abd432ce162"
  },
  {
    "url": "assets/js/26.faf88382.js",
    "revision": "d2a37f24b7b7e6880ebe7d62844f5360"
  },
  {
    "url": "assets/js/27.6327f0cb.js",
    "revision": "c9f60a511abd5192b2044a175f9797a4"
  },
  {
    "url": "assets/js/28.0be95cc1.js",
    "revision": "c4a92b6cf7e726a18b2a666b746f05ac"
  },
  {
    "url": "assets/js/29.1fdcad90.js",
    "revision": "ef71857d924521cc80dfaac8c4eb542c"
  },
  {
    "url": "assets/js/3.d5d373a3.js",
    "revision": "015098ad26b05f91df9cf99db480d128"
  },
  {
    "url": "assets/js/30.6124341e.js",
    "revision": "75e6e4e86f226b117fadd10685958d64"
  },
  {
    "url": "assets/js/31.ed6f11c1.js",
    "revision": "9e5a7ff3ca9789f417a09254ec1af5e3"
  },
  {
    "url": "assets/js/4.b6e68878.js",
    "revision": "7d2bddc53a331c128770b9c1f39c8f56"
  },
  {
    "url": "assets/js/5.777dad43.js",
    "revision": "c0b9806dbb0a4342882d7e874014ed67"
  },
  {
    "url": "assets/js/6.35411b90.js",
    "revision": "2c889437a5b941d9a352da46b137ef64"
  },
  {
    "url": "assets/js/7.04a53379.js",
    "revision": "467d2f1f090a7458127576463e544d65"
  },
  {
    "url": "assets/js/8.e5fb2339.js",
    "revision": "5d53de071528c8dffb1e1824d69c9efe"
  },
  {
    "url": "assets/js/9.3f3c3ad3.js",
    "revision": "d14c8056b9b4d6cb82092d3b1ab98154"
  },
  {
    "url": "assets/js/app.ce778a7a.js",
    "revision": "17596732a87999745e1ea601378161c5"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "943c68861ea53a47b2aac6d108288858"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "5eb090cde6623cc5edda5951ed7d3968"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "b97de89440255f16276f47cfe870e154"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "dd520fa0c5ff995972e6bf5e3c651987"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "abebc1ba172c1b613895f7c913665a92"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "6b1a3fbedfaa60402c25ec1b6f1b3cf4"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "1afa08557d780f62a2929fd2447dd1b8"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "6804ff3e7564cc967235a5222785da01"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "1c54916b92972678474513c792489a67"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "2138e4fbc71425085faeff822633cb7d"
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
    "revision": "c9aedc998343c34fc387b8e672727d01"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "be426351c805b296f4a4ed65107606be"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "97c01351b07b19aff10f26f0da36d9aa"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "4862c83270e4caf11b18233abd74757a"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "eb26da0ffe9d3cc9b6190c4ca97acd98"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "978dce94322234b959b73e404483e047"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "2fc28544e437cf97ae3d623ca8d28630"
  },
  {
    "url": "resources/books.html",
    "revision": "d3b4ad1d5bf9ea9cc6d57c9f8691453b"
  },
  {
    "url": "resources/community.html",
    "revision": "0f8aa4e61f71fcd005d595e7f59ca830"
  },
  {
    "url": "resources/conferences.html",
    "revision": "5023a12580be8438ed6b80a3180ad559"
  },
  {
    "url": "resources/examples.html",
    "revision": "204313fe098aa2165a8793477046d9ed"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "12b209ef54f899ac19546254d925f28e"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "308f257f5aae3c4e84d89d48a0639672"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "e20cacb4d4bf9d6e39a6a66873b75634"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "011470e65827432ab3b1442d7662d9b7"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "9b83ecfacd4ea875143a29f2eb1472c8"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "03419b56d5720c992de6a952788cf8fb"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "01c9a0a0332012dee1bf8b113711573a"
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
