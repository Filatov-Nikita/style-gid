<template>
  <header class="header">
    <div class="wrapper">
      <div class="header__wrap">
        <a href="#" class="header__logo-wrap">
          <img src="@/assets/images/logo.svg" width="178" height="43" alt="Логотип Планета">
        </a>
        <button class="header__burger" @click="showedMobile = !showedMobile">
          <BaseIcon class="tw-w-full tw-h-full" name="burger" color="#3B3B3B" />
        </button>
        <nav class="header__nav">
          <a
            class="header__link"
            v-for="link in navLinks"
            :href="link.href"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </div>
  </header>
  <div class="mobile-nav" v-if="showedMobile">
    <div class="wrapper">
      <div class="mobile-nav__header">
        <a href="#" class="mobile-nav__logo-wrap">
          <img src="@/assets/images/logo.svg" width="178" height="43" alt="Логотип Планета">
        </a>
        <button class="mobile-nav__close" @click="showedMobile = false">
          <BaseIcon class="tw-w-full tw-h-full" name="close" color="#151515" />
        </button>
      </div>
      <ul class="mobile-nav__nav">
        <li
          class="mobile-nav__item"
          v-for="link in navLinks"
        >
          <a class="mobile-nav__link" :href="link.href">
            {{ link.mobileLabel ?? link.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue';

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
      width: 178px;

      @include sm {
        width: 132px;
      }

      img {
        width: 100%;
      }
    }

    &__wrap {
      padding: 16px 0px;
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: space-between;
      align-items: center;

      @include sm {
        padding: 12px 0;
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

    &__link {}

    &__burger {
      width: 32px;
      height: 32px;
    }
  }

  .mobile-nav {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 9000;
    overflow-x: hidden;
    left: 0px;
    top: 0px;
    @apply tw-bg-white;

    &__logo-wrap {
      width: 178px;

      @include sm {
        width: 132px;
      }

      img {
        width: 100%;
      }
    }

    &__header {
      padding: 16px 0px;
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 56px;

      @include sm {
        padding: 12px 0px;
      }
    }

    &__close {
      width: 22px;
      height: 22px;
    }

    &__nav {

    }

    &__item {
      & + & {
        margin-top: 26px;
      }
    }

    &__link {
      color: #2D2D2D;
      line-height: 1;
      @apply tw-font-semibold tw-text-20;
    }
  }
</style>
