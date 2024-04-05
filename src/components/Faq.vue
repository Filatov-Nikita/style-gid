<template>
  <section class="faq-block" id="faq">
    <div class="wrapper">
      <div class="faq-block__wrap">
        <h2 class="h1 faq-block__title">Вопросы-ответы</h2>
        <div>
          <AccordItem class="faq-accord" v-for="item in list">
            <template #label>
              <span class="faq-accord__label">{{ item.label }}</span>
            </template>
            <span class="faq-accord__body" v-html="item.body"></span>
          </AccordItem>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import AccordItem from './Base/Accordion/Item.vue';
  import { list } from '@/data/faq';
</script>

<style scoped lang="scss">
  .faq-block {
    @apply tw-bg-black;

    &__wrap {
      max-width: 950px;
      margin-left: auto;
      margin-right: auto;
      padding-top: 70px;
      padding-bottom: 103px;

      @include sm {
        padding-top: 50px;
        padding-bottom: 70px;
      }
    }

    &__title {
      margin-bottom: 26px;
      @apply tw-text-center tw-text-white;

      @include sm {
        margin-bottom: 20px;
      }
    }
  }

  .faq-accord {
    line-height: 1.35;
    @apply tw-text-white;

    &__label {
      @apply tw-text-22 tw-font-semibold;

      @include sm {
        @apply tw-text-18;
      }
    }

    &__body {
      @apply tw-text-18;

      @include sm {
        @apply tw-text-16;
      }
    }
  }
</style>
