<template>
  <div class="post-wrap">
    <div class="post">
      <h1>{{ post.title }}</h1>
      <ul class="date-list">
        <li>作成:{{ post.created_at }}</li>
        <li>更新:{{ post.updated_at }}</li>
      </ul>
      <div class="parsed-md" v-html="post.bodyHtml"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State, Action, Getter, Mutation, namespace } from "vuex-class";

@Component
export default class extends Vue {
  @Getter("contents/post") post!: any;
  @Action("contents/getContents") getContents: any;

  async created() {
    (await this.post.length)
      ? Promise.resolve()
      : this.getContents(this.$route.params.id);
    console.log(this.post);
  }
}
</script>
<style lang="scss">
.parsed-md {
  margin-top: 180px;
  line-height: 1.6;
  p + p,
  pre + p,
  p + pre {
    margin-top: 16px;
  }
  a {
    color: #45b1a2;
  }
  h2 {
    margin: 60px 0 30px;
    padding-bottom: 24px;
    font-size: 28px;
    text-align: center;
    border-bottom: solid 4px #d1597d;
  }
  h3 {
    margin: 60px 0 30px;
    padding: 4px 24px;
    background: linear-gradient(90deg, #d1597d 8px, #fff 8px);
  }
  code.hljs {
    overflow-x: auto;
    padding: 18px 21px;
    line-height: 1.6;
    border-radius: 3px;
  }
  ul > li {
    display: flex;
    align-items: center;
    &:before {
      content: "◆";
      padding-right: 10px;
      font-size: 10px;
      color: #d1597d;
    }
  }
}
</style>
<style lang="scss" scoped>
.post {
  max-width: 800px;
  margin: 42px auto;
  padding: 180px 90px 90px;
  font-size: 16px;
  background-color: #fefefe;
  border-radius: 3px;
  @media screen and (max-width: 896px) {
    padding: 120px 15px;
  }
}
h1 {
  font-size: 32px;
  text-align: center;
  font-weight: normal;
  color: #555;
  background-color: #fbdbe7;
  padding: 64px 42px;
  border-top-left-radius: 140px;
  border-top-right-radius: 140px;
  border-bottom: solid 12px #d7b689;
}
.date-list {
  text-align: right;
  font-size: 12px;
  margin-top: 60px;
}
</style>