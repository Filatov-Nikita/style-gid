<template>
  <div class="promo-banner">
    <div class="wrapper">
      <div class="promo-banner__wrap">
        <div class="promo-banner__left">
          <h1 class="h1 promo-banner__title">Ваш гид по стилю</h1>
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

      @include lg {
        flex-basis: 500px;
      }

      @include sm {
        flex-basis: 100%;
        padding-top: 48px;
        padding-bottom: 48px;
      }
    }

    &__right {
      flex-basis: 681px;
      margin-right: -30px;

      @include lg {
        flex-basis: 470px;
      }

      @include sm {
        flex-basis: 100%;
        margin-right: -20px;
        margin-left: -20px;
      }
    }

    &__wrap {
      display: flex;
      justify-content: space-between;

      @include lg {
        gap: 30px;
      }

      @include sm {
        display: block;
      }
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

      @include sm {
        max-width: 320px;
        margin-bottom: 16px;
      }
    }

    &__subtitle {
      line-height: 1.35;
      margin-bottom: 50px;
      @apply tw-font-light tw-text-24;

      @include sm {
        margin-bottom: 30px;
        @apply tw-text-18;
      }
    }
  }
</style>
