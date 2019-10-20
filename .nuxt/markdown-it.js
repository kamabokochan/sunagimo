import MarkdownIt from 'markdown-it'

export default ({ app }, inject) => {
  const md = new MarkdownIt({"breaks":true,"langPrefix":"hljs language-","linkify":true,"highlight":(str, lang) => {
            const hljs = require('highlight.js');
            if (lang) {
                try {
                    return hljs.highlight(lang, str, true).value;
                }
                catch (err) { }
            }
            // 言語設定がない場合、プレーンテキストとして表示する
            return hljs.highlight('plaintext', str, true).value;
        }})

  md.use(require('markdown-it-div'))

  md.use(require('markdown-it-attrs'))

  inject('md', md)
}
