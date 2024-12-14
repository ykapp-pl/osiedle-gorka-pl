<script>
export default {
  name: 'DomyInfoTile',
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    showModalHandler () {
      this.showModal = true
      console.log('Modal triggered')
      // Tutaj możesz dodać logikę wyświtlania modala
    }
  }
}
</script>

<template>
  <div class="tile-wrapper">
    <h3>Twój wymarzony dom!</h3>
    <!-- Parent Div -->
    <div class="parent" @click="showModalHandler">
      <!-- Div1 -->
      <div class="div1">
        <img src="../../assets/dom_miniaturka.png" alt="dom - ikona, miniatura" />
      </div>

      <!-- Div2 -->
      <div class="div2">
        <p>Poznaj bliźniaki i segmenty zaprojektowane z myślą o Tobie.</p>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h2>Modal Tytuł</h2>
        <p>To jest zawartość modala.</p>
        <button @click="showModal = false">Zamknij</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.parent {
  display: grid;
  grid-template-rows: 3fr 1fr; /* Równe części */
  grid-row-gap: 2px;
  align-items: center;
  cursor: pointer; /* Wskazuje, że element jest klikalny */
}

.div1, .div2 {
  padding: 5px;
  text-align: center;
}

/* Zaokrąglenie obrazka */
.div1 img {
  width: 100%;
  height: auto;
  border-radius: 10px; /* Zaokrąglone rogi */
}

/* Modal Style */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.tile-wrapper{
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  background: rgba(0,0,0, 0.8);
  border: 1px solid rgba(#ffffff, 0.4);
  box-shadow: 0 4px 10px rgba(#ffffff, 0.4);
  border-radius: 15px;
}
</style>
