<template>
  <div class="city-search">
    <input type="text" placeholder="请输入城市名或拼音" class="search-input">
  </div>
</template>

<script>
  export default {
    name: 'CitySearch',
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .city-search
    height: .72rem
    padding: 0 .1rem
    background-color: $bgColor

    .search-input
      box-sizing border-box
      padding: 0 .1rem
      color: #666
      width: 100%
      font-family: Microsoft Yahei
      height .62rem
      font-size: .26rem
      line-height: .62rem
      border-radius .06rem
      text-align: center


</style>
