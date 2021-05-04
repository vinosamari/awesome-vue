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
    "revision": "8cfe6ee3559753a4f65714ddc9a974e2"
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
    "url": "assets/js/12.bce1a4fa.js",
    "revision": "043cb260e51dfd16edbb9a9e0e7cea2c"
  },
  {
    "url": "assets/js/13.f4ff75c0.js",
    "revision": "abc811fbd0ad195c9f3b31f18084a8a6"
  },
  {
    "url": "assets/js/14.fe4c2812.js",
    "revision": "72edc11a8273addd246778ea3c13e50e"
  },
  {
    "url": "assets/js/15.dfdc9333.js",
    "revision": "06216b919b16becaa87acaa01551da78"
  },
  {
    "url": "assets/js/16.f7ac9b10.js",
    "revision": "4e04220d074160a8f80ca4d4f6c7aade"
  },
  {
    "url": "assets/js/17.d83b9bce.js",
    "revision": "57171e7d9f646a118b3e4381360b1fd5"
  },
  {
    "url": "assets/js/18.393bf76d.js",
    "revision": "137f60b0457bf0d713220277e9ac859d"
  },
  {
    "url": "assets/js/19.1c581542.js",
    "revision": "cceca1ffd4e5715a309dd638b5e68137"
  },
  {
    "url": "assets/js/20.5f00bcd1.js",
    "revision": "3f2e6d71217e2ff835215e8f819a23ec"
  },
  {
    "url": "assets/js/21.b28a8d07.js",
    "revision": "b11d43a39b289b73dd384a56cfe60000"
  },
  {
    "url": "assets/js/22.29b876c5.js",
    "revision": "a94ec4b98c988802c0ebec7708e0afff"
  },
  {
    "url": "assets/js/23.b5d0ca69.js",
    "revision": "d61c06154642178c2fc3ae4e02dbfd7f"
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
    "url": "assets/js/32.0d9f1ead.js",
    "revision": "f243ac4a9d2bec3c6e4d244888774b7f"
  },
  {
    "url": "assets/js/33.5e17d0f2.js",
    "revision": "87689b999eb7fcdfc35844ff1f0c7fd0"
  },
  {
    "url": "assets/js/34.c81409da.js",
    "revision": "66988bfecfab21e8346a3817064da9aa"
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
    "url": "assets/js/app.ba18f4de.js",
    "revision": "c3c954dc001437ea7964dc4fc478fe1d"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "7f2d6a0a21e4cab32c6a1e9321d50a9e"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "07ee797d73bbf1f531fd169d12f56f24"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "9e56ec4a11774615fe6c7dc19be965e4"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "bfb55d033b4f74cfe835e233aaad09b7"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "f01a2c5e1268a723d05888893273ce70"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "f4c24761b31e777f1b98f155fbcad472"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "b2861b4041eea4c5852ec42d37372054"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "e7db764ccd28c9441d3c240c8dd29655"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "498630f0cb9d788bc69da41dc13d68aa"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "8f3435d5a3f7ab8bc60c34c0133f7ab0"
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
    "revision": "da332d1a58c7624c54821101fe843dfd"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "a56d8dfbfbbc512c655b46dca0957107"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "8c8afeba54fee50a3bb0b4ec9de7275d"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "addf88a7798524cd2101775d6638c024"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "8708580cc5e5d7c4622f0366ba19b67a"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "8fb9755cab5c425bcbb651f983b4866c"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "bf602c8fc91fe676e8268f7e9a3f8459"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "16277d8a29364e26284c59594087f225"
  },
  {
    "url": "resources/books.html",
    "revision": "93360e0943f7de9f6f69ade63ef08de0"
  },
  {
    "url": "resources/community.html",
    "revision": "f0294614e04ff6ccb83b9ad73f2c391a"
  },
  {
    "url": "resources/conferences.html",
    "revision": "a09d91fabb97e366078052aceed81b98"
  },
  {
    "url": "resources/courses.html",
    "revision": "0b2efe0bc8fe36fc5fce9c98fa647b01"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "96750eb60b9111885e672adf9cf96da8"
  },
  {
    "url": "resources/examples.html",
    "revision": "2a672cdee6b239e49edf3d1163464f7a"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "542264fca2fc06eb86813f39d64ce8ec"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "1df1c5d39d2e5b9a157ec4491b7ead9d"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "02564041ac0acd19227d2144766fc976"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "7d8d0b44b46066ea903aac078286c093"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "ea885ffa7e00fef3a16b9b5e51c88874"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "efb24e0fbdb34604dccac88e119f6744"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "754be8b97e4739db048c7a8a75c7a9cd"
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
