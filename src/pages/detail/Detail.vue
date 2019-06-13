<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <div class="space"></div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'

  export default {
    name: 'detail',
    components: {
      DetailBanner,
      DetailHeader
    }
  }
</script>

<style lang="stylus" scoped>
  .space
    height: 20rem
</style>
