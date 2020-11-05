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
    "revision": "ca6f9394e4287f2852666a776d98f249"
  },
  {
    "url": "assets/css/0.styles.bdda569a.css",
    "revision": "c024588bf133710af070a4beb6bcb5f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6a1991e8.js",
    "revision": "78e4bbb3228e971eb2593a707b94408b"
  },
  {
    "url": "assets/js/11.d43657c9.js",
    "revision": "90b19d2a423b66a60d165657657e2f99"
  },
  {
    "url": "assets/js/12.6a64786d.js",
    "revision": "bedd84462b7c5391839acea97ef9adae"
  },
  {
    "url": "assets/js/13.125dc3cc.js",
    "revision": "8fad548ad70cb55fdaec01c1bb4b624e"
  },
  {
    "url": "assets/js/14.383b7982.js",
    "revision": "fa98a64c51ba7d3e3ad5c90dc5939589"
  },
  {
    "url": "assets/js/15.90536ead.js",
    "revision": "45111a35261c65b9ae88ebb6891d4d16"
  },
  {
    "url": "assets/js/16.e90410a6.js",
    "revision": "83d0e72a9d00202552df22e01a9ee766"
  },
  {
    "url": "assets/js/17.c40a1069.js",
    "revision": "2bb1e88581718fb5080f363250a80c12"
  },
  {
    "url": "assets/js/18.a0376b39.js",
    "revision": "2529a88b12e1ab943d341d61b87601ed"
  },
  {
    "url": "assets/js/19.2cccac8b.js",
    "revision": "6986b5364c28d6363a6196fcb4c4c1a1"
  },
  {
    "url": "assets/js/20.ab0309ce.js",
    "revision": "8bc0ace4a030ab0e71a564a548bf75b5"
  },
  {
    "url": "assets/js/21.2020e48f.js",
    "revision": "47afd9184a2c44aad68ac55f3f8db342"
  },
  {
    "url": "assets/js/22.9ab3724e.js",
    "revision": "c161b128c5eb7985c6dcd221b739679e"
  },
  {
    "url": "assets/js/23.e5e52aef.js",
    "revision": "8429ea5c5d10caedf62e181cfbf86737"
  },
  {
    "url": "assets/js/24.5c8ea490.js",
    "revision": "3bcc903e2bd0045007aceaa28f72e029"
  },
  {
    "url": "assets/js/25.9eaabf5d.js",
    "revision": "dca4a395d3d92883d818df22c6a00ce5"
  },
  {
    "url": "assets/js/26.f45a7c06.js",
    "revision": "24a0fe9c3dcaee02540c207fd3f02481"
  },
  {
    "url": "assets/js/27.636c76c4.js",
    "revision": "23843c6507e6ae1bad34d51553c78943"
  },
  {
    "url": "assets/js/28.8bc395fc.js",
    "revision": "991d240571c215f9a9d8a5b9cc7a530b"
  },
  {
    "url": "assets/js/29.77d4d86f.js",
    "revision": "35220f15a6d9d18d1aa134a5dc91720c"
  },
  {
    "url": "assets/js/3.8962f383.js",
    "revision": "de67384635107d887f904ebb580989e0"
  },
  {
    "url": "assets/js/30.d4ee7a76.js",
    "revision": "9ecf4bb61fd983de0bdbf9f32e59ccc5"
  },
  {
    "url": "assets/js/31.cae22fb1.js",
    "revision": "f9391c192cfc6b1d8e5df990f3fca2d3"
  },
  {
    "url": "assets/js/32.5ee7133a.js",
    "revision": "de38c092ff7552f0ee19f8d8a99db641"
  },
  {
    "url": "assets/js/33.fad24f73.js",
    "revision": "bc85d39c52d06db6b5017566035bc64a"
  },
  {
    "url": "assets/js/34.754c33c5.js",
    "revision": "06b3e7d41b338c31654f16ecb4e77309"
  },
  {
    "url": "assets/js/35.07db8002.js",
    "revision": "0111638b4c10cfbca28572b323a7d8b9"
  },
  {
    "url": "assets/js/36.bc329818.js",
    "revision": "4da1769c91cf86be35b93358b4cdf132"
  },
  {
    "url": "assets/js/37.5faba6d3.js",
    "revision": "17a53fb23f8517d55c790e865ccde5df"
  },
  {
    "url": "assets/js/38.1e3761d6.js",
    "revision": "689b689e3d05a6ee0fc9c450979e47f8"
  },
  {
    "url": "assets/js/39.b44e3fb8.js",
    "revision": "fcd303d8d861547e6babf3e7e19d2c14"
  },
  {
    "url": "assets/js/4.9e67c679.js",
    "revision": "17576109aae22927d1443c1674e45763"
  },
  {
    "url": "assets/js/40.529418c5.js",
    "revision": "26d3d58acf8d5bc6b17032651d3f63a6"
  },
  {
    "url": "assets/js/5.88b9aa21.js",
    "revision": "8c37873a81de640ca323ba2bcdf0c4a5"
  },
  {
    "url": "assets/js/6.15e351d3.js",
    "revision": "431f00f3475767f7a82d4072c452ddc2"
  },
  {
    "url": "assets/js/7.beda3ddc.js",
    "revision": "82bdc10348788377430e8e4ad35544ac"
  },
  {
    "url": "assets/js/8.cb9cb39c.js",
    "revision": "3f1995f6dc8bb91d3899131953bd5a52"
  },
  {
    "url": "assets/js/9.ea9d3e8a.js",
    "revision": "131aad72d34a1be61cfff859ae65018c"
  },
  {
    "url": "assets/js/app.921f119d.js",
    "revision": "fb41d55bb75dccadc1f95c9af2d82075"
  },
  {
    "url": "assets/js/vendors~docsearch.729fc4ac.js",
    "revision": "d941049115fdd30e8e07b0bfd4817639"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "a4e2406399d296c68e3e0077ded4f9eb"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "6f71fbc2a39c60567f30b5b06c050376"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "66ef14fccacfee2aa4e73da711ae9f6b"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "d0ab9ad3d85388910a53b6bf605475ed"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "0f2c680914dcba93253b4d09e661bdd4"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "c44ad96a1af7eff8881badae961f34bd"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "7230e030d65d9d89f0ca9fe9696ea6b4"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "6bf27968236b29827d3536c01d7d0819"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "d526bc6a3db8eca92e2025b0d65babff"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "f109ae2b61d2bee6ce62f6bc2b480749"
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
    "revision": "4255cd62b0797532325b26244f4195ec"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "c68bbd9566e59dd64dac28d42255f006"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "342755df009b0eab3837310fb41bb868"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "045f9ccd928d49e64f35e690397b2740"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "2dd74dba6eb19f3b2118ddeb7aac9c49"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "847af8113adae4ff6df5dda0202c99fa"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "864015bf33847ee0fa8e35cd0a105e30"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "5bd8f976841320cedea145ecb5dabdfd"
  },
  {
    "url": "resources/books.html",
    "revision": "736bc488da5eb1da4ac917fb47ebfca2"
  },
  {
    "url": "resources/community.html",
    "revision": "970b652bfcc29860d4ff28585ea64746"
  },
  {
    "url": "resources/conferences.html",
    "revision": "b61819c3aae5d8a7b4ec5cc38ea4d5d7"
  },
  {
    "url": "resources/courses.html",
    "revision": "be458b558c32541337266f6c01d94f28"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "242f0ff60a0365218265f3905be8adc0"
  },
  {
    "url": "resources/examples.html",
    "revision": "0d61a1b847859db1db0dc74c476a99e2"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "693e010de221c3c63e3d0c61b8eb588a"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "d717f7e84592f292c3708d606dac557e"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "09204307891f901f87182d8c4d022934"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "ec536f4e3399c7616369cb26482da5a3"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "205b92d81a24285ea9aab5dba8be6105"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "5a9d92d43f1f4eee895e52e2c249f54d"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "5f57bcba6c6c828d27cb3e47bc8aa27c"
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
