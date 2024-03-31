<template>
  <section class="about-block" id="about">
    <div class="wrapper">
      <div class="about-block__wrap">
        <div class="about-block__left">
          <h2 class="h1">Об услуге</h2>
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
    &__wrap {
      padding-top: 120px;
      padding-bottom: 80px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      @include lg {
        gap: 20px;
      }

      @include sm {
        padding-top: 70px;
        padding-bottom: 35px;
      }
    }

    &__left {
      flex-basis: 450px;

      @include lg {
        flex-basis: 100%;
      }
    }

    &__right {
      flex-basis: 639px;

      @include lg {
        flex-basis: 100%;
      }
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
      @apply tw-text-30 tw-font-noto tw-font-semibold;

      @include sm {
        font-size: 26px;;
      }
    }
  }
</style>
