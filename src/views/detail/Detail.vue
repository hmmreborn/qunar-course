<template>
  <div class="detail">
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :galleryImgs="galleryImgs"
      :info="info"
    ></detail-banner>
    <detail-header :sightName="sightName"></detail-header>
    <detail-recommend :recommend="recommend"></detail-recommend>
    <detail-list :ticket="ticket"></detail-list>
  </div>
</template>

<script>
import detailHeader from './components/Header'
import detailBanner from './components/Banner'
import detailRecommend from './components/Recommend'
import detailList from './components/List'
import { detail } from '../../api/api'
export default {
  name: 'Detail',
  components: {
    detailHeader,
    detailBanner,
    detailRecommend,
    detailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      info: {},
      recommend: [],
      ticket: []
    }
  },
  mounted () {
    this.getDetail()
  },
  methods: {
    getDetail () {
      detail().then(res => {
        if (res.data.ret && res.data) {
          const data = res.data.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.galleryImgs = data.galleryImgs
          this.info = data.info
          this.recommend = data.recommend
          this.ticket = data.ticket
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .detail{background-color: #f5f5f5}
</style>
