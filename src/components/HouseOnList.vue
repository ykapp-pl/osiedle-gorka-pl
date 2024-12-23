<template>
  <div class="listitem-wrapper">
    <img src="../assets/dom_L.png">
    <div class="listitem">
      <h4>rodzaj budynku</h4>
      <p>{{type}}</p>
    </div>
    <div class="listitem">
      <h4>metraż</h4>
      <p>{{area}}mkw</p>
    </div>
    <div class="listitem">
      <h4>mieszkań w budynku</h4>
      <p>{{flats}}</p>
    </div>
    <div class="listitem">
      <h4>status</h4>
      <p>{{status}}</p>
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
    side: String,
    flats: String
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

}
.listitem{
  padding-right: 80px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  width: 20%;
  border-left: 2px solid rgba(#304736, 0.4);
  text-align: left;
}
.listitem h4 {
  color: #304736;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 1px;
}
.listitem p {
  margin-top: 5px;
  color: black;
  font-size: 20px;
  font-weight: 600;
}
.listitem-wrapper img {
  margin-left: 30px;
  margin-right: 30px;
  height: 100px;
  width: auto;
}
</style>
