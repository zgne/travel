<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      请输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader',
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles'
  .header
    color: #ffffff
    display: flex
    height: .86rem
    line-height: .86rem
    background: #00bcd4
    .header-left
      float: left
      width: .64rem
      text-align: center
      .back-icon
        font-size: .4rem
    .header-input
      flex-grow: 1
      color: #ccc
      height: .64rem
      line-height: .64rem
      margin-top: .11rem
      margin-left: .2rem
      padding-left: .2rem
      border-radius: .1rem
      background-color: #fff
    .header-right
      float: right
      width: 1.24rem
      text-align: center
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem

</style>
