<template>
  <div class="accord-item">
    <div class="accord-item__head" @click="showed = !showed">
      <div class="accord-item__label">
        <slot name="label" />
      </div>
      <button class="accord-item__btn">
        <BaseIcon class="tw-w-full tw-h-full" :name="showed ? 'accord-close' : 'accord-plus'" />
      </button>
    </div>
    <div class="accord-item__body" v-if="showed">
      <slot />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    showInitial: {
      default: false,
      type: Boolean,
    },
  });

  const showed = ref(props.showInitial);
</script>

<style scoped lang="scss">
  .accord-item {
    border-bottom: 1px solid #D3D3D3;

    &__btn {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
    }

    &__head {
      padding-top: 24px;
      padding-bottom: 24px;
      display: flex;
      align-items: center;
      gap: 20px;
      cursor: pointer;
      user-select: none;
      transition: opacity 100ms;

      &:hover {
        opacity: 0.7;
      }

      @include sm {
        padding-top: 17px;
        padding-bottom: 17px;
      }
    }

    &__label {
      flex-grow: 1;
    }

    &__body {
      padding-bottom: 25px;

      @include sm {
        padding-bottom: 18px;
      }
    }
  }
</style>
