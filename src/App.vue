<template>
  <Suspense>
    <div class="app">
      <notifications />
      <Index />
    </div>
  </Suspense>
</template>

<script setup>
  import Index from './Index.vue';
</script>
