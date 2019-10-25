<template>
  <div class="recommend">
    <h3><span class="iconfont icon-recommend"></span>去哪儿推荐</h3>
    <ul class="recommend-list">
      <li class="recommend-item border-top"
          v-for="item of recommend"
          :key="item.id"
      >
        <div class="info">
          <p class="name">{{item.name}}</p>
          <p class="time">{{item.time}}</p>
          <div class="label">
            <span
              class="border"
              v-for="(list,index) of item.label"
              :key="index"
            ><img :src="list.img" alt="">{{list.name}}</span>
          </div>
        </div>
        <div class="operation">
          <p class="price">￥<span>{{item.price}}</span></p>
          <span class="btn">{{item.btn}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommend: Array
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/style/mixins";
  .recommend{
    background-color: #fff;
    margin-top: .625rem;
    padding: .625rem;
    h3{
      padding: .625rem 0;
      @include font-size(16px)
    }
  }
  .recommend-item{
    padding: .625rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .info{
      flex: 2;
      .name{
        @include font-size(15px);
        color: #666;
        line-height: 1.5;
      }
      .time{
        margin: .3125rem 0;
        @include font-size(12px);
        color: #999;
      }
      .label{
        @include font-size(10px);
        color: #00afc7;
        img{width: .625rem}
        .border{
          display: inline-block;margin-right: .3125rem;padding:.125rem .25rem;
        }
        .border::before{
          border-color: #a5e4ec;
        }
      }
    }
    .operation{
      text-align: center;
      .price{
        color: #ff8300;
        span{
          @include font-size(20px)
        }
      }
      .btn{
        padding: .5rem 1.5rem;
        display: block;
        @include bg-linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%);
        color: #fff;
        border-radius: .25rem;
        @include font-size(14px)
      }
    }
  }
</style>
