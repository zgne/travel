<template>
  <div
    class="footer-tab border-top"
    @click="handleClickTab($event)"
  >
    <router-link
      tag="div"
      to="/"
      class="tab tickets"
    >
      <span class="iconfont"><span>&#xe60d;</span></span>
      <div class="tab-name">门票</div>
    </router-link>
    <router-link
      tag="div"
      to="/order"
      class="tab order-form"
    >
      <span class="iconfont"><span>&#xe654;</span></span>
      <div class="tab-name">订单</div>
    </router-link>
    <router-link
      tag="div"
      to="/user"
      class="tab user"
    >
      <span class="iconfont"><span>&#xe62c;</span></span>
      <div class="tab-name">用户</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'FooterTab',
    methods: {
      handleClickTab(event){
        // console.log(event);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .footer-tab
    position: fixed
    right: 0
    left: 0
    bottom: 0
    display: flex
    height: 1rem
    background-color: #fff
    .router-link-exact-active
      color: $bgColor
    .tab
      flex: 1
      /*line-height: 1rem*/
      font-size: .32rem
      display: flex
      align-content center
      flex-wrap: wrap
      text-align: center
      .iconfont,.tab-name
        width: 100%
      .tab-name
        /*text-align: center*/
        margin-top: .06rem
        font-size: .24rem
</style>
