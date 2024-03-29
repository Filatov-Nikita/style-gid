<template>
  <div class="app">
    <Header />
    <main>
      <PromoBanner />
      <About />
      <Designers />
      <Order />
      <Faq />
      <Footer />
    </main>
  </div>
</template>

<script setup>
  import Header from '@/components/Header.vue';
  import PromoBanner from '@/components/PromoBanner.vue';
  import About from '@/components/About.vue';
  import Designers from '@/components/Designers.vue';
  import Faq from '@/components/Faq.vue';
  import Order from '@/components/Order.vue';
  import Footer from '@/components/Footer.vue';
</script>
