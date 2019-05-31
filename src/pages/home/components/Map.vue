<template>
  <ul class="home-map border-top">
    <li>
      <span class="iconfont">&#xe614;</span>定位失败
    </li>
    <li>
      <span class="iconfont">&#xe609;</span>必游榜单
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'HomeMap'
  }
</script>

<style lang="stylus" scoped>
  ul
    display: flex
    /*overflow hidden*/
    margin-top: .2rem
    li
      flex: 1
      height: .98rem
      line-height: .98rem
      text-align: center
      .iconfont
        color: #616161
        margin-right: .05rem
</style>
