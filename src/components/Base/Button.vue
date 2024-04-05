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

    &:disabled {
      pointer-events: none;
      background-color: #e6e6e6;
      border-color: #e6e6e6;
      color: #bcbcbc;
    }

    &--uppercase {
      text-transform: uppercase;
    }

    &--white {
      border: 1px solid theme('colors.white');
      @apply tw-bg-white tw-text-black2;

      &:hover {
        @apply tw-text-white tw-bg-opacity-0;
      }
    }

    &--black {
      border: 1px solid theme('colors.black');
      @apply tw-bg-black tw-text-white;

      &:hover {
        @apply tw-text-black tw-bg-opacity-0;
      }
    }
  }
</style>
