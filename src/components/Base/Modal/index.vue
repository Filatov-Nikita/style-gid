<template>
  <teleport to="body">
    <div class="base-dialog" v-bind="$attrs" v-if="modelValue">
      <div class="base-dialog__wrap">
        <slot />
      </div>
      <div class="overlay" @click="$emit('update:modelValue', false)"></div>
    </div>
  </teleport>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    modelValue: {
      default: false,
      type: Boolean,
    },
  },
  emits: ['update:modelValue'],
  watch: {
    modelValue: {
      handler(newVal) {
        if(newVal) {
          document.body.classList.add('tw-overflow-hidden');
        } else {
          document.body.classList.remove('tw-overflow-hidden');
        }
      },
      immediate: true,
    },
  }
};
</script>


<style lang="scss">
.base-dialog__wrap > div {
  overflow: auto;
  pointer-events: all;
  will-change: scroll-position;
  max-height: calc(100vh - 160px);

  @include sm {
    max-height: calc(100vh - 120px);
  }
}
</style>

<style scoped lang="scss">
.base-dialog {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 2000;

  &__wrap {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 80px 60px;
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    @include sm {
      padding: 60px 20px;
    }
  }
}

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(119, 119, 119, 0.8);
  z-index: -1;
}
</style>
