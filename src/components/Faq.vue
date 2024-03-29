<template>
  <section class="faq-block" id="faq">
    <div class="faq-block__wrap">
      <h2 class="h1 faq-block__title">Вопросы-ответы</h2>
      <div>
        <AccordItem class="tw-text-white">
          <template #label>
            <span class="tw-text-22 tw-font-semibold">
              В случае, если я не совершу покупки, я должен оплатить услугу?
              В случае, если я не совершу покупки, я должен оплатить услугу?
              В случае, если я не совершу покупки, я должен оплатить услугу?
            </span>
          </template>
          <span class="tw-text-18">
            Нет, но мы убедительно просим обращаться к стилистам только с реальным запросом.
            Нет, но мы убедительно просим обращаться к стилистам только с реальным запросом.
            Нет, но мы убедительно просим обращаться к стилистам только с реальным запросом.
          </span>
        </AccordItem>
      </div>
    </div>
  </section>
</template>

<script setup>
  import AccordItem from './Base/Accordion/Item.vue';
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
    }

    &__title {
      margin-bottom: 26px;
      @apply tw-text-center tw-text-white;
    }
  }
</style>
