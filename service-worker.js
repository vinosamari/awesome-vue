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
    "revision": "77610113e3ff09dff567578d8251c793"
  },
  {
    "url": "assets/css/0.styles.61a27945.css",
    "revision": "1291b6d22fc0526eab41e499766178fe"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f6f2b2e7.js",
    "revision": "955fa0a8bc6bbd30cc86769e6bf9aee9"
  },
  {
    "url": "assets/js/11.2512b5e4.js",
    "revision": "4fff4a26d1a64235c1544da2f16a4242"
  },
  {
    "url": "assets/js/12.06367b4c.js",
    "revision": "043cb260e51dfd16edbb9a9e0e7cea2c"
  },
  {
    "url": "assets/js/13.34f1931c.js",
    "revision": "abc811fbd0ad195c9f3b31f18084a8a6"
  },
  {
    "url": "assets/js/14.2c8894ca.js",
    "revision": "4e00e23e11000ef104ec905966b7d82c"
  },
  {
    "url": "assets/js/15.a1c5af44.js",
    "revision": "2925cfe46cef8cf4619eb74d6f164d37"
  },
  {
    "url": "assets/js/16.c69f30db.js",
    "revision": "4e04220d074160a8f80ca4d4f6c7aade"
  },
  {
    "url": "assets/js/17.6cf514d6.js",
    "revision": "13ad8b7909ffe9ddba708c67a61783ae"
  },
  {
    "url": "assets/js/18.7066fd7a.js",
    "revision": "c761c85100cc04de4682dcdae7ff1892"
  },
  {
    "url": "assets/js/19.aa2a9abb.js",
    "revision": "cceca1ffd4e5715a309dd638b5e68137"
  },
  {
    "url": "assets/js/20.5dee4820.js",
    "revision": "0fc07d2db88ee0adedb671de5259c231"
  },
  {
    "url": "assets/js/21.6c52adcd.js",
    "revision": "6604aafeb78ee32a3f874c8d927cf09c"
  },
  {
    "url": "assets/js/22.8bb51312.js",
    "revision": "22100ef0a606391ec379fefec53e6d2b"
  },
  {
    "url": "assets/js/23.7ebe3d5b.js",
    "revision": "d61c06154642178c2fc3ae4e02dbfd7f"
  },
  {
    "url": "assets/js/24.e647dcdf.js",
    "revision": "d55cb1a42ad6b08b170a9a468001852d"
  },
  {
    "url": "assets/js/25.e7d66833.js",
    "revision": "3e96cd5582fb689723bf17ec4615ca2b"
  },
  {
    "url": "assets/js/26.270e2b3f.js",
    "revision": "122166c725460c03974a4ce58428ff5a"
  },
  {
    "url": "assets/js/27.c7d00594.js",
    "revision": "fa2a28f915b2b7b492fcb2be4bc81a4d"
  },
  {
    "url": "assets/js/28.94250173.js",
    "revision": "8db1415b231e395afa3b02dc42f823d3"
  },
  {
    "url": "assets/js/29.0fe7c350.js",
    "revision": "79891e78d1675313243498a4eeb5ec63"
  },
  {
    "url": "assets/js/3.ee39270b.js",
    "revision": "e108c0aa67a9c9a51282edc106f4802b"
  },
  {
    "url": "assets/js/30.2fec49e8.js",
    "revision": "e91cbaa8f339011b78e750327e84ec68"
  },
  {
    "url": "assets/js/31.ad45364a.js",
    "revision": "8eb818ec4f543ea6364e971a03362455"
  },
  {
    "url": "assets/js/32.8d424d64.js",
    "revision": "bee2b0651dd11e385ba5271d40de2ae1"
  },
  {
    "url": "assets/js/33.f8b0fd49.js",
    "revision": "b195a798054f7cd5957d257d65d6f9be"
  },
  {
    "url": "assets/js/34.993fb929.js",
    "revision": "2631bc7aca2ed6a1b8cf456d486980f4"
  },
  {
    "url": "assets/js/35.b66730fd.js",
    "revision": "7bd56f1a0549284d153d6c15dd1b930b"
  },
  {
    "url": "assets/js/36.146efcad.js",
    "revision": "40d8023a4b0fbb898a215ef276a3f490"
  },
  {
    "url": "assets/js/37.788b5d33.js",
    "revision": "38383dcd8c4f39ee10c915b940b0d563"
  },
  {
    "url": "assets/js/38.4015c557.js",
    "revision": "0a9689d56045768d7a524e0f3e7925fe"
  },
  {
    "url": "assets/js/39.7b8bd821.js",
    "revision": "fdc90754ac0c402af4b1a76e7e5d892f"
  },
  {
    "url": "assets/js/4.77880ce0.js",
    "revision": "6760cd938d1485f127d99a0291eb8181"
  },
  {
    "url": "assets/js/40.c7cbba88.js",
    "revision": "53e62a1b4987c045c1a5569de48d6064"
  },
  {
    "url": "assets/js/5.a30d82a1.js",
    "revision": "68feb4730f79f343e6589d8c8192c831"
  },
  {
    "url": "assets/js/6.4ad548bb.js",
    "revision": "1545c6a848a161c0441a5151aeebe3c9"
  },
  {
    "url": "assets/js/7.d0bc59da.js",
    "revision": "d6344ace030106e3c6cb7333b2257a82"
  },
  {
    "url": "assets/js/8.e0ff736b.js",
    "revision": "eadd3d0c984b4dca965079f6bfea2349"
  },
  {
    "url": "assets/js/9.5a5654d9.js",
    "revision": "544883e1ee9ab4fc93f6d0c3b8da6ee0"
  },
  {
    "url": "assets/js/app.f8714b15.js",
    "revision": "0659aa7509e5d21f5b6bdcc42fabc094"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "d3d612a1d45f1221b47f3b9cc5b5d194"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "b9cb5784a37b065f96d22b3cd7916c5d"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "f0dc480db1fd14082230fd7c0ea52647"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "4977f4d74d3d34640f8b6115c61f5b89"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "99750c3fc6c83c894c81e68e933046b1"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "62a8f61b97365a74dec85f81d96fa9b5"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "65ab18c1b4843755decda7bd8ea7a608"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "5174225df0d06c52ca108e82a20ad841"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "2edcaa6c9f046186855686fdcd9828d5"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "acb2247203363bea327ec1fc9f7b5845"
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
    "revision": "348899e6756e04dc3b8ff79f37f759b4"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "66f5c142b8e485bed7f952bbf861723c"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "9d79e4d0fe1ef7414cf2abb9d8c0ce82"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "6376cc064a24358fa5dd102c3fe257b5"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "86cb5542d48e66758c45d2b160be5476"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "8fd74e1eeed5bcb2cc6161506ed85821"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "c732c472662d9dec077e093e5f81bd82"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "938004e899d341ea52cc03f0a1ddb626"
  },
  {
    "url": "resources/books.html",
    "revision": "d20ddf4f79f5af16809b382c833621c6"
  },
  {
    "url": "resources/community.html",
    "revision": "77c7c2d9161091cfaa5160d484da4521"
  },
  {
    "url": "resources/conferences.html",
    "revision": "2d54e38ffff08d4e027ea7000457b4df"
  },
  {
    "url": "resources/courses.html",
    "revision": "d662e335808df5ae1d5cd908feb2f5cd"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "fda1f0a81a40ad0275a8386a11427ebe"
  },
  {
    "url": "resources/examples.html",
    "revision": "ade5bf706d9e4df12ac01a8d22489d23"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "f1f3a7a93f94fbd3d2afeacc8eeafb02"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "458a92d28a7ee7501591d1313fbfa576"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "6866f216d48a806f435fe68042cf241e"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "1722cc9bc2004686130ad1e86a38f8e8"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "1c9ba329e4a09de847799daa32b4d879"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "26021052c73b6999df77aa6fbb52c82e"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "c11fbb4d962b27a48729b950c55076e9"
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
