<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-scrollbar" slot="scollbar"></div>
    </swiper>
  </div>

</template>

<script>
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          // loop: true,
          autoplay: false
        },
        swiperList: [
          {
            id: '0001',
            imgUrl: '../../../../static/images/header-swiper0.jpg'
          },
          {
            id:'0002',
            imgUrl:'../../../../static/images/header-swiper1.jpg'
          },
          {
            id:'0003',
            imgUrl:'../../../../static/images/header-swiper2.jpg'
          },
          {
            id:'0004',
            imgUrl:'../../../../static/images/header-swiper3.jpg'
          }
        ],
        list:['a','b','c']
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.67%
    background-color: #eeeeee

    .swiper-img
      width: 100%
</style>


