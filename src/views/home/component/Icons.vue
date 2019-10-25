<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide
          v-for="item of list"
          :key="item.id"
        >
          <img :src="item.imgUrl" alt="">
          <p>{{item.text}}</p>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Icons',
  props: {
    list: Array
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        slidesPerView: 4, // 一行显示4个
        slidesPerColumn: 2 // 显示2行
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .swiper-pagination{
    bottom: .3125rem;
  }
  .icons{
    width: 100%;
    text-align: center;
    background-color: #fff;
    img{
      width: 3.5rem;
      height: 3.5rem;
      margin-top: .3125rem;
    }
    p{margin-top: .3125rem;}
    .swiper-container{
      padding-top: .3125rem;
      padding-bottom: 1.5rem;
    }
    /deep/.swiper-pagination-bullet{
      width: 6px;
      height: 6px;
    }
    /deep/.swiper-pagination-bullet-active{
      background: #00bcd4;
    }
  }
</style>
