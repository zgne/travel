<template>
  <div class="city-header">
    <div class="title">
      <router-link to="/">
        <span class="iconfont back-home">&#xe624;</span>
      </router-link>
      <h1>城市选择</h1>
    </div>
    <div class="region-tab">
      <ul @click="liActive($event)">
        <li class="active">境内</li>
        <li>境外·港澳台</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CityHeader',
    methods: {
      liActive(e) {
        // console.log(e);
        e.target.className = "active";
        if (e.target.previousElementSibling) {
          e.target.previousElementSibling.className = ""
        } else {
          e.target.nextElementSibling.className = ""
        }
        // e.target.siblings('p');
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .city-header
    color: #ffffff

    .title
      display flex
      height: $bgHeight
      line-height: $bgHeight
      background-color: $bgColor
      ellipse()

      a
        color: #ffffff
        /*display block*/
        width: $backWidth
        text-align: center

        .back-home
          font-size: .4rem

      h1
        flex: 1
        font-size: .32rem
        text-align: center
        margin-right: $backWidth

    .region-tab
      height: .6rem
      line-height: .6rem
      background-color: $bgColor

      ul
        margin: 0 1rem
        border: 1px solid #fff
        border-radius .03rem
        height: .4rem

      li
        width: 50%
        float: left
        font-size: .28rem
        text-align: center
        line-height: .4rem
        ellipse()

      .active
        color: $bgColor
        height .38rem
        background-color: #fff


</style>
