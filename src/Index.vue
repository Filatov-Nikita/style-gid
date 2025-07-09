<template>
  <div class="app">
    <Header />
    <main>
      <PromoBanner v-if="grid.md" class="section-banner" />
      <PromoBannerMobile v-if="!grid.md" class="section-banner-mobile" />
      <About class="section-about" />
      <Designers class="section-designers" />
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
