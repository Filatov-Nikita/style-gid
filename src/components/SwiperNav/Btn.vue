<template>
  <button class="slider-btn" :disabled="disabled">
    <BaseIcon :color="disabled ? '#BEBEBE' : '#000000'" class="slider-btn__icon" :name="dir === 'left' ? 'slider-left' : 'slider-right'" />
  </button>
</template>

<script setup>
  defineProps({
    dir: {
      default: 'left',
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    }
  });
</script>

<style scoped lang="scss">
  .slider-btn {
    width: 34px;
    height: 34px;
    line-height: 34px;
    border-radius: 50%;
    background-color: #EDEDED;
    text-align: center;
    font-size: 0px;
    @apply tw-text-black;

    &__icon {
      display: inline-block;
      width: 20px;
      height: 20px;
    }
  }
</style>
