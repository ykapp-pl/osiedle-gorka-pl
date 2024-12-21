<script>
import infoTile from '@/components/Brite/infoTile.vue'

export default {
  name: 'claim_component_r',
  components: { infoTile },
  props: {
    changeStep: Function // Przyjmujemy funkcję zmieniającą step
  }
}

</script>

<template>
  <div>
    <div class="claim-wrapper">
      <img src="../../assets/logo_poziomo.png" alt="logo" >
      <br/>
      <p class="claim">
        <b>Zamieszkaj komfortowo, blisko natury!</b>
      </p>
      <p class="subclaim">
        W malowniczej i cichej okolicy, powstają nowoczesne bliźniaki i domy szeregowe.
      </p>
    </div>
    <div class="tile_grid">
      <infoTile
        title="Znakomita lokalizacja!"
        description="Zobacz, jak blisko Łodzi i Pabianic znajduje się Twoje przyszłe osiedle."
        :imageSrc="require('@/assets/localisation.png')"
        :onClick = "()=>changeStep(2)"
      />
      <infoTile
        title="Twój wymarzony dom!"
        description="Poznaj bliźniaki i segmenty zaprojektowane z myślą o Tobieee."
        :imageSrc="require('@/assets/house.png')"
        :onClick = "()=>changeStep(3)"
      />
      <infoTile
        title="Skontaktuj się z nami!"
        description="Masz pytania? Z przyjemnością odpowiemy."
        :imageSrc="require('@/assets/contact.png')"
        :onClick = "()=>changeStep(4)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">

.claim-wrapper {
  margin-top: 3%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #353535;
  background: rgba(255,255,255, 0.8);
  border: 2px solid rgba(#304736, 0.7);
  box-shadow: 0 4px 10px rgba(#304736, 0.7);
  border-radius: 5px;
  max-width: 80%; /* Ograniczenie szerokości na dużych ekranach */
  margin-left: auto; /* Wyśrodkowanie poziome */
  margin-right: auto; /* Wyśrodkowanie poziome */
}

.claim-wrapper img {
  max-width: 50%;
  height: auto;
}

.claim {
  font-size: 30px;
  margin-top: 10px;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 19px;
  }
}

.subclaim {
  font-size: 17px;
  margin-top: 10px;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 1;
    letter-spacing: 1px;
  }
}

.tile_grid {
  padding: 50px;
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

/* Responsywność dla bardzo małych ekranów */
@media (max-width: 600px) {
  .tile_grid {
    grid-template-columns: 1fr; /* Tylko jedna kolumna */
    margin-top: 5px;
    padding: 5px;
    display: grid;
    grid-row-gap: 10px;
    max-width: 95%;
  }
  .claim-wrapper{
    padding: 10px;
    max-width: 95%;
    border-radius: 5px;
  }
  .claim-wrapper img {
    max-width: 80%;
    height: auto;
  }
}

/* Dostosowanie szerokości claim-wrapper dla dużych ekranów */
@media (min-width: 1024px) {
  .claim-wrapper {
    max-width: 70%;
    margin-left: auto; /* Wyśrodkowanie poziome */
    margin-right: auto; /* Wyśrodkowanie poziome */
  }
}
</style>
