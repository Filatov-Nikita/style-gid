<template>
  <div class="base-textarea">
    <label class="base-textarea__label" :for="_id">{{ label }}</label>
    <textarea :id="_id" class="base-textarea__input" :name="name" v-model="value" :placeholder="placeholder"></textarea>
  </div>
</template>

<script setup>
  import useId from '@/composables/useId';
  import { toRef } from 'vue';

  const props = defineProps({
    name: {
      default: undefined,
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
    id: {
      default: undefined,
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
    placeholder: {
      default: undefined,
      type: String,
    },
  });

  const value = defineModel({ default: '' });
  const { id: _id } = useId(toRef(props, 'id'));
</script>

<style scoped lang="scss">
  .base-textarea {
    &__label {
      display: block;
      width: 100%;
      font-size: 16px;
      line-height: 1.2;
      margin-bottom: 8px;
      @apply tw-text-black tw-font-medium;
    }

    &__input {
      display: block;
      width: 100%;
      border: 1px solid #C3C3C3;
      height: 50px;
      padding: 8px 16px;
      min-height: 100px;
      @apply tw-text-16 tw-text-black;

      &:hover {
        @apply tw-border-black;
      }

      &:focus {
        @apply tw-border-black;
      }
    }
  }
</style>
