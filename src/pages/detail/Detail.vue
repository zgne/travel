<template>
  <div class="detail">
    <detail-header :title="titleName"></detail-header>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :galleryImgs="galleryImgs"
    ></detail-banner>
    <list-header></list-header>
    <detail-list :list="categoryList"></detail-list>
    <div class="space"></div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'
  import ListHeader from './components/ListHeader'
  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    name: 'Detail',
    components: {
      DetailBanner,
      DetailHeader,
      DetailList,
      ListHeader
    },
    data(){
      return{
        titleName: "",
        sightName:"",
        bannerImg:"",
        galleryImgs:[],
        categoryList:[],
        lastId:'',
        // id: this.$route.params.id
      }
    },
    computed:{
      ...mapState(['id'])
    },
    methods:{
      getDetailInfo(){
        axios.get('/api/detail.json',{
          params:{
            id:this.id
          }
        })
          .then(this.getDetailInfoSucc)
      },
      getDetailInfoSucc(res){
        res = res.data
        // console.log(res);
        // console.log(res.ret);
        // console.log(res.data);
        if (res.ret && res.data) {
          const data = res.data
          // console.log(data);
          this.titleName = data.titleName
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.galleryImgs = data.galleryImgs
          this.categoryList = data.categoryList
        }
      }
    },
    mounted(){
      this.lastId = this.id
      this.getDetailInfo()
    },
    activated() {
      if(this.lastId !== this.id){
        this.getDetailInfo()
        this.lastId = this.id
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .detail
    background-color: #f5f5f5
    .space
      height: 20rem
</style>
