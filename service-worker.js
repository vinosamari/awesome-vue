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
    "revision": "b2d645283f38925a621a2eaf3e440f6f"
  },
  {
    "url": "assets/css/0.styles.c667ae91.css",
    "revision": "397c5036c5d791deb513cfb431edba00"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.984c481d.js",
    "revision": "374233626dd7530f56c91edbb4065361"
  },
  {
    "url": "assets/js/11.4347a4da.js",
    "revision": "e4720912f717c74f5a7d89da840e13d2"
  },
  {
    "url": "assets/js/12.8f60d58c.js",
    "revision": "96c56551310ae534b1f12bf5a43bfd66"
  },
  {
    "url": "assets/js/13.9d85628b.js",
    "revision": "60866b1cd849f2ba4235d1d0ddffc978"
  },
  {
    "url": "assets/js/14.9a0e7b96.js",
    "revision": "8e4352c7ba5fc3ced88c760cba105214"
  },
  {
    "url": "assets/js/15.9f1d62fd.js",
    "revision": "030e3f8c424f35528bf4135dd3265e9f"
  },
  {
    "url": "assets/js/16.754491ce.js",
    "revision": "460b13c817ea7ce7ac7a48b52333b9ef"
  },
  {
    "url": "assets/js/17.bef9ed2f.js",
    "revision": "4cfa6fdc4c0a04201d9b73ea287105aa"
  },
  {
    "url": "assets/js/18.9ef43591.js",
    "revision": "b1644648120d90cd80a24d37b1e095f9"
  },
  {
    "url": "assets/js/19.e7be866f.js",
    "revision": "2515021aee5358f8e7c491494270aad6"
  },
  {
    "url": "assets/js/20.1f3c4dcb.js",
    "revision": "76b2aa4afd563a16966f5adbcf90fdb4"
  },
  {
    "url": "assets/js/21.5dbeda8b.js",
    "revision": "7bedba71a5f7f588285a5e329e2c7072"
  },
  {
    "url": "assets/js/22.4c6108c4.js",
    "revision": "13eba00665361d5e7a37a27aff39f7c8"
  },
  {
    "url": "assets/js/23.bd94f34d.js",
    "revision": "edc946a6608c860fe60224886488d962"
  },
  {
    "url": "assets/js/24.71c9eee6.js",
    "revision": "d55cb1a42ad6b08b170a9a468001852d"
  },
  {
    "url": "assets/js/25.55155bc2.js",
    "revision": "0a23c311b99034efe4c32cf88f244a3c"
  },
  {
    "url": "assets/js/26.76e7f23b.js",
    "revision": "72f6c084fdc18f493458b5f43155647a"
  },
  {
    "url": "assets/js/27.670bcf19.js",
    "revision": "fd90167492ead91dd9679c2b1bd6dad4"
  },
  {
    "url": "assets/js/28.1897b791.js",
    "revision": "3ac167a5176421b97d0551d2b74e0c17"
  },
  {
    "url": "assets/js/29.bc471523.js",
    "revision": "5ff8d6cda9ad26db065c1424fbbe5221"
  },
  {
    "url": "assets/js/3.8de3f819.js",
    "revision": "19563db5a82b5e718f973332e8f64dfc"
  },
  {
    "url": "assets/js/30.1503d74a.js",
    "revision": "50eb9ed6e987273a433134a9d4eabf4d"
  },
  {
    "url": "assets/js/31.a2fa8b22.js",
    "revision": "566fb6f29de657169cf323b288f35f7e"
  },
  {
    "url": "assets/js/32.14506bf0.js",
    "revision": "acd965af5b755222b9697ce9348defb8"
  },
  {
    "url": "assets/js/33.aacc7071.js",
    "revision": "b195a798054f7cd5957d257d65d6f9be"
  },
  {
    "url": "assets/js/34.c4934667.js",
    "revision": "2631bc7aca2ed6a1b8cf456d486980f4"
  },
  {
    "url": "assets/js/35.eb69e658.js",
    "revision": "0627908e669b95b74fdaed55701e0ac8"
  },
  {
    "url": "assets/js/36.bde460b1.js",
    "revision": "2e042626ad1856aa12e82958cb823199"
  },
  {
    "url": "assets/js/37.08f1899c.js",
    "revision": "21b7d272cf4a77cc6cdb32a1ae650492"
  },
  {
    "url": "assets/js/38.493fcadd.js",
    "revision": "53338ea9640182212f1133921b67cb21"
  },
  {
    "url": "assets/js/39.00ec5b90.js",
    "revision": "5625f7356576f467cf65e54b800bc12a"
  },
  {
    "url": "assets/js/4.64e8f72b.js",
    "revision": "fe03dc4c98f26bedc571549b97a639fe"
  },
  {
    "url": "assets/js/40.c7cbba88.js",
    "revision": "53e62a1b4987c045c1a5569de48d6064"
  },
  {
    "url": "assets/js/5.a38c5fc8.js",
    "revision": "0e5b483c06e09913a19bb3962d19a1e5"
  },
  {
    "url": "assets/js/6.d2b71544.js",
    "revision": "c5bafdbc29898568014c39ebfc78d0a1"
  },
  {
    "url": "assets/js/7.55b3eaf9.js",
    "revision": "0303374e75a09a69cef83901978869e5"
  },
  {
    "url": "assets/js/8.dbbba277.js",
    "revision": "eadd3d0c984b4dca965079f6bfea2349"
  },
  {
    "url": "assets/js/9.5d656205.js",
    "revision": "e62db5ca81cb02497d5545141773465a"
  },
  {
    "url": "assets/js/app.2c829da3.js",
    "revision": "3a437c8d790f78733e0e0d440d465a60"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "251a17e9f98578c260f720a98259093d"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "b49586a9cbd820bcd9333893fe5d84a0"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "693d6f83ac78c60400af307fc8eb52ad"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "eb1706ce03423d90f933b1695d3f54f8"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "d0e2300fbea44b338a6cf2692294b634"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "1b28bf40bb4da6089aaf80fc23c62a71"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "f4b5185f06bda4f609ef00de46c6fe97"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "de2eadecb096d2142d706f347c1a168a"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "3fa226a82f79174f090d0716ee87ea31"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "abb99807cf503225ff7961c58658ef7d"
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
    "revision": "c5cc51ed15abcb12933ab4a92bec1625"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "cdc3cc97772b300b89686c32cdda14e0"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "1b8c0244febb928d06a64ebe2f424e66"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "c78a4c7f8e87b3b88d881572117cb01e"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "5d3c297c524da495c976a264a0cae87a"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "7f0e3ba937d620f73d72d79454975c2d"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "dc8a3707f5b94bda064341ac9358d06d"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "8179f572763368eb863f7f27f0236c95"
  },
  {
    "url": "resources/books.html",
    "revision": "d6feb30d8dfce8704fda51531f8346c1"
  },
  {
    "url": "resources/community.html",
    "revision": "0bc82eefea433d078cf7d100dfb623c7"
  },
  {
    "url": "resources/conferences.html",
    "revision": "4e9da7bc830f8257b690783017127935"
  },
  {
    "url": "resources/courses.html",
    "revision": "715bfc0e1986e7340d6c9a465eeea91a"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "7add2708a724989de0ad0218248a435a"
  },
  {
    "url": "resources/examples.html",
    "revision": "6e7d52af692775574ab37cefbec5af84"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "3c3c8c6f38f8adc97015ee7bec9e7805"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "79b13ee2c2b9ba2cf7100e1da10e0fb8"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "2bea0f4af8610d0e8f10da564f2e8d49"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "bb3c99cc49fe0b027bd5a270b2373cf5"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "33c3d975f8f5aa141d2b95977eeab5d1"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "756c68838417ee191039b2e837d32f79"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "2bd4bed1c55540ea4f9bd92ca9fc94a0"
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
