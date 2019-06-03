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
          <div class="city">
            <div class="city-btn">北京</div>
          </div>
          <div class="city">
            <div class="city-btn">北京</div>
          </div>
          <div class="city">
            <div class="city-btn">北京</div>
          </div>
          <div class="city">
            <div class="city-btn">北京</div>
          </div>
        </div>
      </div>
      <div class="address">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    name: 'CityList',
    mounted(){
      this.scroll = new Bscroll(this.$refs.wrapper)
    }
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
</style>
