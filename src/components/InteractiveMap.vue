<template>
  <div ref="mapContainer" style="height: 100%; width: 100%;"></div>
</template>
<script>
import L from 'leaflet'

export default {
  name: 'WayMap',
  data () {
    return {
      map: null
    }
  },
  mounted () {
    const mapContainer = this.$refs.mapContainer

    if (mapContainer) {
      // Inicjalizacja mapy, początkowe ustawienie widoku
      this.map = L.map(mapContainer).setView([51.6967, 19.3228], 17)

      // Dodanie warstwy kafelkowej
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map)

      // Współrzędne węzłów dla "way" (przykład współrzędnych)
      const wayCoordinates = [
        [51.696608, 19.317953], // Node 9972328242
        [51.696282, 19.323454], // Node 9972328243
        [51.695867, 19.323599], // Node 12382384798
        [51.696096, 19.319536], // Node 12382384799
        [51.696259, 19.319555], // Node 12382384800
        [51.696359, 19.318090], // Node 12382406001
        [51.696608, 19.317953] // Node 12382406002
      ]

      // Rysowanie obszaru (polygon) na mapie
      L.polygon(wayCoordinates, {
        color: 'blue', // Kolor obramowania
        weight: 2, // Grubość linii
        fillColor: '#3388ff', // Kolor wypełnienia
        fillOpacity: 0.4 // Przezroczystość wypełnienia
      })
        .addTo(this.map)
        .bindPopup('<b>Landuse: Residential</b><br>Way ID: 1338621894')
    } else {
      console.error('Map container not found')
    }
  },
  beforeUnmount () {
    if (this.map) {
      this.map.remove()
    }
  }
}
</script>

<style scoped>
div[ref="mapContainer"] {
  height: 500px;
  width: 100%;
}
</style>
<style scoped>
div[ref="mapContainer"] {
  height: 500px;
  width: 100%;
}
</style>
