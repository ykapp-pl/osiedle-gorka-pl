<script>
export default {
  name: 'DeveloperPage',
  props: {
    step: {
      type: Number,
      required: true // Teraz wymagane
    }
  },
  methods: {
    resetStep () {
      this.$emit('update:step', 0)
    }
  }
}

</script>
<template>
  <div class="exit-button-wrapper" style="margin-top: 70px; margin-right: 50px">
    <button class="reset-button" @click="resetStep">&#10005;</button>
  </div>
  <div class="develop-wrapper">
    <h1>Deweloper osiedla górka pabianicak </h1>
    <img src="../assets/osiedle_z_gory.jpg" class="develop-main-img">
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    <h2>o Nas</h2>
    <div class="develop-info-row">
      <div class="developrow-cell ">
        <img src="../assets/o_nas.jpg" class="develop-sec-img">
      </div>
      <div> <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
    </div>
    <h2>nasza jakość</h2>
    <div class="develop-info-row">
      <div> <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
      <div class="develop-row-cell ">
        <img src="../assets/jakosc.jpg" class="develop-sec-img">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.develop-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  padding: 10px;
  color: black;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(48, 71, 54, 0.7);
  box-shadow: 0 4px 10px rgba(48, 71, 54, 0.7);
  border-radius: 5px;
  width: 95%;

  h1 {
    text-align: center;
    margin-bottom: 0;
  }
  h2 {
    margin-bottom: 0;
    margin-top: 0;
  }

  p {
    padding: 15px;
    margin-bottom: 0px;
    font-size: 20px;
    text-align: justify-all;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
}
.develop-main-img{
  margin-top: 50px;
  width: 95%;
  height: auto;
}
.develop-sec-img{
  margin: 15px;
  width: 40vw;
  height: auto;
  @media (max-width: 600px) {
    width: 90vw;
  }
}
.develop-info-row{
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
}

</style>
