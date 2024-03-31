<template>
  <div class="tw-relative app-select-cmp">
    <div class="app-select" @click="showed = !showed">
      <div class="app-select__label">{{ label }}</div>
      <div class="app-select__wrap">
        <span class="app-select__val">{{ currentText }}</span>
        <span class="app-select__icon-wrap" :class="{ 'app-select__icon-wrap--closed': !showed }">
          <BaseIcon class="tw-w-full tw-h-full"name="select-up" color="#C3C3C3" />
        </span>
      </div>
    </div>
    <div class="app-dropdown" v-if="showed">
      <div
        class="app-option"
        :class="{ 'app-option--active': model === option.value }"
        v-for="option in options"
        @click="onClick(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted, onUnmounted, ref } from 'vue';

  const model = defineModel();

  const props = defineProps({
    options: {
      required: true,
      type: Array,
    },
    emptyLabel: {
      required: true,
      type: String,
    },
    label: {
      required: true,
      type: String,
    }
  });

  const showed = ref(false);

  function findOpt(value) {
    return props.options.find(opt => opt.value === value);
  }

  const currentText = computed(() => {
    return model.value ?
        findOpt(model.value)?.label ?? props.emptyLabel
      : props.emptyLabel;
  });

  function onClick(opt) {
    model.value = opt.value;
    showed.value = false;
  }

  function onOutside(e) {
    if(!e.target.closest('.app-select-cmp')) {
      showed.value = false;
    }
  }

  onMounted(() => {
    document.body.addEventListener('click', onOutside);
  });

  onUnmounted(() => {
    document.body.removeEventListener('click', onOutside);
  });
</script>

<style scoped lang="scss">
  .app-select {
    &__label {

    }

    &__wrap {
      border: 1px solid #C3C3C3;
      padding: 20px;
      cursor: pointer;
      user-select: none;
      display: flex;
      align-items: center;

      @include sm {
        padding: 12px 20px;
      }
    }

    &__val {
      flex-grow: 1;
      line-height: 1.35;
      @apply tw-text-24;

      @include sm {
        @apply tw-text-20;
      }
    }

    &__icon-wrap {
      width: 20px;
      height: 20px;
      flex-shrink: 0;

      &--closed {
        transform: rotate(180deg);
      }
    }

    &__label {
      margin-bottom: 14px;
      line-height: 1.35;
      @apply tw-text-20;
    }
  }

  .app-dropdown {
    width: 100%;
    max-height: 300px;
    overflow-x: hidden;
    border: 1px solid #C3C3C3;
    padding: 12px;
    position: absolute;
    top: calc(100% + 10px);
    left: 0px;
    z-index: 100;
    @apply tw-bg-white;

    @include sm {
      padding: 8px;
    }
  }

  .app-option {
    cursor: pointer;
    user-select: none;
    padding: 8px;
    line-height: 1.35;
    @apply tw-text-24;

    @include sm {
      padding: 6px;
      @apply tw-text-20;
    }

    &--active {
      @apply tw-font-bold;
    }
  }
</style>
