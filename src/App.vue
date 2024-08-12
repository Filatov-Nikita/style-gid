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
</script>
