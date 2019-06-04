<template>
  <ul>
    <li
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
  import Bus from '../bus.js'

  export default {
    name: 'CityAlphabet',
    props: {
      cities: Object
    },
    data() {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    computed: {
      letters() {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    updated() {
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
      handleLetterClick(e) {
        // console.log(e);
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        if (this.touchStatus) {
          // console.log(e);
          // console.log(this.$refs['A'][0].clientHeight);//20
          // console.log(this.$refs['A']);//[li]
          // console.log(this.$refs['A'][0].offsetTop);//距离有定位父盒子的距离
          // console.log(555.4-this.$refs['Z'][0].offsetTop);//距离有定位父盒子的距离
          // console.log(e.touches[0].clientY);//触摸时手指距离网页顶部的距离


          // 函数节流
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
              const touchY = e.touches[0].clientY - 79;
              // console.log(touchY);
              const index = Math.floor((touchY - this.startY) / 20);
              // console.log(index);
              if (index >= 0 && index < this.letters.length) {
                // console.log(this.letters[index]);
                this.$emit('change', this.letters[index])
              }
            }
            , 16)
          // console.log(e);
          // console.log(e.touches[0].clientY);
        }
      },
      handleTouchEnd() {
        this.touchStatus = false;
        Bus.$emit('stopShowAlphabet')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  ul
    display: flex
    flex-direction: column
    justify-content: center
    /*align-items: center*/
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem

    li
      line-height: .4rem
      /*font-size: .26rem*/
      text-align: center
      color: $bgColor
</style>
