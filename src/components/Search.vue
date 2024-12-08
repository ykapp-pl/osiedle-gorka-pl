<script>
export default {
  name: 'search_component',
  props: {
    value: {
      type: String,
      required: true
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<template>
  <div class="searchWrapper">
    <input
      id="search"
      name="search"
      :class="{dark}"
     :value ="value"
      @input ="handleChange" />
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
    text-align: center;
    font-size: 20px;
    border: 0;
    border-bottom: 2px solid #000000;
    background: none;
    transition:  box-shadow 0.5s;
    outline: none;
    transition:  box-shadow 0.5s;
  }
  input:focus{
    background: none;
    outline: none;
    box-shadow: 0 10px 20px -8px rgba(255,255,255, 0.7);
  }

  p{
    font-family: Montserrat, sans-serif;
  }
}
  .dark{
    color: #1e3d4a;
    border-bottom-color: #1e3d4a;
  }
  .darh:focus{
    box-shadow: 0 10px 20px -8px rgba(#1e3d4a, 0.7);
  }
</style>
