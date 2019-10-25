<template>
  <div>
    <router-link
      tag="div"
      to="/"
      v-show="showAbs"
      class="header-abs"
    ><span class="iconfont icon-back header-abs-back"></span></router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      {{this.sightName}}
      <router-link to="/"><div class="header-fixed-back"><span  class="iconfont icon-back"></span></div></router-link></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    sightName: String
  },
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.scrollingElement.scrollTop
      if (top > 10) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="scss">
  .header-abs{
    position: absolute;
    left:.625rem;
    top:.625rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    text-align: center;
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-fixed{
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2.875rem;
    line-height: 2.75rem;
    text-align: center;
    background-color: #00bcd4;
    color: #fff;
    font-size: .9375rem;
    .header-fixed-back{
      position: absolute;
      top: 0;
      left: 0;
      width: 2.5rem;
      color: #fff;
    }
  }
</style>
