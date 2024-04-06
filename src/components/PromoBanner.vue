<template>
  <div class="promo-banner">
    <div class="">
      <div class="promo-banner__wrap">
        <div class="promo-banner__left">
          <h1 class="h1 promo-banner__title">Ваш гид по&nbsp;стилю</h1>
          <p class="promo-banner__subtitle">Меняйся вместе с&nbsp;Планетой</p>
          <BaseButton theme="white" @click="scrollToBlock">Записаться</BaseButton>
        </div>
        <div class="promo-banner__right">
          <img class="promo-banner__img" src="@/assets/images/head-banner.jpg" width="1022" height="878" alt="Стильная девушка" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  function scrollToBlock() {
    const el = document.querySelector('#order');
    if(!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<style scoped lang="scss">
  .promo-banner {
    @apply tw-bg-black;

    &__left {
      padding: 70px 30px;
      text-align: center;
      flex-basis: 750px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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
      flex-grow: 1;
      max-width: 850px;

      @include lg {
        flex-basis: 470px;
      }

      @include sm {
        flex-basis: 100%;
      }
    }

    &__wrap {
      display: flex;
      justify-content: space-between;
      max-width: 1920px;
      margin: 0 auto;

      @include sm {
        display: block;
      }
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-height: 700px;
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
