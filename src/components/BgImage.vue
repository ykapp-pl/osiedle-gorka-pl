<script>
export default {
  name: 'BgImage'
}
</script>

<template>
  <div class="bg_image"/>
</template>

<style scoped lang="scss">
.bg_image {
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/osiedle-stok.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%, 80%;
}

.bg_image::after {
  content: '';
  background: rgba(0,0,0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
}

</style>
