<template>
  <div
    class="list-header border-bottom"
    :style="fixedTitle"
  >
    <div
      class="ticket-title"
    >
      <span @click="handleFirstClick">门票</span>
      <span @click="handleSecondClick">一日游</span>
    </div>
    <span
      class="mp-tab-slider"
      :style="handleClick"
    ></span>
  </div>
</template>

<script>
  export default {
    name: 'ListHeader',
    props:{
      list: Array
    },
    data(){
      return{
        fixedTitle:{
          position: 'relative',
          left: 0,
          right: 0,
        },
        lastSpots:'',
        handleClick:{}
      }
    },
    methods:{
      handleScroll(){
        const top = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
        // console.log(top);
        if(top>160){
          this.fixedTitle = {
            position: 'fixed',
            top: '.86rem',
            left: 0,
            right: 0,
          }
        }else{
          this.fixedTitle = {
            position: 'relative',
            left: 0,
            right: 0,
          }
        }
      },
      handleFirstClick(){
        this.handleClick = { left: '1.18rem' }
      },
      handleSecondClick(){
        this.handleClick = { left: '5rem' }
      }
      // handleTicketClick(event){
      //   // console.log(event);
      //   event = event.target
      /* console.log(event.innerHTML);
      const eventValue = event.innerHTML
      if(this.$refs[eventValue]){
        const elem = this.$refs[eventValue][0]
        elem.scrollIntoView()
      }else{
        this.$refs['日场'][0].scrollIntoView()
      }
       */
      // }
    },
    mounted(){
      //此处可以用vuex，每次换地点时，重新进行ajax请求：this.lastSpots = this.spot
      // this.lastSpots = 1
    },
    activated() {
      // console.log('activated');
      // if(this.lastSpots ！== this.spot)重新进行ajax请求
      window.addEventListener('scroll',this.handleScroll)
    },
    deactivated() {
      window.removeEventListener('scroll',this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
    .list-header
      z-index 1
      position: relative
      left: 0
      right: 0
      .ticket-title
        display flex
        color: #212121
        white-space: nowrap
        /*height: .96rem*/
        font-size .32rem
        line-height: .96rem
        background-color: #fff
        span
          flex: 1
          /*height: .92rem*/
          line-height: .92rem
          text-align: center
      .mp-tab-slider
        position: absolute
        display inline-block
        left: 1.18rem
        bottom: 0
        width: 1.4rem
        height: .03rem
        background-color: $bgColor
</style>
