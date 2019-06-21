<template>
  <div class="register">
    <div class="title">
      <router-link to="/">
        <span class="iconfont back-home">&#xe624;</span>
      </router-link>
      <ul @click="liActive($event)">
        <li class="active">境内</li>
        <li>境外·港澳台</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserRegister'
  }
</script>

<style lang="stylus" scoped>
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
</style>
