<template>
  <div class="index-swipe">
    <swiper class="swipe-wrap" :options="swiperOption" v-if="showSwipe">
      <swiper-slide class="swipe-item"
           v-for="item of list"
           :key="item.id"
      ><img :src="item.imgUrl" class="swipe-img"/></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swipe',
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
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    showSwipe () {
      return this.list.length
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/style/mixins";
  .swiper-pagination{
    bottom: .3125rem;
  }
  .index-swipe{
   /deep/ .swiper-pagination-bullet{
     background: #fff;
     width: .375rem;
     height: .375rem;
    }
  }
 .index-swipe{
   width: 100%;
   height: 0;
   padding-bottom: 26.6%;
   .swipe-wrap{
     position: relative;
     overflow: hidden;
     .swipe-img{
       width: 100%;
     }
   }
 }
</style>
