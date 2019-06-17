<template>
  <div class="gallery" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(image,index) of this.imgs"
          :key="index"
        >
          <img :src="image" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGallery',
    props:{
      imgs: Array
    },
    data(){
      return{
        swiperOptions:{
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observer: true,
          observeParents: true,
      }
      }
    },
    methods:{
      handleGallaryClick(){
        // this.$router.push({path:'detail',query:{}})
        this.$emit('close')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .gallery
    z-index: 99
    display flex
    /*flex-wrap wrap*/
    /*align-items center*/
    /*align-content center*/
    /*flex-direction row*/
    flex-direction column
    justify-content center
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: #000

    .wrapper
      /*overflow: hidden*/
      height: 0
      /*width: 100%*/
      padding-bottom: 66.4%
      img
        width: 100%
      .swiper-pagination
        color: #fff
        font-size: .24rem
        position: fixed
        bottom .8rem
</style>
