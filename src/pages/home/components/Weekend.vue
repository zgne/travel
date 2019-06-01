<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <div class="week-content">
      <ul v-for="item of list">
        <li :key="item.id">
          <div class="weekend-img">
            <img :src="item.imgUrl" :alt="item.title">
          </div>
          <div class="product-info">
            <p class="content-title">{{item.title}}</p>
            <p class="content-desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    props:{
      list: Array
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    height: .8rem
    line-height: .8rem
    padding-left: .26rem
    background: #eee

  .weekend-img
    width: 100%
    height: 0
    padding-bottom: 37%

    img
      width: 100%

  .product-info
    padding: .14rem .2rem .2rem .2rem

    p
      padding-right: 1.4rem
      ellipse()

    .content-title
      height: .48rem
      line-height: .48rem
      font-size: .28rem

    .content-desc
      color: #616161
      height: .42rem
      line-height: .42rem
      font-size: .24rem
</style>
