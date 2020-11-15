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
      <div class="numberBox">
        <h1>{{ $t("celebrated") }}</h1>
        <DigitalFlop :number="celebratedString"></DigitalFlop>
        <h1>{{ $t("discounted") }}</h1>
        <DigitalFlop :number="discountedString"></DigitalFlop>
      </div>
    </div>

    <div class="ribbon">
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
import DigitalFlop from './components/DigitalFlop.vue'

export default {
  name: 'App',
  components: {
    vueBaberrage,
    DigitalFlop
  },
  data() {
    return {
      currentId: 0,
      barrageList: [],
      celebrated: 0,
      celebratedString: '000000000',
      discounted: 0,
      discountedString: '0000000000',
    }
  },
  mounted() {
    this.$axios.all([this.getBirthdayInformation(), this.getTodayBarrage()])
        .then(this.$axios.spread( () => {
          this.$socket.emit('init');
        }));
    this.clearTodayBarrage();
  },
  beforeDestroy() {
    clearInterval(this.timmer)
  },
  sockets: {
    birthdayInfo(data) {
      this.addOneBarrage(data);
      this.addOneBirthday(this.celebrated+1);
    }
  },
  methods: {
    /**
     * 获取店铺生日信息
     */
    getBirthdayInformation() {
      return this.$axios.get('/getBirthdayInformation')
          .then((res) => {
            const options = res.data;
            if (options.success) {
              this.addOneBirthday(options.data);
            }
          })
    },
    /**
     * 加一个人生日
     */
    addOneBirthday(data) {
      this.celebrated = data;
      this.discounted = data * this.baseConfig.discount;
      let celebrated = this.celebrated.toString(),
          discounted = this.discounted.toString(),
          celebratedZero = 9 - celebrated.length,
          discountedZero = 10 - discounted.length;
      if(celebratedZero > 0) {
        celebrated = Array(celebratedZero + 1).join(0) + celebrated;
      }
      if(celebratedZero > 0) {
        discounted = Array(discountedZero + 1).join(0) + discounted;
      }
      this.celebratedString = celebrated;
      this.discountedString = discounted;
    },
    /**
     * 获取当天弹幕列表
     */
    getTodayBarrage() {
      return this.$axios.get('/todayBarrage')
          .then((res) => {
            const options = res.data;
            if (options.success) {
              options.data.forEach((data) => {
                this.addOneBarrage(data);
              })
            }
          })
    },
    /**
     * 增加一条弹幕
     */
    addOneBarrage(data) {
      this.barrageList.push(Object.assign({
        id: ++this.currentId,
        avatar: require("./assets/images/gift.png"),
        msg: this.$t('barrage', data),
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
  width: 17%;
}

.numberBox {
  display: inline-block;
  width: 83%;

  h1 {
    font-size: 4rem;
    color: #ffe641;
    font-weight: bold;
    text-shadow: .3rem .3rem .2rem #333;
  }
}

.ribbon {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
</style>

<style scoped>
@import 'animation.css';
</style>
