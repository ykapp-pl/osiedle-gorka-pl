<template>
  <div class="houses-list-wrapper">
    <!-- Sekcja filtrowania -->
    <div class="exit-button-wrapper">
      <button class="reset-button" @click="resetStep">&#10005;</button>
    </div>
    <div class="filters">
      <select v-model="selectedStatus">
        <option value="">Wszystkie statusy</option>
        <option value="wolny">Wolny</option>
        <option value="sprzedany">Sprzedany</option>
        <option value="rezerwacja">Rezerwacja</option>
      </select>

      <select v-model="selectedType">
        <option value="">Wszystkie typy</option>
        <option value="w murajach">W murajach</option>
        <option value="w narcyzach">W narcyzach</option>
      </select>

      <select v-model="selectedFlats">
        <option value="">Dowolna liczba mieszkań</option>
        <option value="2">2 mieszkania</option>
        <option value="4">4 mieszkania</option>
      </select>
    </div>

    <!-- Lista domów -->
    <div v-for="house in filteredHouses" :key="house.id">
      <HouseOnList
        :symbolId="house.symbolId"
        :type="house.type"
        :status="house.status"
        :area="house.area"
        :side="house.side"
        :flats="house.flats"
        :bathroom="house.bathroom"
        :rooms="house.rooms"
        :isActive="activeHouseId === house.id"
        @click="setActiveHouse(house.id)"
        @clearActive="clearActiveHouse"
      />
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import HouseOnList from '@/components/HouseOnList.vue'

export default {
  name: 'HousesPage',
  components: { HouseOnList },
  data () {
    return {
      domy: [], // Oryginalna lista domów
      selectedStatus: '', // Wybrany status (filtrowanie)
      selectedType: '', // Wybrany typ (filtrowanie)
      selectedFlats: '', // Wybrana liczba mieszkań (filtrowanie)
      activeHouseId: null // Id aktywnego elementu
    }
  },
  props: {
    step: {
      type: Number,
      required: true // Teraz wymagane
    }
  },
  computed: {
    filteredHouses () {
      return this.domy.filter(house => {
        const statusMatch = this.selectedStatus ? house.status === this.selectedStatus : true
        const typeMatch = this.selectedType ? house.type === this.selectedType : true
        const flatsMatch = this.selectedFlats ? house.flats === this.selectedFlats : true
        return statusMatch && typeMatch && flatsMatch
      })
    }
  },
  methods: {
    setActiveHouse (id) {
      this.activeHouseId = id
    },
    clearActiveHouse () {
      this.activeHouseId = null
    },
    resetStep () {
      this.$emit('update:step', 0)
    }
  },
  async mounted () {
    try {
      const querySnapshot = await getDocs(collection(db, 'domy'))
      this.domy = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (error) {
      console.error('Błąd podczas pobierania danych:', error)
    }
  }
}
</script>

<style scoped>
.houses-list-wrapper {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 600px) {
    width: 98%;
    margin-top: 70px;
  }

}

.houses-list-wrapper li{
  margin-top: 5px;
}
.filters {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  max-width: 98%;
}

.filters select {
  padding: 8px;
  font-size: 14px;
  @media (max-width: 600px) {
    font-size: 10px;
    padding: 2px;
  }
}
</style>
