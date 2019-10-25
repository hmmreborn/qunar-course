<template>
  <div class="home">
    <index-header></index-header>
    <index-swipe :list="swipeList"></index-swipe>
    <index-icons :list="icons"></index-icons>
    <div class="map-marker border-top">
      <div><i class="iconfont icon-map-marker"></i>定位失败</div>
      <div class="border-left"><i class="iconfont icon-bangdan"></i>必游榜单</div>
    </div>
    <index-week :list="week"></index-week>
    <index-guess :list="guess"></index-guess>
    <index-weekend :list="weekend"></index-weekend>
  </div>
</template>

<script>
import { home } from '../../api/api'
import indexHeader from './component/Header'
import indexSwipe from './component/Swipe'
import indexIcons from './component/Icons'
import indexWeek from './component/Week'
import indexGuess from './component/Guess'
import indexWeekend from './component/Weekend'
export default {
  name: 'home',
  components: {
    indexHeader,
    indexSwipe,
    indexIcons,
    indexWeek,
    indexGuess,
    indexWeekend
  },
  data () {
    return {
      swipeList: [],
      icons: [],
      week: [],
      guess: [],
      weekend: []
    }
  },
  methods: {
    getHomeInfo () {
      home()
        .then(res => {
          if (res.data.code && res.data) {
            const data = res.data
            this.city = data.city
            this.swipeList = data.swipe
            this.icons = data.icons
            this.week = data.week
            this.guess = data.guess
            this.weekend = data.weekend
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
<style scoped lang="scss">
  @import "../../assets/style/index";
  .home{
    background-color: #f5f5f5;
    @include font-size(14px)
  }
  .map-marker{
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    >div{
      padding: 1rem;
      flex: 1;
      text-align: center;
      color: #666;
    }
  }
</style>
