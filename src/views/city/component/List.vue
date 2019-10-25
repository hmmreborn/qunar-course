<template>
  <div class="city-wrapper" ref="wrapper">
    <div class="city-content">
      <div class="area">
        <div class="title">当前城市</div>
        <div class="positioning"><span class="iconfont icon-map-marker"></span>{{this.city}}</div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="grid-row border-left-right">
          <div class="grid-col"
               v-for="item of hotCities"
               :key="item.id"
               @click="handleCityName(item.name)"
          >{{item.name}}</div>
        </div>
      </div>
      <div class="area"
           v-for="(item, index) of cities"
           :key="index"
           :ref="index"
      >
        <div class="title">{{index}}</div>
        <div class="cell-group">
          <div class="cell border-bottom"
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handleCityName(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'List',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  methods: {
    handleCityName (city) {
      this.change_city(city)
      this.$router.push('/')
    },
    ...mapActions(['change_city'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/style/mixins";
  .city-wrapper{
    position: absolute;
    top: 5.125rem;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .title{
    padding: .75rem .9375rem;
    background-color: #f5f5f5;
    font-size: .75rem;
  }
  .positioning{
    padding:0 .75rem;
    height: 2.5rem;
    line-height: 2.5rem;
  }
  .grid-row{
    position: relative;
    overflow: hidden;
    z-index: 0;
    background-color: #fff;
    &.border-left-right:before{
      content: '';
      position: absolute;
      left: 16.665%;
      width: 66.66%;
      transform: scaleX(.5);
      height: 100%;
      border-left: .125rem solid #f5f5f5;
      border-right: .125rem solid #f5f5f5;
    }
    .grid-col{
      position: relative;
      float: left;
      width: 33.33%;
      height: 2.5rem;
      margin-bottom: -1px;
      line-height: 2.5rem;
      text-align: center;
      font-size: .875rem;
      z-index: 10;
      color: #212121;
      @include border-1px-bottom(#f5f5f5);
    }
  }
  @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx){
    .grid-row.border-left-right::before{
      left: 16.665%;
      width: 66.66%;
      transform: scaleX(.5);
    }
  }
  .cell-group{
    padding: 0 0rem 0 .75rem;
    .cell{
      height: 2.5rem;
      line-height: 2.5rem;
    }
  }
</style>
