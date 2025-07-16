<template>
  <div class="app">
    <Header />
    <main>
      <PromoBanner v-if="grid.md" class="section-banner" />
      <PromoBannerMobile v-if="!grid.md" class="section-banner-mobile" />
      <About class="section-about" />
      <Designers class="section-designers" :designers="designers" />
      <Order class="section-order"
        :designers="designers"
        :loading="loading"
        @finish="send"
      />
      <CommentSlider class="section-comments" :designers="designers" />
      <Faq class="section-faq" />
      <Footer class="section-footer" />
    </main>
    <AuthModal v-model:showed="auth.showedModal.value" @auth:completed="auth.onComplete" />
  </div>
</template>

<script setup>
  import Header from '@/components/Header.vue';
  import PromoBanner from '@/components/PromoBanner.vue';
  import PromoBannerMobile from '@/components/PromoBannerMobile.vue';
  import About from '@/components/About.vue';
  import Designers from '@/components/Designers.vue';
  import Faq from '@/components/Faq.vue';
  import Order from '@/components/Order.vue';
  import Footer from '@/components/Footer.vue';
  import CommentSlider from '@/components/Comments/Slider/index.vue';
  import AuthModal from '@/components/Auth/Modal.vue';
  import useRequest from '@/composables/useRequest';
  import useAppGrid from '@/composables/useAppGrid';
  import * as designersAPI from '@/http/designers';
  import { init as initAuth } from '@/composables/useAuth';
  import { computed } from 'vue';

  const grid = useAppGrid();
  const auth = initAuth();

  const { data, loading, send } = await useRequest(designersAPI.all, {
    errorMessage: 'Не удалось загрузить данные!'
  });

  const designers = computed(() => data.value.results ?? []);
</script>

<style scoped lang="scss">
  .section-banner {
    padding-bottom: 60px;

    @include md {
      padding-bottom: 40px;
    }
  }

  .section-banner-mobile {
      margin-bottom: 40px;
  }

  .section-about {
    padding: 60px 0 70px;

    @include md {
      padding: 40px 0 40px;
    }
  }

  .section-faq {
    padding: 70px 0 100px;

    @include md {
      padding: 40px 0 70px;
    }
  }

  .section-comments {
    padding: 70px 0 80px;

    @include md {
      padding: 40px 0 60px;
    }
  }

  .section-footer {
    padding: 60px 0;

    @include md {
      padding: 40px 0;
    }
  }

  .section-order {
    padding: 70px 0;

    @include md {
      padding: 40px 0;
    }
  }

  .section-designers {
    padding: 70px 0;

    @include md {
      padding: 40px 0;
    }
  }
</style>
