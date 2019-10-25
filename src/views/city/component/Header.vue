<template>
  <div class="header">
    <div class="nav-bar">
      <div class="left" @click="$router.push('/')"><span class="iconfont icon-back"></span></div>
      <div class="middle">城市选择</div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
  .header{
    width: 100%;
    height: 2.125rem;
    background-color: #00bcd4;
    position: sticky;
    top: 0;
    z-index: 2;
    overflow: hidden;
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
        align-self: center;
        text-align: center;
        color: #fff;
        font-weight: 500;
        font-size: 1rem;
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
