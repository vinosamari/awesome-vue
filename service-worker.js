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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e78e8b6eda166de21131835c8fd8cc18"
  },
  {
    "url": "assets/css/0.styles.f9a75f71.css",
    "revision": "3733e9256308b77a15bcd7df96202c06"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f1d39c2b.js",
    "revision": "24295a3ec1cb49115055a84369f8b33f"
  },
  {
    "url": "assets/js/11.e3587e3d.js",
    "revision": "080f56e7b951700ed5cc3f9af9649a12"
  },
  {
    "url": "assets/js/12.03980947.js",
    "revision": "95356c46e9d6161b0d849bcb34d983ae"
  },
  {
    "url": "assets/js/13.2025ce78.js",
    "revision": "3e183aa3d604ff70bb47711bd0a6ebfe"
  },
  {
    "url": "assets/js/14.ffe4542e.js",
    "revision": "c2e62998ac3e81167ea74873e1fd9ef6"
  },
  {
    "url": "assets/js/15.59432682.js",
    "revision": "e0a9d19427ff6f9148521cc590f8dcbb"
  },
  {
    "url": "assets/js/16.4d9405dc.js",
    "revision": "78987c6a9030b0a4ad1c9a522e670075"
  },
  {
    "url": "assets/js/17.529331dc.js",
    "revision": "64cb644f010e33e6bc6604928f4d71d0"
  },
  {
    "url": "assets/js/18.0208e544.js",
    "revision": "c13793756913e1d66eb33b4707d2c961"
  },
  {
    "url": "assets/js/19.0738d19a.js",
    "revision": "a3e32d3bab1fef0a72a8352ca2ba1624"
  },
  {
    "url": "assets/js/2.4b44695e.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/20.4f13097c.js",
    "revision": "b43e3bf5e063f950f690801fbee0ab0f"
  },
  {
    "url": "assets/js/21.335d386f.js",
    "revision": "e928aa71953350a8ed6ff50192d71863"
  },
  {
    "url": "assets/js/22.9ce44a02.js",
    "revision": "f2d3ccd4b96692678506836fbcfba159"
  },
  {
    "url": "assets/js/23.7df9d7cc.js",
    "revision": "00a00c5d1b652395c22801b49e74b52b"
  },
  {
    "url": "assets/js/24.27d27de6.js",
    "revision": "57262ae6888429a6f41814a79d659594"
  },
  {
    "url": "assets/js/25.389b758e.js",
    "revision": "cc6686c798bf8f277702713718e3f98c"
  },
  {
    "url": "assets/js/26.08c81180.js",
    "revision": "6de92bb41496c846dbe52fdff2ede5a2"
  },
  {
    "url": "assets/js/27.b8d44a34.js",
    "revision": "0f4814531905a3962a621f5df2c0b916"
  },
  {
    "url": "assets/js/28.82081257.js",
    "revision": "4d3a9cfdb7d6b181da17f819b36d5a3f"
  },
  {
    "url": "assets/js/29.c2f1359a.js",
    "revision": "5cd0550975767785351685454183cc84"
  },
  {
    "url": "assets/js/3.56cb5c48.js",
    "revision": "51095e57112cf623aa21bdac4093ec8b"
  },
  {
    "url": "assets/js/30.d3f1eaf0.js",
    "revision": "04f95a3bac3387489ec9860e6f986344"
  },
  {
    "url": "assets/js/31.0d38ea4f.js",
    "revision": "218935f89f66ac38ee24da3fb5352eca"
  },
  {
    "url": "assets/js/4.eaf50496.js",
    "revision": "d75ae242ece4daddf759254a722abd77"
  },
  {
    "url": "assets/js/5.930de28c.js",
    "revision": "69622800475b6311acda3b16bc939e88"
  },
  {
    "url": "assets/js/6.55aa710c.js",
    "revision": "643a22949ec4efca8d21b08a359e8e9a"
  },
  {
    "url": "assets/js/7.365aaae8.js",
    "revision": "1d7b2b1d97ecc870413bd026cab8235c"
  },
  {
    "url": "assets/js/8.c3c6a046.js",
    "revision": "44e35f7cd895f8415590ac005452e4bf"
  },
  {
    "url": "assets/js/9.45bfc2df.js",
    "revision": "c6ac271d698584f9221f33c6c512d362"
  },
  {
    "url": "assets/js/app.05b04bf0.js",
    "revision": "ba9a7ae235e142e1c412660a1b7a41c4"
  },
  {
    "url": "assets/js/vendors~docsearch.800b1046.js",
    "revision": "7b81ca399e6d24c867f37c9d580c3001"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "57b40f2f4b02f59b03a92212cbffe2d2"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "4517688a7e9da4157c06ae15dc73e001"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "271dd1fa46cce5610ec1e331c10fd971"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "260aa698920db5d34ff4e0e59b879307"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "85ac6c15a8309936aed5e7d0122f704c"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "859fb641ecb686d7f1a8e9217c709382"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "06af71be441e8c24314c6862e26384da"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "0a2d71e54e81f189d25caa02031a723c"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "65929edc6b30b04a4fc5f58a305337e8"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "67bf09ada624be1168df4b7cf08ad4f0"
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
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "7bffccee82e15b856ff052661ec2c132"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "39ef4093fc7535453340c96dae8e36bd"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "82f2c029d417cf7f9561953401ebc752"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "3d712402c31316fbdb209697f8f1a6e7"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "41044f76cf4187b32ee5863ed08a9c39"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "33151d0e3f0b05e4da512f0d9cb5c817"
  },
  {
    "url": "index.html",
    "revision": "642a6e003814340a487edf32693cefea"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "b16f968bc9b69030cf557d510a2685b7"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "a9b31fa539d365ce127c3889968aa742"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "5dbf61ec96f889a31b98ba2b3d621ef9"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "5d782e77d4acbaceda3d9a7d798a4c02"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "fe933a71d9e2306f54c203891ae89c1f"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "4e897f33f0efc68dcb4fb31fbc2aee7d"
  },
  {
    "url": "resources/books.html",
    "revision": "a075a76d55589dfe44e608cd27cf9975"
  },
  {
    "url": "resources/community.html",
    "revision": "95f95f1de578138b055905005597d0b6"
  },
  {
    "url": "resources/conferences.html",
    "revision": "64d4e4b298c8e5f65935af43532fc2a7"
  },
  {
    "url": "resources/examples.html",
    "revision": "c1ebc4480f074e34cf4efabd3b46ad2d"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "1aaaa82f62e109d3938af39deabb02b3"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "4845a7323ff172c05b794096572bc815"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "b08806bbcbd95a579cca6a3c4e85e116"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "b59677512e0837b5e83b851b4a8b2b06"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "1307de0b691a5da0e1836b426cee5b37"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "bdc6f6b4856ae51e80863db56b6c33f8"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "e0f25375f984c9671ba436f8de318bdf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
