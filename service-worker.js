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
    "revision": "9c425f6af34bd6c8e600d8ed0a1c1df3"
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
    "url": "assets/js/10.e6460e8d.js",
    "revision": "e5255816fc0a32119a892b6fccd09c41"
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
    "url": "assets/js/15.4a36deed.js",
    "revision": "72174627318ad19ad41c752b9f4298b8"
  },
  {
    "url": "assets/js/16.e90410a6.js",
    "revision": "83d0e72a9d00202552df22e01a9ee766"
  },
  {
    "url": "assets/js/17.6656cdb3.js",
    "revision": "7691df548cbdf05904137f265c1f56bb"
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
    "url": "assets/js/25.77a198cd.js",
    "revision": "596f221981e9e05caa587a7ec419260d"
  },
  {
    "url": "assets/js/26.2928697e.js",
    "revision": "08aa5bc6882ff792143110a2d37618cb"
  },
  {
    "url": "assets/js/27.11e0ca54.js",
    "revision": "fd20f6bc3fdc26a26d8d3c7f6b0421b5"
  },
  {
    "url": "assets/js/28.8bc395fc.js",
    "revision": "991d240571c215f9a9d8a5b9cc7a530b"
  },
  {
    "url": "assets/js/29.733e13b3.js",
    "revision": "692be2fcb2b8cd165febd264dfb60692"
  },
  {
    "url": "assets/js/3.8962f383.js",
    "revision": "de67384635107d887f904ebb580989e0"
  },
  {
    "url": "assets/js/30.e705ae47.js",
    "revision": "550e8e4d5fd4cf2bc23b341d505dcb7d"
  },
  {
    "url": "assets/js/31.425fb2ba.js",
    "revision": "edd2b7ef78e7561c96d26e08e61af1de"
  },
  {
    "url": "assets/js/32.96a9ba3c.js",
    "revision": "25d0ec834f76a16559beeeecc4efd7d6"
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
    "url": "assets/js/37.fdd497a9.js",
    "revision": "f3ac03fdc95f4854d060b9c5a844ccda"
  },
  {
    "url": "assets/js/38.2f5c1549.js",
    "revision": "24a053e0f1fd41cb139a55c0417b2b88"
  },
  {
    "url": "assets/js/39.71171e35.js",
    "revision": "90e402c0d1072946fca01a7046f33b1f"
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
    "url": "assets/js/app.67b313e5.js",
    "revision": "259992ab737e6155fb99e5866d96910b"
  },
  {
    "url": "assets/js/vendors~docsearch.729fc4ac.js",
    "revision": "d941049115fdd30e8e07b0bfd4817639"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "99ab6dd09f4acf74ff3daa6abcb71656"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "c6217a5d09f11d9f0583e1a44eca0322"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "68c7fd8957b85509b2d0dcd86b397215"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "880b149be20edfaee570724f667471c7"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "95d60a0a3e016987f29180a6aabfae9e"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "5e5e44a3ec6135e776d0ca9b159e7dcb"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "74cf5330600c44fb5b1a787e93a8dc3c"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "f33be71ad8c20a106ba14005ac0972d7"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "2f5780bbaeea0e3afc4bce818162d686"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "dea3de0a1b261ec7cb0257aee276e8b6"
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
    "revision": "bea513ab5113fa0ec4ab4d5a76b05fde"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "22d6b3efdef55cf5e6148b53fa2c1ba3"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "5dffd92b35d43915b8a8e669ff1dcfe9"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "e8cec41c956c9c2e415ec382074d5868"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "fd09831e960df053ea825f70fb2c6db9"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "e12513be7918b4bebc0798cae6842616"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "9ab2015c20feb092f7bb7bac4a895c5b"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "e825d190788591858d360974029bf2ee"
  },
  {
    "url": "resources/books.html",
    "revision": "b4d13e06bae20055813d08b396cc264a"
  },
  {
    "url": "resources/community.html",
    "revision": "236cc05f97c77613d7588ba33d0145c4"
  },
  {
    "url": "resources/conferences.html",
    "revision": "1cb197dd9aee1b9d77a41ae298ef93e7"
  },
  {
    "url": "resources/courses.html",
    "revision": "13fd55a58dc655861ffb4cf56f0cd560"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "491fddf25455ecc89261b364ad2174aa"
  },
  {
    "url": "resources/examples.html",
    "revision": "30dbb0fef970da3621e7d1af75d59654"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "6855279bd6d6a13100829682ae57b630"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "7ed660813806681a4f48268729cc80ac"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "6d9aa3c70b1f725e8ab32ba00d836223"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "0f00d3628058a5b1c33a9ee85b0c387e"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "33f284e49b9ca983f64ab29fb578a300"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "301b4431bf38e86dcf34a3b034ef11b1"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "7f7557b41644fd13dfb5f12cbdc17dda"
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
