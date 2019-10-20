<template>
  <div>
    <div v-for="(summary,index) in summary" :key="index">
      <nuxt-link :to="{ name:'posts-id', params:{ id: index, url: `${summary.dir}/${summary.base}` } }">{{ summary.title }}</nuxt-link>
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
    await this.getSummary();
  }
}
</script>

<style scoped>
.blog {
  width: 800px;
  margin: auto;
  padding: 180px 0;
  font-size: 16px;
  line-height: 1.8;
}
</style>
