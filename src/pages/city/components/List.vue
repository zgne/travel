<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="address">
        <div class="title border-topbottom">当前城市</div>
        <div class="city-list">
          <div class="city">
            <div class="city-btn">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="address">
        <div class="title border-topbottom">热门城市</div>
        <div class="city-list">
          <div
            class="city"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
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
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="item in items"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <div class="signAlphabet" ref="showAlphabet" v-if="hideAlphabet">{{letter}}</div>
<!--    <div class="signAlphabet">{{letter}}</div>-->
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
      letter: String,
    },
    data(){
      return{
        hideAlphabet: false
      }
    },
    methods:{
      handleCityClick(city){
        // console.log(city);
        // 非异步，可以直接调用commit
        // this.$store.dispatch("changeCity",city)
        this.$store.commit('changeCity',city)
        this.$router.push('/')
      }
    },
    watch: {
      letter() {
        if (this.letter) {
          // console.log(this.$refs[this.letter]);数组，绑定在循环中的ref都是数组
          const element = this.$refs[this.letter][0];
          this.scroll.scrollToElement(element);
          // this.hideAlphabet = true;
          var this_ = this;
          if(this.hideAlphabet === false){
            this.hideAlphabet=true;
          }
          setTimeout(function(){//此处可以用箭头函数进行操作
            this_.hideAlphabet=false;
          },500)

          // 错误
          // console.log(this.$refs['showAlphabet']);
          // this.$refs['signAlphabet'].style.display = 'block';
          // 错误

          //   Bus.$on('stopShowAlphabet',
          //     () => this_.$refs['signAlphabet'].style.display = 'none'
          // )
        }
        // console.log(this.letter);
      }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper,{ mouseWheel: true, click: true, tap: true })
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc

    &:after
      border-color #ccc

  .border-bottom
    &:before
      border-color #ccc
  .list
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    /*background-color: red*/
    .signAlphabet
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

    /*.show-signAlphabet*/
      /*  display block*/
    .address
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


</style>
