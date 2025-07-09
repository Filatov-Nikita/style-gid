<template>
  <header class="header">
    <div class="wrapper">
      <div class="header__wrap">
        <a href="https://ufa.planeta-mall.ru/" class="header__logo-wrap" target="_blank">
          <img src="@/assets/images/logo.svg" width="121" height="40" alt="Логотип Планета">
        </a>
        <button class="header__burger" @click="showedMobile = !showedMobile">
          <BaseIcon class="tw-w-full tw-h-full" name="burger" color="#3B3B3B" />
        </button>
        <nav class="header__nav">
          <a
            class="header__link"
            v-for="link in navLinks"
            :href="link.href"
            @click.prevent="$scroll.onShowView"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </div>
    <ScreenMenu :showed="showedMobile" @close="close" :links="navLinks" />
  </header>
</template>

<script setup>
  import { ref, watch } from 'vue';
  import ScreenMenu from '@/components/LayoutParts/ScreenMenu.vue';

  const navLinks = [
    {
      label: 'Об услуге',
      href: '#about',
    },
    {
      label: 'Наши стилисты',
      href: '#designers',
    },
    {
      label: 'Запись',
      mobileLabel: 'Запись на услугу',
      href: '#order',
    },
    {
      label: 'Вопросы-ответы',
      href: '#faq',
    }
  ];

  const showedMobile = ref(false);

  function close() {
    showedMobile.value = false;
  }

  function toggleScroll(val) {
    const className = 'tw-overflow-hidden';
    if(val) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }

  watch(showedMobile, (val) => {
    toggleScroll(val);
  });
</script>

<style scoped lang="scss">
  .header {
    &__logo-wrap {
      width: 121px;

      &:hover {
        opacity: 0.7;
      }

      img {
        width: 100%;
      }
    }

    &__wrap {
      padding: 30px 0px;
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: space-between;
      align-items: center;

      @include md {
        padding: 20px 0;
      }
    }

    &__nav {
      display: flex;
      flex-wrap: wrap;
      gap: 50px;

      @include md {
        display: none;
      }
    }

    &__link {
      &:hover {
        text-decoration: underline;
      }
    }

    &__burger {
      display: none;
      width: 32px;
      height: 32px;

      @include md {
        display: block;
      }
    }
  }
</style>
