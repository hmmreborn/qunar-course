<template>
  <div>
    <div class="banner" @click="handleBannerClick">
     <img :src="bannerImg" :alt="sightName" class="banner-img">
     <div class="banner-info">
       <div class="banner-title">{{this.sightName}}</div>
       <div class="banner-num"><span class="iconfont icon-img"></span>{{this.galleryImgs.length}}</div>
     </div>
    </div>
    <div class="baseinfo">
      <div class="info border-bottom">
        <div class="score-comment">
          <p class="score"><strong>{{this.info.score}}</strong>分&emsp;{{this.info.desc}}</p>
          <p class="comment"><span>{{this.info.comment}}条评论</span>&emsp;<span>{{this.info.strategy}}条攻略</span></p>
          <i class="iconfont icon-next"></i>
        </div>
        <div class="desc border-left">
          <p>景点简介</p>
          开放时间、贴士
          <i class="iconfont icon-next"></i>
        </div>
      </div>
      <div class="map-address"><span class="iconfont icon-map-o"></span> {{this.info.address}}<i class="iconfont icon-next"></i></div>
    </div>
    <div class="notice" @click="show = !show"><span class="iconfont icon-news-tips"></span>{{this.info.notice}}<i class="iconfont icon-next"></i></div>
    <common-fade>
      <common-gallery
        :imgs="galleryImgs"
        v-show="showGallery"
        @close="handleGalleryClose"
      ></common-gallery>
    </common-fade>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div v-if="show" class="notice-popup">
        <h3><span class="iconfont icon-news-tips"></span>景区公告</h3>
        <p class="animated bounceIn">{{this.info.notice}}</p>
        <span class="iconfont icon-close" @click="show = !show"></span>
      </div>
    </transition>
  </div>
</template>

<script>
import CommonFade from '../../../components/fade/Fade'
import CommonGallery from '../../../components/gallery/Gallery'
import 'animate.css'
export default {
  name: 'Banner',
  props: {
    sightName: String,
    bannerImg: String,
    galleryImgs: Array,
    info: Object
  },
  components: {
    CommonFade,
    CommonGallery
  },
  data () {
    return {
      showGallery: false,
      show: false
    }
  },
  methods: {
    handleBannerClick: function () {
      this.showGallery = true
    },
    handleGalleryClose: function () {
      this.showGallery = false
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/style/mixins";
  .box{width:100px;height:80px;background: blue;margin:5px;}
 .banner{
   overflow: hidden;
   position: relative;
   height: 0;
   padding-bottom: 55%;
   .banner-img{
     width: 100%;
   }
   .banner-info{
     display: flex;
     position: absolute;
     left: 0;
     right: 0;
     bottom: .625rem;
     line-height: 1.25rem;
     color: #fff;
     background: linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.08) 100%);
     .banner-title{
       flex: 1;
       font-size: 1rem;
       padding: .625rem;
     }
     .banner-num{
       margin-top: .5rem;
       padding:.125rem .75rem;
       line-height: 1.125rem;
       height: 1.125rem;
       border-radius: .625rem;
       background: rgba(0,0,0,.5);
       font-size: .75rem;
       .icon-img{
         font-size: .625rem;
       }
     }
   }
 }
 .icon-next{
   position: absolute;
   right: -.625rem;
   top: 50%;
   margin-top: -.375rem;
   color: #999;
   font-size: .75rem;
 }
 .baseinfo{
   position: relative;
   top: -.625rem;
   padding:.625rem;
   background-color: #fff;
   border-radius: .3125rem .3125rem  0px 0px;
   .info{
     display: flex;
     align-items: center;
     padding-bottom: .625rem;
     .score-comment,.desc{
       flex: 1;
       position: relative;
       margin: 0 .5rem;
       .score{
         color: #ff8300;
         margin-bottom: .3125rem;
         strong{
           font-size: 1.375rem;
         }
       }
       .comment{
         color: #999;
       }
     }
     .desc{
       font-size: .75rem;
       color: #999;
       padding-left: .9375rem;
       p{font-size: .875rem;color: #333;margin-bottom: .3125rem;}
     }
   }
   .map-address{
     position: relative;
     padding: .625rem 0;
     font-size: .875rem;
    @include text-ellipsis;
     .icon-next{
       right: 0;
       margin-top: -.3125rem;
     }
     .icon-map-o{
       color: #999;
     }
   }
 }
 .notice{
   position: relative;
   padding: .625rem 2.5rem .625rem .625rem;
   background-color: #fff5e5;
   color: #ff8300;
   @include text-ellipsis;
   font-size: .875rem;
   .icon-next{
     right: .75rem;
   }
 }
  .notice-popup{
    background: rgba(255,255,255,.9);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    h3{
      color: #f67353;
      font-size: 1.25rem;
    }
    p{
      text-align: left;
      padding:2rem 1rem;
      font-size: .875rem;
      line-height: 2;
    }
  }
</style>
