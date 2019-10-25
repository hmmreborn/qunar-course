<template>
  <div class="guess">
    <div class="title">
      <span><i class="iconfont icon-heart"></i>猜您喜欢</span>
    </div>
    <ul class="guess-list">
      <router-link
        tag="li"
        class="guess-item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <div class="tag" :style="{ backgroundImage: `url(${item.type.bgImg})`}">{{item.type.text}}</div>
        <div class="img"><img :src="item.imgUrl" alt=""></div>
        <div class="info">
          <p class="title">{{item.title}}</p>
          <div class="comment">
            <div class="star-level"><Star :score="item.score" :size="24"></Star></div>
            <div class="comment-num">{{item.comment}}条评论</div>
          </div>
          <div class="price">
            <em class="price_num"><span><i>￥</i>{{item.price}}</span>起</em>
            <p>{{item.address}}</p>
          </div>
          <span class="ellipsis">{{item.ellipse}}</span>
        </div>
      </router-link>
      <li class="guess-item border-bottom text-center">
        <a href="">查看所有产品</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Star from '../../../components/Star/Star'
export default {
  name: 'Guess',
  props: {
    list: Array
  },
  components: {
    Star
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/style/index";
  .guess{
    margin-top: .875rem;
    background-color: #fff;
    .title{
      padding: .625rem .625rem .9375rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include font-size(16px);
      .iconfont{
        color: red;
        padding-right: .25rem;
      }
    }
  }
  .guess-item{
    position: relative;
    padding:.625rem .625rem .625rem 0;
    margin-left: .625rem;
    overflow: hidden;
    display: flex;
    &.text-center{
      text-align: center;
      justify-content: center;
    }
    .tag{
      position: absolute;
      top: .625rem;
      left: 0;
      width: 3.1875rem;
      height: 1.1875rem;
      background-size: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      @include font-size(10px);
      color: #fff;
      text-align: center;
    }
    .img{
      width: 6.25rem;
      >img{width: 100%}
    }
    .info{
      padding-left:.625rem ;
      flex: 1;
      .title{
        padding: .625rem 0;
        @include font-size(16px)
      }
      .comment,.price{
        display: flex;
        @include font-size(12px);
        color: #666;
        .comment-num{margin-left: .625rem}
      }
      .price{
        margin: .625rem 0;
        justify-content: space-between;
      }
      .price_num{
        span{
          @include font-size(18px);color: #ff8300;
          i{
            @include font-size(10px)
          }
        }
      }
      .ellipsis{
        padding: .125rem .3125rem;
        background-color: #fff9f9;
        color: #f55;
        @include font-size(10px)
      }
    }
  }
</style>
