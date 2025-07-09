<template>
  <div class="promo-banner">
    <div class="wrapper">
      <div class="promo-banner__content">
        <div class="promo-banner__label">Гид<br/>по стилю</div>
        <h1 class="promo-banner__title"><span class="tw-uppercase">Шопинг</span><br>со стилистом<br>бесплатно</h1>
        <div class="promo-banner__action-wrap">
          <BaseButton class="promo-banner__action" @click="$order.show">Записаться</BaseButton>
        </div>
      </div>
      <div class="promo-banner__photo-wrap">
        <img class="promo-banner__img" src="@/assets/images/woman.png" width="720" height="666" alt="Стильная девушка" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
  .promo-banner {
    padding-top: 32px;
    background: linear-gradient(180deg, #abacae 21.2%, #b9babe 55.46%);

    &__title {
      font-size: 20px;
      text-transform: uppercase;
      line-height: 1.15;
      margin-bottom: 24px;
      @apply tw-font-druk tw-font-bold tw-text-white;
    }

    &__label {
      text-transform: uppercase;
      font-size: 34px;
      line-height: 1.15;
      margin-bottom: 20px;
      @apply tw-font-druk tw-font-bold tw-text-black2;
    }

    &__photo-wrap {
      margin: 0 -16px;
    }

    &__img {
      max-width: 550px;
      width: 100%;
    }

    &__content {
      margin-bottom: 20px;
    }

    &__action {
      font-size: 16px !important;
    }
  }
</style>
