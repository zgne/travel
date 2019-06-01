<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.desc">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="item.title">
          </div>
          <div class="icon-title">{{item.desc}}</div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-scrollbar" slot="scollbar"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    props:{
      list: Array
    },
    data() {
      return {
        swiperOption:{
          pagination: '.swiper-pagination',
          autoplay: false
        },
      }
    },
    computed: {
      pages () {
        const pages = []
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if(!pages[page]){
            pages[page]=[]
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
   @import '~styles/varibles.styl'
   @import '~styles/mixins.styl'
  .icons >>> swiper
    height: 0
    padding-bottom: 50%
   .icons >>> .swiper-pagination-bullet-active
     background-color: rgba(0,175,190,.8)
  .icons
    overflow: hidden
    .icon
      position: relative
      float: left
      width: 25%
      height: 0
      overflow: hidden
      padding-bottom: 25%

      .icon-img
        position: absolute
        /*width: 100%*/
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        padding: .1rem
        box-sizing: border-box

        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%

      .icon-title
        position: absolute
        text-align: center
        bottom: 0
        left: 0
        right: 0
        color: $textColor
        height: .44rem
        line-height: .44rem
        ellipse()

</style>


