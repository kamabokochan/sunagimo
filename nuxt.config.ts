export default {
  env: {},
  head: {
    title: "KAMABOKO BLOG",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "KAMABOKOちゃんのブログです。フロントエンドや日々思ったこと・経験したことなどを記事にします。" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  loading: { color: "#3B8070" },
  css: [
    "~/assets/css/style.scss",
    '~/node_modules/highlight.js/styles/hopscotch.css'
  ],
  build: {},
  buildModules: ["@nuxt/typescript-build"],
  modules: [
    "@nuxtjs/axios"
    // '@nuxtjs/markdownit',
  ],
  axios: {},
  // markdownit: {
  //   injected: true,
  //   breaks: true,
  //   langPrefix: "hljs language-", // コードブロックのCSSクラス名の接頭辞に付加します。
  //   linkify: true,
  //   use: [
  //     'markdown-it-div',
  //     'markdown-it-attrs'
  //   ],
  //   highlight: (str: any, lang: any) => {
  //     const hljs = require('highlight.js');
  //     if (lang) {
  //       try {
  //         return hljs.highlight(lang, str, true).value;
  //       } catch (err) { }
  //     }
  //     // 言語設定がない場合、プレーンテキストとして表示する
  //     return hljs.highlight('plaintext', str, true).value;
  //   }
  // }
}
