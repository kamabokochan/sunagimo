<template>
  <div class="post-card-wrap">
    <div v-for="(summary,index) in summary" :key="index" class="post-card">
      <nuxt-link
        :to="{ name:'posts-id', params:{ id: index, url: `${summary.dir}/${summary.base}` } }"
      >
        <p class="created-at">{{ summary.created_at }}</p>
        <ul class="tag-list">
          <li v-for="(tag, index) in summary.tags.split(',')" :key="index">{{ tag }}</li>
        </ul>
        <p class="title">{{ summary.title }}</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State, Action, Getter, Mutation, namespace } from "vuex-class";

@Component({})
export default class extends Vue {
  // summary = Object.values(summary.fileMap)

  @Getter("contents/summary") summary!: any;
  @Action("contents/getSummary") getSummary: any;
  async created() {
    (await this.summary.length) ? Promise.resolve() : this.getSummary();
  }
}
</script>

<style lang="scss" scoped>
.post-card-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 30px 60px;
  padding: 60px 30px;
  @media screen and (max-width: 896px) {
    display: block;
    margin: 18px 0px;
    padding: 60px 0;
  }
  &::after {
    content: "";
    display: block;
    width: calc(33.3333% - 18px);
    height: 0;
  }
}
.post-card {
  width: calc(33.3333% - 18px);
  @media screen and (max-width: 896px) {
    width: 100%;
    + .post-card {
      margin-top: 30px;
    }
  }
  &:nth-child(n + 4) {
    margin-top: 42px;
  }
  a {
    border-radius: 3px;
    // border-top-left-radius: 30px;
    // border-top-right-radius: 30px;
    padding: 42px 24px;
    display: block;
    // border: solid 10px #fbdbe7;
    // border-left: solid 10px #fbdbe7;
    // border-right: solid 10px #fbdbe7;
    background-color: #fff;
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }
  }
}
.created-at {
  font-size: 12px;
  color: #9f9f9f;
}
.tag-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  margin: 12px 0 0 -3px;
  > li {
    margin: 4px 3px;
    color: #666;
    background: #dfdede;
    padding: 2px 6px;
    border-radius: 2px;
  }
}
.title {
  margin-top: 12px;
}
</style>
