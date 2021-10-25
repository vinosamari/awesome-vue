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
    "revision": "06245b1df37c5a12270ddc90a4752e76"
  },
  {
    "url": "assets/css/0.styles.c667ae91.css",
    "revision": "397c5036c5d791deb513cfb431edba00"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7fc1f75a.js",
    "revision": "1413b3a716ba6dd101eade0e04dc7175"
  },
  {
    "url": "assets/js/11.37b22210.js",
    "revision": "7d826737e2b69eee920c4a3ff41f4562"
  },
  {
    "url": "assets/js/12.73731cb7.js",
    "revision": "0aa0a47dffeb2927732b28a0c55f1be5"
  },
  {
    "url": "assets/js/13.7b4fe488.js",
    "revision": "f5e82e0139085f10ad36a6ce8b6c1e03"
  },
  {
    "url": "assets/js/14.437b2b20.js",
    "revision": "a51e455e018c2a6d3bda3de7d9233884"
  },
  {
    "url": "assets/js/15.1f44c16b.js",
    "revision": "e72134c0e3e99577b3179ce47a359d66"
  },
  {
    "url": "assets/js/16.38bc86f1.js",
    "revision": "50d42c1aa8658be55132e717814f6d55"
  },
  {
    "url": "assets/js/17.ddded6d9.js",
    "revision": "ba5e401fe5fe7b930cc71a5aa6e7f7d4"
  },
  {
    "url": "assets/js/18.0dbb0f9e.js",
    "revision": "461d19acab27ff3babe1a28c9605f0b3"
  },
  {
    "url": "assets/js/19.bdd844b7.js",
    "revision": "5bf5516a94ad0036c312a78a8e2063db"
  },
  {
    "url": "assets/js/20.a236f507.js",
    "revision": "1239a84104a4b42c816ef24ca464f60d"
  },
  {
    "url": "assets/js/21.5f8cf892.js",
    "revision": "704dfa876a74a7dab9fb2da0957eec94"
  },
  {
    "url": "assets/js/22.84fe4224.js",
    "revision": "c0d39622e6d331eead6b78da4d77f3f4"
  },
  {
    "url": "assets/js/23.e4633682.js",
    "revision": "a13393f8b6a48fc2df0cccd2ee4b4728"
  },
  {
    "url": "assets/js/24.55c09d77.js",
    "revision": "5271cfde80d0119ebbf38e72af144858"
  },
  {
    "url": "assets/js/25.209cfd1f.js",
    "revision": "f98aba8aeedabb058431d624a5d1f46b"
  },
  {
    "url": "assets/js/26.378d9f39.js",
    "revision": "49e80b3e38f213917d04323f9a0c04a4"
  },
  {
    "url": "assets/js/27.f991ff7f.js",
    "revision": "4601842ef4dcc2d88d1f1e85dd28a02c"
  },
  {
    "url": "assets/js/28.5491523e.js",
    "revision": "2d2d1b9a3790e849ac88e7627e3dd210"
  },
  {
    "url": "assets/js/29.318ed6e5.js",
    "revision": "eaa35e01f940024f9f2e962f5757b465"
  },
  {
    "url": "assets/js/3.f91d7b4c.js",
    "revision": "3247ac68cfc206971fbb07cfdc104240"
  },
  {
    "url": "assets/js/30.fa7bbce1.js",
    "revision": "69544855250743cd97d9f1f7f2f4f1fa"
  },
  {
    "url": "assets/js/31.9a2e4a34.js",
    "revision": "68daf91ffb23cf9945d1fe92752285da"
  },
  {
    "url": "assets/js/32.f68d305b.js",
    "revision": "45e18b96155eaa80dc8a65859b9cce3b"
  },
  {
    "url": "assets/js/33.6bd7dcf1.js",
    "revision": "a25ae8e006554a43ef37ce6e3063125c"
  },
  {
    "url": "assets/js/34.fe8b13dd.js",
    "revision": "dfd377a4dc7e4793302a78dffc5b1fcd"
  },
  {
    "url": "assets/js/35.adc373e4.js",
    "revision": "98705af22bd9cf9d6eb320c97e8cc840"
  },
  {
    "url": "assets/js/36.71df12f6.js",
    "revision": "50da866b305b0da770d14f6213965475"
  },
  {
    "url": "assets/js/37.cf9339ee.js",
    "revision": "91377ac895359d542a30bcf3205a2bb9"
  },
  {
    "url": "assets/js/38.9ba75544.js",
    "revision": "fc4ee7c8c06f4c5a349404ec2e06ef17"
  },
  {
    "url": "assets/js/39.c7c691c2.js",
    "revision": "60fac45a49d0b8b22db9f1e2e9ffdffd"
  },
  {
    "url": "assets/js/4.ce02a61d.js",
    "revision": "9b99e1739c76e1e4e146b0df3ba6ed48"
  },
  {
    "url": "assets/js/40.b42569ef.js",
    "revision": "e7d54b7c97897879ecc1ecc59606d1cf"
  },
  {
    "url": "assets/js/5.98c98201.js",
    "revision": "cdc385dbbe9420236e00e84145c6575f"
  },
  {
    "url": "assets/js/6.01879bb6.js",
    "revision": "add754746cebc6a382d4703deb7e7f58"
  },
  {
    "url": "assets/js/7.e0f69654.js",
    "revision": "59b6bbbf35f675f4a9833fad2a565972"
  },
  {
    "url": "assets/js/8.bb9e184e.js",
    "revision": "3fb0df7894a90545afbac273c6f362d0"
  },
  {
    "url": "assets/js/9.e1535f7c.js",
    "revision": "39fbb7f80dfe5ca892c94d43d08e156a"
  },
  {
    "url": "assets/js/app.4b9b1af6.js",
    "revision": "f77634e37d5bff109d28ab6155a9dd13"
  },
  {
    "url": "assets/js/vendors~docsearch.6c6f4b7c.js",
    "revision": "80d85f27635587331d7843bd0729b025"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "e552a9cc6d5a8dad244b17b4dbc5eb81"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "44a125f2f4d8070fcbb72268b9ae4a93"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "165dd25e8dbec62b94503f25ca012791"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "8c729cd323d8e7b2cb7deb42dab3d4dd"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "aede3bcfc3591a137c13c08fac351ab3"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "33a81c92ec7327b75affe0d8f17b6436"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "d133ab9f1197700102b89310c0f9f009"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "6f73dc8df78605fd70a980ceb4b43773"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "dbbbbeb027b055981dd37dfacca79f43"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "910ca63cc24f2675a93e59ca1aaab3d9"
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
    "revision": "9307f156969e462c853a7216d9a6ca80"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "d79aab1610dd6028237500a0bd53b74a"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "005302d1808b4a7cdec1b4cb4c79d4e2"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "f92c7732f5029c76ef9eb88e0c1e7e96"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "d2122523c6596c31450022e204965063"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "304ba0b6d77a69006dd4711d0596e8e9"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "abe4a728b79cb173fa1b40140010d978"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "5f4585126e181b6c71e16cd29fdebf6a"
  },
  {
    "url": "resources/books.html",
    "revision": "4bd914c4860eb15b0e48be8fcd868672"
  },
  {
    "url": "resources/community.html",
    "revision": "036b47cb6ff7ff552ea81e895084f353"
  },
  {
    "url": "resources/conferences.html",
    "revision": "2b38eba4e0a7cc6c2888723fce476e0b"
  },
  {
    "url": "resources/courses.html",
    "revision": "b05c72644814c0d43d58815ac2ba124e"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "bea35a94598247962c8e642768f2c4f9"
  },
  {
    "url": "resources/examples.html",
    "revision": "45b10e532aea94a3d13f1f72a8419876"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "89a27227ffc27154c07743f6173e8f76"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "21c82a2b5b70172199fec3522a2a51d4"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "33bb8d82053a5fd6471cb622cb234937"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "4a3e44dea44c54d208a5509b61427d71"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "24bcf601a52e0dab8b8f45480c8cedfb"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "3db2a251d506174e64417089c8e87511"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "aa56e35ec514f440cbe397292f19ba89"
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
