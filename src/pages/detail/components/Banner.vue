<template>
  <div>
    <router-link to="/" class="back"><span class="iconfont">&#xe624;</span></router-link>
    <div class="banner" @click="handleBannerClick">
      <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
      <div class="mp-headfeagure-info">
        <div class="mp-imgswipeicon">
          <span class="iconfont">&#xe610;</span>
          <em>8</em>
        </div>
        <div class="mp-headfeagure-title">故宫(AAAAA景区)</div>
      </div>
      <div class="bgc"></div>
    </div>
    <detail-gallery
      v-show="showGallary"
      @close="handleGalleryClose"
    ></detail-gallery>
  </div>
</template>

<script>
  import DetailGallery from 'common/gallery/Gallery'
  export default {
    name: 'DetailBanner',
    components:{
      DetailGallery
    },
    data(){
      return{
        showGallary: false
      }
    },
    methods:{
      handleBannerClick(){
        this.showGallary = true
      },
      handleGalleryClose(){
        this.showGallary = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .mp-imgswipeicon >>> .iconfont
    font-size .24rem
  .back
    z-index: 1
    position: absolute
    top: .1rem
    left: .1rem
    color: #fff
    width: .72rem
    height: .72rem
    line-height: .72rem
    text-align: center
    font-size: .36rem
    font-weight bold
    border-radius: 50%
    background-color: rgba(0,0,0,0.5)
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%

    img
      width: 100%
    .mp-headfeagure-info
      position: absolute
      /*margin: auto*/
      /*top: 0*/
      left: .2rem
      right: .2rem
      bottom: 0.36rem
      color: #fff
      .mp-imgswipeicon
        box-sizing: border-box
        width: 1.2rem
        height: .4rem
        font-size: .24rem
        text-align: center
        line-height: .4rem
        margin: 0 .2rem .14rem 0
        border-radius: .2rem
        background-color: rgba(0,0,0,0.5)
        .iconfont
          position: relative
          top: -.04rem
      .mp-headfeagure-title
        font-size: .36rem
        text-shadow: 0 .02rem .04rem rgba(0,0,0,0.7)
    .bgc
      position: absolute
      /*top: 0*/
      bottom: 0
      left: 0
      right: 0
      /*width: 100%*/
      height: .48rem
      background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      /*background-color: red*/
</style>
