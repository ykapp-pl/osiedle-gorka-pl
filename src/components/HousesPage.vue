
Twój błąd w wywołaniu komponentu HouseOnList wynika z niepoprawnego użycia składni Vue. Przekazywanie wartości do props w Vue powinno odbywać się za pomocą v-bind (:), a interpolacja {{ }} nie jest potrzebna w atrybutach. Oto poprawiona wersja:

Poprawiony kod
vue
Skopiuj kod
<li v-for="house in domy" :key="house.id">
{{ house.symbolId }} - {{ house.type }} - {{ house.status }} - {{ house.area }} m² - {{ house.price }} zł
<HouseOnList :type="house.type" />
</li>
Co się zmieniło?
Zamiana:
vue
Skopiuj kod
:type={{ house.type }}
Na:
vue
Skopiuj kod
:type="house.type"
Użycie :type oznacza, że przypisujesz dynamiczną wartość do props type.
W Vue nie używa się interpolacji {{ }} w dynamicznych atrybutach.
Pełen kontekst
Jeśli Twój komponent nadrzędny wygląda tak:

vue
Skopiuj kod
<template>
  <ul>
    <li v-for="house in domy" :key="house.id">
      {{ house.symbolId }} - {{ house.type }} - {{ house.status }} - {{ house.area }} m² - {{ house.price }} zł
      <HouseOnList
        :symbolId="house.symbolId"
        :type="house.type"
        :status="house.status"
        :area="house.area"
        :side="house.side"
      />
    </li>
  </ul>
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
