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
    "revision": "1f4373b6355b0bd59c26cecc33293642"
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
    "url": "assets/js/10.d5c9a49d.js",
    "revision": "03463d52f5b76b7597d0d64699ff6764"
  },
  {
    "url": "assets/js/11.d4c36acf.js",
    "revision": "b40f32f0646ce6fbed1c26d6b6dedac4"
  },
  {
    "url": "assets/js/12.62924018.js",
    "revision": "e767083045bc5d1ade5309680b9080c4"
  },
  {
    "url": "assets/js/13.1b281a2f.js",
    "revision": "2ceee367af99b8fa6c6698f4d5a8377b"
  },
  {
    "url": "assets/js/14.c3198ec8.js",
    "revision": "a56e3244734541883df62927dd5fa4a0"
  },
  {
    "url": "assets/js/15.05cee91b.js",
    "revision": "c6f7109b58be6fc84e428de3e62fc754"
  },
  {
    "url": "assets/js/16.15d204bb.js",
    "revision": "1b42e135c0120f657aa3ab52c439595f"
  },
  {
    "url": "assets/js/17.a03c23de.js",
    "revision": "34612c01181949c32a4704b66285ef0b"
  },
  {
    "url": "assets/js/18.3448103f.js",
    "revision": "3826afd9d93d6b6f5d6c9ad9375ee9b2"
  },
  {
    "url": "assets/js/19.cfda6742.js",
    "revision": "330975cb45a657988c93e3b129e16930"
  },
  {
    "url": "assets/js/20.5cce2a4c.js",
    "revision": "9a6832654a0271e2b15def9fce93fce9"
  },
  {
    "url": "assets/js/21.0dcc432d.js",
    "revision": "2f519e705f819a90a79d2cf13dc2d7ca"
  },
  {
    "url": "assets/js/22.43ef5dd6.js",
    "revision": "371d74804a37cc5e7dcdf63cbfe21a44"
  },
  {
    "url": "assets/js/23.dbdbb18c.js",
    "revision": "58b93b68d6df5982bb55884d83ef3c37"
  },
  {
    "url": "assets/js/24.1e87896f.js",
    "revision": "470f9792acba3b36626c83d7b44f6df6"
  },
  {
    "url": "assets/js/25.02315014.js",
    "revision": "e5a62bc0eabde444105dd21b5be69b95"
  },
  {
    "url": "assets/js/26.16fcf751.js",
    "revision": "57d8e19164a70ee06a67baf7e72e5a48"
  },
  {
    "url": "assets/js/27.e94c86a8.js",
    "revision": "b911db13e7dfe955034fefcebfc54363"
  },
  {
    "url": "assets/js/28.4666269b.js",
    "revision": "81d0f7b69f3815c01725cd1ca70f6794"
  },
  {
    "url": "assets/js/29.9020341d.js",
    "revision": "51e228019464edfafb1938cf503099ea"
  },
  {
    "url": "assets/js/3.1b02fcd7.js",
    "revision": "930a4c7ac44c1a0df324af39060c4b90"
  },
  {
    "url": "assets/js/30.f242a960.js",
    "revision": "1172736f38fb7c8395c64a7369a26e40"
  },
  {
    "url": "assets/js/31.b26d4faf.js",
    "revision": "07a00c40ecd7a544c916c4eb887884c8"
  },
  {
    "url": "assets/js/32.fba3162d.js",
    "revision": "bb6b23a6a346af97cd2b36bb3cc8a313"
  },
  {
    "url": "assets/js/33.81b0a404.js",
    "revision": "8856f75bfdd6879b0280d9fe2a37cb61"
  },
  {
    "url": "assets/js/34.51bc2aaa.js",
    "revision": "5aee5dc7a1bd6073f0bfa5c6d28e1b49"
  },
  {
    "url": "assets/js/35.c3ff7326.js",
    "revision": "ddd87233bcf8924dd8a7ad28d73c5d82"
  },
  {
    "url": "assets/js/36.9fd7fc5c.js",
    "revision": "bb5b7e1d3a9c9bb2d7e8f6d82517ec01"
  },
  {
    "url": "assets/js/37.fd0d6327.js",
    "revision": "ae6fcb4125120e4a72753587015f8ac3"
  },
  {
    "url": "assets/js/38.34670ca2.js",
    "revision": "9e2f12467214dff5cdacc5afb606b1d9"
  },
  {
    "url": "assets/js/39.30096eca.js",
    "revision": "0b00de9b37473cecb3821c31a191d9be"
  },
  {
    "url": "assets/js/4.9f8f8504.js",
    "revision": "7d6bb240fe1425729d3a3de1ac0b7b58"
  },
  {
    "url": "assets/js/40.0eec6faa.js",
    "revision": "a2d151f1a8e089c62509da08e13c7aab"
  },
  {
    "url": "assets/js/5.6e6efc75.js",
    "revision": "d38d0a0ca554e8795e19862f4f223322"
  },
  {
    "url": "assets/js/6.c8c9a203.js",
    "revision": "e59145f0ee38d0244de5deec43cd857f"
  },
  {
    "url": "assets/js/7.2dc96075.js",
    "revision": "41a226c6d33f41901230e1027ad42a1c"
  },
  {
    "url": "assets/js/8.8c2c1bb9.js",
    "revision": "39c55865b8a1ab4cdf249c73ee40aa00"
  },
  {
    "url": "assets/js/9.6e8fa36b.js",
    "revision": "93d80f34e0f7cfb0d76ed2f3f16b7e24"
  },
  {
    "url": "assets/js/app.b2db556d.js",
    "revision": "0aa7878f2d7d7bcad57a31943ab5a784"
  },
  {
    "url": "assets/js/vendors~docsearch.b9a44f16.js",
    "revision": "0642e126421c773efc01637484188aaa"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "e9923e6a1f0874fada82c24d672a8e2c"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "c549047a787dfabfcf142f8aa596b87e"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "077ff2e39c7bb1d38ec5974d94286535"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "cadb81fa943417ac8273118648131422"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "e855b02faed0ea15ec60f56279ea70a5"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "33dd5c7269663f00cef4cc005f6f2cb6"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "f1a018bd6beddf61a44bdb99f7ef366f"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "b472ab61c6df9ec8c70226cd72f77e5c"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "4cf0825e675fc4ad0905c512d812933b"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "5a052c76f26ef672dce56c75b1da2220"
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
    "revision": "c58894fb78d3f134db7f68a785636671"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "4b9665701d3df83cf4344e414dbc3d40"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "bacdbeadbd1dd7673f3b79b3b6b354f2"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "75c7706c0575fa338933007bde882c5a"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "c47ceaca824bca2d6be0e0b2797a53bf"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "71634739cf1aacce7136e37b99deac04"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "8ce22b98708a98b148829b9173a61b23"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "d0b82a275d4365cb90c9ba9ad3b0b4ed"
  },
  {
    "url": "resources/books.html",
    "revision": "8d4f3bf3fb61d1bdeca2670216f44e98"
  },
  {
    "url": "resources/community.html",
    "revision": "826c6442adece0d700aba3cf22fc3777"
  },
  {
    "url": "resources/conferences.html",
    "revision": "c34469cf5736a2d3d745bc3095b20a13"
  },
  {
    "url": "resources/courses.html",
    "revision": "32c4dc908a3bac5a975600440fc8377c"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "b1f6187d31a09e9b73461cacdcee6cb1"
  },
  {
    "url": "resources/examples.html",
    "revision": "6c8572c59f3c17f51c14e70253901a10"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "74fb97bd2a20a5ee69201eaaae3958d7"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "f70402a5176fb83b328f283ae0379a1e"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "b01413418c4f560a5a6450a556588efc"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "2eb506f9136161010c60b701db457efa"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "3d134f8fbf786c40cc487d802878051f"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "984f4f1ab13483fa2d74ad4ad7fa11b2"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "8b8547872a17287ae1de6881ad512b18"
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
