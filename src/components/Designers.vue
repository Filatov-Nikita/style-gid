<template>
  <section class="designer-block" id="designers">
    <div class="wrapper">
      <div class="designer-block__wrap">
        <h2 class="h1 designer-block__title">
          Наши стилисты
        </h2>
        <PersonSlider :persons="list" />
      </div>
    </div>
  </section>
</template>

<script setup>
  import PersonSlider from './PersonSlider.vue';
  import { list } from '@/data/designers';
</script>

<style scoped lang="scss">
  .designer-block {
    &__wrap {
      padding-top: 70px;
      padding-bottom: 70px;

      @include sm {
        padding-top: 35px;
        padding-bottom: 35px;
      }
    }

    &__title {
      margin-bottom: 40px;

      @include sm {
        margin-bottom: 20px;
      }
    }
  }
</style>
