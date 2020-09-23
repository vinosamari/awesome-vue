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
    "revision": "8c4d11a142163f9bb4a338f1022ea858"
  },
  {
    "url": "assets/css/0.styles.faa55993.css",
    "revision": "135c90cff3040a651b1774cf15c05188"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0697bb0e.js",
    "revision": "77476eb0e7b1e371e3e139259d85eef0"
  },
  {
    "url": "assets/js/11.bff27ce7.js",
    "revision": "381d31a7d84b8738ad6c2f53dc541fe2"
  },
  {
    "url": "assets/js/12.f75be051.js",
    "revision": "5704ca0cae54e143aab021d95bc347e2"
  },
  {
    "url": "assets/js/13.e0be3433.js",
    "revision": "554cc4c6f7207c1956e10c1bc7fa0784"
  },
  {
    "url": "assets/js/14.2c34dbf1.js",
    "revision": "cf85be77a57d51422286739aa6c0bd43"
  },
  {
    "url": "assets/js/15.7c06faa4.js",
    "revision": "4bccebe6ef4ae504eec4be5ff47d6ba5"
  },
  {
    "url": "assets/js/16.b00197c4.js",
    "revision": "e0e896425662bc77606a6f09331ed166"
  },
  {
    "url": "assets/js/17.7419e4a0.js",
    "revision": "7d6acf544da3729c617ae698e099216c"
  },
  {
    "url": "assets/js/18.6b2b7329.js",
    "revision": "e53da276511d4ae3de982278318683eb"
  },
  {
    "url": "assets/js/19.4abde098.js",
    "revision": "a4e79897684a53e473570c58a4ba9fcb"
  },
  {
    "url": "assets/js/20.b008f0f9.js",
    "revision": "5b07e3ce272ff85b3cbca77c0ba6a107"
  },
  {
    "url": "assets/js/21.e4c68eef.js",
    "revision": "13be60ade15647087ca5f0bd592e8d9f"
  },
  {
    "url": "assets/js/22.42e4efa8.js",
    "revision": "81848eec5c57e78d5d73533d5f9be07a"
  },
  {
    "url": "assets/js/23.8d68e77b.js",
    "revision": "cc9df05d56b5d584fab13683c22d38c0"
  },
  {
    "url": "assets/js/24.c09453b4.js",
    "revision": "a50c99c98ab258102ff9cbb9e2a29bff"
  },
  {
    "url": "assets/js/25.74d296f1.js",
    "revision": "f2ab0a0be371574d2f6facbebf2d30d7"
  },
  {
    "url": "assets/js/26.1de66769.js",
    "revision": "f8556d1387032890da1fec05d20564da"
  },
  {
    "url": "assets/js/27.7fc57dad.js",
    "revision": "6ecdd2293ffa0681167eb83370daa8cf"
  },
  {
    "url": "assets/js/28.db4cff29.js",
    "revision": "a4466874bf796c8b1abe7dbc31dd8c3c"
  },
  {
    "url": "assets/js/29.209e5d3a.js",
    "revision": "470639f16242cb023fa40cff250fedce"
  },
  {
    "url": "assets/js/3.71767182.js",
    "revision": "42bf27c478e73a1f4d1365adb5937f5c"
  },
  {
    "url": "assets/js/30.54a1b982.js",
    "revision": "465e901b388516f092a1569a474694a1"
  },
  {
    "url": "assets/js/31.b12918b7.js",
    "revision": "3b55d635109a71e631c985e303631b18"
  },
  {
    "url": "assets/js/32.0f2f394d.js",
    "revision": "edf8c1df15bb89435473c10d2ade8894"
  },
  {
    "url": "assets/js/33.51e41ca3.js",
    "revision": "fc6370c0ecba5675c74920a6d9e7aca6"
  },
  {
    "url": "assets/js/34.23de4028.js",
    "revision": "5fab9650a5daf1a4c6dc96675231830e"
  },
  {
    "url": "assets/js/35.a0b1f594.js",
    "revision": "325d684fdb17210940f579a06f05f8cf"
  },
  {
    "url": "assets/js/36.05e84fb6.js",
    "revision": "41b72de23d17b7cb4c67f487f35960f5"
  },
  {
    "url": "assets/js/37.b29fa909.js",
    "revision": "0e1a4ce7d57e0efa914fdbdfc8473731"
  },
  {
    "url": "assets/js/38.269e883a.js",
    "revision": "9b326e773a8615b65d7dad3e6b072a33"
  },
  {
    "url": "assets/js/4.aefcdd70.js",
    "revision": "97c86b8cbb498634e80176b85825f76f"
  },
  {
    "url": "assets/js/5.5c135d5e.js",
    "revision": "055a4d6d5d68a436f05842f4cffbdd37"
  },
  {
    "url": "assets/js/6.d8b56762.js",
    "revision": "87f7cf8895d76371e075d90292b1abe1"
  },
  {
    "url": "assets/js/7.98f4d58e.js",
    "revision": "6ff48b173fe48d74f83d91ddae9ed94b"
  },
  {
    "url": "assets/js/8.ddb03887.js",
    "revision": "230a57cb1d99de382ef10780d5c847e0"
  },
  {
    "url": "assets/js/9.2fabded0.js",
    "revision": "2f773fe0cf8cd2d2a773f17d84a7aa88"
  },
  {
    "url": "assets/js/app.864472db.js",
    "revision": "b0b36e01ee3f8671ecdd0f9604265994"
  },
  {
    "url": "assets/js/vendors~docsearch.1c519b39.js",
    "revision": "879cf48c33b7c6a9bfba35d0b802b804"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "f1854142701ab20113690b2cd66822d3"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "f7eab9b26827314a37f60146206e3308"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "0b2b68c92f796cc48cc34e1bf65431a5"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "a024b18136e0b9433cfa972048f9f67c"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "1cabcb8f14891e5ce159eee2bf0b2523"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "29df1bac0f3263d90dd059faf7937ca0"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "e7fc963383b3482de7326a179d8458b2"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "660e870ba831f84c4a64bdfb15512b60"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "f91b64fbd8659b8f390891848ff1f65e"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "d9755d62d78b799993ae9f4fa57f6368"
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
    "revision": "8aac5fd00e8295e3553032deba0564ff"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "31bf26a4c14e7abc46a2552ed920edfc"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "613e3d6e262ce35f445c085339818a81"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "742049c7ea0978471cf2f18a9d02f853"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "1a742d97abdbf3bb28728a4b078f396e"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "6061f0ac802e886596473c3510fef6b8"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "b9476f7aeecafd070d4574023ff0ada9"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "9ff1ac10bcaf6de1a02e4e6673e7ba3d"
  },
  {
    "url": "resources/books.html",
    "revision": "6d5575b4e5180fc2fa0348fb434ae65e"
  },
  {
    "url": "resources/community.html",
    "revision": "1060fbfb05deede008223aeb2db2d146"
  },
  {
    "url": "resources/conferences.html",
    "revision": "5828e202aa1511fadd7c93f024f471c0"
  },
  {
    "url": "resources/courses.html",
    "revision": "9c243f5e7f16a8055ea6afce457b2243"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "8c9f69f4b7983dc5e7524d3da9c039f5"
  },
  {
    "url": "resources/examples.html",
    "revision": "78aa13b17c745d3ba6e837d3450657a8"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "48978139b2d8aa8affa4513f8a0c0904"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "124c74673bdc2dd12732f2430adb2533"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "37e8faacbd2e5cdeda78fe38d1f30fb6"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b742c86a980801d5efd3f5f183d60486"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "a13c5f4592c3f37972ce895ad87e0dd1"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "2bff491cd5b3cf92461ef3d62a378390"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "69959b785e31aaea3052f25186e0bc90"
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
