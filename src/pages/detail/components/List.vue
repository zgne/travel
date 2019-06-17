<template>
  <div class="detail-list">
    <div class="ticket">
      <div
        class="tickets"
        v-for="(item, index) of this.list"
        :key = "index"
        :ref="item.title"
      >
        <h3 class="border-bottom">
          <span class="iconfont">&#xe607;</span>
          {{item.title}}
        </h3>
        <div v-if="item.children" class="item-children">
          <detail-list :list="item.children"></detail-list>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailList',
    props:{
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .tickets
    font-size: .32rem
    /*margin-bottom: .2rem*/
    background-color: #fff
    .iconfont
      font-size: .4rem
      color: $bgColor
    h3
      padding: 0 .2rem
      /*height: .88rem*/
      line-height: .88rem
    .item-children
      padding: 0 .2rem

</style>
