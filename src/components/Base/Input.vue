<template>
  <div class="base-input">
    <label class="base-input__label" :for="_id">{{ label }}</label>
    <input
      class="base-input__input"
      :id="_id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :data-maska="maska"
      v-maska="maskObject"
      v-model="value"
    />
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { vMaska } from 'maska';

  const props = defineProps({
    type: {
      default: 'text',
      type: String,
    },
    name: {
      default: undefined,
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
    maska: {
      default: undefined,
      type: String,
    }
  });

  const value = defineModel({ default: '' });

  const maskObject = defineModel('maskObject', { default: undefined });

  const _id = computed(() => {
    return props.id ?? '_input_' + Math.random().toString();
  });
</script>

<style scoped lang="scss">
  .base-input {
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
