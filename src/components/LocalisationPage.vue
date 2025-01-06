<script>
import InteractiveMap from '@/components/InteractiveMap.vue'

export default {
  name: 'LocalisationPage',
  components: { InteractiveMap },
  methods: {
    resetStep () {
      this.$emit('update:step', 0)
    }
  },
  props: {
    step: {
      type: Number,
      required: true // Teraz wymagane
    }
  }
}

</script>

<template>
  <div class="localisation-page-wrapper">
    <div class="exit-button-wrapper">
      <button class="reset-button" @click="resetStep">&#10005;</button>
    </div>
    <div class="localisation-page-grid">
      <div class="localisation-tile map-tile">
        <InteractiveMap :location="{ lat: 50.0614, lng: 19.9366 }" :zoom="12" class="map" />
        <p>Dane kartograficzne: <a href="OpenStreetMap.org">OpenStreetMap.org</a></p>
      </div>
      <div class="localisation-tile">
        <p><b>Osiedle Górka Pabianicka</b> to doskonałe miejsce dla osób szukających spokoju i komfortu, jednocześnie z łatwym dostępem do miasta. Położone na peryferiach Łodzi, zapewnia bliskość do ważnych punktów, zachowując ciszę i przestronność.</p>
        <ul>
          <li>Szkoła – tylko 4 km (6 minut), idealna odległość dla rodzin z dziećmi.</li>
          <li>Sklep – zaledwie kilkadziesiąt metrów od osiedla, dla wygodnych codziennych zakupów.</li>
          <li>Łódź Retkinia – 7 km (7 minut), w pobliżu jednej z największych dzielnic miasta.</li>
          <li>Pabianice - Centrum - 4 km (6 minut)</li>
          <li>Port Łódź – 10 km (10 minut), centrum handlowe i miejsce rozrywki na wyciągnięcie ręki.</li>
        </ul>
        <p>Wybierz <b>Osiedle Górka Pabianicka</b> – spokój na peryferiach, bliskość do miejskich udogodnień!</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.localisation-page-wrapper {
  margin-top: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px){
    margin-top: 50px;
    padding: 5px;
  }
}

.localisation-page-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 15px auto;
  padding: 15px;
  @media (max-width: 768px){
    margin: 2px;
    padding: 5px;
  }
}

@media (min-width: 768px) {
  .localisation-page-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.localisation-tile {
  padding: 20px;
  color: black;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(48, 71, 54, 0.7);
  box-shadow: 0 4px 10px rgba(48, 71, 54, 0.7);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    border-radius: 5px;
    font-size: 13px;
  }
}

.map-tile {
  padding: 0;
  overflow: hidden;
  font-size: 10px;
  text-align: right;
  @media (max-width: 768px) {
    height: 400px;
    width: 100%;
    border-radius: 5px;
    text-align: center;
  }
}

</style>
