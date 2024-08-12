<template>
  <div class="slider-buttons">
    <Btn dir="left" :disabled="!canPrev" @click="$emit('prev')" />
    <Btn dir="right" :disabled="!canNext" @click="$emit('next')" />
  </div>
</template>

<script setup>
  import Btn from './Btn.vue';

  defineProps({
    canPrev: {
      default: false,
      type: Boolean,
    },
    canNext: {
      default: false,
      type: Boolean,
    },
  });

  defineEmits([
    'prev',
    'next',
  ]);
</script>

<style scoped lang="scss">
  .slider-buttons {
    display: flex;
    align-items: center;
    gap: 12px;
  }
</style>
