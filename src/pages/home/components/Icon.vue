<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.title">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="item.title">
          </div>
          <div class="icon-title">{{item.title}}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>

</template>

<script>
  export default {
    name: 'HomeIcons',
    data() {
      return {
        swiperOption:{
          loop: false
        },
        iconLists: [
          {
            id: '0001',
            imgUrl: '../../../../static/images/icon1.png',
            title: '景点门票'
          },
          {
            id: '0002',
            imgUrl: '../../../../static/images/icon2.png',
            title: '一日游'
          },
          {
            id: '0003',
            imgUrl: '../../../../static/images/icon3.png',
            title: '文化古迹'
          },
          {
            id: '0004',
            imgUrl: '../../../../static/images/icon4.png',
            title: '牛首山'
          },
          {
            id: '0005',
            imgUrl: '../../../../static/images/icon5.png',
            title: '红山森林公园红山森林公园红山森林公园'
          },
          {
            id: '0006',
            imgUrl: '../../../../static/images/icon6.png',
            title: '中山陵'
          },
          {
            id: '0007',
            imgUrl: '../../../../static/images/icon7.png',
            title: '总统府'
          },
          {
            id: '0008',
            imgUrl: '../../../../static/images/icon8.png',
            title: '银杏湖乐园'
          },
          {
            id: '0009',
            imgUrl: '../../../../static/images/icon9.png',
            title: '大报恩寺'
          },
          {
            id: '0010',
            imgUrl: '../../../../static/images/icon10.png',
            title: '南京海底世界'
          }
        ]
      }
    },
    computed: {
      pages () {
        const pages = []
        this.iconLists.forEach((item, index) => {
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


