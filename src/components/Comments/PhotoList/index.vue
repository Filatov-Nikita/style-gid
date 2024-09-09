<template>
  <div class="list">
    <Item
      class="list-item"
      v-for="(photo, index) in photos"
      :photo="photo"
      @click="$emit('change:photo', index)"
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

  defineEmits([ 'change:photo' ]);
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
    cursor: pointer;
  }
</style>
