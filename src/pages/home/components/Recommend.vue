<template>
  <div id="recommend">
    <div class="content">
      <div class="title">
        <span class="iconfont" style="color: red">&#xe7a9;</span>猜你喜欢
      </div>
      <ul>
          <router-link
            v-for="item in list"
            :key="item.id"
            :to="'/detail/'+item.id"
          >
            <li
              class="item border-bottom"
              @click="handleClickId(item.id)"
            >

              <img :src="item.imgUrl" :alt="item.title">
              <div class="recommend-content">
                <div class="recommend-content-title">{{item.title}}</div>
                <div class="stars iconfont">
                  <span style="color: #ffb436">&#xe870;&#xe870;&#xe870;&#xe870;&#xe870;</span>
                  <span class="comment">{{item.comments}}条评论</span>
                </div>
                <div class="like-price">
                  <button>查看详情</button>
                  <span>{{item.address}}</span>
                </div>
              </div>
            </li>
          </router-link>

      </ul>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'HomeRecommend',
    props:{
      list: Array
    },
    data() {
      return {}
    },
    methods:{
      handleClickId(id){
        // console.log(id);
        this.changeId(id)
      },
      ...mapMutations(['changeId']),
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  #recommend
    overflow: hidden
    background-color: #eee

    .content
      margin-top: .2rem
      background-color: #fff

      .title
        /*height: .94rem*/
        line-height: .94rem
        text-indent .2rem
        ellipse()

        span
          color: #FD4F47
          ellipse()
          margin-right: .05rem

      ul
        margin-left: .24rem
        a
          color: #000;
          .item
            display flex
            overflow hidden
            box-sizing: border-box
            padding: .2rem 0
            height: 2.4rem

            img
              width: 2rem
              margin-right: .2rem

            .recommend-content
              overflow: hidden
              width: 100%

              .recommend-content-title
                ellipse()
                height: .44rem
                line-height: .44rem
                font-size: .32rem

              .stars
                padding-top: .1rem
                font-size: .24rem

                .comment
                  ellipse()
                  padding-left: .2rem

              .like-price
                position: relative
                width: 100%
                display flex
                box-flex: 1
                font-size: .24rem
                margin-top: .44rem

                button
                  ellipse()
                  color: #ffffff
                  line-height: .44rem
                  padding: 0 .2rem
                  border-radius: .06rem
                  background-color: #ff8300
                  /*&:hover*/
                  /*  cursor: pointer*/

                span
                  position: absolute
                  right: .24rem
                  bottom: 0
</style>
