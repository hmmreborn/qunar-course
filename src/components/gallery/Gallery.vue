<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide
          v-for="(img, index) of imgs"
          :key="index"
        ><img class="gallery-img" :src="img" alt=""></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Gallery',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    imgs: {
      type: Array,
      default () {
        return ['http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_r_800x800_d6a63068.jpg', 'http://img1.qunarzz.com/sight/p0/1811/d5/d5153b5e337c0644a3.water.jpg_r_800x800_5785f05e.jpg']
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">
  .container >>> .swiper-container{
    overflow: inherit;
  }
  .container{
    position: fixed;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    background-color: #000;
    .wrapper{
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      .gallery-img{
        width: 100%;
      }
      .swiper-pagination{
        color: #fff;
      }
    }
  }
</style>
