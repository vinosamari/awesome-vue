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
    "revision": "ad5dc7fdf66eb4e1ed564ffe03cb9123"
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
    "url": "assets/js/10.0fad0092.js",
    "revision": "5d04968a675f511b8d915acfec43a6ca"
  },
  {
    "url": "assets/js/11.90aec158.js",
    "revision": "0a9a5740d8f04d2b6b57ce323dc6b439"
  },
  {
    "url": "assets/js/12.266376b0.js",
    "revision": "c79e9866b2aefc49ff5d4dbcb866c04b"
  },
  {
    "url": "assets/js/13.951e2acd.js",
    "revision": "2f423ffbb979797bcbd8c7aae1d1379c"
  },
  {
    "url": "assets/js/14.fa6bdbd2.js",
    "revision": "f0502927f87fb63e62962f0389c6d751"
  },
  {
    "url": "assets/js/15.a2a31694.js",
    "revision": "ad5dfa329942a4f3156b447afa54c5cc"
  },
  {
    "url": "assets/js/16.bfb9c0d5.js",
    "revision": "3f242ba3da9a745abeb39404692a0b8e"
  },
  {
    "url": "assets/js/17.bd8d5bdf.js",
    "revision": "355165aaf66a0b7044d25f83c56fe029"
  },
  {
    "url": "assets/js/18.7215c0f4.js",
    "revision": "b33db3cd5d21af14636ab472f93ced2a"
  },
  {
    "url": "assets/js/19.3b5e61c4.js",
    "revision": "9be955ac9515c7f2b4afeca1128210dc"
  },
  {
    "url": "assets/js/20.c9a86ea1.js",
    "revision": "0a6c4b144e107b743566420bdf75ec17"
  },
  {
    "url": "assets/js/21.6424083d.js",
    "revision": "c95343d746e9c3e37f5058c1bde99d9c"
  },
  {
    "url": "assets/js/22.f2264744.js",
    "revision": "0aebec466db154d10d3594c0191cac7d"
  },
  {
    "url": "assets/js/23.c52e5588.js",
    "revision": "a24d87ec9b8ff1cb0496209ab911c3d6"
  },
  {
    "url": "assets/js/24.1e87896f.js",
    "revision": "470f9792acba3b36626c83d7b44f6df6"
  },
  {
    "url": "assets/js/25.02315014.js",
    "revision": "e5a62bc0eabde444105dd21b5be69b95"
  },
  {
    "url": "assets/js/26.16fcf751.js",
    "revision": "57d8e19164a70ee06a67baf7e72e5a48"
  },
  {
    "url": "assets/js/27.e94c86a8.js",
    "revision": "b911db13e7dfe955034fefcebfc54363"
  },
  {
    "url": "assets/js/28.4666269b.js",
    "revision": "81d0f7b69f3815c01725cd1ca70f6794"
  },
  {
    "url": "assets/js/29.9020341d.js",
    "revision": "51e228019464edfafb1938cf503099ea"
  },
  {
    "url": "assets/js/3.1b02fcd7.js",
    "revision": "930a4c7ac44c1a0df324af39060c4b90"
  },
  {
    "url": "assets/js/30.f242a960.js",
    "revision": "1172736f38fb7c8395c64a7369a26e40"
  },
  {
    "url": "assets/js/31.b26d4faf.js",
    "revision": "07a00c40ecd7a544c916c4eb887884c8"
  },
  {
    "url": "assets/js/32.fba3162d.js",
    "revision": "bb6b23a6a346af97cd2b36bb3cc8a313"
  },
  {
    "url": "assets/js/33.81b0a404.js",
    "revision": "8856f75bfdd6879b0280d9fe2a37cb61"
  },
  {
    "url": "assets/js/34.51bc2aaa.js",
    "revision": "5aee5dc7a1bd6073f0bfa5c6d28e1b49"
  },
  {
    "url": "assets/js/35.c3ff7326.js",
    "revision": "ddd87233bcf8924dd8a7ad28d73c5d82"
  },
  {
    "url": "assets/js/36.9fd7fc5c.js",
    "revision": "bb5b7e1d3a9c9bb2d7e8f6d82517ec01"
  },
  {
    "url": "assets/js/37.fd0d6327.js",
    "revision": "ae6fcb4125120e4a72753587015f8ac3"
  },
  {
    "url": "assets/js/38.34670ca2.js",
    "revision": "9e2f12467214dff5cdacc5afb606b1d9"
  },
  {
    "url": "assets/js/39.30096eca.js",
    "revision": "0b00de9b37473cecb3821c31a191d9be"
  },
  {
    "url": "assets/js/4.9f8f8504.js",
    "revision": "7d6bb240fe1425729d3a3de1ac0b7b58"
  },
  {
    "url": "assets/js/40.0eec6faa.js",
    "revision": "a2d151f1a8e089c62509da08e13c7aab"
  },
  {
    "url": "assets/js/5.6e6efc75.js",
    "revision": "d38d0a0ca554e8795e19862f4f223322"
  },
  {
    "url": "assets/js/6.c8c9a203.js",
    "revision": "e59145f0ee38d0244de5deec43cd857f"
  },
  {
    "url": "assets/js/7.2dc96075.js",
    "revision": "41a226c6d33f41901230e1027ad42a1c"
  },
  {
    "url": "assets/js/8.8c2c1bb9.js",
    "revision": "39c55865b8a1ab4cdf249c73ee40aa00"
  },
  {
    "url": "assets/js/9.6e8fa36b.js",
    "revision": "93d80f34e0f7cfb0d76ed2f3f16b7e24"
  },
  {
    "url": "assets/js/app.e1ce224a.js",
    "revision": "9453932ef817896c5fe0871e379a5c0c"
  },
  {
    "url": "assets/js/vendors~docsearch.b9a44f16.js",
    "revision": "0642e126421c773efc01637484188aaa"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "f656e830cd7f398ab7b091b8be2d3843"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "48ca3f4d5b442acefce5af9e6fd158db"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "845b177576beaac283f2172f4d0860ae"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "27ee870c9bb78d0a94abab8740390c15"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "3f8a5587443100ca4f6e05c964c1e73d"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "df0aa79e8feece06dfd257421fd76e95"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "58d49d914caa3f16525e28e66468a351"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "c33446d35dde89498dce9a0f551c5aba"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "aff6ea393940addae8134429f4a3bb02"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "3736bbcde3e729d71227cdf2ee4ef531"
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
    "revision": "46fd2009109c11db5ac3faf9c419647f"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "cf7c63a5f195b806693a60e047089bb4"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "4439620fa2acf8811f6e69e32b9e857b"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "acdc0c3d0139fbc7c887376ee82c86b0"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "34032ba773e9018c724ca63186ed18ca"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "07744cc2d015c0c2b571c3e32f24de12"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "29e5f20ca34a82067535fff6c11e393d"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "7b8fd54815af95f260cf0044cb6fd75b"
  },
  {
    "url": "resources/books.html",
    "revision": "c961fb729a9b798df9487a9d15d8a013"
  },
  {
    "url": "resources/community.html",
    "revision": "74c4af47cac57ab67a47522dc31e75ff"
  },
  {
    "url": "resources/conferences.html",
    "revision": "5cbab2b7087a2aeea3ebe65082480bc3"
  },
  {
    "url": "resources/courses.html",
    "revision": "e7cd6135890361c8e665da358977a470"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "466feb0003f0c9c1fd1b903a1143428c"
  },
  {
    "url": "resources/examples.html",
    "revision": "44c3c2fb28c1209cc8ba36ff5e7ffbbd"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "7c72b749ccf3f0b181b8ae15cad18ff7"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "725e8994a68025abe0d993ce756c0a2b"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "ff2483f51fe7b6f018f1e74332dfab7c"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "d6d8ee6aa0e466d8b6d00f10e160f4fd"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "980a9d4f8cfc60e665ca9bc7cf9c0d9d"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "9f592bdd54f717f571c276ca275fb016"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "1dbdbb29867099456e7dfbbe4acd684e"
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
