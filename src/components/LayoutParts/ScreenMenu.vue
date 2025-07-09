<template>
  <Teleport to="body">
    <Transition name="nav-anim">
      <div class="mobile-nav" v-if="showed">
        <div class="wrapper">
          <div class="mobile-nav__header">
            <a href="https://ufa.planeta-mall.ru/" class="mobile-nav__logo-wrap" target="_blank">
              <img src="@/assets/images/logo.svg" width="178" height="43" alt="Логотип Планета">
            </a>
            <button class="mobile-nav__close" @click="$emit('close')">
              <BaseIcon class="tw-w-full tw-h-full" name="close" color="#151515" />
            </button>
          </div>
          <ul class="mobile-nav__nav">
            <li
              class="mobile-nav__item"
              v-for="link in links"
            >
              <a class="mobile-nav__link" :href="link.href" @click.prevent="$scroll.onShowView($event); emit('close')">
                {{ link.mobileLabel ?? link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
  defineProps({
    showed: {
      default: false,
      type: Boolean,
    },
    links: {
      required: true,
      type: Array,
    }
  });

  const emit = defineEmits([ 'close' ]);
</script>

<style scoped lang="scss">
  .nav-anim {
    &-enter-from {
      opacity: 0;
    }

    &-enter-active {
      transition: opacity 300ms;
    }

    &-leave-active {
      transition: opacity 300ms;
      opacity: 0;
    }
  }

 .mobile-nav {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9000;
    overflow-x: hidden;
    left: 0px;
    top: 0px;
    @apply tw-bg-white;

    &__logo-wrap {
      width: 121px;

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

      @include md {
        padding: 20px 0;
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
