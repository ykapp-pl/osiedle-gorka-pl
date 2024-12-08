<script>
export default {
  name: 'serch_item',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      photo: this.item.links[0].href,
      title: this.item.data[0].title
    }
  },
  computed: {
    style () {
      return `background-image: url('${this.photo}')`
    }
  }
}

</script>

<template>
  <div :style="style" class="item" />
</template>

<style scoped lang="scss">
  .item {
    width: 300px;
    height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
