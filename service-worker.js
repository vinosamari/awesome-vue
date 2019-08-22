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
    "revision": "eeefec28f9999cd800e62016c544f611"
  },
  {
    "url": "assets/css/0.styles.a9d47db4.css",
    "revision": "1cf788e5055372fe632a1eba244f314e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.10e63525.js",
    "revision": "9d282d1d5ef4ac050b97ed9123b6f0f1"
  },
  {
    "url": "assets/js/11.f0b01372.js",
    "revision": "1a50ed91ef66b023fce122ec26b2d22a"
  },
  {
    "url": "assets/js/12.571194ad.js",
    "revision": "11acdbb186015cd01c145404d48c3250"
  },
  {
    "url": "assets/js/13.f32619b9.js",
    "revision": "16f19cd0ae43bb1d55692fab0bc005b8"
  },
  {
    "url": "assets/js/14.0a6c833c.js",
    "revision": "0b6540d636cc6e7430f9cc1ac756d9a5"
  },
  {
    "url": "assets/js/15.02ac812d.js",
    "revision": "6405de5b64def3cbb7cf6dd6b8547e02"
  },
  {
    "url": "assets/js/16.e0691bde.js",
    "revision": "4aeb1049f893c2c873fb6e31a14683d7"
  },
  {
    "url": "assets/js/17.eb59a860.js",
    "revision": "eeec25404182781db925967b02333dab"
  },
  {
    "url": "assets/js/18.6cb448ff.js",
    "revision": "dbfdbe29a03377b3c6edb1e3595ab058"
  },
  {
    "url": "assets/js/19.d91cf701.js",
    "revision": "2d903ea5e779158519b24293a40c227a"
  },
  {
    "url": "assets/js/20.a38f6790.js",
    "revision": "6ec2df38fd6ad0ff99c5c771956970a2"
  },
  {
    "url": "assets/js/21.31de888a.js",
    "revision": "73c5176906451d1702008e028bc1b3cb"
  },
  {
    "url": "assets/js/22.a84f9df5.js",
    "revision": "9660432516e8430ac3d66dc2f92b120c"
  },
  {
    "url": "assets/js/23.e08aae83.js",
    "revision": "21df430111357dee899fe1606c3a7872"
  },
  {
    "url": "assets/js/24.8f06d808.js",
    "revision": "9886ce1ee2e799d09abfbe5ced0af854"
  },
  {
    "url": "assets/js/25.59febc6c.js",
    "revision": "957eda19bbe5d5c5e50dc03938539b89"
  },
  {
    "url": "assets/js/26.b09b7f7b.js",
    "revision": "05724197fdc3abe232a16e1f6988091a"
  },
  {
    "url": "assets/js/27.c2099987.js",
    "revision": "cfa49932059a425b801dff0c459feab7"
  },
  {
    "url": "assets/js/28.b4283c8c.js",
    "revision": "06787ca7b4c475b97d8bed33bee69f10"
  },
  {
    "url": "assets/js/29.43da7b95.js",
    "revision": "25dbb285f7be83d32bc35d6d0a7796b7"
  },
  {
    "url": "assets/js/3.53ac99fe.js",
    "revision": "ef7e12047e1400a53ab386f9f7b1270f"
  },
  {
    "url": "assets/js/30.01c8cc7c.js",
    "revision": "f9c85861e45d2ac2d3068c6a27d74431"
  },
  {
    "url": "assets/js/31.545d5a9f.js",
    "revision": "5a11e209bff2796821cdff73b5512240"
  },
  {
    "url": "assets/js/32.653089e0.js",
    "revision": "a930a849c3751a7e256cb81ed3e9bb76"
  },
  {
    "url": "assets/js/33.72817d1a.js",
    "revision": "a621e5dd1b0853b26fdd5c9a4da06675"
  },
  {
    "url": "assets/js/34.b0c09f38.js",
    "revision": "c8ed4973d375ad8c41a7e13bacbda770"
  },
  {
    "url": "assets/js/35.b0b9b834.js",
    "revision": "c937dd0c762cde824e3d26dc736ea129"
  },
  {
    "url": "assets/js/36.87b3565e.js",
    "revision": "51f16c7d869ffe6ed219aad36b4b77fd"
  },
  {
    "url": "assets/js/4.7d3a193f.js",
    "revision": "210f267dab14ad32647a3d98a1232662"
  },
  {
    "url": "assets/js/5.56695c71.js",
    "revision": "11bb2a6dd0a6eba405db14a6f812d8b0"
  },
  {
    "url": "assets/js/6.d64d1c96.js",
    "revision": "a5f3abbd3d1e73ba649ee15aeeb878bc"
  },
  {
    "url": "assets/js/7.eb6c75ea.js",
    "revision": "8a15345bc9f3c8ac3c7697279941cce9"
  },
  {
    "url": "assets/js/8.527b555d.js",
    "revision": "c892498fb3c9c0bf970acec46ace541f"
  },
  {
    "url": "assets/js/9.c8c854ee.js",
    "revision": "d0b2a1f8d462d15f89359bdd700512b7"
  },
  {
    "url": "assets/js/app.b3aabb98.js",
    "revision": "ef27eab09e776d5c1d240b21d88c1eed"
  },
  {
    "url": "assets/js/vendors~docsearch.4a9d9afc.js",
    "revision": "5eaba87c46cf5f501aa1d4ca2a8f61b3"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "60d3d85d9c0f087824b49bd978402a34"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "4b40bbf3e7a4da66730c59dc1a36c986"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "a9e888b4b1a9fc1e519e78b6542a72c0"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "661b88f72de96771e86c6eca47abc75c"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "cc88721b2a1b216f80c6ca26f657131b"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "eaabe2cfebaef991cceca03b856377ae"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "06178e060bf92d79ce9ff71fbe206f23"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "f25d4ee0410903e0e23fa61e77d9c397"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "4b28607ad68290c280f9a96b581f2b06"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "b61e4960fa65b734cb3277775fca2a23"
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
    "revision": "a34048cb563554d2fac1206753aec167"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "a1e5e137f0f283f8564cfdc7b7b0e916"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "334ef3903e5e066f91425019dda6f499"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "c9482dc3189eb811e2b268b6b842ace9"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "f1b32e5a40aa66de06bcb7639db3b9c5"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "056502be8ffa8efbd4b44b9165e2a801"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "b9bc8edf47ecfe9f84f4762ab9f331c7"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "a303652c6f78fd572f9020a81f64ab91"
  },
  {
    "url": "resources/books.html",
    "revision": "e2fc0df22e5a3bfcb7a950894e8467fc"
  },
  {
    "url": "resources/community.html",
    "revision": "339ca7dad5a40f5992718f0297000873"
  },
  {
    "url": "resources/conferences.html",
    "revision": "59c5f3c752f6a4bfe21ce1d48d479917"
  },
  {
    "url": "resources/examples.html",
    "revision": "76e14aa959db8064287b070faaad1ff4"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "461c98d40f4799b017f430ba7940fd06"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "13a5a5b6b74c78a5d58e8323578e1b22"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "6709087c2bb379a9fc7c71e39729e92e"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b5ecb0c26b98026940a3b21dc503a6d4"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "95568fbddd8fd7761940dc98e968121f"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "98a9d42102917e981b75b4719624b237"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "9d7c8c7ce007fe2ba53910145556708b"
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
