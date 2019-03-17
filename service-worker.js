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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4d19fd08032b67ea4866c1ead8314790"
  },
  {
    "url": "assets/css/0.styles.5ff31be7.css",
    "revision": "58e5e53660314010897cdf9a92270eb3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d176f20a.js",
    "revision": "4fffd594bed57caebf5898889eb29f9c"
  },
  {
    "url": "assets/js/11.9c07e140.js",
    "revision": "975c9f9e290e18a2254ac4a5aaaf6c83"
  },
  {
    "url": "assets/js/12.7c8d2241.js",
    "revision": "b19aa920b67bd61f0138226257303004"
  },
  {
    "url": "assets/js/13.6db22677.js",
    "revision": "59a378c4d5de22bfa1bceafb94845be4"
  },
  {
    "url": "assets/js/14.2bfe9dd2.js",
    "revision": "1be62664b76331994b6e28582c108578"
  },
  {
    "url": "assets/js/15.a72d6148.js",
    "revision": "c3055af1cb8b2143adbc835bd0738d71"
  },
  {
    "url": "assets/js/16.c7d643e6.js",
    "revision": "102ed4d1dcea879a3048ccf1327bca28"
  },
  {
    "url": "assets/js/17.fed634b3.js",
    "revision": "704fba3b93d6c362c54f98ddb3c8e910"
  },
  {
    "url": "assets/js/18.713285e1.js",
    "revision": "d75a9e76614946a87b5ffbd967b377f2"
  },
  {
    "url": "assets/js/19.425522b1.js",
    "revision": "92c8c5bf68f0ec38e23334966e95eb21"
  },
  {
    "url": "assets/js/20.a61b528d.js",
    "revision": "b932b57c89fcb373f4382d9492cee11f"
  },
  {
    "url": "assets/js/21.099140f2.js",
    "revision": "e17ecbf75174d993d1483eb6fafb1e00"
  },
  {
    "url": "assets/js/22.5d203eb8.js",
    "revision": "787520bb048af7aeb3970748438fbdab"
  },
  {
    "url": "assets/js/23.63c1f4e2.js",
    "revision": "e204a7e7ca82bf69cc49eb82ceccce90"
  },
  {
    "url": "assets/js/24.52e11734.js",
    "revision": "bbef4ba904b718c12b5c951165ea464a"
  },
  {
    "url": "assets/js/25.0e2455a5.js",
    "revision": "5ac5b102654817685cb198b9bdd35ecd"
  },
  {
    "url": "assets/js/26.c91f52d5.js",
    "revision": "232c8ed4037a8ee7695521200574d4fc"
  },
  {
    "url": "assets/js/27.f248dcd6.js",
    "revision": "822431d5da07142860573dcb68e33b0d"
  },
  {
    "url": "assets/js/28.94ab042e.js",
    "revision": "ec53ef905bbe123059460df70e90699a"
  },
  {
    "url": "assets/js/29.34055373.js",
    "revision": "d0ffba5d80d6e021831a9f9894a4b378"
  },
  {
    "url": "assets/js/3.0544d826.js",
    "revision": "12ea2c2ecd72f58881a070cd7c4896a5"
  },
  {
    "url": "assets/js/30.afb144dd.js",
    "revision": "d2cfabb160a5b12087f5261d814804a6"
  },
  {
    "url": "assets/js/31.a0a57330.js",
    "revision": "bb651d5858f00dd1193c50a286694ebd"
  },
  {
    "url": "assets/js/32.7a8dbae1.js",
    "revision": "88de8eb75205a711ba07b2aebdf530c5"
  },
  {
    "url": "assets/js/33.5cf3be9d.js",
    "revision": "a52d1f348c2da9288e854cb6f8a9f628"
  },
  {
    "url": "assets/js/4.fb6fbedd.js",
    "revision": "46bc146378781eefd08469545715d868"
  },
  {
    "url": "assets/js/5.b9c7d7c6.js",
    "revision": "477d02cbf91c72ea1f6521671ebd7f39"
  },
  {
    "url": "assets/js/6.a4d4124f.js",
    "revision": "07e5f7141809ee0a427c774f15801bdc"
  },
  {
    "url": "assets/js/7.354c023a.js",
    "revision": "fb18f0d16531efe27e7b0c625c67af84"
  },
  {
    "url": "assets/js/8.9acb0697.js",
    "revision": "473bb0c5dd34c55f112e996324f81eb3"
  },
  {
    "url": "assets/js/9.6d48fd7f.js",
    "revision": "f8827e2bf6e1aea22d1242a8200efbc9"
  },
  {
    "url": "assets/js/app.bd817090.js",
    "revision": "6d796bf5949172be455f5db8a064a51c"
  },
  {
    "url": "assets/js/vendors~docsearch.12d3b6b4.js",
    "revision": "d04cdaedc0417584670fe05179d38dd6"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "9e5cfd4d1163079ef558af930f82ae29"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "35595f9052aa21af610cb0200aa30729"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "7da82b65df60fe3b2e8a50e746a7a0b4"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "e92d68bb63583daca3e611a47c908850"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "7915b3be997e6aee3ff7a17696b5f70c"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "eef3d4e5af580f4cb5e5c9c7b8be788d"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "98f3fd84576b2c2af95ce6c1853872f4"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "878ecd17170ce17f366cf653a7d7e942"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "3f2ccafc242f77327ad27075c0a382e7"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "4d6b2dc301576f1407d17ed545d4bd24"
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
    "revision": "2803d819b932f95f2626f1bc1794545d"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "ec8ac4c6a46543aa7a514a0e3e22d146"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "a5bb3d2faae09a70680a0d4e871241c0"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "1e9ea6b766d49540cc358b1a6a471b71"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "624dbedd4e6993e41336f988c07457f1"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "e9f9f9d531d0aad5afff8dd7b529af44"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "0dd2f7df68d1c91de1cbd957b2cb5053"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "e440f57a24983f4ba79cf89c0c3ca908"
  },
  {
    "url": "resources/books.html",
    "revision": "78f662354eb0ef2499a78077c2d434fb"
  },
  {
    "url": "resources/community.html",
    "revision": "055e0b3006f16c2197f9ae00de5b28ce"
  },
  {
    "url": "resources/conferences.html",
    "revision": "349eea6c1d320c46bef394dfb2440256"
  },
  {
    "url": "resources/examples.html",
    "revision": "04e4243051ee1d779b78950061065d8d"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "d5143a0c7f2ae22ab232c95671e17c1a"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "334b4901d167d7e120c6230786186732"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "d684379d45b13cbb13552f1b386f9df7"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b5c687ba16a5292ff55124b81df8e3a5"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "243f15024393e60ca764af97f79c0316"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "f48c6ec01ae2655c84bc1eb33a28a0d1"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "0be360fea6470c9292c1b039eb4a9c31"
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
