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
    "revision": "b7a58f0f1301d03348ef52bc1a6d6121"
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
    "url": "assets/js/15.b939a707.js",
    "revision": "4a5c1f243d536bea845b77fe4063e505"
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
    "url": "assets/js/app.db2cf04c.js",
    "revision": "43b24874a1c019b5470dc31ffa304030"
  },
  {
    "url": "assets/js/vendors~docsearch.b9a44f16.js",
    "revision": "0642e126421c773efc01637484188aaa"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "63b460bc4e8786fe971ea9e180138018"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "73b59c63509b52b6cce6d971533d2892"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "41a9285611d4cbb2e35323dbd276d462"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "3f8b48ff166c3c9b8c30f04c03e7d11a"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "cfec899b41459b33441c917f2c4c8aff"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "e158c1dfb44256a719d8a5b96ace1cd5"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "6e16152650e8b0da9cf52435d69cfcd0"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "b418d1957b5cc67df59783f6d2f6e942"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "0f631fff0575199abdcc0adcbbd9f77c"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "b7c160e63bcefd13fca2a587fc83466c"
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
    "revision": "f5082722546847c2915ef5a03be4d36c"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "72f3a1a50b9aa62bf868d900bebaf5db"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "5e1a8eede32e0a3b94f47ad4117475ee"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "5a32c7897747556e0afceedda8c8de96"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "d4f9c38c4d86921b167f5926a5b6342e"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "5e9972f610f3369b380ad912e34debd7"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "fbee5b2d73a67c01d6f2458b81097103"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "9ac702c8fb44412a6d39ca8cb2d3dc5f"
  },
  {
    "url": "resources/books.html",
    "revision": "1c5a2cf883ddc68eefc36aaa88b1e973"
  },
  {
    "url": "resources/community.html",
    "revision": "9f7c51c9e3cd484d2e57e012f1ceddea"
  },
  {
    "url": "resources/conferences.html",
    "revision": "0738e37c59c306193698cf16dafb7400"
  },
  {
    "url": "resources/courses.html",
    "revision": "bc6a590e89ba053fefa4e505880f9362"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "002b0231e991695dc2b6b1f791af49a3"
  },
  {
    "url": "resources/examples.html",
    "revision": "1b8134bbb4c81cc6c741efbcf5db1fb8"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "46bc7e2f38aa6154affc1e294f359a83"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "cbf7d9d5fc1301132f40ed8e2422ff6d"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "c5e80d842ae3da0723c11dc2fe5a2ab3"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "01eb56cb3ac282f5ab00ec671cf533a9"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "d6b23ed7060234e72895144713c0f1f7"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "bdeadffeaf7a32b8ef57f873ce7b7f37"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "a142534eb9bbeaa384c752018777728d"
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
