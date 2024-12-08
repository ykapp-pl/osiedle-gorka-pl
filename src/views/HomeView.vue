<template>
  <div class="wrapper">
    <Claim />
    <Search />
  </div>
</template>

<script>
import axios from 'axios'
import debounce from 'lodash.debounce'
import Claim from '@/components/Claim.vue'
import Search from '@/components/Search.vue'

const API = 'https://images-api.nasa.gov/'

export default {
  name: 'HomeView',
  components: { Claim, Search },
  data () {
    return {
      searchValue: '',
      results: []
    }
  },
  methods: {
    handleInput: debounce(function () {
      axios.get(`${API}search?q=${this.searchValue}&media_type=image`)
        .then((response) => {
          this.results = response.data.collection.items
        }).catch((error) => {
          console.log(error)
        })
    }, 500)
  }
}
</script>

<style lang="scss" scoped >
.wrapper{
  margin: 0;
  width: 100%;
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../assets/osiedle-stok.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%, 80%;
}

</style>
