<template>
  <div
    class="detail-header"
    v-show="showHeader"
    :style="opacityStyle"
  >
    <router-link to="/" class="iconfont">&#xe624;</router-link>
    <h1>故宫</h1>
  </div>
</template>

<script>
  export default {
    name: 'DetailHeader',
    data(){
      return{
        showHeader: false,
        opacityStyle:{
          opacity: 0
        }
      }
    },
    methods:{
      handleScroll(){
        const top = document.documentElement.scrollTop
        // console.log(top);
        if(top>60){
          let headerOpacity = top/140
          headerOpacity = headerOpacity > 1 ? 1 : headerOpacity
          this.opacityStyle = {opacity:headerOpacity}
          this.showHeader = true
        }else{
          this.showHeader = false
        }
      }
    },
    activated(){
      window.addEventListener('scroll',this.handleScroll)
    },
    deactivated() {
      window.removeEventListener("scroll",this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .detail-header
    position: fixed
    top: 0
    left: 0
    right: 0
    z-index 2
    color: #fff
    font-size: .36rem
    height: $bgHeight
    line-height: $bgHeight
    background-color: $bgColor
    .iconfont
      position: absolute
      width: .8rem
      color: #fff
      font-weight bold
      text-align: center
    h1
      /*flex: 1*/
      margin: 0 1rem
      text-align: center

</style>
