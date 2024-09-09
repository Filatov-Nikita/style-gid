<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__wrap">
        <div class="footer__body">
          <div class="footer__texts">
            <p class="footer__text">ТРЦ «Планета»</p>
            <p class="footer__text">г. Уфа, ул. Энтузиастов, 20</p>
          </div>
          <a class="footer__logo" :href="links.site" target="_blank">
            <img width="178" height="43" src="@/assets/images/logo.svg" alt="Логотип Планета">
          </a>
        </div>
        <div class="footer__social">
          <a class="soc-one" :href="links.vk" target="_blank">
            <BaseIcon class="tw-w-full tw-h-full" name="social-vk" />
          </a>
          <a class="soc-one" :href="links.ok" target="_blank">
            <BaseIcon class="tw-w-full tw-h-full" name="social-ok" />
          </a>
          <a class="soc-one" :href="links.rutube" target="_blank">
            <BaseIcon class="tw-w-full tw-h-full" name="social-rut" />
          </a>
          <a class="soc-one" :href="links.tg" target="_blank">
            <BaseIcon class="tw-w-full tw-h-full" name="social-tg" />
          </a>
          <a class="soc-one" :href="links.youtube" target="_blank">
            <BaseIcon class="tw-w-full tw-h-full" name="social-you" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  const links = {
    vk: 'https://vk.com/trc_planeta_ufa',
    ok: 'https://ok.ru/group/57048741838907',
    tg: 'https://t.me/trc_planeta_ufa',
    youtube: 'https://www.youtube.com/channel/UCwQ9kwTOFChkJKrMOMqJ-pg',
    rutube: 'https://rutube.ru/channel/24694861/',
    site: 'https://ufa.planeta-mall.ru/?_ga=2.62712108.180402865.1712321649-981609577.1700226663',
  };
</script>

<style scoped lang="scss">
  .footer {
    &__texts {
      @include sm {
        width: 100%;
      }
    }

    &__wrap {
      padding-top: 120px;
      padding-bottom: 90px;

      @include sm {
        padding-top: 70px;
        padding-bottom: 50px;
      }
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

      @include sm {
        gap: 20px;
      }
    }

    &__social {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    &__logo {
      width: 222px;

      @include sm {
        order: -1;
        width: 210px;
      }

      img {
        width: 100%;
      }
    }
  }

  .soc-one {
    width: 32px;
    height: 32px;

    &:hover {
      opacity: 0.7;
    }
  }
</style>
