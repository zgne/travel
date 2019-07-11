<template>
  <div class="user">
    <h1 class="user-header">用户中心</h1>
    <ul>
      <router-link
        tag="li"
        to="/"
        v-for="(item,index) of this.lists"
        :key="index"
        class="user-content"
      >
        <span
          class="iconfont icon"
          :style="{backgroundColor: item.bgcolor}"
        >{{item.icon}}</span>
        <div class="border-top">
          <span class="user-content-word">{{item.listcon}}</span>
          <span class="iconfont more-info">{{item.moreInfo}}</span>
        </div>
      </router-link>
    </ul>
    <button @click="userRegister">登录</button>
    <footer-tab></footer-tab>
  </div>
</template>

<script>
  import FooterTab from '../../common/footertab/FooterTab'

  export default {
    name: 'User',
    components: {
      FooterTab
    },
    data() {
      return {
        lists: [
          {
            icon: '\ue635',
            listcon: '我的心愿单',
            moreInfo: '\ue611',
            bgcolor: 'orange'
          }, {
            icon: '\ue64d',
            listcon: '我的足迹',
            moreInfo: '\ue611',
            bgcolor: '#1e9eff'
          }, {
            icon: '\ue601',
            listcon: '关于我们',
            moreInfo: '\ue611',
            bgcolor: '#8ac007'
          }, {
            icon: '\ue62d',
            listcon: '给个好评',
            moreInfo: '\ue611',
            bgcolor: '#43b5ff'
          }, {
            icon: '\ue643',
            listcon: '客服电话',
            moreInfo: '\ue611',
            bgcolor: 'hotpink'
          }, {
            icon: '\ue619',
            listcon: '关于去哪儿门票',
            moreInfo: '\ue611',
            bgcolor: '#43b5ff'
          },
        ]
      }
    },
    methods: {
      userRegister(){
        this.$router.push('/login')
      }
    }
    /*
    data(){
      return {
        screenHeight: document.body.clientHeight || document.documentElement.clientHeight,
      }
    },
    methods:{
      changeHeight(){

      }
    },
    watch:{
      screenHeight(val){
        console.log(val);
        this.changeHeight(this.screenHeight)
      }
    },
    mounted() {
      var _this = this
      window.onresize = ()=>{
        _this.screenHeight = document.body.clientHeight || document.documentElement.clientHeight
      }
    }
     */
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .user
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    /*height: 100%*/
    background-color: #eee

    .user-header
      color: #fff;
      height: $bgHeight
      line-height: $bgHeight
      text-align: center
      font-size .32rem
      background-color $bgColor

    ul
      background-color: #fff
      margin-top: .2rem

      .user-content
        color: #616161
        display flex
        height: .8rem
        line-height: .8rem

        .icon
          box-sizing border-box
          float: left
          color: #fff
          width: .6rem
          height: .6rem
          line-height: .6rem
          text-align: center
          font-size: .36rem
          margin: .1rem .2rem
          border-radius: .2rem
          /*background-color: hotpink*/

        .border-top
          flex: 1
          padding-right: .2rem

        .more-info
          float: right
          font-size: .28rem
          color: #cacaca
    button
      display block
      color: #fff
      margin: .7rem auto
      width: 95%
      height: .7 rem
      line-height: .7rem
      font-size: .32rem
      border-radius: .06rem
      background-color: $bgColor
      font-family Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif


</style>
