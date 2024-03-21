<template>
  <div class="promo-banner">
    <div class="wrapper">
      <div class="promo-banner__wrap">
        <div class="promo-banner__left">
          <h1 class="promo-banner__title">Ваш гид по стилю</h1>
          <p class="promo-banner__subtitle">Меняйся вместе с Планетой</p>
          <BaseButton theme="white">Записаться</BaseButton>
        </div>
        <div class="promo-banner__right">
          <img class="promo-banner__img" src="@/assets/images/head-banner.jpg" width="1022" height="878" alt="Стильная девушка" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .promo-banner {
    @apply tw-bg-black;

    &__left {
      padding-top: 84px;
      padding-bottom: 156px;
      text-align: center;
      flex-basis: 550px;
      @apply tw-text-white;
    }

    &__right {
      flex-basis: 681px;
      margin-right: -30px;
    }

    &__wrap {
      display: flex;
      justify-content: space-between;
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__title {
      max-width: 441px;
      margin: 0 auto;
      margin-bottom: 22px;
      line-height: 1.15;
      @apply tw-text-80 tw-font-noto tw-uppercase;
    }

    &__subtitle {
      line-height: 1.35;
      margin-bottom: 50px;
      @apply tw-font-light tw-text-24;
    }
  }
</style>
