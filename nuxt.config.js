const env = require("dotenv").config();
console.log(env);

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      // { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "viewport", content: "width=device-width, user-scalable=no" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [{ src: "~assets/milligram.styl", lang: "stylus" }],
  // css: [{src:"https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"}, {src:"https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css"}],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/apollo"
  ],
  // See https://axios.nuxtjs.org/options
  axios: {},
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.API,
        httpLinkOptions: {
          headers: {
            [process.env.HEADER]: process.env.HEADER_VAL
          }
        },
        inMemoryCacheOptions: {
          addTypename: false
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
