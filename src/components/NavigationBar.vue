<template>
  <nav class="navigation-bar">
    <div class="logo-button">
      <button @click="()=>onLogoClick(0)">
        <img src="../assets/logo_poziomo.png" alt="Logo">
      </button>
    </div>
    <button class="hamburger" @click="toggleMenu">
      ☰
    </button>
    <ul :class="{ 'nav-links': true, 'show-menu': menuOpen }">
      <li><button @click="changeStep(5)">Inwestycja</button></li>
      <li><button @click="changeStep(3)">Domy</button></li>
      <li><button @click="changeStep(6)">Deweloper</button></li>
      <li><button @click="changeStep(2)">Lokalizacja</button></li>
      <li><button @click="changeStep(4)">Kontakt</button></li>
    </ul>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'NavigationBar',
  props: {
    onLogoClick: Function, // Przyjmujemy funkcję zmieniającą step
    changeStep: Function
  },
  setup () {
    const menuOpen = ref(false)

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }
    return { menuOpen, toggleMenu }
  }
}
</script>

<style scoped>
.navigation-bar {
  width: 100%;
  position: fixed; /* Umożliwia przyklejenie paska nawigacyjnego do górnej części ekranu */
  top: 0; /* Ustawia pasek nawigacyjny na górze strony */
  left: 0; /* Zapewnia rozciągnięcie na pełną szerokość */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  background: rgba(255,255,255, 0.8);
  border-bottom: 2px solid rgba(48, 71, 54, 0.7);
  box-shadow: 0 4px 10px rgba(48, 71, 54, 0.7);
  z-index: 1000; /* Zapewnia wyświetlanie paska nawigacyjnego nad innymi elementami */
}

.logo-button button {
  font-size: 18px;
  background: none;
  border: none;
  color: #353535;
  cursor: pointer;
}

.logo-button img {
  margin-left: 30px;
  max-width: 200px;
  height: auto;
}

.hamburger {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  color: #353535;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li button {
  color: #353535;
  text-decoration: underline;
  font-size: 16px;
  font-weight: 600;
  border: none;
  background: none;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    padding: 10px;
    border-radius: 5px;
    background: rgba(255,255,255, 0.9);
    border: 2px solid rgba(48, 71, 54, 0.7);
    box-shadow: 0 4px 10px rgba(48, 71, 54, 0.7);
  }

  .nav-links.show-menu {
    display: flex;
  }

  .hamburger {
    display: block;
  }
}
</style>
