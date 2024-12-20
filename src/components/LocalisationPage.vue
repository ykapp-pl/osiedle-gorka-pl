<script>
import InteractiveMap from '@/components/InteractiveMap.vue'

export default {
  name: 'LocalisationPage',
  components: { InteractiveMap }
}

</script>
<template>
<div class="localisation-page-wrapper">
    <div class="localisation-h3">
      <h2>Osiedle Górka Pabianicka: Spokój i wygoda w pobliżu Łodzi i Pabianic</h2>
    </div>
    <div class="localisation-page-grid">
      <div class="localisation-tile">
          <InteractiveMap :location="{ lat: 50.0614, lng: 19.9366 }" :zoom="12"/>
      </div>
      <div class="localisation-tile">
        <p><B>Osiedle Górka Pabianicka</B> to doskonałe miejsce dla osób szukających spokoju i komfortu, jednocześnie z łatwym dostępem do miasta. Położone na peryferiach Łodzi, zapewnia bliskość do ważnych punktów, zachowując ciszę i przestronność.</p>
        <ul>
          <li>Szkoła – tylko 4 km (6 minut), idealna odległość dla rodzin z dziećmi.</li>
          <li>Sklep – zaledwie kilkadziesiąt metrów od osiedla, dla wygodnych codziennych zakupów.</li>
          <li>Łódź Retkinia – 7 km (7 minut), w pobliżu jednej z największych dzielnic miasta.</li>
          <li>Pabianice - Centrum - 4km (6 minut)</li>
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
    align-items: center;
    justify-content: center;
  }
  .localisation-h3 {
    width: 70%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    background: rgba(white, 0.9);
    border: 2px solid rgba(#304736, 0.7);
    box-shadow: 0 4px 10px rgba(#304736, 0.7);
    border-radius: 15px;
    margin-left: auto;
    margin-right: auto;
}
  .localisation-page-grid{
   padding: 30px;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   grid-column-gap: 30px;
   grid-row-gap: 5px; /* Dodano odstępy między wierszami */
   max-width: 80%;
   align-items: center;
   justify-content: center;
   margin-left: auto; /* Wyśrodkowanie poziome */
   margin-right: auto;
 }
 .localisation-tile {
   height: 100%;
   padding: 30px;
   display: flex;
   flex-direction: column;
   color: black;
   background: rgba(white, 0.9);
   border: 2px solid rgba(#304736, 0.7);
   box-shadow: 0 4px 10px rgba(#304736, 0.7);
   border-radius: 15px;
 }
  localisation-tile li{
    padding: 15px;
  }
</style>
