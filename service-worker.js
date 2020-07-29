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
    "revision": "5b4ea0098ec4d0928d84be6324a49f6e"
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
    "url": "assets/js/12.18901236.js",
    "revision": "dd9ebd245bfbfe9dc3af15af2e835454"
  },
  {
    "url": "assets/js/13.b2d1435a.js",
    "revision": "abfe53a09a246b877a282db83ef7792a"
  },
  {
    "url": "assets/js/14.d2b762da.js",
    "revision": "cf85be77a57d51422286739aa6c0bd43"
  },
  {
    "url": "assets/js/15.3b967465.js",
    "revision": "4f8855c15e6e83fd138bec79c04d8c4e"
  },
  {
    "url": "assets/js/16.e9573d20.js",
    "revision": "afb4c527ed7c70982cdfed5db14483da"
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
    "url": "assets/js/19.8f56632f.js",
    "revision": "1f56e862ff3cd76e9e8808752180bbfe"
  },
  {
    "url": "assets/js/20.4398ae3f.js",
    "revision": "0572051f7efe32aaab1497770c1050c5"
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
    "url": "assets/js/23.53b1c3e9.js",
    "revision": "95fbc9481d424c18dbc8417f7ff59743"
  },
  {
    "url": "assets/js/24.128364cd.js",
    "revision": "a50c99c98ab258102ff9cbb9e2a29bff"
  },
  {
    "url": "assets/js/25.a5f973a3.js",
    "revision": "f2ab0a0be371574d2f6facbebf2d30d7"
  },
  {
    "url": "assets/js/26.c5b5a818.js",
    "revision": "f8556d1387032890da1fec05d20564da"
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
    "url": "assets/js/30.f9129080.js",
    "revision": "d02dcc0b3d3ee22cbc36d996cb98da6b"
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
    "url": "assets/js/33.241eb205.js",
    "revision": "fc6370c0ecba5675c74920a6d9e7aca6"
  },
  {
    "url": "assets/js/34.42a1fcee.js",
    "revision": "5fab9650a5daf1a4c6dc96675231830e"
  },
  {
    "url": "assets/js/35.6f2ed33a.js",
    "revision": "3a087a67c6d137187ceaa5efc3e30f54"
  },
  {
    "url": "assets/js/36.dc51cceb.js",
    "revision": "7ad90d2549949012c7995cc10531420e"
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
    "url": "assets/js/7.21fad1f2.js",
    "revision": "2d642a751c915113d2bf90d3132cf9c1"
  },
  {
    "url": "assets/js/8.ff44ce5a.js",
    "revision": "75dcfdf6f15f57378aac1feb460306c1"
  },
  {
    "url": "assets/js/9.905b22a7.js",
    "revision": "bb6f340c705f40126793338fc9501928"
  },
  {
    "url": "assets/js/app.b79a2402.js",
    "revision": "8710ee5293c619b0795d1a5248f0fb77"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "1a528e8a3d4ea2c40a68f2573c5d838f"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "09bf3e72a1632b576792edb9b82e679b"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "e7796a761c3f9d03bab277048f1a7ebf"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "57cabf40b582fe62ce4c2f781f60479d"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "2014cd8ebeee0764df475c206a92dd46"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "fdbcd9d9ee9ce7314f23304455cf443e"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "426f07ec2946e71a0e296cf37a14e926"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "461f4cd1b6f6c42cb873451eeb9e3aab"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "dfc3946882dcdd2fc52e6ce1c52a9912"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "fabcada6aceccbed70204d5c631b8233"
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
    "revision": "5bc00cb30eeb2b3c4e6c465e7e917ce9"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "cb96dfe175169639c4574be5328f35ef"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "c7c547194b14811e89adfc4e3dc91e0f"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "614b3d07e070389131ef5453c6fbc3a5"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "998aae8f1ed0191374d5a79a8c1b8373"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "6d966006e2de404d046e916ab96bfa1c"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "bc9edc74935beaeb772033d7b0dbbf0b"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "99e4dca04f09974db38414f29c52309f"
  },
  {
    "url": "resources/books.html",
    "revision": "36bd29fc2afeed59390e9163fd3deb5f"
  },
  {
    "url": "resources/community.html",
    "revision": "a3004f00c9cf405d9a3bf2e6e4ff9423"
  },
  {
    "url": "resources/conferences.html",
    "revision": "9e8b815c507fd4b481189a965a62368a"
  },
  {
    "url": "resources/courses.html",
    "revision": "d67d575f026e5c75081ffe1fceac869a"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "21a3ded657a125c3d8eae2836de52d7f"
  },
  {
    "url": "resources/examples.html",
    "revision": "4f80730416dfd77cafb92c2d38573b14"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "f93533d36be3e65aa86b5bca91d1918f"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "6d19e0e0bdc6d0e2b023c53623146f37"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "113f6a52518eb5924da94d6f8dffb574"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "8493adb1fc9e63d8a5dd7236bf641a6b"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "7ae18abb8af156554a9458d1f7e93616"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "4b72088482ada6c1e30f6b49eb16e766"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "34fac29fea4b1033a12d25027cd89e84"
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
