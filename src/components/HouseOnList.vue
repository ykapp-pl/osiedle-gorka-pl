<template>
  <div>
    <div
      v-if="!isActive"
      class="listitem-wrapper"
      @click="$emit('click')"
    >
      <img src="../assets/dom_L.png" />
      <div class="listitem">
        <h4>projekt</h4>
        <p>{{ type }}</p>
      </div>
      <div class="listitem">
        <h4>metraż</h4>
        <p>{{ area }}mkw</p>
      </div>
      <div class="listitem">
        <h4>pokoje</h4>
        <p>{{ rooms }}</p>
      </div>
      <div class="listitem">
        <h4>status</h4>
        <p>{{ status }}</p>
      </div>
    </div>

    <div
      v-else
      class="activeTile"
      @click="$emit('click')"
    >
      <div class="imgActiveItem">
        <ImageSlider />
      </div>
      <div class="parmasActiveItem">
        <p>projekt: <b>{{ type }}</b></p>
        <p>metraż: <b>{{ area }}</b></p>
        <p>pokoje: <b>{{ rooms }}</b></p>
        <p>status: <b>{{ status }}</b></p>
        <p>projekt: <b>{{ type }}</b></p>
      </div>
      <div class="desryptionActiveItem">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <button class="close-button" @click.stop="$emit('clearActive')">&times;</button>
    </div>
  </div>
</template>

<script>
import ImageSlider from '@/components/GaleryComponent.vue'

export default {
  name: 'HouseOnList',
  components: { ImageSlider },
  props: {
    symbolId: String,
    type: String,
    status: String,
    area: Number,
    side: String,
    flats: String,
    rooms: String,
    bathroom: String,
    isActive: Boolean
  }
}
</script>

<style scoped lang="scss">
.listitem-wrapper {
  display: flex;
  flex-direction: row;
  color: black;
  background: rgba(white, 0.8);
  border: 2px solid rgba(#304736, 0.7);
  box-shadow: 0 4px 10px rgba(#304736, 0.7);
  border-radius: 5px;
  padding: 5px;
  justify-items: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
}

.close-button {
  position: absolute;
  top: 5px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #304736;
}

.listitem {
  padding-right: 80px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  width: 20%;
  border-left: 2px solid rgba(#304736, 0.4);
  text-align: left;

  @media (max-width: 600px) {
    padding: 5px;
  }
}

.listitem h4 {
  color: #304736;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 1px;

  @media (max-width: 600px) {
    font-size: 10px;
  }
}

.listitem p {
  margin-top: 5px;
  color: black;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 10px;
    margin-top: 2px;
  }
}

.listitem-wrapper img {
  margin-left: 30px;
  margin-right: 30px;
  height: 100px;
  width: auto;

  @media (max-width: 600px) {
    height: 70px;
    margin-left: 3px;
    margin-right: 3px;
  }
}

.activeTile {
  display: flex;
  flex-direction: row;
  color: black;
  background: rgba(white, 0.8);
  border: 2px solid rgba(#304736, 0.7);
  box-shadow: 0 4px 10px rgba(#304736, 0.7);
  border-radius: 5px;
  padding: 5px;
  justify-items: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  p{
    margin-bottom: 0px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    p{
      margin-top: 3px;
    }
  }
}

.imgActiveItem{
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  width: 30%;
  text-align: left;

  @media (max-width: 600px) {
    padding: 5px;
    border: none;
    width: 95%;
  }
}
.parmasActiveItem
{
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 20%;
  @media (max-width: 600px) {
    padding: 5px;
    border: none;
    width: 95%;
  }
}
.desryptionActiveItem{
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 50%;
  @media (max-width: 600px) {
    padding: 5px;
    border: none;
    width: 95%;
  }
}
</style>
