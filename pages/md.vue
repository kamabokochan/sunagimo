<template lang="md">
  <div class="blog">

    # Nuxt.jsとmarkdownitでブログ作った

    ## 第二見出し

    これがサンプルコードです。
    [こちら](/md_test)から、詳細が見れます。（大嘘）

    ```.typescript
    const dog = {};
    dog.name = 'pochi';
    dog.call = () => 'わん'
    ```

    <nuxt-link to="/">top</nuxt-link>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
@font-face { font-family: "Yu Gothic M"; src: local("Yu Gothic Medium"); }
@font-face { font-family: "Yu Gothic M"; src: local("Yu Gothic Bold"); font-weight: bold; }
body {
  font-family:
    -apple-system, BlinkMacSystemFont,
    "游ゴシック体", YuGothic,
    "Yu Gothic M",
    "游ゴシック Medium", "Yu Gothic Medium",
    "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN W3", HiraKakuProN-W3,
    "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro",
    "メイリオ", Meiryo,
    Osaka,
    "ＭＳ Ｐゴシック", "MS PGothic",
    "Helvetica Neue", HelveticaNeue,
    Helvetica,
    Arial,
    "Segoe UI",
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji";
}
.blog {
  width: 800px;
  margin: auto;
  padding: 180px 0;
  font-size: 16px;
  line-height: 1.8;
}
h1,h2,h3,h4 {
  text-align: center;
}
h1 + p {
  text-align: center
}
h2,p,pre {
  margin: 60px 0;
}
pre code {
  font-size: 16px;
}
</style>