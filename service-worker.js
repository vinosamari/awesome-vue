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
    "revision": "1c71ab0e59ff2ff81f1399831b07b550"
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
    "url": "assets/js/19.5bf0d33b.js",
    "revision": "c9e6af3f73680a9efce2ead7db4dd540"
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
    "url": "assets/js/app.b0e3c16c.js",
    "revision": "afd95b2a6b7390f780f50293b6cf3550"
  },
  {
    "url": "assets/js/vendors~docsearch.45803c93.js",
    "revision": "22c66d04b3add4e4e7985a7b41769d5f"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "bee4424105d63a07a36f6e2c7401d666"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "52a327fc300aca3eebea42df984635bf"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "b7519308ce17243e12035b1502faf607"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "77bc304f990a50cf02b374d2230e8e82"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "e1b1078c54e1d638168c6589b737640c"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "41915b3a8267edf6169d48a6b4937dda"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "d8689409650e87f3552c8769e6596d57"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "67051709312876263e19857ead40572a"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "fd5fe6359390e6302f51530a8a3dab7d"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "fb985bef7a74face5a677cc1cb854eec"
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
    "revision": "c0396b0ea6b5434af82b62209154cf0b"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "96f813fc28e0bab4d5c03dfb05edff52"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "88ff78c3f43148312ca8fd38dd73f048"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "89a589a130eb5e7cd7e7c7532fd564bc"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "a873e6cfe1a5f651f9c1f7dc0e446d1a"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "7214fbdad2054d29c6915c33222ced55"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "bf2a5826d0135b46254e3ed3d3daf3ba"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "2b6c6a5dc1dc0ff320d398e4ce41fc36"
  },
  {
    "url": "resources/books.html",
    "revision": "0fe5c935d013ef532b12b244938703a6"
  },
  {
    "url": "resources/community.html",
    "revision": "46e4ac84128931768379dd0450a445c3"
  },
  {
    "url": "resources/conferences.html",
    "revision": "993ab28b0efa176cc4f1dd7663b99c6b"
  },
  {
    "url": "resources/examples.html",
    "revision": "36b5d1e64fa1c85974d6a169ecc5f18c"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "3d118e6b801f2874d99c5c1341c4bf2b"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "db8eaa967cacbb40daa511fe80bceb13"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "ea4338dda4cea94e6d37c7c3c6db2c84"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "f01e5b97d25c3b0b6b8beb2f767b007e"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "8f0e4b63d48a6736b39f1f377a94924e"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "fc69792c5f1a02ed70528ec58d58e463"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "c8bc732d09c8347bc4e8fa6f7699bd73"
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
