<template>
  <button class="base-btn tw-inline-block" :class="classes">
    <slot />
  </button>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    theme: {
      default: 'black',
      type: String,
    },
    uppercase: {
      default: false,
      type: Boolean,
    },
  });

  const classes = computed(() => {
    return {
      'base-btn--white': props.theme === 'white',
      'base-btn--black': props.theme === 'black',
      'base-btn--uppercase': props.uppercase,
    }
  });
</script>

<style scoped lang="scss">
  .base-btn {
    padding: 15px 40px;
    line-height: 1.35;
    @apply tw-text-24 tw-font-medium tw-text-center tw-font-noto tw-uppercase;

    &--uppercase {
      text-transform: uppercase;
    }

    &--white {
      @apply tw-bg-white tw-text-black2;
    }

    &--black {
      @apply tw-bg-black tw-text-white;
    }
  }
</style>
