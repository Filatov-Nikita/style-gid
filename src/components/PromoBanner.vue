<template>
  <div class="promo-banner">
    <div class="wrapper">
      <div class="promo-banner__body">
        <div class="promo-banner__photo-wrap">
          <img class="promo-banner__img" src="@/assets/images/main-banner.jpg" width="1922" height="948" alt="Стильная девушка" />
        </div>
        <div class="promo-banner__content">
          <div class="promo-banner__content-wrap">
            <h1 class="promo-banner__title"><span class="tw-uppercase">Шопинг</span><br>со стилистом<br>бесплатно</h1>
            <div v-if="grid.lg" class="promo-banner__action-wrap">
              <BaseButton @click="$order.show">Записаться</BaseButton>
            </div>
          </div>
        </div>
      </div>
      <div v-if="grid.md && !grid.lg" class="promo-banner__action-wrap">
        <BaseButton @click="$order.show">Записаться</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
  import useAppGrid from '@/composables/useAppGrid';

  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .promo-banner {
    &__title {
      font-size: min(2.36vw, 45px);
      text-transform: uppercase;
      line-height: 1.15;
      @apply tw-font-druk tw-font-bold tw-text-white;
    }

    &__body {
      position: relative;
    }

    &__content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      z-index: 1;
      padding-right: 80px;

      @include md {
        padding-right: 40px;
      }
    }

    &__action-wrap {
      margin-top: 40px;

      @include md {
        margin-top: 30px;
      }
    }
  }
</style>
