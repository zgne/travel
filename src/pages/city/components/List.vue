<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="address">
        <div class="title border-topbottom">当前城市</div>
        <div class="city-list">
          <div class="city">
            <div class="city-btn">北京</div>
          </div>
        </div>
      </div>
      <div class="address">
        <div class="title border-topbottom">热门城市</div>
        <div class="city-list">
          <div class="city" v-for="item of hot" :key="item.id">
            <div class="city-btn">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="address"
        v-for="(items,key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="item in items" :key="item.id">
          <div class="item border-bottom">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="signAlphabet" ref="signAlphabet">{{letter}}</div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import Bus from '../bus'

  export default {
    name: 'CityList',
    props: {
      hot: Array,
      cities: Object,
      letter: String
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch: {
      letter() {
        if (this.letter) {
          // console.log(this.$refs[this.letter]);数组，绑定在循环中的ref都是数组
          const element = this.$refs[this.letter][0];
          this.scroll.scrollToElement(element);
          this.$refs['signAlphabet'].style.display = 'block';
          var this_ = this;
          Bus.$on('stopShowAlphabet',
            () => this_.$refs['signAlphabet'].style.display = 'none'
        )
        }
        // console.log(this.letter);
      }
    },
    computed: {}
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    /*background-color: red*/

    .border-topbottom
      &:before
        border-color: #ccc

      &:after
        border-color #ccc

      .border-bottom
        &:before
          border-color #ccc

    .title
      color: #666
      padding-left: .2rem
      font-size: .24rem
      line-height: .54rem
      background-color: #eee

    .city-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem

      .city
        float: left
        width: 33.3%

        .city-btn
          margin: .1rem
          font-size: .28rem
          text-align: center
          padding: .1rem 0
          border-radius: .06rem
          border: .02rem solid #ccc

    .item-list
      .item
        padding-left: .2rem
        line-height: .76rem

  .signAlphabet
    display none
    position: absolute
    top: 50%
    left: 50%
    border-radius: .1rem
    margin: -.6rem 0 0 -.6rem
    width: 1.2rem
    height: 1.2rem
    line-height: 1.2rem
    font-size: .6rem
    color: #fff
    text-align: center
    background-color: rgba(0, 188, 212, .5)

  .show-signAlphabet
    display block
</style>
