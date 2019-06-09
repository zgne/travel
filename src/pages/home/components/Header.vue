<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      请输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <router-link to="/city">
        <span>
        {{this.city}}<i class="iconfont arrow-icon">&#xe64a;</i>
      </span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'HomeHeader',
    // Vuex前
    // props: {
    //   city: String
    // }
    // Vuex后
    computed:{
      ...mapState(['city'])
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles'
  .header
    color: #ffffff
    display: flex
    height: $bgHeight
    line-height: $bgHeight
    background: $bgColor

    .header-left
      float: left
      width: $backWidth
      text-align: center

      .back-icon
        font-size: .4rem

    .header-input
      flex: 1
      color: #ccc
      height: .64rem
      line-height: .64rem
      margin-top: .11rem
      margin-left: .2rem
      padding-left: .2rem
      border-radius: .1rem
      background-color: #fff

    .header-right
      float: right
      /*position: relative*/
      min-width: 1.04rem
      padding: 0 .1rem 0 .1rem
      height: $bgHeight
      text-align: center

      a
        color: #fff

        /*span*/
        /*  position: absolute*/
        /*  right: .2rem*/

        .arrow-icon
          margin-left: .04rem
          font-size: .24rem
</style>
