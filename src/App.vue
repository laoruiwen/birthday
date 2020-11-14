<template>
  <div class="height100 bg">
    <div class="baberrage">
      <vue-baberrage
          :isShow="true"
          :barrageList="barrageList"
          :loop="true"
          :lanesCount="3"
          :messageHeight="60"
      >
      </vue-baberrage>
    </div>

    <div>
      <div class="mascot"></div>
      <div class="number">
        <h1>{{ $t("celebrated") }}</h1>
        <h1>{{ $t("discounted") }}</h1>
      </div>
    </div>

    <div>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
      <span class="bokeh"></span>
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

import {vueBaberrage} from 'vue-baberrage'


export default {
  name: 'App',
  components: {
    vueBaberrage
  },
  data() {
    return {
      currentId: 0,
      barrageList: []
    }
  },
  mounted() {
    this.getTodayBarrage();
    this.clearTodayBarrage();
  },
  beforeDestroy() {
    clearInterval(this.timmer)
  },
  methods: {
    /**
     * 获取当天弹幕列表
     */
    getTodayBarrage() {
      this.$axios.get('/todayBarrage')
          .then((res) => {
            const options = res.data;
            if (options.success) {
              options.data.forEach((data) => {
                this.addToList(this.$t('barrage', data));
              })
            }
          })
    },
    /**
     * 增加一条弹幕
     */
    addToList(msg) {
      this.barrageList.push(Object.assign({
        id: ++this.currentId,
        avatar: require("./assets/images/gift.png"),
        msg: msg,
        time: Math.round(Math.random() * 10) % 3 + 14
      }, this.baseConfig.barrage))
    },
    /**
     * 凌晨时清弹幕
     */
    clearTodayBarrage() {
      this.timmer = setInterval(() => {
        const date = new Date(),
            h = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
        if (h === 0 && m === 0 && s === 0) {
          this.barrageList = [];
          this.currentId = 0;
        }
      }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  background-image: url(~@/assets/images/background.jpg);
  background-size: cover;
  background-position: center;
  -webkit-font-smoothing: antialiased; // 这个属性可以使页面上的字体抗锯齿,使用后字体看起来会更清晰舒服
  transform-style: preserve-3d;
}

.baberrage {
  padding-left: 12%;
  height: 20%;
  position: relative;
  font-size: 1.4rem;
}

.mascot {
  display: inline-block;
  width: 22%;
}

.number {
  display: inline-block;
  width: 78%;

  h1 {
    font-size: 4rem;
    font-family: "Arial";
    color: rgb(233, 198, 143);
    font-weight: bold;
    text-shadow: 0 7px 6.93px rgba(145, 112, 2, 0.004);
  }
}
</style>

<style scoped>
@import 'animation.css';
</style>
