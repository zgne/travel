<template>
  <div>
    <div class="city-search">
      <input type="text" placeholder="请输入城市名或拼音" class="search-input" v-model="keyword">
    </div>
    <div
      class="search-list"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleClickCity(item.name)"
        >
          {{item.name}}
        </li>
        <li class="no-data border-bottom" v-show="!list.length">未找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import { mapMutations } from 'vuex'
  export default {
    name: 'CitySearch',
    props: {
      cities: Object
    },
    data() {
      return {
        keyword: '',
        list: [],
        timer: null
      }
    },
    methods:{
      handleClickCity(city){
        // this.$store.commit('changeCity',city)
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    },
    watch: {
      keyword() {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.list = [];
          return
        }
        this.timer = setTimeout(() => {
          const result = [];
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            });
            this.list = result
          }
        }, 100)
      }
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.search);
      // console.log(this.scroll);
    },
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

  .search-list
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background-color: #eee
    //background-color: rgba(256,256,256,.5)

    .search-item,.no-data
      color: #666
      padding-left: .2rem
      line-height: .62rem
      background-color: #fff
</style>
