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
    "url": "assets/js/13.02e8067c.js",
    "revision": "fc55d10ebf2f52b9bd9eebfc147607c0"
  },
  {
    "url": "assets/js/14.05886b0e.js",
    "revision": "5b57ac927adc156413683004cd0e261b"
  },
  {
    "url": "assets/js/15.020636fe.js",
    "revision": "4abf449463fe126d3a46922633b6b503"
  },
  {
    "url": "assets/js/16.9e45c27c.js",
    "revision": "40012a79368fc17a36b9f566b7146e1f"
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
    "url": "assets/js/19.a55f572f.js",
    "revision": "74c8add6a0dc75948ff1cc3699ed7f50"
  },
  {
    "url": "assets/js/20.5deda5d4.js",
    "revision": "9f7b3b42f073d3c97cc234a684f95a9d"
  },
  {
    "url": "assets/js/21.863fb41c.js",
    "revision": "c6e30b9ba2e10d3133685ae907bdb8c6"
  },
  {
    "url": "assets/js/22.88357afd.js",
    "revision": "0f43825e8f580f84bfb454db058a5613"
  },
  {
    "url": "assets/js/23.2c4b08a5.js",
    "revision": "76e330071c99356e2948c30f7c679f93"
  },
  {
    "url": "assets/js/24.4fefbb1f.js",
    "revision": "fe7b0c53d9dac8308915a5779327128d"
  },
  {
    "url": "assets/js/25.6a7ca1cc.js",
    "revision": "3f3c890013f012c72e485b3d26f1883e"
  },
  {
    "url": "assets/js/26.8ec15b1e.js",
    "revision": "de3fdda7fd755fc3a0973d1cc793a82d"
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
    "url": "assets/js/30.94829423.js",
    "revision": "243830d347f9688f809c67fda5af417c"
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
    "url": "assets/js/36.1ddc1892.js",
    "revision": "6523096568a7c0c3581e902acc652a08"
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
    "url": "assets/js/7.66cdd46e.js",
    "revision": "9f40c952ffaec28a0fe55fa6f2b8b148"
  },
  {
    "url": "assets/js/8.ff7235f4.js",
    "revision": "880a97182beee8de42b1c109d86c1d48"
  },
  {
    "url": "assets/js/9.5286745d.js",
    "revision": "a76892a34e5448aed2ea4f944275c9a2"
  },
  {
    "url": "assets/js/app.6fd30da0.js",
    "revision": "bd029b406b2a9ea651fab4fc839a4e8b"
  },
  {
    "url": "assets/js/vendors~docsearch.cb998e4b.js",
    "revision": "7b0136a228daf0b9ed9dd8f2319dca13"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "a934e84e3ed39017d47e1422e1c2fa6c"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "7e15bfb1878b24960187d011da9addef"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "819d2ada754fea5f0fe95f2ade9fa414"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "10079f0a41a8a474995170a43446c51f"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "f5fe68e4d38849b63129a41601b62c32"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "159799bbd81bc5203e752cd1e6d3d796"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "038ef259d9a15e1ba2a3bbded3823594"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "087b88c4a0163fe3e2b0f60425ba585b"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "21556b01379753435084afbb7a6a55d0"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "c9cc8284f28ea15b2b7c9702b18971d0"
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
    "revision": "fd4d79686d37550b2e6d9b4bd0e28940"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "87f5a6f99d8292ab550dacdc0b3186ff"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "c34dad065436672921377bd709b82616"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "c20ee437382d39e630d3472b39fe2833"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "ddd6aa6777b91640cf3b02d37c4871bd"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "c2169a33f21d6db7623740d071443b37"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "787e482f3bd16634e403738a7bf6ac6b"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "fbf796c0ecc78a01077e64798b92219c"
  },
  {
    "url": "resources/books.html",
    "revision": "71010f9b9db364d94f2995adb3f9eec7"
  },
  {
    "url": "resources/community.html",
    "revision": "a314e43a4d143f466aafb66d343f6885"
  },
  {
    "url": "resources/conferences.html",
    "revision": "c98e598a6614e55926290ef798e3ea8e"
  },
  {
    "url": "resources/courses.html",
    "revision": "29a7fdbbb1b3705ae34de01d4a0312fb"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "3c6bbc3c04fc28716d2aba3b0bdf5812"
  },
  {
    "url": "resources/examples.html",
    "revision": "be4d472dcbde47965ce23c6ebcfa465e"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "90aa9602fcc75d7bede034221c146c17"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "8dd3e3a9c23aa0129b6add890474971d"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "fca28b6bfc891234c91de5011e508aee"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "03ce2164c6724eff58bcf03ed38ba38b"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "6cf3313210efa91cdfb3b871381b4a52"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "a2af2c779125a28dd561fe81fdc78293"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "fd846420deeba45094f4547a24633fae"
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
