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
    "url": "assets/js/28.a6a732c8.js",
    "revision": "63fd8a81dca812ac18e99b160393213b"
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
    "url": "assets/js/app.3f03229f.js",
    "revision": "cc765a0ae5c89d3aa359990303ada706"
  },
  {
    "url": "assets/js/vendors~docsearch.cb998e4b.js",
    "revision": "7b0136a228daf0b9ed9dd8f2319dca13"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "3bb857a2fa524e8e87c298ebaabc1da7"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "e832ff0de7a2262c73441fbfc66ebd95"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "1e7acbcd184bb377afd5b685fbdf65a7"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "18f3bfb11d89fcf6c09fd24f4060a7d1"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "db0cfd3149d57a4968c4003c41af81e8"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "ddbb0af9f97bc63d899079d37d198dc1"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "a20eea16150b4c5591d8a2123ab53a75"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "ac5e49b123393da03b20dcd77a2f289f"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "7536e843e3d0d90c142d6a2412183009"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "8f6a04859455106ba4f1f626c13d9f65"
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
    "revision": "666d19ea0ccd04d03c2824d54fd28b0b"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "4f58d5155705baed8eeef1e037e3aca3"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "c8904f6ea5ed4c800a09cfa8966ddc34"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "ea046fba25a0ebf7a8d2ed9ccefb62b3"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "9e80a36f8754a77cbf8fdff2c1cbfb74"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "29970da739c32e8ba2632d9863267fc1"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "8cd0ff321c00585e1d4c6482580f9377"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "ebde6c44f00759b6ca9542efef63b69a"
  },
  {
    "url": "resources/books.html",
    "revision": "f655695acb7f49b97ba81272c41ab867"
  },
  {
    "url": "resources/community.html",
    "revision": "830a558069ae46a860e793842f14893b"
  },
  {
    "url": "resources/conferences.html",
    "revision": "28c2fa443f0c0c82f5055a4a9af8ecf2"
  },
  {
    "url": "resources/courses.html",
    "revision": "3fe6683d292e783dc8bebab63a0c8a9d"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "34122e07e8ca21b4e2813dae6b10a920"
  },
  {
    "url": "resources/examples.html",
    "revision": "b150a6ca142bd631508943b8629fcb7f"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "bca01a19b8ba313eb787a69929574926"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "70bf2ee9d56d853a108cff764e2858a8"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "330430c9609cce80313c69d77b54996a"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "2dfdff4f2bbcb5d8973be5214becbb2d"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "6718569d05055937cdc9bb6f2a7cb5c3"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "42f1dc56d9949dbcdd2b0f69e003ac56"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "0e36649c8a5943055e7ca412ed6e4e37"
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
