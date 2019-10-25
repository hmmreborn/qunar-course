<template>
  <div class="list">
    <div class="item"
       v-for="(item, index) of ticket"
       :key="index"
    >
      <div class="item-title border-bottom">
        <span class="iconfont icon-ticket"></span>{{item.title}}
      </div>
      <div
        v-if="item.children"
        class="item-children"
      >
        <list :ticket="item.children"></list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    ticket: Array
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/style/mixins";
  .list{
    margin-top: .625rem;
    background-color: #fff;
    @include border-radius(4px)
  }
  .item-title{
    margin: 0 .625rem;
    line-height: 2.75rem;
    @include font-size(16px);
    .icon-ticket{
      padding: .1875rem;
      margin-right: .5rem;
      background-color: #00bcd4;
      color: #fff;
      border-radius: 50%;
      @include font-size(10px)
    }
  }
  .item-children{
    margin-left: .625rem;
  }
</style>
