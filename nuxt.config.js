const host = "spokaku.com"
const domain = host
const mailHost = "kakurenbo.club"
const projectName = "スポかく"
const siteTitle = `${projectName} - 大人も子供も一緒に楽しめるスポーツかくれんぼ`
const siteDescription = '「スポーツかくれんぼ（通称: スポかく）」は皆さんが一度は遊んだことがあるであろう かくれんぼに得点要素を加えてできた、全く新しいスポーツです。缶蹴りのように鬼は 拠点を守りながら探し、隠れる側は鬼に見つからないように拠点を攻める、子供の頃に 遊んだかくれんぼよりもより白熱して楽しむことができます。'
const GAID = 'G-XTWD4SSBY9'
const GAcode = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GAID}');`

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: siteTitle,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: siteDescription },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'スポかく,スポーツかくれんぼ,かくれんぼ in ぐんま' },
      { name: 'msapplication-TileColor', content: '#00aba9' },
      { name: 'theme-color', content: '#1f2233' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'canonical', href: `https://${domain}` },
    ],
    script: [
      {
        hid: 'GAsrc',
        src: 'https://www.googletagmanager.com/gtag/js?id=' + GAID,
        async: true
      },
      {
        hid: 'GAcode',
        innerHTML: GAcode
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'GAsrc': ['innerHTML'],
      'GAcode': ['innerHTML']
    }
  },
  env: {
    ctfSpaceId: process.env.CTF_SPACE_ID,
    ctfCdaAccessToken: process.env.CTF_CDA_ACCESS_TOKEN,
    mailgunKey: process.env.MAILGUN_KEY,
    host,
    domain,
    mailHost,
    projectName,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/mailgun.js',
    '~/plugins/contentful.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    ['@nuxtjs/date-fns', { locales: ['ja'] }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/redirect-module',
  ],
  styleResources: {
    sass: ['~/assets/css/index.scss']
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: `https://${domain}`,
    gzip: true,
    trailingSlash: true,
  },
  robots: {
    UserAgent: '*',
    // クローリングしないパスを記述
    // sitemap.xmlのURLを記述
    Sitemap: `https://${domain}/sitemap.xml`,
  },
  redirect: [
    {
      from: '^(\\/[^\\?]*[^\\/])(\\?.*)?$',
      to: '$1/$2',
      statusCode: 301
    }
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }]
      ]
    },
  },
  router: {
    trailingSlash: true
  }
}
