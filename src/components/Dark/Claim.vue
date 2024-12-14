<script>
import LocalisationInfo from '@/components/Dark/LocalisationInfoTile.vue'
import DomyInfoTile from '@/components/Dark/DomyInfoTile.vue'
import KontaktInfoTile from '@/components/Dark/KontaktInfoTile.vue'

export default {
  name: 'claim_component',
  components: { LocalisationInfo, DomyInfoTile, KontaktInfoTile }
}

</script>

<template>
  <div>
    <div class="claim-wrapper">
      <img src="../../assets/logo_poziome_white.png" >
      <br/>
      <p class="subclaim">
        W malowniczej i cichej okolicy, powstają nowoczesne bliźniaki i domy szeregowe. Zamieszkaj komfortowo, blisko natury!
      </p>
    </div>
    <div class="tile_grid">
      <LocalisationInfo />
      <DomyInfoTile />
      <KontaktInfoTile />
    </div>
  </div>
</template>

<style scoped lang="scss">

.claim-wrapper {
  margin-top: 20%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  background: rgba(0,0,0, 0.8);
  border: 1px solid rgba(#ffffff, 0.4);
  box-shadow: 0 4px 10px rgba(#ffffff, 0.4);
  border-radius: 15px;
  max-width: 100%; /* Ograniczenie szerokości na dużych ekranach */
  margin-left: auto; /* Wyśrodkowanie poziome */
  margin-right: auto; /* Wyśrodkowanie poziome */
}

.claim-wrapper img {
  max-width: 50%;
  height: auto;
}

.claim {
  font-size: 50px;
  font-weight: 500;
  margin: 0;
  align-items: center;
  @media (min-width: 768px) {
    font-size: 80px;
  }
}

.subclaim {
  font-size: 20px;
  margin-top: 10px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 1;
    letter-spacing: 1px;
  }
  @media (max-width: 600px) {
    display: none; /* Ukrywanie na małych ekranach */
  }
}

.tile_grid {
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 5px; /* Dodano odstępy między wierszami */
  width: 100%;
}

/* Responsywność dla bardzo małych ekranów */
@media (max-width: 600px) {
  .tile_grid {
    grid-template-columns: 1fr; /* Tylko jedna kolumna */
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
