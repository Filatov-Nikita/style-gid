<template>
  <section class="designer-block" id="designers">
    <div class="wrapper">
      <div class="designer-block__wrap">
        <h2 class="h2 designer-block__title">
          Наши стилисты
        </h2>
        <PersonSlider :designers="designers" />
      </div>
    </div>
  </section>
</template>

<script setup>
  import PersonSlider from './PersonSlider.vue';

  const props = defineProps({
    designers: {
      required: true,
      type: Array,
    },
  });
</script>

<style scoped lang="scss">
  .designer-block {
    &__title {
      margin-bottom: 40px;

      @include sm {
        margin-bottom: 20px;
      }
    }
  }
</style>
