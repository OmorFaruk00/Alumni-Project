const webpack = require("webpack");
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'alumni',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},      
      {rel: 'stylesheet', id: 'bootstrap-style', href: '/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: '/css/icons.min.css'},      
      {rel: 'stylesheet', href: '/bootstrap-select/dist/css/bootstrap-select.min.css'},
     
    ],

    script: [
      {src: '/libs/jquery/jquery.min.js', defer: true},
      {src: '/libs/bootstrap/js/bootstrap.bundle.min.js', defer: true},     
      {src: '/bootstrap-select/dist/js/bootstrap-select.min.js', defer: true},
      {src: '/libs/metismenu/metisMenu.min.js', defer: true},
      {src: '/libs/simplebar/simplebar.min.js', defer: true},
     
      
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [   
   '@/assets/css/main.css',
  //  'bootstrap/dist/css/bootstrap.css',
  
  
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: 'plugins/owl.js', ssr: false},
    {src: 'plugins/bootstrap.js', ssr: false},  
    
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      }
    }
   
  },


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
  
}

