<template>
  <div class="weekend">
    <h3>周末去哪儿</h3>
    <ul>
      <li
        v-for="item of list"
        :key="item.id"
      >
        <img class="img" v-lazy="item.imgUrl" :alt="item.name">
        <p class="name">{{item.name}}</p>
        <div class="desc">{{item.desc}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="scss">
  .weekend{
    h3{
      padding:.9375rem .625rem;

    }
    .img{
      width: 100%;
    }
    li{
      background-color: #fff;
      margin-bottom: .625rem;
      padding-bottom: .3125rem;
    }
    .name,.desc{
      margin: .625rem;
    }
    .desc{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #999;
      font-size: .625rem;
    }
  }
</style>
