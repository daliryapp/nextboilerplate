if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js')
      let s = Promise.resolve()
      return (
        a[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const a = document.createElement('script')
              ;(a.src = e), document.head.appendChild(a), (a.onload = s)
            } else importScripts(e), s()
          })),
        s.then(() => {
          if (!a[e]) throw new Error(`Module ${e} didn’t register its module`)
          return a[e]
        })
      )
    },
    s = (s, a) => {
      Promise.all(s.map(e)).then((e) => a(1 === e.length ? e[0] : e))
    },
    a = { require: Promise.resolve(s) }
  self.define = (s, i, c) => {
    a[s] ||
      (a[s] = Promise.resolve().then(() => {
        let a = {}
        const n = { uri: location.origin + s.slice(1) }
        return Promise.all(
          i.map((s) => {
            switch (s) {
              case 'exports':
                return a
              case 'module':
                return n
              default:
                return e(s)
            }
          }),
        ).then((e) => {
          const s = c(...e)
          return a.default || (a.default = s), a
        })
      }))
  }
}
define('./sw.js', ['./workbox-a1b75552'], function (e) {
  'use strict'
  importScripts(),
    self.addEventListener('message', (e) => {
      e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting()
    }),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/chunks/196.4ce736a7075df56b1bcf.js',
          revision: 'c0d1e4f8d5064c60cddfb7b39362c0b9',
        },
        {
          url: '/_next/static/chunks/266.9af8acc50901115cfc4c.js',
          revision: '56cf5ad9e0584968b67773c5f67d5409',
        },
        {
          url: '/_next/static/chunks/283.df6943ec4432a14fa719.js',
          revision: '81bfa12103ee0b588bfc022c6a032780',
        },
        {
          url: '/_next/static/chunks/29107295-62449f6ab50432c0efef.js',
          revision: '68ef1453254f661cf165932bb64c3f7e',
        },
        {
          url: '/_next/static/chunks/321.106b8ce8f54c07327bbb.js',
          revision: '66222084c5a2803d0356f0ff31281b1c',
        },
        {
          url: '/_next/static/chunks/487-9dc0e6c76f6d5dfef88a.js',
          revision: '48eca9aa028ef5159ecc843f40a47770',
        },
        {
          url: '/_next/static/chunks/493.88afe4f31c1d1abb9be6.js',
          revision: 'dca2df4b0bc7924464b89933da19619f',
        },
        {
          url: '/_next/static/chunks/633-f7a8ed83feb46a538fa5.js',
          revision: '775536fc3254f6b1a67db68944343ad3',
        },
        {
          url: '/_next/static/chunks/74.60eff8560ba826af295a.js',
          revision: '57a4d5c738a8227813a5015a663dae58',
        },
        {
          url: '/_next/static/chunks/811-4e7361c1f59ca5d73633.js',
          revision: '3d7d9e2f8344a8661d9010375c37689c',
        },
        {
          url: '/_next/static/chunks/885.eca8abc8328dc0b13a59.js',
          revision: '5b45e0c37469eb89a4cdcf7a2bd1bf4f',
        },
        {
          url: '/_next/static/chunks/969.e2af30a84921c7454d92.js',
          revision: 'd57f8601e3542e2fd258fac119c8971e',
        },
        {
          url: '/_next/static/chunks/991.d9724165c0c06655fbac.js',
          revision: '6b00a255f30e46fe287004ee8528ad6e',
        },
        {
          url: '/_next/static/chunks/framework-3af989d3dbeb77832f99.js',
          revision: '2fee38bcf4fc25735ae0bae9dab39d0f',
        },
        {
          url: '/_next/static/chunks/main-111d9324e7cee766d509.js',
          revision: '7fd037a272477d6f07f74912504f3632',
        },
        {
          url: '/_next/static/chunks/pages/_app-f305d3519ebd5e5adfb5.js',
          revision: '189025fee990fe07e6fdd65f35eaef68',
        },
        {
          url: '/_next/static/chunks/pages/_error-320156178fd9e8030c75.js',
          revision: 'be439d8da0d1e6c162bdb2a36a5401b4',
        },
        {
          url: '/_next/static/chunks/pages/auth/signin-55f89ae3b5ea3079eb31.js',
          revision: '267f9cc41c590552f4b320d16d8c75a3',
        },
        {
          url: '/_next/static/chunks/pages/index-7aa640c76ffc998fb7e2.js',
          revision: '15d56715f3a33779f0aa7846fa12822a',
        },
        {
          url: '/_next/static/chunks/pages/profile/%5B[...slug%5D%5D-2a7c97011a0eedf17211.js',
          revision: '27647a3478e0f6d523468a667ef54474',
        },
        {
          url: '/_next/static/chunks/pages/search/%5BcategoryName%5D-302990a5120f3ccd8391.js',
          revision: '2f2963f3902ed72347de2de86c53cb45',
        },
        {
          url: '/_next/static/chunks/pages/wishlist-d77e0f395959c1db9971.js',
          revision: '641754f1e31ede3f033d1293fd2cee00',
        },
        {
          url: '/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js',
          revision: '99442aec5788bccac9b2f0ead2afdd6b',
        },
        {
          url: '/_next/static/chunks/webpack-cbab015eb1941ffa6e5c.js',
          revision: 'f639173015029bf3e51975c0a2e17fc6',
        },
        {
          url: '/_next/static/fLv58cVU6hbzmoU5BFv-J/_buildManifest.js',
          revision: '7ee6de85b5194c092e82e84064a51191',
        },
        {
          url: '/_next/static/fLv58cVU6hbzmoU5BFv-J/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/favicon.ico', revision: '4ff59fef4ad8bd2547e3db47bac48f20' },
        {
          url: '/fonts/Roboto-Black.ttf',
          revision: 'ec4c9962ba54eb91787aa93d361c10a8',
        },
        {
          url: '/fonts/Roboto-BlackItalic.ttf',
          revision: '50705c5ed1205b63efdbfee941a6b655',
        },
        {
          url: '/fonts/Roboto-Bold.ttf',
          revision: 'ee7b96fa85d8fdb8c126409326ac2d2b',
        },
        {
          url: '/fonts/Roboto-BoldItalic.ttf',
          revision: '1eb7a893589ddce89d81cdb22a356660',
        },
        {
          url: '/fonts/Roboto-Italic.ttf',
          revision: '42bbe4eefcde1297b11dc4b6491e9746',
        },
        {
          url: '/fonts/Roboto-Light.ttf',
          revision: 'fc84e998bc29b297ea20321e4c90b6ed',
        },
        {
          url: '/fonts/Roboto-LightItalic.ttf',
          revision: 'd1efcd4d126837fe0dcf9b6cf3a00d64',
        },
        {
          url: '/fonts/Roboto-Medium.ttf',
          revision: 'd08840599e05db7345652d3d417574a9',
        },
        {
          url: '/fonts/Roboto-MediumItalic.ttf',
          revision: 'bd19ad60600a1537c00d3b4923a5e5de',
        },
        {
          url: '/fonts/Roboto-Regular.ttf',
          revision: '3e1af3ef546b9e6ecef9f3ba197bf7d2',
        },
        {
          url: '/fonts/Roboto-Thin.ttf',
          revision: '89e2666c24d37055bcb60e9d2d9f7e35',
        },
        {
          url: '/fonts/Roboto-ThinItalic.ttf',
          revision: '0fc25386220a58203994ce45fb4ae570',
        },
        {
          url: '/icons/icon-128x128.png',
          revision: 'd626cfe7c65e6e5403bcbb9d13aa5053',
        },
        {
          url: '/icons/icon-144x144.png',
          revision: 'e53a506b62999dc7a4f8b7222f8c5add',
        },
        {
          url: '/icons/icon-152x152.png',
          revision: '18b3958440703a9ecd3c246a0f3f7c72',
        },
        {
          url: '/icons/icon-16x16.png',
          revision: '83703514f19796ee15151e450984416d',
        },
        {
          url: '/icons/icon-192x192.png',
          revision: '27dc12f66697a47b6a8b3ee25ba96257',
        },
        {
          url: '/icons/icon-32x32.png',
          revision: '25e2c6ee34840568012b32e4314278df',
        },
        {
          url: '/icons/icon-384x384.png',
          revision: 'a40324a3fde2b0b26eeffd4f08bf8be8',
        },
        {
          url: '/icons/icon-512x512.png',
          revision: '93d6e8e15cfa78dfee55446f607d9a28',
        },
        {
          url: '/icons/icon-72x72.png',
          revision: 'f2ffc41b3482888f3ae614e0dd2f6980',
        },
        {
          url: '/icons/icon-96x96.png',
          revision: 'fba02a40f7ba6fc65be8a2f245480f6d',
        },
        { url: '/manifest.json', revision: 'c96057f6fe080d95b52920d55437ade9' },
        {
          url: '/static/locales/en-US.json',
          revision: '60385ab5ad1ff32b76d78492bdb16ce9',
        },
        {
          url: '/static/locales/fr-FR.json',
          revision: '395e7085b861d83f257dc3461f09dc2c',
        },
        {
          url: '/static/locales/nl-NL.json',
          revision: '1ba018dd0a379291743c7035c9166a4b',
        },
        {
          url: '/svg/bottom-navigation/bn-active-edge.svg',
          revision: '1e49ce434823597ad98ff3b21ff4cd50',
        },
        {
          url: '/svg/bottom-navigation/bn-close.svg',
          revision: '6113f59ac1e6e324fad99dd0dbc253c9',
        },
        {
          url: '/svg/bottom-navigation/bn-events.svg',
          revision: '89f6843b54059425427de4355a460c31',
        },
        {
          url: '/svg/bottom-navigation/bn-flower.svg',
          revision: '00da412f80880ecd24e95a85fafd839f',
        },
        {
          url: '/svg/bottom-navigation/bn-gift.svg',
          revision: '02a72379eff2d06db1dce35853c152a3',
        },
        {
          url: '/svg/bottom-navigation/bn-home.svg',
          revision: 'fd3142eedcab85b24bc65155519c17a1',
        },
        {
          url: '/svg/bottom-navigation/bn-me.svg',
          revision: 'ccc5638a1d7a67f9e7aafa13330f8ca9',
        },
        {
          url: '/svg/bottom-navigation/bn-plant.svg',
          revision: 'adc18076f16a6b60a467ee206b211986',
        },
        {
          url: '/svg/bottom-navigation/bn-profile.svg',
          revision: 'fff5f6222d407cff75cf9057a3b32f56',
        },
        {
          url: '/svg/bottom-navigation/bn-wishlist.svg',
          revision: 'f5d044fab1ad940bb0bbaf32780ff4d1',
        },
        {
          url: '/svg/bottom-navigation/bn-wishlist2.svg',
          revision: 'e95aa2a10d6425a16ab2aff14a16de81',
        },
        { url: '/svg/logo.svg', revision: 'edfb74ee2e4dc56ae97b5aaa7dcf4c19' },
        {
          url: '/svg/noWishlist.svg',
          revision: '9778cb848c940e7935122ca2f40cb2f4',
        },
        {
          url: '/svg/profile/addresses.svg',
          revision: '7a07ffe775e5139191d98addcb58ccd5',
        },
        {
          url: '/svg/profile/arrow-left.svg',
          revision: '8bf3c176babd5687d70dfb780f268a5a',
        },
        {
          url: '/svg/profile/arrow-right.svg',
          revision: 'b45c7ac9653d4ee8bacd98f07d3c578e',
        },
        {
          url: '/svg/profile/company-info.svg',
          revision: 'a11cac0974608e2f9482e47e75484de5',
        },
        {
          url: '/svg/profile/default-user.svg',
          revision: '1c9ceaa25be72487213f4d65df855f98',
        },
        {
          url: '/svg/profile/events.svg',
          revision: '5daa1dfc2e29cd918aa29f883d1df615',
        },
        {
          url: '/svg/profile/orders.svg',
          revision: '4663ec3f434d05cccb92ce3c76c00844',
        },
        {
          url: '/svg/profile/password.svg',
          revision: '74df4dd7e1ebfd2162622965c8c0add2',
        },
        {
          url: '/svg/profile/payment-info.svg',
          revision: '37cf62b4c7203962cbda92631f4ca86c',
        },
        {
          url: '/svg/profile/personal-info.svg',
          revision: 'e16fb421b4cb5fb2030083ce9f7e3121',
        },
        {
          url: '/svg/profile/wishlist.svg',
          revision: 'd1d5d6f0b4847ce1f084b3bdd6292472',
        },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET',
    )
})
