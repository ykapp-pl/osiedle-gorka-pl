<script>
export default {
  name: 'claim_component'
}
</script>

<template>
  <div class="claim-wrapper">
    <h1 class="claim">Górka Pabianicka</h1>
    <p class="subclaim">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <p class="subclaim">
      Ut enim ad minim veniam, quis nostrud exercitation
    </p>
  </div>
</template>

<style scoped lang="scss">
.claim-wrapper {
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.claim {
  font-size: 50px;
  margin: 0;
  align-items: center;
}
.subclaim {
  font-size: 20px;
  margin-top: 15px;
}
</style>
