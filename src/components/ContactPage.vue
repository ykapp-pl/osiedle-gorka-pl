<script>
export default {
  name: 'ContactPage',
  methods: {
    resetStep () {
      this.$emit('update:step', 0)
    }
  },
  props: {
    step: {
      type: Number,
      required: true // Teraz wymagane
    }
  }
}
</script>

<template>
  <div class="contact-wrapper">
    <h1>Jak możesz się z nami skonaktować?</h1>
    <div class="contact-grid">
        <div class="contact-item">
          <img src="../assets/email.png">
          <p>sprzedaż@osiedlegorka.pl</p>
          <p>info@osiedlegorka.pl</p>
        </div>
        <div class="contact-item">
          <img src="../assets/localisation.png">
          <p>Górka Pabianicka</p>
          <p>ul. nieznana 62b</p>
          <p>95-200 Pabianice</p>
        </div>
        <div class="contact-item">
          <img src="../assets/contact.png">
          <p>kom: 666-666-666</p>
          <p>tel: 42 123 45 12</p>
        </div>
  </div>
  </div>
</template>

<style scoped lang="scss">
 .contact-wrapper {
   display: flex;
   flex-direction: column;
   margin-top: 70px;
   padding: 10px;
   color: black;
   background: rgba(255, 255, 255, 0.9);
   border: 2px solid rgba(48, 71, 54, 0.7);
   box-shadow: 0 4px 10px rgba(48, 71, 54, 0.7);
   border-radius: 5px;
   width: 95%;
   h1{
     text-align: center;
     margin-bottom: 0;
   }
   p{
     margin-bottom: 0px;
   }
 }
 .contact-grid {
   padding: 50px;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   grid-column-gap: 30px;
   max-width: 80%;
   margin: auto; /* Wyśrodkowanie elementów w osi poziomej */
 }

 .contact-item {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 15px;
   text-align: center;
 }

 .contact-item img {
   width: 100px;
 }
</style>
