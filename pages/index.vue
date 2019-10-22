<template>
  <div class="post-card-wrap">
    <div v-for="(summary,index) in summary" :key="index" class="post-card">
      <nuxt-link :to="{ name:'posts-id', params:{ id: index, url: `${summary.dir}/${summary.base}` } }">
      <p class="created-at">{{ summary.created_at }}</p>
      <p class="title">{{ summary.title }}</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { State, Action, Getter, Mutation, namespace } from "vuex-class";

@Component({})
export default class extends Vue {
  // summary = Object.values(summary.fileMap)

  @Getter("contents/summary") summary!: any
  @Action("contents/getSummary") getSummary: any
  async created() {
    await this.summary.length ? Promise.resolve() : this.getSummary();
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
  &::after {
    content: "";
    display: block;
    width: calc(33.3333% - 18px);
    height: 0;
  }
}
.post-card {
  width: calc(33.3333% - 18px);
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
.title {
  margin-top: 12px;
}
</style>
