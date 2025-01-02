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
        <h4>liczba mieszkań</h4>
        <p>{{ flats }}</p>
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
      <div class="listitem">
        <ImageSlider />
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
  position: relative;
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
</style>
