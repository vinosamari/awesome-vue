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
    "revision": "3ebc3da0879e352ca80c7d4c970c0b17"
  },
  {
    "url": "assets/css/0.styles.d65ded85.css",
    "revision": "5aef16aecb6bb53976ec7d6ba49b812e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a3c02986.js",
    "revision": "3622b4916db623a0e0785500cecfabbf"
  },
  {
    "url": "assets/js/11.d4c1073f.js",
    "revision": "b9fcecff315be1146d6adc87cf6b267e"
  },
  {
    "url": "assets/js/12.0c870740.js",
    "revision": "c4bd8497aca0fe92d44c817bf8243c5c"
  },
  {
    "url": "assets/js/13.2d40a9fb.js",
    "revision": "caf5af8ac2e8259f823e45042f308d96"
  },
  {
    "url": "assets/js/14.fd31a04a.js",
    "revision": "297006eb6f32016e9ae662f95f9f88cc"
  },
  {
    "url": "assets/js/15.f2501f9f.js",
    "revision": "aaab934bad416eb56f4e62ff06477633"
  },
  {
    "url": "assets/js/16.53ac3397.js",
    "revision": "7e48aeebc64b1faea61572ca0cf10fbd"
  },
  {
    "url": "assets/js/17.4988c739.js",
    "revision": "b9f54301363d0189662d5d06988ffd59"
  },
  {
    "url": "assets/js/18.269c6d36.js",
    "revision": "7376c7e512ef1649861e19376a43a823"
  },
  {
    "url": "assets/js/19.7105e5e0.js",
    "revision": "de40537ed032e74030eed9bab7d69330"
  },
  {
    "url": "assets/js/20.761164b1.js",
    "revision": "a91376a3932f52dc665ecf5d054b33d2"
  },
  {
    "url": "assets/js/21.beebc5e7.js",
    "revision": "910090dbba5b0baf37f404cc6889df44"
  },
  {
    "url": "assets/js/22.79f828bf.js",
    "revision": "bbf7d2f9c759fd8c3fa5a44099f2ebf8"
  },
  {
    "url": "assets/js/23.046d1805.js",
    "revision": "3b06b965e150f3631f119f71febc935a"
  },
  {
    "url": "assets/js/24.5a52fc54.js",
    "revision": "ed43cca3d9219874be9376290c43aeb3"
  },
  {
    "url": "assets/js/25.83d89624.js",
    "revision": "98ef330dc5974912946995c15ed3eb71"
  },
  {
    "url": "assets/js/26.9fb1bb6d.js",
    "revision": "8b6af579d409d602d0e783d99af21236"
  },
  {
    "url": "assets/js/27.c36a9e21.js",
    "revision": "6401aad6228500b16157a5022742a862"
  },
  {
    "url": "assets/js/28.660fb75e.js",
    "revision": "b27fc6be177613d7a3cb5906489ed210"
  },
  {
    "url": "assets/js/29.c63048d7.js",
    "revision": "05a325ef856a78cae54f15f8542677c2"
  },
  {
    "url": "assets/js/3.e5d58d87.js",
    "revision": "01797fd49699c089fb4092526150e2ac"
  },
  {
    "url": "assets/js/30.f714a0ce.js",
    "revision": "54b9d5a7da5bd8c70b9cf837481cc6ff"
  },
  {
    "url": "assets/js/31.a33f831d.js",
    "revision": "654fdf851635f048e69f1fb6010d43f7"
  },
  {
    "url": "assets/js/32.540ec4d4.js",
    "revision": "7398b0257000f48793e08c5610deef46"
  },
  {
    "url": "assets/js/33.acb68369.js",
    "revision": "33601e391d4e82060b7e61938fbaac57"
  },
  {
    "url": "assets/js/34.d95eee31.js",
    "revision": "eca624442f8ded4ebf08498c2e8b6974"
  },
  {
    "url": "assets/js/35.35d0094a.js",
    "revision": "d76745169073f9b97eb4f965ace69af7"
  },
  {
    "url": "assets/js/36.31f0092f.js",
    "revision": "5ad5fe3ecfcb2372b6f5efbf74da813b"
  },
  {
    "url": "assets/js/4.8be15e0a.js",
    "revision": "d50775f1a02e337ab61e5c110f259c6e"
  },
  {
    "url": "assets/js/5.b959bf89.js",
    "revision": "77aed24fb12d9d205b29810c76fd0ea4"
  },
  {
    "url": "assets/js/6.3f782997.js",
    "revision": "ef52fa4c37cf6721547aaf764032b28d"
  },
  {
    "url": "assets/js/7.51a34df3.js",
    "revision": "4ef58fc23f82090f011f6257406b324d"
  },
  {
    "url": "assets/js/8.8dde3572.js",
    "revision": "32c5694cb0aebf89834a0372b7e31bcf"
  },
  {
    "url": "assets/js/9.a50809bf.js",
    "revision": "4997172ebe968405ada6e3e45a6017b7"
  },
  {
    "url": "assets/js/app.613e0a80.js",
    "revision": "6674ebca893bfebbe69510d2727aab22"
  },
  {
    "url": "assets/js/vendors~docsearch.45803c93.js",
    "revision": "22c66d04b3add4e4e7985a7b41769d5f"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "0274d7dd0222282bf61c40040593133e"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "872d5ae51019c49022a0ccd2957623f2"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "073f261822cc03153a98582e66c74b02"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "da9139c2e1213a1d00f2566f3058339e"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "c02d5b586de30354daf4211403547f3a"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "dfa28279dc3a7e86d79fd86e245770a5"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "4e96dfe4e6a27a4bb0346e89516adbb1"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "56c335de77e2a0bacba7153cf329e68e"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "e5235feb2e3cc80d5fbf4fbe482b6eae"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "0fd20da11bbaf4a320be339d2164d770"
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
    "revision": "0a4629ac8e5cb9b2da250de5ae994601"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "6ae878bff65090140a65621de4d551ce"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "c3c9984dccdec404717e7773c4f100e1"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "9a1079cb3eff81a1bad40b90110bea79"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "c797d01f5f074bfa528cebb7cc0b329a"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "fecc3fdd91b64372ac9c2c4c5566e895"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "b25bb070cc54714c238f5a820e07c2c3"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "c6de28ad6cf6c7999bec73c5912dda2f"
  },
  {
    "url": "resources/books.html",
    "revision": "edbfaa98c9a60059eb8b0ac5dcac4e3f"
  },
  {
    "url": "resources/community.html",
    "revision": "8236aa023788cd51dab14a87492d4410"
  },
  {
    "url": "resources/conferences.html",
    "revision": "6a8b268007aabb9ca09f9c5ee761c354"
  },
  {
    "url": "resources/examples.html",
    "revision": "7d48aa5ccbf79beed41288aac0026760"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "7537151ac601fa6fe2e657a2f266a097"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "a045bcef011a4cbfa75816674c23da6c"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "5f7fe32d4dd10cc00afd88af63924adf"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "ceda31367e692b3546997b668c2c3736"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "8638aec9a6fdf1d3ed5b300cfc4e8050"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "e6df0632064fe033f47b37a9119a9041"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "4426f4a9941b4f97816168f4e66b73c5"
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
