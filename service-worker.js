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
    "revision": "2813015113d8662ccd70f04966a0195b"
  },
  {
    "url": "assets/css/0.styles.e54b5cce.css",
    "revision": "092ece92b88dc0d9cc1fbe3682853753"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2e25f907.js",
    "revision": "10ac1fa51cbd2a5cd521643bcb5728db"
  },
  {
    "url": "assets/js/11.fe11d290.js",
    "revision": "2a1d29820bc33dbcd7ecc9efb875b43f"
  },
  {
    "url": "assets/js/12.628ab6fc.js",
    "revision": "c3cd2fb9eeace4f6a02459c942bc9d6a"
  },
  {
    "url": "assets/js/13.fcb7b81a.js",
    "revision": "87976d52a95dd39aa1734324e524f6e8"
  },
  {
    "url": "assets/js/14.1a449d71.js",
    "revision": "2e928a03854658e870bc2dac03318742"
  },
  {
    "url": "assets/js/15.79778968.js",
    "revision": "e8a07966e69d6f37839ea8a8d76fffe0"
  },
  {
    "url": "assets/js/16.920de13d.js",
    "revision": "10d2a91781f208f48610ebd74466f467"
  },
  {
    "url": "assets/js/17.28c09dc6.js",
    "revision": "8a6c12cde0bf082173025cc5c8422d33"
  },
  {
    "url": "assets/js/18.490dc653.js",
    "revision": "5e7b42cb2a9b3367bf81c34e973a1864"
  },
  {
    "url": "assets/js/19.590edec3.js",
    "revision": "ef5ee6d5b144594e0e4af99b546c043f"
  },
  {
    "url": "assets/js/20.00511615.js",
    "revision": "14adcf695d65f309ebb1b5baf0a70ea8"
  },
  {
    "url": "assets/js/21.0fb99111.js",
    "revision": "fc3f18c99b694762919772fd8ab2914d"
  },
  {
    "url": "assets/js/22.ca97f07c.js",
    "revision": "e18a95e2a43244c096aca54ff76bcf01"
  },
  {
    "url": "assets/js/23.25f69fdf.js",
    "revision": "f0acd96fb1a0a7fd757449dc3dd7b283"
  },
  {
    "url": "assets/js/24.19ebe497.js",
    "revision": "493a6dbf1acca8d2d98f92104a4a01b1"
  },
  {
    "url": "assets/js/25.5cad5f79.js",
    "revision": "f469c28254fee3d899a744b8e4714ed4"
  },
  {
    "url": "assets/js/26.db981e75.js",
    "revision": "ef95ab23bd13ff550af0d4594d51b155"
  },
  {
    "url": "assets/js/27.a941afeb.js",
    "revision": "92cb98124001f4b65e25d4c2486a74e3"
  },
  {
    "url": "assets/js/28.7d341524.js",
    "revision": "1bd3c3ff3d297540b150dceaae05448c"
  },
  {
    "url": "assets/js/29.a822c099.js",
    "revision": "b4d371e3cee7527fb1f778a3c682c0e4"
  },
  {
    "url": "assets/js/3.5783feae.js",
    "revision": "07b20e01ecf946606bac0360087ba5a9"
  },
  {
    "url": "assets/js/30.ee778fe7.js",
    "revision": "8ee061eca96aaf00fac45c4543b80cbb"
  },
  {
    "url": "assets/js/31.0feec944.js",
    "revision": "810264b28d2b310ddbb708d229286283"
  },
  {
    "url": "assets/js/32.75e19e4d.js",
    "revision": "670a0d47209512cd0ad1a41390a93f49"
  },
  {
    "url": "assets/js/33.8b7222a7.js",
    "revision": "e3857297f85804d4065008fc013a4336"
  },
  {
    "url": "assets/js/34.80bce90d.js",
    "revision": "a362063b9938c5bb9cdce3c629b95c87"
  },
  {
    "url": "assets/js/35.e9d229f8.js",
    "revision": "7a3bbd23c88284e3f547f02bf188c298"
  },
  {
    "url": "assets/js/36.c130660f.js",
    "revision": "293670ca664ed48c3a6df50140898a2d"
  },
  {
    "url": "assets/js/37.f035d1f9.js",
    "revision": "6daceaa1793982f209761a0f1fb105e7"
  },
  {
    "url": "assets/js/38.43beb98a.js",
    "revision": "598cc18bf3355bec6b29eb1c17ff0051"
  },
  {
    "url": "assets/js/39.2701a85d.js",
    "revision": "10478fff0000783330aab66667dfdb3a"
  },
  {
    "url": "assets/js/4.4dacaa78.js",
    "revision": "7cc394de7ab47a77227016224ef41493"
  },
  {
    "url": "assets/js/5.12d7086b.js",
    "revision": "4c888af53f5ecf02f721a4e8c48198d8"
  },
  {
    "url": "assets/js/6.f9dd353a.js",
    "revision": "1592f3b2ad2f590ac05d4edb39128d44"
  },
  {
    "url": "assets/js/7.3795cbf7.js",
    "revision": "47bec9a3d95a1a3f0c313c4bafee73f8"
  },
  {
    "url": "assets/js/8.61d88469.js",
    "revision": "2e122e5f169a62462e4185d269b8c70a"
  },
  {
    "url": "assets/js/9.4a602647.js",
    "revision": "f0b4bc01dea29fba8b281458be4c3dc5"
  },
  {
    "url": "assets/js/app.a1445eca.js",
    "revision": "5d99cbf7b10d1734323969543783a9be"
  },
  {
    "url": "assets/js/vendors~docsearch.a03dcad5.js",
    "revision": "7f55a97996d81c2579070d0516294a06"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "5ded86bc5a341ee4b86b954cdf9d2996"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "3fe084043f9087bd82656b3299185f83"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "e3e3a7be732495edc966de7c5bd6cc56"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "f37afe23704cd06ece4bfcea2aba1641"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "acaba4768deeb97f3cb91d441f3fb7e4"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "1b999ca11fd34069b6176216e12c693c"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "2ab46dd94b20d953d645995a6fd8a72e"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "a3ba549ad291f9df4ef81fccbec61b1d"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "9c251a64f7292865db418c92834a64b8"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "66431f3b2d8a67b042e8787393551b76"
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
    "revision": "3333403a4698ce6aa0d6f8dfe78fe72b"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "96adb799d7099635d3fab118e459811a"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "9d815be38ccf5596f1954202880fa9ff"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "9d55180d076387fb9bcb7de69e008d91"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "05e53518191e3b337d762ed1116e0198"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "27748aaa174836427bac324a809b6c39"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "d8f2702f6dd572cf352df0d3abb66275"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "10e8d086244d352fa1532cccdaa52b1c"
  },
  {
    "url": "resources/books.html",
    "revision": "93b67f78d80a3a6b18c09ea9a73042dc"
  },
  {
    "url": "resources/community.html",
    "revision": "6ac5f5ce81df336d77884887b4b443b7"
  },
  {
    "url": "resources/conferences.html",
    "revision": "6399214238d991786f58ad6b81752bc2"
  },
  {
    "url": "resources/courses.html",
    "revision": "a6150421cbb63d1ec2b2bfaa978b76c4"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "710b74967b1271d33898ec8dbc0a4e23"
  },
  {
    "url": "resources/examples.html",
    "revision": "ce948da13c442ac3979774e2a153d498"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "401bdc7b4d8d3dd1fa9ad09d075737e0"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "3063cc873ab978b54208e56a9af4125c"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "a61afa1b28fc658a1ec49543613e3149"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b8c99fb4c077679e3dcb93ef335e418b"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "5370c385b11546ae9414012c540af56e"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "99b7ac1488df2c4767e68a42e9af477e"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "7b35ac04e0e6923e2b626b8659c3f3b8"
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
