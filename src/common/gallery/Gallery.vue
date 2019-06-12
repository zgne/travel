<template>
  <div class="gallery" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(image,index) of this.images"
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
      images:{
        type: Array,
        default(){
          return ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg','http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg','http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_r_800x800_5f03ad73.jpg']
        }
      }
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
