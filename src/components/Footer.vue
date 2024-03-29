<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__wrap">
        <div class="footer__body">
          <div class="footer__texts">
            <p class="footer__text">ТРЦ «Планета»</p>
            <p class="footer__text">г. Уфа, ул. Энтузиастов, 20</p>
          </div>
          <a class="footer__logo" href="#">
            <img width="178" height="43" src="@/assets/images/logo.svg" alt="Логотип Планета">
          </a>
        </div>
        <div class="footer__social">
          <a class="soc-one" href="#" target="_blank">
            <BaseIcon class="tw-w-full tw-h-full" name="social-vk" />
          </a>
          <a class="soc-one" href="#" target="_blank">
            <BaseIcon class="tw-w-full tw-h-full" name="social-ok" />
          </a>
          <a class="soc-one" href="#" target="_blank">
            <BaseIcon class="tw-w-full tw-h-full" name="social-rut" />
          </a>
          <a class="soc-one" href="#" target="_blank">
            <BaseIcon class="tw-w-full tw-h-full" name="social-tg" />
          </a>
          <a class="soc-one" href="#" target="_blank">
            <BaseIcon class="tw-w-full tw-h-full" name="social-you" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .footer {
    &__wrap {
      padding-top: 120px;
      padding-bottom: 90px;
    }

    &__text {
      line-height: 1.35;
      @apply tw-text-20 tw-font-medium;

      & + & {
        margin-top: 5px;
      }
    }

    &__body {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 30px;
      margin-bottom: 26px;
    }

    &__social {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    &__logo {
      width: 222px;

      img {
        width: 100%;
      }
    }
  }

  .soc-one {
    width: 32px;
    height: 32px;
  }
</style>
