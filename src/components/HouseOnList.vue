<template>
  <div class="listitem-wrapper">
    <img src="../assets/dom_L.png">
    <div class="listitem">
      <h4>rodzaj budynku</h4>
      <p>{{type}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HouseOnList',
  props: {
    symbolId: String,
    type: String,
    status: String,
    area: Number,
    side: String
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
  border-radius: 15px;
}
.item-info{
  display: flex;
  flex-direction: column;
}
</style>
