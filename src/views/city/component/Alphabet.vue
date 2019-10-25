<template>
  <div class="alphabet">
    <div class="alphabet-item"
         v-for="item of letters"
         :key="item"
         :ref="item"
         @click="handleAlphabet"
         @touchstart.prevent="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timmer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleAlphabet (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timmer) {
          clearTimeout(this.timmer)
        }
        this.timmer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 82
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style scoped lang="scss">
  .alphabet{
    position: absolute;
    top: 5.125rem;
    right: 0;
    bottom: 0;
    width: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    .alphabet-item{
      width: 100%;
      line-height: 1.25rem;
    }
  }
</style>
