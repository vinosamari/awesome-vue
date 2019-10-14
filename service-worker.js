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
    "revision": "67f74d9d63e0173e0034241b6d2fdc61"
  },
  {
    "url": "assets/css/0.styles.9357404a.css",
    "revision": "5aef16aecb6bb53976ec7d6ba49b812e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.91a13394.js",
    "revision": "e4e882795f7d1100d22ecb52ed1539d7"
  },
  {
    "url": "assets/js/11.e575585a.js",
    "revision": "b9fcecff315be1146d6adc87cf6b267e"
  },
  {
    "url": "assets/js/12.1e97fd2e.js",
    "revision": "75d90ac1b9ebfc166ba17574fdd33cd2"
  },
  {
    "url": "assets/js/13.7b2e8371.js",
    "revision": "eb4de40fb224e78f1113aa7dd2b68816"
  },
  {
    "url": "assets/js/14.eee98d9c.js",
    "revision": "294636646864435a9b0b58cef6290abb"
  },
  {
    "url": "assets/js/15.aece1376.js",
    "revision": "57a4f1913cf97ee199915cc75762a3c5"
  },
  {
    "url": "assets/js/16.c2ac3f5f.js",
    "revision": "a7641e66df6971022798db8fe5d25541"
  },
  {
    "url": "assets/js/17.9d05e0a9.js",
    "revision": "e27dcf876b5d307de471dde4c186bbc0"
  },
  {
    "url": "assets/js/18.23871c34.js",
    "revision": "ffe05299d1dc8832e30c713f86c1a924"
  },
  {
    "url": "assets/js/19.9c033a65.js",
    "revision": "8f32d0074b9b044fa348f9db691771b9"
  },
  {
    "url": "assets/js/20.2ff09bc9.js",
    "revision": "4afa94d77f82f5627fa3c5798cadc28d"
  },
  {
    "url": "assets/js/21.56a4186b.js",
    "revision": "7bca7f7084223d42a20e0dc11ecad800"
  },
  {
    "url": "assets/js/22.fd0ede2f.js",
    "revision": "6ff6c4ab6ca31dd0bb4d93bc94cb0ffa"
  },
  {
    "url": "assets/js/23.6c6e7ac6.js",
    "revision": "bc6a80c641fec7e685c7d2e4572464be"
  },
  {
    "url": "assets/js/24.16f96354.js",
    "revision": "6fd83e0d958dcbfecc9513ef43d120e9"
  },
  {
    "url": "assets/js/25.9f82c65e.js",
    "revision": "70d8cc54ed49b4ca6723f15cdffbf704"
  },
  {
    "url": "assets/js/26.17fe7f51.js",
    "revision": "53f613f695bb060e87f1b1b574f0c64f"
  },
  {
    "url": "assets/js/27.38d83055.js",
    "revision": "8aa398c6a5edc71213f53b21a2c248ad"
  },
  {
    "url": "assets/js/28.2fd79dc8.js",
    "revision": "c49f3cdbfb5cfb771564423db61c3ce4"
  },
  {
    "url": "assets/js/29.ce1c5469.js",
    "revision": "597c702a2bf570f80ad4b92a8cea2d2c"
  },
  {
    "url": "assets/js/3.fbc68953.js",
    "revision": "01797fd49699c089fb4092526150e2ac"
  },
  {
    "url": "assets/js/30.64eec3f9.js",
    "revision": "e319c1a68fab638a09915797cbe28dd0"
  },
  {
    "url": "assets/js/31.b212270f.js",
    "revision": "654fdf851635f048e69f1fb6010d43f7"
  },
  {
    "url": "assets/js/32.63b6ecad.js",
    "revision": "647b7252ea045db5eead83f5d1d3c59c"
  },
  {
    "url": "assets/js/33.6c4a8ee4.js",
    "revision": "61424ffb4d16228092c7e4ba5e49162a"
  },
  {
    "url": "assets/js/34.6c59228a.js",
    "revision": "3e4123ddfd0dfc480911037e91f478fa"
  },
  {
    "url": "assets/js/35.c87136cf.js",
    "revision": "01d35c692dca65256f8c5cf2d0780d86"
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
    "url": "assets/js/5.ae98065d.js",
    "revision": "ea3e59650629e165cc464b76117d6118"
  },
  {
    "url": "assets/js/6.158ba71d.js",
    "revision": "ef52fa4c37cf6721547aaf764032b28d"
  },
  {
    "url": "assets/js/7.9f233cc7.js",
    "revision": "3968c49babf73dc88b59e9ec61c63028"
  },
  {
    "url": "assets/js/8.a595b7c9.js",
    "revision": "7b750a1ae5039cadd33463945d46cb78"
  },
  {
    "url": "assets/js/9.27a2444d.js",
    "revision": "07b3904af6a826c310f802d797206424"
  },
  {
    "url": "assets/js/app.daa110b3.js",
    "revision": "43565a11c39de7bb87ae1de916015536"
  },
  {
    "url": "assets/js/vendors~docsearch.340943f1.js",
    "revision": "22c66d04b3add4e4e7985a7b41769d5f"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "04ee5d0ff9992a290f8dab40c9da6fce"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "e7d05cb7ca76b4c0addd4db88868d65c"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "9bb88cbc9cc0edd69504b04a1d20576f"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "ee8ed7f005a15aa1b8e00ccf986ad92a"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "3bdb05148a8a661f5362ef2ee733749d"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "25573b57945f46380d28be4c2e697040"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "0b31faeba0a201e0cc2b84dd70840468"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "4ee7af74a5ac29353a5892045c981213"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "fe2fcdda0c7a746315c45bbda0b5bdee"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "3db9e2ce291060e9ef17ea37774dccf4"
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
    "revision": "aa763c8c1e5c175edfeee225b8e92479"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "7f2252e048a31f87963ff8e4c4fdbd69"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "fd8aa3c59a7954f6cdfa90f9c5c8d6be"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "8502058d268ac3a55ee4c6d56c7df415"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "dc3a3f537ef23d4ccce9ba0e0b12f81e"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "5ba84a295db433f7e26315fc48212130"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "322c6d9c7eb70edbabfef1f10304fb97"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "9e4cbbb6b958fba8fda7111fa397f3dc"
  },
  {
    "url": "resources/books.html",
    "revision": "34ce3ecb1f36aead7159c631b373f30e"
  },
  {
    "url": "resources/community.html",
    "revision": "40922c26e3148fb41897b094b7b42e1e"
  },
  {
    "url": "resources/conferences.html",
    "revision": "76372764dd6a9f2a54106bb81555b2cd"
  },
  {
    "url": "resources/examples.html",
    "revision": "984a9b1b9ef363930202bfb0d718bc2c"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "a9be361a505544a2ab85c80a244c7173"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "0d56ebc1eb1b6699c4d1f9aed067a059"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "bf9169d0ec2633e95afb8d286edaa9cc"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "4f46f930bcefd4d447556d69373c680d"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "b83e47e408c1684ba7e24f685c8c3d54"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "ca0b2571089b942d51fefd13d955c5a2"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "90540ffd28514275cc31e6f8e226f981"
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
