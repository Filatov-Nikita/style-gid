<template>
  <div class="item">
    <img class="img" :src="url" loading="lazy" />
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    photo: {
      required: true,
      type: String,
    }
  });

  const base = (import.meta.env.VITE_API_BASE ?? '').replace('/api', '');

  const url = computed(() => base + props.photo);
</script>

<style scoped lang="scss">
  .item {
    border-radius: 10px;
    overflow: hidden;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
