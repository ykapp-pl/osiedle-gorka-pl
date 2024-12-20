<template>
  <div class="tile-wrapper">
    <div class="parent" @click="showModalHandler">
      <div class="div1">
        <img :src="imageSrc" alt="Image" />
      </div>
      <h3>{{ title }}</h3>
      <div class="div2">
        <p>{{ description }}</p>
      </div>
    </div>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h2>Modal Tytuł</h2>
        <p>To jest zawartość modala.</p>
        <button @click="showModal = false">Zamknij</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info_tile',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    onClick: Function
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    showModalHandler () {
      if (this.onClick) {
        this.onClick() // Wywołanie przekazanej funkcji
      }
    }
  }
}
</script>

<style scoped lang="scss">
.parent {
  display: grid;
  grid-template-rows: 3fr;
  grid-row-gap: 1px;
  align-items: center;
  cursor: pointer; /* Wskazuje, że element jest klikalny */
}

.div1, .div2 {
  text-align: center;
}

/* Zaokrąglenie obrazka */
.div1 img {
  max-width: 150px;
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

.tile-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: black;
  background: rgba(white, 0.8);
  border: 2px solid rgba(#304736, 0.7);
  box-shadow: 0 4px 10px rgba(#304736, 0.7);
  border-radius: 15px;
}

/* Ukrywanie div2 dla małych ekranów */
@media (max-width: 600px) {
  .tile-wrapper {
    display: flex;
    flex-direction: row; /* Ustawia elementy w jednym wierszu */
    align-items: center; /* Wyrównuje elementy w pionie */
    justify-content: flex-start; /* Elementy zaczynają się od lewej */
    padding: 3px;
    border-radius: 5px;
    max-width: 100%; /* Element nie wykracza poza szerokość ekranu */
    overflow: hidden; /* Zapobiega przewijaniu */
    box-sizing: border-box; /* Uwzględnia padding w szerokości */
  }

  h3 {
    margin: 0; /* Usuń ewentualne odstępy */
    font-size: 1rem; /* Zmniejsz rozmiar tekstu, jeśli tytuł jest za długi */
    text-align: left; /* Wyrównanie tytułu do lewej */
    white-space: nowrap; /* Zapobiega zawijaniu tekstu */
    overflow: hidden; /* Ukrywa nadmiar tekstu */
    text-overflow: ellipsis; /* Dodaje wielokropek, jeśli tekst jest za długi */
    order: 2; /* Ustawienie tytułu na drugim miejscu */
    flex-grow: 1;
  }

  .parent {
    display: flex; /* Zamień siatkę na flexbox */
    flex-direction: row; /* Elementy w jednym wierszu */
    align-items: center; /* Wyrównanie w pionie */
    gap: 50px; /* Odstęp między elementami */
    flex-wrap: nowrap; /* Zapobiega przenoszeniu elementów do nowej linii */
    width: 100%; /* Element zajmuje całą szerokość rodzica */
  }

  .div1 {
    order: 1; /* Domyślne ustawienie obrazka na pierwszym miejscu */
    flex-shrink: 0; /* Obrazek nie zmniejsza się */
  }
  .div2 {
    display: none; /* Ukryj opis na małych ekranach */
  }

  .div1 img {
    width: 50px; /* Stała szerokość obrazka */
    height: 50px; /* Stała wysokość obrazka */
    border-radius: 10px; /* Zaokrąglone rogi */
  }
}

</style>
