<template>
  <div class="height100 bg">
    <div>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
      <bokeh></bokeh>
    </div>

    <div id="cake">
      <div class="candle">
        <div id="flame" class="lit"></div>
      </div>

      <div class="cake"></div>
      <div class="plate"></div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss" scoped>
.bg {
  background-image: url(~@/assets/background.jpg);
  background-size: cover;
  background-position: center;
  -webkit-font-smoothing: antialiased; // 这个属性可以使页面上的字体抗锯齿,使用后字体看起来会更清晰舒服
  transform-style: preserve-3d;
}
</style>

<style scoped>
@import 'animation.css';
</style>
