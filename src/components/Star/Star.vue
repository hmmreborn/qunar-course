<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item on"
          v-for="(sc, index) in starClasses"
          :key="index"
          :class="sc"
    ></span>
  </div>
</template>

<script>
const CLASS_ON = 'on'
const CLASS_HALE = 'half'
const CLASS_OFF = 'off'
export default {
  name: 'Star',
  props: {
    size: Number,
    score: Number
  },
  computed: {
    starClasses () {
      const { score } = this
      const scs = []
      const scoreInteger = Math.floor(score)
      for (let i = 0; i < scoreInteger; i++) {
        scs.push(CLASS_ON)
      }
      if (score * 10 - scoreInteger * 10 >= 5) {
        scs.push(CLASS_HALE)
      }
      while (scs.length < 5) {
        scs.push(CLASS_OFF)
      }
      return scs
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/style/mixins";
  .star{
    float: left;
    font-size: 0;
    .star-item{
      display: inline-block;
      background-repeat: no-repeat;
    }
    &.star-48{
      .star-item{
        width: 20px;
        height: 20px;
        margin-right: 22px;
        background-size: 20px 20px;
        &:last-child{
          margin-right: 0
        }
        &.on{
          @include bg-image('./img/stars/star48_on')
        }
        &.half{
          @include bg-image('./img/stars/star48_half')
        }
        &.off{
          @include bg-image('./img/stars/star48_off')
        }
      }
    }
    &.star-36{
      .star-item{
        width: 15px;
        height: 15px;
        margin-right: 6px;
        background-size: 15px 15px;
        &:last-child{
          margin-right: 0;
        }
        &.on{
          @include bg-image('./img/stars/star36_on')
        }
        &.half{
          @include bg-image('./img/stars/star36_half')
        }
        &.off{
          @include bg-image('./img/stars/star36_off')
        }
      }
    }
    &.star-24{
      .star-item{
        width: 10px;
        height: 10px;
        margin-right: 3px;
        background-size: 10px 10px;
        &:last-child{
          margin-right: 0;
        }
        &.on{
          @include bg-image('./img/stars/star24_on')
        }
        &.half{
          @include bg-image('./img/stars/star24_half')
        }
        &.off{
          @include bg-image('./img/stars/star24_off')
        }
      }
    }
  }
</style>
