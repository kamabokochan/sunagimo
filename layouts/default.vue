<template>
  <div class="wrap">
    <header>
      <nuxt-link to="/">KAMABOKO</nuxt-link>
    </header>
    <div class="contents">
      <nuxt/>
    </div>
    <footer>© 2019 KAMABOKO</footer>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
.wrap {
  background-color: #dfdede;
  position: relative;
  min-height: 100vh;
  padding-bottom: 60px;
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
  font-family: 'Muli';
}
footer {
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 60px;
  color: #fff;
  background-color: #d1597d;
}
.contents {
  margin: 0 12px;
}
</style>