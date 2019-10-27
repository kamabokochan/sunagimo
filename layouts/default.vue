<template>
  <div
    class="wrap"
    :style="{ minHeight: `${windowInnerHeight - footerHeight}px`, paddingBottom: `${footerHeight}px` }"
  >
    <header>
      <nuxt-link to="/">KAMABOKO</nuxt-link>
    </header>
    <div class="contents">
      <nuxt />
    </div>
    <footer :style="{height: `${footerHeight}px`}">© 2019 KAMABOKO</footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State, Action, Getter, Mutation, namespace } from "vuex-class";

@Component({})
export default class extends Vue {
  windowInnerHeight: number = 0;
  footerHeight: number = 60;
  mounted() {
    this.windowInnerHeight = window.innerHeight;
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
.wrap {
  background-color: #dfdede;
  position: relative;
}
header {
  height: 65px;
  font-size: 18px;
  letter-spacing: 6px;
  border-bottom: dashed 2px #d1597d;
  padding: 42px 42px 0;
  margin: 0 60px;
  @media screen and (max-width: 896px) {
    justify-content: center;
  }
}
header,
footer {
  display: flex;
  align-items: center;
  font-family: "Muli";
}
footer {
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  color: #fff;
  background-color: #d1597d;
}
.contents {
  margin: 0 12px;
}
</style>