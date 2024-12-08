<script>
export default {
  name: 'search_component'
}
</script>

<template>
  <div class="searchWrapper">
    <input
      id="search"
      name="search"
      v-model= "searchValue"
      @input="handleInput"
    />
  </div>
</template>

<style scoped lang="scss">
.searchWrapper{
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 250px;
  input{
    height: 30px;
    border: 0;
    border-bottom: 2px solid #ccc;
    background: none;
  }
  p{
    font-family: Montserrat, sans-serif;
  }
}
</style>
