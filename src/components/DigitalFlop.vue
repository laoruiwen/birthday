<template>
  <div class="number">
    <ul id="dataNums">
      <li v-for="(item,index) in list" :key="index">
        <div class="dataBoc">
          <div class="tt" :style="{transition:'all 2.5s ease-in-out 0s',top:'-'+item.top+'px'}">
                        <span v-for="(item2,index2) in numList" :key="index2">{{ item2 }}
                         </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
/**
 * TODO: 加入千分符
 */
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
        }, index * 300);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.number {
  height: 12rem;
  margin-top: 2rem;
  margin-bottom: 5rem;

  ul {
    display: inline-block;
    height: 100%;
    margin: 0;
    padding: 0;

    li {
      float: left;
      width: 8rem;
      height: 12rem;
      text-align: center;
      margin: 0 .6rem;
      background: url(~@/assets/images/DigitalFlopBack.png) no-repeat center; //背景图
      background-size: 100% 100%;
      list-style: none;

      .dataBoc {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;

        .tt {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          span {
            width: 100%;
            height: 100%;
            line-height: 12rem;
            float: left;
            text-align: center;
            font-size: 8rem;
            font-weight: bold;
            background: linear-gradient(to bottom, #fffd34, #ffb000, #fffd34);
            -webkit-background-clip: text;
            color: transparent;
          }
        }
      }
    }
  }
}
</style>

