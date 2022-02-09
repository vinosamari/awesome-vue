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
    "revision": "da0f5f304990d8c984ae28af19497cd8"
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
    "url": "assets/js/10.0fad0092.js",
    "revision": "5d04968a675f511b8d915acfec43a6ca"
  },
  {
    "url": "assets/js/11.9552b8d7.js",
    "revision": "4e64cd1fa465ce02aa4269135c6ece24"
  },
  {
    "url": "assets/js/12.29d0bec3.js",
    "revision": "2f77da38705a69757f4ee0663d0af135"
  },
  {
    "url": "assets/js/13.75a59417.js",
    "revision": "a4b42a48e2a2a97b38d0a897cd2d383f"
  },
  {
    "url": "assets/js/14.b7666c3d.js",
    "revision": "cfb8b6c439c592125c25dc73151f7394"
  },
  {
    "url": "assets/js/15.47e5e5e6.js",
    "revision": "6427fbca2ad6b07e703ddbef65ed738a"
  },
  {
    "url": "assets/js/16.5687a8be.js",
    "revision": "afefabf41b3e9f0b51ae887f8921d482"
  },
  {
    "url": "assets/js/17.ed1c44af.js",
    "revision": "2102d715f54725d6be4ccc80354ebf78"
  },
  {
    "url": "assets/js/18.9a47ff7a.js",
    "revision": "6c40567046e1d284450e1127c59e5c34"
  },
  {
    "url": "assets/js/19.a7d3bd79.js",
    "revision": "739cf2ef7028658780388b4a2dca26bd"
  },
  {
    "url": "assets/js/20.59ba9de4.js",
    "revision": "64769e74d8177ee504c88e0bec1dd74b"
  },
  {
    "url": "assets/js/21.6424083d.js",
    "revision": "c95343d746e9c3e37f5058c1bde99d9c"
  },
  {
    "url": "assets/js/22.f2264744.js",
    "revision": "0aebec466db154d10d3594c0191cac7d"
  },
  {
    "url": "assets/js/23.c52e5588.js",
    "revision": "a24d87ec9b8ff1cb0496209ab911c3d6"
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
    "url": "assets/js/app.6fbc66a7.js",
    "revision": "db8a4d973aa94fb8128c471e3e337429"
  },
  {
    "url": "assets/js/vendors~docsearch.b9a44f16.js",
    "revision": "0642e126421c773efc01637484188aaa"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "213736c63f03012c8c355912452c031a"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "4ad762e501926fd54de2dfba5019defc"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "7e19ea59e9972165f4737a23142e9d44"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "537137a0dcc6289581a5f91c8ff34af0"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "dd737f258f54f98296a8cff4cc23b3e9"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "f9da51bebe2475b2ce7717bcc4242b7c"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "471a0e0ed76215116c961fc4be171b43"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "358233c50dcf968890e3093d0b359221"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "bb75ffe6ed7c74cee2f7773dbadb9014"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "221ae05afc304c03a726f57fdaafd2a4"
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
    "revision": "1a98aeb207bbf348e321e25ae35eeed9"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "1298651d01488180988419d194585411"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "5fcc1999710bb2446d2274018cd39f70"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "f45fe60b78c2cdd55903522b8ca46f09"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "0849011ae50dad86913d1e4835c769e6"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "2e0702a3d46d30da611e3496a2fc26dc"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "59be543d8341374d17e52d6e9151bfd1"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "21a2819a1f85d5f9992205dd6c5c8c3b"
  },
  {
    "url": "resources/books.html",
    "revision": "36461b9d42212124e1b5445b8135e027"
  },
  {
    "url": "resources/community.html",
    "revision": "fed8182dac5fa043531f34d938ef75d5"
  },
  {
    "url": "resources/conferences.html",
    "revision": "a82d0bd62767ad64915668925e2719d6"
  },
  {
    "url": "resources/courses.html",
    "revision": "859b35e4d36a5595299ca2abfad3b831"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "8d3552db7d796a6b6c4ef98a296b77b7"
  },
  {
    "url": "resources/examples.html",
    "revision": "2e8c64ef33333beb4863793d8373742e"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "4423f2e9e5df50a51de4217f2e048bd9"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "9d0763a8bde6a6cfdcacd04b21f219ec"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "6d999389f7b8a5a9ee8335a1ced8b2cf"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "4bbf4aafef3637571e7f75092893bdbf"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "a53d6a9ce1b33d60b225dfc3614a7a10"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "8f5d7b7a897364f697d45922ebdd7a02"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "0fbf2fe0b9435528f4b2f60be720c2ba"
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
