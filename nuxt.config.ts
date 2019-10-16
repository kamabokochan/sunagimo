export default {
  env: {},
  head: {
    title: "{{ name }}",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "{{ description }}" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: '/highlight/styles/hopscotch.css' }
    ],
    script: [
      { src: '/highlight/highlight.pack.js' },
      { src: '/js/execution.js' }
    ]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {},
  buildModules: ["@nuxt/typescript-build"],
  modules: [
    "@nuxtjs/axios",
    '@nuxtjs/markdownit',
  ],
  axios: {},
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true
  }
}
