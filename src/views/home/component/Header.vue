<template>
  <div class="header">
      <div class="nav-bar">
      <div class="left"><span class="iconfont icon-back"></span></div>
      <div class="middle"><a href="" class="search"><i class="iconfont icon-search"></i>输入城市/景点/游玩主题</a></div>
      <div class="right"><router-link to="/city" class="text">{{this.city}}<i class="iconfont icon-sort-down icon"></i></router-link></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style scoped lang="scss">
  .header{
    width: 100%;
    height: 2.875rem;
    background-color: #00bcd4;
    position: sticky;
    top: 0;
    z-index: 2;
    .nav-bar{
      position: relative;
      height: 2.875rem;
      line-height: 2.875rem;
      display: flex;
      width: 100%;
      user-select: none;
      .text{
        display: inline-block;
        color: #fff;
        vertical-align: middle;
        font-size: .875rem;
      }
      .middle{
        flex: 1;
        margin: 0 auto;
        padding: .5rem 0;
        color: #323233;
        font-weight: 500;
        font-size: 1rem;
        .search{
          height: 1.875rem;
          line-height: 1.875rem;
          padding: 0 .625rem;
          background-color: #fff;
          display: block;
          color: #999;
          font-size: .875rem;
          border-radius: .125rem;
        }
      }
      .left,.right{
        display: inline-block;
        padding: 0 .625rem;
      }
      .left{
        span{
          display: block;
          color: #fff;
        }
      }
      .right{
        text-align: right;
        .icon{
          font-size: .625rem;
        }
      }
    }
  }
</style>
