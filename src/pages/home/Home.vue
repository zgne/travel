<template>
  <div id="home">
<!--    Vuex前-->
<!--    <home-header :city="city"></home-header>-->
    <!--    Vuex后-->
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-map></home-map>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
    <h1></h1>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icon'
  import HomeMap from './components/Map'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeMap,
      HomeRecommend,
      HomeWeekend
    },
    data() {
      return {
        // Vuex前
        // city: '',
        // Vuex后
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
        lastCity: ''
      }
    },
    computed:{
      ...mapState(['city'])
    },
    methods: {
      // getTest(){
      //   axios.get('/api/test')
      //     .then(res=>console.log(res.data))
      // },
      getHomeInfo() {
        axios.get('/api/index.json?city='+this.city)
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        res = res.data;
        // console.log(res);
        if (res.ret && res.data) {
          // Vuex前
          // this.city = data.city;
          // Vuex后
          const data = res.data;
          // console.log(data.swiperList);
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList
        }
      }
    },
    mounted() {
      this.lastCity = this.city
      this.getHomeInfo()
      // this.getTest()
    },
    activated() {
      if(this.lastCity !== this.city){
        this.getHomeInfo()
        this.lastCity = this.city
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
