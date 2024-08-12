<template>
  <Suspense>
    <div class="app">
      <notifications />
      <Header />
      <main>
        <PromoBanner />
        <About />
        <Designers />
        <Order />
        <CommentSlider />
        <Faq />
        <Footer />
      </main>
      <AuthModal v-model:showed="auth.showedModal.value" @auth:completed="auth.onComplete" />
    </div>
  </Suspense>
</template>

<script setup>
  import Header from '@/components/Header.vue';
  import PromoBanner from '@/components/PromoBanner.vue';
  import About from '@/components/About.vue';
  import Designers from '@/components/Designers.vue';
  import Faq from '@/components/Faq.vue';
  import Order from '@/components/Order.vue';
  import Footer from '@/components/Footer.vue';
  import CommentSlider from '@/components/Comments/Slider/index.vue';
  import AuthModal from '@/components/Auth/Modal.vue';
  import { init as initAuth } from '@/composables/useAuth';

  const auth = initAuth();
</script>
