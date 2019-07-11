<template>
  <div class="log-in">
    <div class="header">
      <router-link
        to="/user"
        class="iconfont back-home"
      >
        &#xe624;
      </router-link>
      <h1 class="title">登录</h1>
      <router-link
        to="/register"
        class="register"
      >注册</router-link>
    </div>
    <div class="header-sub">
      <div class="tab">
        <div class="email-login"></div>
        <div class="username-login"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LogIn'
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display flex
    color: #fff
    font-size: .36rem
    height: $bgHeight
    line-height: $bgHeight
    background-color: $bgColor

    .iconfont
      float: left
      color: #75ffff
      font-weight: bold
      font-size: .36rem
      padding-left: .2rem
      text-align: center
    .title
      flex: 1
      text-align: center
    .register
      float: right
      color: #75ffff
      font-size: .32rem
      padding-right: .2rem
</style>
