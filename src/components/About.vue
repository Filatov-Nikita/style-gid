<template>
  <section class="about-block" id="about">
    <div class="wrapper">
      <div class="about-block__wrap">
        <div class="about-block__left">
          <h2 class="h2">Об услуге</h2>
        </div>
        <div class="about-block__right">
          <p class="about-block__text1">{{ text1 }}</p>
          <p class="about-block__text2">{{ text2 }}</p>
          <p class="about-block__text3">{{ text3 }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const text1 = 'В ТРЦ «Планета» гости смогут бесплатно получить услугу персонального стилиста. Профессионал подберет несколько модных образов, будет сопровождать гостя во время шопинга и помогать с выбором одежды, обуви или аксессуаров.';
  const text2 = 'УСЛУГА БЕСПЛАТНАЯ';
  const text3 = 'Для получения услуги необходимо предварительно записаться.';
</script>

<style scoped lang="scss">
  .about-block {
    --gap-x: 50px;
    --gap-y: 20px;
    --col-width: 50%;

    @include lg {
      --col-width: 100%;
    }

    @include sm {
      --gap-y: 16px;
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      column-gap: var(--gap-x);
      row-gap: var(--gap-y);
    }

    &__left {
      width: calc(var(--col-width) - (var(--gap-x) / 2));
    }

    &__right {
      width: calc(var(--col-width) - (var(--gap-x) / 2));
    }

    &__text1 {
      margin-bottom: 40px;

      @include sm {
        margin-bottom: 30px;
      }
    }

    &__text1, &__text3 {
      line-height: 1.35;
      @apply tw-text-24;

      @include sm {
        @apply tw-text-20;
      }
    }

    &__text2 {
      line-height: 1.35;
      margin-bottom: 10px;
      font-size: 24px;
      @apply tw-font-druk tw-font-bold;

      @include sm {
        font-size: 20px;
      }
    }
  }
</style>
