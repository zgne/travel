<template>
  <div id="recommend">
    <div class="content">
      <div class="title">
        <span class="iconfont" style="color: red">&#xe7a9;</span>猜你喜欢
      </div>
      <ul>
          <router-link
            tag="li"
            class="item border-bottom"
            v-for="item in list"
            :key="item.id"
            :to="'/detail/'+item.id"
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
          </router-link>

      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props:{
      list: Array
    },
    data() {
      return {
        // recommentList: [
        //   {
        //     id: '0001',
        //     imgUrl: '../../../../static/images/recommend-1.jpg',
        //     title: '溧水天生桥公园',
        //     comments: '100',
        //     address: '溧水县'
        //   }, {
        //     id: '0002',
        //     imgUrl: '../../../../static/images/recommend-2.jpg',
        //     title: '银杏湖乐园',
        //     comments: '100',
        //     address: '江宁区'
        //   }, {
        //     id: '0003',
        //     imgUrl: '../../../../static/images/recommend-3.jpg',
        //     title: '紫清湖生态温泉',
        //     comments: '100',
        //     address: '江宁区'
        //   }, {
        //     id: '0004',
        //     imgUrl: '../../../../static/images/recommend-4.jpg',
        //     title: '牛首山文化旅游区',
        //     comments: '100',
        //     address: '江宁区'
        //   }, {
        //     id: '0005',
        //     imgUrl: '../../../../static/images/recommend-5.jpg',
        //     title: '溧水天生桥公园',
        //     comments: '100',
        //     address: '溧水县'
        //   }, {
        //     id: '0006',
        //     imgUrl: '../../../../static/images/recommend-6.jpg',
        //     title: '溧水天生桥公园',
        //     comments: '100',
        //     address: '溧水县'
        //   }, {
        //     id: '0007',
        //     imgUrl: '../../../../static/images/recommend-7.jpg',
        //     title: '溧水天生桥公园',
        //     comments: '100',
        //     address: '溧水县'
        //   }, {
        //     id: '0008',
        //     imgUrl: '../../../../static/images/recommend-8.jpg',
        //     title: '溧水天生桥公园',
        //     comments: '100',
        //     address: '溧水县'
        //   },
        // ]
      }
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
