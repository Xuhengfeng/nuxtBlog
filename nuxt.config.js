module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'xhfblog',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css:[
    {src:'~assets/css/reset.css'},
    {src:'element-ui/lib/theme-chalk/index.css'}
  ],
  plugins: [
    {src:'~plugins/axios', ssr: false},
    {src:'~plugins/element-ui', ssr: false}
  ],
  proxy: [ 
    ['/api', {target: 'http://**.com'}] 
  ], 
  env: {
    baseUrl: 'http://112.74.181.229:7031/custAppApi'
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios','element-ui'],/*多个地方引用，防止多次打包*/
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },


  }
}

