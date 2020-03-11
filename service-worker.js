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
    "revision": "50da0ce8612518902776ef5db09ab06c"
  },
  {
    "url": "assets/css/0.styles.521f9818.css",
    "revision": "dfdabec112fdbd5878bcb9ca7224f637"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bcafafe3.js",
    "revision": "c7952d62efefea8d11a98307ff0a3ce1"
  },
  {
    "url": "assets/js/11.3b430b7b.js",
    "revision": "72dfdacb4ab88bf2f6daaf13bda99461"
  },
  {
    "url": "assets/js/12.839aecee.js",
    "revision": "73b46ca18f0603e2003ac604b84fb283"
  },
  {
    "url": "assets/js/13.887c2327.js",
    "revision": "d27742129c16f736862840c8567c2655"
  },
  {
    "url": "assets/js/14.4b533c91.js",
    "revision": "89ca3ef7a89c77685af194fbc1b77e6a"
  },
  {
    "url": "assets/js/15.158c0795.js",
    "revision": "316a49d95f23945e23b8dd5d78c26fd2"
  },
  {
    "url": "assets/js/16.2509801f.js",
    "revision": "2674d1f92ff4953b7770c56a55dc402b"
  },
  {
    "url": "assets/js/17.16ecc9d6.js",
    "revision": "6b87a333fcee81b3bd18d6dac383e234"
  },
  {
    "url": "assets/js/18.c1dd68ad.js",
    "revision": "23ea00e665da5516c9f4c15d658254fe"
  },
  {
    "url": "assets/js/19.e6ab08c2.js",
    "revision": "c29e7595e277573039dc84b9d1369e0f"
  },
  {
    "url": "assets/js/20.f8f1f8a1.js",
    "revision": "63e40d93e2d0395e8bb89e5f0eca2924"
  },
  {
    "url": "assets/js/21.abd34d2c.js",
    "revision": "183270b0c37d2d1ac794c70f1170399b"
  },
  {
    "url": "assets/js/22.7f876be9.js",
    "revision": "73eb15a6f961b0d00e22f4a6de2fe2f5"
  },
  {
    "url": "assets/js/23.b3ceafe1.js",
    "revision": "1e6ee3c9599ec954abb47c1bd3675281"
  },
  {
    "url": "assets/js/24.ee8c9117.js",
    "revision": "25ed1c606091e399d009b8c6b6a31d20"
  },
  {
    "url": "assets/js/25.f9e42ed3.js",
    "revision": "b81f139f6b251347c5b358e6e4c947ab"
  },
  {
    "url": "assets/js/26.47d2a4af.js",
    "revision": "8c8640c300ca0f9351364b1252633f58"
  },
  {
    "url": "assets/js/27.d3b9e8d5.js",
    "revision": "5dc1343de73d8261815d303528aebd39"
  },
  {
    "url": "assets/js/28.ac76201a.js",
    "revision": "aa4e5301fe58c1abd9929bc4662d8f82"
  },
  {
    "url": "assets/js/29.6d88e456.js",
    "revision": "4e0034521dcadf68af19108aa919cae5"
  },
  {
    "url": "assets/js/3.73fcae93.js",
    "revision": "03b56acc16debd4a353169da1c553cca"
  },
  {
    "url": "assets/js/30.eb5c50ff.js",
    "revision": "f6091ab9bf0974040fb523ee6b90ac5c"
  },
  {
    "url": "assets/js/31.1126bc77.js",
    "revision": "a914e73929d4e63082767dbdb0274cef"
  },
  {
    "url": "assets/js/32.4a9359af.js",
    "revision": "c90e57ae267c78f7e1711b9bf6249034"
  },
  {
    "url": "assets/js/33.bea4cb75.js",
    "revision": "1b088a45f0703c5a012d2da01264db14"
  },
  {
    "url": "assets/js/34.d9d63cf2.js",
    "revision": "05e3942d59a3d0b9b3a49dd4f2f09b09"
  },
  {
    "url": "assets/js/35.8e6e9b59.js",
    "revision": "f658f6c0cb27c22bfefc830f5a02bcf5"
  },
  {
    "url": "assets/js/36.cc8786d1.js",
    "revision": "7aafd4524d881a29c5c60444d7c45457"
  },
  {
    "url": "assets/js/4.792630df.js",
    "revision": "26a18028b55bbd64596a544faf89b010"
  },
  {
    "url": "assets/js/5.aba52061.js",
    "revision": "7c144907b43efa3ae57e0e0d92055462"
  },
  {
    "url": "assets/js/6.1bac72b5.js",
    "revision": "7e75b5c0445dbd878cc265d4e0ac2e3c"
  },
  {
    "url": "assets/js/7.c662f1c1.js",
    "revision": "44b99db45e018ab91fb4716a8e6d02b8"
  },
  {
    "url": "assets/js/8.bc025b8f.js",
    "revision": "cfb1cb517bd3e57ed3aaa9569759d809"
  },
  {
    "url": "assets/js/9.c619b924.js",
    "revision": "c0f02948574b016286c7e6a713f19991"
  },
  {
    "url": "assets/js/app.f965b9a1.js",
    "revision": "11e8f50cfe572c56b945132f9e1e2338"
  },
  {
    "url": "assets/js/vendors~docsearch.c609d121.js",
    "revision": "02bd7b68139dde7aa8df15ec0c3c8aa8"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "25e1e5e2728b4d296e78e867df53949c"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "3f3c07aa8fb28fd435b9be4923920258"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "47fa0908b212432ab99399761111420d"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "a8fd49f3a71a85dd4b90152721080713"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "6e3de66d90da66575521a986fad6730d"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "7fd74a09c8da39026103c40f77ffd70c"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "0ef2b8278a05ef53f72c87b0bc0967ab"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "32bceef7f06fa8c7d0e287ddb18dc36c"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "baf66fe3a81342f3a0e2a0c28a95039c"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "782ff958068bf4b5b58736f6f2264a9c"
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
    "revision": "929fe6dfc5ba4681fe2f0cebf077fc60"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "1e4bde746e85c8bc2f8340435cf2201e"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "a1ce138e0ddae81f8151963989d4d4b9"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "f33e4575ec392214e6995262fbdb2ec0"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "bb36464e5100c6b7622d2034c81672cf"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "f659e81cf617b10ad167d5d020f16437"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "d0f3f36029d7601c103c0159834a1596"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "f5835a3aa59e3821bb5d8cd5db9f85c6"
  },
  {
    "url": "resources/books.html",
    "revision": "72e5f4c89c2a2a9d45926e99c3a9105e"
  },
  {
    "url": "resources/community.html",
    "revision": "5810268419fe912617fe55e4cbbd6779"
  },
  {
    "url": "resources/conferences.html",
    "revision": "382c0af4ab18c97e30769046515b3638"
  },
  {
    "url": "resources/examples.html",
    "revision": "71d93100f33f2c9567e3990a7e2fb739"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "d19088c73116a618e9db55d5b8d31158"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "b2789205115dbbaaaf426707398c0a21"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "a6b6bcbc5bb7b4328951a6d033575e1a"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "254f45b19b833ba6bd05ceb7e068935c"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "dc5bfe1bc1d97a030ca7c921e3303896"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "b688ba1631ae306405c2e7d8cac5d3b1"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "8ea3697902c0e6578755d60d3708d8e7"
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
