<template lang="md">
  <p v-html="post.bodyHtml"></p>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { State, Action, Getter, Mutation, namespace } from "vuex-class"

@Component
export default class extends Vue {
  @Getter("contents/post") post!: any
  @Action("contents/getContents") getContents: any
  async created() {
    await this.getContents(this.$route.params.id);
    console.log(this.post)
  }
  // summary = Object.values(summary.fileMap)
  // id!: number

  // mounted() {
  //   this.id = Number(this.$route.params.id)
  //   this.data = this.summary[this.id]
  //   this.path = `${this.data.dir}/${this.data.base}`
  // }

  // // get post() {
  //   // return this.posts.find(post => post.id === Number(this.$route.params.id))
  // // }
}
</script>

<style lang="scss">
</style>