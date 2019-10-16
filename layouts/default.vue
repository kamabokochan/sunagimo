<template>
  <div class="wrap">
    <nuxt/>
    <footer>footer</footer>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  position: relative;
  min-height: 100vh;
  padding-bottom: 60px;
}
footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  color: #fff;
  background-color: #333;
}
</style>