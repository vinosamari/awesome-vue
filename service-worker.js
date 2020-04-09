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
    "url": "assets/css/0.styles.436faf72.css",
    "revision": "09e11fa6a61b7eb6294f6f0417a93cb7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f76a7a85.js",
    "revision": "7aabc5ab5c1feeb1773686a25a9becf4"
  },
  {
    "url": "assets/js/11.36b68626.js",
    "revision": "1945cef88658c5576f12816960538183"
  },
  {
    "url": "assets/js/12.b85f755d.js",
    "revision": "cf2a9cc32ab4151961bf7bd070667c51"
  },
  {
    "url": "assets/js/13.0eddf9e5.js",
    "revision": "e82655380266b1e2f0c3aef6dd4aa279"
  },
  {
    "url": "assets/js/14.cb1d4cfa.js",
    "revision": "4bb1eed91c1cc04deba106a9573ceb2d"
  },
  {
    "url": "assets/js/15.69f678f4.js",
    "revision": "65b31e06179208cb2af3966ba1468e58"
  },
  {
    "url": "assets/js/16.6ebb9802.js",
    "revision": "5fea908ae4ad36cad30fceb130de4a05"
  },
  {
    "url": "assets/js/17.ff575d10.js",
    "revision": "eedf297856d897c6e5496015bf2fde44"
  },
  {
    "url": "assets/js/18.5a45066b.js",
    "revision": "61f991b7f9bf6fafa9d3e606acf81300"
  },
  {
    "url": "assets/js/19.9388d30f.js",
    "revision": "3ffb52895aee59be4c9b1647eada35fa"
  },
  {
    "url": "assets/js/20.cb3c8164.js",
    "revision": "e48bcd7e285e0a56b141b328db4d8385"
  },
  {
    "url": "assets/js/21.4e784d76.js",
    "revision": "5af21771817bc14fc7fd2d48332ba852"
  },
  {
    "url": "assets/js/22.d4ab2172.js",
    "revision": "1b51115460564a1f0e512ddc30a47d8d"
  },
  {
    "url": "assets/js/23.64d129c4.js",
    "revision": "aba406f96dbfc142037a9d88d5beb665"
  },
  {
    "url": "assets/js/24.59f93c9c.js",
    "revision": "b31e41c3ca8d94f12f3ad63fcdfa6fba"
  },
  {
    "url": "assets/js/25.31e64e1c.js",
    "revision": "92c20245148f580d8fea7264aac8b4b5"
  },
  {
    "url": "assets/js/26.8d483d76.js",
    "revision": "7a749aa708afd07a0597b13ab75b0e51"
  },
  {
    "url": "assets/js/27.000ca510.js",
    "revision": "550ab92182cc769e997b8891b2753fe4"
  },
  {
    "url": "assets/js/28.c234520f.js",
    "revision": "a28f979a73646dffee2cc9d3db81819e"
  },
  {
    "url": "assets/js/29.829692a1.js",
    "revision": "ba9856f29d965bf6dab5f9853408b8eb"
  },
  {
    "url": "assets/js/3.4d649191.js",
    "revision": "78751c2dcca2b99172ca8f8318d2d958"
  },
  {
    "url": "assets/js/30.228790d4.js",
    "revision": "9dab79fff1071eb886340469e0b75011"
  },
  {
    "url": "assets/js/31.469dd5ae.js",
    "revision": "85ccdfeaffbebe6c086b2727c06b33de"
  },
  {
    "url": "assets/js/32.4bc7f1d7.js",
    "revision": "7a300cf3cb56416ba4326d0587654e70"
  },
  {
    "url": "assets/js/33.e92343ae.js",
    "revision": "3dce2573e471fd7a65d5e88d02b00617"
  },
  {
    "url": "assets/js/34.ee32fb74.js",
    "revision": "1c4a8e5c147684f4911dd5bee372d4f6"
  },
  {
    "url": "assets/js/35.eea7b551.js",
    "revision": "322f381f00b6b30ba8b76c571c09ba29"
  },
  {
    "url": "assets/js/36.c7e478ff.js",
    "revision": "45eb8c0d0abd9c33759bf50cd2b55103"
  },
  {
    "url": "assets/js/37.fc8f9b9e.js",
    "revision": "3dfa6c910139f12788b045f7a1be8902"
  },
  {
    "url": "assets/js/38.76056c20.js",
    "revision": "a5ef3b807b7c14ac4e80b3035c24abb2"
  },
  {
    "url": "assets/js/39.0bfb5e54.js",
    "revision": "324048726bde97ecc81b9b6c20ee8023"
  },
  {
    "url": "assets/js/4.908c1a64.js",
    "revision": "eee6245d1294d46021712dfd46cc25bf"
  },
  {
    "url": "assets/js/5.0cdd0de4.js",
    "revision": "ef2ff63c015a77245d66f75437abe6e8"
  },
  {
    "url": "assets/js/6.9865bf00.js",
    "revision": "9004722f744a4a885c3aeee545ae9922"
  },
  {
    "url": "assets/js/7.a7f16fd6.js",
    "revision": "9763b75cc4d6da4eb2ef520123479f79"
  },
  {
    "url": "assets/js/8.3d92d877.js",
    "revision": "0bae4959e17471968c8e8affde20b8f5"
  },
  {
    "url": "assets/js/9.5286745d.js",
    "revision": "a76892a34e5448aed2ea4f944275c9a2"
  },
  {
    "url": "assets/js/app.c41cc46e.js",
    "revision": "4916569777fa19428ca17e87bcf16ca3"
  },
  {
    "url": "assets/js/vendors~docsearch.cb998e4b.js",
    "revision": "7b0136a228daf0b9ed9dd8f2319dca13"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "460b8d1fb71112726575394dcf949c32"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "25fbb65c1a41bf4cbfed50d47feeac21"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "30c0289ce9b5c99d44f382f71c60413c"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "9d073b363a4fee236b6b211af665fd22"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "810f1eca33b18309f3b5e0b89b397790"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "eda39478e5faaf6e6e4bd42e3916139d"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "290620f146bdc9a0ea74784ad21ea7ce"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "6e550890c2224291156b73871edb24f8"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "75bf7fb8c3d10ad830ebb9755878db7d"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "26033a0eda422b0e3408d72054036d28"
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
    "revision": "77a1e4e74c97680058993ae4767f6d53"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "f173e4168a6ca3f08f798f6685e01ef4"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "3c4ea8adf876585b9af4238a6b9e4116"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "8b9f88ac05c55e2dadb51c53ffea63c9"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "3e3ee3517ffc36a78877657c3d2a1896"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "d76b59c8e5aabd0a8bf8d800b66d70da"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "cee54f68a87b7611c6f368cb53ef4717"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "3a3ae497f3631ce6a5265a92afe2848c"
  },
  {
    "url": "resources/books.html",
    "revision": "8a697dd853861ff71019d06b5cc5df79"
  },
  {
    "url": "resources/community.html",
    "revision": "61af2bb874bc89550cb06367b1980948"
  },
  {
    "url": "resources/conferences.html",
    "revision": "c80b5f59a944c0dad9830eed633e8dfc"
  },
  {
    "url": "resources/courses.html",
    "revision": "5606a5b4287a5f03737ff20e99de5405"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "92953ed33992029865afd7d5b159694f"
  },
  {
    "url": "resources/examples.html",
    "revision": "e23b6ff7c894b3b4bd0c403ecfe493ea"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "c702e0c031b1c2d294e5728f9a795c50"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "039b9289c64380269269ddd60df2f0ed"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "fbe92b8d55ffb71aa4282a35da42d4cd"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "6c5abd2e89bd9bb25f469ec78b2d8810"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "b8078dfefc162caa5cf54fdd83f2dd5a"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "a537342f8a775d167052ce9867906aa2"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "6d40bc80ebd081059288ba16883bfa73"
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
