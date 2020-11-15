<template>
  <div class="number">
    <ul id="dataNums">
      <li v-for="(item,index) in list" :key="index">
        <div class="dataBoc">
          <div class="tt" :style="{transition:'all 2.5s ease-in-out 0s',top:'-'+item.top+'px'}">
            <span v-for="(item2,index2) in numList" :key="index2">{{ item2 }}</span>
          </div>
        </div>
        <div v-if="(list.length - (index + 1))%3 === 0 && list.length !== (index + 1)" class="separator">,</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      required: true,
      type: [String, Number]
    }
  },
  data() {
    return {
      list: [],
      numList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.']
    }
  },
  mounted() {
    this.scroll();
  },
  watch: {
    number() {
      this.scroll();
    }
  },
  methods: {
    scroll() {
      this.list = this.number.toString().split('');
      let arr = [];
      this.list.forEach((value) => {
        arr.push({num: value, top: 0})
      });
      this.list = arr;
      let Hei = parseFloat(getComputedStyle(document.getElementById("dataNums")).height);
      this.list.forEach((value, index) => {
        setTimeout(() => {
          value.top = parseFloat((value.num * Hei) + (Hei * 10));
        }, index * 100);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.number {
  height: 11.5rem;
  margin-top: 2rem;
  margin-bottom: 6rem;

  ul {
    display: inline-block;
    height: 100%;
    margin: 0;
    padding: 0;

    li {
      float: left;
      list-style: none;
      position: relative;

      .separator {
        background: linear-gradient(to bottom, #ffff00, #ffb725);
        -webkit-background-clip: text;
        color: transparent;
        font-size: 10rem;
        line-height: 1.2;
        float: left;
      }

      .dataBoc {
        position: relative;
        width: 7.5rem;
        height: 11.5rem;
        text-align: center;
        margin: 0 .6rem;
        background: url(~@/assets/images/DigitalFlopBack.png) no-repeat center; //背景图
        background-size: 100% 100%;
        overflow: hidden;
        float: left;

        .tt {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          span {
            width: 100%;
            height: 100%;
            line-height: 11.5rem;
            float: left;
            text-align: center;
            font-size: 7.5rem;
            font-weight: bold;
            background: linear-gradient(to bottom, #ffff00, #ffb725, #ffff00);
            -webkit-background-clip: text;
            color: transparent;
          }
        }
      }
    }
  }
}
</style>

