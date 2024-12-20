<template>
  <div :class="[{flexStart: step===1}, 'wrapper']">
    <transition name="slide">
      <NavigationBar :onLogoClick = "updateStep" v-if="step!==0"/>
    </transition>
    <transition name="fade">
      <BgImage />
    </transition>
    <ClaimR v-if="step===0" :changeStep="updateStep" />
    <LocalisationPage v-if="step===2" />
    <div class="results">
      <div v-if="step === 1" class="results">
        <div v-for="resultItem in results" :key="resultItem.data[0].nasa_id">
          <Item :item="resultItem" :key="resultItem.data[0].nasa_id" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
  box-sizing: border-box;
  webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: margin-top 0.3s ease;
  }

  .slide-enter-from,
  .slide-leave-to {
    margin-top: 50px;
  }

  .wrapper{
    margin: auto;
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    &.flexStart{
      justify-content: flex-start;
    }
  }
  .logo{
    position: absolute;
    top: 40px;
  }
  .results{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  @media (max-width: 600px) {
    .wrapper{
      padding: 1px;
    }
  }
}
</style>

<script>

import ClaimR from '@/components/Brite/ClaimR.vue'
import BgImage from '@/components/BgImage.vue'
import Item from '@/components/Item.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import LocalisationPage from '@/components/LocalisationPage.vue'

export default {
  name: 'HomeView',
  components: { LocalisationPage, NavigationBar, BgImage, Item, ClaimR },
  data () {
    return {
      loading: false,
      step: 0,
      searchValue: '',
      results: []
    }
  },
  methods: {
    updateStep (newStep) {
      this.step = newStep // Aktualizacja wartości step
    }
  }
}

</script>
