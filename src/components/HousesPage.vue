<template>
  <div class="houses-list-wrapper">
    <ul>
      <li v-for="house in domy" :key="house.id">
       <HouseOnList
          :symbolId="house.symbolId"
          :type="house.type"
          :status="house.status"
          :area="house.area"
          :side="house.side"
          :flats="house.flats"
        />
      </li>
   </ul>
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
      domy: [] // Poprawiona nazwa zmiennej
    }
  },
  async mounted () {
    try {
      const querySnapshot = await getDocs(collection(db, 'domy')) // Upewnij się, że nazwa kolekcji jest poprawna
      this.domy = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (error) {
      console.error('Błąd podczas pobierania danych:', error)
    }
  }
}
</script>

<style scoped>
.houses-list-wrapper {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 90%;
}

.houses-list-wrapper li{
  margin-top: 5px;
}
</style>
