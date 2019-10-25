<template>
  <div>
    <div class="search">
      <input type="text" placeholder="输入城市" class="search-input" v-model="keyword">
    </div>
    <div class="result-list" ref="wrapper"
         v-show="keyword"
    >
      <ul>
        <li class="result-item border-bottom"
            v-for="item of list"
            :key="item.id"
            @click="handleCityName(item.name)"
        >{{item.name}}</li>
        <li class="not-find"
            v-show="hasNoData"
        >
          <img src="../../../assets/img/loading_error.png" alt="">
          <h3>没有搜索结果</h3>
          <p>换个关键字试试</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapActions } from 'vuex'
export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timmer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timmer) {
        clearTimeout(this.timmer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timmer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((val) => {
            if (val.spell.indexOf(this.keyword) > -1 || val.name.indexOf(this.keyword) > -1) {
              result.push(val)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityName (city) {
      this.change_city(city)
      this.$router.push('/')
    },
    ...mapActions(['change_city'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style scoped lang="scss">
  .search{
    position: relative;
    background-color: #00bcd4;
    padding:.625rem;
    z-index: 2;
  }
  .search-input{
    width: 100%;
    height: 1.75rem;
    line-height: 1.75rem;
    padding: 0 .625rem;
    box-sizing: border-box;
    border-radius: .125rem;
  }
  .result-list{
    position: absolute;
    top: 5.125rem;
    left: 0;
    right: 0;
    bottom: 0;
    padding-left: .75rem;
    overflow: hidden;
    z-index: 3;
    background-color: #fff;
    .not-find{
      img{
        display: block;
        margin: auto;
      }
      h3,p{
        color: #999;
        text-align: center;
        margin:.75rem;
      }
    }
  }
  .result-item{
    height: 2.5rem;
    line-height: 2.5rem;
  }
</style>
