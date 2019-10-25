<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleAlphabet"></city-alphabet>
  </div>
</template>

<script>
import cityHeader from './component/Header'
import citySearch from './component/Search'
import cityList from './component/List'
import cityAlphabet from './component/Alphabet'
import { city } from '../../api/api'
export default {
  name: 'City',
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCity () {
      city().then(res => {
        if (res.data.ret && res.data) {
          const data = res.data.data
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      }).catch(err => {
        console.log(err)
      })
    },
    handleAlphabet (letter) {
      // console.log(letter)
      this.letter = letter
    }
  },
  mounted () {
    this.getCity()
  }
}
</script>

<style scoped lang="scss">

</style>
