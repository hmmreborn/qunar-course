<template>
  <div class="week">
    <div class="title">
      <span><i class="iconfont icon-fire"></i>本周热门榜单</span>
      <a href="" class="link-all">全部榜单&gt;</a>
    </div>
    <ul class="week-list">
      <router-link tag="li" class="week-item"
          v-for="item of list"
          :key="item.id"
         :to="'/detail/' + item.id"
      >
        <div class="ranking"><img :src="item.type.ranking" alt=""></div>
        <div class="img"><img :src="item.imgUrl" alt=""></div>
        <p class="text">{{item.text}}</p>
        <p class="price"><i>￥</i><span>{{item.price}}</span>起</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Week',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/style/index";
  .week{
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
      .link-all{
        @include font-size(10px);
        color: #666;
      }
    }
  }
  .week-list{
    padding: 0 .75rem;
    overflow-x: scroll;
    white-space: nowrap;
  }
  .week-item{
    position: relative;
    display: inline-block;
    padding: .1875rem 0 .625rem;
    width: 6.25rem;
    text-align: center;
    &:not(:first-child){
      margin-left: .375rem;
    }
    .img{
      width: 100%;
      >img{width: 100%}
    }
    .ranking{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      overflow: hidden;
      width: 2.62rem;
      height: 1.25rem;
      >img{width: 100%}
    }
    .text{
      padding: .5rem 0;
      @include text-ellipsis;
      @include font-size(12px);
    }
    .price{
      i{@include font-size(10px)}
      i,span{
        color: #ff8300;}
    }
  }
</style>
