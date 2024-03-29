<template>
  <header class="header">
    <div class="wrapper">
      <div class="header__wrap">
        <a href="#" class="hedaer__logo-wrap">
          <img src="@/assets/images/logo.svg" width="178" height="43" alt="Логотип Планета">
        </a>
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
</template>

<script setup>
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
      href: '#order',
    },
    {
      label: 'Вопросы-ответы',
      href: '#faq',
    }
  ];
</script>

<style scoped lang="scss">
  .header {
    &__logo-wrap {
      width: 178px;

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
    }

    &__nav {
      display: flex;
      flex-wrap: wrap;
      gap: 50px;
    }

    &__link {}
  }
</style>
