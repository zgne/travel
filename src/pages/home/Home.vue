<template>
  <div id="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-map></home-map>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icon'
  import HomeMap from './components/Map'
  import HomeRecommend from './components/Recommend'
  export default {
    name: 'Home',
    components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeMap,
      HomeRecommend
    }
  }
</script>

<style lang="stylus" scoped>
</style>
