<script>

import ClaimR from '@/components/Brite/ClaimR.vue'
import BgImage from '@/components/BgImage.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import LocalisationPage from '@/components/LocalisationPage.vue'
import HousesPage from '@/components/HousesPage.vue'
import ContactPage from '@/components/ContactPage.vue'
import InwestycjaPage from '@/components/Inwestycja.vue'
import DeveloperPage from '@/components/DeveloperPage.vue'

export default {
  name: 'HomeView',
  components: { DeveloperPage, InwestycjaPage, ContactPage, HousesPage, LocalisationPage, NavigationBar, BgImage, ClaimR },
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
<template>
    <div :class="[{flexStart: step===1}, 'wrapper']">
        <NavigationBar :onLogoClick="updateStep" :changeStep="updateStep"/>
        <BgImage />
      <div class="conntent-container">
        <!-- Warunkowe renderowanie innych komponentów -->
        <ClaimR v-if="step === 0" :changeStep="updateStep" />
        <LocalisationPage  v-model:step="step" v-if="step === 2" />
      </div>
      <HousesPage v-model:step="step" v-if="step === 3" />
      <ContactPage v-model:step="step" v-if="step === 4" />
      <InwestycjaPage v-model:step="step" v-if="step === 5" />
      <DeveloperPage v-model:step="step" v-if="step === 6" />
    </div>
    <router-view />
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
}
.conntent-container{
  width: 80%;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 100%;
  }
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
.reset-button {
  margin-top: 5px;
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.9);
  padding-left: 10px;
  padding-right: 10px;
  border: solid 2px rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  font-weight: 800;
  font-size: 25px;
  text-align: center;
  cursor: pointer;
  background: none;
  @media (max-width: 600px) {
    font-size: 15px;
    padding-left: 5px;
    padding-right: 5px;
  }
}
.exit-button-wrapper{
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
</style>
