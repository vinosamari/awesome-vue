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
    "revision": "d3d8101e9c38adefc8a25ac097a65355"
  },
  {
    "url": "assets/css/0.styles.af48d92d.css",
    "revision": "d094276598c5f5ba8a9b78db767ad7b0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c803715c.js",
    "revision": "77476eb0e7b1e371e3e139259d85eef0"
  },
  {
    "url": "assets/js/11.141a516f.js",
    "revision": "381d31a7d84b8738ad6c2f53dc541fe2"
  },
  {
    "url": "assets/js/12.f02cef26.js",
    "revision": "93d42b20166545d2058d2cd28c7fee6c"
  },
  {
    "url": "assets/js/13.8d5129aa.js",
    "revision": "53fc4ed122474fbb834e5507652c015c"
  },
  {
    "url": "assets/js/14.d2b762da.js",
    "revision": "cf85be77a57d51422286739aa6c0bd43"
  },
  {
    "url": "assets/js/15.fdc52b78.js",
    "revision": "0d91767ed9f7fca47faba0b1d9a9f9e4"
  },
  {
    "url": "assets/js/16.3164ba42.js",
    "revision": "d82d6c6b31c2f1f9faad5fac8103dfab"
  },
  {
    "url": "assets/js/17.e8a1aab9.js",
    "revision": "7d6acf544da3729c617ae698e099216c"
  },
  {
    "url": "assets/js/18.5f986569.js",
    "revision": "e53da276511d4ae3de982278318683eb"
  },
  {
    "url": "assets/js/19.b8801103.js",
    "revision": "2208fc7e26997ad1d481b62f34b5d970"
  },
  {
    "url": "assets/js/20.e7b72ccf.js",
    "revision": "6f079c5668b3a5a2a2a35f98ccc7aee5"
  },
  {
    "url": "assets/js/21.886d4cf1.js",
    "revision": "13be60ade15647087ca5f0bd592e8d9f"
  },
  {
    "url": "assets/js/22.e8a7a452.js",
    "revision": "81848eec5c57e78d5d73533d5f9be07a"
  },
  {
    "url": "assets/js/23.0f9388ab.js",
    "revision": "b4f28f330a17fe9a273d445dccde6a00"
  },
  {
    "url": "assets/js/24.01ab81dd.js",
    "revision": "e326a848966b973a321aeea6a00ed017"
  },
  {
    "url": "assets/js/25.a5f973a3.js",
    "revision": "f2ab0a0be371574d2f6facbebf2d30d7"
  },
  {
    "url": "assets/js/26.2bb5297b.js",
    "revision": "f8820442f3f49abee8f643abd449908c"
  },
  {
    "url": "assets/js/27.569585f9.js",
    "revision": "6ecdd2293ffa0681167eb83370daa8cf"
  },
  {
    "url": "assets/js/28.1840b3a0.js",
    "revision": "a4466874bf796c8b1abe7dbc31dd8c3c"
  },
  {
    "url": "assets/js/29.8993f122.js",
    "revision": "470639f16242cb023fa40cff250fedce"
  },
  {
    "url": "assets/js/3.0743bac4.js",
    "revision": "151fbf3ef65d76fa890b6743411b2bc1"
  },
  {
    "url": "assets/js/30.d57292d1.js",
    "revision": "76bcda9618814a41e86f0bd61cc95503"
  },
  {
    "url": "assets/js/31.d2e1b9ce.js",
    "revision": "42d4cf8213d5145a9e6e74caecde4611"
  },
  {
    "url": "assets/js/32.e0af3c28.js",
    "revision": "edf8c1df15bb89435473c10d2ade8894"
  },
  {
    "url": "assets/js/33.65d144d9.js",
    "revision": "7d7d0287ad17b75b5ac3e8bcd6199c18"
  },
  {
    "url": "assets/js/34.42a1fcee.js",
    "revision": "5fab9650a5daf1a4c6dc96675231830e"
  },
  {
    "url": "assets/js/35.c0c22097.js",
    "revision": "3f8ab54763adefb29642372eb903455e"
  },
  {
    "url": "assets/js/36.862163b7.js",
    "revision": "429e160b0064b717e48aa7bc838c49d7"
  },
  {
    "url": "assets/js/37.17d41513.js",
    "revision": "0e1a4ce7d57e0efa914fdbdfc8473731"
  },
  {
    "url": "assets/js/38.269e883a.js",
    "revision": "9b326e773a8615b65d7dad3e6b072a33"
  },
  {
    "url": "assets/js/4.153f8c43.js",
    "revision": "97c86b8cbb498634e80176b85825f76f"
  },
  {
    "url": "assets/js/5.5c135d5e.js",
    "revision": "055a4d6d5d68a436f05842f4cffbdd37"
  },
  {
    "url": "assets/js/6.1177d97f.js",
    "revision": "87f7cf8895d76371e075d90292b1abe1"
  },
  {
    "url": "assets/js/7.38edccbf.js",
    "revision": "b926b9d3912f8c2da2fccf1c5bd44cef"
  },
  {
    "url": "assets/js/8.3f2fd0d5.js",
    "revision": "3326c1f162aeebff87567d95ebe0d088"
  },
  {
    "url": "assets/js/9.85ba5f2b.js",
    "revision": "c9e0aa5df2a21b8bbb5191493d4bc117"
  },
  {
    "url": "assets/js/app.95cb91d4.js",
    "revision": "fd84b074588b0daf241a634dbd83b7db"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "1466aff1f3cbca103c7a82d9b9796cd1"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "31106ba1006a99af1818329724cbd9bf"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "5220d11ea379b46b29842110dff2e594"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "eaddfe6f92a243d6c91c1034f240a03d"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "177127249af5d3fa8f013a91a864f6ca"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "4e424336727c4c1c120a16c723958571"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "681b8ce47caee9ebdb94122003b53476"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "2e2c12f306d0991b0cf0552b81d56c01"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "15ae9fb49f831be6f408bec1182ff2d3"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "c3a0518d142f0d6b2882ed06a8c3ae48"
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
    "revision": "0940874efb2b798bf91f4d92248da77f"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "492c87064f157e5e86343b4e83f6ba2f"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "46ce3da5b84703a71c5cd830064aa23b"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "602b424981d3436fe3b7f1d9660774ed"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "471327f62c9b054bd7d64f3247dabccf"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "81d04d0f2426ca08420f6d7fd6a9d4f5"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "3f89583cf06314982f8cc987cf211368"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "461d39a09192b4e6b54a12dd53f4bf0e"
  },
  {
    "url": "resources/books.html",
    "revision": "3bce5603b21d8a26edf2e54f507908d4"
  },
  {
    "url": "resources/community.html",
    "revision": "b96208bb8d4ba05d28b0e9ffdeca29c7"
  },
  {
    "url": "resources/conferences.html",
    "revision": "e7e81d9a33ce22a1a6e4d4103a4586f7"
  },
  {
    "url": "resources/courses.html",
    "revision": "5ac8d51dd5ef9c94c99909fa1681acf9"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "f4f16fa5de010adb520d135fe79f37b6"
  },
  {
    "url": "resources/examples.html",
    "revision": "21c788d7d8f7ad1ada0645312f63bc35"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "c647889e4bc14fa88bcc794490a0a7f8"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "3eff27bf321272a37be61496a939062e"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "03da5c8fd9524f9bf215a40949178971"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "7108f1fdd6595930a33d4d934d2aa05f"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "16c40ac082179fa1b1f0484aa924cd52"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "b56642ec99fe00f21adc5797c6698bb9"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "2e5a5fd86b950009e36c60c00ab6e6b2"
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
