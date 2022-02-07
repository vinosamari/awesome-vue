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
    "revision": "ff3c7ab79a0b87c30a5a1311044a303f"
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
    "url": "assets/js/15.f43bc6db.js",
    "revision": "7c260fadc8027e50e0ddf397808d90d1"
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
    "url": "assets/js/app.6a6d3c92.js",
    "revision": "0ab2758e02dd5dc139d6ef0c477be2fa"
  },
  {
    "url": "assets/js/vendors~docsearch.b9a44f16.js",
    "revision": "0642e126421c773efc01637484188aaa"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "45fd7996ff097ba9e0c84d42c5af3c7a"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "8ae81642c1acadff3c0c44906d82ee39"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "3c90f5e5a95d62ca82e95cd31998bc4a"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "cc353dd0df08c450d6ddc8d1648e02aa"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "7eb4dee167aa85f6ba6c871a49029b8e"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "26212151778683036fdcaea9e20a3ee5"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "fe95a491c04644430f0536b8cca50ab8"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "7f6c2e28c47f87eee516fd97d1efb5c3"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "614084df8ee8482c463b467f04f44881"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "264f358e5b72fe3e3f3095550fe58c97"
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
    "revision": "9fc42a2986a2e19bde47bce4737f48dc"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "875de5d5fbfdf07a7f1b12a24246cffd"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "1d56bbf5f46ddd685e88cb664f91fa20"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "9b46a74eb3aa466d0f763b6842d7ef1b"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "903eb65431568cc8a69fd6ed90013fb3"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "b9254809cebe0f06d30e4aba62bdf73b"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "9b3123a7db5e9347a1aa96ac3920eec4"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "a56d9916328e52a2af58be83ea91f777"
  },
  {
    "url": "resources/books.html",
    "revision": "26a6e7ca54e6921edf18434390272151"
  },
  {
    "url": "resources/community.html",
    "revision": "9236b56a58186e84d2a069586ca5efc5"
  },
  {
    "url": "resources/conferences.html",
    "revision": "8ab86f72bba007e08e59403dc271ce18"
  },
  {
    "url": "resources/courses.html",
    "revision": "e28920ccbb2277cc8ef4d01a94e87d9f"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "c5d89b75e6347084e9f871a5b0ce5172"
  },
  {
    "url": "resources/examples.html",
    "revision": "c4f3cfab68663066469fe5590124167c"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "2efa28c0fe6914594b19b282192ef6e6"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "f32c2accd9e2388b7cf6b352f4d624e1"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "93d982e8dab2ec8818864812b0444cbd"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "d236870262441b0d047bf295574b3fdf"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "2cab78121b44ae67561861c7a7bf2651"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "8c27f9d3a2b7e905f87ed3e7745af402"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "8f2b4b3164b3d90e04e86a691ffe31ff"
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
