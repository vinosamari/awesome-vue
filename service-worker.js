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
    "revision": "1903dadd5a51a6091f87f05efa48aad4"
  },
  {
    "url": "assets/css/0.styles.beee4a9e.css",
    "revision": "5aef16aecb6bb53976ec7d6ba49b812e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0e6135f7.js",
    "revision": "3622b4916db623a0e0785500cecfabbf"
  },
  {
    "url": "assets/js/11.e575585a.js",
    "revision": "b9fcecff315be1146d6adc87cf6b267e"
  },
  {
    "url": "assets/js/12.a6e78e12.js",
    "revision": "c4bd8497aca0fe92d44c817bf8243c5c"
  },
  {
    "url": "assets/js/13.8a8e9156.js",
    "revision": "2d14f30c55bb56891481cef53d83deb5"
  },
  {
    "url": "assets/js/14.e9dab686.js",
    "revision": "98e736ad000862dc80cc0d8664a5974b"
  },
  {
    "url": "assets/js/15.076bbec7.js",
    "revision": "aaab934bad416eb56f4e62ff06477633"
  },
  {
    "url": "assets/js/16.2c4d645b.js",
    "revision": "7e48aeebc64b1faea61572ca0cf10fbd"
  },
  {
    "url": "assets/js/17.29786003.js",
    "revision": "b9f54301363d0189662d5d06988ffd59"
  },
  {
    "url": "assets/js/18.de423576.js",
    "revision": "7376c7e512ef1649861e19376a43a823"
  },
  {
    "url": "assets/js/19.fe8779d6.js",
    "revision": "de40537ed032e74030eed9bab7d69330"
  },
  {
    "url": "assets/js/20.b1fded91.js",
    "revision": "a91376a3932f52dc665ecf5d054b33d2"
  },
  {
    "url": "assets/js/21.f51ac8b5.js",
    "revision": "910090dbba5b0baf37f404cc6889df44"
  },
  {
    "url": "assets/js/22.72f0b39a.js",
    "revision": "bbf7d2f9c759fd8c3fa5a44099f2ebf8"
  },
  {
    "url": "assets/js/23.191710a4.js",
    "revision": "3b06b965e150f3631f119f71febc935a"
  },
  {
    "url": "assets/js/24.75b59445.js",
    "revision": "ed43cca3d9219874be9376290c43aeb3"
  },
  {
    "url": "assets/js/25.77d7013b.js",
    "revision": "98ef330dc5974912946995c15ed3eb71"
  },
  {
    "url": "assets/js/26.348491aa.js",
    "revision": "8b6af579d409d602d0e783d99af21236"
  },
  {
    "url": "assets/js/27.edc1ecd2.js",
    "revision": "6401aad6228500b16157a5022742a862"
  },
  {
    "url": "assets/js/28.a841022e.js",
    "revision": "b27fc6be177613d7a3cb5906489ed210"
  },
  {
    "url": "assets/js/29.094ecf77.js",
    "revision": "05a325ef856a78cae54f15f8542677c2"
  },
  {
    "url": "assets/js/3.fbc68953.js",
    "revision": "01797fd49699c089fb4092526150e2ac"
  },
  {
    "url": "assets/js/30.c27d7584.js",
    "revision": "54b9d5a7da5bd8c70b9cf837481cc6ff"
  },
  {
    "url": "assets/js/31.b212270f.js",
    "revision": "654fdf851635f048e69f1fb6010d43f7"
  },
  {
    "url": "assets/js/32.b8eb6908.js",
    "revision": "7398b0257000f48793e08c5610deef46"
  },
  {
    "url": "assets/js/33.6d0196c1.js",
    "revision": "33601e391d4e82060b7e61938fbaac57"
  },
  {
    "url": "assets/js/34.cee06f25.js",
    "revision": "eca624442f8ded4ebf08498c2e8b6974"
  },
  {
    "url": "assets/js/35.4f2580c6.js",
    "revision": "d76745169073f9b97eb4f965ace69af7"
  },
  {
    "url": "assets/js/36.c23c7b18.js",
    "revision": "5ad5fe3ecfcb2372b6f5efbf74da813b"
  },
  {
    "url": "assets/js/4.4f08324e.js",
    "revision": "d50775f1a02e337ab61e5c110f259c6e"
  },
  {
    "url": "assets/js/5.14330b7f.js",
    "revision": "77aed24fb12d9d205b29810c76fd0ea4"
  },
  {
    "url": "assets/js/6.158ba71d.js",
    "revision": "ef52fa4c37cf6721547aaf764032b28d"
  },
  {
    "url": "assets/js/7.a4e439fc.js",
    "revision": "4ef58fc23f82090f011f6257406b324d"
  },
  {
    "url": "assets/js/8.7c531104.js",
    "revision": "32c5694cb0aebf89834a0372b7e31bcf"
  },
  {
    "url": "assets/js/9.34b4f2f0.js",
    "revision": "b8edb29b65cf7598f8d4b5eec1f0bc2f"
  },
  {
    "url": "assets/js/app.327921eb.js",
    "revision": "74c12104015d2d2e023540094c335f1c"
  },
  {
    "url": "assets/js/vendors~docsearch.340943f1.js",
    "revision": "22c66d04b3add4e4e7985a7b41769d5f"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "05153ae7e52b49234cceec662082421b"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "b3766cd0827e6a5310ada0e8f0d01f56"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "774908ffa25cdc233c0c47e788182d82"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "244c41a461fc590b503dea5fe1e626bc"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "fc3b8863c563777689da454b7d87c937"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "2ab4c8088115de6058a1711845306b5c"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "d8c607e170070fe251ab81ef184a849f"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "68f67c653241089f1b66c0d49764c25f"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "428819d5ffc03cb4256225c3a264a1ec"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "37a36496b7da5f2019ea713afcee5996"
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
    "revision": "98d155451d20bc5b58cf5272a36bfb38"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "334d83d3e46d91c8bd67b742c6c20c81"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "e4e7fe683eb7de5341171c446f0568d9"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "2b004919c325bb5e67b83fc1d853ef25"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "427d59e919aa08d36c4128baed45bd91"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "297c1dbcf1f307e815ce1ea0d3cc00d0"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "a5137fed8c382e52f8ac2262220563bb"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "d32060d316f6b919d029448a4a840bd8"
  },
  {
    "url": "resources/books.html",
    "revision": "6e991f14a0f5100c9afb931ad6050f8f"
  },
  {
    "url": "resources/community.html",
    "revision": "c8cc8824a436dc0d24a9e0f51d30200b"
  },
  {
    "url": "resources/conferences.html",
    "revision": "1fda78cd168a4cb18a6688e9f598fbe6"
  },
  {
    "url": "resources/examples.html",
    "revision": "b07588a83c7230667091ad3e6b045c93"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "458f53b0baa2442b8cee12a3be5a9dbe"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "01d0218d956a0901b92c7c6b634b5917"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "01d3def5d8595bd3bfff1576237adfd8"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "0b69acbe4f0743542f107f3499149e03"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "2a4a8ab9354d317947f9869bee72110a"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "4ea5ed6abcfb8bac4d1cca7d7c1c5b44"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "ce44e3454392bf1055aa57b1c0a2c01b"
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
