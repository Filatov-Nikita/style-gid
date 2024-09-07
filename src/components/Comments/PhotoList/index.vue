<template>
  <div class="list">
    <Item
      class="list-item"
      v-for="photo in photos"
      :photo="photo"
    />
  </div>
</template>

<script setup>
  import Item from './Item.vue';

  defineProps({
    photos: {
      required: true,
      type: Array,
    }
  });
</script>

<style scoped lang="scss">
  .list {
    display: flex;
    flex-wrap: wrap;
    margin: -5px;
  }

  .list-item {
    width: calc(25% - 10px);
    height: 136px;
    margin: 5px;
  }
</style>
